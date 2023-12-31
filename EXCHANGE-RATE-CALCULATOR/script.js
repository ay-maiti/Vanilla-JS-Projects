const currency1 = document.getElementById("currency1")
const currency2 = document.getElementById("currency2")
const swap_btn = document.getElementById("swap")
const rate_div = document.getElementById("rate")
let conversion_rates = getConversionRate(currency1.value).catch((err)=>{
    console.log(err)
    return null})



function updateConversionRate(conversion){
    rate_div.innerHTML = `1 ${currency1.value} = ${conversion}`
}
    
async function getConversionRate(currency){
    const response = await fetch("https://v6.exchangerate-api.com/v6/dc98ed587ef21f23e20b97ad/latest/"+currency)
    const data = await response.json();
    
    updateConversionRate(data.conversion_rates[currency2.value])
    return data.conversion_rates
}



function swapCurrency(){
    let temp = currency1.selectedIndex
    currency1.selectedIndex = currency2.selectedIndex
    currency2.selectedIndex = temp
}

swap_btn.addEventListener('click', swapCurrency);

