const display = document.querySelector('#display')
const inputLiz = document.querySelector('#select-lizard')
const inputSqft = document.querySelector('#input-sqft')
const inputFurn = document.querySelector('#input-furn')

function calculateLiz() {
    const lizType = inputLiz.value 
    const sqFt = inputSqft.value
    const furnSqft = inputFurn.value / 100 * sqFt
    const lizSqft = sqFt - furnSqft
    const totalLiz = lizSqft / lizType

    display.innerHTML = totalLiz.toFixed(0)
}

inputLiz.addEventListener('input', calculateLiz)
inputSqft.addEventListener('input', calculateLiz)
inputFurn.addEventListener('input', calculateLiz)