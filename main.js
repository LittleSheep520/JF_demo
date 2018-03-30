$(window).load(function(){
    if (getPage() == "topbar.aspx") {
        $.get("get.aspx", { action: "getVar", var: "UserUnit" }, function(res){
            $("#upLogout").prepend(res + " - ");
        });
    }
});

$(document).ready(function(){
    if (getPage() == "topbar.aspx"){
        //page
        $("<div id='jd-menu' width='420' class='nav'><iframe width='420' align='center' scrolling='no' height='60' frameborder='0' allowtransparency='true'></iframe></div>").appendTo("#main")
        $("<div class='nav'id='tianqi'><iframe width='420' align='center' scrolling='no' height='60' frameborder='0' allowtransparency='true' src='http://i.tianqi.com/index.php?c=code&id=12&icon=1&num=3'></iframe></div>").appendTo("#main")
        //css
        $("#jd-menu").css({"background-image": "url(https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/jd_menu_button.png)"});
        //js
    }
})