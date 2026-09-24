// Exporter Country Facts API — quick start (Node 18+, built-in fetch).
// Set RAPIDAPI_KEY to the key shown on exporter-country-facts at rapidapi.com after subscribing to the free plan.
const HOST = "exporter-country-facts.p.rapidapi.com";
const KEY = process.env.RAPIDAPI_KEY;

async function call(path) {
  const res = await fetch(`https://${HOST}${path}`, {
    headers: { "X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

// Everything published about selling on credit into one country
call("/v1/countries/VN").then((d) => console.log(JSON.stringify(d, null, 2).slice(0, 2000)));
