# frozen_string_literal: true

# Loads data from API
class CreateNewWeather
  extend Dry::Monads::Either::Mixin
  extend Dry::Container::Mixin
  
  def self.call(params)
#    HTTP.post("#{WeataiApp.config.Weatai_API}/weather",
 #                     json: { url: url })
     HTTP.post('http://localhost:9292/api/v0.1/user_weather',
               json:{ location: params[:location],
                      icon_weather: params[:icon_weather],
                      icon_situation: params[:icon_situation],
                      icon_side: params[:icon_side],       
                      icon_activity: params[:icon_activity],
                      icon_emotion: params[:icon_emotion],
                      icon_festival: params[:icon_festival],
                    })
    puts params
  end
end
=begin
    Dry.Transaction(container: self) do
      step :validate_weather
      step :call_api_to_load_weather
      step :download_weather
    end.call(params)
  end

  register :validate_weather, lambda { |params|
    if params.success?
      Right(url_request[:weather_url])
    else
      message = ErrorFlattener.new(
        ValidationError.new(url_request)
      ).to_s
      Left(Error.new(message))
    end
  }

  register :call_api_to_load_weather, lambda { |url|
    begin
      Right(HTTP.post("#{WeataiApp.config.Weatai_API}/weather",
                      json: { url: url }))
    rescue
      Left(Error.new('Our servers failed - we are investigating!'))
    end
  }

  register :download_weather, lambda { |http_result|
    data = http_result.body.to_s
    if http_result.status == 200
      Right(AllWeatherRepresenter.new(weather).from_json(data))
    else
      message = ErrorFlattener.new(
        ApiErrorRepresenter.new(ApiError.new).from_json(data)
      ).to_s
      Left(Error.new(message))
    end
  }
end
=end

