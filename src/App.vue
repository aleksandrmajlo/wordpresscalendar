<template>
    <div id="app">
        <div class="main">
            <div class="calendar-holder">
                <calendar/>
            </div>
            <div class="form-holder">
                <event-form/>
            </div>
        </div>
        <div class="load_conteer" v-if="$store.state.isLoad">
            <div class="loader"></div>
        </div>
    </div>
</template>
<script>
    import Calendar from './components/Calendar.vue'
    import EventForm from './components/EventForm.vue'
    export default {
        name: 'app',
        components: {
            Calendar,
            EventForm,
        },
        data() {
            return {
            }
        },
        methods: {}
    }
</script>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: #2c3e50;
        margin-top: 60px;
        position: relative;
    }
    .main {
        display: flex;
        align-items: flex-start;
        .calendar-holder {
            width: 65%;
        }
        .form-holder {
            width: 35%;
        }
    }
    .load_conteer {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.9);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 11;
        .loader {
            border: 16px solid #f3f3f3; /* Light grey */
            border-top: 16px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
</style>