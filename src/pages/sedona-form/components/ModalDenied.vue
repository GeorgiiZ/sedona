<template>
    <div class="modal-denied">
        <div class="modal-denied__content">
            <div class="modal-denied__content-header">что-то пошло не так!</div>
            <div class="modal-denied__content-paragraph">проверьте поля выделенные красным, скорее всего вы забыли их заполнить</div>
            <button class="modal-denied__content-btn" @click="modalClosed">ок</button>
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

.modal-denied {
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

.modal-denied__content {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 250px;
    width: 290px;
    padding: 50px;
    background-color: white;
    box-shadow: 2px 10px 10px 0px #888;
}

.modal-denied__content-header{
    padding: 0 30px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size__large);
}

.modal-denied__content-paragraph{
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    line-height: 180%;
    margin-top: 25px;
}

.modal-denied__content-btn {
    width: 100%;
    height: 50px;
    margin-top: auto;
    border: none;
    background-color: #95c8d8;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: var(--font-size__middle);
    outline: inherit;
}

.modal-denied__content-btn:hover {
    background-color:#57A0D3;
}

.modal-denied__content-btn:active {
    color: rgba(255,255,255, 0.5);
}

@media(max-device-width: 480px){
    .modal-denied__content{
            margin: 20px;
            padding: 30px;
    }
}


</style>