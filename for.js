var init=document.getElementById('init');
var cond=document.getElementById('condition');
var doo=document.getElementById('do');
var todo=document.getElementById('todo');
var tru=document.getElementById('true');
var i=document.getElementById('i');
var end=document.getElementById('end');
var robot=document.getElementById('robot');
var ball=document.getElementById('football');
var now=document.getElementById('now');

var start=document.getElementById('start');
var reset=document.getElementById('reset');
var clickHome = document.getElementById('clickHome');

clickHome.addEventListener('click', function(){
    window.location.href = "home.html";
})


var init_counter=0;
var counter=1;
var i_counter=0;
var is_end=false;
var robot_left=1;
var ball_left=300;

start.onclick=run;
reset.onclick=refresh;

function run()
{
    if(is_end)
    {
        cond.style.backgroundColor="white";
        end.style.backgroundColor="rgb(179,205,224)";
        tru.innerHTML="";
        i.innerHTML="";
        start.onclick=null;
        move();
        ball.src="football2.gif";
        ball_interval=setInterval(ball_fn,50);
        now.style.display="inline";
        
    }
    else
    {
        console.log('run');
        start.value="Next";
    
        if(init_counter==0)
        {
            init.style.backgroundColor="rgb(179,205,224)";
            init_counter=1;
            i.style.color="black";
            i.innerHTML="i&nbsp;=&nbsp;0";
            tru.innerHTML="";
        }
    
        else
        {
    
        if(counter==1)
        {
            if(i_counter==6)
            {
                cond.style.backgroundColor="red";
                doo.style.backgroundColor="white";
                tru.innerHTML="False";
                tru.style.color="red"; 
                is_end=true;
            }
            else
            { 
                doo.style.backgroundColor="white";
                init.style.backgroundColor="white";
                cond.style.backgroundColor="rgb(179,205,224)";
                tru.innerHTML="True";
                tru.style.color="#7FFF00";   
                counter++;
            }
        }
        else if(counter==2)                        //move
        {
            cond.style.backgroundColor="white";
            todo.style.backgroundColor="rgb(179,205,224)";
            counter++;
            tru.innerHTML="";
            move();
        }
        else if(counter==3)                             
        {
            todo.style.backgroundColor="white";
            doo.style.backgroundColor="rgb(179,205,224)";
            counter=1;
            i_counter++;
            i.innerHTML="i&nbsp;=&nbsp;"+i_counter;
            tru.innerHTML="";
        
        }
      }
        
    }
    
}

function refresh()
{
    console.log('refresh');
    start.value="Start";
    
    init.style.backgroundColor="white";
    todo.style.backgroundColor="white";
    condition.style.backgroundColor="white";
    doo.style.backgroundColor="white";
    counter=1;
    init_counter=0;
    i.innerHTML="";
    i.style.color="rgb(219,219,219)";
    i_counter=0;
    end.style.backgroundColor="white";
    is_end=false;
    tru.innerHTML="";
    robot_left=1;
    robot.style.left=robot_left+'px';
    ball.src="football2%20-%20Copy.jpg";
    clearInterval(ball_interval);
    ball_left=300;
    ball.style.left='300px';
    now.style.display='none';
    start.onclick=run;
}


function move()
{
    interval = setInterval(walk,40);
    start.onclick=null;
    robot.src='200w.webp';
    
    function walk()
    {
        if(robot_left%20==0)
        {
            clearInterval(interval);
            start.onclick=run;
            robot.src='200w.png';
            
        }
        else
        {
            robot.style.left=robot_left+'px';
        }
        
        robot_left++;
    }
                                                
    
}


function ball_fn()
{
    start.onclick=null;
    
    if(ball_left<400)
    {
        ball.style.left=ball_left+'px';
        console.log(ball_left);
        
    }
    else
    {
        clearInterval(ball_interval);
        ball.src="football2%20-%20Copy.jpg";
        console.log('ballll');
        now.style.display='none';
    }
    
    ball_left++;
}
