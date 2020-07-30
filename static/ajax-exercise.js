"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    $('#fortune-text').html(response);
    //we changed the item after .get to fortune based on server.py
    //we removed used the fortune button
    //we declared an eventListener on the button called get-fortune-button and
    //said when clicked send to the fortune route and used that to
    //change what was inside of the div fortune-text using 
    //the response which is a random choice from the list of items defined in server.py
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    // TODO: select the zipcode input
    //put ID for zipcode field by inspecting the element on the field for entering zipcode 
    //using brwser development tools.
    zipcode: $('#zipcode-field').val()
  };

  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

// placed the route in .get URL placeholder

  $.get('/weather', formData, (response) => {
    //weather-info from inspecting response div

    //after weeather-info:
    //forecast from console.log(response) hard refresh browser and checking console.
    //because the instructions said take out the temp field
    $('#weather-info').html(response.forecast);
    //console.log(response) //used to debug - reloaded browser console to see 
  });

  // $.post('/replaceMe', formData, (response) => {
  //   // Fill in the callback function
  // });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  // TODO: create an object to store key-value pairs that'll be sent to
  // the server

  // TODO: make a request to /order-melons
  //
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.
});
