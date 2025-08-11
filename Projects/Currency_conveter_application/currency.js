const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const convertedInput = document.getElementById('converted');
const swap = document.getElementById('swap');

//Available currencies
const currencies = ["USD","EUR","INR","GBP","JPY","AUD","CAD"];

//Populate dropdowns
currencies.forEach((currency) => {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    fromCurrency.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = currency;
    toCurrency.appendChild(option2);
});

//Default selections
fromCurrency.value = "USD";
toCurrency.value = "INR";

//Fetch exchange rates and convert
async function convertCurrency(){
    const amount = parseInt(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if(!amount || amount <= 0){
        convertedInput.value = "";
        return;
    }

    try{
        const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
        const res = await fetch(url);
        const data = await res.json();
        const rate = data.rates[to];
        const  converted = (amount * rate).toFixed(2);
        convertedInput.value = converted;
    } catch{
        convertedInput.value = "Error";
        console.error("Error fetching data:",err);
    }
}

//Event listeners
amountInput.addEventListener("Input",convertCurrency);
fromCurrency.addEventListener("change",convertCurrency);
toCurrency.addEventListener("change",convertCurrency);

// swap currencies
swap.addEventListener("click", () => {
    const temp =  fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    convertCurrency();
});

// Initial conversion
convertCurrency();