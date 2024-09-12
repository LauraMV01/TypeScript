// const nombre ='Laura'
// const pserg="laura"
// const persona={
//     name: 'Laura',
//     age: 30
// }

//functions
//function saludar(name:string){
  //  console.log(`hola ${name}`)
//}

//saludar('pepe')
//saludar(4)

//primera forma de tipar un objeto
// function saludar({name, age}:{name:string, age:number}){
//     console.log(`este es ${name} y su edad es ${age}`)
// }

//Segunda forma de tipar, desestructurar el objeto
// function saludar(persona:{name:string, age:number}){
//     const {name, age}=persona
//     console.log(`este es ${name} y su edad es ${age}`)
// }



// function saludar({name, age}:{name:string, age:number}):string{
//     console.log(`este es ${name} y su edad es ${age}`)
//     return age
// }

// let username:string
// username=saludar({name:'ana', age:5})


// const f1 =(f2)=>{
//     return f2('hola')
// }

// f1((nombre:string)=>{console.log(`hola ${nombre}`)})


// const f1 =(f2: (nombre:string)=>void)=>{
//     return f2('hola')
// }

// const f0=(nombre:string)=>{console.log(`hola ${nombre}`)}

// f1(f0)

//Tipado de funcion flecha 1
const sumar =(a:number, b:number):number=>{return a+b}
const sumar2 =(a:number, b:number)=>{return a+b}
//Tipado de funcion flecha 2
const restar:(a:number, b:number)=>number =(a,b)=>{
    return a-b
}
const restar2:(a:number, b:number)=>number = (a,b)=>{
    return a-b
}

//Inferencia en una funcion 
const avengers=['spiderman','hulk','capi']
avengers.forEach((avenger)=>{
    console.log(avenger.toUpperCase())
})

