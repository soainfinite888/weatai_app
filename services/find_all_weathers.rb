class FindAllWeathers
  extend Dry::Monads::Either::Mixin
 
  def self.call
    results = HTTP.get("#{WeataiApp.config.Weatai_API}/weather")
    Right(AllWeatherRepresenter.new(weathers).from_json(results.body))
  rescue
    Left(Error.new('Our servers failed - we are investigating!'))
  end

end
