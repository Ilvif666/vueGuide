Vue.component('my-weather', {
  template: '<div><p v-if="noErr">{{ "Current weather in " + city +" is " + temperature + "°"}}</p><p v-else>No data. Refresh please.</p><input v-model="city"><button @click="apiCall">proceed</button></div>',
  data: () => ({
    city: 'Sankt-Peterburg',
    temperature: '',
    apiResponse: {}
  }),
  computed: {
    noErr() {
      return this.apiResponse.main;
    }
  },
  methods: {
    apiCall() {
      let xhr = new XMLHttpRequest();
      xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=231026420883d69c7430f5654b5e0e29`);
      if (this.city != 0) {
        xhr.send();
      } else {
        this.apiResponse = {};
      }
      xhr.onreadystatechange = () => {
        if ( xhr.readyState != 4 ) return;
        if ( xhr.status!=200 ) {
          this.apiReponse = {};
        } else {
          this.apiResponse = JSON.parse(xhr.responseText);
          if (this.apiResponse.main) {
            this.temperature = this.kelvinToCelsius(Math.floor(this.apiResponse.main.temp));
          }
        }
      }
    },
    kelvinToCelsius: K => K - 273
  }
})

new Vue({
  el: '#weather'
})
