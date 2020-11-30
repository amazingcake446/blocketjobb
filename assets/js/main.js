/* Select Elements */
const inputWork = document.getElementById('work')
const inputWorkLocation = document.getElementById('location') 

const cards = document.querySelector('.cards'); 
/* form */
const form = document.querySelector('.form-group'); 
/* btn */
const Btn = document.querySelector('.btn'); 

const data = {
    items: [
        { 
            title: "Diskare",
            place: "Göteborg",
            location: "Tegelfabriken"
        },
        { 
            title: "Elektriker",
            place: "Malmö",
            location: "Universitet"
        },
        { 
            title: "Snickare",
            place: "Lund",
            location: "Kaviarfabriken"
        },
        { 
            title: "Städare",
            place: "Kristianstad",
            location: "Gåsfabriken"
        }, 
        { 
            title: "Svetsare",
            place: "Luleå",
            location: "Svets Ab"
        }, 
        { 
            title: "Sotare",
            place: "Karlstad",
            location: "Sotfabriken"
        }, 
    ],
    // sort: function(a,b) {
    //     return $(a).find("h1").text() > $(b).find("h1").text();
    // },
    init: function () {   
        for(let i = 0; i < data.items.length; i++)
        {
            cards.innerHTML += htmlCode(inputWork.value, inputWorkLocation.value);
        }
        clearInputs(); 
    }    
}


/* Events */


form.addEventListener('change', availableJob); 

/* Functions */

function availableJob(event){
    event.preventDefault();    
        



    
        for(let i = 0; i < data.items.length; i++)
        {
            cards.innerHTML += htmlCode(inputWork.value, inputWorkLocation.value);
        }
        clearInputs(); 
} 

/* 
function availableJob(event){
    event.preventDefault(); 
    
    if(inputWork.value && inputWorkLocation.value != ''){
        
        for(let i = 0; i < data.items.length; i++)
        {
            cards.innerHTML += htmlCode(inputWork.value, inputWorkLocation.value);
        }
        clearInputs(); 
    } 
}  */



function htmlCode(work, location){

    let rnd = Math.floor(Math.random() * 4);
    let img = Math.floor(Math.random() * 100);
    let item = data.items[rnd];
    let code = 
    `
    <div class="card">

    <img src="https://source.unsplash.com/random?sig=${img}" class="card-img" alt="">
    <div class="card-content">

        <div class="test">
            <i class="far fa-heart heart-icon"></i>
        </div>

        <h3 class="card-title"><a href="#" class="card-title">${item.title}</a></h3>
        <h4 class="card-mini-title"><a href="#" class="card-mini-title">${item.location}</a> <span
                class="text-muted">${item.place}, ${item.location}</span> </h4>
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

function getRandomNumber() {
    return (Math.floor(Math.random()*10));
  }


function clearInputs(){
    inputWork.value = ''; 
    inputWorkLocation.value = ''; 
}

data.init();