events<template lang="html">
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
      class="d-flex justify-start mx-3"
    >
      <v-col
        cols="5"
        class="d-flex mr-10"
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
          class="bg-white mr-5"
          height="40px"
          small
        >
          Применить
        </v-btn>
        <v-btn
          depressed
          outlined
          color="graylight"
          background-color="white"
          class="bg-white"
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
          :items="types"
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
          :items="events"
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
          <template v-slot:header.rating="{ header }">
            <v-icon v-tooltip.bottom-center="header.text" small >
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
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-3"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              class="mr-3"
            >
              mdi-clock-outline
            </v-icon>
            <v-icon
              small
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
      <v-row
        class="pt-5 text-right mx-3"
      >
        <v-col cols="12" class="pb-0" >
          <v-subheader
            class="font-weight-medium
            text-lg-h6
            pl-0"
          >Основная информация
          </v-subheader>
          <v-select
            :items="types"
            label="Тип"
            background-color="white"
            outlined
            hide-details
            class="mb-3"
          ></v-select>
          <v-text-field
            label="Название"
            outlined
            background-color="white"
            hide-details
            class="mb-3"
          ></v-text-field>
          <v-select
            :items="cities"
            label="Орагнизатор"
            background-color="white"
            outlined
            hide-details
            class="mb-3"
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
          ></v-select>
        </v-col>
        <v-col
          cols="6"
          class="pt-0"
        >
          <v-select
            :items="cities"
            label="Категория"
            background-color="white"
            outlined
            hide-details
            class="mb-3"
          ></v-select>
        </v-col>
      </v-row>
      <v-row
        class="text-right mx-3"
      >
        <v-col cols="12">
          <v-subheader
            class="font-weight-medium
            text-lg-h6
            pl-0"
          >Место проведения
          </v-subheader>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            color="graylight"
            class="mt-5"
            label="Поиск..."
            outlined
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="text-right mx-3">
        <v-col cols="12">
          <v-subheader
            class="font-weight-medium
            text-lg-h6
            pl-0"
          ><v-subheader
            class="font-weight-medium
            text-lg-h6
            pl-0"
          >Основная информация
          </v-subheader>
          </v-subheader>
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
      titles: [
        {
          text: 'Все события',
          disabled: false,
          exact: true,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Опубликованные',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'На подтверждение',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
        {
          text: 'Черновики',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      creationSidebar: false,
      types: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      cities: ['Тип', 'Структура', 'Форма'],
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
          status: 'Ожидает подтверждения',
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
          status: 'Ожидает подтверждения',
        },
      ]
    },

    editItem (item) {
      this.$router.push('events/' + item.id);
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
</style>
