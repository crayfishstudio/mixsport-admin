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
      <v-col>
        <v-breadcrumbs
          :items="titles"
          large
          color="grey"
        >
          <template v-slot:divider>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row
      class="justify-start mx-3"
    >
      <v-col
        cols="3"
        class="d-flex mr-8"
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
        outlined
        color="graylight"
        background-color="white"
        class="bg-white"
        height="40px"
        small
        >
          Применить
        </v-btn>
      </v-col>
      <v-col
        cols="6"
        class="d-grid cols-2-2"
      >
        <v-select
          :items="types"
          label="Фильтровать по статусу"
          background-color="white"
          dense
          outlined
          hide-details
          class="mr-3"
        ></v-select>
        <v-select
          :items="types"
          label="Фильтровать по дате"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="sales"
          :single-select="singleSelect"
          item-key="id"
          show-select
          class="elevation-1 mx-6"
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
          <template v-slot:item.order="{ item }">
            <p class="font-weight-medium">
              {{ item.order }}
            </p>
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
          <template v-slot:item.actions="{ item }">
            <v-icon
              class="mr-4"
            >
              mdi-clock-time-four-outline
            </v-icon>
            <v-icon
              @click="editItem(item)"
            >
              mdi-check
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn
              color="primary"
              small
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
        <v-subheader
          class="font-weight-medium text-lg-h6 pl-0 mb-2"
        >
          Введите данные о клиенте
        </v-subheader>
        <v-text-field
          label="Имя"
          outlined
          background-color="white"
          hide-details
          class="mb-3"
        ></v-text-field>
        <v-text-field
          label="Email"
          outlined
          background-color="white"
          hide-details
          class="mb-3"
        ></v-text-field>
        <v-select
          :items="types"
          label="Группа"
          background-color="white"
          outlined
          hide-details
          class="mb-3"
        ></v-select>
        <v-text-field
          label="Телефон"
          outlined
          background-color="white"
          hide-details
          class="mb-3"
        ></v-text-field>
        <v-text-field
          label="Сумма"
          outlined
          background-color="white"
          hide-details
          class="mb-3"
        ></v-text-field>
        <v-select
          :items="cities"
          label="Статус"
          background-color="white"
          outlined
          hide-details
          class="mb-7"
        ></v-select>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        {
          text: 'Все заказы',
          disabled: false,
          exact: true,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Выполненые',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Черновики',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      creationSidebar: false,
      types: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      cities: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      dialog: false,
      dialogDelete: false,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Заказ',
          value: 'order',
        },
        {
          text: 'Клиент ',
          value: 'client'
        },
        {
          text: 'Дата',
          value: 'date'
        },
        {
          text: 'ID',
          value: 'id',
        },
        {
          text: 'Статус',
          value: 'status'
        },
        {
          text: 'Доставка',
          value: 'delivery'
        },
        {
          text: 'Итого',
          value: 'sum'
        },
        {
          text: '',
          value: 'actions',
          sortable: false,
          align: 'center',
        }
      ],
      sales: [],
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
      this.sales = [
        {
          order: '#400',
          client: 'игорь манжул',
          date: '12.01.2021',
          id: 'J1c5OulnFm',
          status: 'Оплачен',
          delivery: '',
          sum: '800 грн.',
        },
        {
          order: '#401',
          client: 'игорь манжул',
          date: '12.01.2021',
          id: 'gdjwefgjk',
          status: 'На рассмотрении',
          delivery: '',
          sum: '800 грн.',
        },
        {
          order: '#402',
          client: 'игорь манжул',
          date: '12.01.2021',
          id: 'bjhrejfrn',
          status: 'Оплачен',
          delivery: '',
          sum: '800 грн.',
        },
        {
          order: '#403',
          client: 'игорь манжул',
          date: '12.01.2021',
          id: 'rhbjrver',
          status: 'На рассмотрении',
          delivery: '',
          sum: '800 грн.',
        },
        {
          order: '#404',
          client: 'игорь манжул',
          date: '12.01.2021',
          id: 'vrjerjkkl',
          status: 'Отклонено',
          delivery: '',
          sum: '800 грн.',
        },
      ]
    },

    editItem (item) {
      this.$router.push('sales/' + item.id);
    },

    deleteItem (item) {
      this.editedIndex = this.sales.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.sales.splice(this.editedIndex, 1)
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
        Object.assign(this.sales[this.editedIndex], this.editedItem)
      } else {
        this.sales.push(this.editedItem)
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
