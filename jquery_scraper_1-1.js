function gasScrape() {
  var arr = [];

  $('.price').each(function() {
    var sup = $(this).find('sup').html();
    $(this).find('sup').replaceWith(sup);
    arr.push($(this).html());
  });

  console.log(arr);  
}

gasScrape();