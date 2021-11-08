let Cart = [];

let item1 = 0;
function AddItem1(){
    item1++;
    console.log(item1);
    Cart.push(ShopList[0])
}

let item2 = 0;
function AddItem2(){
    item2++;
    console.log(item2);
    Cart.push(ShopList[1])
}

let item3 = 0;
function AddItem3(){
    item3++;
    console.log(item3);
    Cart.push(ShopList[2])
}

let item4 = 0;
function AddItem4(){
    item4++;
    console.log(item4);
    Cart.push(ShopList[3])
}

let item5 = 0;
function AddItem5(){
    item5++;
    console.log(item5);
    Cart.push(ShopList[4])
}

function displayCart(){
    document.getElementById("cart").innerHTML = "";
    let result = 0;
    for(let i of Cart){
        document.getElementById("cart").innerHTML+=`<div>`;
        document.getElementById("cart").innerHTML+=(`${i.name} \n`);
        document.getElementById("cart").innerHTML+=(`$${i.price}`);
        document.getElementById("cart").innerHTML+=`</div>`;
    }
    for(let i of Cart){
        result += i.price;
    }
    document.getElementById("cart").innerHTML+=`<div>`;
    document.getElementById("cart").innerHTML+=(`Grand Total: $${result.toFixed(2)}`);  
    document.getElementById("cart").innerHTML+=`</div>`;
    Cart = [];
}

let ShopList = [
     {
        name : "Red Bull",
        price : 1.99
    },
     {
        name: "BBQ Chips",
        price: .99,
    
    },
    {
        name: "Tall Boy",
        price: 2.49,
    },
     {
        name: "Candy Bar",
        price: .79
    },
     {
        name: "Egg Sammie",
        price: 3.99
    }
]

function displayMenu(){
    for(let i of ShopList){
        document.write(i.name);
        document.write(i.price);
        
    }
}

//let item = ShopList.find(item => item.name === result)