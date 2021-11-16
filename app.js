const personDiv = document.querySelector(".card__person")
const shareDiv = document.querySelector(".card__share")
const shareBtn = document.querySelector("#share-btn")
const unshareBtn = document.querySelector("#unshare-btn")
const shareDivDesk = document.querySelector(".card__share-desktop")

shareBtn.addEventListener("click", function(){
    if (window.innerWidth < 850){
        personDiv.style.display = "none";
        shareDiv.style.display = "flex";
    }  
})

unshareBtn.addEventListener("click", function(){
    if (window.innerWidth < 850){
        shareDiv.style.display = "none";
        personDiv.style.display = "flex";
    }
})

shareBtn.addEventListener("click", function(){
    if (window.innerWidth >= 850){
        shareDivDesk.classList.toggle("show")
        console.log("toggle")
    }  
})