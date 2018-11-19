<template>

    <div class="wrap" v-if="$store.state.date">

        <form @submit.prevent="handleSubmit">
            <div class="input-holder">
                <input type="text" placeholder="Ссылка" :value="link" @input="setLink"/>
                <strong style="color:blue;">Что б не выводить ссылку оставьте поле пустым</strong>
            </div>
            <div class="input-holder">
                <button type="submit">Сохранить</button>
            </div>
        </form>
        <div>
            <p>День:<strong>{{$store.state.date_select}}</strong></p>
            <p>Месяц:<strong>{{$store.state.month_select}}</strong></p>
        </div>
        <div>
            <h2>Праздник в плагине календаря</h2>
            <p v-html="$store.state.text_calendar"></p>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'EventForm',
        data() {
            return {}
        },
        computed: {
            link() {
                return this.$store.state.link;
            }
        },
        methods: {
            setLink(e) {
                this.$store.commit('updateLink', e.target.value)
            },
            handleSubmit() {
                this.$store.dispatch('updateAjaxlink');
            },

        },
        components: {}
    }
</script>
<style scoped lang="scss">
    .wrap {

        padding: 20px;
        .input-holder {
            margin-bottom: 20px;
        }
        [type="text"] {
            box-sizing: border-box;
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
            -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
            -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        }
        button {
            box-sizing: border-box;
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
            color: #fff;
            background-color: #337ab7;
            border-color: #2e6da4;
        }
    }
</style>