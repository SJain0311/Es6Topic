// var a="hello";
// var b="world";
// var c= `${a} ${b}`
// document.write(c);

// -----------------Object destructing----------------------

// const data={
//     name:'John',
//     lastname:'johnn',
//     age:26
// }

// var {name,lastname,age}=data

// document.write(name)


// ----------------Array Destructing----------------

// const data=['js','java','react','angular'];

// var [top1,top2,top3,top4]=data;

// document.write(top1);


// ------------------For of---------------------

let arr=[6000,7000,8900];
var total=0;
for (let arr1 of arr)
{
   
 total+=arr1
}
document.write(total);