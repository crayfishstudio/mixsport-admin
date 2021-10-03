<template>
  <v-main class="grey lighten-4">
    <v-app-bar app class="white" height="70px">
      <h2>Локация №412</h2>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        large
        height="45px"
        class="mr-3"
      >
        Удалить
      </v-btn>
      <v-btn
        outlined
        large
        height="45px"
        class="mr-3"
      >
        Посмотреть
      </v-btn>
      <v-btn
        elevation="2"
        large
        height="45px"
        class="primary white--text"
      >
        Сохранить
      </v-btn>
      <template v-slot:extension>
        <v-tabs 
          v-model="tab"
          align-with-title
          class="tabs"
        >
          <v-tab
            v-for="item in items"
            :key="item.tab"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    
    <v-tabs-items v-model="tab" class="grey lighten-4">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <template v-if="item.content==1">
          <Info/>
        </template>
        <template v-if="item.content==2">
          <Photos/>
        </template>
        <template v-if="item.content==3">
          <Services/>
        </template>
        <template v-if="item.content==4">
          <Affiche/>
        </template>
      </v-tab-item>
    </v-tabs-items>
  </v-main>
</template>

<script>
  import Info from '../components/Info.vue';
  import Photos from '../components/Photos.vue';
  import Services from '../components/Services.vue';
  import Affiche from '../components/Affiche.vue';

  export default {
    components: {
      Info,
      Photos,
      Services,
      Affiche,
    },
    data () {
      return {
        tab: null,
        items: [
          { tab: 'Общая информация', content: '1' },
          { tab: 'Фото', content: '2' },
          { tab: 'Услуги', content: '3' },
          { tab: 'Афиша', content: '4' },
          { tab: 'Отзывы', content: '5' },
          { tab: '3D туры', content: '6' },
          { tab: 'Связанные места', content: '7' },
          { tab: 'Файлы', content: '8' },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .tabs {
    border-top: 1px solid #EFEFEF;
  }
</style>