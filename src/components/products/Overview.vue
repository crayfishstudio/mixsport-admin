<template lang="html">
  <div class="product-overview">
    <v-row>
      <v-col
        cols="9"
      >
        <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
          <!--Опис-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                описание
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-4">
              <v-text-field
                v-model="descriptionkod"
                :rules="[rules.required, rules.counter]"
                label="SKU"
                counter
                maxlength="191"
              ></v-text-field>
              <v-text-field
                v-model="title"
                :rules="[rules.required, rules.counter]"
                label="Название"
                counter
                maxlength="191"
                class="mb-6"
              ></v-text-field>
              <p class="text--disabled mb-2">
                Полное описание
              </p>
              <quill-editor
                :content="content"
                :options="editorOption"
                @change="onEditorChange($event)"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        <!--Налаштування товару-->
          <v-expansion-panel>
            <v-expansion-panel-header >
                <v-subheader
                  class="tab-subheader mr-7"
                >
                  Настройки товара
                </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
              <v-tabs
                v-model="tab1"
                class="px-5"
              >
                <v-tabs-slider></v-tabs-slider>
                <v-tab
                  v-for="item in tabs1"
                  :key="item"
                  :to="item.component"
                >
                  {{ item }}
                </v-tab>
              </v-tabs>
              <v-divider></v-divider>
              <v-tabs-items v-model="tab1" class="px-5">
                <!-- Основне -->
                <v-tab-item>
                  <v-row class="d-flex mt-2 mb-1">
                    <v-col cols="3">
                      <v-text-field
                        label="Базовая цена"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        label="Цена со скидкой"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-expansion-panels
                    class="mb-7"
                    v-model="panel3"
                    multiple
                    flat
                  >
                    <!-- Дати розпродажу -->
                    <v-expansion-panel class="bordered">
                      <v-expansion-panel-header >
                        <v-subheader
                          class="tab-subheader"
                        >
                          Даты распродажи
                        </v-subheader>
                        <template v-slot:actions>
                          <v-icon >
                            $expand
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>
                      <v-divider></v-divider>
                      <v-expansion-panel-content class="px-5 pb-5">
                        <v-row>
                          <v-col cols="5">
                            <v-subheader
                              class="tabs-subheader"
                            >
                              Дата начала
                            </v-subheader>
                          </v-col>
                          <v-col cols="7">
                            <v-subheader
                              class="tabs-subheader"
                            >
                              Дата окончания
                            </v-subheader>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col
                            cols="12"
                            class="d-grid cols-3-2-3-2-2 pt-0"
                          >
                            <!-- Тут дата-1 -->
                            <v-dialog
                              ref="dialog"
                              v-model="saleday1"
                              :return-value.sync="date"
                              persistent
                              width="290px"
                              title-date-format
                              input="string"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="date"
                                  prepend-inner-icon="mdi-calendar"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  hide-details
                                  outlined
                                  dense
                                  color="mgrey"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="date"
                                scrollable
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="saleday1 = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.dialog.save(date)"
                                >
                                  OK
                                </v-btn>
                              </v-date-picker>
                            </v-dialog>
                            <!-- Тут година-1 -->
                            <v-dialog
                              ref="saletime1"
                              v-model="menu15"
                              :return-value.sync="time15"
                              persistent
                              width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="time15"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  hide-details
                                  outlined
                                  dense
                                ></v-text-field>
                              </template>
                              <v-time-picker
                                v-if="menu15"
                                v-model="time15"
                                full-width
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="menu15 = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.saletime1.save(time15)"
                                >
                                  OK
                                </v-btn>
                              </v-time-picker>
                            </v-dialog>
                            <!-- Тут дата-2 -->
                            <v-dialog
                              ref="dialog2"
                              v-model="saleday2"
                              :return-value.sync="date2"
                              persistent
                              width="290px"
                              title-date-format
                              input="string"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="date2"
                                  prepend-inner-icon="mdi-calendar"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  hide-details
                                  outlined
                                  dense
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="date2"
                                scrollable
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="saleday2 = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.dialog2.save(date2)"
                                >
                                  OK
                                </v-btn>
                              </v-date-picker>
                            </v-dialog>
                            <!-- Тут година-2 -->
                            <v-dialog
                              ref="saletime2"
                              v-model="menu16"
                              :return-value.sync="time16"
                              persistent
                              width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="time16"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  hide-details
                                  outlined
                                  dense
                                ></v-text-field>
                              </template>
                              <v-time-picker
                                v-if="menu16"
                                v-model="time16"
                                full-width
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="menu16 = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.saletime2.save(time16)"
                                >
                                  OK
                                </v-btn>
                              </v-time-picker>
                            </v-dialog>
                            <v-btn
                              fab
                              small
                              color="graylightsecond"
                              depressed
                              class="mr-3"
                            >
                              <v-icon color="grey">
                                mdi-plus
                              </v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col
                            cols="12"
                            class="d-grid cols-3-2-3-2-2"
                          >
                            <!-- Тут дата-3 -->
                            <v-dialog
                              ref="dialog3"
                              v-model="saleday3"
                              :return-value.sync="date3"
                              persistent
                              width="290px"
                              title-date-format
                              input="string"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="date3"
                                  prepend-inner-icon="mdi-calendar"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  hide-details
                                  outlined
                                  dense
                                  color="mgrey"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="date3"
                                scrollable
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="saleday3 = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.dialog3.save(date3)"
                                >
                                  OK
                                </v-btn>
                              </v-date-picker>
                            </v-dialog>
                            <!-- Тут година-3 -->
                            <v-dialog
                              ref="saletime3"
                              v-model="menu17"
                              :return-value.sync="time17"
                              persistent
                              width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="time17"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  hide-details
                                  outlined
                                  dense
                                ></v-text-field>
                              </template>
                              <v-time-picker
                                v-if="menu17"
                                v-model="time17"
                                full-width
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="menu17 = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.saletime3.save(time17)"
                                >
                                  OK
                                </v-btn>
                              </v-time-picker>
                            </v-dialog>
                            <!-- Тут дата-4 -->
                            <v-dialog
                              ref="dialog4"
                              v-model="saleday4"
                              :return-value.sync="date4"
                              persistent
                              width="290px"
                              title-date-format
                              input="string"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="date4"
                                  prepend-inner-icon="mdi-calendar"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  hide-details
                                  outlined
                                  dense
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="date4"
                                scrollable
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="saleday4 = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.dialog4.save(date4)"
                                >
                                  OK
                                </v-btn>
                              </v-date-picker>
                            </v-dialog>
                            <!-- Тут година-4 -->
                            <v-dialog
                              ref="saletime4"
                              v-model="menu18"
                              :return-value.sync="time18"
                              persistent
                              width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="time18"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  hide-details
                                  outlined
                                  dense
                                ></v-text-field>
                              </template>
                              <v-time-picker
                                v-if="menu18"
                                v-model="time18"
                                full-width
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="menu18 = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.saletime4.save(time18)"
                                >
                                  OK
                                </v-btn>
                              </v-time-picker>
                            </v-dialog>
                            <div class="d-flex justify-start">
                              <v-btn
                                fab
                                small
                                color="graylightsecond"
                                depressed
                                class="mr-3"
                              >
                                <v-icon color="grey">
                                  mdi-plus
                                </v-icon>
                              </v-btn>
                              <v-btn
                                fab
                                small
                                color="graylightsecond"
                                depressed
                              >
                                <v-icon color="grey">
                                  mdi-minus
                                </v-icon>
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- Доставка -->
                    <v-expansion-panel class="bordered">
                      <v-expansion-panel-header >
                        <v-subheader
                          class="tab-subheader"
                        >
                          Доставка
                        </v-subheader>
                        <template v-slot:actions>
                          <v-icon >
                            $expand
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>
                      <v-divider></v-divider>
                      <v-expansion-panel-content class="ma-4">
                        <v-row class="align-center">
                          <v-col cols="3">
                            <v-subheader>Вес</v-subheader>
                          </v-col>
                          <v-col cols="6" class="pt-0">
                            <v-text-field hide-details></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="align-center">
                          <v-col cols="3">
                            <v-subheader>Размеры</v-subheader>
                          </v-col>
                          <v-col cols="6" class="d-flex pt-0">
                            <v-text-field
                              hide-details
                              cols="2"
                              class="mr-5"
                              label="Длина"
                            ></v-text-field>
                            <v-text-field
                              hide-details
                                cols="2"
                                class="mr-5"
                                label="Ширина"
                            ></v-text-field>
                            <v-text-field
                              hide-details
                                cols="2"
                                label="Выстота"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- Додатково -->
                    <v-expansion-panel class="bordered">
                      <v-expansion-panel-header >
                        <v-subheader
                          class="tab-subheader"
                        >
                          Дополнительно
                        </v-subheader>
                        <template v-slot:actions>
                          <v-icon >
                            $expand
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>
                      <v-divider></v-divider>
                      <v-expansion-panel-content class="ma-4">
                        <v-row>
                          <v-col cols="3" class="pt-0">
                            <v-subheader>Примечание к покупке</v-subheader>
                          </v-col>
                          <v-col cols="8" class="pt-0">
                            <v-textarea
                                color="grey"
                                outlined
                                height="80px"
                                hide-details
                              >
                            </v-textarea>
                          </v-col>
                        </v-row>
                        <v-row class="align-center">
                          <v-col cols="3">
                            <v-subheader>Порядок</v-subheader>
                          </v-col>
                          <v-col cols="8" class="pt-0">
                            <v-text-field hide-details></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="align-center">
                          <v-col cols="3">
                            <v-subheader>Включить отзывы</v-subheader>
                          </v-col>
                          <v-col cols="6">
                            <v-checkbox
                              v-model="ex4"
                              color="primary"
                              value="primary"
                              hide-details
                              small
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                        <v-row class="align-center">
                          <v-col cols="3">
                            <v-subheader>Автор фото</v-subheader>
                          </v-col>
                          <v-col cols="8" class="pt-0">
                            <v-text-field hide-details label="Прізвище"></v-text-field>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- Варіанти -->
                    <v-expansion-panel class="bordered">
                      <v-expansion-panel-header >
                        <v-subheader
                          class="tab-subheader"
                        >
                          Варианты
                        </v-subheader>
                        <template v-slot:actions>
                          <v-icon >
                            $expand
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>
                      <v-divider></v-divider>
                      <v-expansion-panel-content class="pa-4">
                        <v-row>
                          <v-col
                            cols="8"
                            class="d-grid cols-4-2-2"
                          >
                            <v-subheader>Значения форм по умолчанию:</v-subheader>
                            <v-select
                              :items="versionAttribute"
                              label="Размер"
                              background-color="white"
                              dense
                              outlined
                              hide-details
                            ></v-select>
                            <v-select
                              :items="versionColor"
                              background-color="white"
                              label="Цвета"
                              dense
                              outlined
                              hide-details
                            ></v-select>
                          </v-col>
                        </v-row>
                        <v-row class="mb-3">
                          <v-col
                            class="d-flex"
                            cols="5"
                          >
                            <v-select
                              :items="versionProduct"
                              outlined
                              hide-details
                              dense
                            ></v-select>
                          </v-col>
                          <v-col class="pl-0">
                            <v-btn
                              depressed
                              class="btn-main mr-3"
                              height="40px"
                              small
                            >
                              Добавить
                            </v-btn>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-card
                              class="card-products py-3 mb-4"
                              elevation="3"
                            >
                              <v-list-item class="mr-16">
                                <v-icon> mdi-view-headline </v-icon>
                                <div class="font-weight-medium ml-5">
                                  #519
                                </div>
                                <div class="d-grid cols-2-2 mx-15">
                                  <v-select
                                    :items="versionAttribute"
                                    label="Размер"
                                    background-color="white"
                                    dense
                                    outlined
                                    hide-details
                                  ></v-select>
                                  <v-select
                                    :items="versionColor"
                                    background-color="white"
                                    label="Цвета"
                                    dense
                                    outlined
                                    hide-details
                                  ></v-select>
                                </div>
                              </v-list-item>
                              <v-card-actions class="pr-4">
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
                              </v-card-actions>
                            </v-card>
                            <v-card
                              class="card-products py-3"
                              elevation="3"
                            >
                              <v-list-item class="mr-16">
                                <v-icon> mdi-view-headline </v-icon>
                                <div class="font-weight-medium ml-5">
                                  #519
                                </div>
                                <div class="d-grid cols-2-2 mx-15">
                                  <v-select
                                    :items="versionAttribute"
                                    label="Размер"
                                    background-color="white"
                                    dense
                                    outlined
                                    hide-details
                                  ></v-select>
                                  <v-select
                                    :items="versionColor"
                                    background-color="white"
                                    label="Цвета"
                                    dense
                                    outlined
                                    hide-details
                                  ></v-select>
                                </div>
                              </v-list-item>
                              <v-card-actions class="pr-4">
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
                              </v-card-actions>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <!-- Товари в групі -->
                    <v-expansion-panel class="bordered">
                      <v-expansion-panel-header >
                        <v-subheader
                          class="tab-subheader"
                        >
                          Товары в группе
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
                              :single-select="singleSelect"
                              item-key="id"
                              show-select
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
                    <!--  Файли -->
                    <v-expansion-panel class="bordered">
                      <v-expansion-panel-header >
                        <v-subheader
                          class="tab-subheader"
                        >
                          Файлы
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
                              v-model="selected2"
                              :headers="headers2"
                              :items="products2"
                              :single-select="singleSelect2"
                              item-key="id"
                              show-select
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
                                  class="mr-3">
                                  mdi-download
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
                                  @click="initialize2"
                                >
                                  Reset
                                </v-btn>
                              </template>
                            </v-data-table>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-row class="py-3 mt-4">
                      <v-col cols="10">
                        <div class="d-grid text-directions cols-2-2-4">
                          <p class="text--secondary ma-0"
                          >Лимит загрузок</p>
                          <v-text-field
                            outlined
                            dense
                            label="Без лимита"
                            hide-details
                          >
                          </v-text-field>
                          <p class="text--secondary text-caption ma-0">Оставьте пустым для неограниченных повторных скачиваний.</p>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="10">
                        <div class="d-grid text-directions cols-2-2-4">
                          <p class="text--secondary ma-0"
                          >Истечение срока загрузки</p>
                          <v-text-field
                            outlined
                            dense
                            label="Никогда"
                            hide-details
                          >
                          </v-text-field>
                          <p class="text--secondary text-caption ma-0">Введите количество дней, по окончанию которых ссылка на скачивание перестанет работать, или оставьте пустым.</p>
                        </div>
                      </v-col>
                    </v-row>
                  </v-expansion-panels>
                </v-tab-item>
                <!-- Супутні товари -->
                <v-tab-item class="py-5">
                  <v-subheader
                    class="tab-subheader"
                  >
                    Сопутствующие товары
                  </v-subheader>
                  <v-row class="align-center">
                    <v-col cols="3">
                      <v-subheader>Up-sell</v-subheader>
                    </v-col>
                    <v-col cols="9" class="pt-0">
                      <v-select
                        v-model="upsell"
                        :items="items"
                        attach
                        chips
                        multiple
                        deletable-chips
                        hide-details
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="align-center">
                    <v-col cols="3">
                      <v-subheader>Cross-sell</v-subheader>
                    </v-col>
                    <v-col cols="9" class="pt-0">
                      <v-select
                        v-model="crosssell"
                        :items="items"
                        attach
                        chips
                        multiple
                        deletable-chips
                        hide-details
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-tab-item>
                <!-- Запаси -->
                <v-tab-item class="py-5">
                  <v-subheader
                    class="tab-subheader"
                  >
                    Запасы
                  </v-subheader>
                  <v-row>
                    <v-col cols="3">
                      <v-subheader>Артикул  (SKU)</v-subheader>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field hide-details></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-subheader>Управлять запасами?</v-subheader>
                    </v-col>
                    <v-col cols="6">
                      <v-checkbox
                        v-model="ex4"
                        label="Включить управление запасами на уровне товаров"
                        color="primary"
                        value="primary"
                        hide-details
                        small
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-subheader>Количество в запасе</v-subheader>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field hide-details></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-subheader>Разрешить предзаказы?</v-subheader>
                    </v-col>
                    <v-col cols="6">
                      <v-select
                        :items="permit"
                        hide-details
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="align-center">
                    <v-col cols="3">
                      <v-subheader>Граница малых запасов</v-subheader>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field hide-details></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="align-center">
                    <v-col cols="3">
                      <v-subheader>Статус остатка</v-subheader>
                    </v-col>
                    <v-col cols="6">
                      <v-select
                        :items="status"
                        hide-details
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="align-center">
                    <v-col cols="3">
                      <v-subheader>Продавать индивидуально</v-subheader>
                    </v-col>
                    <v-col cols="6" class="pt-0">
                      <v-checkbox
                        v-model="ex4"
                        label="Включить для того чтобы товар продавался индивидуально в одном заказе."
                        color="primary"
                        value="primary"
                        hide-details
                        small
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-row class="align-center">
                    <v-col cols="3">
                      <v-subheader>Количество покупок</v-subheader>
                    </v-col>
                    <v-col cols="4" class="pt-0">
                      <v-text-field hide-details label="Количество покупок" ></v-text-field>
                    </v-col>
                  </v-row>
                </v-tab-item>
                <!-- Атрибути -->
                <v-tab-item class="py-5">
                  <v-subheader
                    class="tab-subheader"
                  >
                    Атрибуты Продукта
                  </v-subheader>
                  <template v-slot:actions>
                    <v-icon >
                      $expand
                    </v-icon>
                  </template>
                  <v-row class="mb-3">
                    <v-col
                      class="d-flex"
                      cols="6"
                    >
                      <v-select
                        :items="attributeProduct"
                        outlined
                        hide-details
                        dense
                      ></v-select>
                    </v-col>
                    <v-col class="pl-0">
                      <v-btn
                        depressed
                        class="btn-main mr-3"
                        height="40px"
                        small
                      >
                        Добавить
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-card
                        class="card-products mb-4 py-3"
                        elevation="3"
                      >
                        <v-list-item>
                          <v-icon> mdi-view-headline </v-icon>
                          <p class="mb-0 mx-12">Размер</p>
                          <p class="mb-0">L, XL, XXXL</p>
                          <v-spacer></v-spacer>
                          <v-card-actions>
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
                          </v-card-actions>
                        </v-list-item>
                      </v-card>
                      <v-card
                        class="card-products py-3"
                        elevation="3"
                      >
                        <v-list-item>
                          <v-icon> mdi-view-headline </v-icon>
                          <p class="mb-0 mx-12">Цвета</p>
                          <p class="mb-0">Белый,    Серый,    Черный</p>
                          <v-spacer></v-spacer>
                          <v-card-actions>
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
                          </v-card-actions>
                        </v-list-item>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-tab-item>
              </v-tabs-items>
            </v-expansion-panel-content>
          </v-expansion-panel>
        <!--Повний опис товару-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Полное описание товара
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <p class="text--disabled text-start mb-2">
                Полное описание
              </p>
              <v-textarea
                  outlined
                >
              </v-textarea>
            </v-expansion-panel-content>
          </v-expansion-panel>
        <!--Контактна інформація-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Контактная информация
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
              <v-tabs
                v-model="tab2"
                class="pl-5"
              >
                <v-tabs-slider></v-tabs-slider>

                <v-tab
                  v-for="item in tabs2"
                  :key="item"
                  :to="item.component"
                >
                  {{ item }}
                </v-tab>
              </v-tabs>
              <v-divider></v-divider>
              <v-tabs-items v-model="tab2">
                <v-tab-item class="pa-5">
                  <v-text-field
                    v-model="district"
                    :rules="[rules.required, rules.counter]"
                    label="Виберите район"
                    counter
                    maxlength="191"
                  ></v-text-field>
                  <v-text-field
                    v-model="adress"
                    :rules="[rules.required, rules.counter]"
                    label="Адрес"
                    counter
                    maxlength="191"
                  ></v-text-field>
                  <v-text-field
                    label="Сайт"
                    class="mb-3"
                  ></v-text-field>
                  <v-text-field
                    label="Телефон"
                    append-outer-icon="mdi-plus"
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    append-outer-icon="mdi-plus"
                  ></v-text-field>
                  <v-row class="d-flex">
                    <v-col cols="5" >
                      <v-text-field
                        v-model="latitude"
                        :rules="[rules.required, rules.counter]"
                        label="Latitude"
                        counter
                        maxlength="191"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        v-model="longitude"
                        :rules="[rules.required, rules.counter]"
                        label="Longitude"
                        counter
                        maxlength="191"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center justify-center">
                      <v-btn icon color="graylight">
                        <v-icon class="">
                          mdi-help-circle
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-tab-item>
                <v-tab-item class="pa-5">
                  <v-text-field
                    v-model="facebook"
                    :rules="[rules.required, rules.counter]"
                    label="Facebook"
                    counter
                    maxlength="191"
                    class="mb-3"
                  ></v-text-field>
                  <v-text-field
                    v-model="google"
                    :rules="[rules.required, rules.counter]"
                    label="Google"
                    counter
                    maxlength="191"
                    class="mb-5"
                  ></v-text-field>
                  <v-text-field
                    v-model="google"
                    :rules="[rules.required, rules.counter]"
                    label="Google"
                    counter
                    maxlength="191"
                    class="mb-10"
                  ></v-text-field>
                </v-tab-item>
                <v-tab-item class="pa-5">
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                      Понеділок
                    </p>
                    <v-switch
                      v-model="switchMonday"
                      :label="switchMonday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockMon1"
                      v-model="menu"
                      :return-value.sync="time"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu"
                        v-model="time"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockMon1.save(time)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockMon2"
                      v-model="menu2"
                      :return-value.sync="time2"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time2"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu2"
                        v-model="time2"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu2 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockMon2.save(time2)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                      Вівторок
                    </p>
                    <v-switch
                      v-model="switchTuesday"
                      :label="switchTuesday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockTues1"
                      v-model="menu3"
                      :return-value.sync="time3"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time3"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu3"
                        v-model="time3"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu3 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockTues1.save(time3)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockTues2"
                      v-model="menu4"
                      :return-value.sync="time4"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time4"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu4"
                        v-model="time4"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu4 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockTues2.save(time4)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                        Середа
                    </p>
                    <v-switch
                      v-model="switchWednesday"
                      :label="switchWednesday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockWedn1"
                      v-model="menu5"
                      :return-value.sync="time5"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time5"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu5"
                        v-model="time5"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu5 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockWedn1.save(time5)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockWedn2"
                      v-model="menu6"
                      :return-value.sync="time6"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time6"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu6"
                        v-model="time6"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu6 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockWedn2.save(time6)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                        Четвер
                    </p>
                    <v-switch
                      v-model="switchThursday"
                      :label="switchThursday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockThurs1"
                      v-model="menu7"
                      :return-value.sync="time7"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time7"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu7"
                        v-model="time7"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu7 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockThurs1.save(time7)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockThurs2"
                      v-model="menu8"
                      :return-value.sync="time8"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time8"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu8"
                        v-model="time8"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu8 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockThurs2.save(time8)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                        Пятниця
                    </p>
                    <v-switch
                      v-model="switchFriday"
                      :label="switchFriday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockFri1"
                      v-model="menu9"
                      :return-value.sync="time9"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time9"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu9"
                        v-model="time9"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu9 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockFri1.save(time9)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockFri2"
                      v-model="menu10"
                      :return-value.sync="time10"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time10"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu10"
                        v-model="time10"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu10 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockFri2.save(time10)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                        Субота
                    </p>
                    <v-switch
                      v-model="switchSaturday"
                      :label="switchSaturday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockSatur1"
                      v-model="menu11"
                      :return-value.sync="time11"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time11"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu11"
                        v-model="time11"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu11 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockSatur1.save(time11)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockSatur2"
                      v-model="menu12"
                      :return-value.sync="time12"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time12"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu12"
                        v-model="time12"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu12 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockSatur2.save(time12)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                  <div class="d-grid cols-2-2-2-1-2-1 align-center pr-12 mb-7">
                    <p class="font-weight-medium mb-0" color= "graylight">
                        Неділя
                    </p>
                    <v-switch
                      v-model="switchSunday"
                      :label="switchSunday ? 'Відчинено' : 'Зачинено'"
                      color="primary"
                      hide-details
                      class="mt-0"
                    ></v-switch>
                    <v-dialog
                      ref="clockSun1"
                      v-model="menu13"
                      :return-value.sync="time13"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time13"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu13"
                        v-model="time13"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu13 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockSun1.save(time13)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-icon>
                      mdi-minus
                    </v-icon>
                    <v-dialog
                      ref="clockSun2"
                      v-model="menu14"
                      :return-value.sync="time14"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="time14"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu14"
                        v-model="time14"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu14 = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.clockSun2.save(time14)"
                        >
                          OK
                        </v-btn>
                      </v-time-picker>
                    </v-dialog>
                    <v-btn
                      fab
                      small
                      color="graylightsecond"
                      depressed
                      class="ml-2"
                    >
                      <v-icon color="grey">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </v-expansion-panel-content>
          </v-expansion-panel>
        <!-- Атрибути -->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Атрибуты
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="ISBN"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Автор"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="Видавець"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Поставщик"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="Язык"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Перевод"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="Количество страниц"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Рік випуску"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="Вік"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        cols="3"
      >
        <v-expansion-panels v-model="panel2" multiple active-class="mb-5">
          <!--Настройки-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Настройки
              </v-subheader>
              <template v-slot:actions>
                <v-icon>
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="px-5 py-3">
              <v-row>
                <v-col cols="12">
                  <v-select
                    :items="settingAdd"
                    label="Добавил"
                  ></v-select>
                  <v-select
                    :items="settingsStatus"
                    label="Статус"
                  ></v-select>
                  <v-text-field
                    label="Слаг"
                  ></v-text-field>
                  <v-text-field
                    label="Дата публикации"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Атрибуты-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Атрибуты
              </v-subheader>
              <template v-slot:actions>
                <v-icon color="grey">
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="px-5 pb-5">
              <v-row>
                <v-col cols="12">
                  <v-checkbox
                    v-model="attributeActive"
                    label="Активный"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeTop"
                    label="Топ"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeNew"
                    label="Новый"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeHit"
                    label="Хит"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeSale"
                    label="Акция"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeGift"
                    label="Подарок"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeFree"
                    label="Бесплатно"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeBestseller"
                    label="Бестселлер"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--категории-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                категории
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="px-5 pb-5">
              <v-row>
                <v-col cols="12">
                  <v-checkbox
                    v-model="recreation"
                    label="Активный отдых"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="sport"
                    label="Спорт"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="free"
                    label="Бесплатно"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Метки-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Метки
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <div class="d-grid cols-3-2">
                <v-text-field
                  outlined
                  hide-details
                  dense
                ></v-text-field>
                <v-btn
                  depressed
                  class="btn-main"
                  small
                  height="100%"
                >
                  Добавить
                </v-btn>
              </div>
              <v-subheader> Разделяйте метки запятыми </v-subheader>
              <v-chip-group
                column
              >
                <v-chip
                  close
                  close-icon="mdi-close"
                  small
                > Активный отдых </v-chip>
                <v-chip
                  close
                  close-icon="mdi-close"
                  small
                >Пляж</v-chip>
                <v-chip
                  close
                  close-icon="mdi-close"
                  small
                >Бокс</v-chip>
                <v-chip
                  close
                  close-icon="mdi-close"
                  small
                >Хоккей</v-chip>
              </v-chip-group>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Изображение-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Изображение
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="px-5 pb-5">
              <v-row class="d-flex">
                <v-col>
                  <v-file-input
                    label="Установить изображение страницы"
                    hide-details
                    prepend-icon=""
                    class="file-input"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--Галерея товара-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
              >
                Галерея товара
              </v-subheader>
              <template v-slot:actions>
                <v-icon >
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="pa-5">
              <div class="d-grid cols-2-2">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                ></v-img>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                ></v-img>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                ></v-img>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                ></v-img>
              </div>
              <v-row>
                <v-col>
                  <v-file-input
                    label="Добавить фото в галерею"
                    hide-details
                    prepend-icon=""
                    class="file-input"
                  ></v-file-input>
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
    <v-dialog v-model="dialogDelete2" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="graylight" text @click="closeDelete2">Cancel</v-btn>
          <v-btn color="primary" text @click="deleteItemConfirm2">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      panel1: [0, 1, 2, 3, 4],
      panel2: [0, 1, 2, 3, 4, 5],
      panel3: [0, 1, 2, 3, 4, 5, 6],
      dropdown_font: [
        { text: 'Arial' },
        { text: 'Calibri' },
        { text: 'Courier' },
        { text: 'Verdana' },
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' },
      ],
      toggle_exclusive: 2,
      toggle_multiple: [1, 2, 3],
      title: '',
      descriptionkod: '',
      descriptiontitle: '',
      district: '',
      adress: '',
      facebook: '',
      google: '',
      latitude: '',
      longitude: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 191 || 'Max 191 characters',
      },
      tab1: null,
      tabs1: [
        'Основные',
        'Сопутствующие',
        'Запасы',
        'Атрибуты',
      ],
      tab2: null,
      tabs2: [
        'Адрес',
        'Социальные сети',
        'Часы работы',
      ],
      permit: ['Не разрешать', 'Разрешать'],
      ex4: ['primary'],
      status: ['В наличии', 'Нет в наличии'],
      items: ['Funsport', 'Спорт', 'Активный отдых'],
      upsell: ['Funsport', 'Спорт', 'Активный отдых'],
      crosssell: ['Funsport', 'Спорт', 'Активный отдых'],
      settingAdd: ['Администратор', 'Модератор'],
      settingsStatus: ['Активно', 'Не активно'],
      attributeActive: [false],
      attributeTop: [false],
      attributeNew: [false],
      attributeHit: [false],
      attributeSale: [false],
      attributeGift: [false],
      attributeFree: [false],
      attributeBestseller: [false],
      recreation: [false],
      sport: [true],
      free: [false],
      switchMonday: false,
      switchTuesday: false,
      switchWednesday: false,
      switchThursday: false,
      switchFriday: false,
      switchSaturday: false,
      switchSunday: false,
      time: null,
      menu: false,
      time2: null,
      menu2: false,
      time3: null,
      menu3: false,
      time4: null,
      menu4: false,
      time5: null,
      menu5: false,
      time6: null,
      menu6: false,
      time7: null,
      menu7: false,
      time8: null,
      menu8: false,
      time9: null,
      menu9: false,
      time10: null,
      menu10: false,
      time11: null,
      menu11: false,
      time12: null,
      menu12: false,
      time13: null,
      menu13: false,
      time14: null,
      menu14: false,
      attributeProduct: ['Индивидуальный атрибут товара', 'Іще щось'],
      versionProduct: ['Добавить вариант', ''],
      versionAttribute: ['L', 'XL', 'XXXL'],
      versionColor: ['Белый', 'Серый', 'Черный'],
      subheaderSelect: ['Вариативный товар', 'Простой товар', 'Виртуальный товар', 'Партнерский товар'],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      saleday1: false,
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      saleday2: false,
      date3: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      saleday3: false,
      date4: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      saleday4: false,
      time15: null,
      menu15: false,
      time16: null,
      menu16: false,
      time17: null,
      menu17: false,
      time18: null,
      menu18: false,
      content: '<h2>I am Example</h2>',
      editorOption: {
        // Some Quill options...
      },
      dialog: false,
      dialogDelete: false,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'Название товара	',
          value: 'name'
        },
        {
          text: 'Активно',
          value: 'status',
          align: 'center',
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
      dialog2: false,
      dialogDelete2: false,
      singleSelect2: false,
      selected2: [],
      headers2: [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'Название товара	',
          value: 'name'
        },
        {
          text: 'Размер',
          value: 'size',
        },
        {
          text: 'Активно',
          value: 'status',
          align: 'center',
        },
        {
          text: 'Действия',
          value: 'actions',
          sortable: false,
          align: 'center',
        }
      ],
      products2: [],
      defaultItem2: {
      },
    })
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
    this.initialize(),
    this.initialize2()
  },

  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    },
    initialize () {
      this.products = [
        {
          id: 1,
          name: 'bespalov-m-use-shcho-vy-hotily-znaty-pro-irlandiyu.mobi	',
          status: true,
        },
        {
          id: 2,
          name: 'bespalov-m-use-shcho-vy-hotily-znaty-pro-irlandiyu.mobi	',
          status: true,
        },
        {
          id: 3,
          name: 'bespalov-m-use-shcho-vy-hotily-znaty-pro-irlandiyu.mobi	',
          status: false,
        },
      ]
    },
    initialize2 () {
      this.products2 = [
        {
          id: 1,
          name: 'bespalov-m-use-shcho-vy-hotily-znaty-pro-irlandiyu.mobi	',
          size: '5971.59 KB	',
          status: true,
        },
        {
          id: 2,
          name: 'bespalov-m-use-shcho-vy-hotily-znaty-pro-irlandiyu.mobi	',
          size: '5971.59 KB	',
          status: true,
        },
        {
          id: 3,
          name: 'bespalov-m-use-shcho-vy-hotily-znaty-pro-irlandiyu.mobi	',
          size: '5971.59 KB	',
          status: false,
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
    deleteItem2 (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm2 () {
      this.products.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    close2 () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete2 () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
  }
}
</script>

<style lang="css" scoped>
.product-overview {
  background-color: #F9F9F9;
  padding: 0;
}

.v-text-field {
  padding: 0px !important;
}

.v-subheader {
  padding: 0px !important;
}

.row {
  margin-top: 0 !important;
}

.text-directions {
  text-align: left;
}
</style>
