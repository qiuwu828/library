$(function () {
//    点击向上箭头推荐内容隐藏
    $(".shopping_commend_right").toggle(function () {
        $("#shopping_commend_sort").hide();
    }, function () {
        $("#shopping_commend_sort").show();
    });
//    隔行变色
    $("#myTableProduct tr:odd").css("background-color", "#ffebcd");
//    计算金额、积分integral(获取现价presentPrice、原价originalPrice)
    function calculation() {
        var originalPrice = 0, presentPrice = 0, integral = 0;
        $("#myTableProduct").find("tr").each(function (i, e) {
            //获取数量
            var number = $(e).find(".shopping_product_list_5").find("input").val();
            //原价
            originalPrice += parseInt($(e).find(".shopping_product_list_3").find("label").text().replace(".", "")) * number;
            //现价
            presentPrice += parseInt($(e).find(".shopping_product_list_4").find("label").text().replace(".", "")) * number;
            //积分
            integral += $(e).find(".shopping_product_list_2").find("label").text() * number;
        });
        $("#product_total").text(presentPrice / 100);//原价
        $("#product_save").text((originalPrice - presentPrice) / 100);//节省的钱
        $("#product_integral").text(integral);//积分
    };
    calculation();

    /**
     * 鼠标放在数量区域进行修改
     * */
    $(".shopping_product_list_5").find("input").blur(function () {
        var num = $(this).val();
        var reg = /^[0-9]\d{0,}$/;
        if (num == "") {
            alert("输入不能为空");
        } else if (reg.test(num) == false) {
            alert("输入的格式不正确");
        }
        calculation();
    });

    /**
     * 删除单个商品，
     * 删除单个商品后，金额、积分都相应减少
     * */
    $(".blue").click(function () {
        if (confirm("确定删除吗？")) {
            $(this).parent().parent().remove();
            calculation();
        }
    });

    //清空购物车后金额、积分都归零
    $("#removeAllProduct").click(function () {
        $("#myTableProduct").remove();
        calculation();
    });
});