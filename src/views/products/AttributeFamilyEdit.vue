<template lang="html">
  <div class="attribute-family-edit">
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title class="font-weight-medium px-1"> Редактор семейства атрибутов {{ $route.params.id }}</v-toolbar-title>
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
        Добавить новый заказ
      </v-btn>
    </v-app-bar>
    <v-row class="pt-3">
      <v-col
        cols="6"
        class="d-flex pa-3"
      >
        <v-text-field
          label="Default"
          outlined
          background-color="white"
          hide-details
          class="mr-4"
          dense
        ></v-text-field>
        <v-text-field
          label="Default"
          outlined
          background-color="white"
          hide-details
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        <v-card outlined class="mb-5">
          <div class="flex-wrap">
            <v-card-title class="justify-space-between">
              Главные атрибуты
              <v-btn
                depressed
                class="btn-main"
                height="45px"
                small
              >
                Добавить
              </v-btn>
            </v-card-title>
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="products"
              :single-select="singleSelect"
              item-key="id"
              show-select
              class="elevation-1 table-list"
            >
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
              <template v-slot:item.actions="{ item }">
                <v-icon
                  class="mr-5"
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
          </div>
        </v-card>
        <v-card outlined class="mb-5">
          <div class="flex-wrap">
            <v-card-title class="justify-space-between">
              Описание
              <v-btn
                depressed
                class="btn-main"
                height="45px"
                small
              >
                Добавить
              </v-btn>
            </v-card-title>
            <v-data-table
              v-model="selected2"
              :headers="headers2"
              :items="products2"
              :single-select="singleSelect2"
              item-key="id"
              show-select
              class="elevation-1 table-list"
            >
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
              <template v-slot:item.actions="{ item }">
                <v-icon
                  class="mr-5"
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
          </div>
        </v-card>
        <v-card outlined class="mb-5">
          <div class="flex-wrap">
            <v-card-title class="justify-space-between">
              Price
              <v-btn
                depressed
                class="btn-main"
                height="45px"
                small
              >
                Добавить
              </v-btn>
            </v-card-title>
            <v-data-table
              v-model="selected2"
              :headers="headers2"
              :items="products2"
              :single-select="singleSelect2"
              item-key="id"
              show-select
              class="elevation-1 table-list"
            >
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
              <template v-slot:item.actions="{ item }">
                <v-icon
                  class="mr-5"
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
          </div>
        </v-card>
      </v-col>
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
      <v-dialog v-model="dialogDelete2" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="graylight" text @click="closeDelete2">Cancel</v-btn>
            <v-btn color="primary" text @click="deleteItemConfirm2">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogDelete3" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="graylight" text @click="closeDelete3">Cancel</v-btn>
            <v-btn color="primary" text @click="deleteItemConfirm3">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        dialogDelete: false,
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Код',
            value: 'kod'
          },
          {
            text: 'Название ',
            value: 'name'
          },
          {
            text: 'Тип',
            value: 'type'
          },
          {
            text: 'Активно',
            value: 'active',
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
        dialog2: false,
        dialogDelete2: false,
        singleSelect2: false,
        selected2: [],
        headers2: [
          {
            text: 'Код',
            value: 'kod'
          },
          {
            text: 'Название ',
            value: 'name'
          },
          {
            text: 'Тип',
            value: 'type'
          },
          {
            text: 'Активно',
            value: 'active',
            align: 'center',
          },
          {
            text: 'Действия',
            value: 'actions',
            sortable: false,
            align: 'center',
          }
        ],
        products2: [],
        editedIndex2: -1,
        editedItem2: {
        },
        defaultItem2: {
        },
        dialog3: false,
        dialogDelete3: false,
        singleSelect3: false,
        selected3: [],
        headers3: [
          {
            text: 'Код',
            value: 'kod'
          },
          {
            text: 'Название ',
            value: 'name'
          },
          {
            text: 'Тип',
            value: 'type'
          },
          {
            text: 'Активно',
            value: 'active',
            align: 'center',
          },
          {
            text: 'Действия',
            value: 'actions',
            sortable: false,
            align: 'center',
          }
        ],
        products3: [],
        editedIndex3: -1,
        editedItem3: {
        },
        defaultItem3: {
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
      dialog2 (val) {
        val || this.close()
      },
      dialogDelete2 (val) {
        val || this.closeDelete()
      },
      dialog3 (val) {
        val || this.close()
      },
      dialogDelete3 (val) {
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
            kod: 'sku',
            name: 'SKU',
            type: 'text',
            active: true,
          },
          {
            id: 12,
            kod: 'tax_category_id',
            name: 'Tax Category	',
            type: 'select',
            active: true,
          },
          {
            id: 13,
            kod: 'guest_checkout',
            name: 'Guest Checkout	',
            type: 'boolean',
            active: true,
          },
        ],
        this.products2 = [
          {
            id: 11,
            kod: 'short_description',
            name: 'SKU',
            type: 'text',
            active: true,
          },
          {
            id: 12,
            kod: 'description',
            name: 'SKU',
            type: 'text',
            active: false,
          },
        ],
        this.products3 = [
          {
            id: 11,
            kod: 'Price',
            name: 'SKU',
            type: 'text',
            active: true,
          },
          {
            id: 12,
            kod: 'Price',
            name: 'SKU',
            type: 'text',
            active: true,
          },
          {
            id: 13,
            kod: 'special_price_from',
            name: 'SKU',
            type: 'text',
            active: true,
          },
          {
            id: 14,
            kod: 'special_price_from',
            name: 'SKU',
            type: 'text',
            active: true,
          },
        ]
      },
    //  editItem (item) {
        //this.$router.push('products/' + item.id + '/overview');
    //  },

      deleteItem (item) {
        this.editedIndex = this.products.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItem2 (item) {
        this.editedIndex2 = this.products2.indexOf(item)
        this.editedItem2 = Object.assign({}, item)
        this.dialogDelete2 = true
      },
      deleteItem3 (item) {
        this.editedIndex3 = this.products3.indexOf(item)
        this.editedItem3 = Object.assign({}, item)
        this.dialogDelete3 = true
      },

      deleteItemConfirm () {
        this.products.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      deleteItemConfirm2 () {
        this.products2.splice(this.editedIndex2, 1)
        this.closeDelete2()
      },
      deleteItemConfirm3 () {
        this.products3.splice(this.editedIndex3, 1)
        this.closeDelete2()
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
      closeDelete2 () {
        this.dialogDelete2 = false
        this.$nextTick(() => {
          this.editedItem2 = Object.assign({}, this.defaultItem2)
          this.editedIndex2 = -1
        })
      },
      closeDelete3 () {
        this.dialogDelete3 = false
        this.$nextTick(() => {
          this.editedItem3 = Object.assign({}, this.defaultItem3)
          this.editedIndex3 = -1
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
