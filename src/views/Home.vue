<template>
  <div class="home">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Продавцы</v-toolbar-title>
      <v-col cols="12" md="3">
        <v-text-field
          append-icon="mdi-magnify"
          color="graylight"
          class="ml-5 mt-5"
          label="Поиск..."
          single-line
        >
        </v-text-field>
      </v-col>

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
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>


</style>
