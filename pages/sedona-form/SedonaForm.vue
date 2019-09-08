<template>
    <div class="form-page">
        <div class="form-page__header">
            <Header class="form-page__header-comp"/>
            <span class="form-page__header-caption">{{ headerCaption }}</span>
        </div>
         <div class="form-page__caption">
            <div class="form-page__caption-header">оставьте свой отзыв</div>
            <div class="form-page__caption-paragraph">помогите нашим отелям стать лучше! оставьте отзыв о них а также о посещенных ввами достопримечательностях</div>
        </div>
        <form class="form" method="GET" action="#">
            <div class="form__row-first">
                <div class="form__impression">
                    <div class="form__header
                                form__header_centered">
                        ваше общее впечатление:
                    </div>
                    <label class="form__radio"  v-for="(impression, key) in impressionList" :key="key" >
                        <input type="radio" v-model="recall.impression" :value="impression[0]"/>
                        <span class="form__radio-custom"></span>
                        <span class="form__caption">{{ impression[1] }}</span>
                    </label>
                </div>
                <div class="form__introduce">
                    <div class="form__header">
                        представьтесь:
                    </div>
                    <div class="form__textbox">
                        <label class="form__caption_light">имя*:</label>
                        <input type="text" class="form__txt-input form__textbox-input" v-model="personData.name" autocomplete="off" required/>
                    </div>
                    <div class="form__textbox">
                        <label class="form__caption_light">фамилия*:</label>
                        <input type="text" class="form__txt-input form__textbox-input" v-model="personData.surname" autocomplete="off" required/>
                    </div>
                    <div class="form__textbox">
                        <label class="form__caption_light">отчество:</label>
                        <input type="text" class="form__txt-input form__textbox-input" v-model="personData.middlename" autocomplete="off" required/>
                    </div>
                </div>
            </div>
            <DividerHeader class="form__divider" headerText="контактная информация:"/>
            <div class="form__contacts">
                <div class="form__textbox
                            form__textbox_contacts">
                    <label class="form__caption_light">телефон*:</label>
                    <div class="form__textbox-input-custom">
                        <input type="phone" class="form__txt-input form__textbox-input" v-model="personData.phoneNumber" autocomplete="off" required/>
                        <span class="form__textbox-phone"></span>
                    </div>
                </div>
                <div class="form__textbox
                            form__textbox_contacts">
                    <label class="form__caption_light">электронная почта*:</label>
                    <div class="form__textbox-input-custom">
                        <input type="email" class="form__txt-input form__textbox-input" v-model="personData.email" autocomplete="off" required/>
                        <span class="form__textbox-mail"></span>
                    </div>
                </div>
            </div>
            <DividerHeader class="form__divider" headerText="посещенные достопримечательности"/>
            <div class="form__row
                        form__sights">
                <label class="form__checkbox" v-for="(sight, key) in sightList" :key="key" >
                    <input type="checkbox" :value="sight[0]" v-model="recall.visitedSights"/>
                    <span class="form__checkbox-custom"></span>
                    <span class="form__caption">{{ sight[1] }}</span>
                </label>
            </div>
            <DividerHeader class="form__divider" headerText="опишите свои эмоции"/>
            <div class="form__row">
                <textarea name=""
                        class="form__txt-input
                                form__textarea"
                        v-model.trim="recall.impressionDesc"/>
            </div>
            <div class="form__row
                        form__row_bottom">
                <button  type="submit" 
                         class="form__submit" @click.prevent="sendForm()">отправить отзыв</button>
                <span class="form__caption_light
                             form__caption_light-bottom">*-обязательные поля</span>
            </div>
        </form>
        <ModalAccept v-show="modalAcceptVisiual" @onModalClosed="onModalAcceptClosed"/>
        <ModalDenied v-show="modalDeniedVisual" @onModalClosed="modalDeniedVisual=false"/>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "@/shared/PageHeader.vue";
import DividerHeader from "./components/DividerHeader.vue";
import ModalAccept from "./components/ModalAccept.vue";
import ModalDenied from "./components/ModalDenied.vue";



import { SedonaRecall } from "@/service/models/SedonaRecall";
import { PersonalData } from "@/service/models/PersonalData";

@Component({
    components: { Header, DividerHeader, ModalAccept, ModalDenied }
})
export default class SedonaForm extends Vue {
    headerCaption: string = "sedona";
    impressionList: Map<string, string> = new Map([
        ["positive","Скорее положительное"],
        ["negative", "Скорее отрицательное"],
        ["hesitate", "Затрудняюсь ответить"]
    ])
    sightList: Map<string, string> = new Map([
        ['red-rocks', 'Красные скалы'],
        ['slide-park', 'Слайд-парк'],
        ['bell-mountain', 'Гора-Колокол'],
        ['devil-brige', 'Мост Дьявола']
    ]);

    modalAcceptVisiual: boolean = false;
    modalDeniedVisual: boolean = false;
    recall: SedonaRecall = new SedonaRecall();
    personData: PersonalData = new PersonalData();

    sendForm(): void {
        if(this.recall.validateData() && this.personData.validateData()){
            this.modalAcceptVisiual = true;
            document.forms[0].submit();
        }
        else {
            this.modalDeniedVisual = true; 
        }
    }
    
    onModalAcceptClosed(): void {
        this.modalAcceptVisiual = false;
        this.recall = new SedonaRecall();
        this.personData = new PersonalData();
    }
}

</script>

<style>

.form-page {
    display: flex;
    flex-direction: column;
}

.form-page__header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form-page__header-comp{
    width: 100%;
    height: 300px;
}

.form-page__header-caption{
    position: absolute;    
    font-size: var(--font-size__extra-large);
    color: white;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 5px;
}

.form-page__caption{
    margin: 0 auto;
    padding: 70px;
    max-width: 500px;
    text-align: center;
}

.form-page__caption-header{
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size__large);
}

.form-page__caption-paragraph{
    text-transform: uppercase;
    margin-top: 25px; 
    line-height: 180%;
}

.form {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size__middle);
    padding: 0 150px;
}

.form__divider{
    margin-top: 50px; 
}

.form__header{
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    margin-bottom: 50px;
}

.form__header_centered{
    text-align: center;
}

.form__contacts {
    display: flex;
    /* align-items: center; */
    margin-top: 50px; 
    width: 100%;
}

.form__row{
    width: 100%;
    display: flex;
    margin-top: 50px; 
    align-items: center;
}

.form__row-first{
    display: flex;
}

.form__row_bottom{
    margin-bottom: 50px;
}

.form__radio{
    position: relative;
    display: flex;
    align-items: center;
    padding: 15px 0;
    width: 100%;
}

.form__radio input[type = "radio"]{
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.form__radio-custom{
    position: relative;
    min-height: 50px;
    min-width: 50px;
    background-color: #eee;
    border-radius: 50%;
}

.form__radio input:checked ~ .form__radio-custom::after{
    content: "";
    position: absolute;
    top: 13px;
	left: 13px;
    width: 25px;
    height: 25px;
    background-color: black;
    border-radius: 50%;
}

.form__caption{
    margin-left: 25px;
    font-weight: bold;
}

.form__caption_light{
    text-transform: uppercase;
    font-size: var(--font-size__lower);
    margin-right: 25px; 
}

.form__caption_light-bottom {
    margin-left: auto;
    margin-right: 0; 
}

.form__impression{
    display: flex;
    flex: 1;
    flex-direction: column;
    border-right: 2px solid #eee;
    width: 50%;
}

.form__introduce{
    display: flex;
    flex-direction: column;
    padding-left: 80px; 
}

.form__txt-input{
    background-color: #eee;
    border : none;
    width: 100%;
    font-size: var(--font-size__middle);
    font-weight: bold;
}

.form__txt-input:focus{
    outline: none;
}

.form__textbox{
    display: flex;
    align-items: center;
    padding: 15px 0;
}


.form__textbox-input{
    height: 50px;
    padding-left: 15px; 
    text-overflow: ellipsis;
}

.form__textbox-input-custom{ 
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #eee;
}

.form__textbox-phone {
    background: url("../../assets/sprite/sprite.svg#phone") no-repeat;
    background-position: center;
    background-size: 80%; 
    background-color: gainsboro;
    width: 75px;
    height: 50px;
}

.form__textbox-mail {
    background: url("../../assets/sprite/sprite.svg#mail") no-repeat;
    background-position: center;
    background-size: 80%; 
    background-color: gainsboro;
    width: 75px;
    height: 50px;
}

.form__textbox_contacts {
    padding: 25px; 
}

.form__sights {
    display: flex;
    flex-wrap: wrap;
}

.form__sights input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.form__checkbox {
    display: flex;
    align-items: center;
    flex: 1;
    padding: 10px;
}

.form__checkbox-custom {
    position: relative;
    min-height: 50px;
    min-width: 50px;
    background-color: #eee;
}

.form__checkbox-custom {
    width: 50px;
    height: 50px;
}

.form__sights input:checked ~ .form__checkbox-custom {
    background: url("../../assets/sprite/sprite.svg#tick") no-repeat;
    width: 50px;
    height: 50px;
    background-position: center;
    background-color: #eee;
}

.form__textarea {
    width: 100%;
    height : 120px;
    padding: 15px;
    resize: none;
}

.form__submit {
    height: 50px;
    border: none;
    width: 50%;
    background-color: #95c8d8;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: var(--font-size__middle);
    outline: inherit;
}

.form__submit:hover {
    background-color:#57A0D3;
}

.form__submit:active {
    color: rgba(255,255,255, 0.5);
}


@media (min-device-width: 481px) and (max-device-width:768px){
    
    .form {
        padding: 0 50px;
    }

    .form__sights{
        padding: 25px 0;
        max-width: 70%;
        margin: 0 auto;
    }

    .form__contacts {
        flex-direction: column; 
        justify-content: flex-start;
    }

    .form__textbox_contacts{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .form__textbox-input-custom {
        margin-top: 10px;
    }

    .form__header_centered {
        text-align:inherit;
    }

    .form__impression{
        padding-right: 0;
    }

    .form__introduce{
        padding-left: 25px;
        width: 48%;
    }
}

@media (max-device-width: 481px){

    .form {
        padding: 0;
    }

    .form__divider {
        margin: 0;
    }

    .form__row{
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
        width: 85%;
        padding: 25px;
    }

    .form__row-first {
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
        width: 85%;
    }

    .form__header{
        margin: 0;
        text-align: center;
        padding-bottom: 15px; 
    }

    .form__impression {
        border-top: 2px solid #eee; 
        border-right: none; 
        padding: 20px 25px;
        width: 100%;
        flex: 1;
        order: 2;
    }

    .form__introduce {
        border-top: 2px solid #eee; 
        padding: 20px 25px; 
        width: 100%;
        order: 1;
    }

    .form__contacts {
        margin: 0;
        flex-direction: column; 
        justify-content: flex-start;
    }

     .form__textbox_contacts{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .form__textbox-input-custom {
        margin-top: 10px;
    }

    .form__caption_light-bottom{
        display: none;
    }

    .form__submit {
        width: 100%;
    }

    .form__textarea {
        width: 90%;
    }

}

</style>