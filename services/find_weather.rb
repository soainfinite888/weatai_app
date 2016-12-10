class FindWeather
  extend Dry::Monads::Either::Mixin

  def self.call(params)
#    station = params[:station]
    station =1
    results = HTTP.get("#{WeataiApp.config.Weatai_API}1/")
    Right(results.body)
  rescue
    Left(Error.new('Our servers failed - we are investigating!'))
  end

end
