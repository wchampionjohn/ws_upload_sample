class TaskController < WebsocketRails::BaseController
  def create
    content = message.split(',').last
    image = File.open(Rails.root.join("public", "image.jpg"), 'wb')
    image.write(Base64.decode64(content))
    image.close
    trigger_success 'uploaded !!'
  end
end
