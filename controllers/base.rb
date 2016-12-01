# frozen_string_literal: true

# configure web application
class WeataiApp < Sinatra::Base
  extend Econfig::Shortcut

  configure do
    Econfig.env = settings.environment.to_s
    Econfig.root = File.expand_path('..',settings.root)
  end
  
  use Rack::Session::Cookie#, secret: WeataiApp.config.AUTH_KEY

  set :views, File.expand_path('../../views', __FILE__)
  #set :public_dir, File.expand_path('../../public', __FILE__)
  
  after do
    content_type 'text/html'
  end

end
