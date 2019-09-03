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
            <div class="form__row">
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
                        <input type="text" class="form__txt-input form__textbox-input"  v-model="personData.name" autocomplete="off" required/>
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
            <DividerHeader headerText="контактная информация:"/>
            <div class="form__contacts">
                <div class="form__textbox" >
                    <label class="form__caption_light">телефон*:</label>
                    <div class="form__textbox-input-custom
                                form__textbox-input-phone">
                        <input type="phone" class="form__txt-input form__textbox-input" v-model="personData.phoneNumber" autocomplete="off" required/>
                        <span class="form__textbox-phone"></span>
                    </div>
                </div>
                <div class="form__textbox">
                    <label class="form__caption_light">электронная почта*:</label>
                    <div class="form__textbox-input-custom">
                        <input type="email" class="form__txt-input form__textbox-input" v-model="personData.email" autocomplete="off" required/>
                        <span class="form__textbox-mail"></span>
                    </div>
                </div>
            </div>
            <DividerHeader headerText="посещенные достопримечательности"/>
            <div class="form__row
                        form__sights">
                <label class="form__checkbox" v-for="(sight, key) in sightList" :key="key" >
                    <input type="checkbox" :value="sight[0]" v-model="recall.visitedSights"/>
                    <span class="form__checkbox-custom"></span>
                    <span class="form__caption">{{ sight[1] }}</span>
                </label>
            </div>
            <DividerHeader headerText="опишите свои эмоции"/>
            <div class="form__row">
                <textarea name=""
                        class="form__txt-input
                                form__textarea"
                        v-model.trim="recall.impressionDesc"/>
            </div>
            <div class="form__row
                        form__row_bottom">
                <button  type="submit" 
                         class="form__submit"  @click.prevent="sendForm()">отправить отзыв</button>
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
            document.forms[0].submit();
            this.modalAcceptVisiual = true;
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
    margin: 100px auto 0 auto;
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

.form__header{
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
}

.form__header_centered{
    text-align: center;
}

.form__contacts {
    display: flex;
    align-items: center;
    margin-top: 50px; 
    width: 100%;
}

.form__row{
    width: 100%;
    display: flex;
    margin-top: 50px; 
    align-items: center;
}

.form__row_bottom{
    margin-bottom: 50px;
}

.form__radio{
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 25px;
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
    width: 50%;
    border-right: 1px solid #eee;
}

.form__introduce{
    padding-left: 75px; 
    flex: 1;
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
    margin-top: 25px;
}


.form__textbox-input{
    height: 50px;
    padding-left: 15px; 
    text-overflow: ellipsis;
}

.form__textbox-input-custom{ 
    display: flex;
    align-items: center;
    background-color: #eee;
}

.form__textbox-input-phone{
    margin-right: 75px;
} 

.form__textbox-phone{
    background: url("../../assets/sprite/sprite.svg#phone") no-repeat;
    background-position: center;
    background-size: 80%; 
    background-color: gainsboro;
    width: 75px;
    height: 50px;
}

.form__textbox-mail{
    background: url("../../assets/sprite/sprite.svg#mail") no-repeat;
    background-position: center;
    background-size: 80%; 
    background-color: gainsboro;
    width: 75px;
    height: 50px;
}


.form__sights input[type="checkbox"]{
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.form__checkbox {
    display: flex;
    align-items: center;
    flex: 1;
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

.form__textarea{
    width: 100%;
    height : 200px;
    padding: 15px;
    resize: none;
}

.form__submit{
    width: 50%;
    height: 50px;
    border: none;
    background-color: #95c8d8;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: var(--font-size__middle);
}

@media (min-width: 481px) and (max-width:768px){
    
    .form {
        padding: 0 50px;
    }

    .form__contacts {
        flex-direction: column; 
    }
}

</style>