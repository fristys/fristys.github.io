<template>
  <article class="job-position">
    <h5 v-if="data.period">
      {{ data.period }}
    </h5>

    <h4>
      <span>{{ data.position }}</span>

      <template v-if="data.url">
        <a :href="data.url" :target="data.target || '_blank'" rel="nofollow">
          {{ data.label }}
        </a>
      </template>

      <template v-else>
        {{ data.label }}
      </template>
    </h4>

    <p>{{ data.description }}</p>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ProfessionalExperience } from '@/models/professional-experience.model';

@Component
export default class Job extends Vue {
  @Prop({ type: Object, required: true })
  data!: ProfessionalExperience;
}
</script>

<style scoped lang="scss">
h5 {
  margin: 0;
  padding: 0;
  font-weight: normal;
  opacity: 0.75;
}

h4 {
  margin-top: 0.5rem;

  @media print {
    margin-bottom: 0;
  }

  a,
  a:visited {
    opacity: 0.75;
    font-weight: normal;

    @media print {
      font-size: .9rem;
    }
  }

  span {
    &::after {
      content: ', ';
    }
  }
}

p {
  padding-bottom: 0;
  margin-bottom: 0;
  line-height: normal;

  @media print {
    margin-top: 0;
    padding-top: 0;
    page-break-inside: avoid;
  }
}
</style>
