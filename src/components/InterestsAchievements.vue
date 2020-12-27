<template>
  <div v-if="personalInformation" class="container">
    <section>
      <div>
        <h3>Notable achievements</h3>

        <p
          v-for="achievement in personalInformation.achievements"
          :key="achievement"
        >
          {{ achievement }}
        </p>
      </div>

      <div>
        <h3>Interests</h3>

        <p>
          {{ personalInformation.interests.join(', ') }}
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { PersonalInformation } from '@/models/personal-information.model';
import { metadataService } from '@/services/metadata.service';

@Component
export default class InterestsAchievements extends Vue {
  personalInformation: PersonalInformation | null = null;

  created(): void {
    this.personalInformation = metadataService.personal;
  }
}
</script>

<style scoped lang="scss">
.container {
  padding-bottom: 2rem;
}

section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media print {
    display: block;

    div {
      margin-bottom: 2rem;
    }
  }

  h3 {
    @media print {
      margin-top: 0;
    }
  }
}
</style>
