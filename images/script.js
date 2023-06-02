function sendName() {
    var name = $('#nameInput').val();
    var data = {'name': name};
    $.ajax({
        type: 'POST',
        url: '/api/hello',
        data: JSON.stringify(data),
        contentType: 'application/json',
    }).done(function(result) {
        $('#message').text(result.message);
    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert(textStatus + ': ' + errorThrown);
    });
}

function checkInput() {
    var inputVal = document.getElementById("serverId").value;
    if (isNaN(inputVal)) {
        alert("請輸入數字！");
        document.getElementById("serverId").value = "";
    }
}

function restartServer() {
    // 取得使用者輸入的serverId
    const serverId = parseInt(document.getElementById('serverId').value);
    // 將serverId加入POST請求的body中
    const body = JSON.stringify({"ServerId": serverId});
    console.log(body)
    // 發送POST請求到後端API接口
    fetch('/api/restart-server', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        // 處理響應
        if (response.ok) {
            // 顯示響應
            response.text().then(function(data) {
                // 顯示響應
                document.getElementById('responseContainer').innerText = data;
            });
            //alert('Server restarted successfully!');
        } else {
            alert('Failed to restart server! message: ' + response.message);
        }
    }).catch(function(error) {
        // 處理錯誤
        alert('Failed to restart server: ' + error.message);
    });
}
function stopServer() {
    // 取得使用者輸入的serverId
    const serverId = parseInt(document.getElementById('serverId').value);
    // 將serverId加入POST請求的body中
    const body = JSON.stringify({"ServerId": serverId});
    console.log(body)
    fetch('/api/stop-server', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        // 處理響應
        if (response.ok) {
            response.text().then(function(data) {
                // 顯示響應
                document.getElementById('responseContainer').innerText = data;
            });
            //alert('Server stopped successfully!');
        } else {
            alert('Failed to stop server!');
        }
    }).catch(function(error) {
        // 處理錯誤
        alert('Failed to stop server: ' + error.message);
    });
}

function showSystemInfo() {
    // 發送GET請求到後端API接口
    fetch('/api/system-info', {
        method: 'GET'
    }).then(function(response) {
        // 處理響應
        if (response.ok) {
            response.text().then(function(data) {
                // 顯示系統信息
                alert(data);
            });
        } else {
            alert('Failed to get system info!');
        }
    }).catch(function(error) {
        // 處理錯誤
        alert('Failed to get system info: ' + error.message);
    });
}