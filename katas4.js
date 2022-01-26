const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults(arr, titulo) {
    const displayResultado = document.getElementById('displayResultado');

    displayResultado.innerHTML = ""

    const tituloKata = document.createElement('h2');
    tituloKata.innerHTML = titulo;

    const paragrafoResultado = document.createElement('p');
    paragrafoResultado.innerHTML = arr;

    displayResultado.appendChild(tituloKata);
    displayResultado.appendChild(paragrafoResultado);

}

    // implemente o código do kata 1 aqui
    /*
    1. Kata 1 - Escreva uma função que retorna um array com 
    as cidades em 'gotCitiesCSV'. Lembre-se de também adicionar os resultados à página.
     */

function kata1() {

    const output = gotCitiesCSV.split(",");



    showResults(output, 'kata 1');
}
const buttonkata1 = document.getElementById('kata1');
buttonkata1.addEventListener('click', kata1);
//console.log(kata1());
// daqui em diante é contigo

/*
2. Kata 2 - Escreva uma função que retorna um array das palavras na 
frase contida em 'bestThing'. Lembre-se de também adicionar os resultados à página.
*/


function kata2() {
 
    const output = bestThing.split(" ");



    showResults(output, 'kata 2');
}
const buttonkata2 = document.getElementById('kata2');
buttonkata2.addEventListener('click', kata2);

/*3. Kata 3 - Escreva uma função que retorna uma string 
separada por ponto-e-vírgulas em vez das vírgulas de 'gotCitiesCSV'. 
Lembre-se de também adicionar os resultados à página.*/

function kata3() {

    
    const split = gotCitiesCSV.split(',');

    const output = split.join("; ")

    showResults(output, 'kata 3');
}
const buttonkata3 = document.getElementById('kata3');
buttonkata3.addEventListener('click', kata3);


/* kata 4- Escreva uma função que retorne uma string CSV (separada por vírgulas) 
de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.*/


function kata4() {


    const output = lotrCitiesArray.join(", ")

    


    showResults(output, 'kata 4');
}
const buttonkata4 = document.getElementById('kata4');
buttonkata4.addEventListener('click', kata4);


/* Kata 5 - Escreva uma função que retorna um array com as 5 primeiras cidades de 
'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.
*/

function kata5() {

    const output = lotrCitiesArray.slice(0,5);

   
   



    showResults(output, 'kata 5');
}
const buttonkata5 = document.getElementById('kata5');
buttonkata5.addEventListener('click', kata5);

/*Kata 6 - Escreva uma função que retorna um array com as 5 últimas cidades de 
'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.
*/

function kata6() {

    
    const output = lotrCitiesArray.slice(3)

    


    showResults(output, 'kata 6');
}
const buttonkata6 = document.getElementById('kata6');
buttonkata6.addEventListener('click', kata6);


/*Kata 7 - Escreva uma função que retorna um array contendo da 3ª a 5ª cidades de 
'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.*/

function kata7() {

    
    const output = lotrCitiesArray.slice(2, -3);
    const output2 = output.splice(1, 1)

   


    showResults(output, 'kata 7');
}
const buttonkata7 = document.getElementById('kata7');
buttonkata7.addEventListener('click', kata7);

/*Kata 8 - Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray'
 e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.*/

 function kata8() {

    
    const output = lotrCitiesArray.splice(2, 1);
    
    

   


    showResults(lotrCitiesArray, 'kata 8');
}
const buttonkata8 = document.getElementById('kata8');
buttonkata8.addEventListener('click', kata8);

/*Kata 9 - Escreva uma função que use 'splice' para remover todas as cidades depois de
 'Dead Marshes' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. 
 Lembre-se de também adicionar os resultados à página.*/

 function kata9() {

    
    const output = lotrCitiesArray.splice(6, 2);
    
    

   


    showResults(lotrCitiesArray, 'kata 9');
}
const buttonkata9 = document.getElementById('kata9');
buttonkata9.addEventListener('click', kata9);

/*Kata 10 - Escreva uma função que use 'splice' para adicionar 'Rohan' de volta ao 
'lotrCitiesArray' logo depois de 'Gondor' e retorne o novo 'lotrCitiesArray' modificado.
 Lembre-se de também adicionar os resultados à página.*/

 function kata10() {

    
    const retiraRohan = lotrCitiesArray.splice(2, 1);

    const output = lotrCitiesArray.splice(2, 0, retiraRohan)
    

   


    showResults(lotrCitiesArray, 'kata 10');
}
const buttonkata10 = document.getElementById('kata10');
buttonkata10.addEventListener('click', kata10);
 
/*Kata 11 - Escreva uma função que use 'splice' para renomear 'Dead Marshes' para
 'Deadest Marshes' em 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado.
  Lembre-se de também adicionar os resultados à página.*/

   function kata11() {

    
    const retiraRohan = lotrCitiesArray.splice(5, 1);

    const output = lotrCitiesArray.splice(5, 0, 'Deadest Marshes')
    

   


    showResults(lotrCitiesArray, 'kata 11');
}
const buttonkata11 = document.getElementById('kata11');
buttonkata11.addEventListener('click', kata11);

/*Kata 12 - Escreva uma função que usa 'slice' para retornar uma string com os primeiros
 14 caracteres de 'bestThing'. Lembre-se de também adicionar os resultados à página.*/


function kata12() {

    
    const output = bestThing.slice(0, 17)

    


    showResults(output, 'kata 12');
}
const buttonkata12 = document.getElementById('kata12');
buttonkata12.addEventListener('click', kata12);

/*Kata 13 - Escreva uma função que usa 'slice' para retornar uma string com os 12 últimos
 caracteres de 'bestThing'. Lembre-se de também adicionar os resultados à página.*/

 function kata13() {

    
    const output = bestThing.slice(65, 81)

    


    showResults(output, 'kata 13');
}
const buttonkata13 = document.getElementById('kata13');
buttonkata13.addEventListener('click', kata13);

/*Kata 14 - Escreva uma função que usa 'slice' para retornar uma string com os caracteres
 entre as posições 23 e 38 de 'bestThing'. Lembre-se de também adicionar os resultados à página.*/

  function kata14() {

    
    const output = bestThing.slice(28, 48)

    


    showResults(output, 'kata 14');
}
const buttonkata14 = document.getElementById('kata14');
buttonkata14.addEventListener('click', kata14);

/*Kata 15 - Escreva uma função que faz exatamente a mesma coisa que a #13 mas use o
 método 'substring' em vez de 'slice'. Lembre-se de também adicionar os resultados à página.*/

 function kata15() {

    
    const output = bestThing.substring(65, 81)

    


    showResults(output, 'kata 15');
}
const buttonkata15 = document.getElementById('kata15');
buttonkata15.addEventListener('click', kata15);

/*Kata 16 - Escreva uma função que faça exatamente a mesma coisa que o #14 mas use o 
método 'substring' em vez de 'slice'. Lembre-se de também adicionar os resultados à página.*/

  function kata16() {

    
    const output = bestThing.substring(28, 48)

    


    showResults(output, 'kata 16');
}
const buttonkata16 = document.getElementById('kata16');
buttonkata16.addEventListener('click', kata16);

/*Kata 17 - Escreva uma função que use 'pop' para remover a última cidade de 'lotrCitiesArray
 e retorne o novo array. Lembre-se de também adicionar os resultados à página.*/

 function kata17() {

    
    const output = lotrCitiesArray.pop();
    
    

   


    showResults(lotrCitiesArray, 'kata 17');
}
const buttonkata17 = document.getElementById('kata17');
buttonkata17.addEventListener('click', kata17);

/*Kata 18 - Escreva uma função que usa 'push' para adicionar de volta, no final do array, 
a cidade de 'lotrCitiesArray' que foi removida no #17 e retorne o novo array.
 Lembre-se de também adicionar os resultados à página.*/

 function kata18() {

    
    const removeCidade = lotrCitiesArray.pop();
    const output = lotrCitiesArray.push(removeCidade);
    
    

   


    showResults(lotrCitiesArray, 'kata 18');
}
const buttonkata18 = document.getElementById('kata18');
buttonkata18.addEventListener('click', kata18);

/*Kata 19 - Escreva uma função que usa 'shift' para remover a primeira cidade de 
'lotrCitiesArray e retorne o novo array. Lembre-se de também adicionar os resultados à página.*/

 function kata19() {

    
    const output = lotrCitiesArray.shift();
    
    

   


    showResults(lotrCitiesArray, 'kata 19');
}
const buttonkata19 = document.getElementById('kata19');
buttonkata19.addEventListener('click', kata19);

/*Kata 20 - Escreva uma função que use 'unshift' para adicionar de volta, no começo do array, 
a cidade de 'lotrCitiesArray' que foi removida no #19 e retorne o novo array.
 Lembre-se de também adicionar os resultados à página.*/

  function kata20() {

    
    const removeShift = lotrCitiesArray.shift();
    const output = lotrCitiesArray.unshift(removeShift)
    
    

   


    showResults(lotrCitiesArray, 'kata 20');
}
const buttonkata20 = document.getElementById('kata20');
buttonkata20.addEventListener('click', kata20);