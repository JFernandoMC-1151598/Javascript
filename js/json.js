let url = 'https://siaweb-nodejs.carlos-reneren7.repl.co/productos'
fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))

const mostrarData = (data) => {
  console.log(data)
  let body = ''
  for (let i = 0; i < data.length; i++) {
    body += `<tr><td>${data[i].nombre}</td><td>${data[i].precio}</td><td>${data[i].descripcion}
        </td><td><button onclick="location.href = 'ver_producto.html'">Ver</button></td></tr>`
  }
  document.getElementById('data').innerHTML = body
}

let data = new FormData(document.getElementById("#formulario"));

let opciones = {

  method: 'POST',
  body: data,
  headers: new Headers()
}
fetch(url, opciones)
  .then(function () {
  });



/*
get /productos: obtengo la relacion de productos
get /productos/nombre_producto: obtengo producto por nombre
post /productos: Registra producto nuevo
put /productos/nombre_producto: actualiza un producto por nomre
delete /productos/nombre_producto: elimina producto por nombre
*/
