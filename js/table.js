function setTD(text) {
    let td = document.createElement("TD");
    td.appendChild(document.createTextNode(text));
    return td; 
}

function setTH(text) {
    let th = document.createElement("TH");
    th.appendChild(document.createTextNode(text));
    return th; 
}

function setTR(id) {
    let tr = document.createElement("TR");
    tr.setAttribute("id", id);
    return tr;
}

function setTable(info,field) {
    let div = document.getElementById(field);
    let table = document.createElement("TABLE");
    table.setAttribute("id", "myTable");
    table.setAttribute("class","table table-sm table-hover");
    document.body.appendChild(table);

    let thead = document.createElement("THEAD");
    let tr = document.createElement("TR");
    for (let index = 0; index < alphabet.length; index++) {
        tr.appendChild(setTH(alphabet[index]));
        
    }
    thead.appendChild(tr);
    table.appendChild(thead);

    for (let index = 0; index < alphabet.length; index++) {
        table.appendChild(setTR("row"+index));
        for (let index2 = 0; index2 < alphabet.length; index2++) {
            document.getElementById("row"+index).appendChild(setTD(info[index][index2]));
        }
    }
    div.appendChild(table);
}

setTable(delta,'table_automato');