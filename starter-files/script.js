// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
let input=document.getElementById("input");
let answer=document.getElementById("answer");
let button=document.getElementById("button");
function fetchAnswer() {
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(data => {

        document.getElementById("answer").innerHTML = data.answer;
      });
  }
  
  
  button=button.addEventListener("click", (e) =>{
    fetchAnswer(); 
    setTimeout(() => {
        input.value = "";
        answer.innerHTML = "";
      }, 3000);
    }); 
   