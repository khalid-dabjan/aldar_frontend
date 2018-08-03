<template>
    <div class="oneWidget mrgBtm weather">
        <div class="mainTitle">
            <div class="name">الطقس</div>
        </div>
        <hr>
        <div class="mainPadding">
            <div class="tableDis" v-if="current">
                <div class="oneCell"><img :src="getIcon(current.icon)" style="max-width: 30px"></div>
                <div class="oneCell brand-color textCentered dataTop">
                    <div v-text="current.display_location.city"></div>
                    <div class="number">
                        <div class="inlineBlock relative">{{current.feelslike_c}}<span>o</span></div>
                    </div>
                    <div class="font-small" v-text="current.weather"></div>
                </div>
                <div class="oneCell brand-color textCentered dataTop" v-if="date">
                    <div v-text="date.weekDay"></div>
                    <div class="number" v-text="date.day"></div>
                    <div class="font-small" v-text="date.month + ' ' + date.year"></div>
                </div>
            </div>
        </div>
        <div class="brand-bg hourlyWeater">
            <div class="flexslider arrows1 downPosition" ref="weather_slider">
                <ul class="slides">
                    <li v-for="hour in hourly">
                        <div class="one">
                            <div class="avatar"><img :src="getIcon(hour.icon,'white')"></div>
                            <div class="data">
                                <div class="time" v-text="hour.FCTTIME.civil"></div>
                                <div class="number">
                                    <div class="inlineBlock relative">{{hour.temp.metric}} <span>o</span></div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        <div class="content">

            <div class="one mainPadding" v-for="day in daily">
                <div class="tableDis">
                    <div class="oneCell" v-text="day.date.weekday"></div>
                    <div class="oneCell"><img :src="getIcon(day.icon)"></div>
                    <div class="oneCell number">
                        <div class="inlineBlock relative">{{day.high.celsius}} <span>o</span></div>
                    </div>
                    <div class="oneCell number">
                        <div class="inlineBlock relative">{{day.low.celsius}} <span>o</span></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import {initWeatherSlider} from '../partials/Helpers';

    export default {
        created() {
            this.$store.dispatch('fetchWeather').then(() => initWeatherSlider(this.$refs.weather_slider));
        },
        methods: {
            getIcon(name, color = 'red') {
                return `/images/weather-${color}/${name}.png`;
            }
        },
        computed: {
            current() {
                return this.weather ? this.weather.current : false;
            },
            date() {
                return this.weather ? this.weather.date : false;
            },
            hourly() {
                return this.weather && this.weather.hourly_forecast ? this.weather.hourly_forecast.slice(0, 12) : [];
            },
            daily() {
                return this.weather && this.weather.forecast ? this.weather.forecast.simpleforecast.forecastday.slice(0, 7) : [];
            },
            ...mapState({
                weather: state => state.mainStore.weather
            })
        },
    }
</script>