let array1 = ["Zeki", "Mehmet", "Fatma", "Halil", "Ahsen", "Zeynep", "Burak"]
let array2 = ["Halil", "Veli", "Kerim", "Zeki", "Neriman", "Fatma", "Semih"]

// let yeniArray = [ "Müsterileri bu sekilde yeni bir array icerisinde toplamaniz isteniliyor"  ]

let yeniArray = array1.concat(array2)
console.log(yeniArray)
yeniArray.sort()
let sonarray = []

for (let i = 0; i < yeniArray.length; i++) {
    if (yeniArray[i] !== yeniArray[i + 1]) {
        sonarray.push(yeniArray[i])
    }
}
console.log(sonarray);
