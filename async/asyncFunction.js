async function await(a, b){
    return a+b
}

await(2, 3).then((value)=>{
    console.log(`O valor da soma é: ${value}`)
})

console.log("teste async function")