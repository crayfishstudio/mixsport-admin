<template>
  <v-main>
    <v-app-bar app>
      <h2>Локации</h2>
      <v-spacer></v-spacer>
      <v-btn
        elevation="2"
        x-large
        dark
      >
      <v-icon
        color="white"
      >mdi-plus</v-icon>
      Создать
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col>
          <v-select
            :items="items"
            label="Outlined style"
            outlined
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    name: 'Home',

    components: {
    },
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>