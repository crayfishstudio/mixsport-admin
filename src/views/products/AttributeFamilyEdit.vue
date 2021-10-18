<template lang="html">
  <div class="create">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium"> Редактор семейства атрибутов {{ $route.params.id }}</v-toolbar-title>
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
        Добавить новый заказ
      </v-btn>
    </v-app-bar>
    <v-row>
      <v-col
        cols="6"
        class="d-flex pa-6"
      >
        <v-text-field
          label="Default"
          outlined
          background-color="white"
          hide-details
          class="mr-4"
        ></v-text-field>
        <v-text-field
          label="Default"
          outlined
          background-color="white"
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
