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
