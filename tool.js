function get_latest_transaction_date(address){
    var options = {
        'method': 'get',
        "contentType" : "application/json",
        'muteHttpExceptions': true
      }

      var url = "https://zksync2-mainnet.zkscan.io/address/" + address + "/transactions?type=JSON"

      var response = UrlFetchApp.fetch(url,options);
      var htmlStr = response.getContentText();
      const dateRegex = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})/
      const match = dateRegex.exec(htmlStr);
      if (match==null)
      return "\\"
      // 输出匹配到的日期
      const date = match[1];
      const spanTime = calculateDaysBetweenDates(date);
      return spanTime + "天前";
}
