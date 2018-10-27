$(function(){

    var data=null;
    $.ajax({
        url: '/address/queryAddress',
        type: 'get',
        success: function(res){
            console.log(res);
            data=res;
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
        for(var i=0; i<data.length; i++){
            if(data[i].id==id){
                // console.log(data[i]);
                localStorage.setItem('address',JSON.stringify(data[i]));
            }
        }
        location.href='edit.html';
    })

})