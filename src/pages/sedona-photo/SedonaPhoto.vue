<template>
    <div class="photos">
        <div class="photos__header">
            <Header class="photos__header-comp"/>
            <span class="photos__header-caption">{{ headerCaption }}</span>
        </div>
        <div class="photos__content">
            <div class="photos__content-caption"> 
                <div class="photos__caption-header " > фото и видео </div>
                <div class="photos__caption-paragraph"> не можете решиться на путешестиве из-за курса? Фотографии помогут вам забыть о политике и экономике </div>
            </div>
            <div class="photos__content-galary">
                <span  v-for="(pic, key) in sightPics" :key="key">
                    <SightPhoto :sightPic="pic"/>
                </span>
            </div>
        </div>
        <div class="photos__video">
            <div class="photos__video-caption">
                <div class="photos__caption-header " > все еще сомневаетесь </div>
                <div class="photos__caption-paragraph"> смотрите видеопрезентацию и скорее за билетами, пока они не подорожали в очередной раз! </div>
            </div>
            <div class="photos__video-content">
                <VideoPresent/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";

import { sightService } from "@/service/impl/SightService";
import { ISightPic } from "@/service/Sight"; 

import Header from "@/shared/PageHeader.vue";
import SightPhoto from "./components/SightPhoto.vue";
import VideoPresent from "./components/Video.vue";


@Component({
    components: { Header, SightPhoto, VideoPresent }
})
export default class SedonaPhotos extends Vue {
    headerCaption: string = "sedona";
    sightPics:  ISightPic[] = <ISightPic[]>[];

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
    align-items: center;
}

.photos__header-comp {
    width: 100%;
    height: 300px;
}

.photos__header-caption {
    position: absolute;    
    font-size: var(--font-size__extra-large);
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
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

.photos__content {
    margin-top: 100px;
}

.photos__content-caption {
    width: 440px;
    margin: 0 auto;
    text-align: center;
}

.photos__content-galary {
    margin-top:  60px;
    display: flex;
    flex-wrap: wrap;
}

.photos__video {
    margin: 100px auto 0 auto;
    width: 780px;
}

.photos__video-caption {
    width: 440px;
    margin: 0 auto;
    text-align: center;
}

.photos__video-content {
    margin-top: 60px;
    margin-bottom: 100px; 
}

</style>