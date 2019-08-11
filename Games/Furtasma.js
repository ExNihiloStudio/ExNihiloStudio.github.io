console.log("Furtasma Javascript loaded...");
var test = confirm("doobily");


function MAIN()
{
   var is18 = confirm("This game contains strong sexual themes, yes, even with the character creator. By clicking on "Ok", you acknowledge that you are at or over the age of 18. You have been warned.);

   if(is18 == true)
    {
       document.getElementById("MainText").innerHTML = "over 18";
    }
   else
    {
       document.getElementById("MainText").innerHTML = "testerooniedoonie";
    }
}
