const thirdTittle = document.querySelector("#third-tittle")
const inputValues = document.querySelector('#input-values')
const btnSubmit = document.querySelector('#btn-send')
const tooltip = document.querySelector("#tooltip")
const simpleTriangle = document.querySelector("#simpleTriangle")

const resultObject = document.querySelector("#result")
const btnClear = document.querySelector("#btn-clear")

let btnOff = false

// ------ EventListeners ------

btnSubmit.addEventListener('click', ()=>{
    
    if(btnOff == true){
        return 
    }
    else{
        let averageRate
        const answer =  inputValues.value 
        btnOff = true
        if(typeof answer != 'string'){
            errorMassage();
            return
        }
        try {
            let answerArray = answer.split(',')
            if(answerArray.length < 2){
                errorMassage();
                return
            }

            let result = 0;
            answerArray.forEach( item => {
            result = result + eval(item)
            })
            averageRate = result/answerArray.length

            resultObject.innerHTML = `Result: ${averageRate}`
            resultObject.classList.add("result-right")
            resultObject.style.display = "block"

            btnClear.style.display = "block"

        } catch (error) { 
            errorMassage(); 
            console.error(error)
        }

    }
    
})

btnClear.addEventListener("click", ()=> {
    if(btnClear.style.display == 'none') return

    inputValues.value = null
    resultObject.innerHTML = 'x'

    if(resultObject.classList[0] === 'result-wrong')  resultObject.classList.remove('result-wrong')
    else resultObject.classList.remove('result-right')
    
    resultObject.style.display = "none"
    btnClear.style.display = "none"

    btnOff = false
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

function errorMassage(){
    resultObject.innerHTML = "Você digitou as médias de forma errada, veja um exemplo colocando o mouse em cima do texto colorido"
    resultObject.classList.add("result-wrong")
    resultObject.style.display = "block"

    btnClear.style.display = "block"
}

// Simple functions

function isDesktop(){
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;

    let isMobileDevice = regexp.test(details);
    
    if (isMobileDevice) return false
    else return true
}
