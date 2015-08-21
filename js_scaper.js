function gasScrape() {
  var prices = document.getElementsByClassName('price');
  var arr = [];

  for (var i = 0; i < prices.length; i++) {
    arr.push(arr[i].innerHTML());
  }
  console.log(arr);
}

gasScrape();