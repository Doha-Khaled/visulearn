var name_valid=false;
var mail_valid=false;
var age_valid=false;

var namee=document.getElementById('namee');
var age=document.getElementById('age');
var mail=document.getElementById('mail');
var register=document.getElementById('register');
var passward=document.getElementById('passward');
var st=document.getElementById('st');

var name_reg=new RegExp('^(([a-z ]|[A-Z ])+)$');
var mail_reg=new RegExp('^(.+)@((([a-z]|[A-Z]))+)(\\.)(([a-z]|[A-Z])+)'); //lessssa

//var mail_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var age_reg=new RegExp('(^[1-9])([0-9])*$'); //1-99

namee.onkeyup=valid_name_fn;
age.onkeyup=valid_age_fn;
mail.onkeyup=valid_mail_fn;
passward.onkeyup=strength;
register.onclick=is_valid;

function strength()
{
    if(passward.value.length<5)
    {
          passward.style.backgroundColor="#ffb3b3";
          st.innerHTML="Weak";
          st.style.fontSize="10px";
    }
    else if(passward.value.length<10)
    {
         passward.style.backgroundColor="#F4A460";
         st.innerHTML="Normal";
         st.style.fontSize="10px";
    }
    else
    {
        passward.style.backgroundColor="#9ACD32";
        st.innerHTML="Strong";
        st.style.fontSize="10px";
    }
}


function valid_name_fn()
{
    console.log('name');
    if(!(namee.value).match(name_reg))
    {
        namee.style.backgroundColor="#ffb3b3";
        name_valid=false;
    }
    else
    {
        namee.style.backgroundColor="white";
        name_valid=true;
    }
}

function valid_age_fn()
{
    console.log('age');
    if(!(age.value).match(age_reg) || age.value.length>2 || parseInt(age.value)<8)
    {
        age.style.backgroundColor="#ffb3b3";
        age_valid=false;
    }
    else
    {
        age.style.backgroundColor="white";
        age_valid=true;
    }
}



function valid_mail_fn()
{
    
    if(!mail.value.match(mail_reg))
    {
        mail.style.backgroundColor="#ffb3b3";
        mail_valid=false;
    }
    else
    {
        mail.style.backgroundColor="white";
        mail_valid=true;
    }
}


function is_valid()
{
   if(!name_valid || !age_valid || !mail_valid) 
    {
        alert('invalid data');
    } 
}







