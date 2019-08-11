console.log("Furtasma Javascript loaded...");

function SetText(text)
{
   document.getElementById("MainText").innerHTML = text;
}

function MAIN()
{
   if(!confirm('WARNING: This game contains strong sexual content. By clicking on "ok" you acknowledge that you are 18 years of age or older.'))
   {
      window.location.href = 'https://exnihilostudio.github.io/';
   }
      SetText("Welcome to Furtasma!");
}
