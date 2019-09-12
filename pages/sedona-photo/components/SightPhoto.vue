<template>
    <div class="sight-photo">
        <img class="sight-photo__img" :src="sightPic.photoSrc"/>
        <div class="sight-photo__info">
            <div class="sight-photo__info-data">
                <div class="sight-photo__info-name">{{ sightPic.sightName }}</div>
                Автор фото: {{ sightPic.author }}
            </div>
            <div class="sight-photo__info-likes">
                <div class="sight-photo__info-like-img" @click="incLikes()"></div>
                {{ sightPic.likesCount }}
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Sight } from "@/service/models/Sight";

@Component
export default class SightPhoto extends Vue{
    @Prop({ default: null }) sightPic!: Sight;

    incLikes() {
        this.sightPic.likesCount++;
    }
}

</script>

<style>

.sight-photo {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
    flex: 1;
}

.sight-photo__img {
    width: 100%;
    height: 100%;
    object-fit: cover;  
    object-position: 30% 100%; 
    flex: 1;
}

.sight-photo__info {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3); 
    color: white;
    width: 100%;
    height: 70px;
}

.sight-photo__info-data {
    margin-left: 25px; 
}

.sight-photo__info-name {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px; 
}

.sight-photo__info-likes {
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    margin-right: 25px;  
}

.sight-photo__info-like-img {
    margin-right: 10px;
    height: 20px;
    width:  20px;
    background: url(../../../assets/sprite/sprite.svg#like-icon) no-repeat;
    background-position: center;
    background-size: cover;
}

.sight-photo__info-like-img:active {
    opacity: 0.5;
}

@media (min-device-width: 481px) and (max-device-width:768px){
    .sight-photo__info {
        background: #eeeeee; 
        color: black;
    }
}

@media(max-device-width: 480px){
    .sight-photo__info{
        flex-direction: column;
        position: relative;
        align-items: flex-start;
        background: inherit;
        color: black;
        padding-top: 15px;
    }

    .sight-photo__info-data{
        margin: 0;
    }

    .sight-photo__info-likes{
        margin: 10px 0 0 0;
        color: white;
        background-color: #eee;
    }
}

</style>