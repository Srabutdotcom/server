
import { importirJs } from '../importir.js';

importirJs('./htmls/window.js')
.then(({ windowSection })=>document.body.append(windowSection))
importirJs('./htmls/header.js')
.then(({ header })=>document.body.append(header))

const p1 = importirJs('./css/css.js');
//const p2 = importirJs('./htmls/window.js');
//const p3 = importirJs('./htmls/header.js');

//const [ /* _r1, */ { windowSection }, {header} ] = await Promise.all([/* p1, */p2,p3]);

//document.body.append(windowSection, header)
