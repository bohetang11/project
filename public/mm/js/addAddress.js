$(function () {
    // 插件初始化
    var picker = new mui.PopPicker({
        layer: 3
    });
    // 给picker对象添加数据
    picker.setData(cityData);
    // 显示
    $("#selectcity").click(function(){
        picker.show(function (selectItems) {
            // console.log(selectItems[0].text);
            $("#selectcity").val(selectItems[0].text+selectItems[1].text+selectItems[2].text);
            
        })
    })
    $("#revise-btn").click(function () {
        var username = $("[name='username']").val().trim();
        var postCode = $("[name='postCode']").val().trim();
        var city = $("[name='city']").val().trim();
        var detail = $("[name='detail']").val().trim();

        if(!username) {
			mui.toast("请输入收货人姓名");
			return;
		}

		if(!postCode) {
			mui.toast("请输入邮政编码");
			return;
        }
        
        $.ajax({
            url: '/address/addAddress',
            type: 'post',
            data: {
                address: city,
                addressDetail: detail,
                recipients: username,
                postcode: postCode
            },
            success: function(res){
                console.log(res);
                if (res.success) {
                    mui.toast('添加成功!');
                    setTimeout(function () {
                        location.href = 'address.html';
                    }, 1000);
                }
            }
        })
    })
})