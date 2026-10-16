import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";

// Link preview scrapers only accept absolute image URLs. Reading the origin from the request keeps
// them right on the production domain and on preview builds alike.
export const getSiteOrigin = createIsomorphicFn()
  .server(() => getRequestUrl().origin)
  .client(() => window.location.origin);
