<template lang="html">
  <div class="tegs">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Теги</v-toolbar-title>
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
        class="px-0 py-3"
      >
        <v-btn
          text
          depressed
          class="categories"
        >
          Все теги (23)
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
    <v-row class="px-2">
      <v-col
        cols="3"
        class="d-grid cols-2-2 mr-12"
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
        cols="7"
        class="d-grid cols-2-2-3"
      >
        <v-btn
          depressed
          class="btn-main"
          height="40px"
          small
        >
          Структура
        </v-btn>
        <v-select
          :items="content"
          label="Контекст"
          background-color="white"
          dense
          outlined
          hide-details
        ></v-select>
        <v-select
          :items="filter"
          label="Фильтровать по статусу"
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
          :items="events"
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
          <template v-slot:item.top="{ item }">
            <v-icon v-if="item.top">
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
              @click="editTegs = !editTegs"
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
      v-model="editTegs"
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
            class="subheader-lowercase mb-6"
          >Редактор тега
          </v-subheader>
          <v-text-field
            v-model="nameru"
            :rules="[rules.required, rules.counter]"
            label="Название (RU)"
            counter
            maxlength="191"
            class="mb-5"
          ></v-text-field>
          <v-text-field
            v-model="nameua"
            :rules="[rules.required, rules.counter]"
            label="Название (UA)"
            counter
            maxlength="191"
            class="mb-5"
          ></v-text-field>
          <v-text-field
            v-model="nameen"
            :rules="[rules.required, rules.counter]"
            label="Название (EN)"
            counter
            maxlength="191"
            class="mb-5"
          ></v-text-field>
          <p class="text--disabled text-start mb-2">
            Короткое описание
          </p>
          <v-textarea
              color="primary"
              outlined
            >
          </v-textarea>
          <v-btn
            depressed
            class="btn-main mr-3"
            height="44px"
            large
            width="33%"
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
<!--    <v-navigation-drawer
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
      titles: [
        {
          text: 'Все теги',
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
          text: 'Черновики',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      editTegs: false,
      creationSidebar: false,
      actions: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      content: [''],
      filter: [''],
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
          text: 'Слаг',
          value: 'slag'
        },
        {
          text: 'Название (RU)',
          value: 'nameru'
        },
        {
          text: 'Название (UA)',
          value: 'nameua'
        },
        {
          text: 'Название (EN)',
          value: 'nameen'
        },
        {
          text: 'КОнтекст',
          value: 'context'
        },
        {
          text: 'ТОп',
          value: 'top',
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
      nameru: 'Alt тег',
      nameua: 'Название фотографии',
      nameen: 'Описание фотографии',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 191 || 'Max 191 characters',
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
          id: 55,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          slag: 'greppling',
          nameru: 'Грэпплинг',
          nameua: 'Грепплінг',
          nameen: 'Grappling',
          context: 'Articles',
          top: true,
          status: 'Активно',
        },
        {
          id: 56,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          slag: 'greppling',
          nameru: 'Грэпплинг',
          nameua: 'Грепплінг',
          nameen: 'Grappling',
          context: 'Articles',
          top: false,
          status: 'Активно',
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

</style>
