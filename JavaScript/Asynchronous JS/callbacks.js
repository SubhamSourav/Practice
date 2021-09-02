let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let order = (Fruit_no, call_production) => {
    // console.log("Order Placed, please call production");
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_no]} was selected`);
        call_production();
    },2000);
};

let production = () => {
    setTimeout(()=>{
        console.log("Production has started");
        setTimeout(()=>{
            console.log("the fruit has been chopped");
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(()=>{
                    console.log("The machine has been started");
                    setTimeout(()=>{
                        console.log(`ice cream was selected ${stocks.holder[0]}`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as topping`);
                            setTimeout(()=>{
                                console.log("Serve ice-cream");
                            },1000);
                        },3000)
                    },2000)
                },1000);
            },1000);
        },2000);
    },0);
};

order(0,production);

