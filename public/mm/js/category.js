$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    $.ajax({
        url: "/category/queryTopCategory",
        type: 'get',
        success: function (res) {
            // console.log(res);
            var html = template('category-first', {
                result: res.rows
            });
            // console.log(html);
            $("#links").html(html);
            $("#links").find('a').eq(0).click();
        }
    })

    $("#links").on('click','a',function(){
        var id=$(this).attr('data-id');
        console.log(id);
        $(this).addClass('active').siblings().removeClass('active');
        $.ajax({
            url:'/category/querySecondCategory',
            type: 'get',
            data:{
                id:id
            },
            success:function(res){
                // console.log(res);
                if(res.total==0){
                    var html="暂无数据";
                }else{
                    var html = template('category-second', {
                        result: res.rows
                    });
                }
                $("#lists").html(html);
            }
        })
    })
})