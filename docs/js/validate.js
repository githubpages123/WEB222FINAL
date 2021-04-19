function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.


  var myForm = document.forms["form1"];
var lat = myForm["latitude"];
var lng = myForm["longitude"];
var test = document.getElementById("test1");
var test2 = document.getElementById("test2");
var submit = document.getElementById("submit");
console.log(lat.value);
lat.addEventListener("change", function(e) {
  console.log(lat.value);
  var new1 = lat.value;
  var new2 = lng.value;
  var text = document.createTextNode(" Latitude must be between -90 and 90");
  var text2 = document.createTextNode(" Longitude must be between -180 and 180");
  var text3 = document.createTextNode(" Enter Something!");
  if (new1 < -90 || new1 > 90) {
    
    test.appendChild(text);
    submit.disabled = true;
  }
  if (new1 = "") {
    test.appendChild(text3);
  }
})

lng.addEventListener("change", function(e) {
  console.log(lng.value);
  
  var new2 = lng.value;
  var text2 = document.createTextNode(" Longitude must be between -180 and 180");
  
  if (new2 < -180 || new2 > 180) {
    test2.appendChild(text2);
    submit.disabled = true;
    if (new1 = "") {
      test.appendChild(text3);
    }
  }
})
  console.log('TODO - validate the longitude, latitude values before submitting');
}



// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
