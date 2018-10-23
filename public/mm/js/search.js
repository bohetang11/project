$(function(){
    var keyArr=[];
    $("#search").click(function(){
        var keyword=$(this).siblings().val();
        if(keyword){
            keyArr.unshift(keyword);
            // console.log(keyArr);    
            localStorage.setItem('keyArr',JSON.stringify(keyArr));
            location.href="search-result.html?keyword="+keyword;
            $(this).siblings().val('');
        }else{
            alert('请输入要搜索的商品关键字');
        }

    })

    var data=localStorage.getItem('keyArr');
    if(data){
        keyArr=JSON.parse(data);
        console.log(keyArr);
        var html=template('historyTpl',{result: keyArr});
        console.log(html);
        $("#history-box").html(html);
    }

    $("#clear").click(function(){
        $("#history-box").html('');
        localStorage.removeItem('keyArr');
        keyArr=[];
    })
    
})