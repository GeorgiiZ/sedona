<template>
    <div class="photos">
        <div class="photos__header">
            <Header class="photos__header-comp"/>
            <span class="photos__header-caption">{{ headerCaption }}</span>
        </div>
            <div class="photos__content">
                <div class="photos__content-caption"> 
                    <div class="photos__caption-header" > фото и видео </div>
                    <div class="photos__caption-paragraph"> не можете решиться на путешестиве из-за курса? Фотографии помогут вам забыть о политике и экономике </div>
                </div>
                <div class="photos__content-galary">
                    <span  v-for="(pic, key) in sightPics" :key="key" class="photos__content-sight-pic">
                        <SightPhoto :sightPic="pic" />
                    </span>
                </div>
            </div>
            <div class="photos__video">
                <div class="photos__video-caption">
                    <div class="photos__caption-header " > все еще сомневаетесь?</div>
                    <div class="photos__caption-paragraph"> смотрите видеопрезентацию и скорее за билетами, пока они не подорожали в очередной раз! </div>
                </div>
                <VideoPresent class="photos__video-content"/>
            </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";

import { sightService } from "@/service/impl/SightService";
import { Sight } from "@/service/models/Sight"; 

import Header from "@/shared/PageHeader.vue";
import SightPhoto from "./components/SightPhoto.vue";
import VideoPresent from "./components/Video.vue";


@Component({
    components: { Header, SightPhoto, VideoPresent }
})
export default class SedonaPhotos extends Vue {
    headerCaption: string = "sedona";
    sightPics:  Sight[] = <Sight[]>[];

    created() {
        this.getSightPics();
    }

    getSightPics() {
        this.sightPics = sightService.getSightPics();
    }
}

</script>

<style>

.photos {
    display: flex;
    flex-direction: column;
}

.photos__header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.photos__header-comp {
    width: 100%;
    height: 300px;
}

.photos__header-caption {
    position: absolute;    
    font-size: var(--font-size__extra-large);
    color: white;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: center;
    width: 100%;
}

.photos__caption-header {
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size__large);
}

.photos__caption-paragraph {
    text-transform: uppercase;
    margin-top: 25px; 
    line-height: 180%;
}

.photos__content-caption {
    max-width: 440px;
    padding: 80px;
    margin: 0 auto;
    text-align: center;
}

.photos__content-galary {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    /* align-content: flex-start; */
}


.photos__video {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.photos__video-caption {
    max-width: 440px;
    margin: 0 auto;
    text-align: center;
    padding: 80px;
}

.photos__content-sight-pic {
    display: flex;
    min-height: 300px;
}

@media (max-device-width:480px){

    .photos__content-galary {
        justify-content: center;
    }

    .photos__content-sight-pic {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 20px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }

    .photos__video-content{
        min-height: 300px;
    }
    
    .footer-list__item {
        padding: 20px;
    }

    .photos__content-caption{
        padding: 50px;
    }

    .photos__video-caption{
        padding: 50px;
    }

    .photos__header-caption{
        font-size: 80px;
    }
}

@media (min-device-width: 481px) and (max-device-width:768px){
    .photos-main {
        display: flex;
        padding: 0 25px ;
    }

    .photos__content-galary {
        max-width: 100%;
    }
}

</style>