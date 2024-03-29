console.log("Furtasma Javascript loading...");

function SetText(text)
{
   document.getElementById("MainText").innerHTML = text;
}

var Scenario = 
{
   pages:null,
   vars: null
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
         they:"hie",
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
         var btn = this.actions[key].btn;
         btn.innerHTML = key;
         document.getElementById("optionsContainer").appendChild(btn);
      }
   }
}

class action
{
   constructor(params)
   {
      this.btn = document.createElement("BUTTON");
      this.btn.special = null;
      this.btn.link = null;
      this.btn.className = "ActionButton";
      for(var key in params)
      {
         this.btn[key] = params[key];
      }
      this.btn.addEventListener("click",function(){if(this.special != null){this.special();} Scenario.pages[this.link].load();}, false);
   }
}

Scenario.pages =
   {
      START: new Page
         ({
           text:"Welcome to Furtasma! First we shall learn more about you shall we? Given that we can't load a character yet, so you'll have to make a new one for now.",
           actions:
            {
               'Enter':new action({link:'First Page'})
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
