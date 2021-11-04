<template lang="html">
  <div class="events-tickets">
    <v-row v-if="!products.length" class="pt-12">
      <v-col cols="12" class="text-center" height="100%">
        <v-img
          src="@/assets/Vector.svg"
          width="116"
          class="mb-8 mx-auto"
        ></v-img>
        <v-subheader
          class="d-block font-weight-medium
          text-lg-h6 mb-5"
          color="graydark"
        >Билетов нет
        </v-subheader>
        <v-btn
          depressed
          class="btn-main"
          height="45px"
          small
        >
          Создать билет
        </v-btn>
      </v-col>
    </v-row>
    <!-- Перший рядок -->
    <v-row class="mt-1" v-if="products.length" >
      <v-col
        cols="3" class="d-grid cols-1-2"
      >
        <v-select
          :items="language"
          label="язык"
          background-color="white"
          outlined
          dense
          height="45px"
          hide-details
        ></v-select>
        <v-btn
          depressed
          class="btn-main mr-3"
          height="45px"
          small
        >
          Создать билет
        </v-btn>
      </v-col>
    </v-row>
    <!-- Другий рядок -->
    <v-row v-if="products.length">
      <v-col>
        <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Проданые билеты
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="products"
                    item-key="id"
                    class="elevation-1 table-list"
                  >
                    <template v-slot:item.status="{ item }">
                      <v-icon v-if="item.status">
                        mdi-check
                      </v-icon>
                      <v-icon v-else>
                        mdi-close
                      </v-icon>
                    </template>
                    <template v-slot:item.actions="{ item }">
                      <v-icon
                        class="mr-5"
                        @click="$emit('openTicketEditorSidebar')"
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
      language: ['Рус', 'Укр', 'Eng'],
      panel1:[0],
      dialog: false,
      dialogDelete: false,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Період часу',
          value: 'time'
        },
        {
          text: 'Назва',
          value: 'name'
        },
        {
          text: 'Ціна',
          value: 'price'
        },
        {
          text: 'Кіл-ть ',
          value: 'amount'
        },
        {
          text: 'Активно',
          value: 'status',
          align: 'center',
        },
        {
          text: 'Создано ',
          value: 'created'
        },
        {
          text: 'Действия',
          value: 'actions',
          sortable: false,
          align: 'center',
        }
      ],
      products: [],
      defaultItem: {
      },
    }
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
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.products = [
        {
          id: 1,
          time: '26.01.2021',
          name: 'Входной билет',
          price: 300,
          amount: 26,
          status: true,
          created: '16.01.2021'
        },
        {
          id: 2,
          time: '26.01.2021',
          name: 'Входной билет',
          price: 300,
          amount: 26,
          status: true,
          created: '16.01.2021'
        },
        {
          id: 3,
          time: '26.01.2021',
          name: 'Входной билет',
          price: 300,
          amount: 26,
          status: false,
          created: '16.01.2021'
        },
      ]
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
  }
}
</script>

<style lang="scss" scoped>
.events-tickets {
  background-color: #F9F9F9;
  padding: 0;
}
</style>
