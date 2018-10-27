$(function () {
    // 初始化scroll控件
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    $.ajax({
        url: '/cart/queryCart',
        type: 'get',
        success: function (res) {
            console.log(res);
            if (res.error && res.error == 400) {
                // localStorage.setItem('returnUrl', location.href);
                location.href = "login.html";
                return;
            }
            var html = template('cart-box', {
                data: res
            });
            $("#cartBox").html(html);
        }
    })

    $("#cartBox").on('tap','.deleteBtn',function(){
        var id=$(this).attr('data-id');
        // console.log(id);
        $.ajax({
            url: '/cart/deleteCart',
            type: 'get',
            data: {
                id: [id]
            },
            success: function(res){
                if (res.error && res.error == 400) {
                    location.href = "login.html";
                    return;
                }else{
                    location.reload();
                }
                
            }
        })
    })
})