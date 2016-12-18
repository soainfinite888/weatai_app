require_relative 'spec_helper.rb'

describe 'Homepage' do
  before do
    unless @browser
      # @headless = Headless.new
      @browser = Watir::Browser.new
    end
  end

  after do
    @browser.close
    # @headless.destroy
  end

  it '(HAPPY) should see website features' do
    # GIVEN    
    @browser.goto homepage
    @browser.title.must_include 'Weatai'
    @browser.h1.text.must_include 'Weatai'

    # THEN
    @browser.select(name: 'select1').visible?.must_equal true
    @browser.select(name: 'select2').visible?.must_equal true
    @browser.select(name: 'select3').visible?.must_equal true
    @browser.button(id: 'click').visible?.must_equal true
    @browser.button(id: 'addweather').visible?.must_equal true 
  end

  it '(HAPPY) should be able to select dropdown menu' do
    # GIVEN: on the homepage    
    @browser.goto homepage

    # WHEN: selecting dropdown menu
    @browser.select_list(name: 'select1').option(:value => 'north').select
    @browser.select_list(name: 'select2').option(:value => 'nloc1').select
    @browser.select_list(name: 'select3').option(:value => '4').select
    @browser.button(id: 'click').click
    # THEN
    @browser.p(id: 'demo').visible?.must_equal true
    
  end

  it '(HAPPY) should see adding successfully' do
    # GIVEN: on the homepage    
    @browser.goto homepage
    @browser.button(id: 'addweather').click

    # WHEN: adding location and icons
    @browser.text_field(id: 'location_input').set 'Taiwan'
    @browser.label(id:'weather_rainy').click
    @browser.label(id:'situation_typhoon').click
    @browser.label(id:'side_umbrella').click
    @browser.label(id:'activity_icecream').click
    @browser.label(id:'emotion_boring').click
    @browser.label(id:'festival_christmas').click
    @browser.button(id: 'weather-form-submit').click
    # THEN: should see flash notice
    flash_notice = @browser.div(class: 'alert')
    flash_notice.attribute_value('class').must_include 'success'
  end

  it '(SAD) should alert if user did not add weather in correct form' do
    # GIVEN: on the homepage
    @browser.goto homepage
    @browser.button(id: 'addweather').click

    # WHEN: add an existing group url
    @browser.button(id: 'weather-form-submit').click

    # THEN: danger flash notice should be seen
    flash_notice = @browser.div(class: 'alert')
    flash_notice.attribute_value('class').must_include 'danger'
  end    
end