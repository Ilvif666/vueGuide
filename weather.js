var weather = new Vue({
  el: '#weather',
  data: {
    message: 'Current weather in ',
    city: 'New York',
    temperature: '',
    apiResponse: '',
    isMessedUp: false
  },
  methods: {
    apiCall: function () {
      let xhr = new XMLHttpRequest();
      xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid=231026420883d69c7430f5654b5e0e29");
      if ( this.city!=0 ) {
        xhr.send();
      } else { this.isMessedUp = true; }
      xhr.onreadystatechange = () => {
        if ( xhr.readyState != 4 ) return;
        this.apiResponse = xhr.responseText;
        this.isMessedUp = (xhr.status != 200);
        // if ( xhr.status!=200 ) {
        //   this.apiReponse = {};
        //   this.isMessedUp = true;
        // } else {
        //   this.apiResponse = xhr.responseText;
        //   this.isMessedUp = false;
        // }
      }
  },
    kelvinToCelsius: function(K) {
      return K-273;
  },
    parseWeather: function() {
      this.apiCall();
      let weatherObj = JSON.parse(this.apiResponse);
      if ( weatherObj.main ) {
        this.temperature = this.kelvinToCelsius(Math.floor(weatherObj.main.temp)).toString();
    } else {
    }
    return "";
  }
}
});
