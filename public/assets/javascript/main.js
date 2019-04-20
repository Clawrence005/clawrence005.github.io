$(document).ready(function() {
  // burger menu
  function myFunction(x) {
    x.classList.toggle("change");
  }

  ////////////////////////////
  function formSubmit() {
    $(".submit").on("click", function(event) {
      event.preventDefault();
      console.log("submit pressed");

      var contactName = $("#name-input")
        .val()
        .trim();
      var contactEmail = $("#email-input")
        .val()
        .trim();
      var contactMessage = $("#message-input")
        .val()
        .trim();

      var newContact = {
        name: contactName,
        email: contactEmail,
        message: contactMessage
      };

      console.log(newContact);
      console.log(newContact.name);
      console.log(newContact.email);
      console.log(newContact.message);
    });
  }

  $.ajax("/messages", {
    method: "Get",
    data: newContact
  }).then(function() {
    res.json();
  });

  $.ajax("/contact", {
    method: "POST",
    data: newContact
  }).then(function() {
    console.log("created a new contact message");
    location.reload();
  });
});
formSubmit();
