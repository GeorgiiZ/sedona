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
            <div class="home-content__fact">
                <div class="home-content__fact-info">
                    <div class="home-content__caption-header
                                home-content__caption-header_white">настоящий городок</div>
                    <div class="home-content__caption-paragraph
                                home-content__caption-paragraph_white">- № 1 -</div>
                    <div class="home-content__caption-paragraph
                                home-content__caption-paragraph_white">седона не аттракцион для туристов, там течет своя жизнь</div>
                </div>
                <img class="home-content__fact-img" src="@/assets/photo-city.png"/>
            </div>
            <div class="home-content__advantage-content">
                <div class="home-content__advantage" v-for="(advantage, key) in advatageList" :key="key">
                    <!-- <svg class="home-content__advantage-img">
                        <use xlink:href="../../assets/sprite/sprite.svg#icon-house"></use>
                    </svg> -->
                    <img v-bind:src="advantage.img"/>
                    <div class="home-content__caption-header">{{ advantage.name }}</div>
                    <div class="home-content__caption-paragraph">{{ advantage.desc }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "../../shared/PageHeader.vue";
import { SedonaAdvantage } from '@/service/models/SedonaAdvantage';

@Component({
    components: { Header }
})
export default class Home extends Vue {
    headerCaption: string = "sedona";
    advatageList: SedonaAdvantage []  = [ 
        { 
            name: 'жилье',
            desc: 'рекомендуем пожить в настоящем мотеле, все как в кино!',
            img: '../../icon-house.png'
        },
        {
            name: 'еда',
            desc: 'всегда заказывайте фирменный бургер, вы не разочаруетесь!',
            img: '../../assets/icon-burger.png'
        },
        {
            name: 'сувениры',
            desc: 'не только китайского, но и местного производства!',
            img: '../../assets/icon-gift.png'
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

.home-content__caption  {
    margin: 50px auto 0 auto;
    max-width: 500px;
    text-align: center;
}

.home-content__caption-header{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
}

.home-content__caption-header_white{
    color: white;
}

.home-content__caption-paragraph {
    text-transform: uppercase;
    margin-top: 25px; 
    line-height: 180%;
    text-align: center;
}

.home-content__caption-paragraph_white{
    color: white;
    margin-top: 15px; 
}

.home-content__fact {
    display: flex;
    flex-direction: row;
    margin-top: 50px; 
    max-height: 256px;
}

.home-content__fact-info {
   background-color: #95c8d8;
   padding: 50px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 30%;
   text-align: center;
}

.home-content__fact-img {
    object-fit: cover;
}

.home-content__advantage-content {
    display: flex;
    justify-content: space-around;
}

.home-content__advantage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.home-content__advantage-img {

}

</style>