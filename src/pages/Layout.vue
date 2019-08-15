<template>
    <div class="layout">
        <header>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__list-item" style="width: 25%;">
                        главная
                    </li>
                    <li class="nav__list-item" style="width: 25%;">
                        фото и видео
                    </li>
                    <li class="nav__list-item" style="width: 25%;">
                        форма отзыва
                    </li>
                    <li class="nav__list-item" style="width: 25%;">
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
    width: 1150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
    margin: 25px 0px;
}

</style>