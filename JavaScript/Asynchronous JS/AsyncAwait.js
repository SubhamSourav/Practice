let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open = false;

// function toppings_choice (){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
  
//         resolve( console.log("which topping would you love?") )
  
//       },3000)
//     })
//   }

// async function kitchen(){
//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await toppings_choice();

//     console.log("D");
//     console.log("E");
// }

// kitchen();
// console.log("Cleaning tables");

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("Shop is closed"));
        }
    });
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[2]} was selected`)
        await time(0)
        console.log("the fruit has been chopped")
        await time(2000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
        await time(1000)
        console.log("The machine has been started")
        await time(2000)
        console.log(`ice cream ${stocks.holder[0]} was selected `)
        await time(3000)
        console.log(`${stocks.toppings[0]} was added as topping`)
        await time(2000)
        console.log("ice-cream Served")
    }
    catch(error){console.log("Customer Left",error)}
    finally{
        console.log("Day Ended");
    }
}

kitchen();