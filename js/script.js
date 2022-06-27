function all() {
const form = document.querySelector('.form');
const result = document.querySelector('.result')

form.addEventListener('submit', (event) =>{
    event.preventDefault();


       const peso = Number (document.querySelector('.peso').value);
       const altura = Number (document.querySelector('.altura').value);
       const imc = peso / (altura ** 2); 
       //imc = imc.toFixed(2)
       //console.log(imc.toFixed(2));

       if (!peso) {
        result.innerHTML = `Peso invalído`
        return; // I put return to not continue the code 
       } else

       if (!altura) {
        result.innerHTML = `Altura invalída`
        return; // I put return to not continue the code 
       } else

       if (peso == '' || altura == '') {
        result.innerHTML = `Por favor coloque peso e altura na tabela`
        colorDefault ();
        result.style.color = "black";
        return; // I put return to not continue the code 
       } else
    
       if (imc < 18.50 ) {
        result.innerHTML = `Seu IMC é: ${imc} você está Abaixo do peso`;
        result.style.color = "#ff0b03";
        result.style.fontSize = "18px";
       } else
    
       if (imc >= 18.50 && imc <= 24.90) {
        result.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Você está com o Peso Normal`;
        result.style.color = "#05f705";
        result.style.fontSize = "18px";
       } else 

       if (imc >= 25 && imc <= 29.90) {
        result.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Você está com Sobrepeso` ; 
        result.style.color = "#ff0b03";
        result.style.fontSize = "18px";   
       } else

       if (imc > 30.00 && imc <= 34.90)  {
        result.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Obesidade grau 1`;
        result.style.color = "#ff0b03";  
        result.style.fontSize = "18px";
       } else

       if (imc >= 35 && imc <= 39.90) {
        result.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Obesidade grau 2`; 
        result.style.color = "#ff0b03"; 
        result.style.fontSize = "18px";
       } else

       if (imc >= 40) {
        result.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Obesidade grau 3`;
        result.style.color = "#ff0b03"; 
        result.style.fontSize = "18px";  
       } 

       //function innerMessage(msg) { //Another way 
       // result.innerHTML = msg;
       //}

       //function innerMessage(msg) { //if I did it I can change all things in style.css instead of coding with .style in js
        //result.innerHTML = ''; //clean result
       // const p = document.createElement('p'); //add an element <p>
       // p.classList.add = ('paragrafo') //add a class 
       // p.innerHTML = 'teste'
        //result.appendChild(p) // insert this element/child to result
        
      // }

      function colorDefault () {
        result.style.color = "#ff0b03";
        result.style.fontSize = "18px"; 
        result.style.padding = "10px, 20px"
        result.style.backgroundColor = "green"
      }

})
}
all();