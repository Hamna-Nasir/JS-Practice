const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc , currval){
    console.log(`acc: ${acc} and currval is ${currval}`)
    return acc + currval
}, 3)
console.log(myTotal);


const shoppingCart =[
    {
        itemName : "JS",
        price : 2999,
    },
    {
        itemName : "Python",
        price : 3599,
    },
    {
        itemName : "HTML",
        price : 1999,
    },
    {
        itemName : "Ruby",
        price : 3999,
    }
]
const totalBill = shoppingCart.reduce((acc, item)=> acc + item.price,0);
console.log(totalBill);