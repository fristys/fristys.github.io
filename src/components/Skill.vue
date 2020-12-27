<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Skill extends Vue {
  @Prop({ type: String, required: true })
  title!: string;
}
</script>

<style scoped lang="scss">
div {
  cursor: default;
  user-select: none;
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  transition: transform 0.25s;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;

  @media (prefers-color-scheme: dark) {
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.5);
  }

  @media (hover) {
    &:hover {
      transform: scale(1.05);

      @media (prefers-reduced-motion) {
        transform: none;
      }
    }
  }

  @media print {
    display: inline-block;
    font-weight: normal;
    background: transparent !important;
    border-radius: none;
    color: black !important;
    padding: 0;
    margin-right: 0.25rem;

    &::after {
      content: ',';
    }

    &:last-child {
      &::after {
        content: '';
      }
    }
  }
}
</style>
