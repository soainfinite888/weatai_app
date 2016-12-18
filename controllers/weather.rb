# frozen_string_literal: true

# Weataiapp web application
class WeataiApp < Sinatra::Base

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
    slim :pointmaps
  end



  post '/add_weather/?' do
    result = CreateNewWeather.call(params)

    if result.success?
      flash[:notice] = 'Weather successfully added'
      puts 'shit'
    else
      flash[:error] = result.value.message
      puts 'no shit'
    end

    redirect '/'
  end 
end
