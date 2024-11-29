const prompt = require("prompt-sync")({ sigint: false });

let orbita = parseInt(prompt("Digite o tempo de Órbita (Em Segundos): "));
let rotacao = parseInt(prompt("Digite o tempo de Rotação Sideral (Em Segundos): "));

let nr = orbita / rotacao; // Número de rotações
let f = rotacao / (nr - 1); // Fatorial
let ro = f * nr; // Rotação orbital
let nda = nr - 1; // Número de Dias no Ano
let nde = nda / 4; // Número de Dias na Estação
let ndm = nda / 12; // Número de Dias no Mês
let ds = rotacao; // Dia em Segundos
let dm = ds / 60; // Dia em Minutos
let dh = dm / 60; // Dia em Horas
let as = orbita; // Ano em Segundos
let am = as / 60; // Ano em Minutos
let ah = am / 60; // Ano em Horas
let es = as / 4; // Estação em Segundos
let em = es / 60; // Estação em Minutos
let eh = em / 60; // Estação em Horas
let ms = es / 3; // Mês em Segundos
let mm = ms / 60; // Mês em Minutos
let mh = mm / 60; // Mês em Horas

console.log(`O Dia dura ${ds} segundos, ${dm} minutos, ou ${dh} horas.`);
console.log(`O Ano dura ${as} segundos, ${am} minutos, ou ${ah} horas. O Ano possui ${nda} Dias.`);
console.log(`A Estação dura ${es} segundos, ${em} minutos, ou ${eh} horas. A Estação possui ${nde} Dias.`);
console.log(`O Mês dura ${ms} segundos, ${mm} minutos, ou ${mh} horas. O Mês possui ${ndm} Dias.`);