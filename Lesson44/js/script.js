// // Circle

// class Circle{
//     constructor(Name, Pi){
//         this.name = Name,
//         this.pi = Pi;
//     }

//     calcArea(r) {
//         let S = this.pi * Math.pow(r, 2);
//         return S;
//     }

//     calcLength(r){
//         let l = 2 * this.pi * r;
//         return l;
//     }
// }

// const Pi = 3.14;
// let circle1 = new Circle("circle1", Pi);
// console.log(circle1.calcArea(5));
// console.log(circle1.calcLength(5).toFixed(2));
// console.log(circle1.name)


// // ***************************************************************************

// // Total Profit

// // class Profit {
// //     constructor(SellPrice, CostPrice, Inventory) {
// //         this.sellprice = SellPrice,
// //             this.costprice = CostPrice,
// //             this.inventory = Inventory,
// //             this.TotalProfit = function () {
// //                 return (this.sellprice * this.inventory) - (this.costprice * this.inventory)
// //                 };
// //             };
// //     };

// //     let profit1 = new Profit(20.50, 15, 319);
// //     console.log(profit1.TotalProfit().toFixed(2));


// // ***************************************************************************


// // Min Max

// // function Range (num, min, max){
// //     if (Number(num)>=min && Number(num)<=max) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }

// // console.log(Range("5", 4, 9));


// // ***************************************************************************


// // City Info


// // function CityFacts(obj){
// //     console.log(`${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`); 
// // }

// // let city = {
// //     name: "London",
// //     population: 26e6,
// //     continent: "Europe"
// // };

// // let city1 = {
// //     name: "Paris",
// //     population: 2140526,
// //     continent: "Europe"
// // };

// // let city2 = {
// //     name: "Tokyo",
// //     population: 13929286,
// //     continent: "Asia"
// // };

// // CityFacts(city);
// // CityFacts(city1);
// // CityFacts(city2);


// // ***************************************************************************

// class Circle{
//     constructor(Name, Pi){
//         this.name = Name,
//         this.pi = Pi;
//     }

//     calcArea(r) {
//         let S = this.pi * Math.pow(r, 2);
//         return S;
//     }

//     calcLength(r){
//         let l = 2 * this.pi * r;
//         return l;
//     }
// }

// let circle1 = new Circle("circle1", 3.14);
// console.log(circle1.calcArea(5));
// console.log(circle1.calcLength(5).toFixed(2));


// let myButton = document.querySelector("#bg-change");
// let ColorId = document.querySelector("#colorId")


// myButton.addEventListener("click", function(){
//     let randomColor = Math. floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = `#${randomColor}`;
//     ColorId.innerHTML = `Hex Color Code: #${randomColor}`;
// })

// let myButton = document.querySelector("#anchorChange");
// let mainAnchor = document.querySelector("#codeAddress");

// myButton.addEventListener("click", () => {
//     console.log(mainAnchor.getAttributeNames()[0] + ": " + mainAnchor.getAttribute("href") + "\n" + mainAnchor.getAttributeNames()[1] + ": " + mainAnchor.getAttribute("rel") + "\n" + mainAnchor.getAttributeNames()[2] + ": " + mainAnchor.getAttribute("type"));
// })

// let myButton = document.querySelector("#colorCount");

// myButton.addEventListener("click", () => {
//     alert("The color options count is: " + document.getElementById("mySelect").length);
//     if (confirm("Do you want to see which colors are there?")) {
//         for (let i = 0; i < document.getElementById("mySelect").length; i++) {
//             console.log(document.getElementById("mySelect")[i].innerHTML);
//         }
//     }
// });


// *********************************************************************************************************


















const buttons = document.querySelectorAll(".calc-button");
const calcLog = document.querySelector("#calcLog");
const resetBtn = document.querySelector("#reset-btn");
const equalsBtn = document.querySelector(".equals-button");

equalsBtn.addEventListener("click", equals);


resetBtn.addEventListener("click", (e) => {
    calcLog.innerHTML = "";
    calcLog.style.fontSize = "3rem"
});

document.addEventListener("keypress", function (e) {
    if (e.key == 'Enter') {
        equals();
    }
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {

        calcLog.innerHTML += buttons[i].textContent;
        if (calcLog.innerHTML.length > 6) {
            calcLog.style.fontSize = "2rem";
        }
        if (calcLog.innerHTML.length > 10) {
            calcLog.style.fontSize = "1.5rem";
        }
    })
}

document.body.addEventListener("keypress", function (e) {
    keyboardCalc(e.key);
});

function keyboardCalc(key) {
    switch (key) {
        case "1":
            calcLog.innerHTML += 1;
            break;
        case "2":
            calcLog.innerHTML += 2;
            break;
        case "3":
            calcLog.innerHTML += 3;
            break;
        case "4":
            calcLog.innerHTML += 4;
            break;
        case "5":
            calcLog.innerHTML += 5;
            break;
        case "6":
            calcLog.innerHTML += 6;
            break;
        case "7":
            calcLog.innerHTML += 7;
            break;
        case "8":
            calcLog.innerHTML += 8;
            break;
        case "9":
            calcLog.innerHTML += 9;
            break;
        case "0":
            calcLog.innerHTML += 0;
            break;
        case "+":
            calcLog.innerHTML += "+";
            break;
        case "-":
            calcLog.innerHTML += "-";
            break;
        case "*":
            calcLog.innerHTML += "*";
            break;
        case "/":
            calcLog.innerHTML += "÷";
            break;
        default:
            break;
    }
}

function equals() {
    let result = 0;
    if (calcLog.innerHTML.includes("+")) {
        let arr = calcLog.innerHTML.split("+");

        for (let i = 0; i < arr.length; i++) {
            result = result + Number(arr[i])
        }
        calcLog.innerHTML = result;
    } else if (calcLog.innerHTML.includes("-")) {
        let arr = calcLog.innerHTML.split("-");
        result = arr[0] - arr[1];
        calcLog.innerHTML = result;
    } else if (calcLog.innerHTML.includes("*")) {
        result = 1;
        let arr = calcLog.innerHTML.split("*");
        for (let i = 0; i < arr.length; i++) {
            result *= Number(arr[i])
        }
        calcLog.innerHTML = result;

    } else {
        result = 1;
        let arr = calcLog.innerHTML.split("÷");
        result = Number(arr[0]) / Number(arr[1])
        calcLog.innerHTML = result;
    }
    if (calcLog.innerHTML.length <= 6) {
        calcLog.style.fontSize = "3rem";
    }
    if (calcLog.innerHTML.length > 6) {
        calcLog.style.fontSize = "2rem";
    }
}