$(function(){
    $.ajax({
        url: '/address/queryAddress',
        type: 'get',
        success: function(res){
            // console.log(res);
            var html=template('addressTpl',{result:res});
            // console.log(html);
            $("#address-box").html(html); 
        }
    })

    $('#address-box').on('tap','.delete-btn',function(){
        var id=$(this).attr('data-id');
        var li = this.parentNode.parentNode;
        // console.log(id);

        mui.confirm("确认要删除吗?",function(mas){
            // console.log(mas.index);
            if(mas.index==1){
                $.ajax({
                    url: '/address/deleteAddress',
                    type: 'post',
                    data: {
                        id: id
                    },
                    success: function(res){
                        console.log(res);
                        if(res.success){
                            location.reload();
                        }
                    }
                })
            }else{
                // 关闭列表滑出效果
				mui.swipeoutClose(li);
            }
        });
    })

    $('#address-box').on('click','.edit-btn',function(){
        var id=$(this).attr('data-id');
        location.href='edit.html?id='+id;
    })

})