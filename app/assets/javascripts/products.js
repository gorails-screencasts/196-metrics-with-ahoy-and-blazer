document.addEventListener("turbolinks:load", function() {
  var element = document.querySelector("#add_to_cart")
  if (element != undefined) {
    element.addEventListener("click", function(e) {
      ahoy.track("Added Item To Cart", e.target.dataset);
    });
  }
});
