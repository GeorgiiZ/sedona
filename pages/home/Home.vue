<template>
    <div>
        <div class="elem-test">
            {{testCaption}}
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
    testCaption: string = "test";
}
</script>

<style>

.elem-test {
    height: 50px;
    width: 50px;
    background-color: blanchedalmond;
}

</style>