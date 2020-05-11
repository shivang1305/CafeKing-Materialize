//to kick in functions of materialize liberary
$(document).ready(function () {
  $(".modal").modal();
  $(".sidenav").sidenav();
  $(".slider").slider({ full_width: true });
  $(".parallax").parallax();
  $(".myreviews").carousel({
    numVisible: 7,
    padding: 55,
    shift: 55,
  });
});

//to pop up the modal
function toggleModal() {
  var instance = M.Modal.getInstance($("#modal3"));
  instance.open();
}
