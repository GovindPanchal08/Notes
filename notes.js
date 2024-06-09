const notescon = document.querySelector(".notes-con")

const btn = document.querySelector(".create-note")

let notes = document.querySelectorAll(".input")
   

function shownotes(){
    notescon.innerHTML = localStorage.getItem("notes")
}
shownotes()
function upadate(){
    localStorage.setItem("notes",notescon.innerHTML)
    
}
btn.addEventListener("click",()=>{
    let inputbox= document.createElement("p")
    let img = document.createElement("img")
    inputbox.className= "input"
    inputbox.setAttribute("contenteditable" , "true")
    img.src = "trash-can-solid.svg";
    notescon.appendChild(inputbox).appendChild(img);
    
   
})
notescon.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        upadate()
    }
    else if(e.target.tagName === "P"){
        let notes = document.querySelectorAll(".input")
         notes.forEach(nt =>{
            nt.onkeyup=function(){
                upadate()
            }
         })

    }
})
document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertlinebreak")
        event.preventDefault();
    }
})
