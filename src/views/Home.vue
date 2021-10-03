<template>
  <v-main class="grey lighten-4">
    <v-app-bar app class="white" height="70px">
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
        large
        height="45px"
        class="primary white--text"
      >
      <v-icon
        color="white"
      >mdi-plus</v-icon>
      Создать
      </v-btn>
    </v-app-bar>
    <v-container class="container-top">
      <v-row>
        <v-col>
          <div class="d-flex">
            <v-btn class="px-0 mr-5" text>Все места (23)</v-btn>
            <v-btn class="px-0 mr-5" text>Опубликованные (13)</v-btn>
            <v-btn class="px-0 mr-5" text>Ожидает подтверждения (3)</v-btn>
            <v-btn class="px-0 mr-5" text>Черновики (3)</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3">
          <div class="d-flex">
            <v-select
              :items="items"
              label="Действия"
              outlined
              dense
              height="45px"
              background-color="white"
              hide-details="true"
            ></v-select>
            <v-btn
              outlined
              large
              height="45px"
              class="ml-3"
              style="background-color: white;"
            >Применить</v-btn>
          </div>
        </v-col>
        <v-col md="2"
          v-for="selector in selectors"
          :key="selector.label"
        >
          <div class="d-flex">
            <v-select
              :items="selector.items"
              :label="selector.label"
              outlined
              dense
              height="45px"
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
            <template v-slot:item.actions>
              <v-icon class="mr-3">
                mdi-eye
              </v-icon>
              <v-icon class="mr-3">
                mdi-pencil
              </v-icon>
              <v-icon class="mr-3">
                mdi-clock-outline
              </v-icon>
              <v-icon>
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:header.rate>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-poll
                  </v-icon>
                </template>
                <span>Рейтинг</span>
              </v-tooltip>
            </template>
            <template v-slot:header.img>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-image-outline
                  </v-icon>
                </template>
                <span>Фотография</span>
              </v-tooltip>
            </template>
            <template v-slot:header.verify>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-marker-check
                  </v-icon>
                </template>
                <span>Верифицировано</span>
              </v-tooltip>
            </template>
            <template v-slot:item.top="{ item }">
              <v-icon v-if="item.top">
                mdi-check
              </v-icon>
              <v-icon v-else>
                mdi-close
              </v-icon>
            </template>
            <template v-slot:item.verify="{ item }">
              <v-icon v-if="item.verify">
                mdi-check
              </v-icon>
              <v-icon v-else>
                mdi-close
              </v-icon>
            </template>
            <template v-slot:item.name="{ item }">
              <div class="d-flex flex-column">
                <span>Спортивная школа</span>
                <span>{{ item.name }}</span>
                <span>50.4169642, 30.5364866</span>
              </div>
            </template>
            <template v-slot:item.img="{ item }">
              <div class="d-flex justify-center">
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="45"
                  max-width="45"
                  :src="item.img"
                ></v-img>
              </div>
            </template>
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
          { text: 'img', value: 'img', sortable: false, align: 'center' },
          { text: 'НАЗВАНИЕ', value: 'name' },
          { text: 'ТИП', value: 'type' },
          { text: 'СОЗДАЛ', value: 'create' },
          { text: 'СТАТУС', value: 'stat' },
          { text: 'ТОП', value: 'top', sortable: false, align: 'center' },
          { text: 'verify', value: 'verify', sortable: false, align: 'center' },
          { text: 'ДАТА', value: 'date' },
          { text: 'ДЕЙСТВИЯ', value: 'actions', sortable: false, align: 'center' },
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
            top: false,
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
            top: false,
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

<style lang="scss" scoped>
  .container-top {
    margin-top: 8px!important;
  }
</style>