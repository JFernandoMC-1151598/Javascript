fetch('https://siaweb-nodejs.carlos-reneren7.repl.co/productos')
.then(response => response.json())
.then(data => {
  // Crear una tabla HTML
  const table = document.createElement('table');
// Agregar encabezados a la tabla
const headers = ['Nombre','Precio','Descripcion'];
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
    const productonombreCell = document.createElement('td');
    productonombreCell.textContent = producto.nombre;
    const precioCell = document.createElement('td');
    precioCell.textContent = producto.precio;
    const descripcionCell = document.createElement('td');
    descripcionCell.textContent = producto.descripcion;

    row.appendChild(productonombreCell);
    row.appendChild(precioCell);
    row.appendChild(descripcionCell);

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
