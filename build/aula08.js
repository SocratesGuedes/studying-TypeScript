"use strict";
let dados = {
    name: "Sócrates",
    age: 20,
    status: "A",
    ola: () => { console.log('OI'); },
    info: (p) => { console.log(p); }
};
console.log(typeof (dados));
console.log(dados.name);
dados.ola();
dados.info('Nicolas Tesla');
