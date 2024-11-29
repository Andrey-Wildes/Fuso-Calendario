let orbita = require("prompt-sync")({ sigint: false });
let rotacao = require("prompt-sync")({ sigint: false });
let o = orbita("Digite o tempo de Órbita (Em Segundos): ") /*Órbita*/
let rs = rotacao("Digite o tempo de Rotação Sideral (Em Segundos): ") /*Rotação sideral*/
let nr = 0; /*Número de rotações*/
let f = 0; /*Fatorial*/
let ro = 0; /*Rotação orbital*/
let nda = 0; /*Número de Dias no Ano*/
let nde = 0; /*Número de Dias na Estação*/
let ndm = 0; /*Número de Dias no Mês*/
let ds = 0; /*Dia em Segundos*/
let dm = 0; /*Dia em Minutos*/
let dh = 0; /*Dia em Horas*/
let as = 0; /*Ano em Segundos*/
let am = 0; /*Ano em Minutos*/
let ah = 0; /*Ano em Horas*/
let es = 0; /*Estação em Segundos*/
let em = 0; /*Estação em Minutos*/
let eh = 0; /*Estação em Horas*/
let ms = 0; /*Mês em Segundos*/
let mm = 0; /*Mês em Minutos*/
let mh = 0; /*Mês em Horas*/
function calendario() {
    nda = parseInt(nr, 10) - 1;
    nde = (parseInt(nr, 10) - 1) / 4;
    ndm = (parseInt(nr, 10) - 1) / 12;
    ds = parseInt(ro, 10);
    dm = parseInt(ds, 10) / 60;
    dh = parseInt(dm, 10) / 60;
    as = parseInt(o, 10);
    am = parseInt(as, 10) / 60;
    ah = parseInt(am, 10) / 60;
    es = parseInt(as, 10) / 4;
    em = parseInt(es, 10) / 60;
    eh = parseInt(em, 10) / 60;
    ms = parseInt(es, 10) / 3;
    mm = parseInt(ms, 10) / 60;
    mh = parseInt(mm, 10) / 60;
    console.log(`O Dia dura ${ds} segundos, ou ${dm} minutos, ou ${dh} horas.`);
    console.log(`O Ano dura ${as} segundos, ou ${am} minutos, ou ${ah} horas. O Ano possui ${nda} Dias`);
    console.log(`A Estação dura ${es} segundos, ou ${em} minutos, ou ${eh} horas. O Ano possui ${nde} Dias.`);
    console.log(`O Mês dura ${ms} segundos, ou ${mm} minutos, ou ${mh} horas. O Ano possui ${ndm} Dias.`);
}
function converter() {
    nr = parseInt(o, 10) / parseInt(o, 10);
    f = parseInt(rs, 10) / (parseInt(nr, 10) - 1);
    ro = parseInt(f, 10) * parseInt(nr, 10);
    console.log(`A Órbita dura ${o} segundos.`);
    console.log(`A Rotação Sideral dura ${rs} segundos.`);
    console.log(`A Rotação Orbital dura ${ro} segundos.`);
    console.log(`Uma Órbita possui ${nr} Rotações.`);
    console.log(`O Fatorial é ${f}. (???)`);
    calendario();
}
converter();