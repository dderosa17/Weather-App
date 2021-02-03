import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public city = "";
  public inputValue = "";
  public description = "";
  public degrees = "";
  public windSpeed = "";
  public humidity = 0;
  public cloudiness = 0;
  public apiKey = 'c5292bcf4fe8916318366a3e1f29229f';

  public handlerCity(event: any) {
    this.inputValue = event.target.value;
  }


  public sendRequest() {
    this.city = this.inputValue;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&appid=${this.apiKey}`)
      .then(res => res.json())
      .then(data => {
        console.log("in my data:", data);
        data.weather.forEach((elem: any) => {
          this.description = elem.description;
        });
        this.degrees = Number(data.main.temp - 273.15).toFixed(2);
        this.windSpeed = data.wind.speed;
        this.humidity = data.main.humidity;
        this.cloudiness = data.clouds.all;
      })
  }

}
