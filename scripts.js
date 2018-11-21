var words = ['okno', 'okno', 'saszetka', 'saszetka', 'szklanka', 'szklanka', 'brazylia', 'brazylia', 'polska', 'polska', 'mandarynka', 'mandarynka'];
var nodesArray = [].slice.call(document.querySelectorAll(".cart-content"));
console.log(nodesArray.length)
let randPlace = parseInt(Math.random() * (nodesArray.length))
let chu1j = nodesArray[randPlace];

function generateRandom() {
  $(words).each(function(i) {
    var rand = parseInt(Math.random() * (nodesArray.length));
    $(nodesArray[rand]).html(words[i])
    nodesArray.splice(rand, 1);
  })
}
var tab = [];
var number = 0;
var tabId = [];
var pairs = 0;
var clicks = 0;

function checkWin(number) {
  if (number == 12) {

    alert('You won, refresh the browser to start aganin')
  }

}

function numberOfCAndP(clicks, pairs) {
  var newPairs = pairs / 2;
  $('#numberOfClick').html(clicks);
  $('#numberOfPairs').html(newPairs);

}

function flip() {
  $('.cart').addClass('flip');
  $('.cart').children().addClass('hide');
  $('.cart').on('click', unflip);
}

function unflip(e) {
  $(e.target).children().removeClass('hide');
  $(e.target).removeClass('flip');
  clicks++;

  var target = $(e.target).children().html();

  tab.push(target);
  var uniqueId = $(this).children().attr("id");
  tabId.push(uniqueId)
  if (tab.length == 2) {
    if (tab[0] === tab[1] && tabId[0] != tabId[1]) {

      $('.cart').each(function(i) {
        if ($(this).children().html() == tab[0]) {
          $(this).css('background-color', 'green');
          number++;
          pairs++;
          checkWin(number);
        }
      })
      tab = [];
      tabId = [];
    } else if (tab[0] === tab[1] && tabId[0] === tabId[1]) {

      tab = [];
      tabId = [];
      alert("u cant click twice on the same element");
      $(this).addClass('flip');
      $(this).children().addClass('hide')



    } else {

      $('.cart').each(function(i) {
        if ($(this).children().attr("id") == tabId[0] || $(this).children().attr("id") == tabId[1]) {
          $(this).addClass('flip');
          $(this).children().addClass('hide')
        }
      })
    }



    tab = [];
    tabId = [];
  }
  numberOfCAndP(clicks, pairs);
}



//$('.cart').on('click',unflip)


setTimeout(flip, 3000);
generateRandom();
