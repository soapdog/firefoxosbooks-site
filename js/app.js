document.addEventListener("DOMContentLoaded", function() {
  var source   = $("#book-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);

  console.log(html);

  $("#books").html(html);

});
