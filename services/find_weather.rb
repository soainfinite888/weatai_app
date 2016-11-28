class FindWeather
  extend Dry::Monads::Either::Mixin

  def self.call(params)
    station = params[:station]
    results = HTTP.get("#{WeataiApp.config.Weatai_API}/weather/"+station)
    Right(results.body)
  rescue
    Left(Error.new('Our servers failed - we are investigating!'))
  end

end
