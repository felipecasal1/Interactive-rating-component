let btnSubmit = document.querySelector(".btn")
let circlesFeedback = document.querySelectorAll(".desing-circle")

let circleArray = [...circlesFeedback]


let pFeedBack = document.querySelector("#text-feedback")
console.log(pFeedBack)


circleArray.forEach(  boton =>{
    
    
    boton.addEventListener("click", circle=>{
        let numberFeedBack  = circle.target.textContent
        circleArray.forEach( btn => btn.classList.remove("active"))
    
        console.log(numberFeedBack)
        let number  = circle.target
        console.log(number)

        number.classList.add("active")

        showHide(numberFeedBack)
    })
})

function showHide(ele) {    
    let numberSelected = ele
    btnSubmit.addEventListener("click", () =>{
    
        if (numberSelected  > 0) {
            firstModal.style.display = 'none';
            secondModal.style.display = 'block';
            pFeedBack.innerText = ` you selected ${numberSelected} of 5`
        } else {
            alert("Please select a score before submitting.");
        }
    })

}
    
    
    
    let firstModal = document.querySelector("#feedback-section")
    let secondModal = document.querySelector("#modal")
    console.log(firstModal)
    
    
