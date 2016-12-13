class FindWeather
  extend Dry::Monads::Either::Mixin

  def self.call
#    station = params[:station]
    station =4
    results = HTTP.get("#{WeataiApp.config.Weatai_API}/weather/4/")
    Right(results.body)
  rescue
    Left(Error.new('Our servers failed - we are investigating!'))
  end

end