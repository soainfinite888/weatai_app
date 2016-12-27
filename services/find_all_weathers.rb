class FindAllWeathers
  extend Dry::Monads::Either::Mixin
 
  def self.call
    results = HTTP.get("#{WeataiApp.config.Weatai_API}weather")
    #results = HTTP.get("localhost:9292/api/v0.1/weather")
    #Don't know how to new
    Right(AllWeatherRepresenter.new(Weathers.new).from_json(results.body))
  rescue
    Left(Error.new('Our servers failed - we are investigating!'))
  end

end
