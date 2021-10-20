<template lang="html">
  <div class="product-overview">
    <v-row>
      <v-col
        cols="9"
      >
      <v-expansion-panels class="mx-3 my-6" >
        <v-expansion-panel>
          <v-expansion-panel-header >
            <v-subheader
              class="font-weight-medium text-uppercase text-md-body-1 pl-0 pt-0"
            >
              описание
            </v-subheader>
            <template v-slot:actions class="pt=0">
              <v-icon color="$grey">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content class="ma-4">
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
            <p class="text--disabled text-start mb-2">
              Полное описание
            </p>
            <v-textarea
                color="$grey"
                outlined
              >
            </v-textarea>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>



      <v-expansion-panels class="mx-3 my-6" >
        <v-expansion-panel>
          <v-expansion-panel-header >
            <v-subheader
              class="font-weight-medium text-uppercase text-md-body-1 pl-0 pt-0"
            >
              Полное описание товара
            </v-subheader>
            <template v-slot:actions class="pt=0">
              <v-icon color="$grey">
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
                color="$grey"
                outlined
              >
            </v-textarea>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels class="mx-3 my-6" >
        <v-expansion-panel>
          <v-expansion-panel-header >
            <v-subheader
              class="font-weight-medium text-uppercase text-md-body-1 pl-0 pt-0"
            >
              Контактная информация
            </v-subheader>
            <template v-slot:actions class="pt=0">
              <v-icon color="$grey">
                $expand
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-tabs
              v-model="tab"
              align-with-title
              class="px-0"
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab
                v-for="item in tabs"
                :key="item"
                :to="item.component"
              >
                {{ item }}
              </v-tab>
            </v-tabs>
            <v-divider></v-divider>
            <v-tabs-items v-model="tab">
              <v-tab-item class="ma-5">
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
      tab: null,
      tabs: [
        'Адрес',
        'Социальные сети',
        'Часы работы',
      ],
    })
  }
}
</script>

<style lang="css" scoped>
.product-overview {
  background-color: #F9F9F9;
  padding: 0;
}
</style>
