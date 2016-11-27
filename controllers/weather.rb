# frozen_string_literal: true

# Weataiapp web application
class WeataiApp < Sinatra::Base

  #get only one station weather data(from database) on homepage
  get "/?" do
    result = FindWeather.call(params[:station])

    if result.success?
      @data = result.value
    else
      flash[:error] = result.value.message #use flash, update by views
    end
    
    slim:instant_weather.slim
  end

 
end
