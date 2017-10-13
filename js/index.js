$(function() {
    if( $.cookie('username') ){
		$('#username').val($.cookie('username'));
	};
	$("#signIn").click(function(){
		$.cookie('username', $("#username").val(), {expires: 7});
	});
  
})
function change(){
	
	}
$(function(){

	address=Array("http://www.qq.com/","http://www.suning.com/","http://www.jd.com/","http://www.alibaba.com/",
		          "http://www.360.com/","http://www.vipshop.com/","http://www.baidu.com/","http://www.mi.com/",
		          "http://www.fang.com/","http://www.sohu.com/","http://www.ctrip.com/","http://www.163.com/",)
	$(".thumbnail img").click(function(){
		var $index=$(this).attr("num")
	   // alert($index)
		location.href=address[$index] 
	})
})	