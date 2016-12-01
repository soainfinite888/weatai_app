require_relative 'weather'
class AllWeatherRepresenter
  def initialize(weathers)
    @weathers = weathers
  end

  def to_json
    {weathers: @weathers}.to_json
  end
end
