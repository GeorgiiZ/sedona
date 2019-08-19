<template>
    <div class="sight-photo">
        <img class="sight-photo__img" :src="sightPic.photoSrc"/>
        <div class="sight-photo__info">
            <div class="sight-photo__info-name">
                неродные просторы
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ISightPic } from "@/service/Sight";

@Component
export default class SightPhoto extends Vue{
    @Prop({ default: null }) sightPic: ISightPic;  

}

</script>

<style>

.sight-photo {
    position: relative;
}

.sight-photo__img {
    width: 100%;
    object-fit: cover;    
}

.sight-photo__info {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    background-color: black;
    opacity: 0.3;
    width: 100%;
    height: 70px;
}

.sight-photo__info-name {
    color: white;
    opacity: 1;
}

</style>