<template lang="html">
  <div class="articles-overview">
    <v-row class="mt-1">
        <v-col cols="9">
          <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
            <!--Стаття-->
            <v-expansion-panel>
              <v-expansion-panel-header >
                <v-subheader
                  class="tab-subheader"
                >
                  статья
                </v-subheader>
                <template v-slot:actions>
                  <v-icon >
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-divider></v-divider>
              <v-expansion-panel-content class="pa-5">
                <v-text-field
                  v-model="name"
                  :rules="[rules.required, rules.counter]"
                  label="Название"
                  counter
                  maxlength="191"
                ></v-text-field>
                <v-row>
                  <v-col cols="5" class="d-grid cols-3-2">
                    <v-btn
                      depressed
                      class="btn-main"
                      height="36px"
                      small
                    >
                      вставить медиа
                    </v-btn>
                    <v-btn
                      depressed
                      class="btn-main"
                      height="36px"
                      small
                    >
                      Шорткоды
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <p class="text--disabled mb-2">
                      Полное описание
                    </p>
                    <v-text-field
                      outlined
                      dense
                      height="234px"
                    ></v-text-field>
                    <p class="text--disabled mb-2">
                      Короткое описание
                    </p>
                    <v-text-field
                      outlined
                      dense
                      height="82px"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- seo -->
            <v-expansion-panel>
              <v-expansion-panel-header >
                <v-subheader
                  class="tab-subheader"
                >
                  seo
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
                  class="pl-5"
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
                <v-tabs-items v-model="tab1">
                  <v-tab-item class="pa-5">
                    <v-text-field
                      v-model="seoMetaTitle"
                      :rules="[rules.required, rules.counter]"
                      label="Meta title"
                      counter
                      maxlength="191"
                    ></v-text-field>
                    <v-text-field
                      v-model="seoUrlAdress"
                      :rules="[rules.required, rules.counter]"
                      label="Канонический URL-адрес"
                      counter
                      maxlength="191"
                      class="mb-6"
                    ></v-text-field>
                    <p class="text--disabled mb-2">
                      Meta descriptopn
                    </p>
                    <v-textarea
                        outlined
                      >
                    </v-textarea>
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
                      v-model="google1"
                      :rules="[rules.required, rules.counter]"
                      label="Google"
                      counter
                      maxlength="191"
                      class="mb-5"
                    ></v-text-field>
                    <v-text-field
                      v-model="google2"
                      :rules="[rules.required, rules.counter]"
                      label="Google"
                      counter
                      maxlength="191"
                      class="mb-10"
                    ></v-text-field>
                  </v-tab-item>
                </v-tabs-items>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="3">
          <v-expansion-panels v-model="panel2" multiple active-class="mb-5">
            <!--Настройки-->
            <v-expansion-panel>
              <v-expansion-panel-header>
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
              <v-expansion-panel-content class="pa-5">
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-select
                      :items="settingsStatus"
                      label="Статус"
                    ></v-select>
                    <v-select
                      :items="settingsType"
                      label="Тип"
                    ></v-select>
                    <v-select
                      :items="settingsAuthor"
                      label="Добавил"
                    ></v-select>
                    <v-text-field
                      label="URL"
                    ></v-text-field>
                    <v-text-field
                      label="Дата публикации"
                    ></v-text-field>
                  </v-col>
                </v-row>
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
              <v-expansion-panel-content class="pa-5">
                <v-row class="d-flex">
                  <v-col>
                    <v-img
                      lazy-src="https://picsum.photos/id/11/10/6"
                      height="213"
                      src="https://picsum.photos/id/11/500/300"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!--Атрибути сторінки-->
            <v-expansion-panel>
              <v-expansion-panel-header >
                <v-subheader
                  class="tab-subheader"
                >
                  Атрибуты страницы
                </v-subheader>
                <template v-slot:actions>
                  <v-icon >
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-divider></v-divider>
              <v-expansion-panel-content class="pa-5">
                <v-select
                  :items="template"
                  label="Шаблон"
                  hide-details
                  class="mb-3"
                ></v-select>
                <v-text-field
                  label="Порядок"
                  hide-details
                  class="mb-3"
                ></v-text-field>
                <v-checkbox
                  v-model="top"
                  label="Топ"
                  color="primary"
                ></v-checkbox>
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
          panel1: [0, 1],
          panel2: [0, 1, 2],
          name: '',
          rules: {
            required: value => !!value || 'Required.',
            counter: value => value.length <= 191 || 'Max 191 characters',
          },
          tab1: null,
          tabs1: [
            'Основные',
            'Социальные сети',
          ],
          seoMetaTitle: '',
          seoUrlAdress: '',
          facebook: '',
          google1: '',
          google2: '',
          settingsStatus: ['Активно', 'Не активно'],
          settingsType: ['Локации', 'Места'],
          settingsAuthor: ['Anna Krivko'],
          template: '',
          top: false,
        }
      }
  }
</script>

<style lang="scss" scoped>
.articles-overview {
  background-color: #F9F9F9;
  padding: 0;
}
</style>
