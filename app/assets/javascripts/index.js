$(document).on('ready page:load', function () {
  ws = new WebSocketRails('localhost:3000/websocket');
});

$(document).on('change', ':file', function() {
  sendFile();
});

function sendFile() {
  var file = document.getElementById('filename').files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    r = e.target.result;
    var success = function(message) {
      console.log("file upload success " + message);
      d = new Date();
      $('#file_img').attr("src", "/image.jpg?"+d.getTime()).show();
      alert('上傳成功');
      //$('#filename_div').hide();
    }
    var failure = function(message) { console.log("file upload Failed " + message) }

    ws.trigger('tasks.create', r, success, failure);
  }

  reader.readAsDataURL(file);
}
