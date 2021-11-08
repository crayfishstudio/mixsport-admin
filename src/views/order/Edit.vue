<template lang="html">
  <div class="order-edit">
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title class="font-weight-medium px-1"> Заказ # {{ $route.params.id }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        depressed
        class="btn-main mr-3"
        height="36px"
        small
      >
        Удалить в корзину
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
        Добавить новый заказ
      </v-btn>
    </v-app-bar>
    <v-row class="mt-1">
      <v-col cols="9">
        <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
          <!-- Основна інформація -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Основное
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-row class="d-flex justify-space-between">
                <v-col cols="5">
                  <v-subheader
                    class="subheader-edit pl-0"
                  > Информация о заказе
                  </v-subheader>
                  <p class="text--disabled mb-3">
                    Дата создания:
                  </p>
                  <div class="d-grid cols-4-1-1 mb-3">
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
                    <v-text-field
                      outlined
                      hide-details
                      dense
                    ></v-text-field>
                    <v-text-field
                      outlined
                      hide-details
                      dense
                    ></v-text-field>
                  </div>
                  <p class="text--secondary mb-0">
                    Вид платежа:
                  </p>
                  <p class="text--secondary">
                    Наличный расчёт
                  </p>
                  <v-select
                    :items="status"
                    label="Статус"
                  ></v-select>
                  <v-select
                    :items="client"
                    label="Клиент"
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-subheader
                    class="subheader-edit"
                  >Клиент</v-subheader>
                  <p class="text--secondary px-4 mb-0">
                    ID:
                  </p>
                  <p class="text--secondary px-4">
                    2
                  </p>
                  <p class="text--secondary px-4 mb-0">
                    Имя клиента:
                  </p>
                  <p class="text--secondary px-4">
                    Игорь Манжул
                  </p>
                  <p class="text--secondary px-4  mb-0">
                    Email:
                  </p>
                  <p class="text--secondary px-4">
                    mangul@gmail.com
                  </p>
                  <p class="text--secondary px-4 mb-0">
                    Телефон:
                  </p>
                  <p class="text--secondary px-4">
                     +380930 92347
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Вміст замовлення -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Состав заказа
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
              <v-data-table
                v-model="selected"
                :headers="headers"
                :items="products"
                :single-select="singleSelect"
                item-key="id"
                show-select
                class="elevation-1 table-list"
              >
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
              <v-row class="d-flex justify-end pa-5">
                <v-col cols="3">
                  <p class="text--secondary text-right">
                     Итого по позициям:
                  </p>
                  <p class="text--secondary text-right">
                     Доставка:
                  </p>
                  <p class="text--secondary text-right">
                     Итог заказа:
                  </p>
                </v-col>
                <v-col cols="2">
                  <p class="font-weight-bold text-right">
                     850 грн.
                  </p>
                  <p class="font-weight-bold text-right">
                     0 грн.
                  </p>
                  <p class="font-weight-bold text-right">
                     850 грн.
                  </p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="pa-5">
                <v-col class="d-flex justify-space-between">
                  <v-btn
                    depressed
                    class="btn-main"
                    height="45px"
                    small
                  >
                    Возврат
                  </v-btn>
                  <p class="text--secondary mb-0 py-2">
                     Этот заказ больше недоступен для редактирования.
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="3">
        <v-expansion-panels v-model="panel2" multiple active-class="mb-5">
          <!--Дії-->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-subheader
                class="tab-subheader"
              >
                Действия
              </v-subheader>
              <template v-slot:actions>
                <v-icon>
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-row >
                <v-col cols="12" align="end">
                  <v-select
                    :items="sendBill"
                    label="Отправить счет"
                    outlined
                    dense
                    hide-details
                  ></v-select>
                  <v-btn
                    depressed
                    class="btn-main mt-3"
                    height="45px"
                    small
                  >
                    Выполнить
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Атрибути замовлення-->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-subheader
                class="tab-subheader"
              >
                Атрибуты заказа
              </v-subheader>
              <template v-slot:actions>
                <v-icon>
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-select
                    :items="sourse"
                    label="Джерело залучення"
                  ></v-select>
                  <v-select
                    :items="administrator"
                    label="Адміністратор"
                  ></v-select>
                  <v-select
                    :items="affiliate"
                    label="Аффилиат"
                    hide-details
                  ></v-select>
                  <v-checkbox
                    v-model="visitConfirm"
                    label="Візит підтверджений"
                    color="primary"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Коментарі-->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-subheader
                class="tab-subheader"
              >
                Коментарии
              </v-subheader>
              <template v-slot:actions>
                <v-icon>
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-row>
                <v-col align="end">
                  <p class="text--disabled text-start mb-2">
                    Введите коментарий
                  </p>
                  <v-textarea
                      outlined
                      height="83px"
                      hide-details
                      class="mb-2"
                    >
                  </v-textarea>
                  <v-btn
                    depressed
                    class="btn-main"
                    height="45px"
                    small
                  >
                    Добавить
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
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
        panel1: [0, 1],
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        saleday1: false,
        status: ['Новый'],
        client: ['187'],
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
            text: 'Позиция',
            value: 'name'
          },
          {
            text: 'Стоимость',
            value: 'prise'
          },
          {
            text: 'Кол-во',
            value: 'amount'
          },
          {
            text: 'Итого',
            value: 'total'
          },
          {
            text: '',
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
        panel2: [0, 1, 2],
        sendBill: [''],
        sourse: ['Портал mixsport.pro'],
        administrator: ['admin'],
        affiliate: ['zozulya'],
        visitConfirm: false,
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
            id: 11,
            img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
            name: '30 хв   Вихідні дні',
            title: 'Артикул: PW011',
            prise: '375 грн.',
            amount: 2,
            total: '375 грн.',
          },
          {
            id: 12,
            img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
            name: '30 хв   Вихідні дні',
            title: 'Артикул: PW011',
            prise: '375 грн.',
            amount: 2,
            total: '375 грн.',
          },
          {
            id: 13,
            img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
            name: '30 хв   Вихідні дні',
            title: 'Артикул: PW011',
            prise: '375 грн.',
            amount: 2,
            total: '375 грн.',
          },
          {
            id: 14,
            img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
            name: '30 хв   Вихідні дні',
            title: 'Артикул: PW011',
            prise: '375 грн.',
            amount: 2,
            total: '375 грн.',
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
.order-edit {
  .subheader-edit {
    font-size: 18px;
    line-height: 21px;
    font-weight: 600 !important;
    text-transform: uppercase;
    color: $graydark;
  }

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
}
</style>
