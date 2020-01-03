<template>
    <div class="layout">
        <header>
            <nav>
                <ul class="nav-list">
                    <li class="nav-list__item" >
                        <router-link class="nav-list__link" :to="{ name: 'Home'}" v-show="isMenuVisual"> главная </router-link>
                        <span class="nav-list__item-cross" @click="isMenuVisual=false" v-show="isMenuVisual"></span>
                    </li>
                    <li class="nav-list__item" v-show="isMenuVisual">
                        <router-link class="nav-list__link" :to="{ name: 'SedonaPhoto'}"> фото и видео </router-link>
                    </li>
                    <li class="nav-list__item-logo">
                         <router-link class="nav-list__item-logo-svg"  :to="{ name: 'Home'}"></router-link>
                         <span class="nav-list__item-menu" @click="isMenuVisual=true"></span>
                    </li>
                    <li class="nav-list__item" v-show="isMenuVisual">
                        <router-link class="nav-list__link" :to="{ name: 'SedonaForm'}"> форма отзыва </router-link>
                    </li>
                    <li class="nav-list__item" v-show="isMenuVisual">
                        <a class="nav-list__link" href="https://htmlacademy.ru/intensive/adaptive" target="_blank">html academy</a> 
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
                </li>
                <li class="footer-list__item
                           footer-list__item_last">
                    <a class="footer-list__item-link" href="https://htmlacademy.ru/intensive/adaptive" target="_blank">
                        РАЗРАБОТАНО
                        <span class="footer-list__item-academy"/>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
    isMenuVisual: boolean = true;
}

</script>

<style>

.test {
    width: 200px;
    height: 200px;
}

.layout {
    background-color: white;
    max-width: 1024px;
    margin: 0 auto;
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
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size__lower);
    width: 20%;
}

.nav-list__item:hover {
    opacity: 0.8;
    color: #2277AA;
}

.nav-list__item:active {
    opacity: 0.5;
    color: gray;
}

.nav-list__link{
    display: flex;
    justify-content: center;
    padding: 20px 0;
    flex: 1;
    cursor: pointer;
}

.nav-list__item-logo {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
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
    padding: 30px 100px;
}

.footer-list__item {
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

.footer-list__item-link {
    display: flex;
    align-items: center;
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


.nav-list__item-cross {
    display: none;
}

.nav-list__item-menu {
    display: none;
}

@media (max-device-width:480px){
    .nav-list {
        flex-direction: column;
    }

    .nav-list__item {
        color: white;
        background-color: #95c8d8;
        width: 100%;
        order: 1;
        display: flex;
        align-items: center;
        outline: inherit;
        border-bottom: 1px solid white; 
    }

    .nav-list__item:hover {
        background-color:#57A0D3;
    }

    .nav-list__item:active {
        color: rgba(255,255,255, 0.5);
    }


    .nav-list__item-logo {
        width: 100%;
        min-height: 60px;
        background-color: white;
        order: 2;
    }

    .nav-list__item-logo-svg {
        width: 200px;
        height: 100px;
        background: url(../assets/sprite/sprite.svg#logotype-mobile) no-repeat;
    }

    .footer-list {
        flex-direction: column;
        margin-top: 25px;
        padding: 0;
        width: 90%;
    }

    .footer-list__item {
        justify-content: center;
        width: 100%;
    }
    
    .nav-list__item-cross {
        display: inline-block;
        position: absolute;
        right: 20px;
        background: url(../assets/sprite/sprite.svg#icon-cross) no-repeat;
        background-position: center;
        background-size: cover;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    .nav-list__item-menu {
        display: inline-block;
        position: absolute;
        right: 20px;
        background: url(../assets/sprite/sprite.svg#icon-menu) no-repeat;
        background-position: center;
        background-size: cover;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    .footer-list__item_first{
        padding-top: 50px; 
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