var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'привет',
    message2: 'konichiwa'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li> {{ todo.text }} </li>'
});


var app6 = new Vue ({
  el: '#app-6',
  data: {
    groceryList: [
      { id: 0, text: "овощи"},
      { id: 1, text: "myaso"},
      { id: 2, text: "frukty"},
      { id: 3, text: "hleb"}
    ]
  }
});
