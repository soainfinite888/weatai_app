# frozen_string_literal: true

# Weataiapp web application
class WeataiApp < Sinatra::Base

  #get only one station weather data(from database) on homepage
  get "/?" do
    #search_station = Station.call(params)
    result = FindWeather.call

    if result.success?
      @weather = JSON.parse(result.value)
    else
    #  flash[:error] = result.value.message #use flash, update by views
    end
    slim :home
  end

  get "/maps?" do
    slim :mapstest
  end



  post '/add_weather/?' do
    result = CreateNewWeather.call(params)
=begin
    if result.success?
      flash[:notice] = 'Group successfully added'
    else
      flash[:error] = result.value.message
    end
=end
    redirect '/'
  end 
end
