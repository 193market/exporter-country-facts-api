"""Exporter Country Facts API — quick start (Python, requests).
Set RAPIDAPI_KEY to the key shown on exporter-country-facts at rapidapi.com after subscribing to the free plan."""
import os
import requests

HOST = "exporter-country-facts.p.rapidapi.com"
KEY = os.environ["RAPIDAPI_KEY"]

def call(path: str):
    r = requests.get(f"https://{HOST}{path}",
                     headers={"X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST}, timeout=30)
    r.raise_for_status()
    return r.json()

if __name__ == "__main__":
    # Everything published about selling on credit into one country
    data = call("/v1/countries/VN")
    import json
    print(json.dumps(data, ensure_ascii=False, indent=2)[:2000])
