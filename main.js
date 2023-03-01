 
function mostrar(){
    document.getElementById("resultado").innerText=total
    
}

 


let guardado=""   
 

// console.log(guardado)
function guardar(){
    if (guardado==""){
        guardado=document.getElementById("num_1").value
        
        console.log(guardado)
    }

}



function operador (operacion){
    switch(operacion){
        case '+':
            document.getElementById("num_1").value=""
            total=parseInt(guardado)+1;
            document.getElementById("simbolo").innerText='+';
            
            break
        case '-':
            total=parseInt(num_1.value)- parseInt(num_1.value)
            document.getElementById("simbolo").innerText='-'
            break
        case '*':
            total=parseInt(num_1.value)* parseInt(num_1.value)
            document.getElementById("simbolo").innerText='*'
        break
        case '/':
            total=parseInt(num_1.value)/ parseInt(num_1.value)
            document.getElementById("simbolo").innerText='/'
        break
        case 'AC':
            document.getElementById("resultado").innerText=""
            document.getElementById("num_1").value=""
    }
}