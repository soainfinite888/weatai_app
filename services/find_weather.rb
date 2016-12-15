class FindWeather
  extend Dry::Monads::Either::Mixin


  def self.call(params)
    #puts "#{WeataiApp.config.Weatai_API}/weather/"+params.to_s
    result=HTTP.get("#{WeataiApp.config.Weatai_API}/weather/"+params.to_s)
    #puts result
    #puts result.body
    #puts result.body.length
    #puts result[1]  
    Right(result.body)



    #def self.call
    #station = params[:station]

    #station =4

    #results = HTTP.get("#{WeataiApp.config.Weatai_API}/weather/4/")

    #Right(results.body)
  rescue
    Left(Error.new('Our servers failed - we are investigating!'))
  end
end