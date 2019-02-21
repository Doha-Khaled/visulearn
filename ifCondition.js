window.addEventListener('load', function () {
    var ifElse = document.getElementById("ifTab");
    var switchCase = document.getElementById("switchTab");
    var homeBtn = document.getElementById("homebtn");
    ifElse.focus();
    homeBtn.addEventListener('click', function () {
        window.open("home.html","_self");

    });

    ifElse.addEventListener('click', function () {
        var tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        ifElse.style.background = "#777";
        switchCase.style.background = "";

        document.getElementById("ifElse").style.display = "block";

    })

    switchCase.addEventListener('click', function () {
        var tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        switchCase.style.background = "#777";
        ifElse.style.background = "";

        document.getElementById("switch").style.display = "block";

    })
    /////////////////////////////if/////////////////////
    var startAnimate = document.getElementById("startAnimate");
    var resetAnimate = document.getElementById("resetAnimate");
    var catImg = document.getElementById("catImg");
    var leftval = parseInt(getComputedStyle(catImg).left);
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var line4 = document.getElementById("line4");
    var line5 = document.getElementById("rest");
    var canDrink = document.getElementById("canDrink");
    var nomilk = document.getElementById("nomilk");
    var interLine1 = 0,
        interLine2 = 0,
        interLine3 = 0,
        ifDone = 0;



    function elseExec() {
        resetAnimate.click();
        startAnimate.disabled = true;

        line1.style.background = "rgb(179,205,224)";

        setTimeout(function () {
            line1.style.background = "";
            line4.style.background = "rgb(179,205,224)";
            catImg.src = "./images/flipcat.jpg";

            interLine1 = setInterval(function () {
                if (leftval >= -250)
                    leftval -= 10;
                catImg.style.left = leftval + "px";
                if (catImg.style.left == "-250px") {
                    clearInterval(interLine1);
                    line4.style.background = "";
                    line5.style.background = "rgb(179,205,224)";
                    nomilk.style.display = "block";

                    setTimeout(function () {
                        line1.style.background = "";
                        line4.style.background = "";
                        line5.style.background = "";
                    }, 1000);
                    setTimeout(function () {
                        resetAnimate.click();
                        startAnimate.disabled = false;
                    }, 2000)
                }
            }, 500);
        }, 2000);

    }
    startAnimate.addEventListener('click', function () {
        //move forward
        startAnimate.disabled = true;
        line1.style.background = "rgb(179,205,224)";

        setTimeout(function () {
            line1.style.background = "";
            line2.style.background = "rgb(179,205,224)";
            catImg.src = "./images/cat.jpg";
            interLine2 = setInterval(function () {
                if (leftval <= 40)
                    leftval += 10;
                catImg.style.left = leftval + "px";
                if (catImg.style.left >= "40px") {
                    clearInterval(interLine2);
                    setTimeout(function () {
                        line2.style.background = "";
                        line5.style.background = "rgb(179,205,224)";
                        canDrink.style.display = "block";
                    }, 1000);
                    setTimeout(function () {
                        resetAnimate.click();
                        startAnimate.disabled = true;
                        elseExec();
                    }, 2000)
                }
            }, 500);
        }, 2000);

    })

    resetAnimate.addEventListener('click', function () {
        clearInterval(interLine1);
        clearInterval(interLine2);
        startAnimate.disabled = false;
        line1.style.background = "";
        line2.style.background = "";
        line3.style.background = "";
        line4.style.background = "";
        line5.style.background = "";
        catImg.style.left = "-90px";
        leftval = parseInt(getComputedStyle(catImg).left)
        canDrink.style.display = "none";
        nomilk.style.display = "none";
        catImg.src = "./images/cat.jpg";

    })



    /////////////////////////////switch/////////////////////
    var startAnimation = document.getElementById("startAnimation");
    var gotogrocery = document.getElementById("gotogrocery");
    var personImg = document.getElementById("personImg");
    var line1switch = document.getElementById("line1switch");
    var line2switch = document.getElementById("line2switch");
    var line3switch = document.getElementById("line3switch");
    var line4switch = document.getElementById("line4switch");
    var line5switch = document.getElementById("line5switch");
    var setInter1 = 0,
        setInter2 = 0,
        setInter3 = 0;
    var switchleftval = parseInt(getComputedStyle(personImg).left);
    var groceryleftval = parseInt(getComputedStyle(gotogrocery).left);
    var grocerytopval = parseInt(getComputedStyle(gotogrocery).top);
    var switchtopval = parseInt(getComputedStyle(personImg).top);



    startAnimation.addEventListener('click', function () {
        startAnimation.disabled = true;
        gotogrocery.style.display = "block";
        line1switch.style.background = "rgb(179,205,224)";

        setTimeout(function () {
            line1switch.style.background = "";
            line2switch.style.background = "rgb(179,205,224)";
            setInter1 = setInterval(function () {
                if (switchleftval > -100) {
                    switchleftval -= 10;
                    switchtopval -= 2;
                    groceryleftval -= 8;
                    grocerytopval -= 1.5;
                }
                personImg.style.left = switchleftval + "px";
                personImg.style.top = switchtopval + "px";
                gotogrocery.style.top = grocerytopval + "px";
                gotogrocery.style.left = groceryleftval + "px";
                if (switchleftval == -100) {
                    clearInterval(setInter1);
                    setTimeout(function () {
                        line2switch.style.background = "";
                        line3switch.style.background = "rgb(179,205,224)";
                    }, 1000);
                    setTimeout(function () {
                        line3switch.style.background = "";
                        line5switch.style.background = "rgb(179,205,224)";
                    }, 1500)
                    setTimeout(function () {
                        resetAnimation.click();
                        startAnimation.disabled = false;
                    }, 2500)
                }
            }, 500)
        }, 1000)
    })

    resetAnimation.addEventListener('click', function () {
        clearInterval(setInter1);
        startAnimation.disabled = false;
        line1switch.style.background = "";
        line2switch.style.background = "";
        line3switch.style.background = "";
        line4switch.style.background = "";
        line5switch.style.background = "";
        personImg.style.left = "200px";
        personImg.style.top = "50px";
        gotogrocery.style.left = "600px";
        gotogrocery.style.top = "50px";

        switchleftval = parseInt(getComputedStyle(personImg).left);
        groceryleftval = parseInt(getComputedStyle(gotogrocery).left);
        grocerytopval = parseInt(getComputedStyle(gotogrocery).top);
        switchtopval = parseInt(getComputedStyle(personImg).top);
        gotogrocery.style.display = "none";
    })
})
