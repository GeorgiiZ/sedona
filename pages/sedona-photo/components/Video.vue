<template>
    <div class="video">
        <img class="video__img" src="@/assets/videodesktopjpg.png"/>
        <div class="video__control">
            <div class="video__control-content">
                <span class="replay"/>
                <span class="volume-scale"/>
                <span class="subtitles"/>
                <span class="fullscreen"/>
            </div>
        </div>
    </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class VideoPresent extends Vue {
    
}
</script>

<style>

.video {
    display: flex;
    position: relative;
}

.video__img {
    width: 100%;
    object-fit: cover;    
}

.video__control {
    display: flex;
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); 
    width: 100%;
    height: 80px;
}

.video__control-content {
    display: flex;
    align-items: center;
    padding: 30px;
    width: 100%;
}

.replay {
    background: url(../../../assets/sprite/sprite.svg#replay) no-repeat;
    fill: white;
    background-size: cover;
    background-position: center;
    width: 20px;
    height: 20px;
}

.volume-scale {
    background: url(../../../assets/sprite/sprite.svg#volume-scale) no-repeat;
    fill: white;
    background-size: cover;
    background-position: center;
    width: 80%;
    height: 10px;
    margin-left: 25px; 
}

.subtitles {
    background: url(../../../assets/sprite/sprite.svg#subtitles) no-repeat;
    fill: white;
    background-size: cover;
    background-position: center;
    width: 35px;
    height: 25px;
    margin-left: 25px; 
}

.fullscreen {
    background: url(../../../assets/sprite/sprite.svg#fullscreen) no-repeat;
    fill: white;
    background-size: cover;
    background-position: center;
    width: 35px;
    height: 25px;
    margin-left: 25px; 
}


</style>