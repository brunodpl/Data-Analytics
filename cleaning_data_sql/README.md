## Data Cleaning Criteria (FoodYum Products)

| Column Name         | Type       | Description                                                                                               | Missing Values Handling                |
|---------------------|------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------|
| product_id          | Nominal    | The unique identifier of the product.                                                                     | Not possible due to DB structure       |
| product_type        | Nominal    | Product category: Produce, Meat, Dairy, Bakery, Snacks.                                                   | Replace with "Unknown"                 |
| brand               | Nominal    | Brand of the product. One of 7 possible values.                                                           | Replace with "Unknown"                 |
| weight              | Continuous | Weight in grams, any positive value, rounded to 2 decimals.                                               | Replace with overall median weight     |
| price               | Continuous | Price in US dollars, any positive value, rounded to 2 decimals.                                           | Replace with overall median price      |
| average_units_sold  | Discrete   | Average number of units sold each month, positive integer value.                                          | Replace with 0                         |
| year_added          | Nominal    | Year product was first added to FoodYum stock.                                                            | Replace with last year (2022)          |
| stock_location      | Nominal    | Warehouse origin: A, B, C, or D.                                                                          | Replace with "Unknown"                 |


´´´SELECT product_id,

CASE
WHEN product_type IS NULL OR product_type::TEXT = '' OR product_type::TEXT = ' ' OR product_type::TEXT = '-'
	OR LOWER(product_type) NOT IN ('produce', 'meat', 'dairy', 'bakery', 'snacks')
THEN 'Unknown'
ELSE product_type::TEXT
END AS product_type,

CASE
WHEN brand IS NULL OR brand::TEXT = '' OR brand::TEXT = ' ' OR brand::TEXT = '-'
THEN 'Unknown'
ELSE brand::TEXT
END AS brand,

CASE
  WHEN weight IS NULL OR TRIM(weight) = '' OR TRIM(weight) = '-'
    THEN (
      SELECT PERCENTILE_CONT(0.5) WITHIN GROUP 
		(ORDER BY CAST(regexp_replace(weight, '[^0-9.]', '', 'g') AS DECIMAL(10,2)))
      FROM products
      WHERE weight IS NOT NULL 
        AND TRIM(weight) <> '' 
        AND TRIM(weight) <> '-'
    )
  ELSE CAST(regexp_replace(weight, '[^0-9.]', '', 'g') AS DECIMAL(10,2))
END AS weight,

CASE
  WHEN price IS NULL OR TRIM(price::TEXT) = '' OR TRIM(price::TEXT) = '-'
    THEN (
      SELECT PERCENTILE_CONT(0.5) WITHIN GROUP 
		(ORDER BY CAST(regexp_replace(price::TEXT, '[^0-9.]', '', 'g') AS DECIMAL(10,2)))
      FROM products
      WHERE price IS NOT NULL 
        AND TRIM(price::TEXT) <> '' 
        AND TRIM(price::TEXT) <> '-'
    )
  ELSE CAST(regexp_replace(price::TEXT, '[^0-9.]', '', 'g') AS DECIMAL(10,2))
END AS price,

CASE
WHEN average_units_sold IS NULL OR average_units_sold::TEXT = '' OR average_units_sold::TEXT = '-'
THEN 0
ELSE ROUND(average_units_sold, 0)::INTEGER
END AS average_units_sold,

CASE
  WHEN year_added IS NULL 
    OR TRIM(year_added::TEXT) = '' 
    OR TRIM(year_added::TEXT) = '-' 
  THEN 2022
  ELSE CAST(year_added AS INTEGER)
END AS year_added,

CASE
WHEN LOWER(stock_location) NOT IN ('a','b','c','d') OR stock_location IS NULL 
	OR product_type::TEXT = '' OR product_type::TEXT = '-'
THEN 'Unknown'
ELSE UPPER(stock_location)::TEXT
END AS stock_location

FROM products´´´
