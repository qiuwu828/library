$(document).ready(function () {
    //验证密码
    $("#pwd").blur(function(){
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
    //确认密码
    $("#repwd").blur(function(){
        var passWard=$("#pwd").val();
        var repassWard=$("#repwd").val();
        var reg =/^[a-zA-Z0-9]{4,10}$/;
        if(passWard!=repassWard){
            alert("两次输入的密码不一致");
            return false;
        }else if(repassWard==""){
            alert("密码能为空");
            return false;
        }
    });
//    级联
    var provinces = new Array();
    provinces["河北省"] = ["石家庄市", "邢台市", "邯郸市"];
    provinces["北京市"] = ["朝阳区", "海淀区", "丰台区"];
    provinces["上海市"] = ["松江区", "青浦区", "昆山区"];
    provinces["河南省"] = ["郑州市", "周口市", "许昌市"];
    provinces["山东省"] = ["济南市", "潍坊市", "临沂市"];

    $("#province").append(function () {
        var shengfen = "";
        //for-in遍历对象的属性
        for (var i in provinces) {
            shengfen += "<option value=" + i + ">" + i + "</option>"
        }
        return $(shengfen);
    });
    $("#province").change(function () {
        var v = $(this).val();
        var citys = provinces[v];
        var shi = "";
        if (shi == "请选择省/城市") {
            shi == "请选择城市/地区";
        } else {
            $.each(citys, function (i, n) {
                shi += "<option value=" + n + ">" + n + "</option>";
            })
        }
        $("#city").html(shi);
    });
})