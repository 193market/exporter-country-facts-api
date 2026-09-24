# Exporter Country Facts API

OECD country risk grade, UK Export Finance cover, MIGA exposure, governance and macro facts per country, one call.

**Try it (free tier for evaluation):** [https://rapidapi.com/193market/api/exporter-country-facts](https://rapidapi.com/193market/api/exporter-country-facts) · also on [api.market](https://api.market/store/193market/exporter-country-facts)

One call per country for exporters and credit teams: OECD country risk grade and its latest change, UK Export Finance cover policy, MIGA guarantee exposure, governance and macro indicators, and Enterprise Survey figures on trade credit, bank credit and bribery. Compare up to 10 countries or rank them by any indicator.

## Who uses it

Exporters and credit controllers setting payment terms abroad, trade-finance and receivables platforms screening destination countries, quoting tools that flag risky countries.

## Quick start

Subscribe to the free BASIC plan on RapidAPI, copy your `X-RapidAPI-Key`, then:

```bash
curl "https://exporter-country-facts.p.rapidapi.com/v1/countries/VN" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: exporter-country-facts.p.rapidapi.com"
```

Python and Node examples are in [`examples/`](examples/). Both read the key from the `RAPIDAPI_KEY` environment variable.

Other calls worth trying:
- Compare up to 10 countries side by side: `GET /v1/compare?countries=VN,KR,NG`
- Rank all countries by one indicator: `GET /v1/rankings?indicator=oecd_country_risk_grade&limit=10`

## Example response

`GET /v1/countries/VN` — Everything published about selling on credit into one country:

```json
{
  "country": {
    "iso3": "VNM",
    "iso2": "VN",
    "name": "Vietnam"
  },
  "headline": {
    "oecd_grade": 3.0,
    "oecd_grade_change": "improved",
    "ukef_short_term_cover": "Yes",
    "ukef_medium_long_term_cover": "Yes",
    "rule_of_law_estimate": -0.3139343,
    "inflation_pct": 3.3099931421974,
    "inflation_year": "2025"
  },
  "flags": [
    {
      "code": "reserves_below_3_months",
      "rule": "foreign reserves cover less than 3 months of imports"
    }
  ],
  "sections": {
    "business_environment_survey": {
      "about": "World Bank Enterprise Surveys of firms in the country; survey years vary and can be old",
      "indicators": {
        "es_access_to_finance_major_constraint_pct": {
          "label": "Firms identifying access to finance as a major constraint",
          "value": 10.8,
          "value_text": null,
          "unit": "% of firms",
          "period": "2015",
          "old": true,
          "note": "World Bank Enterprise Survey 2015 (firm survey; latest survey year for this country)."
        },
        "es_audited_financial_statements_pct": {
          "label": "Firms with an annual financial statement reviewed by external auditors",
          "value": 24.3,
          "value_text": null,
          "unit": "% of firms",
          "period": "2015",
          "old": true,
          "note": "World Bank Enterprise Survey 2015 (firm survey; latest survey year for this country)."
        },
        "es_bribery_incidence_pct": {
          "label": "Bribery incidence (firms experiencing at least one bribe payment request)",
          "value": 26.1,
          "value_text": null,
          "unit": "% of firms",
          "period": "2015",
          "old": true,
          "note": "World Bank Enterprise Survey 2015 (firm survey; latest survey year for this country)."
        },
        "es_collateral_value_pct_of_loan": {
          "label": "Value of collateral needed for a loan",
          "value": 216.0,
          "value_text": null,
          "unit": "% of loan amount",
          "period": "2015",
          "old": true,
          "note": "World Bank Enterprise Survey 2015 (firm survey; latest survey year for this country)."
  ...
}
```

## Endpoints

| Method | Path | What it does | Parameters (* required) |
|---|---|---|---|
| GET | `/health` | Health check |  |
| GET | `/v1/countries/{code}` | Everything published about selling on credit into one country | `code`* |
| GET | `/v1/compare` | Headline figures for up to 10 countries side by side | `countries`* |
| GET | `/v1/rankings` | All countries ordered by one indicator | `indicator`*, `order`, `limit` |
| GET | `/v1/indicators` | Indicators, sources and freshness |  |

The full OpenAPI 3 specification is in [`openapi.json`](openapi.json).

## Plans

| Plan | Price | Included per month |
|---|---|---|
| BASIC | free | a small monthly quota for evaluation |
| PRO / ULTRA / MEGA | from $49 / month | larger monthly quotas, per-request overage, higher rate limits |

Current prices are always on the [RapidAPI pricing page](https://rapidapi.com/193market/api/exporter-country-facts/pricing). Error responses (4xx/5xx) are not charged on api.market.

## Data source and licence

OECD Country Risk Classifications (OECD terms: commercial use permitted with citation); UK Export Finance cover policy (OGL v3.0); MIGA and World Bank WDI/WGI/Enterprise Surveys (CC BY 4.0).

Every response carries an `attribution` object naming the source and the changes made (translation, normalisation, filtering, aggregation). This API is an independent product and is not affiliated with or endorsed by any government agency or regulator.

## Support

Questions, missing fields, or a use case the current plans do not fit: open an issue in this repository or use the Discussions tab on the RapidAPI listing.
