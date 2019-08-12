console.log("Furtasma Javascript loading...");

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
      if(this.special != null){this.special();}
      SetText(this.text);

      document.getElementById("optionsContainer").innerHTML = "";
      for(var act in this.actions)
      {
         var btn = document.createElement("BUTTON");
         btn.innerHTML = act;
         btn.class = "ActionButton";
         btn.onclick = this.actions[act].click;
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
      if(this.special != null){this.special();}
      if(this.link != null){Scenario.pages[this.link].load();}
   }
}

Scenario.pages =
   {
      START: new Page
         ({
           text:"This is the start test to see if it'll load in any of the text at all.",
           actions:
            {
               'First Page':new action({link:'First Page'})
            }
         }),
      'First Page': new Page
         ({
            text:"this is the first page! that means that things worked and actually functions as intended",
            actions:
            {
               Back:new action({link:"START"})
            }
         })
   };
   


function MAIN()
{
   if(!confirm('WARNING: This game contains strong sexual content. By clicking on "ok" you acknowledge that you are 18 years of age or older.'))
   {
      window.location.href = 'https://exnihilostudio.github.io/';
   }
      SetText("Welcome to Furtasma! Test 5 failed.");

      Scenario.pages["START"].load();
}

console.log("Furtasma Javascript loaded...");
