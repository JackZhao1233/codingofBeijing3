(function ($, window, document, undefined) {
    /*
     * Custom Data Fixed
     */
    $('.beactive').addClass('active');
    $('.beactive').removeClass('beactive');
})(jQuery, window, document);
/*固定到底部的代码 */
$(function(){
    function footerPosition(){
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight,//网页正文全文高度
            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(!(contentHeight > winHeight)){
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $("footer").addClass("fixed-bottom");
        } else {
            $("footer").removeClass("fixed-bottom");
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
});
/*滑动到指定界面*/
$(document).ready(function(){
     $("#company1").click(function(){
        $("html,body").animate({
            //这个时间还是可以的
            scrollTop:$("#companyIntroduce").offset().top},{duration:500,easing:"swing"});
            return false;
     });
     $("#connect1").click(function(){
        $("html,body").animate({
            //这个时间还是可以的
            scrollTop:$("#connect").offset().top},{duration:500,easing:"swing"});
            return false;
     });
});
/*跳转代码
$(".reference").on('click',function(e){  
    var e = window.event || e  
    e.preventDefault();  
    var rid=$(this).children('a').attr('href');  
 
    $('body,html').animate({scrollTop:$(rid).offset().top-120},500,function(){  
         $(rid).css('background','#B0C4DE').siblings().css('background','none')  
    })  
});  */