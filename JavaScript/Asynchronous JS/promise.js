let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work)=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time);
        }
        else{
            reject(console.log("Our Shop is closed"));
        }
    });
};

order(2000,()=>console.log(`${stocks.Fruits[1]} was selected`))
.then(()=>{
    return order(0,()=>console.log("the fruit has been chopped"));
})
.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
})
.then(()=>{
    return order(1000,()=>console.log("The machine has been started"));
})
.then(()=>{
    return order(2000,()=>console.log(`ice cream ${stocks.holder[0]} was selected `));
})
.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} was added as topping`));
})
.then(()=>{
    return order(2000,()=>console.log("ice-cream Served"));
})
.catch(()=>{
    console.log("Customer left");
})
.finally(()=>{
    console.log("Day Ended, shop is closed");
})
