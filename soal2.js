// SOAL 2
const nilaiGabriel = [85, 95.2, 67.75, 78, 75];
const totalNilai = nilaiGabriel.reduce((acc, curr)=> acc + curr, 0);
const nilaiRatarata = totalNilai / nilaiGabriel.length;

let grade;
if (nilaiRatarata >= 90 && nilaiRatarata <= 100) {
  grade = "A";
} else if (nilaiRatarata >= 80 && nilaiRatarata <= 89.99) {
  grade = "B";
} else if (nilaiRatarata >= 75 && nilaiRatarata <= 79.99) {
  grade = "C";
} else if (nilaiRatarata >= 60 && nilaiRatarata <= 74.99) {
  grade = "D";
} else {grade = "E"}

console.log("Nilai Gabriel:", nilaiGabriel);
console.log("Total Nilai Gabriel:", totalNilai);
console.log("Nilai Rata-rata Gabriel:", nilaiRatarata);
console.log("Grade:", grade);

