// Business Logic

function Contact(first, last, street, city, state) {
  this.firstName = first ;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
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

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $("#contacts").show();

    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");

    $("#contacts").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h3").text("First Name: " + newContact.fullName());
      $(".firstName").text("First Name: " + newContact.firstName);
      $(".lastName").text("Last Name: " + newContact.lastName);
      $(".street").text("Street: " + newContact.street);
      $(".city").text("City: " + newContact.city);
      $(".state").text("State: " + newContact.state);
    });
  });
});
