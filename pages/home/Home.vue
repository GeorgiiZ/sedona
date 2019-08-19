<template>
    <div class="home">
        <div class="home__header">
            <Header class="home__header-comp"/>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "../../shared/PageHeader";

@Component({
    components: { Header }
})
export default class Home extends Vue {
    headerCaption: string = "sedona";
}
</script>

<style>

.home__header-comp {
}

.home__header-caption {

}

</style>