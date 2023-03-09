/*3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____*/

let a = [1, 3, 5, 7];
let nextA = a[a.length-1] + 2; // 9
console.log(nextA)

let b = [2, 4, 8, 16, 32, 64];
let nextB = b[b.length-1] * 2; // 128
console.log(nextB)

let c = [0, 1, 4, 9, 16, 25, 36];
let nextC = (c.length)**2; // 49
console.log(nextC)

let d = [4, 16, 36, 64];
let nextD = 10**2; // 100
console.log(nextD)

let e = [1, 1, 2, 3, 5, 8];
let nextE = e[e.length-1] + e[e.length-2]; // 13
console.log(nextE)

let f = [2, 10, 12, 16, 17, 18, 19];
let nextF = f[f.length-1] + 1; // 20
console.log(nextF)

/*Resposta no terminal: 9
128
49
100
13
20 
*/