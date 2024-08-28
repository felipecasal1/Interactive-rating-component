let btnSubmit = document.querySelector(".btn")
let circlesFeedback = document.querySelectorAll(".desing-circle")

let circleArray = [...circlesFeedback]

circleArray.forEach(  boton =>{

    
    boton.addEventListener("click", circle=>{
        circleArray.forEach( btn => btn.classList.remove("active"))
    
        let numberFeedBack  = circle.target.textContent
        console.log(numberFeedBack)
        let number  = circle.target
        console.log(number)

        number.classList.add("active")
    })
})



let firstModal = document.querySelector(".style-container")
let secondModal = document.querySelector("#modal")


console.log(firstModal)

function showHide (){

        if(firstModal.style.visibility == "hidden")
        firstModal.style.visibility == "visible"
    else{
        firstModal.style.visibility == "hidden"
    }
    console.log(firstModal.style)
    console.log("se reproduijo")
}