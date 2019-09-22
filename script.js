'use strict'


function displayResults(responseJson) {
    
      $('#results').prepend(
      ` <ul class="result-list">
        <li><h2>${responseJson.name}<img src="${responseJson.image.thumb}"></h2></li>
        <li>Rank: ${responseJson.coingecko_rank}</li>
        <li>Current Price: $${responseJson.market_data.current_price.usd}</li>
        <li>Market Cap: $${responseJson.market_data.market_cap.usd}</li>
        <li><button class="remove">Remove</button></li>
        
        </ul>
        
        `
      );
      $('#results').removeClass('hidden');
  }
  
  function removeCoin () {
    $("#results").on('click', '.remove', function(event) {
      event.preventDefault();
      this.closest('ul').remove();
    });
  }



function searchCoins(id) {

  const searchURL = `https://api.coingecko.com/api/v3/coins/${id}`;

  fetch(searchURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      console.log(err);
      alert("Coin not found");
    });
}





function formSubmit() {
    $('form').submit(event => { event.preventDefault();
    let cryptoSearch = $("#crypto-search").val();
    searchCoins(cryptoSearch);
    $('#crypto-search').val('')
    });
  }

  $(formSubmit);
  $(removeCoin);
