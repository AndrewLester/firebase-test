const {onRequest} = require("firebase-functions/v2/https");

 let ssrServerServer;
                exports.ssrServer = onRequest(async (request, response) => {
                  if (!ssrServerServer) {
                    functions.logger.info("Initialising SvelteKit SSR entry");
                    ssrServerServer = require("./ssrServer/index").default;
                    functions.logger.info("SvelteKit SSR entry initialised!");
                  }
                  functions.logger.info("Requested resource: " + request.originalUrl);
                  return ssrServerServer(request, response);
                });
