$(document).ready(function() {
  $("#numbers").submit(function(event) {
    const num1 =parseInt ($("#num1").val());
    const num2 =parseInt ($("#num2").val());
    const num3 =parseInt ($("#num3").val());
    event.preventDefault();
    if( num1 + num2 <= num3 || num1 + num3 <= num2 || num2 + num3 <= num1){
      $('#answer').text('Not a triangle.');
    }
    else if (num1 === num2 && num1 === num3) { 
      $('#answer').text('Equilateral triangle.');
    } 
    else if (num1 === num2 || num1 === num3 || num2 === num3) {
      $('#answer').text('Isosceles triangle.');
    } 
    else if (num1 !== num2 && num1 !== num3 && num2 !== num3){
      $('#answer').text('Scalene triangle.');
    }
    else{
      alert("ERROR");
    }
    
 
  });
});
