
function sing(){
    let letra="";
    let letraFinal="";
    for(let i=0;i<12;i++){
        if(i===4){
             letra = "there will be an answer, ";
             letraFinal = letraFinal + letra;   
        }else if(i===10){
            letra ="whisper words of wisdom, ";
            letraFinal = letraFinal + letra; 
        }else if(i===11){
            letra ="let it be";
            letraFinal = letraFinal + letra; 
        }else{
            letra ="let it be, ";
            letraFinal = letraFinal + letra; 
        }
        
    }
    return  letraFinal;
}
//Your code above ^^^

console.log(sing());