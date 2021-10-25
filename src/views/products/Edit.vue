<template lang="html">
  <div class="edit">
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title class="font-weight-medium px-1"> Продукт  № {{ $route.params.id }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        depressed
        outlined
        color="graylight"
        class="bg-white mr-3"
        height="36px"
        small
      >
        Удалить
      </v-btn>
      <v-btn
        depressed
        outlined
        color="graylight"
        class="bg-white mr-3"
        height="36px"
        small
      >
        Посмотреть
      </v-btn>
      <v-btn
        depressed
        color="primary"
        class="font-weight-medium"
      >
        сохранить
      </v-btn>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          class="px-5"
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab
            v-for="item in tabs"
            :key="item"
            :to="item.component"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <Overview/>
      </v-tab-item>
      <v-tab-item>
        <Orders/>
      </v-tab-item>
      <v-tab-item>
        <Certificates/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Overview from '../../components/products/Overview.vue'
import Orders from '../../components/products/Orders.vue'
import Certificates from '../../components/products/Certificates.vue'

export default {
  data: () => ({
    tab: null,
    tabs: [
      'Общая информация',
      'Заказы',
      'Погашение сертификатов',
    ],
  }),
  components: {
    Overview,
    Orders,
    Certificates,
  }
}
</script>

<style lang="scss" scoped>
.edit {
  padding: 0px;
}
</style>
