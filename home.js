window.addEventListener('load', function(){
    var hmBtn = document.getElementById('hmBtn');
    var logBtn = document.getElementById('logBtn');
    var RegBtn = document.getElementById('RegBtn');
    var BitMAskGif = document.getElementById('BitMAskGif');
    var ConditionGif = document.getElementById('ConditionGif');
    var LoopsGif = document.getElementById('LoopsGif');
    var LinkedlistGif = document.getElementById('LinkedlistGif');
    
//==================== Local Storage ========================
    var Usrname = localStorage.getItem('Usrname');
    if(location.search.includes("&"))
{        Usrname = location.search.split('&')[0].split('=')[1];}
    
    localStorage.setItem('Usrname',Usrname);
    
    if(localStorage.getItem('Usrname') != 'null'){
        document.getElementById('logBtn').value = 'Sign Out';
        document.getElementById('RegBtn').style.display = 'none';
//        document.getElementById('hmBtn').style.display = 'none';
        document.getElementById('welcome').innerText = localStorage.Usrname.replace('+',' ');
        document.getElementById('welcome').style.display = 'inline';
        
    }
//==================== Hrader btns events ========================
//    hmBtn.addEventListener('click', function(){
//        window.location.href = "home.html";
//    })
//    
    logBtn.addEventListener('click', function(){
        window.location.href = "loginForm.html";
        localStorage.clear()
    })
    
    RegBtn.addEventListener('click', function(){
        window.location.href = "register.html";
    })
    
//========================= Bitmask Evernts ======================
    BitMAskGif.addEventListener('mouseover',function(){
        this.src = "./videos/5.gif";
    })
    
    BitMAskGif.addEventListener('mouseout',function(){
        this.src = "./images/5.png";
    })
    
    BitMAskGif.addEventListener('click',function(){
        window.location.href = "bitmask.html";
    })
    
//========================= Conditions Evernts ======================
    ConditionGif.addEventListener('mouseover',function(){
        this.src = "./videos/7.gif";
    })
    
    ConditionGif.addEventListener('mouseout',function(){
        this.src = "./images/7.png";
    })
    
    ConditionGif.addEventListener('click',function(){
        window.location.href = "ifCondition.html";
    })

//========================= Loops Evernts ======================
    LoopsGif.addEventListener('mouseover',function(){
        this.src = "./videos/6.gif";
    })
    
    LoopsGif.addEventListener('mouseout',function(){
        this.src = "./images/6.png";
    })
    
    LoopsGif.addEventListener('click',function(){
        window.location.href = "for.html";
    })
    
//========================= Linkedlist Evernts ======================
    LinkedlistGif.addEventListener('mouseover',function(){
        this.src = "./videos/8.gif";
    })
    
    LinkedlistGif.addEventListener('mouseout',function(){
        this.src = "./images/linkedlist.png";
    })
    
    LinkedlistGif.addEventListener('click',function(){
        window.location.href = "linkedlist.html";
    })

})