console.log("Furtasma Javascript loaded...");

function SetText(text)
{
   document.getElementById("MainText").innerHTML = text;
}

var Scenario = 
{
   pages:null
};

class Page
{
   constructor(params)
   {
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
      if(special != null){special();}
      SetText(this.text);

      document.getElementById("optionsContainer").innerHTML = "";
      for(var act in actions)
      {
         var btn = document.createElement("BUTTON");
         btn.innerHTML = act;
         btn.onClick = actions[act].click;
         //document.getElementById("optionsContainer").appendChild(btn);
      }
   }
}

class action
{
   constructor(params)
   {
      this.special = null;
      this.link = null;

      for(var key in params)
      {
         this[key] = params[key];
      }
   }
   click()
   {
      if(special != null){special();}
      if(link != null){Scenario.pages[link].load();}
   }
}

Scenario.pages =
   {
      START: new Page
         ({
           text:"This is the start test to see if it'll load in any of the text at all." 
         })
   }
   


function MAIN()
{
   if(!confirm('WARNING: This game contains strong sexual content. By clicking on "ok" you acknowledge that you are 18 years of age or older.'))
   {
      window.location.href = 'https://exnihilostudio.github.io/';
   }
      SetText("Welcome to Furtasma! Test 3 failed.");

      Scenario.pages["START"].load();
}
