var info = null;
$.ajax({
    url: '/user/queryUserMessage',
    type: 'get',
    // 同步
    async: false,
    success: function (res) {
        info = res;
        // 用户没有登录
        if (res.error && res.error == 400) {
            location.href = "login.html";
        }

    }
})
$(function () {
    var html = template('usertpl', info);
    $(".userinfo").html(html);
    // 退出登录
    $("#logout").click(function () {
        $.ajax({
            url: '/user/logout',
            type: 'get',
            success: function (res) {
                console.log(res);
                if (res.success) {
                    mui.toast('退出成功!');
                    setTimeout(function () {
                        location.href = 'index.html';
                    }, 1000);
                }
            }
        })
    })
})