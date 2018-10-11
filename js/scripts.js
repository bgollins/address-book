// Business Logic

function Contact(first, last) {
  this.firstName = first ;
  this.lastName = last;
  this.addresses = [];
}

function Address (street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


//UI Logic
$(document).ready(function(){
  $("#add-address").click(function() {
    $("#new-address").append(
      '<div class="new-addresses">' +
        '<div class="form-group">'+
        '<p> <label for="street">Street</label>'+
          '<input type="text" name="new-street" id="street"></input> </p>'+
        '<p> <label for="city">City</label>'+
          '<input type="text" name="new-city" id="city"></input> </p>'+
        '<p> <label for="state">State</label>'+
          '<input type="text" name="new-state" id="state"></input> </p>'+
        '</div>' +
      '</div>');
          });

  $("form.book").submit(function(event) {
    event.preventDefault();

    var inputFirstName = $("input#firstName").val();
    var inputlastName = $("input#lastName").val();
    var newContact = new Contact (inputFirstName, inputlastName);

    $("#new-address").each(function() {
      var inputStreet = $(this).find("input#new-street").val();
      var inputCity = $(this).find("input#new-city").val();
      var inputState = $(this).find("input#new-state").val();
      var newAddress = new Address(inputStreet, inputCity, inputState);
      newContact.addresses.push(newAddress);
    });
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    
    $("#contacts").show();

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h3").text(newContact.fullName());
      $(".firstName").text("First Name: " + newContact.firstName);
      $(".lastName").text("Last Name: " + newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
      });
    });
    $("input#firstName").val("");
    $("input#lastName").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
  });
});
