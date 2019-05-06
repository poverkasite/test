let	 money = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");

let mainList = {
    budjet: money,
    nameMarket: name,
    shopGoods: [],
    employers: {},
    open: false
}

for (let i = 0; i < 5; i++) {
    let a = prompt("Какой тип товаров будем продавать?");
    mainList.shopGoods[i] = a;

}

alert(mainList.budjet/30);

console.log(mainList);