WebsocketRails::EventMap.describe do
#subscribe :client_connected, to: SocketstreamController, with_method: :client_connected
  namespace :tasks do
    subscribe :create, :to => TaskController, :with_method => :create
  end
end
