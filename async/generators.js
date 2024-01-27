function* generator(){
    yield 1
    yield 2
}
const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)