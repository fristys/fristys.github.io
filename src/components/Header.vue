<template>
  <div v-if="personalInformation">
    <header>
      <div class="container">
        <div>
          <h1>
            {{ personalInformation.name }}<span>.</span>
          </h1>

          <h2>
            {{ personalInformation.occupation }}
          </h2>
        </div>

        <aside>
          <ul>
            <li>
              <a :href="'mailto:' + personalInformation.email" rel="nofollow">
                {{ personalInformation.email }}
              </a>
            </li>

            <li>
              <a
                :href="personalInformation.website.url"
                target="_blank"
                rel="nofollow"
              >
                {{ personalInformation.website.label }}
              </a>
            </li>

            <li>
              <a :href="'tel:' + personalInformation.phone" rel="nofollow">
                {{ prettyPhoneNo }}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </header>

    <div class="container">
      <personal :data="personalInformation" />
    </div>
  </div>
</template>

<script lang="ts">
import { PersonalInformation } from '@/models/personal-information.model';
import { metadataService } from '@/services/metadata.service';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Personal from './Personal.vue';

@Component({
  components: {
    Personal
  }
})
export default class Header extends Vue {
  personalInformation: PersonalInformation | null = null;

  get prettyPhoneNo(): string {
    if (!this.personalInformation) {
      return '';
    }

    if (this.personalInformation.phone.startsWith('+')) {
      return `+${this.personalInformation.phone
        .substr(1)
        .match(/.{1,2}/g)
        ?.join(' ')}`;
    } else {
      return this.personalInformation.phone.match(/.{1,2}/g)?.join(' ') ?? '';
    }
  }

  created(): void {
    this.personalInformation = metadataService.personal;
  }
}
</script>

<style scoped lang="scss">
header {
  background-color: var(--theme-bg-top);
  padding: 1rem 0;

  @media print {
    background-color: transparent;
    border-bottom: 1px solid #cdcdcd;
  }

  h1,
  h2 {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin-bottom: 0.15rem;

    span {
      color: var(--theme-ternary);
      user-select: none;

      @media print {
        display: none;
      }
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: normal;
    opacity: 0.75;
  }

  .container {
    display: flex;

    div {
      flex: 1;
    }

    aside {
      text-align: right;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          display: block;
          margin-bottom: 2.5px;
        }
      }
    }
  }
}
</style>
