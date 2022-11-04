
//__________Loading Screen__________
$(window).ready(function()  
{
    $(".loading-screen").fadeOut(3000,function()
    {
        $("body").css("overflow","visible");
    });
})

//__________Color option__________
var bgColor=["#8e7754","lightcoral","tan","teal"];  
for(var i=0;i<bgColor.length;i++)
{
    $(".abar ul li").eq(i).css("background-color",bgColor[i])
}

$(".abar ul li").click(function()
{
    var currentBg=$(this).css("background-color");
    $(".change,.navbar-light .navbar-nav .active>.nav-link").css("color",currentBg)
    $(".changebg").css({"background-color":currentBg,"color":"#fff","border-color":currentBg})
    $(".changebrd").css({"border-color":currentBg});
})

var colorwidth=$(".color-option").outerWidth(); 
$(".abar").css("right",-colorwidth);   
var abarRight= $(".abar").css("right");         


$(".fa-cogs").click(function()
{
    if(abarRight=="0px")
    {
        $(".abar").animate({"right":-colorwidth},1000);
        abarRight=-colorwidth;

    }
    else
    {
       $(".abar").animate({"right":0},1000);
       abarRight="0px";
    }
})


//__________Navigation,backtop__________
var aboutOffset=$("#about").offset().top;
$(window).scroll(function()
{
    var scrollOffset=$(window).scrollTop();
    if(scrollOffset>=aboutOffset)
    {
        $(".navbar").css({"background-color":"#fff","transition":"background-color 1s","box-shadow":"0px 1px 12px #dfd9d9"})
        $(".navbar-brand .mainImg").attr("src","images/bakery-color.png")
    }
    else
    {
        $(".navbar").css({"background-color":"transparent","box-shadow":"none"});
        $(".navbar-brand .mainImg").attr("src","images/bakery-light-1.png")
    }
    if(scrollOffset>=aboutOffset)
    {
        $(".back-top").fadeIn(1000);
    }
    else
    {
        $(".back-top").fadeOut(1000);
    }
})

$(".nav-link").click(function()
{
    var currentHref= $(this).attr("href");
    var currentOffset=$(currentHref).offset().top;
    $("body").animate({scrollTop:currentOffset},700)
})

$(".circle").click(function()
{
    $("body").animate({scrollTop:aboutOffset},500)
})

$(".back-top").click(function()
{
    $("body").animate({scrollTop:0},500)
})

//__________Toggle button__________
$(".navbar-toggler").click(function()
{
    $(".navbar-toggler i").toggleClass("far fa-times");
}
)