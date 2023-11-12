"use strict";

$(document).ready(function () {
  // Apply the change() method to the input#cValue element
  $("input#cValue").change(function () {
    // Celsius to Fahrenheit conversion
    var celsius = $(this).val();
    var fahrenheit = 1.8 * celsius + 32;
    $("input#fValue").val(fahrenheit.toFixed(0));
  });

  // Apply the change() method to the input#fValue element
  $("input#fValue").change(function () {
    // Fahrenheit to Celsius conversion
    var fahrenheit = $(this).val();
    var celsius = (fahrenheit - 32) / 1.8;
    $("input#cValue").val(celsius.toFixed(0));
  });
});
