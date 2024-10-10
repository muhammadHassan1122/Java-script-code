const dogs = [
    {name:'Snikers', age: 2},
    {name:'hugo', age: 8}
]

function makeGreen() {
    const p = document.querySelector('p')
    p.style.color= '#BADA55'
    p.style.fontSize = '50px'
}

// regular
console.log("Hello")

// Interpolated
console.log("Hello I am %s string!", '+pop' )

//styled

console.log(" %c I am some great text", 'font-size: 20px; background: red; text-shadow: 5px 5px 0 black; color: white;' )

// warning

console.warn("OH NOOO")

//errer

console.error("shit")

// Info

console.info("apple eat 3-4 people eat year")

//testing
const p = document.querySelector('p')
console.assert("p.classList.contain('ouch'), 'This is wrong'")

//clearing

// console.clear()

//DOM element

console.log(p)
console.dir(p)

//grouping two cointainer

dogs.forEach(dog =>{

    console.group(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(` ${dog.name} is ${dog.age} years old`)
    console.groupEnd(`${dog.name}`)

})

//counting
console.count("end")
console.count("end")
console.count("end")
console.count("end")
console.count("end")
console.count("end")
console.count("end")
console.count("end")



//timing
console.time("fetching data")
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd("fetching data")
    console.log("data")
})