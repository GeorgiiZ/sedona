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
        <form class="form">
            <div class="form__row">
                <div class="form__impression">
                    <div class="form__header
                                form__header_centered">
                        ваше общее впечатление:
                    </div>
                    <label class="form__radio">
                        <input type="radio" v-model="impressionChoice" value="positive"/>
                        <span class="form__radio-custom"></span>
                        <span class="form__caption">Скорее положительное</span>
                    </label>
                    <label class="form__radio">
                        <input type="radio" v-model="impressionChoice" value="negative"/>
                        <span class="form__radio-custom"></span>
                        <span class="form__caption">Скорее отрицательное</span>
                    </label>
                    <label class="form__radio">
                        <input type="radio" v-model="impressionChoice" value="hesitate"/>
                        <span class="form__radio-custom"></span>
                        <span class="form__caption">Затрудняюсь ответить</span>
                    </label>
                </div>
                <div class="form__introduce">
                    <div class="form__header">
                        представьтесь:
                    </div>
                    <div class="form__textbox">
                        <label class="form__textbox-caption">имя*:</label>
                        <input type="text" class="form__textbox-input" autocomplete="off" required/>
                    </div>
                    <div class="form__textbox">
                        <label class="form__textbox-caption">фамилия*:</label>
                        <input type="text" class="form__textbox-input" autocomplete="off" required/>
                    </div>
                    <div class="form__textbox">
                        <label class="form__textbox-caption">отчество:</label>
                        <input type="text" class="form__textbox-input" autocomplete="off" required/>
                    </div>
                </div>
            </div>
            <div class="form__row-header">
                <div class="form__row-header-block">
                    <span class="form__divider"></span>
                </div>
                <div class="form__row-header-block 
                            form__header">
                    контактная информация:
                </div>
                <div class="form__row-header-block">
                    <span class="form__divider"></span>
                </div>
            </div>
            <div class="form__row">
                <div class="form__textbox" style="width: 50%;">
                    <label class="form__textbox-caption">телефон*:</label>
                    <div class="form__textbox-input-custom
                                form__textbox-input-phone">
                        <input type="phone" class="form__textbox-input" autocomplete="off" required/>
                        <span class="form__textbox-phone"></span>
                    </div>
                </div>
                <div class="form__textbox" style="width: 50%;">
                    <label class="form__textbox-caption">электронная почта*:</label>
                    <div class="form__textbox-input-custom">
                        <input type="email" class="form__textbox-input" autocomplete="off" required/>
                        <span class="form__textbox-mail"></span>
                    </div>
                </div>
            </div>
            <div class="form__row-header">
                <div class="form__row-header-block">
                    <span class="form__divider"></span>
                </div>
                <div class="form__row-header-block 
                            form__header">
                    посещенные достопримечательности
                </div>
                <div class="form__row-header-block">
                    <span class="form__divider"></span>
                </div>
            </div>
            <div class="form__row
                        form__sights">
                <label class="form__checkbox">
                    <input type="checkbox" id="1" vlaue="devil-brige" v-model="visitedSights"/>
                    <span class="form__checkbox-custom"></span>
                    <span class="form__caption">Мост Дьявола</span>
                </label>
                <label class="form__checkbox">
                    <input type="checkbox"  id="2" vlaue="bell-mountain" v-model="visitedSights"/>
                    <span class="form__checkbox-custom"></span>
                    <span class="form__caption">Гора-Колокол</span>
                </label>
                <label class="form__checkbox">
                    <input type="checkbox"  id="3" vlaue="slide-park" v-model="visitedSights"/>
                    <span class="form__checkbox-custom"></span>
                    <span class="form__caption">Слайд-парк</span>
                </label>
                <label class="form__checkbox">
                    <input type="checkbox"  id="4" vlaue="red-rocks" v-model="visitedSights"/>
                    <span class="form__checkbox-custom"></span>
                    <span class="form__caption">Красные скалы</span>
                </label>
            </div>
        </form>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "@/shared/PageHeader";

@Component({
    components: { Header }
})
export default class SedonaForm extends Vue {
    headerCaption: string = "sedona";
    impressionChoice: string = "positive";
    visitedSights: string [] = <string[]>['devil-brige'] ;
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

.form-page__header-comp {
    width: 100%;
    height: 300px;
}

.form-page__header-caption {
    position: absolute;    
    font-size: var(--font-size__extra-large);
    color: white;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 5px;
}

.form-page__caption {
    margin: 100px auto 0 auto;
    width: 500px;
    text-align: center;
}

.form-page__caption-header {
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size__large);
}

.form-page__caption-paragraph {
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

.form input {
    font-size: var(--font-size__middle);
    font-weight: bold;
}

.form__header {
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
}

.form__header_centered {
    text-align: center;
}

.form__row {
    width: 100%;
    display: flex;
    margin-top: 50px; 
    justify-content: space-between;
}

.form__row-header {
    width: 100%;
    display: flex;
    margin-top: 50px; 
    align-items: center;
}

.form__row-header-block {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 33%; 
    display: flex;
}

.form__radio {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 25px;
}

.form__radio input[type = "radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.form__radio-custom {
    position: relative;
    min-height: 50px;
    min-width: 50px;
    background-color: #eee;
    border-radius: 50%;
}

.form__radio input:checked ~ .form__radio-custom::after  {
    content: "";
    position: absolute;
    top: 13px;
	left: 13px;
    width: 25px;
    height: 25px;
    background-color: black;
    border-radius: 50%;
}

.form__caption {
    margin-left: 25px;
    font-weight: bold;
}

.form__textbox {
    display: flex;
    align-items: center;
    margin-top: 25px;
}

.form__textbox-caption {
    text-transform: uppercase;
    font-size: var(--font-size__lower);
    margin-right: 25px;
}

.form__textbox-input {
    background-color: #eee;
    border : none;
    width: 100%;
    height: 50px;
    padding-left: 15px; 
    text-overflow: ellipsis;
    font-size: var(--font-size__middle);
}

.form__textbox-input_email{
    width: auto;
}


.form__textbox-input:focus{
    outline: none;
}

.form__divider {
    width: 100%;
    border: 1px solid #eee;
    height: 0;
}

.form__impression {
    width: 50%;
    border-right: 1px solid #eee;
}

.form__introduce {
    padding-left: 75px; 
    flex: 1;
}

.form__textbox-input-custom {
    display: flex;
    align-items: center;
    background-color: #eee;
}

.form__textbox-input-phone {
    margin-right: 75px;
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

.form__sights {

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

</style>