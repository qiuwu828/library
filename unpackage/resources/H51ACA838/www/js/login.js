$(document).ready(function () {
    //验证email邮件
    $("#email").focus(function(){
        $(this).css("background-color","#dfdfdf");
    }).blur(function(){
        $(this).css("background-color","white");
    })
    $("#email").blur(function () {
        var email = $("#email").val();
        var reg =/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
        if (email==""){
            alert("email不能为空");
            return false;
        }else if(reg.test(email)==false){
            alert("email格式错误");
            return false;
        }
    });
    //验证密码
    $(function(){
        $("#pwd").focus(function(){
            $(this).css("background-color","#dfdfdf");
        }).blur(function(){
            $(this).css("background-color","white");
        })
        $("#pwd").blur(function () {
            var passWard = $("#pwd").val();
            var reg =/^[a-zA-Z0-9]{4,10}$/;
            if (passWard==""){
                alert("密码不能为空");
                return false;
            }else if(reg.test(passWard)==false){
                alert("密码格式错误");
                return false;
            }
        });
    });
})