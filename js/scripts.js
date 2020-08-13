$(document).ready(function() {
  $("#numbers").submit(function(event) {
    const num1 =parseInt ($("#num1").val());
    const num2 =parseInt ($("#num2").val());
    const num3 =parseInt ($("#num3").val());
    event.preventDefault();
    //Equilateral
    if( num1 + num2 <= num3 || num1 + num3 <= num2 || num2 + num3 <= num1){
      alert("Not a triangle!");
    }
    else if (num1 === num2 && num1 === num3) { //num1 === num2 && num1 === num3       num1 === num2 === num3
      //$('#num1').show();
      alert("Equilateral");
    //Isosceles  1      3      3
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
      //$('#num2').show();
      alert("Isosceles");
    //Scalene
    } else if (num1 !== num2 && num1 !== num3 && num2 !== num3){
     //Not a Triangle  
     alert("Scalene");
    }
    else{
      alert("ERROR");
    }
    
 
  });
});
