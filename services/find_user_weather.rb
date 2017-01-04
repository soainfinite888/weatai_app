class FindUserWeather
  extend Dry::Monads::Either::Mixin

  def self.call
    result=HTTP.get("#{WeataiApp.config.Weatai_API}user_weather/all")
    
    Right(result.body)

  rescue
    Left(Error.new('Our servers failed - we are investigating!'))
  end
end