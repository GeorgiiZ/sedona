<template>
    <div class="layout">
        <header>
            <nav>
                <ul class="nav-list">
                    <li class="nav-list__item" style="width: 20%;">
                        <router-link :to="{ name: 'Home'}"> главная </router-link>
                    </li>
                    <li class="nav-list__item" style="width: 20%;">
                        <router-link :to="{ name: 'SedonaPhoto'}"> фото и видео </router-link>
                    </li>
                    <li class="nav-list__item" style="width: 20%;">
                         <router-link class="nav-list__item-logo"  :to="{ name: 'Home'}">
                         </router-link>
                    </li>
                    <li class="nav-list__item" style="width: 20%;">
                        <router-link :to="{ name: 'SedonaForm'}"> форма отзыва </router-link>
                    </li>
                    <li class="nav-list__item" style="width: 20%;">
                        html academy
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <ul class="footer-list">
                <li class="footer-list__item
                           footer-list__item_first" style="width: 33%;">
                    <span class="footer-list__item-tag">#visitedsedona</span>
                </li>
                <li class="footer-list__item
                           footer-list__item_middle" style="width: 33%;">
                    <img src="@/assets/icontwittersvg.png"/>
                    <img class="footer-list__item-social" src="@/assets/iconfacebooksvg.png"/>
                    <img class="footer-list__item-social" src="@/assets/iconyoutubesvg.png"/>
                </li>
                <li class="footer-list__item
                           footer-list__item_last" style="width: 33%;">
                    РАЗРАБОТАНО
                    <img class="footer-list__item-academy" src="@/assets/htmlacademysvg.png"/>
                </li>
            </ul>
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

.test {
    width: 200px;
    height: 200px;
}

.layout {
    background-color: white;
    width: 1200px;
    margin: 0 auto;
    /* padding: 0 25px; */
    display: flex;
    flex-direction: column;
    --font-size__lower: 14px;
    --font-size__middle: 18px;
    --font-size__large: 30px;
    --font-size__extra-large: 90px;
    font-size: var(--font-size__lower);
    box-shadow: 0px 4px 15px 1px #888;
}

.nav-list {
    position: relative;
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
}

.nav-list__item {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size__lower);
    margin: 20px 0px;
    width: 186px;
    cursor: pointer;
    z-index: 1;
}

.nav-list__item:hover {
    opacity: 0.8;
    color: #2277AA;
}

.nav-list__item:active {
    opacity: 0.5;
    color: gray;
}

.nav-list__item-logo {
    z-index: 1;
    position: absolute;
    top: 0;
    width: 230px;
    height: 200px;
    background: url(../assets/sprite/sprite.svg#logotype-desktop) no-repeat;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

footer {
    margin-top: auto;
}

.footer-list {
    position: relative;
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    padding: 0 150px;
}

.footer-list__item {
    margin: 30px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.footer-list__item:active {
    opacity: 0.5;
}


.footer-list__item_first {
    justify-content: flex-start;
}

.footer-list__item_middle {
    justify-content: center;
}

.footer-list__item_last {
    justify-content: flex-end;
}

.footer-list__item-academy {
    margin-left: 20px; 
}

.footer-list__item-tag {
    text-transform: uppercase;
    font-size: var(--font-size__middle);
    font-weight: 900;
}

.footer-list__item-social {
    margin-left: 40px; 
}

</style>