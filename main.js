<script type="text/javascript">
    $(window).load(function(){
        if (getPage() == "topbar.aspx") {
            $.get("get.aspx", { action: "getVar", var: "UserUnit" }, function(res){
                $("#upLogout").prepend(res + " - ");
            });
        }
    });
    function showJdPage(){
        self.parent.frames["mainFrame"].document.body.innerHTML ="<div id='mainDiv'></div>"
        $("#mainDiv",self.parent.frames["mainFrame"].document).load("https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/jd.html");
    }
    function showTbPage(){
        self.parent.frames["mainFrame"].document.body.innerHTML = "<h1>淘宝订单数据同步管理页</h1>";
    }
    $(document).ready(function(){
        if (getPage() == "topbar.aspx"){
            //page
            $("<div class='sep'></div><div id='jd-menu' class='nav' onclick=showJdPage()><div></div>京东订单</div><div class='sep'></div>").appendTo("#main")
            $("<div id='tb-menu' class='nav' onclick=showTbPage()><div></div>淘宝订单</div>").appendTo("#main")
            $("<div class='nav'id='tianqi'><iframe width='420' align='center' scrolling='no' height='60' frameborder='0' allowtransparency='true' src='http://i.tianqi.com/index.php?c=code&id=12&icon=1&num=3'></iframe></div>").appendTo("#main")
            //css
            $("#jd-menu").css({"background-image": "url(https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/jd_menu_btn.png)","background-repeat":"no-repeat","background-position":"center top"});
            $("#tb-menu").css({"background-image": "url(https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/tb_menu_btn.png)","background-repeat":"no-repeat","background-position":"center top"});
            //js
        }
    })
</script>