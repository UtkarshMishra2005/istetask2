let hamburger = document.querySelector(".hamburger");
let cross=document.querySelector(".cross");

let hidden = document.querySelector(".hidden");

function open(){
    
        
        hidden.style.display="flex";
        cross.style.display="block";
        hamburger.style.display="none";    
}
function close(){
   
        hidden.style.display="none";
        cross.style.display="none";
        hamburger.style.display="block";

}


hamburger.addEventListener("click" , open);
cross.addEventListener("click",close);
// let searchIcon = document.querySelector(".search-icon");
let searchIcon = document.querySelectorAll(".search-icon")
let searchText=document.querySelectorAll(".search-text");

function icon(){
        searchText.forEach(abc => abc.style.display="block");
        searchIcon.forEach(abc => abc.style.display="none");
    
}
function search(){
        searchText.forEach(abc => abc.style.display="none");
        searchIcon.forEach(abc => abc.style.display="block");
}

searchIcon.forEach((abc) => abc.addEventListener("click", icon));
searchText.forEach((abc) => abc.addEventListener("change", search));
// searchIcon.addEventListener("click" , icon);
// searchText.addEventListener("change",search);