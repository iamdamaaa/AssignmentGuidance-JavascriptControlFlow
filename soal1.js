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

// DECLARE list angkaGenap
// DECLARE list angkaGanjil

// FOR a FROM 1 TO 20
//     IF a MOD 2 == 0 THEN
//         SIMPAN a KE angkaGenap
//     ELSE
//         SIMPAN a KE angkaGanjil
//     ENDIF
// ENDFOR

// TAMPILKAN angkaGenap
// TAMPILKAN jumlah elemen angkaGenap
// TAMPILKAN angkaGanjil
// TAMPILKAN jumlah elemen angkaGanjil

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

// DECLARE list habisEmpat
// DECLARE list habisEnam
// DECLARE list habisEmpatEnam
// DECLARE list tidakEmpatEnam

// FOR a FROM 1 TO 20
//     IF a MOD 4 == 0 AND a MOD 6 == 0 THEN
//         SIMPAN a KE habisEmpatEnam
//     ENDIF

//     IF a MOD 4 == 0 THEN
//         SIMPAN a KE habisEmpat
//     ENDIF

//     IF a MOD 6 == 0 THEN
//         SIMPAN a KE habisEnam
//     ENDIF

//     IF a MOD 4 != 0 AND a MOD 6 != 0 THEN
//         SIMPAN a KE tidakEmpatEnam
//     ENDIF
// ENDFOR

// TAMPILKAN habisEmpat
// TAMPILKAN habisEnam
// TAMPILKAN habisEmpatEnam
// TAMPILKAN tidakEmpatEnam

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

// DECLARE list habisTigaLima
// DECLARE list tidakTigaLima

// FOR a FROM 1 TO 20
//     IF a MOD 3 == 0 OR a MOD 5 == 0 THEN
//         SIMPAN a KE habisTigaLima
//     ELSE
//         SIMPAN a KE tidakTigaLima
//     ENDIF
// ENDFOR

// TAMPILKAN habisTigaLima
// TAMPILKAN tidakTigaLima
