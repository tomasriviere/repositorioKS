const comprar = []
const diseños = []
let pisos = 0
let cairel = 0
let l = 0
let totalMts = 0
let totalPrice = 0



class Product{
    constructor(order, lampara, price){
        this.order = order
        this.diseños = lampara
        this.price = price
    }
}


diseños.push(new Product("A", "candelabro KS", 20))
diseños.push(new Product("B", "colgante caracol", 12))
diseños.push(new Product("C", "imperio circular", 9))
diseños.push(new Product("D", "aplique rey", 27))
diseños.push(new Product("E", "carrobar", 22))
diseños.push(new Product("F", "sillon love", 15))
console.table(diseños)

class Carro{
    constructor(lamparas, width, pisos, price){
        this.lamparas = lamparas
        this.width = width
        this.pisos = pisos
        this.price = price
    }
}
debugger
let cotizar = confirm("está buscando cotizar tu lampara?")
if (cotizar){
    pisos = parseInt(prompt("por favor, ingrese la cantidad de pisos"))
    if(pisos != NaN){
        for(let j = 0; j < pisos; j++){
            carrito()      
        }
    }
}         

function carrito(){    
    let which = parseInt(prompt(`elija un producto:\n 1) ${diseños[0].lampara}\n 2) ${diseños[1].lampara}\n 3) ${diseños[2].lampara}\n 4) ${diseños[3].lampara}\n 5) ${diseños[4].lampara}\n 6) ${diseños[5].lampara}\n` ))
    l = which - 1
    let lamparas = diseños[l].lampara
    let width = parseInt(prompt("ingrese el ancho de su lampara en cm"))
    let pisos = parseInt(prompt("ingrese la cantidad de pisos de su lampara"))
    let totalMts = width * pisos
    let precioTotal = diseños[l].price * totalMts
       comprar.push(new Carro(lamparas, width, pisos, price))
       console.table(comprar)
}

for(let t = 0;  t < comprar.length; t++){
    totalPrice = comprar[t].price + totalPrice
}
alert("deberas abonar $: " + totalPrice)

menu.addEventListener("mouseover", () => {
    menu.className = "colorgris"
})

window.onscroll = (() => {
    debugger
    const navScroll = document.querySelector("nav")
    if (window.scrollY > 30) {
      navScroll.className = "opacity"
    } else {
      navScroll.className = ""
    }
  });