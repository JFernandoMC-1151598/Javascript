fetch('https://siaweb-nodejs.carlos-reneren7.repl.co/productos')
.then(response => response.json())
.then(data => {
  // Crear una tabla HTML
  const table = document.createElement('table');
// Agregar encabezados a la tabla
const headers = ['Nombre','Precio','Descripcion','Visualizar'];
const headerRow = document.createElement('tr');
headers.forEach(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});
table.appendChild(headerRow);
 // Agregar filas de datos a la tabla
 data.forEach(producto => {
    const row = document.createElement('tr');
    const productonombre = document.createElement('td');
    productonombre.textContent = producto.nombre;
    const precio = document.createElement('td');
    precio.textContent = producto.precio;
    const descripcion = document.createElement('td');
    descripcion.textContent = producto.descripcion;

    const verbutton = document.createElement('button');
    verbutton.textContent= "Ver";


    row.appendChild(productonombre);
    row.appendChild(precio);
    row.appendChild(descripcion);
    row.appendChild(verbutton);

    table.appendChild(row);
    
  });

  // Agregar la tabla al documento
  document.body.appendChild(table);

})


/*
get /productos: obtengo la relacion de productos
get /productos/nombre_producto: obtengo producto por nombre
post /productos: Registra producto nuevo
put /productos/nombre_producto: actualiza un producto por nomre
delete /productos/nombre_producto: elimina producto por nombre
*/
