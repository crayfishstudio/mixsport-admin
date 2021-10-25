<template lang="html">
  <div class="product-overview">
    <v-row>
      <v-col
        cols="9"
      >
        <v-expansion-panels multiple active-class="mb-5">
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
              <v-textarea
                  color="grey"
                  outlined
                >
              </v-textarea>
            </v-expansion-panel-content>
          </v-expansion-panel>
        <!--Налаштування товару-->
          <v-expansion-panel>
            <v-expansion-panel-header >
              <v-subheader
                class="tab-subheader"
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
                  <v-expansion-panels class="mb-7" multiple>
                    <v-expansion-panel>
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
                      <v-expansion-panel-content class="ma-4">

                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header >
                        <v-subheader
                          class="tab-subheader"
                        >
                          Запасы
                        </v-subheader>
                        <template v-slot:actions>
                          <v-icon >
                            $expand
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>
                      <v-divider></v-divider>
                      <v-expansion-panel-content class="px-5 py-4">
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
                              color="red"
                              value="red"
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
                              color="red"
                              value="red"
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
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
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
                    <v-expansion-panel>
                      <v-expansion-panel-header >
                        <v-subheader
                          class="tab-subheader"
                        >
                          Сопутствующие товары
                        </v-subheader>
                        <template v-slot:actions>
                          <v-icon >
                            $expand
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>
                      <v-divider></v-divider>
                      <v-expansion-panel-content class="pa-4">
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
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
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
                              color="red"
                              value="red"
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
                  </v-expansion-panels>
                </v-tab-item>
                <v-tab-item>
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
            <v-expansion-panel-content class="ma-4">
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
                align-with-title
                class="px-0"
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
                <v-tab-item>
                </v-tab-item>
              </v-tabs-items>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        cols="3"
      >
        <v-expansion-panels multiple active-class="mb-5">
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
                    color="red"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeTop"
                    label="Топ"
                    color="red"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeNew"
                    label="Новый"
                    color="red"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeHit"
                    label="Хит"
                    color="red"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeSale"
                    label="Акция"
                    color="red"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeGift"
                    label="Подарок"
                    color="red"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeFree"
                    label="Бесплатно"
                    color="red"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="attributeBestseller"
                    label="Бестселлер"
                    color="red"
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
                    color="red"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="sport"
                    label="Спорт"
                    color="red"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="free"
                    label="Бесплатно"
                    color="red"
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
                  outlined
                  color="graylight"
                  class="bg-white"
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
  </div>
</template>

<script>
export default {
  data() {
    return ({
      title: '',
      descriptionkod: '',
      descriptiontitle: '',
      district: '',
      adress: '',
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
      ex4: ['red'],
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
    })
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

</style>
