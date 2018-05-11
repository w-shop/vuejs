import Vue from 'vue';

import '../css/app.scss';
import TodoList from './components/TodoList';

Vue.component('todo-list', TodoList);

window.app = new Vue({
    el: '#app'
});

