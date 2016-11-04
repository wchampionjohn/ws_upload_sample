WebsocketRails::EventMap.describe do
  namespace :tasks do

    # using a Hash to specify the target
    subscribe :create, :to => TaskController, :with_method => :create

    # using the same syntax as routes.rb
    subscribe :update, 'task#update'

  end
end
