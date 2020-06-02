function formValidation()
{
var uname = document.registration.name;
var unum = document.registration.number;
var uadd = document.registration.address;
var umail= document.registration.city;
var ustate = document.registration.state;
var a=Validatename(uname);
if(a==true)
{
    var b=ValidateNum(unum);
    if(b==true)
    {
        var c=ValidateASD(uadd,umail,ustate);
        if(c==true)
        {
                alert("All the details have been validated and submitted!");
         }
        }
    }

}

function Validatename(x) 
{
    var letters=/^[A-Za-z" "]+$/;
  if (x.value.length == 0)
   { 
      alert("Message:Name field is blank");  	
      return false; 
   }  	
   else if(x.value.match(letters))
   {
        return true;
   }
   else{
       alert("Message:Name field should contain alphabets only");
       return false;
   }
 }
 function ValidateNum(x)
 {
     var phoneno=/^\d{10}$/;
     if (x.value.length == 0)
   { 
      alert("Message:Number field is blank");  	
      return false; 
   }  
   else if(x.value.match(phoneno))
   {
       return true;
   }
   else
   {
       alert("Message:Number field should contain 10 digits");
       return false;
   }
 }
 function ValidateASD(x,y,z)
 {
     var def="Default";
        var EMAIL=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if(x.value.length==0)
     {
        alert("Message:Address field is blank");
        return false;
     }
     else if(y.value.length==0 || y.value.match(def))
     {
        alert("Message:Email field is blank");
        return false;
     }
     
     else if(z.value.length==0)
     {
        alert("Message:State field is blank");
        return false;
     }
     else return true;
 }
 