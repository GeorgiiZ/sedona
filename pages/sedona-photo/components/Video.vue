<template>
    <div class="video-pres">
        <img class="video-pres__img" src="@/assets/videodesktopjpg.png"/>
        <div class="video-pres__control">
            <img class="video-pres__control-elem" src="@/assets/replaysvg.png"/>
            <input class="video-pres__control-range" type="range" min=0 max="100" />
            <img class="video-pres__control-elem" src="@/assets/subtitlessvg.png"/>
            <div class="baker"></div>
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

.video-pres {
    display: flex;
    position: relative;
}

.video-pres__img {
    width: 100%;
    object-fit: cover;    
}

.video-pres__control {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0);
    background: rgba(0, 0, 0, 0.6); 
    width: 100%;
    height: 80px;
}

.video-pres__control-elem {
    margin-left: 30px; 
    cursor: pointer;
}

.video-pres__control-elem:hover {
    opacity: 0.7;
}

.video-pres__control-elem:active {
    opacity: 0.4;
}

.video-pres__control-range {
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