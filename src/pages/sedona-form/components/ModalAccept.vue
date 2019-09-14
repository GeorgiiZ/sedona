<template>
    <div class="modal-accept">
        <div class="modal-accept__content">
            <div class="modal-accept__content-caption">
                <div class="modal-accept__content-header">ваш отзыв отправлен!</div>
                <div class="modal-accept__content-paragraph">спасибо за ваше участие, ваш отзыв уже поступил к нам. в ближайшее время мы опубликуем его на сайте</div>
            </div>
            <div class="modal-accept__content-submit">
                <button class="modal-accept__content-btn" @click="modalClosed">ок</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class ModalAccept extends Vue{

    @Emit('onModalClosed')
    modalClosed(): void {}
}
</script>

<style>

.modal-accept {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 2;
    background-color: transparent;
    font-size: var(--text-size__light);
}

.modal-accept__content {
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 300px;
    max-width: 550px;
    background-color: white;
    box-shadow: 2px 30px 10px 0px #888;
}

.modal-accept__content-caption {
    padding: 50px 50px 30px 50px;
    height: 70%;
}

.modal-accept__content-header{
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size__large);
}

.modal-accept__content-paragraph{
    text-transform: uppercase;
    margin-top: 25px; 
    line-height: 180%;
}

.modal-accept__content-submit{
    height: 30%;
    background-color: #eee;
    padding: 40px 60px ;
}

.modal-accept__content-btn {
    width: 100%;
    height: 50px;
    border: none;
    background-color: #95c8d8;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: var(--font-size__middle);
    outline: inherit;
}

.modal-accept__content-btn:hover {
    background-color:#57A0D3;
}

.modal-accept__content-btn:active {
    color: rgba(255,255,255, 0.5);
}

@media(max-device-width: 480px){
    .modal-accept__content{
            margin: 20px;
    }
}

</style>