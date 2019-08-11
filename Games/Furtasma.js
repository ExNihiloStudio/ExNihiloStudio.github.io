console.log("Furtasma Javascript loaded...");



function MAIN()
{
   var test = confirm('WARNING: This game contains strong sexual content. By clicking on "ok" you acknowledge that you are 18 years of age or older.');
   if(test == true)
   {
      document.getElementById("MainText").innerHTML = "Of age!";
   }
}
