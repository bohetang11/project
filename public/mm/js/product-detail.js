$(function () {
    // 获取关键词
    var url = location.href;
    var params = url.substr(url.indexOf('?') + 1);
    var current = params.split('=');
    var id = current[1];
    // console.log(id);
    // 剩余
    var surplus=0;

    $.ajax({
        url: '/product/queryProductDetail',
        type: 'get',
        data: {
            id: id
        },
        success: function(res){
            // console.log(res);
            surplus=res.num;
            var html=template('productBox',res);
            // console.log(html);
            $("#product-box").html(html);

            //获得slider插件对象
			var gallery = mui('.mui-slider');
			gallery.slider();
        }
    })

    var size=0;
    $("#product-box").on('tap','.size span',function(){
        $(this).addClass('active').siblings().removeClass('active');
        size=$(this).text();
        // console.log(size);
    })

    var num=1;
    $("#product-box").on('tap','#increase',function(){
        num++;
        num=num>surplus? surplus:num;
        $(this).siblings("input").val(num);
    })

    $("#product-box").on('tap','#reduce',function(){
        num--;
        num=num<1? 1:num;
        $(this).siblings("input").val(num);
    })


    $("#addCart").click(function(){
        // console.log(size);
        if(size!=0){
            $.ajax({
                url: '/cart/addCart',
                type: 'post',
                data: {
                    productId: id,
                    num: num,
                    size: size
                },
                success: function(res){
                    console.log(res);
                    mui.toast("成功加入购物车");
                    setTimeout(function(){
                        location.href='cart.html';
                    },1000);
                }
            })
        }else{
            mui.toast("请选择尺码");
            return;
        }
    })
})