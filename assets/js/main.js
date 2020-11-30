// ELEMENTS // 
const inputWork = document.getElementById('work')
const inputWorkLocation = document.getElementById('location') 
const dropdownMenu = document.querySelector('.dropdown')
const dropdownContent = document.querySelector('.dropdown-content');
const cards = document.querySelector('.cards'); 
const form = document.querySelector('.form-group'); 
const Btn = document.querySelector('.btn'); 


class UI {
   availableJob(e){
        e.preventDefault(); 
        if(inputWork.value && inputWorkLocation.value != ''){
            
                cards.insertAdjacentHTML("afterbegin", ui.htmlCode(inputWork.value, inputWorkLocation.value));
            
            ui.clearInputs(); 
        } 
    } 
    htmlCode(work, location){

        let img = Math.floor(Math.random() * 100);
        const code = 
        `
        <div class="card">
    
        <img src="https://source.unsplash.com/random?sig=${img}" class="card-img" alt="">
        <div class="card-content">
    
            <div class="test">
                <i class="far fa-heart heart-icon"></i>
            </div>
    
            <h3 class="card-title"><a href="#" class="card-title">${work}</a></h3>
            <h4 class="card-mini-title"><a href="#" class="card-mini-title">${location}</a> <span
                    class="text-muted">${work}, ${location}</span> </h4>
            <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                dignissimos et, maxime est vel nesciunt!</p>
            <div>
                <p class="date">idag</p>
            </div>
        </div>
    </div>
        `
        return code; 
    } 
    clearInputs(){
        inputWork.value = ''; 
        inputWorkLocation.value = ''; 
    }  
    
  }
  
  // event
  const ui = new UI();
  console.log(ui); 

function runApp(){
    form.addEventListener('submit', ui.availableJob); 
    dropdownMenu.addEventListener('click', dropdown);
}
  

runApp(); 
  

function dropdown(event){
    if(event.target.classList.contains('dropdown-title')){
        dropdownContent.classList.toggle('show'); 
    } 
}