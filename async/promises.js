const promessa = Promise.resolve(5 + 5)

console.log("Algum código")

promessa
.then((value)=>{
    console.log(`A soma é ${value}`)
})
.then((value)=>{
    return value - 1
})
.then((value)=>{
    console.log(`O resultado menos 1 é igual a : ${value}`)
})
.catch((err)=>{console.log(err)})

console.log("Algum código")