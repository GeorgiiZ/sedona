<template>
    <div class="layout">
        <header>
            <nav>
                <ul class="nav-list">
                    <li class="nav-list__item" >
                        <router-link :to="{ name: 'Home'}"> главная </router-link>
                    </li>
                    <li class="nav-list__item" >
                        <router-link :to="{ name: 'SedonaPhoto'}"> фото и видео </router-link>
                    </li>
                    <li class="nav-list__item-logo">
                         <router-link class="nav-list__item-logo-svg"  :to="{ name: 'Home'}">
                         </router-link>
                    </li>
                    <li class="nav-list__item" >
                        <router-link :to="{ name: 'SedonaForm'}"> форма отзыва </router-link>
                    </li>
                    <li class="nav-list__item" >
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
                           footer-list__item_first" >
                    <span class="footer-list__item-tag">#visitedsedona</span>
                </li>
                <li class="footer-list__item
                           footer-list__item_middle">
                    <span class="footer-list__item-twitter" />
                    <span class="footer-list__item-facebook" />
                    <span class="footer-list__item-video" />
                    <!-- <svg class="footer-list__item-video-1">
                        <use xlink:href="../assets/sprite/sprite.svg#video-footer" class="footer-list__item-video-2"></use>
                    </svg> -->
                </li>
                <li class="footer-list__item
                           footer-list__item_last">
                    РАЗРАБОТАНО
                    <span class="footer-list__item-academy"/>
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
    justify-content: center;
    align-content: center;
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
    padding: 20px 0;
    width: 20%;
    cursor: pointer;
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
    display: flex;
    position: relative;
    justify-content: center;
    width: 20%;
    cursor: pointer;
}

.nav-list__item-logo-svg {
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
    padding: 0 100px;
}

.footer-list__item {
    padding: 30px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 33%;
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
    margin-left: 15px; 
    width: 40px;
    height: 40px;
    background: url("../assets/sprite/sprite.svg#htmlacademy") no-repeat;
    background-position: center center;
    background-size: cover; 
}

.footer-list__item-tag {
    text-transform: uppercase;
    font-size: var(--font-size__middle);
    font-weight: 900;
}

.footer-list__item-twitter {
    background: white url("../assets/sprite/sprite.svg#twitter") no-repeat;
    width: 50px;
    height: 50px;
    background-position: center;
    background-color: #95c8d8;
}

.footer-list__item-facebook {
    background: url("../assets/sprite/sprite.svg#facebook") no-repeat;
    width: 50px;
    height: 50px;
    background-position: center;
    background-color: #95c8d8;
    margin-left: 15px;
}

.footer-list__item-video {
    background: url("../assets/sprite/sprite.svg#video-footer") no-repeat;
    width: 50px;
    height: 50px;
    background-position: center;
    background-color: #95c8d8;
    margin-left: 15px;
}

/* .footer-list__item-video-1 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: #95c8d8;
    margin-left: 15px;
}

.footer-list__item-video-2{
    fill: white;
    background-color: aquamarine;
}

svg {
  width: 70px;
  height: 70px;
}
svg:hover {
  fill: red;
} */


@media (max-device-width:480px){
    .nav-list {
        flex-direction: column;
    }

    .nav-list__item {
        color: white;
        background-color: #95c8d8;
        width: 100%;
        order: 1;
    }

    .nav-list__item-logo {
        width: 100%;
        min-height: 60px;
        background-color: white;
        order: 2;
        background: url(../assets/sprite/sprite.svg#icon-menu) no-repeat; 
        background-position: right;
        background-size: 8%;
    }

    .nav-list__item-logo-svg {
        width: 200px;
        height: 100px;
        background: url(../assets/sprite/sprite.svg#logotype-mobile) no-repeat;
    }

    .footer-list {
        flex-direction: column;
        padding: 0;
    }

    .footer-list__item {
        margin: 20px 0;
        justify-content: center;
        width: 100%;
    }
}

@media (min-width: 481px) and (max-width:768px){
    .nav-list__item-logo-svg {
        width: 200px;
        height: 100px;
        background: url(../assets/sprite/sprite.svg#logotype-mobile) no-repeat;
    }
}

</style>