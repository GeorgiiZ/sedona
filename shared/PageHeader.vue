<template>
    <div class="header">
        <img class="header__img-back" src="../assets/backdesktopjpg.png"/>
        <img class="header__img-triangle" src="../assets/introtrianglesvg.png">
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PageHeader extends Vue {

}
</script>

<style>

.header {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
}

.header__img-triangle {
    position: absolute;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    z-index: 1;
}

.header__img-back {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 100%; 
}

</style>