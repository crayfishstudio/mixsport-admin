<template lang="html">
  <div class="list">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Пользователи</v-toolbar-title>
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
        outlined
        color="graylight"
        class="bg-white mr-3"
        height="36px"
        small
      >
        экспорт
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
        cols="5"
        class="d-grid cols-1-2"
      >
        <v-select
          :items="types"
          label="Роль"
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
          :items="users"
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
          <template v-slot:item.username="{ item }">
            <div class="name-col d-flex align-center">
              <v-avatar
                size="44px"
                rounded
                class="mr-3"
              >
                <img
                  :src="item.img"
                >
              </v-avatar>
              <span>{{ item.username }}</span>
            </div>
          </template>
          <template v-slot:item.top="{ item }">
            <v-icon v-if="item.top" >
              mdi-star
            </v-icon>
            <v-icon v-else >
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
            >
              mdi-account-circle
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
        <v-subheader
          class="font-weight-medium text-lg-h6 pl-0 mb-2"
        >
          Введите данные о пользователе
        </v-subheader>
        <v-text-field
          label="Имя"
          outlined
          background-color="white"
          hide-details
          class="mb-3"
        ></v-text-field>
        <v-text-field
          label="Фамилия"
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
      titles: [
        {
          text: 'Все пользователи',
          disabled: false,
          exact: true,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Активные',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Заблокированые',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      creationSidebar: false,
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
          text: 'Имя пользователя',
          value: 'username'
        },
        {
          text: 'Имя ',
          value: 'name'
        },
        {
          text: 'Фамилия',
          value: 'surname'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Роль',
          value: 'role'
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
      users: [],
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
      this.users = [
        {
          id: 299,
          username:'Bubella',
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          name: 'Андрей',
          surname: 'Бубела',
          email: 'bubella@gmail.com',
          role: 'Пользователь',
          top: true,
          date: '12.01.2021'
        },
        {
          id: 347,
          username:'Anasteisha',
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          name: 'Анастасія',
          surname: 'Бубенко',
          email: 'bubenko@gmail.com',
          role: 'Пользователь',
          top: true,
          date: '13.06.2021'
        },
      ]
    },

    editItem (item) {
      this.$router.push('users/' + item.id);
    },

    deleteItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.users.splice(this.editedIndex, 1)
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
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    },
  }
}
</script>

<style lang="scss" scoped>
.name-col {
  span {
    display: block;
    margin: 2px 0;
  }
}
</style>
