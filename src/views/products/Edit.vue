<template lang="html">
  <div class="create">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium"> Продукт  № {{ $route.params.id }}</v-toolbar-title>

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
        @click="creationSidebar = !creationSidebar"
      >
        сохранить
      </v-btn>
    </v-app-bar>
    <v-tabs
      v-model="tab"
      align-with-title
      class="px-0"
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

  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    tabs: [
      'Общая информация',
      'Заказы',
      'Погашение сертификатов',
    ],
  }),
}
</script>

<style lang="scss" scoped>

</style>
