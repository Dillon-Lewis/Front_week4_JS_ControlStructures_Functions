let isLoggedin = true;
console.log("Is the user logged in:", isLoggedin);

const products = ["Redbull", "Sunglasses", "Nikes", "Board game", "Pencils"];
for (const product in products) {
    console.log("Products Available:", products[product]);
}

let PersonalCart = ["Redbull", "Redbull", "Nikes", "Pencils"];
for (let items in PersonalCart) {
    console.log("Current shopping List:", PersonalCart[items]);
}

let Redbull = 2.49
let Nikes = 89.95
let Pencils = 3.49

let Total = 0

for (let item in PersonalCart) {
    if (PersonalCart[item] === "Redbull"){
        Total += Redbull
    }
    if (PersonalCart[item] === "Nikes") {
        Total += Nikes
    }
    if (PersonalCart[item] === "Pencils") {
        Total += Pencils
    }
    console.log("Grand Total:", Total);
}