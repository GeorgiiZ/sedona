<template>
    <div class="test-elem">

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

.test-elem {
    height: 50px;
    width: 50px;
    background-color:cornflowerblue;
}

</style>