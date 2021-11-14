

//dom elemnts
const input1 = document.querySelector("input[name='word1']");
const submit = document.querySelector("input[type='submit']");
const formulario = document.querySelector("form");
const solution= document.getElementById("solution");
const solutionContainer= document.getElementById('solution-container');
const h3 = document.getElementById('h3');
solutionContainer.appendChild(h3)


//event handler
const handleSubmit = (event) =>{
    event.preventDefault();
    //inputs values
    console.log(input1.value.toLowerCase());
    let anagramas=[];
    //handling inputs
    if(input1.value !== ""){
      let anagrama1 = input1.value.toLowerCase();
      //handling special characters
     // let changeAnagrama1 = "";
      for(let j=0; j<anagrama1.length;j++){

          if(anagrama1.charAt(j)==='á'){
             anagrama1= anagrama1.replace('á','a');
            }
            if(anagrama1.charAt(j)==='ó'){
               anagrama1= anagrama1.replace('ó','o');
            }
            if(anagrama1.charAt(j)==='í'){
                anagrama1= anagrama1.replace('í','i');
            }
            if(anagrama1.charAt(j)==='é'){
                anagrama1= anagrama1.replace('é','e');
            }
        }
     
      console.log(anagrama1)
      let arrayAnagrama1= [];
     //
     for(let i=0;i<anagrama1.length;i++){
          //pushing each letter
           arrayAnagrama1.push(anagrama1.charAt(i));
        }
         console.log(arrayAnagrama1+ " arrayAnagrama1")
      
        h3.innerHTML= 'Posibles anagramas';
        
        for(let y=0;y<arrayAnagrama1.length;y++){

             let sortedArray = arrayAnagrama1.sort((a, b) =>  1 - Math.floor(Math.random()* arrayAnagrama1.length));
             console.log(sortedArray)
             if(sortedArray.filter(y =>!sortedArray[y])){
                 //possible anagramas
                 anagramas.push(sortedArray.join(""));
                 console.log(anagramas);
                 //avoiding posible angrama be as the input word
                 const filteredAnagrama = anagramas.filter(elem => elem !==anagrama1)
                 //display on the page
                solution.innerHTML = filteredAnagrama.join('</br>');
                    
                }
        }
    }
    else{
        swal("No has introducido 1 palabra");
        h3.innerHTML= '';
        solution.innerHTML='';
    }
   
    //reset inputs
    formulario.reset()

} 
//event listener
formulario.addEventListener('submit',handleSubmit);
