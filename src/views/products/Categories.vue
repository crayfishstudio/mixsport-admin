<template lang="html">
  <div class="categories-list">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Категории</v-toolbar-title>
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
    <v-row class="px-2 pt-3">
      <v-col
        cols="6"
        class="d-grid cols-3-2-2"
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
          class="btn-main mr-5"
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
          Структура
        </v-btn>
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
          <template v-slot:item.active="{ item }">
            <v-icon
              v-if="item.active"
            >
              mdi-check
            </v-icon>
            <v-icon v-else>
              mdi-close
            </v-icon>
          </template>
          <template v-slot:item.statistic="{ item }">
            <v-icon
              v-if="item.statistic"
            >
              mdi-check
            </v-icon>
            <v-icon v-else>
              mdi-close
            </v-icon>
          </template>
          <template v-slot:item.top="{ item }">
            <v-icon
              v-if="item.top"
            >
              mdi-check
            </v-icon>
            <v-icon v-else>
              mdi-close
            </v-icon>
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
    <!--
    <v-navigation-drawer
      v-model="creationSidebarList"
      absolute
      right
      width="512px"
      temporary
    >
      <v-col
        class="pt-5 text-right pa-5"
      >
        <v-subheader
          class="font-weight-medium text-lg-h6 pl-0 mb-6"
          color="graydark"
        >
          Семейство атрибутов
        </v-subheader>
        <v-text-field
          v-model="title"
          :rules="[rules.required, rules.counter]"
          label="Title"
          counter
          maxlength="191"
          class="mb-14"
        ></v-text-field>
        <v-text-field
          v-model="kod"
          :rules="[rules.required, rules.counter]"
          label="Код"
          counter
          maxlength="191"
          class="mb-14"
        ></v-text-field>
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
    </v-navigation-drawer> -->
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
      creationSidebarList: false,
      actions: ['Удалить выбранное', 'Слияние'],
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
          text: 'Тип',
          value: 'type',
        },
        {
          text: 'Название Ru',
          value: 'name'
        },
        {
          text: 'Родительская',
          value: 'descendant',
          sortable: false,
        },
        {
          text: 'Путь',
          value: 'road',
          sortable: false,
        },
        {
          text: 'Кол-во',
          value: 'amount',
          align: 'center',
        },
        {
          text: 'Активно',
          value: 'active',
          sortable: false,
          align: 'center',
        },
        {
          text: 'Статика',
          value: 'statistic',
          sortable: false,
          align: 'center',
        },
        {
          text: 'Топ',
          value: 'top',
          sortable: false,
          align: 'center',
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
    initialize () {
      this.products = [
        {
          id: 91,
          type: 'Места',
          name: 'Спорт клуб',
          descendant: 'Спорт',
          road: '/sports-club',
          amount: 23,
          active: true,
          statistic: true,
          top: true,
        },
        {
          id: 92,
          type: 'Места',
          name: 'Спорт клуб',
          descendant: 'Спорт',
          road: '/sports-club',
          amount: 23,
          active: false,
          statistic: true,
          top: false,
        },
        {
          id: 93,
          type: 'Места',
          name: 'Спорт клуб',
          descendant: 'Спорт',
          road: '/sports-club',
          amount: 23,
          active: true,
          statistic: false,
          top: true,
        },
      ]
    },

    editItem (item) {
      this.$router.push('products-categories/' + item.id);
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

</style>
