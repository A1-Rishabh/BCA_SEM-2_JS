let user ={
    Name:"Rishabh",
    addressss:"gurugram",
    Address2:{
        city:"gurugram",
        state:"Haryana"
    },
    phoneno:8646546,
    favcolour:["black","white"],
    demo:function(){
        a=10
        b=20
        return a+b
    }
    
}

console.log(user.Name,user.addressss,user.favcolour[0],user.Address2.state,user.demo());
 // string literal
console.log(`my name is ${user.Name} my phone no is ${user.phoneno} my fav colour is ${user.favcolour[0]}`);

// object method





// Freez: no change in the exixting object and no new valur can be added
// seal: can change existing but can't add new value
// assig: can assign new value in the object 
const car={
    make:"suzuki",
    model:"G wagnor"
};
+
Object.seal(car)// we can add a new key 
car.model="xuv700"
car.color="zblack";
console.log(car);
