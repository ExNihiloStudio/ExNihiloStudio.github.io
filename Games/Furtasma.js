console.log("Furtasma Javascript loaded...");

function SetText(text)
{
   document.getElementById("MainText").innerHTML = text;
}

var scenario = {}

class Page
{
   constructor(params)
   {
      this.title = null;
      this.link = null;
      this.text = null;
      this.actions = null;
      this.special = null;

      for(var key in params)
      {
         this[key] = params[key];
      }
   }
   load()
   {
      SetText(this.text);
   }
}

function MAIN()
{
   if(!confirm('WARNING: This game contains strong sexual content. By clicking on "ok" you acknowledge that you are 18 years of age or older.'))
   {
      window.location.href = 'https://exnihilostudio.github.io/';
   }
      SetText("Welcome to Furtasma!");

      var test = new Page({text:"So, this is a way to test the page system";});
      test.load();
}
