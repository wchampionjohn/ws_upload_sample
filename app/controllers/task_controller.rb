class TaskController < WebsocketRails::BaseController
  def create
    debugger
    trigger_success task
  end
end
