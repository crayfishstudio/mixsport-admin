<template lang="html">
  <div class="attributes">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Атрибуты</v-toolbar-title>

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
    <v-row class="px-2 pt-4">
      <v-col
        cols="4"
        class="d-grid cols-3-2"
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
          class="elevation-1"
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
          <template v-slot:item.required="{ item }">
            <v-icon
              v-if="item.required"
            >
              mdi-check
            </v-icon>
            <v-icon v-else>
              mdi-close
            </v-icon>
          </template>
          <template v-slot:item.unique="{ item }">
            <v-icon
              v-if="item.unique"
            >
              mdi-check
            </v-icon>
            <v-icon v-else>
              mdi-close
            </v-icon>
          </template>
          <template v-slot:item.locbase="{ item }">
            <v-icon
              v-if="item.locbase"
            >
              mdi-check
            </v-icon>
            <v-icon v-else>
              mdi-close
            </v-icon>
          </template>
          <template v-slot:item.chanbase="{ item }">
            <v-icon
              v-if="item.chanbase"
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
      </v-col>
    </v-row>
    <!-- <v-navigation-drawer
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
      actions: ['Удалить выбранное', 'Слияние'],
      creationSidebarList: false,
      types: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
          text: 'Код',
          value: 'kod'
        },
        {
          text: 'Название',
          value: 'name'
        },
        {
          text: 'Type',
          value: 'type',
        },
        {
          text: 'Required',
          value: 'required',
          align: 'center',
        },
        {
          text: 'Unique',
          value: 'unique',
          align: 'center',
        },
        {
          text: 'Locale based	',
          value: 'locbase',
          align: 'center',
        },
        {
          text: 'Channel based	',
          value: 'chanbase',
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
          id: 81,
          kod: 'default',
          name: 'Стандарт',
          type: 'textarea',
          required: true,
          unique: true,
          locbase: true,
          chanbase: true,
        },
        {
          id: 82,
          kod: 'default',
          name: 'Стандарт',
          type: 'textarea',
          required: true,
          unique: false,
          locbase: true,
          chanbase: false,
        },
        {
          id: 83,
          kod: 'default',
          name: 'Стандарт',
          type: 'textarea',
          required: false,
          unique: true,
          locbase: false,
          chanbase: true,
        },
      ]
    },

    editItem (item) {
      this.$router.push('products-attributes/' + item.id);
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
