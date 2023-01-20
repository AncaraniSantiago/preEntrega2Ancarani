const arrProductos=[
producto1={id:Number(1), nombre: "Ficha Macho", categoria: "Accesorios",moneda:"$", precio:Number(238),cantidad:Number(0), stock:Number(2000), imgUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_747395-MLA50110782466_052022-F.webp"},
producto2={id:Number(2), nombre: "Ficha Hembra", categoria: "Accesorios",moneda:"$", precio:Number(262),cantidad:Number(0), stock:Number(2200), imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_832554-MLA50110634904_052022-F.webp"},
producto3={id:Number(3), nombre: "Contactor", categoria: "Electronica",moneda:"$", precio:Number(6578),cantidad:Number(0), stock:Number(10), imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_839522-MLA31063051301_062019-F.webp"},
producto4={id:Number(4), nombre: "Velador Ferrolux", categoria: "Iluminacion",moneda:"$", precio:Number(2870),cantidad:Number(0), stock:Number(30), imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_880294-MLA40720397042_022020-F.webp"}
];
arrProductos.forEach(producto => {
  let tarjetaProducto = document.createElement("div")
  tarjetaProducto.classList.add("tarjeta")
  tarjetaProducto.innerHTML=`
  <h3>${producto.nombre}</h3>
  <h2>${producto.moneda+producto.precio}</h2>
  <img src=${producto.imgUrl}/>
  <button>Comprar</button>
  `
  document.body.appendChild(tarjetaProducto)
})
const arrCarro=[]

function carro() {
  optiOn()
  if (opcion==="1") {
    verListProd()
  }
  else if(opcion==="2"){
    verCarro1()
  }
  else if(opcion==="3"){
    comprarOn()
  }
  else{optiOn()}
}  
function optiOn() {
  opcion=prompt("Ingrese el numero correspondiente para acceder\n\n1 - Para ver la lista de productos\n2 - Para ver tu carrito\n3 - Confirmar compra")
  
}
function verListProd() {
  todosNombres=""
  for (const producto of arrProductos) {
    todosNombres+=(producto.id+" "+producto.nombre+producto.moneda+producto.precio+"\n");}
    let elije=Number(prompt("Elija el producto que desea comprar o ingrese 0 para volver\n\n"+ todosNombres)) 
    while (elije!=0) {
      for (const producto of arrProductos){ 
        if(producto.id == elije){ 
          producto.cantidad++, producto.stock--}  
        }
        arrCarro.push(arrProductos.find((producto) => producto.id == elije));
        verListProd()
      }
    carro()  
    }

function verCarro1() {
  const unicos = arrCarro.filter((valor, indice) => {
    return arrCarro.indexOf(valor) === indice;
  }
);
  let todosCarro=""
  unicos.forEach (producto =>  {
  todosCarro+=("Nombre: "+producto.nombre+" $ "+producto.precio+" Cantidad: "+producto.cantidad+"\n");
    }
  )
  console.log(todosCarro);
  alert(todosCarro)
  carro()
}
function comprarOn() {
  let tot=Number()
  arrCarro.forEach(producto => {
  tot += (producto.cantidad*producto.precio)
  })
alert("Gracias por su compra\n\nEl total a abonar es de: $ "+tot)
}
