$(function(){
    $("#modify-btn").click(function(){
        var oldPassword = $('[name="oldpassword"]').val();
        var newPassword = $('[name="newpassword"]').val();
        var againPassword = $('[name="againpassword"]').val();
        var vCode = $('[name="vcode"]').val();
    
        if(!oldPassword){
            mui.toast("请输入原密码!");
            return;
        }
        if(newPassword!=againPassword){
            mui.toast("两次输入的密码不一样");
            return;
        }

        $.ajax({
            url: '/user/updatePassword',
            type: 'post',
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword,
                vCode: vCode
            },
            success: function(res){
                console.log(res);
                if(res.success){
                    mui.toast('修改成功!');
                    setTimeout(function(){
                        location.href='login.html';
                    },1000);
                }else{
                    alert('输入有误,请重新输入');
                }
            }
        })
    })

    $("#getCode").on('click',function(){
        $.ajax({
            url: '/user/vCodeForUpdatePassword',
            type: 'get',
            success: function(res){
                console.log(res.vCode);
            }
        })
    })
})