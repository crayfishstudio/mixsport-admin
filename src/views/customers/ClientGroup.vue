<template lang="html">
  <div class="client-group">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium">Группы клиентов</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        depressed
        class="btn-main mr-3"
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
    <v-row class="pa-2">
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
          class="btn-main mr-3"
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
          :items="customers"
          :single-select="singleSelect"
          item-key="id"
          show-select
          class="elevation-1 table-list"
        >
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
            value: 'kod',
            sortable: false,
          },
          {
            text: 'Название',
            value: 'name',
            sortable: false,
          },
          {
            text: 'Действия',
            value: 'actions',
            sortable: false,
            align: 'center',
          }
        ],
        customers: [],
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
        this.customers = [
          {
            id: 2842,
            kod: 'general',
            name: 'General',
          },
          {
            id: 4381,
            kod: 'guest',
            name: 'Гость',
          },
          {
            id: 4383,
            kod: 'wholesale',
            name: 'Оптовик',
          },
        ]
      },
    },
    editItem (item) {
      this.$router.push('customers/' + item.id + '/overview');
    },

    deleteItem (item) {
      this.editedIndex = this.customers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.customers.splice(this.editedIndex, 1)
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
        Object.assign(this.customers[this.editedIndex], this.editedItem)
      } else {
        this.customers.push(this.editedItem)
      }
      this.close()
    },
  }
</script>

<style lang="scss" scoped>
.client-group {

}
</style>
