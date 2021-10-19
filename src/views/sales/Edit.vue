<template lang="html">
  <div class="edit">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium"> Заказ # {{ $route.params.id }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        depressed
        outlined
        color="graylight"
        class="bg-white mr-3"
        height="36px"
        small
      >
        Удалить в корзину
      </v-btn>
      <v-btn
        depressed
        color="primary"
        class="font-weight-medium"
        @click="creationSidebar = !creationSidebar"
      >
        <v-icon dark class="mr-2">
          mdi-plus
        </v-icon>
        Добавить новый заказ
      </v-btn>
    </v-app-bar>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
