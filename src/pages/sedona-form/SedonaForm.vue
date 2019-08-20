<template>
    <div class="form">
        <div class="form__header">
            <Header class="form__header-comp"/>
            <span class="form__header-caption">{{ headerCaption }}</span>
        </div>
         <div class="form__caption">
            <div class="form__caption-header">оставьте свой отзыв</div>
            <div class="form__caption-paragraph">помогите нашим отелям стать лучше! оставьте отзыв о них а также о посещенных ввами достопримечательностях</div>
        </div>
        <form class="form-content">
            <div class="form__row">
                <div class="form__impression">
                    <div class="form-content__header">
                        ваше впечатление:
                    </div>
                    <div>
                        Скорее положительное
                    </div>
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

.form {
    display: flex;
    flex-direction: column;
}


.form__header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form__header-comp {
    width: 100%;
    height: 300px;
}

.form__header-caption {
    position: absolute;    
    font-size: var(--font-size__extra-large);
    color: white;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 5px;
}

.form__caption {
    margin: 100px auto 0 auto;
    width: 500px;
    text-align: center;
}

.form__caption-header {
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--font-size__large);
}

.form__caption-paragraph {
    text-transform: uppercase;
    margin-top: 25px; 
    line-height: 180%;
}

.form-content {
    margin-top: 50px; 
    font-size: var(--font-size__middle);
}

.form-content__header {
    text-transform: uppercase;
    font-weight: bold;
}


</style>