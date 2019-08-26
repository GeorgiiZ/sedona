<template>
    <div class="form__row-header">
        <div class="form__row-header-block">
            <span class="form__divider"></span>
        </div>
        <div class="form__row-header-block 
                    form__header">
             {{headerText}}
        </div>
        <div class="form__row-header-block">
            <span class="form__divider"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";


export default class DividerHeader{
    @Prop() headerText!: string;
}
</script>

<style>

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

.form__divider {
    width: 100%;
    border: 1px solid #eee;
    height: 0;
}

</style>