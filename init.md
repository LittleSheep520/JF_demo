# 添加出库按钮
Case      When ([1284]!='FINISHED_L') Then '<input type="button" class="btn" value="出库" onclick= self.parent.frames["topFrame"].outStrage('+[1269]+','+[1295]+','+[1296]+','+[1301]+','+[1302]+');>'     When [1284]='FINISHED_L' then '已出库' Else '' End

# apicaller账号,权限

order_state

    function getOrderPageData(page,pageSize,pageReslutHandler) {
        console.log("getOrderPageData");
        var urlGetOrder = 'https://api.jd.com/routerjson?v=2.0&method=jingdong.pop.order.search&app_key='+shopConfig.app_key+"&access_token="+shopConfig.access_token+'&360buy_param_json={"start_date":"","end_date":"","order_state":"WAIT_SELLER_STOCK_OUT,WAIT_GOODS_RECEIVE_CONFIRM,WAIT_SELLER_DELIVERY,PAUSE,TRADE_CANCELED,LOCKED","optional_fields":"pin,orderTotalPrice,orderState,paymentConfirmTime,orderStartTime,consigneeInfo,vatInfo,itemInfoList,invoiceInfo,orderRemark,venderRemark,orderSource,modified","page":"'+page+'","page_size":"'+pageSize+'","sortType":"1","dateType":""}';
        $.ajax({
            url: urlGetOrder,
            success: function (data) {
                var pageReslut=JSON.parse(data).jingdong_pop_order_search_responce.searchorderinfo_result;
                console.log("getOrderPageData success，本页数据条数："+pageReslut.orderInfoList.length);
                //var orderInfoList = pageReslut.orderInfoList;
                pageReslutHandler(pageReslut);
            }
        })
    } 