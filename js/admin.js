var clic = 1;

let name_field = document.querySelector("#name")
let doc_field = document.querySelector("#doc")
let type_dropdown = document.querySelector("#type")
let placa_field = document.querySelector("#placa")
let desc_field = document.querySelector("#description")
let submit_btn = document.querySelector("#enter_btn")
let table_body = document.querySelector("#tbody_id")

function fetchData(){
    fetch("ruta")
    .then()
    .then((data)=>{
        data.forEach(element => {
            let new_row = document.createElement("tr")
    new_row.className = "table_active"
    new_row.innerHTML =
        `<td scope='row'>${element.nombre}</td>
         <td>${documento}</td>
        <td>${type}</td>
        <td>${placa}</td>
        <td>${description}</td>
        <td>${datetime.toLocaleString()}</td>
        <td class="sticky">
            <button type="button" clik=remove(element.id) id="btn" style="color:#23426B" class="btn delete"><i class="fa fa-trash"></i></button>
            
        </td> `
   
    table_body.appendChild(new_row)
        });
    })
}

let addVisitor = (name, documento, type, placa, description) => {
    fetch("")
    .then()
    .then((data)=>{
        
        fetchData()
    })
    
    
    btn_drop.addEventListener("click", (event) => {
    row = element.parentElement.parentElement;
    table_body.removeChild(row)                    
    })
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

// Funcionamiento ocultar elementos en diferentes estados
function showHide(id) {
    if (clic == 1) {
        document.getElementById(id).style.display = 'block';
        clic = clic + 1;
    } else {
        document.getElementById(id).style.display = 'none';
        clic = 1;
    }
}

function showEditModal(){
    document.getElementById('modal_id').style.display='block';
    document.getElementById('enter_btn').style.display='none';
    document.getElementById('save_btn').style.display='block';  
}