$(document).ready(function () {
    //弹窗广告
    //window.open("open.html", "", "width=300,height=400,left=300,top=100");
    //滚动条
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        $("#right").css("margin-top", top);
    });
    //关闭广告
    $("#dd_close").find("a").click(function () {
        $("#right").hide();
    });
    //封装轮换显示的横幅广告
    function rotation() {
        //定义下标
        var index = 0;
        //判断定时器的开关
        var stop = false;
        //获取图片
        var $image = $(".scroll").find("#scroll_img").children("li");
        //获取数字
        var $number = $(".scroll").find("#scroll_number").children("li");
        //    从图片和数字获得下标
        $number.eq(index).addClass("scroll_number_over").siblings().removeClass("scroll_number_over");
        $number.mouseover(function () {
            stop = true;
            index = $number.index($(this));
            $(this).addClass("scroll_number_over").siblings().removeClass("scroll_number_over");
            $image.eq(index).fadeIn().siblings().fadeOut();
        }).mouseout(function () {
            stop = false;
        });
        //设置定时函数
        setInterval(function () {
            if (stop) {
                return;
            }
            index++;
            if (index >= $image.length) {
                index = 0;
            }
            $number.eq(index).addClass("scroll_number_over").siblings().removeClass("scroll_number_over");
            $image.eq(index).fadeIn().siblings().fadeOut();
        }, 1000);
    };
    rotation();
    //电子书
    $(".book li img").mouseover(function () {
        $(this).animate({"width": "110%"}, "slow");
    }).mouseout(function () {
        $(this).animate({"width": "80%"}, "slow")
    });
    //图书畅销榜，图书上新书榜
    $(".tab ol li:first-of-type").mouseover(function () {
        $(".tab ol li:first-of-type").css({"background-color":"#ffffff","border":"none"});
        $(".tab ol li:last-of-type").css({"background-color":"#efefef","border":"1px","width":"118px"});
        $(".tab ul:first-of-type").show();
        $(".tab ul:last-of-type").hide();
    });
    $(".tab ol li:last-of-type").mouseover(function () {
        $(".tab ol li:first-of-type").css({"background-color":"#ffffff","border":"none"});
        $(".tab ol li:last-of-type").css({"background-color":"#efefef","border":"1px","width":"118px"});
        $(".tab ul:last-of-type").show();
        $(".tab ul:first-of-type").hide();
    });
    //鼠标放在书名上显示具体的内容
    $(".tab ul li").mouseover(function () {
        $(this).siblings().children("dl").hide();//使鼠标滑过p标签，当前dl标签显示
        $(this).siblings().children("p").show();//使鼠标滑过p标签，当前p标签隐藏
        $(this).children("dl").show();//使鼠标滑过p标签，同级dl标签显示
        $(this).children("p").hide();//使鼠标滑过p标签，同级p标签隐藏
    });
    //$(".tab ul li p").mouseover(function(){
    //   $(this).next().show();
    //    $(this).hide();
    //    $(this).parent().siblings().children("p").show().end().children("dl").hide();
    //});
    //书讯快递
    function move() {
        var stop = false;//判断定时器
        var marginTop = 0;
        setInterval(function () {
            if (stop) {
                return;
            }
            $("#express").children("li").first().animate({"margin-top": marginTop--}, 0, function () {
                var $first = $(this);
                if ((-marginTop) > $first.height()) {
                    $(this).css("margin-top", 0).appendTo($("#express"));
                    marginTop = 0;
                }
            })
        }, 50);
        $("#express").mouseover(function () {
            stop = true;
        }).mouseout(function () {
            stop = false;
        });
    };
    move();
})