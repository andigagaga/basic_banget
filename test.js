//hitung jumlah angka genap
// logika : filter angka yang habis di bagi 2, lalu hitung jumlahnya
function countNumber(arr) {
    return arr.filter((item) => item % 2 === 0).length
}
console.log(countNumber([1,2,3,4,5,6,7]))
//output : 3

//balik huruf di setiap kata
//logika : pisah kalimat jadi kata, balikk tiap kata , lalu gabungkan kembali
function reserveWord(sentence) {
    return sentence.split(" ").map(item => item.split("").reverse().join("")).join(" ")
}
console.log(reserveWord("halo dunia"))
// //output: olah ainud

//palindrome
//logika : bading kan string asli dengan versi terbalik
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("")
    return str === reversed
}
console.log(isPalindrome("makan"))
console.log(isPalindrome("katak"))

//cari angka terbesar
//logika : gunakan math.max dengan spreat operator

//pakai math.max
function findMax(arr) {
    return Math.max(...arr)
}
console.log(findMax([1,4,8]))
//output: 8

//tanpa math.max
function findMax(arr) {
    let max = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(findMax([1,4,8]))
//output: 8


//filter angka positive
//logika : ambil angka yang lebih dari 0
function filterPositive(arr) {
  return arr.filter((item) => item > 0);
}
console.log(filterPositive([-2, -1, 0, 1, 2, 3, 4, 5]));
//output:[ 1, 2, 3, 4, 5 ]

//conversi huruf pertama jadi huruf kapital
//ambil huruf pertama setiap kata
function capitalizewords(sentence) {
    return sentence.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
}
console.log(capitalizewords("halo dunia"))
// //output : Halo Dunia

// //hitung jumlah total array
// //gunakan reduce untuk calculate angka array
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0)
}
console.log(sumArray([1,2,3,4,5]))
//output:15

// //hapus duplicate data
// //logika : gunakan set untuk menyimpan elemen unik
function removeDuplicate(arr) {
    return [...new Set(arr)]
}
console.log(removeDuplicate([1,1,2,2,3,3,4,5,5,6,7,7,8]))
// //output : [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

// //hitung jumlah huruf
// //pisahkan string huruf , lalu hitung yang cocok
function countLetter(str, letter) {
    return str.toLowerCase().split("").filter(item => item === letter).length
}
console.log(countLetter("bananA", "a"))
// //output : 3

//gabungkan dua array lalu hilangkan duplikasi dengan set
function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1,...arr2])]
}
console.log(mergeArrays([1,2,3,4,5], [1,2,3,4,5,6,7,8,9]))
// //output : [
// //   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

//grouping data berdasarkan kriteria
//logika : gunakan reduce untuk membuat object baru dan masukan nama sesuai key dept
function groupByDept(data) {
    return data.reduce((acc, curr) => {
        if(!acc[curr.dept]) {
            acc[curr.dept] = []
        }
        acc[curr.dept].push(curr.name)
        return acc
    }, {})
}
console.log(groupByDept([
    {name: 'Andi', dept: 'IT'},
    {name: 'Budi', dept: 'HR'},
    {name: 'Citra', dept: 'IT'},
]))
//output = { IT: [ 'Andi', 'Citra' ], HR: [ 'Budi' ] }

// //remove null dan undefined
function cleanArray(arr) {
  return arr.filter(item => item != null)
}
console.log(cleanArray([1, null, 2, undefined, 3]));
// //output = [ 1, 2, 3 ]

// //ubah array bersarang menjadi array satu dimensi
function flatten(arr) {
  return arr.flat(Infinity)
}
console.log(flatten([1, [2, [3, 4]], 5]));
// //output = [ 1, 2, 3, 4, 5 ]

// //hitung jumlah kata
function countWords(str) {
    // return str.trim().split(" ").length
    return str.trim().split(/\s+/).length
}
console.log(countWords("halo dunia ini tests"))

//cari kata terpanjang
//logika : bandingkan panjang setiap kata untuk mendapatkan yang terpanjang
function longestWords(str) {
    return str.split(" ").reduce((acc, curr) => curr.length > acc.length ? curr : acc)
}
console.log(longestWords("halo apa kabar harinya ds"))
//output =

//element yang paling sering muncul
function mostFrequent(arr) {
  let freq = {};
  let maxCount = 0;
  let mostItem;

  arr.forEach((item) => {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxCount) {
      maxCount = freq[item];
      mostItem = item;
    }
  });
  return mostItem;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
//output : 3
// Urutannya memang kayak gini:
// Loop pertama → item pertama (1) selalu jadi kandidat awal karena maxCount masih 0.
// Loop kedua → ketemu angka 2 baru pertama kali, frekuensinya 1, sama dengan maxCount (1), jadi nggak update.
// Loop ketiga → ketemu 2 lagi, frekuensinya jadi 2 → lebih besar dari maxCount (1), maka maxCount di-update jadi 2 dan mostItem di-update jadi 2.
// Proses ini berulang terus sampai habis array.
// Intinya:
// freq nyimpen berapa kali angka sudah muncul.
// maxCount dan mostItem cuma di-update kalau frekuensi angka sekarang lebih besar dari sebelumnya.

//reverse atau balik hanya angka
//logika : ambil angka -> balik urutannya -> masukan lagi ke posisi semula
function reverseNumber(arr) {
  const nums = arr.filter((item) => typeof item === "number").reverse();

  return arr.map((item) => (typeof item === "number" ? nums.shift() : item));
}
console.log(reverseNumber([1, "a", 2, "b", 3]));
//output : [ 3, 'a', 2, 'b', 1 ]
//shift mengambil elemen pertama lalu hapus sisa nya
// Iterasi 1: nums = [3, 2, 1] → shift() ambil 3 → nums = [2, 1]
// Iterasi 2: nums = [2, 1]   → shift() ambil 2 → nums = [1]
// Iterasi 3: nums = [1]      → shift() ambil 1 → nums = []

//cara 1
//convert array ke object
function arratToObject(arr) {
    return Object.fromEntries(arr)
}
console.log(
  arratToObject([
    ["name", "andi"],
    ["age", 22],
  ])
);

//cara 2
function arrayToObject(arr) {
    return arr.reduce((obj, [key, value]) => {
        obj[key] = value; // set key dengan value
        return obj;
    }, {}); // {} adalah object awal
}

console.log(arrayToObject([
    ["name", "andi"],
    ["age", 22]
]));
// // { name: 'andi', age: 22 }

//conver object ke array
//cara 1
const obj = { name: "andi", age: 22 };

const arr = Object.entries(obj);
console.log(arr);
// // [ [ 'name', 'andi' ], [ 'age', 22 ] ]
//cara 2
function objectToArray(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { // pastikan bukan dari prototype
            result.push([key, obj[key]]);
        }
    }
    return result;
}

console.log(objectToArray({ name: "andi", age: 22 }));
// // [ [ 'name', 'andi' ], [ 'age', 22 ] ]
