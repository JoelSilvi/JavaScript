const a = []
console.log(a)

// const b = [1, true, "joel","aguilar", ["AS","BS","CS",["Deep","Deep",["Deep,Deep"]]]]
const b = [1, true, "joel", ["AS","BS","CS"]]
const c = [1, true, "joel", ["AS","BS","CS",[1,2,3]]]
const d = [1, true, "joel", ["AS","BS","CS",[1,2,3,[9825,56565,"deep"]]]]

// llenar elementos
const e = Array.of("X","Y","Z",9,8,7)
console.log(e)



console.log(b)
console.log(b.length)

// console.log(b[2])
// console.log(b[0])
console.log(b[3][2])
console.log(c[3][3][1])
console.log(d[3][3][3][2])


const f = Array(100).fill(false)

console.log(f)

const g = new Array()
console.log(g)

const h = new Array(1,1,3,true,false)
console.log(h)

const colores = ["Rojo","Verde","Negro"]
console.log(colores)

// se agrega al final del arreglo
colores.push("Amarillo")
console.log(colores)

// pop quita el último elemento
colores.pop()
console.log(colores)

colores.pop()
console.log(colores)

colores.forEach(function(el){
    console.log(`<li> ${el} </>`)
})

colores.forEach(function(el,index){
    console.log(`<li id="${index}"> ${el} </>` )
})