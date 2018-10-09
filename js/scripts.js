// Business Logic

function Contact(first, last, street, city, state) {
  this.firstName = first ;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
}


//UI Logic
$(document).ready(function(){
  $("form.book").submit(function(event) {
    event.preventDefault();
    var inputFirstName = $("input#firstName").val();
    var inputlastName = $("input#lastName").val();
    var inputStreet = $("input#street").val();
    var inputCity = $("input#city").val();
    var inputState = $("input#state").val();

    var newContact = new Contact (inputFirstName,inputlastName,inputStreet, inputCity, inputState);

    $("#contacts").show();

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
    $("ul#contacts").append("<li><span class='contact'>" + newContact.lastName + "</span></li>");
    $("ul#contacts").append("<li><span class='contact'>" + newContact.street + "</span></li>");
    $("ul#contacts").append("<li><span class='contact'>" + newContact.city + "</span></li>");
    $("ul#contacts").append("<li><span class='contact'>" + newContact.state + "</span></li>");
/*
    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");
*/

  });
});
