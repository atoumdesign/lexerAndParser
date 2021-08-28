function example(n) {
    let code = document.getElementById("floatingTextarea");
    switch (n) {
        case 1:
            code.textContent = "(let ((x 2) (y 3)) (let ((x 7) (z (+ x y))) (* z x)))";
            break;
        case 2:
            code.textContent = "(define add4 (let ((x 4)) (lambda (y) (+ x y)))) (add4 6)";
            break;
    
        default:
            break;
    }
}

function setClean() {
    let code = document.getElementById("floatingTextarea");
    code.textContent ="";
}

document.getElementById('inputfile').addEventListener('change', function() {          
    let fr=new FileReader();
    fr.onload=function(){
        document.getElementById('floatingTextarea').textContent=fr.result;
    } 
    fr.readAsText(this.files[0]);
})

function setExport() {
    let code = document.getElementById("floatingTextarea");
    let a = document.createElement('a');
    a.href = "data:application/octet-stream,"+encodeURIComponent(code.textContent);
    a.download = 'code.scheme';
    a.click();
}

//####################################################################################################

function isVertice(graph,from,to) {
    return graph[from][to];
}

function isSymbol(char) {
    return alphabet.indexOf(char);
}

function currentChar() {
    return code[pos];
}

function defineToken(t) {
    for (let index = 0; index < delimitadores.length; index++) {
        if (t == delimitadores[index]) {
            return "tk_delimitador";
        }
    }
    for (let index = 0; index < operadores.length; index++) {
        if (t == operadores[index]) {
            return "tk_operador";
        }
    }
    for (let index = 0; index < palavras_reservadas.length; index++) {
        if (t == palavras_reservadas[index]) {
            return "tk_reservada";
        }
    }
    return "tk_identificador";
}

function isToken() {
    let fr = initial;
    let condition = 1;
    while (condition == 1) {
        console.log("pos: "+pos+" | atual: "+currentChar());
        if (currentChar() == '\n') {
            tmp = [];
            
        }

        condition = isVertice(delta,fr,isSymbol(currentChar()));
        if (condition == 2) {
            error = -1;
            return;
        }


        if (condition == 3) {
            tmp=[];

        }else if (condition == 1) {
            fr = isSymbol(currentChar());
            tmp.push(currentChar());

        }else{


            tokens.push({token: tmp.join(""), tk:defineToken(tmp.join(""))});
            tmp=[];
            return;
        }
        pos++;

        if (currentChar() == undefined){
           error = -1;

        }
    }
}

//####################################################################################################

function analisar(params) {
    code = document.getElementById("floatingTextarea");
    let analysis = document.getElementById("analysis");
    let result = document.getElementById("result");
    result.remove();
    result = document.createElement("DIV");
    result.setAttribute("id","result");

    code = code.value;
    pos =0;
    tmp=[];
    tokens=[];
    error = 0;
    initial = isSymbol(" ");

    while (error != -1) {
        error = isSymbol(currentChar());
        isToken();
    }

    // for (let index = 0; index < tokens.length; index++) {
    //     result.textContent = result.textContent+"<p>token: "+tokens[index].token+" | tk: "+tokens[index].tk+"</p>";
    // }
    //result.textContent = code;

    //download('test.txt', createTable(tokens));

    result.appendChild(createTable(tokens));
    analysis.appendChild(result);

}

//####################################################################################################

initial = isSymbol(" ");


function setTD(text) {
    var z = document.createElement("TD");
    z.appendChild(document.createTextNode(text));
    return z;
}

function setTH(text) {
    let z = document.createElement("TH");
    z.appendChild(document.createTextNode(text));
    return z;
}

function setTR(id) {
  var y = document.createElement("TR");
  y.setAttribute("id", id);
  return y;
}


function createTable(info) {
    let column = info.length;
    let row = 1;

    let x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    x.setAttribute("class","table table-sm table-hover");
    document.body.appendChild(x);

    let thead = document.createElement("THEAD");
    let tr = document.createElement("TR");
    tr.appendChild(setTH("item"));
    tr.appendChild(setTH("token"));
    tr.appendChild(setTH("tipo"));
    thead.appendChild(tr);
    x.appendChild(thead);

    for (let index = 0; index < column; index++) {
        document.getElementById("myTable").appendChild(setTR("row"+index));
        document.getElementById("row"+index).appendChild(setTD(index));
        for (let index2 = 0; index2 < row; index2++) {
            document.getElementById("row"+index).appendChild(setTD(info[index].token));
            document.getElementById("row"+index).appendChild(setTD(info[index].tk));
        }
    }
    return x;
}

//####################################################################################################

