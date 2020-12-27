<template>
  <div id="app">
    <Header />
    <Experience />
    <InterestsAchievements />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/components/Header.vue';
import Experience from '@/components/Experience.vue';
import InterestsAchievements from '@/components/InterestsAchievements.vue';

@Component({
  components: {
    Header,
    Experience,
    InterestsAchievements
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../node_modules/modern-normalize/modern-normalize.css';

@font-face {
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('IBM Plex Serif'), local('IBMPlexSerif'),
    url(/assets/fonts/IBMPlexSerif-Regular.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('IBM Plex Sans'), local('IBMPlexSans'),
    url(/assets/fonts/IBMPlexSans-Regular.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

:root {
  --theme-bg: #eff1ec;
  --theme-bg-top: #e0e4da;
  --theme-text: #16171c;
  --theme-ternary: #48bb78;

  @media (prefers-color-scheme: dark) {
    --theme-bg: #16171c;
    --theme-bg-top: #0b0b0e;
    --theme-text: #eff1ec;
    --theme-ternary: #276749;
  }
}

html,
body {
  height: 100%;
}

html {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-size: 16px;
  font-family: 'IBM Plex Sans', 'system-ui', '-apple-system',
    'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial',
    'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--theme-bg);
  color: var(--theme-text);
  scrollbar-color: rgba(0, 0, 0, 0.35);

  @media print {
    background-color: white !important;
    color: black !important;
  }

  &::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    cursor: move;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.25);
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    scrollbar-color: rgba(0, 0, 0, 0.75);

    &::-webkit-scrollbar {
      width: 1rem;
      height: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.75);
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.35);
    }
  }
}

body {
  font-size: 16px;
  font-family: 'IBM Plex Sans', 'system-ui', '-apple-system',
    'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial',
    'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a,
a:visited {
  font-size: 1.05rem;
  color: var(--theme-text);
  text-decoration: none;
  transition: border-color 0.75s;
  border-bottom: 2px solid transparent;

  @media (hover) {
    &:hover {
      border-color: var(--theme-ternary);
    }
  }

  @media print {
    color: var(--theme-text) !important;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'IBM Plex Serif', 'system-ui', '-apple-system',
    'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial',
    'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
}

.container {
  margin: 0 auto;
  width: 91.666667%; // 11/12

  @media screen and (min-width: 1600px) {
    width: 75%; // 9/12
  }

  @media print {
    width: 100%;
  }
}
</style>
