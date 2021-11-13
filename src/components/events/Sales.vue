<template lang="html">
  <div class="events-sales">
    <!-- Перший рядок -->
    <v-row class="mt-1">
      <v-col
        cols="5" class="d-grid cols-1-3 pb-0"
      >
        <v-btn
        depressed
        class="btn-main mr-3"
        height="45px"
        small
        >
          Экспорт
        </v-btn>
        <v-text-field
          append-icon="mdi-magnify"
          color="graylight"
          class="pa-2"
          label="Поиск по номеру телефона..."
          single-line
          hide-details
        >
        </v-text-field>
      </v-col>
    </v-row>
    <!-- Другий рядок -->
    <v-row>
      <v-col>
        <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Білети
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
                    <template v-slot:item.actions>
                      <v-icon class="mr-5">
                        mdi-magnify
                      </v-icon>
                      <v-icon
                        class="mr-5"
                      >
                        mdi-pencil
                      </v-icon>
                      <v-icon>
                        mdi-account-circle
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel1:[0],
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
          text: 'Заказ',
          value: 'order'
        },
        {
          text: '',
          value: 'name'
        },
        {
          text: 'Дата',
          value: 'date'
        },
        {
          text: 'Ціна',
          value: 'price'
        },
        {
          text: 'Кол-во',
          value: 'amount'
        },
        {
          text: 'Всего',
          value: 'total'
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
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.products = [
        {
          id: 1,
          order: '№ 400',
          name: 'Входной билет',
          date: '10.02.2021',
          price: '300 грн.',
          amount: '6 / 26',
          total: '2100 грн.',
        },
        {
          id: 2,
          order: '№ 400',
          name: 'Входной билет',
          date: '10.02.2021',
          price: '300 грн.',
          amount: '6 / 26',
          total: '2100 грн.',
        },
        {
          id: 3,
          order: '№ 400',
          name: 'Входной билет',
          date: '10.02.2021',
          price: '300 грн.',
          amount: '6 / 26',
          total: '2100 грн.',
        },
      ]
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
.events-sales {
  background-color: #F9F9F9;
  padding: 0;
}
</style>
