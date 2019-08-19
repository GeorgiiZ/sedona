<template>
    <div class="photos">
        <div class="photos__header">
            <Header class="photos__header-comp"/>
            <span class="photos__header-caption">{{ headerCaption }}</span>
        </div>
        <div class="photos-content">
            <div class="photos-content__caption"> 
                <div class="photos-content__caption-header" > фото и видео </div>
                <div class="photos-content__caption-paragraph"> не можете решиться на путешестиве из-за курса? Фотографии помогут вам забыть о политике и экономике </div>
            </div>
            <div class="photos-content__galary">
                <SightPhoto :sightPic="sightPics[0]"/>
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


@Component({
    components: { Header, SightPhoto }
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
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 5px;
}

.photos-content {
    margin-top: 100px;
}

.photos-content__caption {
    width: 500px;
    margin: 0 auto;
}

.photos-content__caption-header {
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size__large);
}

.photos-content__caption-paragraph {
    text-transform: uppercase;
    margin-top: 25px; 
    line-height: 180%;
}

.photos-content__galary {
    margin-top:  60px;
    flex-wrap: wrap;
}

</style>