setTimeout(() => {
    var operandoa;
    var operandob;
    var operacion;
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //Eventos de click
    uno.addEventListener('click', function(e){
        resultado.textContent = resultado.textContent  + "1";
    });
    dos.addEventListener('click', function(e){
        resultado.textContent = resultado.textContent  + "2";
    });
    tres.addEventListener('click', function(e){
        resultado.textContent = resultado.textContent  + "3";
    });
    cuatro.addEventListener('click', function(e){
        resultado.textContent = resultado.textContent  + "4";
    });
    cinco.addEventListener('click', function(e){
        resultado.textContent = resultado.textContent  + "5";
    });
    seis.addEventListener('click', function(e){
        resultado.textContent = resultado.textContent  + "6";
    });
    siete.addEventListener('click', function(e){
        resultado.textContent = resultado.textContent  + "7";
    });
    ocho.addEventListener('click', function(e){
        resultado.textContent = resultado.textContent  + "8";
    });
    nueve.addEventListener('click', function(e){
        resultado.textContent = resultado.textContent  + "9";
    });
    cero.addEventListener('click', function(e){
        resultado.textContent = resultado.textContent  + "0";
    });
    reset.addEventListener('click', function(e){
        resetear();
    });
    suma.addEventListener('click', function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    });
    resta.addEventListener('click', function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    });
    multiplicacion.addEventListener('click', function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    });
    division.addEventListener('click', function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    });
    igual.addEventListener('click', function(e){
        operandob = resultado.textContent;
        resolver();
    });

    function limpiar(){
        resultado.textContent = "";
    }
    function resetear(){
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }

    function resolver(){
        var res = 0;
        switch(operacion){
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;
            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;
            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
        }
        resetear();
        resultado.textContent = res;
    }
}, 1000);


 