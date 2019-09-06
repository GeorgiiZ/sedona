<template>
    <div class="home">
        <div class="home-header">
            <Header/>
            <div class="home-header__caption"></div>
        </div>
        <div class="home-content">
            <div class="home-content__caption">
                <div class="home-content__caption-header">седона - небольшой городок в аризоне, заслуживающий большего!</div>
                <div class="home-content__caption-paragraph">рассмотрим 5 причин, по которым седона круче, чем гранд каньон!</div>
            </div>
            <div class="home-content__advantage">
                <div class="home-content__advantage-info">
                    <div class="home-content__caption-header
                                home-content__caption-header_white">настоящий городок</div>
                    <div class="home-content__caption-paragraph
                                home-content__caption-paragraph_white">- № 1 -</div>
                    <div class="home-content__caption-paragraph
                                home-content__caption-paragraph_white">седона не аттракцион для туристов, там течет своя жизнь</div>
                </div>
                <img class="home-content__advantage-img" src="@/assets/photo-city.png"/>
            </div>
            <div class="home-content__facts">
                <div class="home-content__fact" v-for="(fact, key) in factList" :key="key">
                    <div :class="[ fact.img, {'home-content__fact-img': true} ]"/>
                    <div class="home-content__caption-header">{{ fact.name }}</div>
                    <div class="home-content__caption-paragraph">{{ fact.desc }}</div>
                </div>
            </div>
            <div class="home-content__advantage">
                <img class="home-content__advantage-img" src="@/assets/photo-bridge.png"/>
                <div class="home-content__advantage-info">
                    <div class="home-content__caption-header
                                home-content__caption-header_white">там есть мост дьявола</div>
                    <div class="home-content__caption-paragraph
                                home-content__caption-paragraph_white">- № 2 -</div>
                    <div class="home-content__caption-paragraph
                                home-content__caption-paragraph_white">да, по нему можно пройти если вы осмелилитесь, конечно</div>
                </div>
            </div>
            <div class="home-content__facts
                        home-content__facts_grey">
                <div class="home-content__fact" v-for="(fact, idx, key) in advantageList" :key="key">
                    <div class="home-content__caption-header
                                home-content__caption-header_narrow">{{ fact.name }}</div>
                    <div class="home-content__fact-num">- №{{idx+3}} -</div>
                    <div class="home-content__caption-paragraph">{{ fact.desc }}</div>
                </div>
            </div>
            <div class="home-content__motels">
                <div class="home-content__motels-header">заинтересовались?</div>
                <div class="home-content__caption-paragraph">укажите предполагаемые даты поезки и мыпокажем вам лучшие предложения гостиниц в седоне</div>
                <button type="submit" class="home-content__motels-btn" @click.prevent="sendRequenst()">найти гостиницу</button>
            </div>
            <div class="home-content__map">
                <img src="@/assets/map-desktop.png"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "../../shared/PageHeader.vue";
import { SedonaAdvantage } from '@/service/models/SedonaAdvantage';

const images = require.context("../../assets/", true, /\.png$/)


@Component({
    components: { Header }
})
export default class Home extends Vue {
    headerCaption: string = "sedona";
    factList: SedonaAdvantage []  = [ 
        { 
            name: 'жилье',
            desc: 'рекомендуем пожить в настоящем мотеле, все как в кино!',
            img: 'icon-house'
        },
        {
            name: 'еда',
            desc: 'всегда заказывайте фирменный бургер, вы не разочаруетесь!',
            img: 'icon-burger'
        },
        {
            name: 'сувениры',
            desc: 'не только китайского, но и местного производства!',
            img: 'icon-gift'
        }
    ];
    advantageList: SedonaAdvantage [] = [
        { 
            name: 'небольшая площадь',
            desc: 'интересные места находятся очень близко',
        },
        {
            name: 'красивая дорога',
            desc: 'ехать в седону из ласвегаса совсем не скучно',
        },
        {
            name: 'мало туристов',
            desc: 'большинство едет в гранд каньен и топится там',
        }
    ];
}
</script>

<style>

svg {
  width: 70px;
  height: 70px;
  fill: blue;
}

.icon-house{
    background: url("../../assets/sprite/sprite.svg#icon-house") no-repeat;
    background-position: center;
    background-size: cover; 
    width: 50px;
    height: 50px;
}

.icon-burger{
    background: url("../../assets/sprite/sprite.svg#icon-burger") no-repeat;
    background-position: center;
    background-size: cover; 
    width: 50px;
    height: 50px;
}

.icon-gift{
    background: url("../../assets/sprite/sprite.svg#icon-gift") no-repeat;
    background-position: center;
    background-size: cover; 
    width: 50px;
    height: 50px;
}

.home {
    display: flex;
    flex-direction: column;
}

.home-header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home-header__caption {
    position: absolute; 
    background: url("../../assets/sprite/sprite.svg#text-index") no-repeat;
    background-position: center;
    background-size: cover; 
    min-width: 350px;
    height: 250px;
}

.home-content {
    display: flex;
    flex-direction: column;
}

.home-content__caption {
    padding: 70px;
    margin: 0 auto;
    max-width: 500px;
    text-align: center;
}

.home-content__caption-header{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
}

.home-content__caption-header_white{
    color: white;
}

.home-content__caption-header_narrow{
    max-width: 150px;
}

.home-content__caption-paragraph {
    text-transform: uppercase;
    margin-top: 20px; 
    line-height: 180%;
    text-align: center;
}

.home-content__caption-paragraph_white{
    color: white;
    margin-top: 15px; 
}

.home-content__advantage {
    display: flex;
    flex-direction: row;
    max-height: 256px;
}

.home-content__advantage-info {
   background-color: #95c8d8;
   padding: 80px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 30%;
   text-align: center;
}

.home-content__advantage-img {
    object-fit: cover;
}

.home-content__facts {
    display: flex;
    justify-content: space-between;
}

.home-content__fact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.home-content__facts_grey {
    background-color: #eee;
}

.home-content__fact-img {
    margin-bottom: 20px; 
}

.home-content__fact-num{
    margin-top: 20px;
}

.home-content__motels{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;
    margin: 0 auto;
    max-width: 400px;
}

.home-content__motels-header {
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size__large);
    text-align: center;
}

.home-content__motels-btn{
    margin-top: 25px;
    height: 50px;
    border: none;
    width: 100%;
    background-color: #95c8d8;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    cursor: pointer;
    font-size: var(--font-size__middle);
}

.home-content__map{
    display: flex;
}

</style>