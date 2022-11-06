const thirdTittle = document.querySelector("#third-tittle")
const inputValues = document.querySelector('#input-values')
const btnSubmit = document.querySelector('#btn-send')
const tooltip = document.querySelector("#tooltip")
const simpleTriangle = document.querySelector("#simpleTriangle")

const resultObject = document.querySelector("#result")
const btnClear = document.querySelector("#btn-clear")

// ------ EventListeners ------

btnSubmit.addEventListener('click', ()=>{
    
    let averageRate
    const answer =  inputValues.value 
    if(typeof answer != 'string') return // TODO: Error massage
    
    try {
        let answerArray = answer.split(',')
        let result = 0;
        answerArray.forEach( item => {
          result = result + eval(item)
        })
        averageRate = result/answerArray.length
        console.log(averageRate);

        resultObject.innerHTML = `Result: ${averageRate}`
        resultObject.classList.add("result-right")
        resultObject.style.display = "block"

        btnClear.style.display = "block"

    } catch (error) {  } // TODO: ERROR MASSAGE

})

btnClear.addEventListener("click", ()=> {
    if(btnClear.style.display == 'none') return

    inputValues.value = null
    resultObject.innerHTML = 'x'
    resultObject.classList.remove("result-right")
    resultObject.style.display = "none"
    btnClear.style.display = "none"
})

thirdTittle.addEventListener('mouseover', ()=> {
    tollTipOn();
})

// ------ main functions ------

function tollTipOn(){
    tooltip.style.display = 'flex'
    tooltip.style.flexDirection = 'column-reverse'

    if ( isDesktop() ){
        tooltip.classList.remove("tooltip");
        tooltip.classList.add("desktopTooltip")
        simpleTriangle.classList.remove("simpleTriangle")
        simpleTriangle.classList.add("desktopTriangle")
    }

    setTimeout( ()=>{
        tooltip.style.display = 'none'
        tooltip.style.flexDirection = 'unset'
    }, 2000)
    clearTimeout()
}

// Simple functions

function isDesktop(){
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;

    let isMobileDevice = regexp.test(details);
    
    if (isMobileDevice) return false
    else return true
}
