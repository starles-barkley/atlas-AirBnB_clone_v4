#!/usr/bin/node
/*
Based on 2-hbnb.js
Request http://0.0.0.0:5001/api/v1/places_search/:
Description of this endpoint here. If this endpoint is not available, you will have to add it to the API (you can work all together for creating this endpoint)
Send a POST request with Content-Type: application/json and an empty dictionary in the body - cURL version: curl "http://0.0.0.0:5001/api/v1/places_search" -XPOST -H "Content-Type: application/json" -d '{}'
Loop into the result of the request and create an article tag representing a Place in the section.places. (you can remove the Owner tag in the place description)
*/

$(document).ready(function() {
  const checkedAmenities = {};
  $('input[type="checkbox"]').change(function() {
    const amenityId = $(this).data('id');
    if ($(this).is(':checked')) {
      checkedAmenities[amenityId] = true;
    } else {
      delete checkedAmenities[amenityId];
    }
    const amenitiesList = Object.keys(checkedAmenities).join(', ');
    $('.Amenities h4').text(amenitiesList);
  });
  
  setInterval(function () {
    $.get('http://0.0.0.0:5001/api/v1/status/') 
    .done(function(data){
        $('div#api_status').addClass('available');
        console.log('api is available');
      })
    .fail(function(xhr, status, error) {
      $('div#api_status').removeClass('available');
      console.log('api is unavailable');
    })
  }, 30000) 

}) 