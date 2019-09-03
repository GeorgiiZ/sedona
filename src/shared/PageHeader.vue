<template>
    <div class="header">
        <img class="header__img-back" src="../assets/backdesktopjpg.png"/>
        <!-- <span class="header__img-triangle"/> -->
        <div class="header__img-triangle"></div>
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
}

.header__img-triangle {
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

.header__img-triangle-1 {
    display: flex;
    position: absolute;
    bottom: 0;
    height: 55px;
    width: 100%;
    object-fit: none;
}


.header__img-back {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 100%; 
}

</style>