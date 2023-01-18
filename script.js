const arrProductos=[
producto1={id: 1, nombre: "Ficha Macho", categoria: "Accesorios", precio:Number(238),cantidad:Number(0), stock:Number(2000), imgUrl: "https//http2.mlstatic.com/D_NQ_NP_2X_838772-MLA50110819676_052022-F.webp"},
producto2={id: 2, nombre: "Ficha Hembra", categoria: "Accesorios", precio:Number(262),cantidad:Number(0), stock:Number(2200), imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_832554-MLA50110634904_052022-F.webp"},
producto3={id: 3, nombre: "Contactor", categoria: "Electronica", precio:Number(6578),cantidad:Number(0), stock:Number(10), imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_839522-MLA31063051301_062019-F.webp"},
producto4={id: 4, nombre: "Velador Ferrolux", categoria: "Iluminacion", precio:Number(2870),cantidad:Number(0), stock:Number(30), imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_880294-MLA40720397042_022020-F.webp"}
];
const arrCarro=[]

carro()
function carro() {
  optiOn()
  if (opcion==="1") {
    verListProd()
  }
  else if(opcion==="2"){
    verCarro1()
    verCarro2()
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
    todosNombres+=(producto.id+" "+producto.nombre+" $"+producto.precio+"\n");
  }
  elije=prompt("Elija el producto que desea comprar o ingrese 0 para volver\n\n"+ todosNombres)
  while(elije!="0") {
    if (elije==="1") {
      // producto1.cantidad++;
      arrCarro.splice(0,1,arrProductos.find((producto) => producto.id == "1", producto1.cantidad++,producto1.stock--))
      verListProd()
    }
    else if(elije==="2"){
      // producto2.cantidad++;
      arrCarro.splice(1,1,arrProductos.find((producto) => producto.id=="2",producto2.cantidad++,producto2.stock--))
      verListProd()
    }
    else if(elije==="3"){
      // producto3.cantidad++;
      arrCarro.splice(2,1,arrProductos.find((producto) => producto.id=="3",producto3.cantidad++,producto3.stock--))
      verListProd()
    }
    else if(elije==="4"){
      // producto4.cantidad++;
      arrCarro.splcie(3,1,arrProductos.find((producto) => producto.id=="4",producto4.cantidad++,producto4.stock--))
      verListProd()
    }
    else{
      carro()
    }
  }
  carro()
}
function verCarro1() {
  let todosCarro=""
  arrCarro.forEach (producto =>  {
  todosCarro+=("Nombre: "+producto.nombre+" $ "+producto.precio+" Cantidad: "+producto.cantidad+"\n");
    }
  )
  console.log(todosCarro);
  alert(todosCarro)
  carro()
}
function verCarro2() {
}
function comprarOn() {
  let tot=Number()
  arrCarro.forEach(producto => {
  tot += (producto.cantidad*producto.precio)
  })
alert("Gracias por su compra\n\nEl total a abonar es de: $ "+tot)
carro()
}