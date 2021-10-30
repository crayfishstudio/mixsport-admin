import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E4002B', // #E4002B
        graydark: '#2B2B2B',
        graylight: '#767676',
        graylightsecond: '#ECECEC',
        white: '#FFF',
        grey: '#6C6C6C',
        mgrey: '#979797',
        dirtygrey: '#DADADA',

        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
})
