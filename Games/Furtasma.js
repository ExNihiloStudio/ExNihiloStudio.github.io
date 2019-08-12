console.log("Furtasma Javascript loaded...");

function SetText(text)
{
   document.getElementById("MainText").innerHTML = text;
}

var Scenario = null;



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
         document.getElementById("optionsContainer").appendChild(btn);
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

Scenario =
{
   pages:
   {test1:new Page({text:"this is test 1!",actions:[new action({link:"test2"})]}),
    test2:new Page({text:"this is test 2!",actions:[new action({link:"test1"})]})}
}

function MAIN()
{
   if(!confirm('WARNING: This game contains strong sexual content. By clicking on "ok" you acknowledge that you are 18 years of age or older.'))
   {
      window.location.href = 'https://exnihilostudio.github.io/';
   }
      SetText("Welcome to Furtasma!");

      Scenario.pages["test1"].load();
}
