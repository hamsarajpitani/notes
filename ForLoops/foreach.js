
const goals = ["smarthome","foodtruck","giveback"];

console.log(goals);

goals.forEach(function(item,index) {
    console.log(`${index}:${item}`);
})

//TASK - create array for each element += 100 
const num = [10,20,30,40,50];

num.forEach(function (item,index,arr) {
    //!!arr is array object belongs to current elements

    console.log(arr);
    
    console.log(arr[0]);
    
    console.log(arr[1]);
    
    console.log(arr[index]+100);
})

console.log(num);