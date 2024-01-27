function loop(){
    console.log("Executou")
}

console.log("x")

setInterval(() => {
    loop()
}, 3000);

console.log("x")