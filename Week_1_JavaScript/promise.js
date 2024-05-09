var d = new Promise(function(resolve){
    resolve("hello");
})

function callback(){
    console.log(d);
}
d.then(function(){console.log(d)})
d.then(callback);