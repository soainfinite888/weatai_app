class FindWeather
  extend Dry::Monads::Either::Mixin

  def self.call(params)
    results = HTTP.get("#{WeataiApp.config.Weatai_API}/weather/#{params}")
    Right(WeatherRepresenter.new(Weather.new).from_json(results.body))
  rescue
    Left(Error.new('Our servers failed - we are investigating!'))
  end

end
