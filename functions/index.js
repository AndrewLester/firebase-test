const {onRequest} = require("firebase-functions/v2/https");

// All available logging functions
const {
  log,
  info,
  debug,
  warn,
  error,
  write,
} = require("firebase-functions/logger");

 let ssrServerServer;
                exports.ssrServer = onRequest(async (request, response) => {
                  if (!ssrServerServer) {
                    info("Initialising SvelteKit SSR entry");
                    ssrServerServer = require("./ssrServer/index").default;
                    info("SvelteKit SSR entry initialised!");
                  }
                  info("Requested resource: " + request.originalUrl);
                  return ssrServerServer(request, response);
                });
