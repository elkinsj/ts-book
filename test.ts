var t : number = 1;
alert(t);

interface ICustomConsole {
    log(arg : string) : void;
}
declare var customConsole : ICustomConsole;

customConsole.log("test");
var host = window.location.hostname;

// named function
function greet1a(name? : string) : string {
    if(name){
      return "Hi! " + name;
    }
    else
    {
      return "Hi!";
    }
  }
  
  // anonymous function
  var greet2 = function(name? : string) : string {
    if(name){
      return "Hi! " + name;
    }
    else
    {
      return "Hi!";
    }
  }

  
var greet3 = (name : string) : string =>  {
    if(name){
      return "Hi! " + name;
    }
    else
    {
      return "Hi! my name is " + this.fullname;
    }
};

class Character {
  fullname : string;
  constructor(firstname : string, lastname : string) {
    this.fullname = firstname + " " + lastname;
  }
  greet(name? : string) {
    if(name)
    {
      return "Hi! " + name + "! my name is " + this.fullname;
    }
    else
    {
      return "Hi! my name is " + this.fullname;
    }
  }
}

var spark = new Character("Jacob","Keyes");
var msg = spark.greet();             
alert(msg); // "Hi! my name is Jacob Keyes"
var msg1 = spark.greet("Dr. Halsey"); 
alert(msg1); // "Hi! Dr. Halsey! my name is Jacob Keyes"