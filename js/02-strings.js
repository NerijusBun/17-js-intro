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

// Sveiki, Vardenis!

const username1 = 'Jonas'
const username2 = 'Maryte'
const username3 = 'Petras'
const username4 = 'Ona'

const hi1 = 'Sveiki, ' + username1 + '!'; 
const hi2 = 'Sveiki, ' + username2 + '!'; 
const hi3 = 'Sveiki, ' + username3 + '!'; 
const hi4 = 'Sveiki, ' + username4 + '!'; 

console.log(hi1)
console.log(hi2)
console.log(hi3)
console.log(hi4)

// Vienguba (') kabute.
const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

// Dvieguba (") kabute.
const kabute2 = 'Dviguba (") kabute.';
console.log(kabute2)

// Vienguba (') ir dviguba (") kabutes.
const kabute12 = "Vienguba (') ir " + 'dviguba (") kabutes.';
console.log(kabute12);

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabute12_1);

const kabute3 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(kabute3);

// Kabutes: '"`.
const kabuteAll1 = 'Kabutes: \'"`.';
const kabuteAll2 = "Kabutes: '\"`.";
const kabuteAll3 = `Kabutes: '"\`.`;

console.log(kabuteAll1);
console.log(kabuteAll2);
console.log(kabuteAll3);

// \n -> Nauja eilute padaryti (new line)
// \r -> grysti i pradzia (return)

/*
<header>
    <img src="./logo.png" alt="Logo">
    <nav>
        <a href="/">Link</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
    </nav>
</header>
*/

const logoPath = './logo.png';

const HTML = '\
<header>\n\r\
\t<img src="' + logoPath + '" alt="Logo">\n\r\
\t<nav>\n\r\
\t\t<a href="/">Link</a>\n\r\
\t\t<a href="/">Link</a>\n\r\
\t\t<a href="/">Link</a>\n\r\
\t</nav>\n\r\
</header>';
console.log(HTML);

const HTML2 = `<header>
    <img src="${logoPath}" alt="Logo">
    <nav>
        <a href="/">Link</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
    </nav>
</header>`;
console.log(HTML2);

// Your lucky number is 7. Congz!
const userNumber = 777;
console.log(`Your lucky number is ${userNumber}. Congz!`);

const vardenis = 'Petras';
const amzius = 99;

console.log(`Sveiki, mano vardas ${vardenis} ir man ${amzius} metu.`);