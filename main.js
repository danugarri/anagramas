const accordion = document.getElementsByClassName("accordion");
//accordion logic
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//dom elemnts
const input1 = document.querySelector("input[name='word1']");
const input2 = document.querySelector("input[name='word2']");
const submit = document.querySelector("input[type='submit']");
const formulario = document.querySelector("form");


const handleSubmit = (event) =>{
    event.preventDefault();
    //inputs values
    console.log(input1.value.toLowerCase());
    console.log(input2.value);
    //handling inputs
    if(input1.value !== ""|| input2.value !== ""){
         const anagrama1 = input1.value.toLowerCase();
    const anagrama2 = input2.value.toLowerCase();
    let arrayAnagrama1= [];
    let arrayAnagrama2= [];
    for(let i=0;i<anagrama1.length;i++){
        //pushing each letter
        arrayAnagrama1.push(anagrama1.charAt(i));
        arrayAnagrama2.push(anagrama2.charAt(i));
    }
    console.log(arrayAnagrama1)
    console.log(arrayAnagrama2)
    //inial state
    let checkedAnagrama= false;
    //checking anagramas
    arrayAnagrama1.forEach((element) => {
       if((anagrama1.length === anagrama2.length)&&(arrayAnagrama2.includes(element))){
           console.log(element+" coincide");
           checkedAnagrama=true;
       }
       else{
           console.log("Alguna letra no coincide"),
            checkedAnagrama=false;
       }
    })
    const solution= document.getElementById("solution");
    const correct = anagrama1+" y "+anagrama2+" son anagramas";
    const incorrect = anagrama1+" y "+anagrama2+" no son anagramas";
    checkedAnagrama===true ? solution.innerHTML= correct : solution.innerHTML= incorrect;
    }
    else{
        swal("No has introducido 2 palabras")
    }
   
    //reset inputs
    formulario.reset()

} 
//event listener
formulario.addEventListener('submit',handleSubmit);
