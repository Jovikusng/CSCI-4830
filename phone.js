$(document).ready(function() {
  $("#tab_bar").show();
  $("#add_contact").hide();
  $("#contact_list").hide();
});

$("#dialer").click(function() {
  $("#content_dialer").show();
  $("#add_contact").hide();
  $("#contact_list").hide();
});

$("#add").click(function() {
  $("#add_contact").show();
  $("#contact_list").hide();
  $("#content_dialer").hide();
});

$("#list").click(function() {
  $("#add_contact").hide();
  $("#contact_list").show();
  $("#content_dialer").hide();
});
