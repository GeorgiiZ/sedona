<template>
    <div class="form__divider-row">
        <div class="form__divider-block">
            <span class="form__divider-line"></span>
        </div>
        <div class="form__divider-block 
                    form__divider-header">
             {{headerText}}
        </div>
        <div class="form__divider-block">
            <span class="form__divider-line"></span>
        </div>
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
    margin-top: 50px; 
    align-items: center;
}

.form__divider-block {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 30%; 
    display: flex;
}

.form__divider-line {
    width: 100%;
    border: 1px solid #eee;
    height: 0;
}

.form__divider-header{
    text-transform: uppercase;
    font-weight: bold;
    width: 40%;
}

</style>