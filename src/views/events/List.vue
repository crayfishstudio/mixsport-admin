<template lang="html">
  <div class="events">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">События</v-toolbar-title>
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
          Все события (23)
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
          На подтверждение (3)
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
        cols="5"
        class="d-grid cols-4-2-2 mr-10"
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
        <v-btn
          depressed
          class="btn-main"
          height="40px"
          small
        >
          Категории
        </v-btn>
      </v-col>
      <v-col
        cols="6"
        class="d-grid cols-3-2-4"
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
          label="По типу"
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
          <template v-slot:header.rating="{ header }">
            <v-icon v-tooltip.bottom-center="header.text">
              {{ header.icon }}
            </v-icon>
          </template>
          <template v-slot:header.img="{ header }">
            <v-icon v-tooltip.bottom-center="header.text">
              {{ header.icon }}
            </v-icon>
          </template>
          <template v-slot:item.img="{ item }">
            <v-avatar
              size="44px"
              rounded
            >
              <img
                :src="item.img"
              >
            </v-avatar>
          </template>
          <template v-slot:item.name="{ item }">
            <div class="name-col">
              <small>{{ item.kind }}</small>
              <span>{{ item.name }}</span>
            </div>
          </template>
          <template v-slot:item.status="{ item }">
            <span v-html="item.status"></span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              class="mr-3"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              class="mr-3"
              v-tooltip.bottom="'Бронирование'"
            >
              mdi-clock-outline
            </v-icon>
            <v-icon
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
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
    <v-navigation-drawer
      v-model="creationSidebar"
      absolute
      right
      width="512px"
      temporary
      class="py-4"
    >
      <v-row
        class="text-right mx-3"
      >
        <v-col cols="12" class="pb-0" >
          <v-subheader
            class="font-weight-medium
            text-lg-h6
            pl-0 mb-2"
          >Основная информация
          </v-subheader>
          <v-select
            :items="types"
            label="Тип"
            background-color="white"
            outlined
            hide-details
            class="mb-3"
            dense
          ></v-select>
          <v-text-field
            label="Название"
            outlined
            background-color="white"
            hide-details
            class="mb-3"
            dense
          ></v-text-field>
          <v-select
            :items="sponsor"
            label="Орагнизатор"
            background-color="white"
            outlined
            hide-details
            class="mb-3"
            dense
          ></v-select>
        </v-col>
        <v-col
          cols="6"
          class="pt-0"
        >
          <v-select
            :items="cities"
            label="Город"
            background-color="white"
            outlined
            hide-details
            class="mb-3"
            dense
          ></v-select>
        </v-col>
        <v-col
          cols="6"
          class="pt-0"
        >
          <v-select
            :items="category"
            label="Категория"
            background-color="white"
            outlined
            hide-details
            class="mb-3"
            dense
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="mx-3">
        <v-col>
          <v-subheader
            class="font-weight-medium
            text-lg-h6
            pl-0 mb-3"
          >Место проведения
          </v-subheader>
          <v-row>
            <v-col class="d-grid cols-2-2-4">
              <v-btn
                class="sidebar-btn"
                outlined
              >
                Локация
              </v-btn>
              <v-btn
                class="sidebar-btn"
                outlined
              >
                Онлайн
              </v-btn>
              <v-btn
                class="sidebar-btn"
                outlined
              >
                Будет объявлено дополнительно
              </v-btn>
            </v-col>
          </v-row>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            color="graylight"
            class="mt-5"
            label="Поиск..."
            outlined
            dense
            hide-details
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="text-right mx-3">
        <v-col cols="12">
          <v-subheader
            class="font-weight-medium
            text-lg-h6
            pl-0 mb-3"
          >Дата и время
          </v-subheader>
          <v-row class="mb-4">
            <v-col cols="6" class="d-grid cols-2-2">
              <v-btn
                class="sidebar-btn"
                outlined
              >
                Единоразовое
              </v-btn>
              <v-btn
                class="sidebar-btn"
                outlined
              >
                Многоразовое
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="10"
              class="d-grid cols-3-2-3-2 pt-0 pr-0"
            >
              <!-- Тут дата-1 -->
              <v-dialog
                ref="dialog"
                v-model="saleday1"
                :return-value.sync="date"
                persistent
                width="290px"
                title-date-format
                input="string"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    hide-details
                    outlined
                    dense
                    color="mgrey"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="saleday1 = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <!-- Тут година-1 -->
              <v-dialog
                ref="saletime1"
                v-model="menu15"
                :return-value.sync="time15"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time15"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    hide-details
                    outlined
                    dense
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu15"
                  v-model="time15"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="menu15 = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.saletime1.save(time15)"
                  >
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
              <!-- Тут дата-2 -->
              <v-dialog
                ref="dialog2"
                v-model="saleday2"
                :return-value.sync="date2"
                persistent
                width="290px"
                title-date-format
                input="string"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date2"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    hide-details
                    outlined
                    dense
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date2"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="saleday2 = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog2.save(date2)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <!-- Тут година-2 -->
              <v-dialog
                ref="saletime2"
                v-model="menu16"
                :return-value.sync="time16"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time16"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    hide-details
                    outlined
                    dense
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu16"
                  v-model="time16"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="menu16 = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.saletime2.save(time16)"
                  >
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>
            <div class="">
              <v-btn
                fab
                small
                color="graylightsecond"
                depressed
              >
                <v-icon color="grey">
                  mdi-plus
                </v-icon>
              </v-btn>
              <v-btn
                fab
                small
                color="graylightsecond"
                depressed
              >
                <v-icon color="grey">
                  mdi-minus
                </v-icon>
              </v-btn>
            </div>
          </v-row>
          <v-checkbox
            v-model="showTime1"
            label="Показывать время начала"
            color="primary"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="showTime2"
            label="Показывать время конца"
            color="primary"
            hide-details
            class="mb-8"
          ></v-checkbox>
          <v-btn
            depressed
            outlined
            color="graylight"
            large
            width="33%"
            class="mr-3"
          >
            Отменить
          </v-btn>
          <v-btn
            depressed
            color="primary"
            large
            width="33%"
          >
            Сохранить
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="graylight" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="primary" text @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creationSidebar: false,
      actions: ['Удалить выбранное', 'Слияние'],
      categoryFilter: [''],
      types: [''],
      filterData: [''],
      sponsor: ['Master2020', 'Petro'],
      cities: ['Львів', 'Київ', 'Одеса'],
      category: ['Концерт', 'Виставка', 'Спортивне змагання'],
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
          icon: 'mdi-poll',
          text: 'Рейтинг',
          value: 'rating',
          sortable: false,
          align: 'center',
        },
        {
          icon: 'mdi-image-outline',
          text: 'Изображение',
          sortable: false,
          value: 'img',
          align: 'center'
        },
        {
          text: 'Название',
          value: 'name'
        },
        {
          text: 'Тип',
          value: 'type'
        },
        {
          text: 'Начало',
          value: 'start'
        },

        {
          text: 'Дата',
          value: 'date'
        },
        {
          text: 'Автор',
          value: 'autor',
        },
        {
          text: 'Статус',
          value: 'status'
        },
        {
          text: 'Действия',
          value: 'actions',
          sortable: false,
          align: 'center',
        }
      ],
      events: [],
      editedIndex: -1,
      editedItem: {
      },
      defaultItem: {
      },
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      saleday1: false,
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      saleday2: false,
      time15: null,
      menu15: false,
      time16: null,
      menu16: false,
      time17: null,
      menu17: false,
      time18: null,
      menu18: false,
      showTime1: false,
      showTime2: false,
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
          id: 11786,
          rating: 2,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          kind: 'Концерт',
          name: 'Незабутні 12 км засніженого лісу',
          type: 'События',
          start: '12.01.2021',
          date: '02.01.2022',
          autor: 'Master2020',
          status: 'Ожидает <br> подтверждения',
        },
        {
          id: 11785,
          rating: 2,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          kind: 'Концерт',
          name: 'Студія танцю Studio Dance+',
          type: 'События',
          start: '22.06.2021',
          date: '13.05.2022',
          autor: 'Master2020',
          status: 'Ожидает  <br> подтверждения',
        },
      ]
    },

    editItem (item) {
      this.$router.push('events/' + item.id  + '/overview');
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
    font-size: 12px;
    line-height: 14px;
    color: $mgrey;
  }

  span {
    display: block;
    margin: 2px 0;
  }
}

.sidebar-btn {
  font-size: 12px;
  line-height: 16px;
  color: $graylight !important;
  text-transform: none !important;
  margin: 0px;
  letter-spacing: normal;
  padding: 8px 10px !important;
}
</style>
