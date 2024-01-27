function await(){
    console.log("EXECUTOU !!!")
}

console.log("Ainda não executou")
 
setTimeout(()=>{
    await()
}, 3000)

console.log("Ainda não executou 2")