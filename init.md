# 添加出库按钮
//Case      When ([1284]!='FINISHED_L') Then '<input type="button" class="btn" value="出库" onclick= self.parent.frames["topFrame"].outStrage('+[1269]+','+[1295]+','+[1296]+','+[1301]+','+[1302]+');>'     When [1284]='FINISHED_L' then '已出库' Else '' End
//Case      When ([1284]!='FINISHED_L') Then '<input type="button" class="btn" value="出库" onclick= self.parent.frames["topFrame"].outStrage('+[1269]+','+[1295]+','+[1296]+','+[1301]+','+[1302]+');>'     When [1284]='FINISHED_L' then '已出库' Else '' End
//Case      When ([1284]!='FINISHED_L') Then '<input type="button" class="btn" value="获取运单号" onclick= self.parent.frames["topFrame"].getDeliverInfoCode('+[1295]+');><input type="button" class="btn" value="出库" onclick= self.parent.frames["topFrame"].outStrage('+[1269]+','+[1295]+','+[1296]+','+[1301]+','+[1302]+');>'     When [1284]='FINISHED_L' then '已出库' Else '' End


Case      When ([1284]!='FINISHED_L') Then '<input type="button" class="btn" value="获取运单号" onclick= self.parent.frames["topFrame"].getDeliverInfoCode('+[1269]+','+[1295]+');><input type="button" class="btn" value="出库" onclick= self.parent.frames["topFrame"].outStrage('+[1269]+','+[1295]+','+[1296]+','+[1301]+','+[1302]+');>'     When [1284]='FINISHED_L' then '已出库' Else '' End

Case      When ([1284]!='FINISHED_L') Then '<input type="button" class="btn" value="获取运单号" onclick= self.parent.frames["topFrame"].getDeliverInfoCode('+[1269]+','+[1295]+');><input type="button" class="btn" value="出库" onclick= self.parent.frames["topFrame"].outStrage("'+[1269]+'","'+[1295]+'","'+[1296]+'",'+[1302]+',"'+[1275]+'","'+[1276]+'","'+[1277]+'");>'     When [1284]='FINISHED_L' then '已出库' Else '' End
# apicaller账号,权限
https://oauth.jd.com/oauth/authorize?response_type=code&client_id=8F3A3F4A4C2C8CC7FC2B351B2F4F785E&redirect_uri=urn:ietf:wg:oauth:2.0:oob

#外挂脚本
$(document).ready(function(){
    if (getPage() == "topbar.aspx"){
  			$("<div id='JF_demo'>loading...<div>").appendTo("#main");    			
  $("#JF_demo").load("https://raw.githubusercontent.com/LittleSheep520/JF_demo/master/main.js");
    }
})

$(function(){
     if(getPage() == "table.aspx"){
            $("<input class=\"btn\" type=\"button\" value=\"同步京东订单\" onclick=\"self.parent.frames['topFrame'].importOrderList();\" />").prependTo("#btnArea");
     }
    if (getPage() == "topbar.aspx" && getUser() != "admin") {
        $("#help").hide();
    }
})
