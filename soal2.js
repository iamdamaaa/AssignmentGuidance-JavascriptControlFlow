// SOAL 2
const nilaiGabriel = [85, 95.2, 67.75, 78, 75];
const totalNilai = nilaiGabriel.reduce((acc, curr) => acc + curr, 0);
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
} else {
  grade = "E";
}

console.log("Nilai Gabriel:", nilaiGabriel);
console.log("Total Nilai Gabriel:", totalNilai);
console.log("Nilai Rata-rata Gabriel:", nilaiRatarata);
console.log("Grade:", grade);

// DECLARE list nilaiGabriel = [85,95.2,67.75,78,75]

// SET totalNilai = 0

// FOR setiap nilai IN nilaiGabriel
// totalNilai = totalNilai + nilai
// ENDFOR

// SET nilaiRatarata = totalNilai/jumlah elemen nilaiGabriel

// DECLARE grade
// IF nilaiRatarata >=90 AND nilaiRatarata <= THEN grade = "A"
// ELSE IF nilaiRatarata >= 80 AND nilaiRatarata <90 THEN grade = "B"
// ELSE IF nilaiRatarata >= 75 AND nilaiRatarata <80 THEN grade "C"
// ELSE IF nilaiRatarata >=60 AND nilaiRatarata <75 THEN grade "D"
// ELSE = "E"
// ENDIF

// TAMPILKAN nilaiGabriel
// TAMPILKAN totalNilai
// TAMPILKAN nilaiRatarata
// TAMPILKAN grade
