/* @literator-literate

# Product route sketch

This Literator skeleton example walks through a product lookup, from storefront request to catalog response.

```mermaid
flowchart TB
  Request([GET /api/products?sku=...]) --> Validate[Validate SKU]
  Validate --> Cache[Check product cache]
  Cache -->|hit| Cached[Return cached product]
  Cache -->|miss| Api[Call catalog API]
  Api --> Process[Process API data]
  Process --> Reply[Return product]
```
*/

// @literator-collapse-start Supporting Setup
type RouteRequest = { query?: { sku?: string } };
const cache = new Map<string, unknown>();
// @literator-collapse-end

/*
## GET /api/products
A product page arrives with a SKU. The route follows the same order every time: identify the product, reuse known data when possible, and ask the catalog when the cache is empty.
| Situation | Route response |
| --- | --- |
| Product is cached | Return the cached product |
| Product is not cached | Ask the catalog service |
*/
export async function GET(request: RouteRequest) {
  const sku = getSku(request);
  const body = cache.get(sku) ?? processApiData(await fetchProduct(sku));
  return { status: 200, body };
}

/*
### Read the SKU
The SKU is the product's shelf label. Once the request has a usable SKU, the rest of the lookup has something small and reliable to carry forward.
*/
function getSku(request: RouteRequest) { return request.query?.sku?.trim() ?? "demo-sku"; }

/*
### Fetch Product Details
When the cache has no answer, the catalog service becomes the source of truth. It knows the product name, price, and current details.
*/
async function fetchProduct(sku: string): Promise<unknown> { return /* catalog request */ { sku }; }

/*
### Prepare Storefront Data
Catalog data is usually shaped for internal systems. Before it reaches the storefront, it gets trimmed into the small product card the page actually needs.
*/
function processApiData(data: unknown) { return data; }
