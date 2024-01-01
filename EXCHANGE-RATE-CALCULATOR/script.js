const currency1 = document.getElementById("currency1")
const currency2 = document.getElementById("currency2")
const swap_btn = document.getElementById("swap")
const rate_div = document.getElementById("rate")
const amount1 = document.getElementById("amount1")
const amount2 = document.getElementById("amount2")

let conversion_rate = 1

getConversionRate()
    .then(()=>updateAmount2())
    .catch((err)=>{
        console.log(err)
    })

function updateConversionRate(){
    rate_div.innerHTML = `1 ${currency1.value} = ${conversion_rate.toFixed(3)} ${currency2.value}`
}
    
async function getConversionRate(){
    const response = await fetch("https://v6.exchangerate-api.com/v6/dc98ed587ef21f23e20b97ad/latest/"+currency1.value)
    const data = await response.json(); 
    conversion_rate = data.conversion_rates[currency2.value]   
    updateConversionRate()
}

function swapCurrency(){
    let temp = currency1.selectedIndex
    currency1.selectedIndex = currency2.selectedIndex
    currency2.selectedIndex = temp
    conversion_rate = 1/conversion_rate
    updateAmount2()
    updateConversionRate()
}

function updateAmount1(){
    const amount = amount2.value / conversion_rate
    amount1.value = amount.toFixed(3);
}

function updateAmount2(){
    const amount = amount1.value * conversion_rate
    amount2.value = amount.toFixed(3);
}

swap_btn.addEventListener('click', swapCurrency);
currency1.addEventListener('change', async()=>{
    await getConversionRate()
    updateAmount2()
})
currency2.addEventListener('change', async ()=>{
    await getConversionRate()
    updateAmount2()
})
amount1.addEventListener('input', updateAmount2)
amount2.addEventListener('input', updateAmount1)