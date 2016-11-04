$(document).on('ready page:load', function () {
});

function connectChatServer() {

}

function sendFile() {
  var ws = new WebSocketRails('localhost:3000/websocket');
  //dispatcher.trigger('comments.create', comment);
  var file = document.getElementById('filename').files[0];
  var reader = new FileReader();
  var rawData = new ArrayBuffer();
  alert(file.name);

  reader.loadend = function() {

  }
  reader.onload = function(e) {
    rawData = e.target.result;
    //ws.send(rawData);
    ws.trigger('tasks.create', rawData);
    alert("the File has been transferred.")
  }

  reader.readAsArrayBuffer(file);

}
