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
            <img src="@/assets/map-desktop.png" class="home-content__map" alt="district-map"/>
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

<style lang='scss'>

.home {
    display: flex;
    flex-direction: column;

    &-header {
        flex: 1;
        min-height: 500px;
        &__caption {
            position: absolute; 
            background: url("../../assets/sprite/sprite.svg#text-index") no-repeat;
            background-position: center;
            background-size: cover; 
            min-width: 350px;
            height: 250px;
        }
    }
    &-content {
        display: flex;
        flex-direction: column;

        &__caption {
            padding: 70px;
            margin: 0 auto;
            max-width: 500px;
            text-align: center;

            &-header {
                text-transform: uppercase;
                font-weight: bold;
                font-size: 20px;
                text-align: center;

                &_narrow {
                    max-width: 150px;
                }
            }
            &-paragraph {
                text-transform: uppercase;
                margin-top: 20px; 
                line-height: 180%;
            }
        }

        &__facts {
            display: flex;
            justify-content: space-between;

            &-gray {
                background-color: #eee;
            }
        }
        &__fact {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 50px;

            &-anvantage {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 50px;
            }

            &-img {
                margin-bottom: 20px;
            }

            &-num{
                margin-top: 20px;
            }
        }

        &__motels {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 60px;
            margin: 0 auto;
            max-width: 400px;

            &-header {
                text-transform: uppercase;
                font-weight: bold;
                font-size: var(--font-size__large);
            }

            &-btn{
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

                &:hover {
                    background-color:#57A0D3;
                }

                &:active {
                    color: rgba(255,255,255, 0.5);
                }

            }
        }

        &__map{
            width: 100%;
            object-fit: cover;
            object-position: 50% 100%;
        }
    }
}

.icon-house {
    background: url("../../assets/sprite/sprite.svg#icon-house") no-repeat center;
    background-size: cover;
    width: 45px;
    height: 45px;
}

.icon-burger {
    background: url("../../assets/sprite/sprite.svg#icon-burger") no-repeat center;
    background-size: cover; 
    width: 45px;
    height: 45px;
}

.icon-gift {
    background: url("../../assets/sprite/sprite.svg#icon-gift") no-repeat center;
    background-size: cover;
    width: 45px;
    height: 45px;
}


@media(max-device-width: 480px){

    .home{
        &-content{
            &__map{
                min-height: 500px;
                max-width: 450px;
            }
            &__facts{
                flex-direction: column;
            }
            &__fact{
                align-items: flex-start;
                padding-left: 85px;
                text-align: inherit;

                &-anvantage{
                    border-bottom: 1px solid #bebebe;
                    padding: 40px;
                }
            }
            &__caption {
                padding: 50px;

                &-header_narrow{
                    max-width: none;
                }
            }
            &__motels {
                max-width: 100%;
                padding: 40px;

                &-header {
                    font-size: 28px;
                }
            }
        }
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
