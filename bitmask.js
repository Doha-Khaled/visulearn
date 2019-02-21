window.addEventListener('load', function(){
    var flgLftArr = 0;
    var flgUpLftArr =0;
     var timerID;
//============= Get Variables from Html =================================
    var slctOp = document.getElementById('slctOp');
    var sqrslectOP = document.getElementById('sqrslectOP');
    var opAnd = document.getElementById('opAnd');
    var opOr = document.getElementById('opOr');
    var opNot = document.getElementById('opNot');
    var opXor = document.getElementById('opXor');
    var operName =document.getElementById('operation');
    var frstNum = document.getElementById('frstNum' ).getElementsByClassName("sqrDivs");
    var secNum = document.getElementById('secNum' ).getElementsByClassName("sqrDivsSec");
    var nums = document.getElementById('numss');
    var imgarrow = document.getElementById('imgarr');
    var startBtn = document.getElementById('startBtn');
    var resetBtn = document.getElementById('resetBtn');
    var tblOp1 = document.getElementById('tblOp1');
    var tblOp2 = document.getElementById('tblOp2');
    var tblOp3 = document.getElementById('tblOp3');
    var tblOp4 = document.getElementById('tblOp4');
    var tblResOp1 = document.getElementById('tblResOp1');
    var tblResOp2 = document.getElementById('tblResOp2');
    var tblResOp3 = document.getElementById('tblResOp3');
    var tblResOp4 = document.getElementById('tblResOp4');
    var notTruthtbl = document.getElementById('notTruthtbl');
    var truthtbl = document.getElementById('truthtbl');
    var ResArray = document.querySelectorAll(".sqrDivsRes");
    var SecNumArray = document.querySelectorAll(".sqrDivsSec");
    var FrstNumArray = document.querySelectorAll(".sqrDivs");
    var setNums = document.getElementById('setNums');
    var sqrSetNum = document.getElementById('sqrSetNum');
    var tblTrthP =document.getElementById('tblTrthP');
    var notTblTrthP =document.getElementById('notTblTrthP');
    var inputBtn = document.getElementById('inputBtn');
    var txtInp1 = document.getElementById('txtInp1');
    var txtInp2 = document.getElementById('txtInp2');
    var headerbtn = document.getElementById('headerbtns');
    var linSetNum = document.getElementById('linSetNum');
    

//============= Home Btn =====================================
    headerbtn.addEventListener('click', function(){
        window.location.href= "home.html", "_self";
    })
//============= handel Default Truth Table =====================================
tblOp1.innerText = "AND";
tblOp2.innerText = "AND";
tblOp3.innerText = "AND";
tblOp4.innerText = "AND";
tblResOp1.innerText = 0 && 0;
tblResOp2.innerText = 0 && 1;
tblResOp3.innerText = 1 && 0;
tblResOp4.innerText = 1 && 1;

//============= behaviour of left Arrow =================================
   slctOp.addEventListener('click' , function(){
       if(flgLftArr == 0){
           $("#sqrslectOP").fadeOut("slow");
           flgLftArr = 1;
       }
       else{
           $("#sqrslectOP").fadeIn("slow");
           flgLftArr = 0;
       }
   })
    
//============= behaviour of Up left Arrow =================================
   setNums.addEventListener('click' , function(){
       if(flgUpLftArr == 0){
           $("#sqrSetNum").fadeOut("slow");
           flgUpLftArr = 1;
       }
       else{
           $("#sqrSetNum").fadeIn("slow");
           flgUpLftArr = 0;
       }
   })
   
//============= behaviour of And Operation ====================================
    opAnd.addEventListener('click', function(){
        ResetResult();
        operName.innerHTML = "AND";
        notTruthtbl.style.display = "none";
        notTblTrthP.style.display = "none";
        truthtbl.style.display = "inline-block";
        tblTrthP.style.display = "inline-block";
        linSetNum.style.visibility = "visible" ;
        tblOp1.innerText = "AND";
        tblOp2.innerText = "AND";
        tblOp3.innerText = "AND";
        tblOp4.innerText = "AND";
        tblResOp1.innerText = 0 && 0;
        tblResOp2.innerText = 0 && 1;
        tblResOp3.innerText = 1 && 0;
        tblResOp4.innerText = 1 && 1;
    })
    
//============= behaviour of OR Operation ====================================
    opOr.addEventListener('click', function(){
        ResetResult();
        operName.innerHTML = "OR";
        notTruthtbl.style.display = "none";
        notTblTrthP.style.display = "none";
        truthtbl.style.display = "inline-block";
        tblTrthP.style.display = "inline-block";
        linSetNum.style.visibility ="visible";
        tblOp1.innerText = "OR";
        tblOp2.innerText = "OR";
        tblOp3.innerText = "OR";
        tblOp4.innerText = "OR";
        tblResOp1.innerText = 0 || 0;
        tblResOp2.innerText = 0 || 1;
        tblResOp3.innerText = 1 || 0;
        tblResOp4.innerText = 1 || 1;
    })
    
//============= behaviour of XOR Operation ==================================== 
    opXor.addEventListener('click', function(){
        ResetResult();
        operName.innerHTML = "XOR";
        notTruthtbl.style.display = "none";
        notTblTrthP.style.display = "none";
        truthtbl.style.display = "inline-block";
        tblTrthP.style.display = "inline-block";
        linSetNum.style.visibility ="visible";
        tblOp1.innerText = "XOR";
        tblOp2.innerText = "XOR";
        tblOp3.innerText = "XOR";
        tblOp4.innerText = "XOR";
        tblResOp1.innerText = 0 ^ 0;
        tblResOp2.innerText = 0 ^ 1;
        tblResOp3.innerText = 1 ^ 0;
        tblResOp4.innerText = 1 ^ 1;
    })
    
//============= behaviour of Not Operation ====================================
    opNot.addEventListener('click', function(){
        ResetResult();
        for (var j =0 ; j <frstNum.length ; j++)
        {
            frstNum[j].style.display = "none";
        }
        nums.style.display = "none";
        for(var i=0 ; i<ResArray.length ; i++){
            ResArray[i].style.backgroundColor = '#dddddd';
            ResArray[i].innerText = "";
        }
        operName.innerHTML = "NOT";
        truthtbl.style.display = "none";
        tblTrthP.style.display = "none";
        linSetNum.style.visibility ="hidden";
        notTruthtbl.style.display = "inline-block";
        notTblTrthP.style.display = "inline-block";
        
    })
    
//=============================== Start Button ===================================
//=========== Interval of Start btn ======================
    function resFun(i){
        i++;
        timerID=setTimeout(resFun,500,i);
        if(i<ResArray.length){
            ResArray[i].style.backgroundColor = '#354a5f';
            ResArray[i].style.color = 'white';
            var nmOp = operName.innerText;
            switch(nmOp){
                    case "AND":
                    {
                        ResArray[i].innerText = parseInt(FrstNumArray[i].innerText) && parseInt(SecNumArray[i].innerText);
                    }
                    break;
                case "OR":
                    {
                        ResArray[i].innerText = parseInt(FrstNumArray[i].innerText) || parseInt(SecNumArray[i].innerText);
                    }
                    break;
                case "XOR":
                    {
                        ResArray[i].innerText = parseInt(FrstNumArray[i].innerText) ^ parseInt(SecNumArray[i].innerText);
                    }
                    break;
                case "NOT":
                    {
                        if (!parseInt(SecNumArray[i].innerText))
                            {
                                ResArray[i].innerText = 1;
                            }
                        else{
                            ResArray[i].innerText = 0;
                        }
                    }
            }
            
        }
        else {
            clearTimeout(timerID);
             //startBtn.disabled = false;
//            inputBtn.disabled = false;
            }
        
    }
    

//=========== Action of start btn ========================
    startBtn.addEventListener('click', function(){
//        inputBtn.disabled = true;
        startBtn.disabled = true;
        var opera = operName.innerText;
        switch(opera){
            case "AND":
                {
                    var i=-1;
                    setTimeout(resFun,500,i);
                }
                break;
            case "OR":
                {
                    var i=-1;
                    setTimeout(resFun,500,i);
                }
                break;
            case "XOR":
                {
                    var i=-1;
                    setTimeout(resFun,500,i);
                }
                break;
            case "NOT":
                {
                    var i=-1;
                    setTimeout(resFun,500,i);
                }
        }
    })
    
//=============================== Reset Button ===================================
//=========================Reset Functions============================
    function ResetResult(){
        startBtn.disabled = false;
//        inputBtn.disabled = false;
       clearTimeout(timerID);
        for (var j =0 ; j <frstNum.length ; j++)
        {
            frstNum[j].style.display = "inline-block";
        }
        nums.style.display = "inline-block";
        for(var i=0 ; i<ResArray.length ; i++){
            ResArray[i].style.backgroundColor = '#dddddd';
            ResArray[i].innerText = "";
        }
    }
    
//=========== Action of Reset btn ========================
    resetBtn.addEventListener('click', function(){
        startBtn.disabled = false;
//        inputBtn.disabled = false;
        var operati = operName.innerText;
        switch(operati){
            case "AND":
                {
                    ResetResult();
                }
                break;
            case "OR":
                {
                    ResetResult();
                }
                break;
            case "XOR":
                {
                    ResetResult();
                }
                break;
            case "NOT":
                {
                    clearTimeout(timerID);
                    for (var j =0 ; j <frstNum.length ; j++)
                    {
                        frstNum[j].style.display = "none";
                    }
                    nums.style.display = "none";
                    for(var i=0 ; i<ResArray.length ; i++){
                        ResArray[i].style.backgroundColor = '#dddddd';
                        ResArray[i].innerText = "";
                    }
                }
        }
    })
    
//=============================== Button GOooooooooo =============================
    inputBtn.addEventListener('click', function(){
        clearTimeout(timerID);
        startBtn.disabled= false;
        for(var i=0 ; i<ResArray.length ; i++){
            ResArray[i].style.backgroundColor = '#dddddd';
            ResArray[i].innerText = "";
        }
        var num1 = txtInp1.value;
        var num2 = txtInp2.value;
        var numb1 = (num1 >>> 0).toString(2);
        var numb2 = (num2 >>> 0).toString(2);
        while(numb1.length < 8){
            numb1 = "0"+numb1;
        }
        while(numb2.length < 8){
            numb2 = "0"+numb2;
        }
        for (var i = 0 ; i<8 ; i++){
            frstNum[i].innerText = parseInt(numb1.charAt(i));
            secNum[i].innerText = parseInt(numb2.charAt(i));      
        }    
    })
})





