<template lang="html">
  <v-container>
    <v-row
      class="justify-start mx-3"
    >
      <v-col
        cols="3"
        class="d-flex"
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
        outlined
        color="graylight"
        background-color="white"
        class="bg-white"
        height="40px"
        small
        >
          Применить
        </v-btn>
      </v-col>
      <v-col
        cols="8"
        class="d-grid cols-3-3-2-4"
      >
        <v-btn
        depressed
        outlined
        color="graylight"
        background-color="white"
        class="bg-white"
        height="40px"
        small
        >
        ЗАГРУЗИТЬ ФАЙЛЫ
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
