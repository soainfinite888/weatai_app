# frozen_string_literal: true

# Weataiapp web application
require 'sinatra'
require 'sinatra/base'
#require 'sinatra/cross_origin'
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
      puts 'shit'
    else
      flash[:error] = 'Weather unsuccessfully added'
      puts 'no shit'
    end

    redirect '/'
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
