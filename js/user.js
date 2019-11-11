//Función para mostrar u ocultar un elemento
var clic = 1;
function showHide(id) {
    if (clic == 1) {
        document.getElementById(id).style.display = 'block';
        clic = clic + 1;
    } else {
        document.getElementById(id).style.display = 'none';
        clic = 1;
    }
}


//Guardar
let name_field = document.querySelector("#name")
let doc_field = document.querySelector("#doc")
let type_dropdown = document.querySelector("#type")
let placa_field = document.querySelector("#placa")
let desc_field = document.querySelector("#description")
let submit_btn = document.querySelector("#enter_btn")
let table_body = document.querySelector("#tbody_id")

let addVisitor = (name, documento, type, placa, description, x) => {
    let new_row = document.createElement("tr")
    let datetime = new Date()
    new_row.className = "table_active"
    new_row.innerHTML =
        `<td scope='row'>${name}</td>
         <td>${documento}</td>
        <td>${type}</td>
        <td>${placa}</td>
        <td>${description}</td>
        <td>${datetime.toLocaleString()}</td>
        `
    table_body.appendChild(new_row)
}
submit_btn.addEventListener("click", () => {
    let name = name_field.value
    let documento = doc_field.value
    let type = type_dropdown.options[type_dropdown.selectedIndex].text
    let placa = placa_field.value
    let description = desc_field.value
    
    addVisitor(name, documento, type, placa, description)

 //Validaciones RegExp
    
})


/*//Función Buscar
function search() {
  var input, cell, fltr, table, tr, td, i, j;
  input = document.getElementById("search_input");
  fltr = input.value.toUpperCase();
  table = document.getElementById("table_id");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "none";  // Oculta inicalmente la fila
    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++) {
      cell = tr[i].getElementsByTagName("td")[j];
      if (cell) {
        if (cell.innerHTML.toUpperCase().indexOf(fltr) > -1) {
          tr[i].style.display = "";
          break;
        } 
      }
    }
  }
}*/