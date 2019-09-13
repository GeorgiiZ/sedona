<template>
    <div class="home">
        <Header class="home-header">
           <div class="home-header__caption"></div>
        </Header>
        <div class="home-content">
            <div class="home-content__caption">
                <div class="home-content__caption-header">седона - небольшой городок в аризоне, заслуживающий большего!</div>
                <div class="home-content__caption-paragraph">рассмотрим 5 причин, по которым седона круче, чем гранд каньон!</div>
            </div>
            <AdvantageMain :advantage = 'advantagesMain[0]' imgDisplay='img-first' number='1'/>
            <div class="home-content__facts">
                <div class="home-content__fact" v-for="(fact, key) in facts" :key="key">
                    <div :class="[ fact.img, 'home-content__fact-img' ]"/>
                    <div class="home-content__caption-header">{{ fact.name }}</div>
                    <div class="home-content__caption-paragraph">{{ fact.desc }}</div>
                </div>
            </div>
            <AdvantageMain :advantage = 'advantagesMain[1]' imgDisplay='img-last' number='2'/>
            <div class="home-content__facts
                        home-content__facts-gray">
                <div class="home-content__fact-anvantage" v-for="(fact, idx, key) in advantages" :key="key">
                    <div class="home-content__caption-header
                                home-content__caption-header_narrow">{{ fact.name }}</div>
                    <div class="home-content__fact-num">- № {{ idx+3 }} -</div>
                    <div class="home-content__caption-paragraph">{{ fact.desc }}</div>
                </div>
            </div>
            <div class="home-content__motels">
                <div class="home-content__motels-header">заинтересовались?</div>
                <div class="home-content__caption-paragraph">укажите предполагаемые даты поезки и мыпокажем вам лучшие предложения гостиниц в седоне</div>
                <button type="submit" class="home-content__motels-btn" @click.prevent="sendRequenst()">найти гостиницу</button>
            </div>
            <img src="@/assets/map-desktop.png" class="home-content__map"/>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "../../shared/PageHeader.vue";
import { SedonaAdvantage } from '@/service/models/SedonaAdvantage';
import AdvantageMain from '@/pages/home/components/AdvantageMain.vue';

@Component({
    components: { Header, AdvantageMain }
})
export default class Home extends Vue {
    headerCaption: string = "sedona";
    facts: SedonaAdvantage []  = [ 
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
    advantages: SedonaAdvantage [] = [
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
            desc: 'большинство едет в гранд каньен и толпится там',
        }
    ];

    advantagesMain: SedonaAdvantage [] = [
        {
            name: 'настоящий городок',
            desc: 'седона не аттракцион для туристов, там течет своя жизнь',
            img: 'photo-city'
        },
        {
            name: 'там есть мост дьявола',
            desc: 'да, по нему можно пройти если вы осмелилитесь, конечно',
            img: 'photo-bridge'
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

.icon-house {
    background: url("../../assets/sprite/sprite.svg#icon-house") no-repeat;
    background-position: center;
    background-size: cover; 
    width: 50px;
    height: 50px;
}

.icon-burger {
    background: url("../../assets/sprite/sprite.svg#icon-burger") no-repeat;
    background-position: center;
    background-size: cover; 
    width: 50px;
    height: 50px;
}

.icon-gift {
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
    flex: 1;
    min-height: 500px;
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

.home-content__caption-header {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
}

.home-content__caption-header_narrow {
    max-width: 150px;
}

.home-content__caption-paragraph {
    text-transform: uppercase;
    margin-top: 20px; 
    line-height: 180%;
}

.home-content__facts {
    display: flex;
    justify-content: space-between;
}

.home-content__facts-gray {
    background-color: #eee;
}

.home-content__fact {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 50px;
}

.home-content__fact-anvantage {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 50px;
}


.home-content__fact-img {
    margin-bottom: 20px; 
}

.home-content__fact-num{
    margin-top: 20px;
}

.home-content__motels {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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
    outline: inherit;
}

.home-content__motels-btn:hover {
    background-color:#57A0D3;
}

.home-content__motels-btn:active {
    color: rgba(255,255,255, 0.5);
}

.home-content__map{
    width: 100%;
    object-fit: cover;
    object-position: 50% 100%;
}

@media(max-device-width: 480px){
    .home-content__map{
        min-height: 500px;
        max-width: 450px;
    }

    .home-content__facts{
        flex-direction: column;
        padding: 0 25px;
    }

    .home-content__fact{
        align-items: flex-start;
        padding-left: 85px; 
        text-align: inherit;
    }

    .home-content__fact-anvantage{
        border-bottom: 1px solid #bebebe; 
    }

    .home-content__caption-header_narrow{
        max-width: none;
    }

    .icon-house {
        position: absolute;
        left: 20px;
        top: 30px;
    }

    .icon-burger {
        position: absolute;
        left: 20px;
        top: 30px;
    }

    .icon-gift {
        position: absolute;
        left: 20px;
        top: 30px;
    }
}

</style>