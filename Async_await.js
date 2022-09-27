// -------------fetch---------------------//

// function apicall ()
// {
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((res)=>res.json())
// .then((json)=>
// {
//     console.log(json);
// }).catch((error)=>
// {
//     console.log('failed');
// });
// }

// apicall();

// ---------------Async Await----------------

// async function apicall ()
// {
// const res=await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const jsonData=await res.json();
// console.log(jsonData);
// }

// apicall();


// ----------------Promises-------------


const proData = fetch("https://jsonplaceholder.typicode.com/todos");
proData.then(response => {
  return response.json();
}).then(data => {
  console.log(data);
});