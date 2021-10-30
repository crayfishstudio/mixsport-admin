<template lang="html">
  <div class="places-photo">
    <v-row class="pt-3">
      <v-col
        cols="3"
        class="d-flex mr-11"
      >
        <v-select
          :items="types"
          label="Действия"
          background-color="white"
          dense
          outlined
          class="mr-3"
          hide-details
        ></v-select>
        <v-btn
        depressed
        class="btn-main"
        height="40px"
        small
        >
          Применить
        </v-btn>
      </v-col>
      <v-col
        cols="4"
        class="d-flex"
      >
        <v-btn
        depressed
        class="btn-main mr-5"
        height="40px"
        small
        >
          зАГРУЗИТЬ ФАЙЛЫ
        </v-btn>
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          color="graylight"
          class="pa-0"
          label="Поиск..."
          single-line
          outlined
          dense
          hide-details
          background-color="white"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="pt-3">
      <v-card>
         <v-container >
           <v-item-group
             v-model="selected"
             multiple
             class="px-3"
           >
             <v-row class="pa-3">
               <v-col
                 v-for="(item, i) in items"
                 :key="i"
                 cols="12"
                 md="3"
               >
                 <v-item v-slot="{ active, toggle }">
                   <v-img
                     :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                     height="150"
                     class="text-right pa-2"
                     @click="toggle"
                   >
                     <v-btn
                       icon
                       color="primary"
                     >
                       <v-icon>
                         {{ active ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
                       </v-icon>
                     </v-btn>
                   </v-img>
                 </v-item>
               </v-col>
             </v-row>
           </v-item-group>
         </v-container>
       </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      items: [
        {
          src: 'backgrounds/bg.jpg',
        },
        {
          src: 'backgrounds/md.jpg',
        },
        {
          src: 'backgrounds/bg-2.jpg',
        },
        {
          src: 'backgrounds/md2.jpg',
        },
        {
          src: 'backgrounds/bg.jpg',
        },
        {
          src: 'backgrounds/md.jpg',
        },
        {
          src: 'backgrounds/bg-2.jpg',
        },
        {
          src: 'backgrounds/md2.jpg',
        },
        {
          src: 'backgrounds/bg.jpg',
        },
        {
          src: 'backgrounds/md.jpg',
        },
        {
          src: 'backgrounds/bg-2.jpg',
        },
        {
          src: 'backgrounds/md2.jpg',
        },
      ],
      selected: [],
    })
  }
}
</script>

<style lang="css" scoped>
.places-photo {
  background-color: #F9F9F9;
  padding: 0;
}
</style>
