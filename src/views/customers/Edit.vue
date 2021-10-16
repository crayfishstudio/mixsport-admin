<template lang="html">
  <div class="create">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium"> Клиент: {{ $route.params.id }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        depressed
        color="primary"
        class="font-weight-medium"
        @click="creationSidebar = !creationSidebar"
      >
        <v-icon dark class="mr-2">
          mdi-plus
        </v-icon>
        Создать
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
        'информация',
        'Адреса',
        'Настройки',
      ],
    }),
  }
</script>

<style lang="scss" scoped>

</style>
