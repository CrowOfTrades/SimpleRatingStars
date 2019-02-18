  var stars = document.querySelectorAll("span")

  window.onload = function(){
  }

  stars.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
       $(elem).prevAll().addClass("active");
       $(elem).addClass("active");
       $(elem).nextAll().removeClass("active");
    });
    elem.addEventListener("click", function() {
      $(elem).prevAll().text(String.fromCharCode("9733"));
      $(elem).text(String.fromCharCode("9733"));
      $(elem).nextAll().text(String.fromCharCode("9734"));
    });
  });

  $("#rating").mouseout(function(elem) {
    stars.forEach(function(elem) {
      $(elem).removeClass("active");
    });
  });
