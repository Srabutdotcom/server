//deno run --allow-all --unstable --inspect-wait http-server.js MODE:local

import { HTTPPORT, HOSTNAME } from './meta.js'
import { httpHandler } from '../router/router.js';//'./router/router.js';

Deno.serve({
   port: HTTPPORT, 
   hostname: HOSTNAME, 
},
   httpHandler
);
