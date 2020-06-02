$(document).ready(function(){

  $("button#black").click(function(){
    $("button#black").removeClass();
    $("body").removeClass();
    $("body").addClass("dark-background");
  })
  
  $("button#light").click(function(){
    $("button#light").removeClass();
    $("body").removeClass();
    $("body").addClass("light-background");
  })
});