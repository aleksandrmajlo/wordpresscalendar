import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    events: [

    ],
    date: false,

    date_select: '',
    month_select: '',
    text_calendar: '',
    year: (new Date()).getFullYear(),
    link: "",

    isLoad: false,
}

const mutations = {

    setDayform(state, newdate){
        state.date = newdate;
        let d = new Date(state.date);
        state.date_select = d.getDate();
        if (state.date_select<10) state.date_select='0'+state.date_select;
        state.month_select = d.getMonth() + 1;
        this.dispatch('updateAjax');
    },

    updateCalendar(state){
        let this_el=false;

        state.events.forEach((el,ind) => {
            let date_ar=el.start.split('-');
            if(date_ar[2]==state.date_select&& date_ar[1] == state.month_select){
                this_el=true;
                state.events[ind].title=state.link;
            }
        });

        if(!this_el){
            for (let index = state.year; index < state.year + 5; index++) {
                state.events.push({
                    title: state.link,
                    start: index + '-' + state.month_select + '-' + state.date_select,
                    color: 'blue',
                })
            }
        }
    },

    setLoad(state) {
        state.isLoad = !state.isLoad;
    },

    updateLink(state, v) {
        state.link = v;
    },

    updateText(state, v) {
        state.text_calendar = v;
    },

    addEvents(state, v) {
        v.forEach(el => {
            for (let index = state.year; index < state.year + 5; index++) {
                state.events.push({
                    title: el.link,
                    start: index + '-' + el.month + '-' + el.date,
                    color: 'blue',
                })
            }
        });
    }


}

const actions = {

    updateAjax({commit, state}, d) {

        commit('setLoad');
        let params = new URLSearchParams();
        params.append('action', 'calender_get');
        params.append('date', state.date_select);
        params.append('month', state.month_select);
        Vue.axios.post(process.env.VUE_APP_URLAJAX, params).then((response) => {
                commit('setLoad');
                commit('updateLink', response.data.link);
                commit('updateText', response.data.text_calendar);

        });

        
    },



    saveLink({commit, state}) {

        commit('setLoad');

        let params = new URLSearchParams();
        params.append('action', 'update_link');
        params.append('date', state.date_select);
        params.append('month', state.month_select);
        params.append('link', state.link);

        Vue.axios.post(process.env.VUE_APP_URLAJAX, params).then((response) => {
            commit('updateCalendar');
            commit('setLoad');
        })
    },

    //
    getEventsactions({commit, state}) {

        let params = new URLSearchParams();
        params.append('action', 'all_link');
        Vue.axios.post(process.env.VUE_APP_URLAJAX, params).then((response) => {
            commit('addEvents', response.data);
        })
    }

}


const getters = {}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})