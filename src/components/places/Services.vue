<template lang="html">
  <div class="places-services">
    <v-row class="py-3 px-4">
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
        <v-btn
        depressed
        class="btn-main"
        height="40px"
        small
        >
          Экспорт
          <v-icon class="ml-3">
            mdi-chevron-down
          </v-icon>
        </v-btn>
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
    <v-row class="px-7">
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
            @click="creationServiceBlock = !creationServiceBlock"
            >
              Настройки блока
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
              @click="creationServiseEditor = !creationServiseEditor"
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
    <v-navigation-drawer
      v-model="creationServiceBlock"
      absolute
      right
      width="512px"
      temporary
    >
      <v-col
        class="pt-5 pa-4"
      >
        <v-subheader
          class="font-weight-medium text-lg-h6 pl-0 mb-2"
        >
          Блок услуг
        </v-subheader>
        <v-text-field
          v-model="blockName"
          :rules="[rules.required, rules.counter]"
          label="Название блока"
          counter
          maxlength="191"
        ></v-text-field>
        <p class="text--disabled mb-1">
          Короткое описание
        </p>
        <v-textarea
            outlined
            height="82px"
            hide-details
            class="mb-2"
          >
        </v-textarea>
        <v-select
          :items="displayType"
          label="Тип отображения"
          hide-details
          class="mb-6"
        ></v-select>
        <v-checkbox
          v-model="active"
          label="Активний"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="cashPay"
          label="Оплата готівкою"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="onlinePay"
          label="Оплата онлайн"
          color="primary"
          hide-details
        ></v-checkbox>
      </v-col>
      <v-col class="text-center">
        <v-btn
          depressed
          class="btn-main mr-3"
          large
          width="33%"
        >
          Отмена
        </v-btn>
        <v-btn
          depressed
          color="primary"
          large
          width="33%"
        >
          сохранить
        </v-btn>
      </v-col>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="creationServiseEditor"
      absolute
      right
      width="512px"
      temporary
    >
      <v-col
        class="pt-5 pa-4"
      >
        <v-subheader
          class="font-weight-medium text-lg-h6 pl-0 mb-2"
        >
          Редактор  услуги
        </v-subheader>
        <v-text-field
          v-model="blockName"
          :rules="[rules.required, rules.counter]"
          label="Название услуги"
          counter
          maxlength="191"
        ></v-text-field>
        <v-text-field
          label="Цена"
          hide-details
        ></v-text-field>
        <v-row class="align-center pt-2">
          <v-col>
            <p class="text--secondary ma-0"
            >Общая цена: 1030 грн.</p>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn
            text
            class="categorie-btn"
            color="primary"
            >Подробнее о цене</v-btn>
          </v-col>
        </v-row>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="144"
          max-width="194"
          class="my-5"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <v-checkbox
          v-model="active"
          label="Активний"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="cashPay"
          label="Оплата готівкою"
          color="primary"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="onlinePay"
          label="Оплата онлайн"
          color="primary"
          hide-details
        ></v-checkbox>
      </v-col>
      <v-col class="text-center">
        <v-btn
          depressed
          class="btn-main mr-3"
          large
          width="33%"
        >
          Отмена
        </v-btn>
        <v-btn
          depressed
          color="primary"
          large
          width="33%"
        >
          сохранить
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
      creationServiseEditor: false,
      creationServiceBlock: false,
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 191 || 'Max 191 characters',
      },
      blockName: '',
      displayType: ['Список'],
      active: false,
      cashPay: false,
      onlinePay: false,
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
