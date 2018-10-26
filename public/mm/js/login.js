$(function(){
    $("#login-btn").click(function(){
        var username = $('[name="username"]').val();
        var password = $('[name="password"]').val();
        if(!username){
            mui.toast("请输入用户名");
            return;
        }

        $.ajax({
            url: '/user/login',
            type: 'post',
            data: {
                username: username,
                password: password
            },
            beforeSend: function(){
				$('#login-btn').html("正在登录...");
			},
            success: function(res){
                console.log(res);
                if(res.success){
                    mui.toast('登录成功!');
                    $('#login-btn').html("登录");
                    setTimeout(function(){
                        location.href='user.html';
                    },2000);
                }else{
                    mui.toast('输入有误,请重新输入');
                    $('#login-btn').html("登录");
                }
            }
        })
    })
})
