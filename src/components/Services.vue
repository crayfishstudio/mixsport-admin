<template>
  <v-container>
		<v-row>
			<v-col md="4">
				<div class="d-flex">
          <v-dialog
            v-model="dialogBlock"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                large
                outlined
                height="45px"
                style="background-color: white"
                class="mr-4"
                v-bind="attrs"
								v-on="on"
              >
                <v-icon class="mr-2">mdi-plus</v-icon>
                Добавить блок услуг
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formBlockTitle }}</span>
                <v-btn
                  v-if="editedBlockIndex > -1"
                  @click="deleteBlock"
                >
                  Удалить
                </v-btn>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="editedBlock.title"
                        label="Название блока"
                        counter
                        maxlength="200"
                      ></v-text-field>
                      <v-textarea
                      v-model="editedBlock.desc"
                        outlined
                        hide-details="auto"
                        label="Короткое описание"
                      ></v-textarea>
                      <v-select
                        :items="items"
                        label="Тип отображения"
                      ></v-select>
                      <v-checkbox
                        label="Активний"
                        color="red"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="Оплата готівкою"
                        color="red"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="Оплата онлайн"
                        color="red"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions class="justify-center">
                <v-btn
                  outlined
                  large
                  @click="closeBlock"
                  class="px-5"
                >
                  Отменить
                </v-btn>
                <v-btn
                  color="red white--text"
                  large
                  @click="saveBlock"
                  class="px-5 ml-4"
                >
                  Сохранить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="editedItem.name"
                        label="Название услуги"
                        counter
                        maxlength="200"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.price"
                        hide-details="auto"
                        label="Цена"
                      ></v-text-field>
                      <div class="d-flex justify-space-between align-center">
                        <span>Общая цена: 1030 грн.</span>
                        <v-btn text color="red">
                          Подробнее о цене
                        </v-btn>
                      </div>
                      <v-checkbox
                        v-model="editedItem.reservation"
                        label="Активний"
                        color="red"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        v-model="editedItem.cash"
                        label="Оплата готівкою"
                        color="red"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        v-model="editedItem.card"
                        label="Оплата онлайн"
                        color="red"
                        hide-details
                      ></v-checkbox>
                      <!-- <template>
                        <v-image-input
                          clearable
                        />
                      </template> -->
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions class="justify-center">
                <v-btn
                  outlined
                  large
                  @click="close"
                  class="px-5"
                >
                  Отменить
                </v-btn>
                <v-btn
                  color="red white--text"
                  large
                  @click="save"
                  class="px-5 ml-4"
                >
                  Сохранить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5 d-flex justify-center">Удалить?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Нет</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">Да</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
					<v-select
						:items="items"
						label="Экспорт"
						dense
						height="45px"
						outlined
						hide-details
						background-color="white"
					></v-select>
					<v-btn
						large
						outlined
						height="45px"
						style="background-color: white"
						class="ml-4"
					>
						Импорт
					</v-btn>
				</div>
			</v-col>
		</v-row>
		<v-row
      v-for="block in blocks"
      :key="block.id"
    >
			<v-col>
				<v-data-table
					:headers="headers"
					:items="block.services"
					class="elevation-1"
					item-key="id"
					show-select
				>
					<template v-slot:top>
						<v-toolbar
							flat
						>
							<v-toolbar-title>
								{{ block.title }}
								<v-icon>
									mdi-pencil
								</v-icon>
							</v-toolbar-title>
							<v-spacer></v-spacer>
							<v-btn
								large
								outlined
								height="45px"
								style="background-color: white"
								class="mr-4"
                @click="editBlock(block)"
							>
								Настройки блока
							</v-btn>
							<v-btn
                color="red"
                dark
                large
                height="45px"
                @click="open(block)"
              >
                <v-icon color="white" class="mr-2">
                  mdi-plus
                </v-icon>
                Добавить услугу
              </v-btn>
						</v-toolbar>
					</template>
					<template v-slot:item.actions="{ item }">
						<v-icon
							class="mr-4"
							@click="editItem(item, block)"
						>
							mdi-pencil
						</v-icon>
						<v-icon
							@click="deleteItem(item, block)"
						>
							mdi-delete
						</v-icon>
					</template>
					<template v-slot:header.img>
						<v-tooltip bottom>
							<template v-slot:activator="{ on, attrs }">
								<v-icon
									v-bind="attrs"
									v-on="on"
								>
									mdi-image-outline
								</v-icon>
							</template>
							<span>Фотография</span>
						</v-tooltip>
					</template>
          <template v-slot:item.reservation="{ item }">
            <span v-if="item.reservation">
              Активно
            </span>
            <span v-else>
              Не активно
            </span>
          </template>
          <template v-slot:item.sale="{ item }">
            <span v-if="item.cash || item.card">
              Доступно
            </span>
            <span v-else>
              Не доступно
            </span>
          </template>
				</v-data-table>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	//import VImageInput from 'vuetify-image-input';

  export default {
		name: 'Services',
		components: {
			//VImageInput,
		},
    data: () => ({
			items: ['Рус', 'Англ'],
      dialog: false,
      dialogDelete: false,
      dialogBlock: false,
      editedItemIndex: -1,
      editedBlockIndex: -1,
			oldId: [3],
      oldBlockId: 1,
      editedBlock: {
        id: '',
        title: '',
        desc: '',
        type: '',
        services: [],
      },
      editedItem: {
        id: '',
        img: '',
				name: '',
				price: 0,
				reservation: false,
        cash: false,
        card: false,
				stat: 'Ожидает подтверждения',
      },
      blocks: [
        {
          id: 1,
          title: 'Цены и услуги',
          desc: '',
          type: '',
          services: [
            {
              id: 1,
              img: '',
              name: 'Студія танцю Studio Dance+',
              price: 300,
              reservation: true,
              cash: true,
              card: false,
              stat: 'Ожидает подтверждения',
            },
            {
              id: 2,
              img: '',
              name: 'Студія Studio Dance+',
              price: 250,
              reservation: false,
              cash: true,
              card: true,
              stat: 'Ожидает подтверждения',
            },
            {
              id: 3,
              img: '',
              name: 'Студія танцю Dance+',
              price: 350,
              reservation: true,
              cash: false,
              card: true,
              stat: 'Ожидает подтверждения',
            },
          ]
        },
      ]
    }),

    computed: {
			headers () {
        return [
          { text: 'ID', value: 'id', align: 'start' },
          { text: 'img', value: 'img', sortable: false, align: 'center' },
          { text: 'НАЗВАНИЕ', value: 'name' },
					{ text: 'ЦЕНА', value: 'price' },
          { text: 'БРОНИРОВАНИЕ', value: 'reservation' },
          { text: 'ПРОДАЖА', value: 'sale' },
          { text: 'СТАТУС', value: 'stat' },
          { text: 'ДЕЙСТВИЯ', value: 'actions', sortable: false, align: 'center' },
        ]
      },
      formTitle () {
        return this.editedIndex === -1 ? 'Добавить услугу' : 'Редактор услуги'
      },
      formBlockTitle () {
        return this.editedBlockIndex === -1 ? 'Добавить блок услуг' : 'Редактор блока услуг'
      },
			showSelect () {
        return this.isEnabled('header.data-table-select') || this.isEnabled('item.data-table-select')
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogBlock (val) {
        val || this.closeBlock()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    methods: {
      setDefaultBlock () {
        this.editedBlock = {
          id: '',
          title: '',
          desc: '',
          type: '',
          services: [],
        }
      },
      setDefaultItem () {
        this.editedItem = {
          id: '',
          img: '',
          name: '',
          price: 0,
          reservation: false,
          cash: false,
          card: false,
          stat: 'Ожидает подтверждения',
        }
      },
      editBlock (block) {
        this.editedBlockIndex = this.blocks.indexOf(block)
        this.editedBlock = Object.assign({}, block)
        this.dialogBlock = true
      },
      saveBlock () {
        if (this.editedBlockIndex > -1) {
          Object.assign(this.blocks[this.editedBlockIndex], this.editedBlock)
        } else {
          this.oldBlockId++
          this.editedBlock.id = this.oldBlockId
          this.blocks.push(this.editedBlock)
          this.oldId.push(0)
        }
        this.closeBlock()
      },
      deleteBlock() {
        this.blocks.splice(this.editedBlockIndex, 1)
        this.oldId.splice(this.editedBlockIndex, 1)
        this.closeBlock()
      },
      closeBlock () {
        this.dialogBlock = false
        this.$nextTick(() => {
          this.setDefaultBlock()
          this.editedBlockIndex = -1
          this.editedItemIndex = -1
        })
      },


      
      
      deleteItem (item, block) {
        this.editedBlockIndex = this.blocks.indexOf(block)
        this.editedItemIndex = this.blocks[this.editedBlockIndex].services.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.blocks[this.editedBlockIndex].services.splice(this.editedItemIndex, 1)
        this.closeDelete()
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedBlockIndex = -1
          this.editedItemIndex = -1
        })
      },



      open (block) {
        this.editedBlockIndex = this.blocks.indexOf(block)
        this.dialog = true
      },
      editItem (item, block) {
        this.editedBlockIndex = this.blocks.indexOf(block)
        this.editedItemIndex = this.blocks[this.editedBlockIndex].services.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      save () {
        if (this.editedItemIndex > -1) {
          Object.assign(this.blocks[this.editedBlockIndex].services[this.editedItemIndex], this.editedItem)
        } else {
          this.oldId[this.editedBlockIndex]++
          this.editedItem.id = this.oldId[this.editedBlockIndex]
          this.blocks[this.editedBlockIndex].services.push(this.editedItem)
        }
        this.close()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.setDefaultItem()
          this.editedBlockIndex = -1
          this.editedItemIndex = -1
        })
      },
    },
  }
</script>