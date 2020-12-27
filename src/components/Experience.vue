<template>
  <div class="container">
    <h3>Professional experience</h3>

    <div class="experience">
      <job
        v-for="(item, index) in experienceInformation.professional"
        :key="item.label + index"
        :data="item"
        class="job"
      />

      <job
        v-for="(item, index) in experienceInformation.freelance"
        :key="item.label + index"
        :data="item"
        class="job"
      />
    </div>

    <div class="skills">
      <h3>Experience and skillset</h3>

      <h4>Excellent</h4>

      <div class="list">
        <skill
          v-for="skill in experienceInformation.skills.excellent"
          :key="skill"
          :title="skill"
        />
      </div>

      <h4>Good</h4>

      <div class="list">
        <skill
          v-for="skill in experienceInformation.skills.good"
          :key="skill"
          :title="skill"
        />
      </div>

      <h4>Average</h4>

      <div class="list">
        <skill
          v-for="skill in experienceInformation.skills.average"
          :key="skill"
          :title="skill"
        />
      </div>

      <h4>Vague</h4>

      <div class="list">
        <skill
          v-for="skill in experienceInformation.skills.vague"
          :key="skill"
          :title="skill"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { ExperienceInformation } from '@/models/experience-information.interface';

import { metadataService } from '@/services/metadata.service';

import Job from './Job.vue';
import Skill from './Skill.vue';

@Component({
  components: {
    Job,
    Skill
  }
})
export default class Experience extends Vue {
  experienceInformation: ExperienceInformation | null = null;

  created(): void {
    this.experienceInformation = metadataService.experience;
  }
}
</script>

<style scoped lang="scss">
.container {
  padding-bottom: 2rem;
}

.experience {
  page-break-before: avoid;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    row-gap: 1rem;
  }

  @media print {
    display: block;
    border-bottom: 1px solid #cdcdcd;
    margin-bottom: 1rem;
  }

  .job {
    padding: 1rem;
    background: rgba(0, 0, 0, 0.025);
    transition: transform 0.25s;
    page-break-inside: avoid;

    @media (hover) {
      &:hover {
        transform: scale(1.05);

        @media (prefers-reduced-motion) {
          transform: none;
        }
      }
    }

    @media print {
      padding: 0;
      background: transparent !important;
      margin-bottom: 1.5rem;
    }

    @media (prefers-color-scheme: dark) {
      background: rgba(255, 255, 255, 0.025);
    }

    @media screen and (max-width: 767px) {
      &:nth-child(odd) {
        background: rgba(0, 0, 0, 0.05);

        @media (prefers-color-scheme: dark) {
          background: rgba(255, 255, 255, 0.05);
        }
      }
    }

    @media print, screen and (min-width: 768px) {
      &:nth-child(4n + 1),
      &:nth-child(4n) {
        background: rgba(0, 0, 0, 0.05);

        @media (prefers-color-scheme: dark) {
          background: rgba(255, 255, 255, 0.05);
        }
      }
    }
  }
}

.skills {
  margin-top: 4rem;

  @media print {
    margin-top: 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #cdcdcd;
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  h4 {
    margin: 0;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media print {
      display: block;

      &::after {
        display: block;
        content: '';
        clear: both;
      }
    }
  }
}
</style>
