// let promise = new Promise((resolve,reject)=>{
// let s = 11;
// if(s==10){
//     resolve("operation is Successfull");
// }
// else{
//     reject("operation is not Successfull");
// }
// });
// promise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
//userid password set timeout promise program use set timout to show password
// let promise1 = new Promise((resolve,reject)=>{
//     let userid = "abe";
//     let password = "123";
//     if(userid == "abe" && password == "123"){
//         resolve("login successfull");
//     }
//     else{
//         reject("login failed");
//     }
// }
// );
// promise1.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
let promise1 = new Promise((resolve, reject) => {
    let userid = "Rahul"
    let password = "123";
    if (userid == "Rahl" && password == "123") {
        resolve("login successful");
    } else {
        reject("login failed");
    }
});

promise1.then((data) => {
    console.log(data);
    
    setTimeout(() => {
        console.log("Password is: " + "123");
    }, 3000);
}).catch((error) => {
    console.log(error);
});




