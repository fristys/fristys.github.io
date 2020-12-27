<template>
  <section id="personal-information">
    <div class="col">
      <article>
        <picture>
          <source
            srcset="/assets/img/profile.webp"
            media="print"
            type="image/webp"
          />
          <source
            srcset="/assets/img/profile.jpg"
            media="print"
            type="image/jpeg"
          />
          <source
            srcset="/assets/img/profile-light.webp"
            media="(prefers-color-scheme: light)"
            type="image/webp"
          />
          <source
            srcset="/assets/img/profile-light.jpg"
            media="(prefers-color-scheme: light)"
            type="image/jpeg"
          />
          <source
            srcset="/assets/img/profile.webp"
            media="(prefers-color-scheme: dark)"
            type="image/webp"
          />
          <source
            srcset="/assets/img/profile.jpg"
            media="(prefers-color-scheme: dark)"
            type="image/jpeg"
          />
          <img src="/assets/img/profile.jpg" loading="lazy" :alt="data.name" />
        </picture>

        <div>
          <h3>Personal information</h3>

          <information-line title="Address" :description="data.address" />
          <information-line
            title="Date of birth"
            :description="data.birthday"
          />
          <information-line
            title="Nationality"
            :description="data.nationality"
          />
          <information-line
            title="Spoken languages"
            :description="data.languages.join(', ')"
          />
        </div>
      </article>
    </div>

    <div class="col">
      <h3>Education</h3>

      <information-line
        v-for="education in data.education"
        :key="education.name"
        :title="education.period"
        :description="education.name"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PersonalInformation } from '@/models/personal-information.model';

import InformationLine from './InformationLine.vue';

@Component({
  components: {
    InformationLine
  }
})
export default class Personal extends Vue {
  @Prop({ type: Object, required: true })
  data!: PersonalInformation;
}
</script>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2rem 0;

  @media print {
    padding-bottom: 2rem;
    border-bottom: 1px solid #cdcdcd;
  }

  .col {
    h3 {
      margin-top: 0;
    }
  }

  article {
    display: flex;

    @media print {
      display: block;

      h3 {
        display: none;
      }

      .information-line {
        margin-bottom: 0 !important;
      }
    }

    picture {
      width: 250px;
      height: 250px;
      margin-right: 1rem;
      box-shadow: 0 0.15rem 0.25rem 0.2rem rgba(0, 0, 0, 0.15);

      @media (prefers-color-scheme: dark) {
        box-shadow: 0 0.15rem 0.25rem 0.2rem rgba(0, 0, 0, 0.15);
      }

      @media print {
        display: inline-block;
        float: left;
        width: 100px;
        height: 100px;
        box-shadow: none;
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>
