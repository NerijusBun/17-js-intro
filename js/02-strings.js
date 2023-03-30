/*
STRINGS - simboliu sarasas/junginys. tekstas

Kitamuju iniciavimas
- const (default)
- let (tik jei yra poreikis keisti reiksme)
- var (nenaudoti, nebent TIKRAI zinote ka darote)

String'o iniciavimas:
- viengubos kabutes
- dvigubos kabutes

*/

// Kintamuju iniciavimas

const vardas = 'Petras';
console.log(vardas);

const keturi = 4;
console.log(keturi);

const keturiTekstu = '4';
console.log(keturiTekstu);

//STRINGS

const firstname = 'Maryte';
console.log(firstname);

const lastname = "Marytaite";
console.log(lastname);

// Labas rytas, Maryte!
console.log('Labas rytas,', firstname, '!');  // netinkamas sprendimas,nes yra tarpai

const pasisveikinimas = 'Labas rytas, ' + firstname + '!';
console.log(pasisveikinimas);

// Sveiki, mano vardas Jonas ir man 88 metai!
const name1 = 'Jonas';
const age1 = 88;

const prisistatymas = 'Sveiki, mano vardas ' + name1 + ' ir man ' + age1 + ' metai!';
console.log(prisistatymas);



const word1 = 'vasara';
const perPuse = word1 / 2;
console.log(perPuse);

