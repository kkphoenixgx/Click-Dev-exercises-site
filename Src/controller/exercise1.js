const resultObject = document.querySelector("#result")
const btnSubmit = document.querySelector('#btnSubmit')

const tolltip = document.querySelector('#tolltip')
const tolltipTriangle = document.querySelector('#tolltip-triangle')

const objectInput1 =  document.querySelector("#n1")
const objectInput2 = document.querySelector("#n2")

btnSubmit.addEventListener('click', ()=>{

    let result = parseInt(objectInput1.value) + parseInt(objectInput2.value)
    console.log("O resultado da sua soma é:" + result)

    resultObject.style.display = "block";
    resultObject.classList.add('result')
    resultObject.innerText = "O resultado da sua soma é:   " + result;

})

resultObject.addEventListener('mouseover', ()=> {
    tolltip.style.display = 'block'
    tolltipTriangle.style.display = 'block'
    setTimeout( ()=>{
        tolltip.style.display = 'none'
        tolltipTriangle.style.display = 'none'
    }, 4000)
    clearTimeout()
})