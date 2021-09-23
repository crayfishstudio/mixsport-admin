<template>
  <v-main class="grey lighten-4">
    <v-app-bar app class="white">
      <h2>Локации</h2>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Поиск..."
        class="mx-4"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        elevation="2"
        x-large
        class="red white--text"
      >
      <v-icon
        color="white"
      >mdi-plus</v-icon>
      Создать
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col md="3">
          <div class="d-flex">
            <v-select
              :items="items"
              label="Действия"
              outlined
              background-color="white"
              hide-details="true"
            ></v-select>
            <v-btn
              outlined
              x-large
              class="ml-3"
            >Применить</v-btn>
          </div>
        </v-col>
        <v-col md="9">
          <div class="d-flex">
            <v-select
              v-for="selector in selectors"
              :key="selector.label"
              :items="selector.items"
              :label="selector.label"
              outlined
              background-color="white"
              hide-details="true"
              class="ml-3"
            ></v-select>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="places"
            item-key="id"
            class="elevation-1"
            show-select
            :search="search"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Удалить элемент с таблицы?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Нет</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">Да</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-data-table>
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
      dialogDelete: false,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      selectors: [
        {
          label: 'Все города',
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        },
        {
          label: 'Категория',
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        },
        {
          label: 'Тип',
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        },
        {
          label: 'Фильтровать по дате',
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        },
      ],
      search: '',
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),
    computed: {
      headers () {
        return [
          { text: 'ID', value: 'id', align: 'start' },
          { text: 'rate', value: 'rate' },
          { text: 'img', value: 'img' },
          { text: 'Название', value: 'name' },
          { text: 'Тип', value: 'type' },
          { text: 'Создал', value: 'create' },
          { text: 'Статус', value: 'stat' },
          { text: 'ТОП', value: 'top' },
          { text: 'verify', value: 'verify' },
          { text: 'Дата', value: 'date' },
          { text: 'Действия', value: 'actions', sortable: false },
        ]
      },
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      showSelect () {
        return this.isEnabled('header.data-table-select') || this.isEnabled('item.data-table-select')
      },
    },

    watch: {
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {

      initialize () {
        this.places = [
          { 
            id: 1,
            rate: 2,
            img: '',
            name: 'Futziball - Печерськ',
            type: 'Места',
            create: 'futziball.office',
            stat: 'Ожидает подтверждения',
            top: true,
            verify: true,
            date: '28.09.2020',
          },
          { 
            id: 2,
            rate: 2,
            img: '',
            name: 'Futziball - ',
            type: 'Места',
            create: 'futziball.office',
            stat: 'Ожидает подтверждения',
            top: true,
            verify: true,
            date: '28.09.2020',
          },
          { 
            id: 3,
            rate: 2,
            img: '',
            name: ' - Печерськ',
            type: 'Места',
            create: 'futziball.office',
            stat: 'Ожидает подтверждения',
            top: true,
            verify: true,
            date: '28.09.2020',
          },
        ]
      },

      deleteItem (item) {
        this.editedIndex = this.places.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.places.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    },
  }
</script>