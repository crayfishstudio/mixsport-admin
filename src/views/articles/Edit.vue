<template lang="html">
  <div class="create">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium"> Cтатья № {{ $route.params.id }}</v-toolbar-title>
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
        'Фото',
        'Услуги',
        'Афиша',
        'Отзывы',
        '3D туры',
        'Связанные места',
        'Файлы',
      ],
    }),
  }
</script>

<style lang="scss" scoped>

</style>
