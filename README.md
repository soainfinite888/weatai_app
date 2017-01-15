## Weatai_APP
This web appplication is an instant weather platform. We built this platform for three reasons. First, we want to provide the official weather information from [Central Weather Bureau Open Data](http://opendata.cwb.gov.tw/about) and [Environmental Protection Association Open Data](http://opendata.epa.gov.tw/) to let the users check instantly. Second, we want the users to be able to add instant weather information by custom-designed icons on the map, so the weather condition can be shown directly by images. Third, we want to add a mini chat room where the user can share their instant weather information with others. 
Therefore, we provide a platform combined **instant weather**, **icons on maps**, and **mini chat room**. And here comes our web application: **WeaTai**, which is based on **Weather** and **Taiwan**.
We've deployed on heroku and you can check it [Here](https://weatai.herokuapp.com/).

![alt tag](https://github.com/soainfinite888/weatai_app/blob/master/public/img/homepage.PNG)

## Instruction
1. You can select the place you want to find for instant weather by "區域", "縣市" and "測站" and click the button **Find Weather & Air quality**
![alt tag](https://github.com/soainfinite888/weatai_app/blob/master/public/img/instant_weather.PNG)
for example:區域=中部, 縣市=台中市, 測站=梧棲
![alt tag](https://github.com/soainfinite888/weatai_app/blob/master/public/img/instant_weather_ex.PNG)

2. You can add the icons directly on the map by typing the place you want to update and the icons you want to add.
![alt tag](https://github.com/soainfinite888/weatai_app/blob/master/public/img/add_point.PNG)
![alt tag](https://github.com/soainfinite888/weatai_app/blob/master/public/img/add_point_ex.PNG)

3. You can send the messages and chat on our platform to share the weather information and the emotion.
![alt tag](https://github.com/soainfinite888/weatai_app/blob/master/public/img/message.PNG)

Enjoy Weatai!!

## Built With

* [Sinatra](https://github.com/sinatra/sinatra) - The web framework we used
* [Heroku](https://www.heroku.com/) - Cloud application platform
* [Weatai API](https://github.com/soainfinite888/weatai_webAPI/tree/merge) - Instant weather updated by [CWB open data](http://opendata.cwb.gov.tw/about) and [EPA open data](http://opendata.epa.gov.tw/)
* [Google Map API](https://enterprise.google.com/intl/zh-TW/maps/products/mapsapi.html?utm_source=cpc&utm_medium=google&utm_campaign=2016-geo-japac-endor-gmedia-search-nthasia-&utm_content=tw%7Czh%7Cdt%7C1001879%7Chv%7Cbk%7Cbrand%7C%7Clp_api&utm_term=google%20map%20api&creative=145281954127&gclid=CjwKEAiA2OzDBRCdqIyIqYaaqQoSJABeJZdiy6pEoIBlZn19AHBnP9mzaUTQA2bjlUkUxbDrY87JBRoC08_w_wcB) - The map we used on our platform
* [Mini Chat Room](https://github.com/eterry1388/sinatra-faye-example) - This function is built by faye, web socket
* [Shoryuken Worker](https://github.com/phstc/shoryuken) - This worker is built for adding the points on the map without redirecting the whole page but getting the information by super-efficient AWS SQS thread-based message processor.
* [Iron Worker](https://www.iron.io/platform/ironworker/) - This worker is built for updating the instant weather

## Authors

* **[Neil,Lee](https://github.com/Neilxx)**
* **[Andy,Chen](https://github.com/youyotsu)**
* **[Chien,Hung](https://github.com/chiachienhung)**

**If you have any suggestions, feel free to leave the messages by issues. We will be happy and reply them humbly.**
