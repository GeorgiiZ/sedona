<template>
    <div class="header">
        <img class="header__img-back" src="../assets/backdesktopjpg.png"/>
        <svg class="header__img-triangle">
            <use class="test" xlink:href="../assets/sprite/sprite.svg#intro-triangle"></use>
        </svg>
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
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 0;
}

.header__img-back {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 100%; 
}

</style>