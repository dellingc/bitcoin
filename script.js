var btn = document.querySelector('#btn')
var price = document.querySelector('#price')
var dollars = document.querySelector('#dollar')
var euros = document.querySelector('#euro')
var gbp = document.querySelector('#gbp')
var text = document.querySelector('#text')
var updateText = document.querySelector('#updateTxt')
var currency = document.querySelector('#currency')


btn.addEventListener('click', function() {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      if(currency.value === 'dollars') {
        var dollar = JSON.parse(XHR.responseText).bpi.USD.rate;
        price.textContent = '$' + dollar;
        text.textContent  = ' in Dollars ';
      } else if(currency.value === 'euros') {
        var euro = JSON.parse(XHR.responseText).bpi.EUR.rate;
        price.textContent = '\u20AC' + euro;
        text.textContent  = ' in Euros ';
      } else {
        var pound = JSON.parse(XHR.responseText).bpi.GBP.rate
        price.textContent = '\u00A3' + pound;
        text.textContent  = ' in Pounds ';
      }
      var update = JSON.parse(XHR.responseText).time.updated;
      var date = new Date(update)
      updateText.textContent = date;
    }
  }
  
  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json')
  XHR.send()
})
