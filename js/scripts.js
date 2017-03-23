var billNye = "Bill Nye the Science Guy";
var kanye = "Kanye West (in the hospital)";
var manson = "Charles Manson";
var shakira = "Shakira";
var queen = "The Queen";
var timCurry = "Tim Curry";


$(function() {
  $("#love-form").submit(function(event){
    var age = parseInt($("#age").val());
    var hair = $("select#hair").val();
    var gender = $("select#gender").val();
    var hospital = $("input:radio[name=hospital]:checked").val();

    if (gender === "male") {
      if(age < 35){
        if(hospital === "true") {
          $(".output").text(kanye);
        }
        else {
          $(".output").text(timCurry);
        }
      }
      else {
        if(age >=35 && age <=55) {
          $(".output").text(billNye);
        }
        else {
          $(".output").text(manson);
        }
      }
    }

    else {
      if(age >=35 && age <=55) {
        $(".output").text(shakira);
      }

      else {
        $(".output").text(queen);

      }
    }
    event.preventDefault();
  });
});
