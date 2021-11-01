<template lang="html">
  <div class="list">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Продукты</v-toolbar-title>
      <v-col cols="12" md="2">
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
        class="btn-main mr-3"
        height="36px"
        small
      >
        экспорт
        <v-icon dark class="ml-2">
          mdi-chevron-down
        </v-icon>
      </v-btn>

      <v-btn
        depressed
        class="btn-main mr-3"
        height="36px"
        small
        @click="creationCategoryEditor = !creationCategoryEditor"
      >
        Редактор Категорий
      </v-btn>
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
          Все продукты (23)
        </v-btn>
        <v-btn
          text
          plain
          class="categories"
        >
          Опубликованные (3)
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
    <v-row class="px-2">
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
          class="btn-main"
          height="40px"
          small
        >
          Применить
        </v-btn>
      </v-col>
      <v-col
        cols="7"
        class="d-grid cols-2-3-3-3"
      >
        <p class="text-filter">Фильтровать:</p>
        <v-select
          :items="types"
          label="по категории"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
        <v-select
          :items="types"
          label="по запасам"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
        <v-select
          :items="types"
          label="по партнеру"
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
          :items="products"
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
              <span>{{ item.name }}</span>
              <small>{{ item.title }}</small>
            </div>
          </template>
          <template v-slot:item.stocks="{ item }">
            <v-chip
              :color="getColor(item.stocks)"
              dark
              label
            >
              {{ item.stocks }}
            </v-chip>
          </template>
          <template v-slot:item.top="{ item }">
            <v-icon v-if="item.top">
              mdi-star
            </v-icon>
            <v-icon v-else>
              mdi-star-outline
            </v-icon>
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
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
            <v-icon
              small
            >
              mdi-file-multiple
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
      v-model="creationCategoryEditor"
      absolute
      right
      width="512px"
      temporary
    >
      <v-col
        class="pt-5 pa-5"
      >
        <v-subheader
          class="font-weight-medium text-lg-h6 pl-0 mb-4"
        >
          Редактор категорий
        </v-subheader>
        <div class="d-grid cols-3-2-2">
          <v-text-field
            append-icon="mdi-magnify"
            color="graylight"
            label="Поиск..."
            single-line
            outlined
          >
          </v-text-field>
          <v-btn
            depressed
            class="btn-main"
            height="56px"
            small
          >
            Создать
          </v-btn>
          <v-btn
            depressed
            class="btn-main"
            height="56px"
            small
          >
            Создать
          </v-btn>
        </div>
        <div class="mb-10">
          <v-treeview
            selectable
            selected-color="primary"
            :items="categoryItems"
            dense
            open-all
            expand-icon="mdi-chevron-down"
          ></v-treeview>
        </div>
        <v-btn
          depressed
          color="primary"
          large
          width="33%"
          class="mr-3"
        >
          сохранить
        </v-btn>
        <v-btn
          depressed
          class="btn-main"
          large
          width="33%"
        >
          Отмена
        </v-btn>
    </v-col>
    </v-navigation-drawer>
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
        <v-subheader
          class="font-weight-medium text-lg-h6 pl-0 mb-2"
        >
          Создать продукт
        </v-subheader>
        <v-select
          :items="types"
          label="Тип"
          hide-details
          class="mb-3"
        ></v-select>
        <v-select
          :items="cities"
          label="Семейство аттрибутов"
          hide-details
          class="mb-3"
        ></v-select>
        <v-text-field
          label="СКУ"
          hide-details
          class="mb-8"
        ></v-text-field>
        <v-btn
          depressed
          class="btn-main mr-3"
          large
          width="33%"
        >
          Отмена
        </v-btn>
        <v-btn
          depressed
          color="primary"
          large
          width="33%"
        >
          сохранить
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
      categoryItems: [
        {
          id: 1,
          name: 'Спорт',
          children: [
            { id: 2, name: 'Теніс' },
            { id: 3, name: 'Волейбол' },
          ],
        },
        {
          id: 4,
          name: 'Спорт клуб',
          children: [
            { id: 5, name: 'Тренажерний зал' },
            { id: 6, name: 'Бокс' },
          ],
        },
        {
          id: 7,
          name: 'Спорт',
          children: [
            { id: 8, name: 'Спорт' },
          ],
        },
      ],
      creationCategoryEditor: false,
      creationSidebar: false,
      types: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      cities: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      dialog: false,
      dialogDelete: false,
      singleSelect: false,
      selected: [],
      headers: [
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
          text: 'SKU',
          value: 'sku'
        },
        {
          text: 'Запасы',
          value: 'stocks'
        },
        {
          text: 'Цена',
          value: 'prise'
        },
        {
          text: 'Категорія',
          value: 'category'
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
          text: 'Дата',
          value: 'date'
        },
        {
          text: 'Действия',
          value: 'actions',
          sortable: false,
          align: 'center',
        }
      ],
      products: [],
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
    getColor (stocks) {
      if (stocks === 'В наличии') return 'green'
      else if (stocks === 'Нет на складе') return 'primary'
      else return 'orange'
    },
    initialize () {
      this.products = [
        {
          id: 11,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          name: '30 хв   Вихідні дні',
          title: 'Xpark',
          type: 'Активности',
          sku: 'mx2055',
          stocks: 'В наличии',
          prise: '375 грн.',
          category: 'Прокат ЛКД',
          status: 'Активно',
          top: true,
          date: '12.01.2021',
        },
        {
          id: 12,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          name: '30 хв   Вихідні дні',
          title: 'Xpark',
          type: 'Активности',
          sku: 'mx2055',
          stocks: 'Пока нет',
          prise: '2390 грн.',
          category: 'Прокат ЛКД',
          status: 'Активно',
          top: false,
          date: '12.01.2021',
        },
        {
          id: 13,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          name: 'Цілий день дні',
          title: 'Xpark',
          type: 'Активности',
          sku: 'mx2055',
          stocks: 'В наличии',
          prise: '8100 грн.',
          category: 'Прокат ЛКД',
          status: 'Активно',
          top: true,
          date: '12.01.2021',
        },
      ]
    },

    editItem (item) {
      this.$router.push('products/' + item.id + '/overview');
    },

    deleteItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.products.splice(this.editedIndex, 1)
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
        Object.assign(this.products[this.editedIndex], this.editedItem)
      } else {
        this.products.push(this.editedItem)
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
