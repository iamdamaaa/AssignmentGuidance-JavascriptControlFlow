// SOAL 1
let angkaGenap = [];
let angkaGanjil = [];

for (let a = 1; a <= 20; a++)
  if (a % 2 === 0) {
    angkaGenap.push(a);
  } else {
    angkaGanjil.push(a);
  }

console.log("Angka Genap:", angkaGenap);
console.log("Jumlah Angka Genap:", angkaGenap.length);

console.log("Angka Ganjil:", angkaGanjil);
console.log("Jumlah Angka Ganjil:", angkaGanjil.length);

console.log("====================================");

let habisEmpat = [];
let habisEnam = [];
let habisEmpatenam = [];
let tidakEmpatenam = [];

for (let a = 1; a <= 20; a++) {
  if (a % 4 === 0 && a % 6 === 0) {
    habisEmpatenam.push(a);
  }
  if (a % 4 === 0) {
    habisEmpat.push(a);
  }
  if (a % 6 === 0) {
    habisEnam.push(a);
  }
  if (a % 4 !== 0 && a % 6 !== 0) {
    tidakEmpatenam.push(a);
  }
}

console.log("Bilangan Habis oleh 4", habisEmpat);
console.log("Bilangan Habis oleh 6:", habisEnam);
console.log("Bilangan Habis oleh 4 & 6:", habisEmpatenam);
console.log("Bilangan Tidak Habis oleh 4 & 6:", tidakEmpatenam);

console.log("====================================");

let habisTigalima = [];
let tidakTigalima = [];

for (let a = 1; a <= 20; a++)
  if (a % 3 === 0 || a % 5 === 0) {
    habisTigalima.push(a);
  } else {
    tidakTigalima.push(a);
  }

console.log("Bilangan Habis oleh 3 atau 5:", habisTigalima);
console.log("Bilangan Tidak Habis oleh 3 atau 5:", tidakTigalima);
