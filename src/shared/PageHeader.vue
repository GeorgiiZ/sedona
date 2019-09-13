<template>
    <div class="header">
        <img class="header__back-img" src="../assets/backdesktopjpg.png"/>
        <div class="header__triangle-img"></div>
        <slot>
            <span class="header__content-caption">sedona</span>
        </slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PageHeader extends Vue {

}
</script>

<style>

.test {
    margin-top: auto; 
    width: 100px;
}

.header {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.header__content-caption {
    position: absolute;    
    font-size: var(--font-size__extra-large);
    color: white;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: center;
    width: 100%;
}

.header__triangle-img {
    background: url("../assets/introtrianglesvg.png") no-repeat;
    background-size: cover; 
    background-position: center bottom; 
    display: flex;
    position: absolute;
    font-size: 0;
    bottom: -2px;
    width: 100%;
    height: 55px;
}


.header__back-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 100%; 
    flex: 1;
}

@media (max-device-width:480px){
    .header__content-caption {
        font-size: 80px;
    }
}

</style>