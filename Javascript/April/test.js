const x = ()=>{
    console.log("hello world x");
}

const y = (callback)=>{
    
    callback();
    console.log("hello world");
}
y(x);