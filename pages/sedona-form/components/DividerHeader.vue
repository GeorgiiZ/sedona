<template>
    <div class="form__divider-row">
        <div class="form__divider-line"></div>
        <div class="form__divider-header">
             <span class="form__divider-text">{{headerText}}</span>
        </div>
        <div class="form__divider-line"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DividerHeader extends Vue{
    @Prop({default: ''}) headerText!: string;
}
</script>

<style>

.form__divider-row {
    width: 100%;
    display: flex;
    /* margin-top: 50px;  */
    align-items: center;
}

.form__divider-line {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%; 
    display: flex;
    border: 1px solid #eee;
}

.form__divider-header{
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    width: 40%;
}

.form__divider-text{
    max-width: 300px;
}

@media (max-device-width: 481px){

    .form__divider-header{
        border-top: 2px solid #eee; 
        width: 100%;
        padding-top: 25px; 
    }

    .form__divider-line{
        display: none;
    }
}

</style>