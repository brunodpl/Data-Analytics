![GitHub](https://img.shields.io/badge/GitHub-brunodpl-181717?style=for-the-badge&logo=github)
  **[GITHUB](https://github.com/brunodpl)**

  ![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)
  **[LINKEDIN](https://www.linkedin.com/in/brunodelpalaciorodriguez/)**

<!-- ========================= -->
<!-- GitHub Pages Portfolio    -->
<!-- Repo: brunodpl/Data-Analytics -->
<!-- ========================= -->

# Bruno del Palacio Rodríguez — Data Analyst / BI / Dev

Transformo operaciones y datos en decisiones accionables (KPIs, automatización y productos data-driven).

---

## Qué aporto (valor real)

- **Analítica aplicada al negocio**: convierto “problemas operativos” en métricas, hipótesis y mejoras medibles.
- **SQL + BI fuertes**: modelos, consultas complejas y dashboards orientados a decisión.
- **Mentalidad builder**: cuando hace falta, lo convierto en producto (apps, automatización, integraciones).

> Ubicación objetivo: A Coruña (Galicia) · Idiomas: Español / Inglés

---

## 🚀 Proyectos Destacados

### 🤖 Next Best Action (CRM Engine)
**[Ver Proyecto](https://github.com/brunodpl/Next-Best-Action-CRM-Engine)** | `Python` `SQL (DuckDB)` `ETL` `Data Engineering`

Motor CRM diseñado para resolver la fragmentación de datos en entornos retail. Unifica fuentes heterogéneas (Salesforce, ERP/POS, Google Analytics) en una Single Customer View y orquesta acciones de marketing de alto valor mediante reglas de negocio automatizadas.

**Qué resuelve:**
- **Identity Resolution avanzada**: SQL complejo en DuckDB para fusionar tráfico web anónimo con datos transaccionales identificados.
- **ETL de alto rendimiento**: feature engineering (métricas RFM, riesgo de churn, abandono de carrito) directamente en SQL, logrando 10x mejor performance vs. flujos Pandas tradicionales.
- **Capa de lógica de negocio**: reglas de "Next Best Action" sobre scoring de propensión para optimizar ROI (gestión de urgencia de stock vs. preservación de margen).
- **Gestión realista de calidad**: diseñado específicamente para manejar problemas típicos de entornos enterprise (desajustes de timezone, duplicados, claves NULL).

**Stack técnico**: Python, DuckDB, SQL, Pandas, Pipelines ETL, Lógica de automatización de marketing

**Valor demostrado**: capacidad para diseñar arquitecturas de datos end-to-end que unifican silos y generan acciones automáticas basadas en datos limpios y enriquecidos.

---

### 📦 EasyStock (SaaS Multi-Tenant para Gestión de Inventario)
**Repositorio privado** | `Next.js 15` `Supabase` `PostgreSQL` `TypeScript` `n8n` `OpenAI APIs`

Plataforma SaaS que digitaliza operaciones de inventario para PyMEs, con enfoque en automatización voice-first y seguridad enterprise-grade.

**Qué resuelve:**
- **Automatización de entrada de datos**: comandos de voz (OpenAI Whisper) + OCR inteligente (GPT-4 Vision) reducen la captura manual en un 95%.
- **Aislamiento de datos nivel bancario**: arquitectura multi-tenant con Row-Level Security (RLS) en PostgreSQL, garantizando que cada cliente solo acceda a sus propios datos.
- **Workflows automáticos**: integración con n8n para orquestar alertas, reposiciones y sincronización con ERPs externos sin intervención manual.
- **Escalabilidad elástica**: diseño serverless (Supabase Edge Functions + Next.js) que permite pasar de 1 a miles de tenants sin reconfiguración.

**Características destacadas**:
- Dashboard operativo con health scoring (0-100) del estado del almacén
- Sistema de alertas multinivel (críticas/atención/informativas)
- Procesamiento de documentos: albaranes → OCR → validación → inserción automática en BD
- Interface minimalista orientada a flujos de 3 clics o menos

**Stack técnico**: Next.js 15 (App Router), React 19, Supabase (PostgreSQL + Realtime), TypeScript, TailwindCSS, n8n, OpenAI Whisper/GPT-4 Vision

**Valor demostrado**: capacidad full-stack para construir productos SaaS complejos con foco en arquitectura segura, UX accesible y automatización inteligente. El proyecto muestra comprensión de multi-tenancy, integración de IA aplicada y monetización SaaS.

*(Demo disponible bajo solicitud)*

---

### 🍎 Apple Retail SQL Analysis
**[Ver Proyecto](https://github.com/brunodpl/apple_retail_sql_project)** | `SQL` `PostgreSQL` `Business Intelligence`

Análisis exploratorio exhaustivo de rendimiento de tiendas retail Apple a nivel global, utilizando exclusivamente SQL para extraer insights accionables.

**Qué resuelve:**
- **Identificación de patrones de éxito**: análisis de 100+ tiendas worldwide para descubrir qué factores correlacionan con alto rendimiento.
- **Insights contraintuitivos**: los accesorios generan más revenue que iPhones en las tiendas top-performing; el éxito se correlaciona con volumen de ventas, no con mix de productos.
- **KPIs operacionales**: cálculo de ratios de reclamación de garantía, distribución de productos premium, rotación de inventario.
- **SQL avanzado**: uso de CTEs, window functions, agregaciones complejas y subconsultas para responder preguntas de negocio sin herramientas externas.

**Stack técnico**: PostgreSQL, SQL puro, Análisis exploratorio de datos

**Valor demostrado**: dominio de SQL como herramienta de análisis end-to-end, capacidad para traducir preguntas de negocio en queries complejos y extraer insights sin dependencias de BI tools.

---

### 🛡️ DEX Market Integrity (Speedrun Analytics POC)
**[Ver Proyecto](https://github.com/brunodpl/dex_crypto_market_integrity_speedrun)** | `Python` `Machine Learning` `Time Series` `Forecasting`

Proof of Concept desarrollado en **menos de 4 horas** para vigilancia de mercados P2P descentralizados. Demuestra capacidad de prototipado rápido y pensamiento analítico bajo presión.

**Qué resuelve:**
- **Detección de anomalías en tiempo real**: monitoreo automatizado para wash trading y manipulación de precios (alertas cuando spread > 10%).
- **Forecasting de liquidez**: modelo basado en Prophet para predecir volatilidad y optimizar estrategias de market making.
- **Clustering de riesgos**: identificación de 3 clusters de comportamiento distintos en ofertas P2P mediante ML no supervisado.
- **Desarrollo ultrarrápido**: MVP completo desde concepto hasta visualización en una sesión de trabajo.

**Implementación técnica**:
- Generación de datos sintéticos con inyección realista de anomalías
- Análisis de spread entre ofertas P2P y precios de referencia globales (Binance/CoinGecko)
- Forecasting de series temporales con Facebook Prophet para predicción de volatilidad
- Arquitectura escalable preparada para upgrade con XGBoost + features on-chain

**Stack técnico**: Python, Pandas, Prophet, yfinance, scikit-learn, Seaborn, Matplotlib

**Valor demostrado**: capacidad de ejecutar análisis completo end-to-end en timeframe reducido, pensamiento crítico para diseño de features relevantes, y habilidad para comunicar insights técnicos mediante visualizaciones.

---

### ⚡ Nuclear Energy Consumption Analysis
**[Ver Proyecto](https://github.com/brunodpl/nuclear_energy_consumption)** | `Python` `Jupyter` `EDA` `Data Visualization`

Análisis exploratorio de patrones globales de consumo de energía nuclear, con foco en tendencias temporales y comparativas regionales.

**Qué resuelve:**
- **Análisis de series temporales**: evolución del consumo nuclear por región a lo largo de décadas.
- **Comparativas geográficas**: identificación de países líderes y análisis de dependencia energética.
- **Storytelling con datos**: transformación de datasets complejos en narrativas visuales comprensibles.
- **Documentación técnica**: notebooks Jupyter bien estructurados que combinan código, análisis y explicaciones.

**Stack técnico**: Python, Pandas, Matplotlib, Seaborn, Jupyter Notebooks

**Valor demostrado**: capacidad para realizar análisis exploratorio exhaustivo, crear visualizaciones efectivas y comunicar hallazgos de manera clara. Demuestra pensamiento crítico aplicado a datos del mundo real.

---

## Skills (en el día a día)

**Data / BI**
- SQL (PostgreSQL / Snowflake): modelado, CTEs, ventanas, calidad de datos.
- Power BI: modelado, KPIs, dashboards para negocio.
- Python: EDA, limpieza, features, ML básico.

**Producto / Dev**
- Next.js / React / TypeScript (cuando el entregable es una app).
- Supabase / PostgreSQL (incl. políticas tipo RLS en contextos multi-tenant).
- Automatización con n8n (workflows y conectores).

---
## 🛠️ Stack Técnico

### Data & Analytics
![SQL](https://img.shields.io/badge/SQL-Advanced-4479A1?style=flat-square&logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=flat-square&logo=powerbi&logoColor=black)
![Snowflake](https://img.shields.io/badge/Snowflake-29B5E8?style=flat-square&logo=snowflake&logoColor=white)
![Excel](https://img.shields.io/badge/Excel_VBA-217346?style=flat-square&logo=microsoftexcel&logoColor=white)

### Development
![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Java Spring](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)

### Data Engineering & MLOps
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?style=flat-square&logo=openai&logoColor=white)

### Tools
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)

## Contacto

[![Email](https://img.shields.io/badge/Email-Contact_Me-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:brunoisdpl@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-brunodpl-181717?style=for-the-badge&logo=github)](https://github.com/brunodpl)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/brunodelpalaciorodriguez/)


