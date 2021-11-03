<template lang="html">
  <div class="list-articles">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Статьи</v-toolbar-title>
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
          Все статьи   (23)
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
        cols="3"
        class="d-flex mr-10"
      >
        <v-select
          :items="actions"
          label="Действия"
          background-color="white"
          dense
          outlined
          class="mr-3"
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
        cols="8"
        class="d-grid cols-2-3-3"
      >
        <v-select
          :items="rubric"
          label="Рубрика"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
        <v-select
          :items="typeFilter"
          label="Фильтровать по типу"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
        <v-select
          :items="dateFilter"
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
          :items="articles"
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
          <template v-slot:header.img="{ header }">
            <v-icon v-tooltip.bottom-center="header.text" >
              {{ header.icon }}
            </v-icon>
          </template>
          <template v-slot:header.views="{ header }">
            <v-icon v-tooltip.bottom-center="header.text">
              {{ header.icon }}
            </v-icon>
          </template>
          <template v-slot:header.showphone="{ header }">
            <v-icon v-tooltip.bottom-center="header.text">
              {{ header.icon }}
            </v-icon>
          </template>
          <template v-slot:item.name="{ item }">
            <div class="name-col">
              <small>{{ item.kind }}</small>
              <span>{{ item.name }}</span>
            </div>
          </template>
          <template v-slot:item.top="{ item }">
            <v-icon v-if="item.top">
              mdi-star
            </v-icon>
            <v-icon v-else>
              mdi-star-outline
            </v-icon>
          </template>
          <template v-slot:item.showphone="{ item }">
            <v-icon v-if="item.showphone">
              mdi-check
            </v-icon>
            <v-icon v-else>
              mdi-close
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
          <template v-slot:item.actions="{ item }">
            <v-icon
              class="mr-4"
              @click="editItem(item)"
            >
              mdi-pencil
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
    >
      <v-col
        class="pt-5 text-right pa-5"
      >
        <v-subheader insset class="pl-0" >Введите данные о локации
        </v-subheader>
        <v-select
          :items="types"
          label="Тип"
          background-color="white"
          outlined
        ></v-select>
        <v-text-field
          label="Название"
          outlined
          background-color="white"
        ></v-text-field>
        <v-select
          :items="cities"
          label="Город"
          background-color="white"
          outlined
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
        <v-btn
          depressed
          outlined
          color="graylight"
          large
          width="33%"
          class="mr-3"
        >
          Отмена
        </v-btn>
        <v-btn
          depressed
          color="primary"
          large
          width="33%"
        >
          Создать
        </v-btn>
      </v-col>
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
      actions: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      rubric: [''],
      typeFilter: [''],
      dateFilter: [''],
      cities: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
          icon: 'mdi-image-outline',
          text: 'Изображение',
          sortable: false,
          value: 'img',
          align: 'center'
        },
        {
          text: 'Заголовок',
          value: 'name'
        },
        {
          text: 'Тип',
          value: 'type',
          sortable: false,
        },
        {
          text: 'Автор',
          value: 'createdBy',
        },
        {
          icon: 'mdi-eye',
          text: 'Перегляди',
          value: 'views',
          align: 'center',
        },
        {
          text: 'Статус',
          value: 'status'
        },
        {
          text: 'Топ',
          sortable: false,
          value: 'top',
          align: 'center'
        },
        {
          icon: 'mdi-cellphone',
          text: 'Показывать в приложении',
          sortable: false,
          value: 'showphone',
          align: 'center'
        },
        {
          text: 'Дата',
          value: 'date',
          align: 'center'
        },
        {
          text: 'Действия',
          value: 'actions',
          sortable: false,
          align: 'center',
        }
      ],
      articles: [],
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
      this.articles = [
        {
          id: '382',
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          kind: 'Стиль ',
          name: 'Индустриальный стиль в интерьере',
          type: 'Блог',
          createdBy: 'Anna Krivko',
          views: '1100',
          status: 'Опубликовано',
          top: false,
          showphone: true,
          date: '12.01.2021'
        },
        {
          id: '667',
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          kind: 'Стиль ',
          name: 'Сквош как стиль жизни: новый выпуск Mixsport Skills',
          type: 'Блог',
          createdBy: 'Anna Krivko',
          views: '12',
          status: 'Черновик',
          top: true,
          showphone: false,
          date: '12.01.2021'
        },
        {
          id: '293',
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          kind: 'Стиль',
          name: 'Индустриальный стиль в интерьере',
          type: 'Блог',
          createdBy: 'Anna Krivko',
          views: '555',
          status: 'Опубликовано',
          top: false,
          showphone: true,
          date: '12.01.2021'
        },
      ]
    },

    editItem (item) {
      this.$router.push('articles/' + item.id + '/overview');
    },

    deleteItem (item) {
      this.editedIndex = this.articles.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.articles.splice(this.editedIndex, 1)
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
        Object.assign(this.articles[this.editedIndex], this.editedItem)
      } else {
        this.articles.push(this.editedItem)
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
</style>
