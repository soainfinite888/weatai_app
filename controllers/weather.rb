# frozen_string_literal: true

# Weataiapp web application
require 'sinatra'
require 'sinatra/base'
require 'sinatra/cross_origin'
class WeataiApp < Sinatra::Base
  #register Sinatra::CrossOrigin
  #get only one station weather data(from database) on homepage
  get "/?" do
    result = FindWeather.call(3)
    if result.success?
      @weather = JSON.parse(result.value)
    else
    #  flash[:error] = result.value.message #use flash, update by views
    end

    slim :home
    
    #redirect '/'
  end

  get "/maps?" do
    slim :mapstest
  end
                         
  get '/weather/:station' do
    result = FindWeather.call(:station)
    if result.success?
      @weather = JSON.parse(result.value)
    else
    end
    slim :home
  end


  post '/add_weather/?' do
    result = CreateNewWeather.call(params)

    if result.success?
      flash[:notice] = 'Weather successfully added'
      puts 'shit'
    else
      flash[:error] = 'Weather unsuccessfully added'
      puts 'no shit'
    end

    redirect '/'
  end 
end
