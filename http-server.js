//deno run --allow-all --unstable --inspect-wait http-server.js MODE:local

import { HTTPPORT, HOSTNAME } from './meta.js'
import { handler } from './deps.js';//'./router/router.js';

Deno.serve({
   port: HTTPPORT, 
   hostname: HOSTNAME, 
},
   handler.handle
);
