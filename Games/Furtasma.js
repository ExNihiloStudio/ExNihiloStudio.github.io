console.log("Furtasma Javascript loaded...");



function MAIN()
{
   if(!confirm('WARNING: This game contains strong sexual content. By clicking on "ok" you acknowledge that you are 18 years of age or older.'))
   {
      document.getElementById("MainText").innerHTML = "too young";
      window.location.href = 'https://exnihilostudio.github.io/';
   }
      document.getElementById("MainText").innerHTML = "Welcome to Furtasma!";
   
}
