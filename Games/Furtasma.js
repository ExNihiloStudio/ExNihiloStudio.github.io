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
      for(var key in this.actions)
      {
         var btn = document.createElement("BUTTON");
         btn.innerHTML = key;
         btn.className = "ActionButton";
         
         var atc = this.actions[key];
         
         btn.onclick = function()
         {
              if(this.actions[key].special != null){this.actions[key].special();}
              if(this.actions[key].link != null){Scenario.pages[this.actions[key].link].load();}
         }
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
}

Scenario.pages =
   {
      START: new Page
         ({
           text:"This is the start test to see if it'll load in any of the text at all. Also, this is test what, 9?",
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
               Back:new action({link:"START"}),
               Tester:new action({link:"test 2"})
            }
         }),
      'test 2': new Page
         ({
           text:"This is jnust for mroe testing and I really don't care about all the bad spelling things",
           actions:
           {
             Back:new action({link:"First Page"}),
             flarf:new action({link:"START"})
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
