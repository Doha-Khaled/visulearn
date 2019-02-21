window.addEventListener('load', function(){
    
    var flgUpArr =0;
    var flgDownArr =0;
    var CheckOp =0;
    
//=============================HTML Variables ====================
    var headerbtns = document.getElementById('headerbtns');
    var sqrSetNode = document.getElementById('sqrSetNode');
    var sqrslectOP = document.getElementById('sqrslectOP');
    var setNodes = document.getElementById('setNodes');
    var slctOp = document.getElementById('slctOp');
    var operName =document.getElementById('operation');
    var opSearch = document.getElementById ('opSearch');
    var opInsert = document.getElementById('opInsert');
    var opDelete = document.getElementById('opDelete');
    var txtInd = document.getElementById('txtInd');
    var linSetNum = document.getElementById('linSetNum');
    var valTxt = document.getElementById('txtInp1');
    var indexTxt = document.getElementById('txtInp2');
    var startBtn = document.getElementById('startBtn');
    var linkedarr = document.getElementById('linkedarr').getElementsByClassName("sqrDivs");
    var tmpArr = document.getElementById('tmpArr');
    var tempDiv = document.getElementById('tempDiv');
    var tailNode = document.getElementById('tailNode');
    var headNode = document.getElementById('headNode');
    var linkedCode = document.getElementById('linkedCode');
    var InsTailCode = document.getElementsByClassName('InsLines');
    var invalidIndex = document.getElementById('invalidIndex');
//    var invalid = document.getElementById('invalid');

    
    sqrslectOP.style.display = "block";
//=============================Operations behaviour====================
    opSearch.addEventListener('click', function(){
        $("#sqrSetNode").fadeIn("slow");
        linSetNum.style.visibility = "visible";
        txtInd.style.visibility ="hidden";
        opSearch.style.background = "black";
        opInsert.style.background = "";
        opDelete.style.background = "";
        flgUpArr = 1;
        CheckOp = 1;
    })
    
    opInsert.addEventListener('click', function(){
        invalidIndex.style.display= 'none';

        linSetNum.style.visibility = "visible";
        txtInd.style.visibility ="visible";
        $("#sqrSetNode").fadeIn("slow");
        opInsert.style.background = "black";
        opSearch.style.background = "";
        opDelete.style.background = "";
        CheckOp = 2;
        flgUpArr = 2;
    })
    
    opDelete.addEventListener('click', function(){
        invalidIndex.style.display= 'none';

        linSetNum.style.visibility = "hidden";
        txtInd.style.visibility = "visible";
        $("#sqrSetNode").fadeIn("slow");
        opDelete.style.background = "black";
        opSearch.style.background = "";
        opInsert.style.background = "";
        CheckOp = 3;
        flgUpArr = 1;
    })
//=============================Header Btn ====================
    headerbtns.addEventListener('click', function(){
        window.location.href ="home.html";
    })

//=============================Green Arrow ====================
    setNodes.addEventListener('click' , function(){
       if(flgUpArr == 0){
           $("#sqrSetNode").fadeOut("slow");
           flgUpArr = 1;
       }
       else{
           $("#sqrSetNode").fadeIn("slow");
           flgUpArr = 0;
       }
   })
//=============================Orange Arrow ====================
    slctOp.addEventListener('click' , function(){
       if(flgDownArr == 0){
           $("#sqrslectOP").fadeOut("slow");
           flgDownArr = 1;
       }
       else{
           $("#sqrslectOP").fadeIn("slow");
           flgDownArr = 0;
       }
   })
    
//=============================Insert Function ==================
    function InsertOp ()
    {
        debugger;
        invalidIndex.innerText = '';
        if (parseInt(valTxt.value) > 99 || parseInt(valTxt.value) < 0)
            {
                invalidIndex.innerText = 'Your Range should be between 0 and 99';
                invalidIndex.style.display= 'inline';
            }
        else{
            if (linkedarr.length <= 8)
            {
                indexTxt.disabled = true;
                startBtn.disabled = true;
                for (var i=0; i<linkedarr.length ; i++){
                    linkedarr[i].style.background = "";
                    linkedarr[i].style.color ="";
                }
                //========================== To Insert In Head ==============================
                if(indexTxt.value == 0){
                    if (linkedarr.length == 0) //if there is no array
                    {
                            linkedCode.innerHTML = `<pre><div id="InsLine1" class="InsLines">if insert as first node{</div>
                                            <div id="InsFrstLine2" class="InsLines">&emsp;add node </div>
                                            <div id="InsFrstLine3" class="InsLines">&emsp;Head = Node</div>
                                            <div id="InsFrstLine4" class="InsLines">&emsp;tail = Node</div>
                                            <div id="InsFrstLine5" class="InsLines">} </div>`
                            setTimeout(function(){
                                document.getElementById('InsFrstLine2').style.background ="rgb(179,205,224)";
                                $( "#linkedarr" ).prepend("<div class=\"sqrDivs\">"+valTxt.value+"</div>" );
                            }, 500)

                            setTimeout(function(){
                                document.getElementById('InsFrstLine2').style.background ="";
                                document.getElementById('InsFrstLine3').style.background ="rgb(179,205,224)";
                                headNode.style.display = "block";                     
                            }, 1000)

                            setTimeout(function(){
                                document.getElementById('InsFrstLine3').style.background ="";
                                document.getElementById('InsFrstLine4').style.background ="rgb(179,205,224)";
                                tailNode.style.left = "310px";
                                tailNode.style.display = "block";    
                                startBtn.disabled = false;
                                indexTxt.disabled = false;
                            }, 1500)

                        }
                    else if(linkedarr.length > 0) // if there is any node in array
                    {
                        linkedCode.innerHTML = `<pre><div id="InsHedLine1" class="InsLines">if insert in head{</div>
                                            <div id="InsHedLine2" class="InsLines">&emsp;add node </div>
                                            <div id="InsHedLine3" class="InsLines">&emsp;node.next = head</div>
                                            <div id="InsHedLine4" class="InsLines">&emsp;head = node</div>
                                            <div id="InsHedLine5" class="InsLines">} </div>`
                        setTimeout(function(){
                                document.getElementById('InsHedLine2').style.background ="rgb(179,205,224)";
                                $( "#linkedarr" ).prepend("<div class=\"sqrDivs\" id=\"nwarr\">"+valTxt.value+"</div>" );
                            }, 500)

                        setTimeout(function(){
                                document.getElementById('nwarr').remove();
                                $( "#linkedarr" ).prepend("<span class=\"arrowImg\">&#8594;</span>" );
                                $( "#linkedarr" ).prepend("<div class=\"sqrDivs\">"+valTxt.value+"</div>" );
                                document.getElementById('InsHedLine2').style.background ="";
                                document.getElementById('InsHedLine3').style.background ="rgb(179,205,224)";
                                var AddLeft = (parseInt(getComputedStyle(tailNode).left)) + 90;
                                tailNode.style.left = AddLeft+"px";
                                var AddRight = (parseInt(getComputedStyle(headNode).left)) + 90;
                                headNode.style.left = AddRight+"px";
                            }, 1000)

                            setTimeout(function(){
                                document.getElementById('InsHedLine3').style.background ="";
                                document.getElementById('InsHedLine4').style.background ="rgb(179,205,224)";
                                var AddRight = (parseInt(getComputedStyle(headNode).left)) - 90;
                                headNode.style.left = AddRight+"px";     
                                startBtn.disabled = false;
                                indexTxt.disabled = false;
                            }, 1700)
                    }

                }
                //========================== To Insert In Tail ==============================
                else if (indexTxt.value == (linkedarr.length)){
                    linkedCode.innerHTML = `<pre><div id="InsLine1" class="InsLines">if insert in Tail{ </div>
                                            <div id="InsLine2" class="InsLines">&emsp; Loop on Linkedlist till end }</div>
                                            <div id="InsLine3" class="InsLines">add Node </div>
                                            <div id="InsLine4" class="InsLines">tail.next = Node</div>
                                            <div id="InsLine5" class="InsLines">tail = Node</div>`
                    var i=-1 , x=i-1 , j=1;
                        var interV=setInterval(function(){
                            i++; 
                            InsTailCode[j].style.background = "rgb(179,205,224)";
                            linkedarr[i].style.background = "#354a5f";
                            linkedarr[i].style.color ="white";
                            if(x<0){x+=2}
                            else{
                            linkedarr[x++].style.background = "";
                            linkedarr[x-1].style.color ="";}
                            if ( i == parseInt(linkedarr.length)-1)
                                {
                                    clearInterval(interV);
                                    setTimeout(function(){
                                        InsTailCode[j].style.background ="";
                                        InsTailCode[j+1].style.background ="rgb(179,205,224)";
                                        $( "#linkedarr" ).append( "<span class=\"arrowImg\" style='transition:visibility 3000ms;'>&#8594;</span>" );
                                        $( "#linkedarr" ).append( "<div class=\"sqrDivs\" style='transition:visibility 3000ms;'>"+valTxt.value+"</div>" );
                                        },500)
                                    setTimeout(function(){
                                        InsTailCode[j+1].style.background ="";
                                        InsTailCode[j+2].style.background ="rgb(179,205,224)";
                                    }, 1500)
                                    setTimeout(function(){
                                        InsTailCode[j+2].style.background ="";
                                        InsTailCode[j+3].style.background ="rgb(179,205,224)";
                                        var AddLeft = (parseInt(getComputedStyle(tailNode).left)) + 90;
                                        tailNode.style.left = AddLeft+"px";
                                        startBtn.disabled = false;
                                        indexTxt.disabled= false;

                                    }, 2000)
                                }
                        },(i+2)*1000)
                    }
                //========================== To Insert In Middle of Array ===================
                else if (parseInt(indexTxt.value) > 0 && parseInt(indexTxt.value) < (linkedarr.length))
                {
                    linkedCode.innerHTML = `<pre><div id="InsMidLine1" class="InsLines"><p>if insert in Middle{ </p></div>
                                            <div id="InsMidLine2" class="InsLines"><p>&emsp; Loop on Linkedlist till index }</p></div>
                                            <div id="InsMidLine3" class="InsLines"><p>add node</p></div>
                                            <div id="InsMidLine4" class="InsLines"><p>node[index-1].previous = node</p></div>
                                            <div id="InsMidLine5" class="InsLines"><p>node.next = node[index+1]</p></div>`
                    var i=-1 , x=i-1 , j=1;
                    var interV=setInterval(function()
                    {
                        debugger;
                        i++; 
                        InsTailCode[j].style.background = "rgb(179,205,224)";
                        linkedarr[i].style.background = "#354a5f";
                        linkedarr[i].style.color ="white";
                        if(x <0){
                                x+=2;
                           }
                        else{
                            linkedarr[x++].style.background = "";
                            linkedarr[x-1].style.color ="";
                        }

                        if ( i == parseInt(indexTxt.value)-1)
                            {
                                clearInterval(interV);
                                setTimeout(function(){
                                    InsTailCode[j].style.background = "";
                                    InsTailCode[j+1].style.background = "rgb(179,205,224)";
                                    var parentElement = document.getElementsByClassName('sqrDivs')[0].parentNode;
                                    var newNode = document.createElement("div");
                                    newNode.setAttribute("class", "sqrDivs");
                                    var Val= document.createTextNode(""+valTxt.value+"");
                                    newNode.appendChild(Val);
                                    var currNode = linkedarr[indexTxt.value];
                                    parentElement.insertBefore(newNode,currNode);
                                    var AddLeft = (parseInt(getComputedStyle(tailNode).left)) + 45;
                                    tailNode.style.left = AddLeft+"px";    
                                },1000)
                                setTimeout(function(){
                                    InsTailCode[j+1].style.background = "";
                                    InsTailCode[j+2].style.background = "rgb(179,205,224)";
                                },2000)
                                setTimeout(function(){
                                    var parentElement2 = document.getElementsByClassName('sqrDivs')[0].parentNode;
                                    var newNodeSp = document.createElement("span");
                                    newNodeSp.setAttribute("class", "arrowImg");
                                    var spacode = 8602;
                                    var Val2= document.createTextNode('\u2192');
                                    newNodeSp.appendChild(Val2);
                                    var numbs =parseInt(indexTxt.value) +1;
                                    var currNode2 = linkedarr[numbs];
                                    parentElement2.insertBefore(newNodeSp,currNode2);
                                    InsTailCode[j+2].style.background = "";
                                    InsTailCode[j+3].style.background = "rgb(179,205,224)";
                                    var AddLeft = (parseInt(getComputedStyle(tailNode).left)) + 45;
                                    tailNode.style.left = AddLeft+"px"; 
                                    startBtn.disabled = false;
                                    indexTxt.disabled = false;
                                },3000)

                            }     
                    },(i+2)*1000)      
                }
                //========================== Invalid Index===================
                else {
                    invalidIndex.innerText = 'index should be > 0 and < ' + linkedarr.length;
                    invalidIndex.style.display= 'inline';
                    startBtn.disabled = false;
                    indexTxt.disabled = false;
                }
            }
            else{
                invalidIndex.style.display= 'inline';
                invalidIndex.innerText = 'Linkedlist reached the max size :)';
            }
        }   
    }
    
//=============================Delete Function ===================
    function DeleteOp()
    {
        startBtn.disabled = true;
        debugger;
        var linkedList = document.getElementById("linkedarr");
        var linkedDivs = document.getElementsByClassName('sqrDivs');
        var arrows = document.getElementsByClassName('arrowImg');
        var tailNode = document.getElementById("tailNode");
        var headNode = document.getElementById("headNode");
        var tailLeftVal = parseInt(getComputedStyle(tailNode).left);
        var linkedCode = document.getElementById('linkedCode');
        var InputIndex = parseInt(indexTxt.value);

        linkedCode.innerHTML = `<pre><code>  <div class="codelines" id="line1">if empty, do nothing</div>
<div class="codelines" id="line2">var pre = head, temp = head.next</div>       <div class="codelines" id="line3">loop till index</div>    <div class="codelines" id="line4">&nbsp;&nbsp;&nbsp;pre = pre.next</div>        <div class="codelines" id="line5">var del = pre.next, after = del.next</div>      <div class="codelines" id="line6"> pre.next = after </div>     <div class="codelines" id="line7"> delete del </div></code></pre>`;

        var codeLines = document.getElementsByClassName('codeLines');
        for (var i = 0; i < codeLines.length; i++) {
            codeLines[i].style.background = "";
        }
        for (var i = 0; i < linkedDivs.length; i++) {
            linkedDivs[i].style.background = "";
            linkedDivs[i].style.color ="";
        }
        invalidIndex.innerText = "";
        ///////////////////////////invalid index/////////////////////////////////
        if (linkedDivs.length == 0) {
            tailNode.style.display = "none";
            headNode.style.display = "none";
            codeLines[0].style.background = "rgb(179,205,224)";
            invalidIndex.innerText = 'linked list already empty';
            invalidIndex.style.display= 'inline';
            startBtn.disabled = false;

        }
        ///////////////////////////list is empty////////////////////////////////
        else if (InputIndex >= linkedDivs.length || InputIndex < 0) {
            invalidIndex.innerText = 'index should be > 0 and < ' + linkedDivs.length;
            invalidIndex.style.display= 'inline';
            startBtn.disabled = false;
        }
        ///////////////////////////delete only element/////////////////////////////////
        else if (linkedDivs.length == 1) {
            setTimeout(function () {
                codeLines[1].style.background = "rgb(179,205,224)";
                linkedDivs[InputIndex].style.background = "#354a5f";
                linkedDivs[InputIndex].style.color ="white";
//                tmp.style.display = 'inline';
            }, 500)
            setTimeout(function () {
                codeLines[1].style.background = "";
                codeLines[6].style.background = "rgb(179,205,224)";
            }, 1000)
            setTimeout(function () {
                linkedList.removeChild(linkedDivs[InputIndex]);
//                tmp.style.display = 'none';
                tailNode.style.display = "none";
                headNode.style.display = "none";
            }, 1500)
            setTimeout(function () {
                codeLines[6].style.background = "";
                startBtn.disabled = false;
            }, 2000)

        }
        ///////////////////////////delete head//////////////////////////////
        else if (InputIndex == 0) {
            setTimeout(function () {
                codeLines[1].style.background = "rgb(179,205,224)";
                linkedDivs[InputIndex].style.background = "#354a5f";
                linkedDivs[InputIndex].style.color ="white";
//                tmp.style.display = 'inline';
            }, 500)
            setTimeout(function () {
                codeLines[1].style.background = "";
                codeLines[6].style.background = "rgb(179,205,224)";
            }, 1000)
            setTimeout(function () {
                linkedList.removeChild(arrows[InputIndex]);
            }, 1500)
            setTimeout(function () {
                linkedList.removeChild(linkedDivs[InputIndex]);
//                tmp.style.display = 'none';
                tailLeftVal -= 92;
                tailNode.style.left = tailLeftVal + "px";
                codeLines[6].style.background = "";
                startBtn.disabled = false;
            }, 2000)
        } 
        else {
            /////////////////////delete tail/////////////////////////////
            if (InputIndex == linkedDivs.length - 1) {
                codeLines[1].style.background = "rgb(179,205,224)";
//                tmp.style.display = 'inline';
                setTimeout(function () {
                    codeLines[1].style.background = "";
                    codeLines[2].style.background = "rgb(179,205,224)";
                }, 500);
                setTimeout(function () {
                    codeLines[2].style.background = "";
                }, 1000)
                var i = 0,
                    j=i-1;
                var inter = setInterval(function () {
                    linkedDivs[i++].style.background = "#354a5f";
                    linkedDivs[i-1].style.color ="white";
                    if(j<0){j++;}
                    else{linkedDivs[j++].style.background = "";
                    linkedDivs[j-1].style.color ="";}
//                    tmpLeft += 80;
//                    tmp.style.left = tmpLeft + "px";
                    setTimeout(function () {
                        codeLines[3].style.background = "rgb(179,205,224)";
                    }, 500)

                    codeLines[3].style.background = "rgb(179,205,224)";

                    if (i == linkedDivs.length -1) {
                        clearInterval(inter);
                        setTimeout(function () {
                            codeLines[3].style.background = "";
                            codeLines[5].style.background = "rgb(179,205,224)";
                            linkedList.removeChild(arrows[InputIndex-1]);
                        }, 2000)
                        setTimeout(function () {
                            codeLines[5].style.background = "";
                            codeLines[6].style.background = "rgb(179,205,224)";
                            linkedList.removeChild(linkedDivs[InputIndex]);
//                            tmp.style.display = 'none';
                            tailLeftVal -= 92;
                            tailNode.style.left = tailLeftVal + "px";
                        }, 3000)
                        setTimeout(function () {
                            codeLines[6].style.background = "";
                        }, 3500)
                        setTimeout(function(){startBtn.disabled = false;},4000);
                    }
                }, 1000)


            }
            //////////////////////////delete in between///////////////////////////////
            else {
                codeLines[1].style.background = "rgb(179,205,224)";
//                tmp.style.display = 'inline';
                setTimeout(function () {
                    codeLines[1].style.background = "";
                    codeLines[2].style.background = "rgb(179,205,224)";
                }, 500);
                setTimeout(function () {
                    codeLines[2].style.background = "";
                }, 1000)
                var i = 0,
                    j=i-1;
                var inter = setInterval(function () {
                    linkedDivs[i++].style.background = "#354a5f";
                linkedDivs[i-1].style.color ="white";
                    if(j<0){j++;}
                    else{linkedDivs[j++].style.background = "";
                    linkedDivs[j-1].style.color ="";}
//                    tmpLeft += 80;
//                    tmp.style.left = tmpLeft + "px";
                    setTimeout(function () {
                        codeLines[3].style.background = "rgb(179,205,224)";
                    }, 500)

                    codeLines[3].style.background = "rgb(179,205,224)";

                    if (i == InputIndex) {
                        clearInterval(inter);
                        setTimeout(function () {
                            codeLines[3].style.background = "";
                            codeLines[5].style.background = "rgb(179,205,224)";
                            linkedList.removeChild(arrows[InputIndex]);
                        }, 2000)
                        setTimeout(function () {
                            codeLines[5].style.background = "";
                            codeLines[6].style.background = "rgb(179,205,224)";
                            linkedList.removeChild(linkedDivs[InputIndex]);
//                            tmp.style.display = 'none';
                            tailLeftVal -= 90;
                            tailNode.style.left = tailLeftVal + "px";
                        }, 3000)
                        setTimeout(function () {
                            codeLines[6].style.background = "";
                        }, 3500)
                        setTimeout(function(){startBtn.disabled = false;},4000);
                    }
                }, 1000)

            }
    }
    }
//============================== Start Btn========================
    startBtn.addEventListener('click', function(){
        not_found.innerHTML="";
        switch(CheckOp)
            {
                case 0:
                    {
                        linkedCode.innerHTML ='<h1 id="ChosOp">Choose Operation,Please!</h1>'
                    }
                    break;
                case 1:
                    {
                        searchOp();
                    }
                    break;
                case 2:
                    {
                        InsertOp();
                    }
                    break;
                case 3:
                    {
                        DeleteOp();
                    }
            }
        
    })
    
    
    /*
//**************************search*********************************************
*/
var content=document.getElementById('linkedarr');
var nodes=content.querySelectorAll('div');
var txt_search=document.getElementById('txtInp1');
var not_found=document.getElementById('invalid');
var code_found=0;
var code_not_found=0;
var code_next=0;
var search_interval=0;
var interval_setted=0;
var node_counter=0;
var node_counter_prev=-1;
var found=false;

function searchOp()
{
    for(var i=0; i<nodes.length;i++)
    {
        nodes[i].style.background="";
        nodes[i].style.color="";
    
    }
    not_found.innerHTML="";
    if(interval_setted)
    {
        clearInterval(search_interval);
        startBtn.disabled=false;
        nodes[node_counter].style="";
        code_found.style.backgroundColor='#eeeeee';
        code_found.style.backgroundColor='#eeeeee';
        code_found.style.backgroundColor='#eeeeee';
        not_found.innerHTML="";
    }
    
    linkedCode.innerHTML=`<div class="InsLines" style='font-size:16pt'>
    while( Node_value&nbsp;!=&nbsp;Search_vale )<br>
            {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span id="next">move_to_next_node();</span><br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;if(Node_value&nbsp;==&nbsp;Search_vale)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;{<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="found">return "Value is found";</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;}<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span id="notfound">return "Value is not found";</span><br>
            }<br></div>`;
        code_next=document.getElementById('next');
        code_found=document.getElementById('found');
        code_not_found=document.getElementById('notfound');

        startBtn.onclick=null;
        node_counter=0;
        node_counter_prev=-1;
        found=false;
        nodes=content.querySelectorAll('div');
        txt_search=document.getElementById('txtInp1');
        s_interval=setInterval(color,700);
        startBtn.disabled=true;

}

function color()
{
     
    if(nodes.length > node_counter)
    {
        
        if(node_counter_prev>=0)
        {
            nodes[node_counter_prev].style="";
            
        }
                
    
        nodes[node_counter].style.backgroundColor='#354a5f';
        nodes[node_counter].style.color='white';
        code_next.style.backgroundColor='rgb(179,205,224)';
                
    
        if(nodes[node_counter].innerText == txt_search.value)
        { 
            clearInterval(s_interval);
            startBtn.disabled=false;
            interval_setted=0;
            found=true;
            not_found.innerHTML="Value is found";
            not_found.style.color='green';
            
            code_found.style.backgroundColor='rgb(179,205,224)';
            code_not_found.style.backgroundColor='#eeeeee';
            code_next.style.backgroundColor='#eeeeee';
               
            
            search_interval=setInterval(disappear,50);
            startBtn.disabled=true;
            interval_setted=1;
            var i=0;
            function disappear()
            {
                i++;
            
                if(i==40)
                {
                    clearInterval(search_interval);
                    startBtn.disabled=false;
                    interval_setted=0;
                    not_found.innerHTML="";
                    nodes[node_counter].style.backgroundColor='white';
                    nodes[node_counter].style.color='#354a5f';
                
                    
                    code_found.style.backgroundColor='#eeeeee';
                    code_found.style.backgroundColor='#eeeeee';
                    code_found.style.backgroundColor='#eeeeee';
                    nodes[node_counter].style="";
                    
                }
            }
        }
        else
        {
            node_counter++;
            node_counter_prev++;
        }
    }
    else
    {
        clearInterval(s_interval);
        startBtn.disabled=false;
        interval_setted=0;
        found=false;
        not_found.innerHTML="Value is not found";
        not_found.style.color='red';
        nodes[node_counter_prev].style="";
        
        code_not_found.style.backgroundColor='rgb(179,205,224)'; 
        code_found.style.backgroundColor='#eeeeee';
        code_next.style.backgroundColor='#eeeeee';
               
        search_interval=setInterval(disappear,50);
        startBtn.disabled=true;
        interval_setted=1;
        var i=0;
        function disappear()
        {
            i++;
            
            if(i==40)
            {
                clearInterval(search_interval);
                startBtn.disabled=false;
                interval_setted=0;
                not_found.innerHTML="";
                
                
                code_found.style.backgroundColor='#eeeeee';
                code_not_found.style.backgroundColor='#eeeeee';
                code_next.style.backgroundColor='#eeeeee';
                //nodes[nodes.length-1].style="";
            }
        }
    }
    
}


    
})

