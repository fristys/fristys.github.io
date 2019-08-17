import { lighten } from 'polished';

export default {
  header: {
    background: '#2C3A47',
    color: '#FFF',
    titleBorder: 'rgba(0,0,0, .15)',
    subtitle: lighten(0.25, '#2C3A47'),
    link: lighten(0.25, '#2C3A47'),
    linkHover: '#FD7272'
  },

  headerPrint: {
    background: 'transparent',
    color: '#000',
    subtitle: lighten(0.25, '#000'),
    link: lighten(0.25, '#000')
  },

  personal: {
    color: '#2C3A47',
    rowtitle: lighten(0.25, '#2C3A47'),
  },

  personalPrint: {
    color: '#000',
    rowtitle: lighten(0.25, '#000')
  },

  experience: {
    color: '#2C3A47',
    rowtitle: lighten(0.25, '#2C3A47'),
    rowtitleAlt: lighten(0.25, '#000')
  },

  experiencePrint: {
    color: '#000',
    rowtitle: lighten(0.25, '#000')
  }
};
