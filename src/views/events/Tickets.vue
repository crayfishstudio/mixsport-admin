<template lang="html">
  <div class="event-tickets">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Билеты</v-toolbar-title>
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
    </v-app-bar>
    <v-row>
      <v-col
        cols="12"
        class="pa-0 py-3"
      >
        <v-btn
          text
          depressed
          class="categories"
        >
          Все билеты (23)
        </v-btn>
        <v-btn
          text
          plain
          class="categories"
        >
          Опубликованные   (13)
        </v-btn>
        <v-btn
          text
          plain
          class="categories"
        >
          Черновики (9)
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      class="px-2"
    >
      <v-col
        cols="4"
        class="d-grid cols-4-2 mr-10"
      >
        <v-select
          :items="actions"
          label="Действия"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
        <v-btn
          depressed
          class="btn-main"
          height="40px"
          small
        >
          Применить
        </v-btn>
      </v-col>
      <v-col
        cols="7"
        class="d-grid cols-2-3-3"
      >
        <v-select
          :items="categoryFilter"
          label="Категория"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
        <v-select
          :items="types"
          label="Фильтровать по типу"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
        <v-select
          :items="filterData"
          label="Фильтровать по дате"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="px-2">
      <v-col>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="events"
          :single-select="singleSelect"
          item-key="id"
          show-select
          class="elevation-1 table-list"
        >
          <!--<template v-slot:top>
            <v-toolbar
              flat
            >
              <v-dialog
                v-model="dialog"
                max-width="500px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    New Item
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.name"
                            label="Dessert name"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.calories"
                            label="Calories"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.fat"
                            label="Fat (g)"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.carbs"
                            label="Carbs (g)"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedItem.protein"
                            label="Protein (g)"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>-->
          <template v-slot:item.createdDate="{ item }">
            <div class="name-col">
              <span>{{ item.createdDate }}</span>
              <span>{{ item.createdTime }}</span>
            </div>
          </template>
          <template v-slot:item.order="{ item }">
            <div class="name-col">
              <p>{{item.order}}</p>
            </div>
          </template>
          <template v-slot:item.organizers="{ item }">
            <div class="name-col">
              <span>{{ item.organizers }}</span>
              <v-row>
                <v-col cols="6">
                  <small>
                    <v-icon small>mdi-eye</v-icon>
                    {{ item.onSite }}
                  </small>
                </v-col>
                <v-col cols="6">
                  <small>
                    <v-icon small>mdi-eye</v-icon>
                    {{ item.onSms }}
                  </small>
                </v-col>
              </v-row>

            </div>
          </template>
          <template v-slot:item.repayedDate="{ item }">
            <div class="name-col">
              <span>{{ item.repayedDate }}</span>
              <span>{{ item.repayedTime }}</span>
            </div>
          </template>
          <template v-slot:no-data>
            <v-btn
              color="primary"
              @click="initialize"
            >
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        actions: ['Удалить выбранное', 'Слияние'],
        categoryFilter: [''],
        types: [''],
        filterData: [''],
        dialog: false,
        dialogDelete: false,
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'ID',
            value: 'id',
          },
          {
            text: 'Создан',
            value: 'createdDate',
          },
          {
            text: 'Заказ',
            value: 'order',
          },
          {
            text: 'Организаторы',
            value: 'organizers',
            sortable: false,
          },
          {
            text: 'Погашено',
            value: 'repayedDate',
          },
          {
            text: 'Погашен',
            value: 'repayName',
            sortable: false,
          },
          {
            text: 'Статус',
            value: 'status'
          },
        ],
        events: [],
        editedIndex: -1,
        editedItem: {
        },
        defaultItem: {
        },
      }
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.events = [
          {
            id: 91,
            createdDate: '12.05.2021',
            createdTime: '12:13',
            order: '#281 Mixsport Chill Meetup - Вхідний білет',
            organizers: 'Mixsport Chill Meetup',
            onSite: 'На сайте',
            onSms: 'В CMS',
            repayedDate: '13.02.2021',
            repayedTime: '17:01',
            repayName: 'Pintusevich',
            status: 'Подтверждено',
          },
          {
            id: 92,
            createdDate: '12.05.2021',
            createdTime: '12:13',
            order: '#281 Mixsport Chill Meetup - Вхідний білет',
            organizers: 'Mixsport Chill Meetup',
            onSite: 'На сайте',
            onSms: 'В CMS',
            repayedDate: '13.02.2021',
            repayedTime: '17:01',
            repayName: 'Pintusevich',
            status: 'Подтверждено',
          },
          {
            id: 93,
            createdDate: '12.05.2021',
            createdTime: '12:13',
            order: '#281 Mixsport Chill Meetup - Вхідний білет',
            organizers: 'Mixsport Chill Meetup',
            onSite: 'На сайте',
            onSms: 'В CMS',
            repayedDate: '13.02.2021',
            repayedTime: '17:01',
            repayName: 'Pintusevich',
            status: 'Подтверждено',
          },
        ]
      },

      deleteItem (item) {
        this.editedIndex = this.events.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.events.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.events[this.editedIndex], this.editedItem)
        } else {
          this.events.push(this.editedItem)
        }
        this.close()
      },
    }
  }
</script>

<style lang="scss" scoped>
.name-col {

  small {
    display: block;
    font-size: 14px !important;
    line-height: 16px;
    color: $graydark;;
  }

  span {
    display: block;
    margin: 2px 0;
    color: $grey;
  }

  p {
    display: block;
    font-weight: bold;
    color: $grey;
    margin: 0px;
  }
}
</style>
