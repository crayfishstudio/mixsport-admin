<template lang="html">
  <div class="places-affiche">
    <!-- Перший рядок -->
    <v-row class="py-3 px-4">
      <v-col cols="4" class="d-grid cols-3-2">
        <v-btn
        depressed
        class="btn-main"
        height="40px"
        small
        >
          <v-icon class="mr-2">
            mdi-plus
          </v-icon>
          Добавить событие
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
    <!-- Другий рядок -->
    <v-row class="px-3">
      <v-col>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="places"
          :single-select="singleSelect"
          item-key="id"
          show-select
          class="elevation-1 table-list"
        >
          <template v-slot:header.rating="{ header }">
            <v-icon v-tooltip.bottom-center="header.text">
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
              class="mr-4"
              @click="creationServiseEditor = !creationServiseEditor"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              class="mr-4"
            >
              mdi-clock-outline
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
          value: 'author'
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
          id: 11686,
          rating: 2,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          kind: 'Концерт',
          name: 'Студія танцю Studio Dance+',
          type: 'События',
          start: '12.01.2021',
          date: '02.01.2021',
          author: 'Master2020',
          status: 'Ожидает подтверждения',
        },
        {
          id: 11687,
          rating: 2,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          kind: 'Концерт',
          name: 'Студія танцю Studio Dance+',
          type: 'События',
          start: '12.01.2021',
          date: '02.01.2021',
          author: 'Master2020',
          status: 'Ожидает подтверждения',
        },
        {
          id: 11688,
          rating: 2,
          img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
          kind: 'Концерт',
          name: 'Студія танцю Studio Dance+',
          type: 'События',
          start: '12.01.2021',
          date: '02.01.2021',
          author: 'Master2020',
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
.places-affiche {
  background-color: #F9F9F9;
  padding: 0;

  .name-col {
    small {
      display: block;
      font-size: 12px;
      line-height: 14px;
      color: $mgrey;
    }
  }
}
</style>
