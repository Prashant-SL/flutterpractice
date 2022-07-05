// const EventEmitter = require("events");

// const event = new EventEmitter();

// event.on("once", () => {
//     console.log("Event once");
// })
// event.on("once", () => {
//     console.log("Event twice");
// })

// event.emit("once")

// const fetchData=async()=>{
//     try{
//         let data=await fetch("http")
//     }catch(err){
//         console.log(err);
//     }
// }

var arr = [10, 8, 9, 16];
var order = "asc";

// sortData(arr, order);

function sortData(arr, order) {
    if (order == "asc") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        console.log(arr);
    }
    else if (order == "desc") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        console.log(arr);
    }
}

// console.log("arr:", arr);

// output -> [1,2,5,4];

const obj = {
    name: "Prashant",
    getAge: function () {
        return this.age;
    }
};
// delete obj.age;
console.log(getAge());