<template>
    <div>
        <full-calendar :events="$store.state.events"
                       :config="config"
                       @day-click="dayClick"
                       @event-selected="eventSelected"
                       ref="calendar"/>
    </div>
</template>
<script>
    import 'fullcalendar/dist/locale/ru';
    export default {
        name: 'Calendar',
        props: ['events'],
        data() {
            return {
                config: {
                    locale: 'ru',
                    defaultView: 'month',
                    header:{
                        //left:   'title',
                        center: 'title',
                        right:  ''
                    },
                    eventRender: function(event) {
                    }
                },
            }
        },
        components: {},
        methods: {
            eventSelected(event, jsEvent, view){
                this.$store.commit('setDayform', event.start._d);
            },
            dayClick(date) {
                this.$store.commit('setDayform', date._d);
            },
        },
    }
</script>
<style>
    .red {
        background: rgb(235, 77, 77) !important;
        color: whitesmoke !important;
    }

    .blue {
        background: rgb(59, 59, 163) !important;
        color: whitesmoke !important;
    }

    .orange {
        background: orange !important;
        color: white !important;
    }

    .green {
        background: rgb(49, 155, 49) !important;
        color: white !important;
    }

    .blue,
    .orange,
    .red,
    .green {
        font-size: 13px;
        font-weight: 500;
        text-transform: capitalize;
    }

    .event-item {
        padding: 2px 0 2px 4px !important;
    }
</style>