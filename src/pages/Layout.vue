<template>
    <div class="layout">
        <header>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__list-item" style="width: 20%;">
                        главная
                    </li>
                    <li class="nav__list-item" style="width: 20%;">
                        фото и видео
                    </li>
                    <li class="nav__list-item" style="width: 20%;">
                        <div class="nav__list-logo"></div>
                    </li>
                    <li class="nav__list-item" style="width: 20%;">
                        форма отзыва
                    </li>
                    <li class="nav__list-item" style="width: 20%;">
                        html academy
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <div class="nav-main"></div>
        </footer>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
 
}

</script>

<style>

.layout {
    background-color: white;
    width: 1150px;
    margin: 0 auto;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    --text-size__middle: 18px;
}

main {
    height: 50px;
}

.nav {
    display: flex;
}

.nav__list {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
}

.nav__list-item {
    position: relative;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--text-size__middle);
    margin: 25px 0px;
    width: 186px;
}

.nav__list-logo {
    content: url(".././assets/logotypedesktopsvg.png");
    z-index: 1;
    position: absolute;
    top: 0;
}

</style>