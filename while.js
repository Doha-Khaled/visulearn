var start=document.getElementById('start');
var condition=document.getElementById('condition');
var todo=document.getElementById('todo');
var cat=document.getElementById('cat');
var counter=0;
var cat_start=1;
var reset=document.getElementById('reset');
var tru=document.getElementById('true');
var end=document.getElementById('end');
var is_end=false;
var interval=0;
var now=document.getElementById('now');
var meow=document.getElementById('meow');
var clickHome = document.getElementById('clickHome');

clickHome.addEventListener('click', function(){
    window.location.href = "home.html";
})
start.onclick=move;
reset.onclick=reset_fn;

function reset_fn()
{
    counter=0;
    cat_start=5;
    cat.style.left=cat_start+'px';
    condition.style.backgroundColor='white';
    todo.style.backgroundColor='white';
    tru.style.display='none';
    clearInterval(interval);
    start.onclick=move;
    cat.src="cat.jpg";
    is_end=false;
    end.style.backgroundColor="white";
    now.style.display="none";
    meow.pause();
    start.onclick=move;
}

function move()
{
    if(is_end)
    {
        condition.style.backgroundColor='white';
        todo.style.backgroundColor='white';
        tru.style.display='none';
        tru.style.color='greenyellow';
        tru.innerHTML="True";
        console.log("endddddddddddd");
        end.style.backgroundColor="rgb(179,205,224)";
        now.style.display="inline";
        meow.currentTime=0;
        meow.play();
        start.onclick=null;
    }
    else
    {
   
        start.value="Next";
        if(cat_start<=262)
        {
            if(counter%2==1)
            {
                condition.style.backgroundColor='white';
                todo.style.backgroundColor='rgb(179,205,224)';
                cat.src="giphy.gif";
                tru.style.display='none';
                interval=setInterval(walk,10);
                start.onclick=null;
        
                function walk()
                {
                    if(cat_start%100==0)
                    {
                        clearInterval(interval);
                        start.onclick=move;
                        cat_start++;
                        cat.src="cat.jpg";
                    }
                    else
                    {
                        cat_start++;
                        if(cat_start<=262)
                        {
                            cat.style.left=cat_start+'px';
                        }
                        
                    }
                }
           
            }
            else
            {
                condition.style.backgroundColor='rgb(179,205,224)';
                todo.style.backgroundColor='white';   
                tru.style.display='inline';
            }
        
            counter++;
        }
        else //reach end
        {
            condition.style.backgroundColor='red';
            todo.style.backgroundColor='white';
            tru.style.display='inline';
            tru.style.color='red';
            tru.innerHTML="False"
            is_end=true;
        }
    
    }
}