/// <reference path="E://VSCode_projects/rezaee_website/typings/globals/jquery/index.d.ts" />



"use strict";

function collapseNavbar()
{
    debugger;

    var currentheight = $("#rn-navbar").height();

    if(currentheight == 80 || currentheight == 104)
    {
        $("#rn-navbar").css("height","235px");
        $("#rn-nav-ul").css("height","148px");
        window.navbarOpen = true;
    }
    else
    {
        document.getElementById("rn-navbar").style.height = $("#brand-container").height();
        document.getElementById("rn-nav-ul").style.height = null;
        window.navbarOpen = false;
    }
}

$(document).ready(function(){
    $("#bism").fadeIn(1000);
    $("#ostad_pic").delay(1000).fadeIn(1000);
    $(".contents").delay(2000).fadeIn(1000);
});


window.navbarOpen = false;

function previousState()
{
    // debugger;

    if($("body").scrollTop() > 20)
    {
        $("#brand-container").width(104).height(104);

        if(!window.navbarOpen)
        {
            $("#rn-navbar").height(104);
        }
    }
    else
    {
        document.getElementById("brand-container").style.height = null;
        document.getElementById("brand-container").style.width = null;

        if(!window.navbarOpen)
        {
            document.getElementById("rn-navbar").style.height = null;
        }
    }
}

function ShowOverall()
{
    // debugger;

    $("#ov-cn").height(250);
    $("#mr").css("display","block").css("opacity",1);
}
function hideOverall()
{
    document.getElementById("ov-cn").style.height = null;
    document.getElementById("mr").style.display = null;
}
