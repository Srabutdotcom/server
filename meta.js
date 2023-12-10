export const baseUrl = new URL('',import.meta.url);
// will return url in the browser or filepath,
// in this file will return filepath 
//console.debug('baseUrl:', baseUrl);

/** keyvalue
 * @typedef {{string:string}} keyvalue
 * representing argument list from Deno cli arguments
 *
 * i.e. port:80 mean key=port value=80
 *
 * key can be port or anything else
 */

/** args
 * @type {keyvalue} args object
 */
const args = new Map();
//default constant
args.set('mode', 'local')
args.set('root', './client')
args.set('httpPort', 8001)
args.set('httpsPort', 4000)
args.set('hostname', 'localhost')

if (Deno.args.length) {
  Deno.args.map((e) => {
    const [k, v] = e.split(":");
    args.set(k, v);
    //args[k.toLowerCase()] = v;
  });
}

const MODE = args.get('mode') ?? 'local';
const ROOT = args.get('root') ?? './client';
const HTTPPORT = MODE === 'live' ? 80 : args.get('httpPort') ?? 8001;
const HTTPSPORT = MODE === 'live' ? 443 :args.get('httpsPort') ?? 4000;
const HOSTNAME = MODE === 'live' ? 'aicone.id': args.get('hostname') ?? 'localhost';

// store sessionId
sessionStorage.setItem("session", crypto.randomUUID());

export { ROOT, MODE, HTTPPORT, HTTPSPORT, HOSTNAME };

