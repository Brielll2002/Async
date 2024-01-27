const p1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(10)
    }, 3000)
})

const p2 = Promise.resolve(10+10)

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30)
    }
    else{
        reject("Erro !")
    }
})

//Faz com que todas as promises sejam "entregue" de uma vez
Promise.all([p1, p2, p3]).then((values)=>{
    console.log(values)
})