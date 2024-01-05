//deno run --allow-all --inspect-wait https-server.js MODE:local 
//deno run --allow-all --unstable --inspect-wait https-server.js MODE:local
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta
import { HTTPSPORT, HOSTNAME, baseUrl } from './meta.js';
import { httpsHandler } from './deps.js';//"./router/router.js";

/**
 * to create local certificate pls refer to https://github.com/FiloSottile/mkcert
 * and https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8
 * to create live certificate pls use letsencrypt
 */
const certificatesPath = new Map([
  [HOSTNAME, new URL(`../../etc/letsencrypt/live/${HOSTNAME}/fullchain.pem`,baseUrl)],
  ['localhost', new URL("./certificate/localhost+1.pem",baseUrl)]
])

const keysPath = new Map([
  [HOSTNAME, new URL(`../../etc/letsencrypt/live/${HOSTNAME}/privkey.pem`,baseUrl)],
  ['localhost', new URL("./certificate/localhost+1-key.pem", baseUrl)]
])

Deno.serve({
  port: HTTPSPORT, 
  hostname: HOSTNAME, 
  cert: Deno.readTextFileSync(certificatesPath.get(HOSTNAME)),
  key: Deno.readTextFileSync(keysPath.get(HOSTNAME)),
}, httpsHandler.handle);