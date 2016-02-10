
$(document).ready(function() {
  $(".btn").on("click", addItem);
  $(".link-delete").on("click", deleteItem);
  $("ol").on("click", ".link-delete", deleteItem);
});


function addItem() {

  var text = window.prompt("New To-Do Item");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");


}


function deleteItem(event) {
  console.info(event);
  $(event.target).parent().remove();
  $(event.target).parent().fadeOut();
}
