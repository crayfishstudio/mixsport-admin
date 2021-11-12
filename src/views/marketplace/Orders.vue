<template lang="html">
  <div class="list">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Заказы</v-toolbar-title>
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
          Все заказы   (23)
        </v-btn>
        <v-btn
          text
          plain
          class="categories"
        >
          Неоплачено   (13)
        </v-btn>
        <v-btn
          text
          plain
          class="categories"
        >
          На модерации (3)
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="px-2">
      <v-col
        cols="4"
        class="d-grid cols-3-2 mr-8"
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
        cols="5"
        class="d-grid cols-1-2"
      >
        <v-select
          :items="status"
          label="Статус"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
        <v-select
          :items="payFilters"
          label="Фильтровать по оплате"
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
          :items="marketplace"
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
          <template v-slot:item.check="{ item }">
            <span v-html="item.check"></span>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="getColor(item.status)"
              dark
              label
            >
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:item.seller="{ item }">
            <span v-html="item.seller"></span>
          </template>
          <template v-slot:item.actions="{  }">
            <v-icon
              @click="creationSidebar = !creationSidebar"
            >
              mdi-check
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
      <v-col class="pt-5 text-right pa-5">
        <v-subheader
          class="subheader-lowercase mb-2"
        >
          Просмотр заказа
        </v-subheader>
        <v-text-field
          label="Название билета"
          hide-details
          class="mb-5"
          :rules="rules"
        ></v-text-field>
        <v-text-field
          label="Количество"
          hide-details
          class="mb-5"
          :rules="rules"
        ></v-text-field>
        <v-text-field
          label="Цена"
          hide-details
          class="mb-5"
          :rules="rules"
        ></v-text-field>
        <v-text-field
          label="Сумма"
          hide-details
          class="mb-5"
          :rules="rules"
        ></v-text-field>
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
      actions: ['Удалить выбранное', 'Слияние'],
      creationSidebar: false,
      status: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      payFilters: [''],
      rules: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
          text: 'Итого',
          value: 'sum',
        },
        {
          text: 'Счет',
          value: 'check',
        },
        {
          text: 'Статус',
          value: 'status',
          sortable: false,
        },
        {
          text: 'Дата заказа',
          value: 'date',
        },
        {
          text: 'Продавец',
          value: 'seller'
        },
        {
          text: 'Комиссия',
          value: 'commission'
        },
        {
          text: 'Скидка',
          value: 'discount'
        },
        {
          text: 'Итого продавцу',
          value: 'totalforsell'
        },
        {
          text: 'Счет',
          value: 'checknum'
        },
        {
          text: 'Оплачено',
          value: 'paidup'
        },
        {
          text: 'Доплата',
          value: 'excessfare'
        },
        {
          text: 'Оплата',
          value: 'payment',
          sortable: false,
        },
        {
          text: 'Действия',
          value: 'actions',
          sortable: false,
          align: 'center',
        },
      ],
      marketplace: [],
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
    getColor (status) {
      if (status === 'Оплачен') return 'green'
      else if (status === 'На рассмотрении') return 'orange'
      else return 'red'
    },
    initialize () {
      this.marketplace = [
        {
          id: 21,
          sum: '2100 грн.',
          check: 'demo <br> webkul',
          status: 'Оплачен',
          date: '12.01.2021',
          seller: 'demo <br> webku',
          commission: '200 грн.',
          discount: '0 грн.',
          totalforsell: '1900 грн.',
          checknum: '1900 грн.',
          paidup: '1900 грн.',
          excessfare: '0 грн.',
          payment: 'Оплачено',
        },
        {
          id: 23,
          sum: '3100 грн.',
          check: 'demo <br> webkul',
          status: 'Оплачен',
          date: '18.01.2021',
          seller: 'demo <br> webku',
          commission: '500 грн.',
          discount: '0 грн.',
          totalforsell: '1900 грн.',
          checknum: '1900 грн.',
          paidup: '1900 грн.',
          excessfare: '0 грн.',
          payment: 'Оплачено',
        },

      ]
    },

    editItem (item) {
      this.$router.push('customers/' + item.id);
    },

    deleteItem (item) {
      this.editedIndex = this.marketplace.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.marketplace.splice(this.editedIndex, 1)
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
        Object.assign(this.marketplace[this.editedIndex], this.editedItem)
      } else {
        this.marketplace.push(this.editedItem)
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
