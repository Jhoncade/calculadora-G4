 
function mostrar(){
    document.getElementById("resultado").innerText=total
    
}
    

function operador (operacion){
    switch(operacion){
        case '+':
            total=parseInt(num_1.value)+ parseInt(num_2.value)
            document.getElementById("simbolo").innerText='+';
            break
        case '-':
            total=parseInt(num_1.value)- parseInt(num_2.value)
            document.getElementById("simbolo").innerText='-'
            break
        case '*':
            total=parseInt(num_1.value)* parseInt(num_2.value)
            document.getElementById("simbolo").innerText='*'
        break
        case '/':
            total=parseInt(num_1.value)/ parseInt(num_2.value)
            document.getElementById("simbolo").innerText='/'
        break
        case 'AC':
            document.getElementById("resultado").innerText=""
    }
}