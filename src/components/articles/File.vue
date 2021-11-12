<template lang="html">
  <div class="article-file">
    <v-row class="py-3">
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
      <v-col class="d-flex justify-end">
        <p class="text--secondary my-2">
          Показаны 1-50 из 10 203 записи.
        </p>
      </v-col>
    </v-row>
    <v-row class="px-2">
      <v-col>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="articles"
          :single-select="singleSelect"
          item-key="id"
          show-select
          class="elevation-1 table-list"
        >
          <template v-slot:item.name="{ item }">
            <span v-html="item.name"></span>
          </template>
          <template v-slot:item.fileName="{ item }">
            <span v-html="item.fileName"></span>
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
      return{
        actions: ['Позначити всі', 'Видалити всі фото'],
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
            text: 'Назва',
            value: 'name',
            sortable: false,
          },
          {
            text: 'File Name',
            value: 'fileName',
            sortable: false,
          },
          {
            text: 'File Size',
            value: 'fileSize',
            sortable: false,
          },
          {
            text: 'Добавлен',
            value: 'timeAdd'
          },
          {
            text: 'Топ',
            sortable: false,
            value: 'top',
            align: 'center',
          },
          {
            text: 'Статус',
            value: 'status',
            align: 'center'
          },
          {
            text: 'Действия',
            value: 'actions',
            sortable: false,
            align: 'center',
          }
        ],
        articles: [],
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
        this.articles = [
          {
            id: '382',
            name: 'Положення про департамент культури <br> і туризму Запорізької міської ради',
            fileName: 'Положення про департамент культури <br> і туризму Запорізької міської ради.pdf',
            fileSize: '27.76 MB',
            timeAdd: '12.01.2021',
            top: true,
            status: 'Активно',
          },
          {
            id: '383',
            name: 'Положення про департамент культури <br> і туризму Запорізької міської ради',
            fileName: 'Положення про департамент культури <br> і туризму Запорізької міської ради.pdf',
            fileSize: '27.76 MB',
            timeAdd: '12.01.2021',
            top: true,
            status: 'Активно',
          },
          {
            id: '384',
            name: 'Положення про департамент культури <br> і туризму Запорізької міської ради',
            fileName: 'Положення про департамент культури <br> і туризму Запорізької міської ради.pdf',
            fileSize: '27.76 MB',
            timeAdd: '12.01.2021',
            top: true,
            status: 'Активно',
          },
        ]
      },

      deleteItem (item) {
        this.editedIndex = this.articles.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.articles.splice(this.editedIndex, 1)
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
          Object.assign(this.articles[this.editedIndex], this.editedItem)
        } else {
          this.articles.push(this.editedItem)
        }
        this.close()
      },
    }
  }
</script>

<style lang="scss" scoped>
.article-file {
  background-color: #F9F9F9;
  padding: 0;
}
</style>
