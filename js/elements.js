function setField(id,text) {
    return "\
        <tr>\
            <td>\
                <div class='custom-control custom-switch custom-control-inline'>\
                    <input type='checkbox' class='custom-control-input' id='id_"+id+"'>\
                    <label class='custom-control-label' for='id_"+id+"'>"+text+"</label>\
                </div>\
            </td>\
            <td>\
                <input type='text' autocomplete='no' class='form-control bg-light border-0 small' id='input_"+id+"' placeholder='tk_delimitador por exemplo' aria-label='Search' aria-describedby='basic-addon2'>\
            </td>\
        </tr>";  
}

function setElements(group,field) {
    let div = document.getElementById(field);
    let table = document.createElement("TABLE");
    table.setAttribute("id", "myTable");
    table.setAttribute("class","table table-sm table-hover");
    let tbody = document.createElement("TBODY");
    for (let index = 0; index < group.length; index++) {
        tbody.insertAdjacentHTML('afterbegin',setField(index,group[index]));
    }
    table.appendChild(tbody);
    div.appendChild(table);
}

setElements(delimitadores,'group_delimitador');
setElements(operadores,'group_operador');
setElements(palavras_reservadas,'group_reservadas');

