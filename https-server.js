//deno run --allow-all --inspect-wait https-server.js MODE:local 
//deno run --allow-all --unstable --inspect-wait https-server.js MODE:local
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta
import { HTTPSPORT, HOSTNAME } from './meta.js';
import { httpsHandler } from "./serv/router/router.js";
//import './serv/library/importir/testimportir.js';

/**
 * to create local certificate pls refer to https://github.com/FiloSottile/mkcert
 * and https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8
 * to create live certificate pls use letsencrypt
 */
const certificatesPath = new Map([
  ['aicone.id', "../../etc/letsencrypt/live/aicone.id/fullchain.pem"],
  ['dev.aicone.id', "../../etc/letsencrypt/live/dev.aicone.id/fullchain.pem"],
  /**!SECTION for alma.aicone.id
   * '../../etc/ssl/freessl/certificate.crt' --> created using https://www.sslforfree.com/
   */
  ['alma.aicone.id','../../etc/letsencrypt/live/alma.aicone.id/fullchain.pem'],
  ['localhost', "../../../localcertificate/localhost+1.pem"]
])

const keysPath = new Map([
  ['aicone.id', "../../etc/letsencrypt/live/aicone.id/privkey.pem"],
  ['dev.aicone.id', "../../etc/letsencrypt/live/dev.aicone.id/privkey.pem"],
  /**!SECTION for alma.aicone.id
   * '../../etc/ssl/freessl/private.key' --> created using https://www.sslforfree.com/
   */
  ['alma.aicone.id', '../../etc/letsencrypt/live/alma.aicone.id/privkey.pem'],
  ['localhost', "../../../localcertificate/localhost+1-key.pem"]
])

Deno.serve({
  port: HTTPSPORT, 
  hostname: HOSTNAME, 
  cert: Deno.readTextFileSync(certificatesPath.get(HOSTNAME)),
  key: Deno.readTextFileSync(keysPath.get(HOSTNAME)),
}, httpsHandler);