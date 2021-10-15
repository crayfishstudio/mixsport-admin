<template lang="html">
  <div class="create px-3">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium"> Локация № {{ $route.params.id }}</v-toolbar-title>
    </v-app-bar>
    <v-tabs
      v-model="tab"
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  export default {
    data: () => ({
      tab: null,
      items: [
        'web',
        'shopping',
        'videos',
        'images',
        'news',
      ],
    }),
  }
</script>

<style lang="scss" scoped>

</style>
