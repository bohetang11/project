$(function(){
    $("#register-btn").click(function(){
        var username = $('[name="username"]').val();
        var mobile = $('[name="mobile"]').val();
        var password = $('[name="password"]').val();
        var againPass = $('[name="againpassword"]').val();
        var vCode = $('[name="vcode"]').val();
        // console.log(username,mobile,password,againPass);
    
        if(!username){
            mui.toast("请输入用户名");
            return;
        }
        if(mobile.length!=11){
            mui.toast("请输入正确的手机号");
            return;
        }
        if(password!=againPass){
            mui.toast("两次输入的密码不一样");
            return;
        }

        $.ajax({
            url: '/user/register',
            type: 'post',
            data: {
                username: username,
                mobile: mobile,
                password: password,
                vCode: vCode
            },
            success: function(res){
                console.log(res);
                if(res.success){
                    alert('注册成功!');
                    location.href='login.html';
                }else{
                    alert('输入有误,请重新输入');
                }
            }
        })
    })

    $("#getCode").on('click',function(){
        $.ajax({
            url: '/user/vCode',
            type: 'get',
            success: function(res){
                console.log(res.vCode);
            }
        })
    })
})