$(function(){
    var data=JSON.parse(localStorage.getItem('address'));
    // console.log(data);
    $("[name='username']").val(data.recipients);
    $("[name='postCode']").val(data.postCode);
    $("[name='city']").val(data.address);
    $("[name='detail']").val(data.addressDetail);
    var id=data.id;

    $("#edit-btn").click(function(){
        var address=$("[name='city']").val();
        var addressDetail =$("[name='detail']").val();
        var recipients=$("[name='username']").val();
        var postcode =$("[name='postCode']").val();
        $.ajax({
            url: '/address/updateAddress',
            type: 'post',
            data: {
                id: id,
                address: address,
                addressDetail: addressDetail,
                recipients: recipients,
                postcode: postcode
            },
            success: function(res){
                // console.log(res);
                if(res.success){
                    mui.toast("地址修改成功");
                    setTimeout(function(){
                        location.href='address.html';
                    },1000);
                }
            }
        })
    })
})