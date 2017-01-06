# frozen_string_literal: true

# Weataiapp web application
require 'sinatra'
require 'sinatra/base'
require 'faye'
#require 'sinatra/cross_origin'

class WeataiApp < Sinatra::Base
  #register Sinatra::CrossOrigin
  #get only one station weather data(from database) on homepage
  #set :port, 9000
  set :faye_client, Faye::Client.new( "#{WeataiApp.config.server}" )
  set :saved_data, Hash.new( [] )
  get "/?" do
    result = FindWeather.call(3)
    if result.success?
      @weather = JSON.parse(result.value)
    else
    #  flash[:error] = result.value.message #use flash, update by views
    end
    @saved_data = settings.saved_data

    slim :home
    
    #redirect '/'
  end

  get "/maps?" do
    result = FindUserWeather.call
    if result.success?
      @userweather = JSON.parse(result.value)
      @userweather.to_json
    else
      flash[:error] = "can not get user weather"
    end

    slim :pointmaps
  end

  get "/addpoint?" do
    slim :addpoint
  end
 
  get "/points?" do
    result = FindUserWeather.call
    if result.success?
      @userweather = JSON.parse(result.value)

      @userweather.to_json
    else
      flash[:error] = "can not get user weather"
    end
    
    #@userweather
    #slim :points
  end


  post '/add_weather/?' do
    result = CreateNewWeather.call(params)

    if result.success?
      flash[:notice] = 'Weather successfully added'
    else
      flash[:error] = 'Weather unsuccessfully added'
    end

    redirect '/'
  end 
  
  post '/' do
    channel = params['channel']
    username = params['username']
    message = params['message']
    puts channel

    # Send data out to connected clients
    settings.faye_client.publish( '/instant', message )

    # Save data for future clients
    settings.saved_data['/instant'] += [message]
    redirect '/'
    #redirect to( '/' )
  end
 
  get "/weather?" do
    result = FindWeather.call(params[:select3])
    if result.success?
      @weather = JSON.parse(result.value)
    else
    #  flash[:error] = result.value.message #use flash, update by views
    end

    slim :instant_weather
  end

end
