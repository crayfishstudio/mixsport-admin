<template>
  <v-main app class="grey lighten-4">
    <v-app-bar app class="white" height="70px">
      <h2>Создать место</h2>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col md='5' class="mx-auto">
          <span>Введите данные о локации</span>
          <v-select
            :items="items"
            label="Тип"
            outlined
            background-color="white"
          ></v-select>
          <v-text-field
            label="Название"
            outlined
            background-color="white"
          ></v-text-field>
          <v-select
            :items="city"
            label="Город"
            outlined
            background-color="white"
          ></v-select>
          <v-text-field
            label="Адрес"
            outlined
            background-color="white"
          ></v-text-field>
          <v-text-field
            label="Телефон"
            outlined
            background-color="white"
          ></v-text-field>
          <div class="d-flex justify-end">
            <v-btn 
              outlined
              large
              height="45px"
              style="background-color: white"
            >
              Отмена
            </v-btn>
            <v-btn
              large
              height="45px"
              class="primary white--text ml-3"
            >
              Создать
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    name: 'Create',
    data: () => ({
      items: ['Место', 'Локация'],
      city: ['Киев', 'Одесса'],
    }),
  }
</script>