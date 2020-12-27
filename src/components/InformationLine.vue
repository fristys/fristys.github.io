<template>
  <div class="information-line">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InformationLine extends Vue {
  @Prop({ type: String, required: true })
  title!: string;

  @Prop({ type: String, required: true })
  description!: string;
}
</script>

<style scoped lang="scss">
div {
  margin-bottom: 1rem;

  h4 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: .25rem 0;
    opacity: .75;
  }
}
</style>
