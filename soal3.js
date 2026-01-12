// SOAL 3

for (let angka = 1; angka <= 5; angka++) {
    console.log(`=== Menghitung Angka: ${angka} ===`);

    for (let pangkat = 1; pangkat <= 3; pangkat++) {
        let hasil = Math.pow(angka, pangkat);
        console.log(`${angka} pangkat ${pangkat} = ${hasil}`);
    }
}