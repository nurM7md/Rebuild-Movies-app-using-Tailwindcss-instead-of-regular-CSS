// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

const mobilebtn=document.querySelector("#mobile-btn")
const mobilemenu=document.querySelector("#mobile-menu")
const ul=document.querySelector("#ul")

mobilebtn.addEventListener('click' , ()=>mobilemenu.classList.toggle('hidden'))

let header = document.querySelector("#header")
let logo = document.querySelector("#logomovie")

window.addEventListener('scroll' , ()=>{
    if(window.scrollY>0){
        header.classList.add("bg-white" , "shadow-md" )
        header.classList.remove("bg-transparent")
        ul.classList.remove("text-red-500");
        ul.classList.add("text-gray-900")
        logo.classList.add("text-gray-900")
        mobilebtn.classList.add("text-red-500")
    }else{
        header.classList.add("bg-transparent")
        header.classList.remove("bg-white" , "shadow-md")
        ul.classList.remove("text-gray-900");
        ul.classList.add("text-red-500")
        logo.classList.remove("text-gray-900")
        mobilebtn.classList.remove("text-red-500")
    }
})



