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
            <!-- <img class="video__control-elem" src="@/assets/replaysvg.png"/>
            <input class="video__control-range" type="range" min=0 max="100" />
            <img class="video__control-elem" src="@/assets/subtitlessvg.png"/>
            <div class="baker"></div> -->
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

.video__control-elem {
    margin-left: 30px; 
    cursor: pointer;
}

.video__control-elem:hover {
    opacity: 0.7;
}

.video__control-elem:active {
    opacity: 0.4;
}

.video__control-range {
 -webkit-appearance: none;
  width: 70%;
  border-radius: 5px;
  background: black;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.baker {
    /* background: url(C:/Users/GZennurov/Documents/vue-dev-projects/sedona/sedona/src/assets/sprite/sprite.svg#baker) no-repeat;  */
    width: 1000px;
    height: 1000px;
}

</style>