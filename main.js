<script type="text/javascript">
    function showJdPage(){
        self.parent.frames["mainFrame"].document.body.innerHTML ="<div id='mainDiv'  style='overflow:scroll'></div>"
        $("#mainDiv",self.parent.frames["mainFrame"].document).load("https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/jd.html");
        //$("#mainPluginJs-menu",self.parent.frames["mainFrame"].document).load("https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/jd.html");
    }
    function showTbPage(){
        self.parent.frames["mainFrame"].document.body.innerHTML = "<h1>淘宝订单数据同步管理页</h1>";
    }
    $(document).ready(function(){
            //page
            $("<div class='sep'></div><div id='jd-menu' class='nav' onclick=showJdPage()><div></div>京东订单</div><div class='sep'></div>").appendTo("#main")
            $("<div id='tb-menu' class='nav' onclick=showTbPage()><div></div>淘宝订单</div>").appendTo("#main")
            $("<div id='mainPluginJs-menu' class='nav'><div></div>mainPluginJs</div>").appendTo("#main")
            //css
            $("#jd-menu").css({"background-image": "url(https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/jd_menu_btn.png)","background-repeat":"no-repeat","background-position":"center top"});
            $("#tb-menu").css({"background-image": "url(https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/tb_menu_btn.png)","background-repeat":"no-repeat","background-position":"center top"});
            //js
            $("#mainPluginJs-menu").load("https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/jd.html");
    })
</script>