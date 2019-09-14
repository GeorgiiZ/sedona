<template>
    <div  class="advantage">
        <div class="advantage-info">
            <div class="advantage-info__header
                        advantage-info__header_white">{{ advantage.name }}</div>
            <div class="advantage-info__paragraph
                        advantage-info__paragraph_white">- № {{ number }} -</div>
            <div class="advantage-info__paragraph
                        advantage-info__paragraph_white">{{ advantage.desc }}</div>
        </div>
        <img v-bind:class="['advantage-img', imgDisplay]" :src="getImgUrl(advantage.img)"/>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { SedonaAdvantage } from '@/service/models/SedonaAdvantage';

@Component
export default class AdvantageMain extends Vue {
    @Prop({ 
        required: true,
        validator: function(value) {
            return ['img-first', 'img-last'].includes(value);
        } 
    }) 
    imgDisplay !: String;

    @Prop({required: true}) advantage !: SedonaAdvantage;

    @Prop(Number) number !:Number;
    
    getImgUrl(img: string) {
        var images = require.context('../../../assets/', false, /\.png$/)
        return images('./' + img + ".png")
    }
}
</script>

<style>

.advantage {
    display: flex;
    flex-direction: row;
    max-height: 256px;
}

.advantage-info {
   background-color: #95c8d8;
   padding: 80px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   order: 1;
}

.advantage-img {
    object-fit: cover;
    order: 2;
}

.advantage-info__header{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
}

.advantage-info__header_white{
    color: white;
}

.advantage-info__paragraph {
    text-transform: uppercase;
    margin-top: 20px; 
    line-height: 180%;
}

.advantage-info__paragraph_white{
    color: white;
    margin-top: 15px; 
}

.img-first{
    order: 0;
}

.img-last{
    order: 2;
}

@media(max-device-width: 480px){

    .advantage{
        flex-direction: column;
        max-height: none;
    }

    .advantage-info {
        order: 1;
        padding: 50px;
    }

    .advantage-img {
        min-height: 350px;
        max-width: 100%;
        order: 2;
    }
}

</style>