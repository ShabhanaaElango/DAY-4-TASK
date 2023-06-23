let obj1 = {name:'person1', age: 5};
let obj2 = {age: 5, name:'person2'};
for(var key in obj1)  
 {
    console.log(obj1[key] === obj2[key]);
    
}