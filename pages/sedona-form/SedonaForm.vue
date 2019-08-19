<template>
    <div class="form">
        <div class="form__header">
            <Header class="form__header-comp"/>
            <span class="form__header-caption">{{ headerCaption }}</span>
        </div>
        <div class="form__caption">

        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "../../shared/PageHeader";

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

}

</style>