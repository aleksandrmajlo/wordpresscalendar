import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    events: [
        /*
        {
            title: 'event1',
            start: '2018-11-01',
            color: 'red',
        },

        {
            title: 'event2',
            start: '2018-11-10',
            end: '2018-11-14',
            cssClass: ['orange']
        }
        */
    ],
    date: false,
    date_select: '',
    month_select: '',
    text_calendar: '',
    link: "",
    isLoad: false,
}

const mutations = {
    write(state, newdate) {
        state.date = newdate;
        let d = new Date(state.date);
        state.date_select = d.getDate();
        state.month_select = d.getMonth() + 1;
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
}

const actions = {
    updateAjax({commit, state}, d) {
        commit('write', d.date);
        commit('setLoad');
        jQuery.ajax({
            url: process.env.VUE_APP_URLAJAX,
            type: 'POST',
            dataType: 'json',
            data: {
                date: state.date_select,
                month: state.month_select,
                action: 'calender_get'
            },
        })
            .done(function (r) {
                commit('updateLink', r.link);
                commit('updateText', r.text_calendar);
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                commit('setLoad');
            });

    },
    updateAjaxlink({commit, state}) {
        commit('setLoad');

        jQuery.ajax({
            url: process.env.VUE_APP_URLAJAX,
            type: 'POST',
            dataType: 'json',
            data: {
                date: state.date_select,
                month: state.month_select,
                link: state.link,
                action: 'update_link'
            },
        })
            .done(function (r) {
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                commit('setLoad');
            });


    }

}


const getters = {}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})