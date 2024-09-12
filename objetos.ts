//Objetos
//Alias
// type Hero={
//     name:string
//     age:number
// }
//una forma
// let hero:Hero={
//     name: 'thor',
//     age: 34
// }

// function hero2(name:string, age:number):Hero{
//     return {name,age}
// } 
// const thor=hero2('thor',43)

//otra forma 
// function hero2(hero:Hero):Hero{
//     const {name,age}=hero
//     return {name,age}
// } 
// const thor=hero2({name:'thor',age:45})

//propiedades opcionales 
type Hero={
    readonly id?:number//solo de lectura
    name:string
    age:number
    isActive?:boolean
}
function hero2(hero:Hero):Hero{
    const {name,age}=hero
    return {name,age,isActive:true}
} 
const thor=Object.freeze(hero2({name:'thor',age:45}))//el object freeze hace que sea inmutable
console.log(thor.isActive)
thor.id?.toString()
