/*
ARRAY - sarasas, listas, masyvas, matrica, .....

Array nariu kiekis: array.length, [].length
*/

//index/pozicija: 0   1  2  3  4
const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

console.log('-------------');
console.log(0, '->', pazymiai[0]);
console.log(1, '->', pazymiai[1]);
console.log(2, '->', pazymiai[2]);
console.log(3, '->', pazymiai[3]);
console.log(4, '->', pazymiai[4]);

console.log('Pazymiu kiekis:', pazymiai.length);

const paskutinioIndexas = pazymiai.length - 1;
const paskutinisPazymys = pazymiai[paskutinioIndexas];
console.log(paskutinioIndexas, '->', paskutinisPazymys);

const paskutinisPazymys2 = pazymiai[pazymiai.length - 1];
console.log(paskutinisPazymys2);

const students = ['Jonas', 'Benas', 'Onute', 'Petras'];
console.log(students);

const students1 = students[0];
console.log(students1);

const studentLast = students[students.length -1];
console.log('Paskutinis studentas:', studentLast);

const belekas = ['red', 777, 'blue', undefined, false, 'green'];
const x = ['Petras', 7, 'Maryte', 8, 'Jonas', 9, 'Ona', 6];

const skolininkoNumeris = 4;
const skolininkoVardas = x[skolininkoNumeris * 2 - 2];
const skolininkoSkola = x[skolininkoNumeris * 2 - 1];
console.log(`${skolininkoNumeris}) ${skolininkoVardas} - ${skolininkoSkola}`);

/*
1) Petras -> 0
2) Maryte -> 2
3) Jonas ->  4
4) Ona   ->  6
*/

const skolininkai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const skolos = [7, 8, 9, 6];

const index = 4;
const asmuo = skolininkai[index - 1];
const skola = skolos[index - 1];
console.log(`${index}) ${asmuo} - ${skola}`);