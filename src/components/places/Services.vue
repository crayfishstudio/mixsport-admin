<template lang="html">
  <div class="places-services">
    <v-row class="py-3">
      <v-col
        cols="6"
        class="d-grid cols-3-2-2"
      >
        <v-btn
        depressed
        class="btn-main"
        height="40px"
        small
        >
          <v-icon class="mr-2">
            mdi-plus
          </v-icon>
          Добавить блок услуг
        </v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              class="btn-main mr-3"
              height="40px"
              small
              v-bind="attrs"
              v-on="on"
            >
              экспорт
              <v-icon dark class="ml-2">
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          depressed
          class="btn-main"
          height="40px"
          small
        >
          Импорт
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="px-3">
      <v-card
        outlined
        class="mb-5"
        width="100%"
        elevation="2"
      >
        <v-card-title class="flex-wrap justify-space-between pa-1">
          <v-subheader
            class="font-weight-medium text-lg-h6"
            color="graydark"
          >
            Цены и услуги
            <v-icon class="ml-4">
              mdi-pencil
            </v-icon>
          </v-subheader>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn
            depressed
            class="btn-main mr-3"
            height="40px"
            small
            @click="$emit('openNewServiceBlockSidebar')"
            >
              Настройки блока
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="font-weight-medium"
              @click="$emit('openNewServiceSidebar')"
            >
              <v-icon dark class="mr-2">
                mdi-plus
              </v-icon>
              Добавить услугу
            </v-btn>
          </v-card-actions>
        </v-card-title>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="places"
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
          <template v-slot:item.actions="{ item }">
            <v-icon
              class="mr-4"
              @click="$emit('openServiseEditorSidebar')"
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
      </v-card>
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
      items: [
        { title: 'Скачай мене' },
        { title: 'Скачай себе' },
        { title: 'Скачай Його' },
        { title: 'Скачай її' },
      ],
      dialog: false,
      dialogDelete: false,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'id',
          value: 'id'
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
          text: 'Цена',
          value: 'price'
        },
        {
          text: 'Бронирование',
          value: 'booking'
        },
        {
          text: 'Продажа',
          value: 'sale'
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
      places: [],
      editedIndex: -1,
      editedItem: {
      },
      defaultItem: {
      },
      creationServiceBlock: false,
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 191 || 'Max 191 characters',
      },
      displayType: ['Список'],
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
      this.places = [
        {
          id: 11786,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          name: 'Студія танцю Studio Dance+',
          price: 300,
          booking: 'Активно',
          sale: 'Доступна',
          status: 'Ожидает подтверждения',
        },
        {
          id: 11787,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          name: 'Студія танцю Studio Dance+',
          price: 300,
          booking: 'Активно',
          sale: 'Доступна',
          status: 'Ожидает подтверждения',
        },
        {
          id: 11788,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          name: 'Студія танцю Studio Dance+',
          price: 300,
          booking: 'Активно',
          sale: 'Доступна',
          status: 'Ожидает подтверждения',
        },
      ]
    },

    deleteItem (item) {
      this.editedIndex = this.places.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.places.splice(this.editedIndex, 1)
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
        Object.assign(this.places[this.editedIndex], this.editedItem)
      } else {
        this.places.push(this.editedItem)
      }
      this.close()
    },
  }
}
</script>

<style lang="scss" scoped>
.places-services {
  background-color: #F9F9F9;
  padding: 0;
  margin: 0;

  .categorie-btn {
    font-size: 14px;
    line-height: 16px;
    color: $primary !important;
    text-transform: none !important;
    margin: 0px;
    letter-spacing: normal;
    padding: 0px !important;
  }
}
</style>
