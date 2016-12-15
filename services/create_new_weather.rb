# frozen_string_literal: true

class CreateNewWeather
  extend Dry::Monads::Either::Mixin
  extend Dry::Container::Mixin
  
  def self.call(params)
    icons = [params[:icon_weather], params[:icon_situation], params[:icon_side],
             params[:icon_activity], params[:icon_emotion], params[:icon_festival]]
    icons.each do |icon|
      result = HTTP.post('http://localhost:9292/api/v0.1/user_weather',
                          json:{location: params[:location],
                                icon: icon,
                                upload_time: Time.now
                        })
    end
    Right(result.body)
  rescue
    Left(Error.new('Our servers failed - we are investigating!'))
  end
end

