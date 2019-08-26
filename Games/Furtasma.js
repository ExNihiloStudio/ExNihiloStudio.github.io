console.log("Furtasma Javascript loading...");

function SetText(text)
{
   document.getElementById("MainText").innerHTML = text;
}

btnhndlr = (event) =>
{
   let special = event.target.getAttribute("special");
   let link = event.target.getAttribute("link");

   if(special != null){special();}
   Scenario[link].load();
}

var Scenario = 
{
   pages:null
};

var genders = 
    {
       male:
       {
         they:"he",
         them:"him",
         their:"his",
         theirs:"his",
         name:"male",
         type:"masculine"
       },
      female:
       {
         they:"she",
         them:"her",
         their:"her",
         theirs:"hers",
         name:"female",
         type:"femanine"
       },
      femherm:
       {
         they:"shi",
         them:"hir",
         their:"hir",
         theirs:"hirs",
         name:"femherm",
         type:"femhermine"
       },
      maleherm:
       {
         they:"hi",
         them:"hem",
         their:"hiz",
         theirs:"hiz",
         name:"maleherm",
         type:"malehermine"
       },
      gynomorph:
       {
         they:"she",
         them:"her",
         their:"her",
         theirs:"hers",
         name:"gynomorph",
         type:"femanine"
       },
      andromorph:
       {
         they:"he",
         them:"him",
         their:"his",
         theirs:"his",
         name:"andromorph",
         type:"masculine"
       }
    }

var species = 
    {
      human:
       {
          type:"humanoid",
          name:"human"
       }
    }

var player =
    {
      name:"Test Player",
      gender:genders.male,
      species:species.human,
    }

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
         btn.id = this.actions[key].link;
         btn.className = "ActionButton";
         //btn.addEventHandler("click", function(){if(this.special != null){this.special();}, false);
         btn.addEventHandler("click", function(){Scenario[this.id].load();}, false);
         document.getElementById("optionsContainer").appendChild(btn);
      }
   }
}

class action
{
   constructor(params)
   {
      this.link = null;
      this.special = null;

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
           text:"This is the start test to see if it'll load in any of the text at all. Also, this is test what, 34?",
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
           text:"This is jnust for mroe testing and I really don't care about all the bad spelling things, "+player.name+", you are a "+player.gender.name+" "+player.species.name+" aren't you?",
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
