
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // You can replace the conversion rates with real-time data from an API
    const conversionRates = {
        usd: { euro: 0.91, uae: 3.67, indian_rupess: 82.74},
        euro: { usd: 1.09, uae: 4.02,indian_rupess: 90.51 },
        uae: { usd: 0.27, euro: 0.25,indian_rupess: 22.53},
        indian_rupess: { usd: 0.012, euro: 0.011, uae: 0.044}
    }
        const convertedAmount = (amount * conversionRates[fromCurrency][toCurrency]).toFixed(2);

        // Clear previous result before updating
        resultDiv.innerHTML = '';
    
        // Update result with new conversion
        const resultText = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount} ${toCurrency.toUpperCase()}`;
        resultDiv.appendChild(document.createTextNode(resultText));
    });


