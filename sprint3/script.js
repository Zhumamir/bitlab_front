function updateResults() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;

    var exchangeRates = {
        'KZT': {buy: 1, sell: 1},
        'USD': {buy: 429, sell: 431},
        'EUR': {buy: 507, sell: 509}
    };

    var kztResult = (fromCurrency === 'KZT' ? '-' : (amount * (fromCurrency === 'USD' ? 429 : (fromCurrency === 'EUR' ? 507 : 1))).toFixed(2));
    var usdResult = (fromCurrency === 'USD' ? '-' : (amount * exchangeRates[fromCurrency].buy / exchangeRates['USD'].sell).toFixed(2));
    var eurResult = (fromCurrency === 'EUR' ? '-' : (amount * exchangeRates[fromCurrency].buy / exchangeRates['EUR'].sell).toFixed(2));

    document.getElementById('kztResult').innerText = kztResult;
    document.getElementById('usdResult').innerText = usdResult;
    document.getElementById('eurResult').innerText = eurResult;
}
document.getElementById('amount').addEventListener('input', updateResults);
document.getElementById('fromCurrency').addEventListener('change', updateResults);