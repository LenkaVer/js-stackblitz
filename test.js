// console.log('ahoooj'); //wge
// console.log('czechitas');
// console.log(2 < 3);
// let jmeno = 'Lenka';
// let vek = 30;
// let hlaska = 'Jmenuji se: ' + jmeno + ' a je mi: ' + vek;
// console.log(hlaska);

/*let jmeno = 'Petra';
let vek = 34;
let vyska = 1.67;
let vaha = 65;
let bmi = Math.round(vaha / 1.67 ** 2);
console.log(
  'Jmenuji se ' +
    jmeno +
    ', je mi ' +
    vek +
    ' let, vazim ' +
    vaha +
    ' kg, měřím ' +
    vyska +
    'm a moje BMI je ' +
    bmi
);
*/

/*
​let jmenoMuz = 'Standa';​
let jmenoZena = 'Lenka';​
let rokMuz = 1991;​
let rokZena = 1991;​
​let mesicMuz = 07;​
let mesicZena = 05;​
let aktualniRok = 2021;
​
let pocetMesicuMuz = (aktualniRok - rokMuz) * 12 + mesicMuz;​
let pocetMesicuZena = (aktualniRok - rokZena) * 12 + mesicZena;​
​
let vysledek = Math.abs(pocetMesicuZena - pocetMesicuMuz);​
console.log(`${jmenoMuz} a ${jmenoZena} jsou od sebe věkově vzdáleni ${vysledek} měsíců​`);
*/

/*
let a = 1;
let b = 2;
console.log(a === b, a !== b);
console.log(a > b, a < b);
*/

/*
let jmeno = prompt("Jake je vase jmeno?");
let vek = Number(prompt("jaky je vas vek"));
if (vek < 18) {
 console.log(`Vaše jméno je ${jmeno}, je vám ${vek} let a tak musíte počkat ještě ${ 18 - vek } let, než budete moci řídit auto`);
} else {
 console.log(`Vaše jméno je ${jmeno}, je vám ${vek} let a tak máte právo řídit auto`);
}
*/

/*
let a = Number(prompt("Zadjete A:"));
let b = Number(prompt("Zadjete B:"));
let c = Number(prompt("Zadjete C:"));
if (a > b) {
 // nutne porovnat jeste A s C
 if (a > c) {
   console.log(`Největší číslo je: ${a}.`);
 } else {
  console.log(`Největší číslo je: ${c}.`)
 }
} else {
 // nutne porovnat jeste B s C
if (b > c) {
  console.log(`Největší číslo je: ${b}.`)
 } else {
  console.log(`Největší číslo je: ${c}.`)
 }
}
*/

/* trošku špatně
let a = Number(prompt('Zadjete A:'));
let b = Number(prompt('Zadjete B:'));
let c = Number(prompt('Zadjete C:'));

if (a > b) {
  if (a > c) {
    if (b + c > a) {
      console.log(`Trojúhelník jde sestrojit.`);
    } else {
      console.log(`Trojúhelník nejde sestrojit.`);
    }
   if (a + b > c) {
      console.log(`Trojúhelník jde sestrojit.`);
    } else {
      console.log(`Trojúhelník nejde sestrojit.`);
    }
  }
} else {
  if (b > c) {
    if (a + c > b) {
      console.log(`Trojúhelník jde sestrojit.`);
    } else {
      console.log(`Trojúhelník nejde sestrojit.`);
    }
    if (a + b > c) {
      console.log(`Trojúhelník jde sestrojit.`);
    } else {
      console.log(`Trojúhelník nejde sestrojit.`);
    }
  }
}
*/

/*
let cislo = Number(prompt('Zadej:'));
let soucet = 0;
while (cislo != 0) {
  soucet += cislo;
  cislo = Number(prompt('Zadej:'));
  console.log('Naakumulovany soucet:' + soucet);
}
*/

/*
let dolni = Number(prompt('Dolni mez:'));
let horni = Number(prompt('Horni mez:'));
for (let i = dolni; i <= horni; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/

/*
let i = 12;
let j = 12 ** 3;

while (i < 12 + j) {
  console.log(i);
  i = i * 2;
}
*/

/*
let cislo = Number(prompt('Zadej:'));
let nejmensi = cislo;
while (cislo != 0) {
  if (nejmensi > cislo) {
    nejmensi = cislo;
  }
  cislo = Number(prompt('Zadej:'));
  console.log(nejmensi);
}
*/

/*function jePrvocislo(cislo) {
  let i = 2;
  while (i < cislo) {
    if (cislo % i === 0) {
      return false;
    }
    i++;
  }
  if (cislo <= 1) {
    return false;
  }

  return true;
}

console.log(jePrvocislo(0));
*/

/*
function Foo(cislo1,cislo2) {
  console.log(cislo1 + cislo2);
  console.log(Math.abs(cislo1 - cislo2));
  console.log(cislo1 * cislo2);
  console.log(cislo1 / cislo2);
}

Foo(5,90);
*/

/*
function jePrvocislo(cislo) {
  let i = 2;
  while (i < cislo) {
    if (cislo % i === 0) {
      return false;
    }
    i++
  }
  if (cislo <= 1) {
    return false;
  }
  return true;
}

console.log(jePrvocislo(10))


for (let i = 2; i < cislo; i++) {
  // pokud je cislo delitelne - tak neni prvocislo
  if (cislo % i == 0) {
     jePrvocislo = false;
     break;
  }
 }
return jePrvocislo;
}

let cislo = Number(prompt("zadejte cislo"));

if (jePrvocislo(cislo)) ->  "je prvocislo" else "neni prvocislo"...

*/

/*
let cislo = Number(prompt("Zadej:"));
let pole = [];

while (cislo != 0) {
  pole.push(cislo)
    cislo = Number(prompt("Zadej:"));
}


let nejmensi = pole[0];
for (let i = 0; i < pole.length; i++) {
  if (nejmensi > pole[i]) {
    nejmensi = pole[i]
  }
}

console.log(pole);
console.log('Nejmenší číslo je ' + nejmensi);
*/

/*
let prvni = {};
let druha = {};

​
prvni.rok = Number(prompt("Prvni - rok"));
prvni.mesic = Number(prompt("Prvni - mesic"));
prvni.jmeno = prompt("Prvni - jmeno");
​
druha.rok = Number(prompt("Druha - rok"));
druha.mesic = Number(prompt("Druha - mesic"));
druha.jmeno = prompt("Druha - jmeno");

aktualniRok = 2021
let pocetMesicuPrvni = (aktualniRok - prvni.rok) + prvni.mesic;​
let pocetMesicuDruha = (aktualniRok - druha.rok) + druha.mesic;​
​
let vysledek = Math.abs(pocetMesicuPrvni  - pocetMesicuDruha);


// KDO MA MENSI SOUCET je starsi
if (pocetMesicuPrvni < pocetMesicuDruha) {
 console.log(prvni.jmeno + " je starsi o " + vysledek + " mesicu");
} else {
 console.log(druha.jmeno + " je starsi o " + vysledek + " mesicu");
}


*/
