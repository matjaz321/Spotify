import Vue from 'vue';
import PlayerControlButtons from './components/PlayerControlButtons.vue';

new Vue({
    el: '#player-control-buttons',
    render: h => h(PlayerControlButtons),
});