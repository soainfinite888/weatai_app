require_relative 'weather'
class AllWeatherRepresenter
  def initialize(weathers)
    @weathers = weathers
  end

  def to_json
    {weathers: @weathers}.to_json
  end
end
=begin
class AllWeatherRepresenter < Roar::Decorator
  include Roar::JSON

  collection :weathers, extend: WeatherRepresenter, class: Weathers
end
=end
