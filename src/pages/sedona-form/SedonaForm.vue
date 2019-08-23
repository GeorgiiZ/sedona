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
                    <div class="form__header">
                        ваше общее впечатление:
                    </div>
                    <label class="form__radio">
                        <input type="radio"/>
                        Скорее положительное
                    </label>
                    <div>
                        Скорее отрицательное
                    </div>
                    <div>
                        Затрудняюсь ответить
                    </div>
                </div>
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
    margin-top: 50px; 
    font-size: var(--font-size__middle);
}

.form__header {
    text-transform: uppercase;
    font-weight: bold;
}

.form__row {
    display: inline-block; 
}

.form__radio {
    font-weight: bold;
}


</style>