<template lang="html">
  <div class="customers-overview">
    <v-row class="mt-1">
      <v-col cols="9">
        <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
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
                <v-col cols="12" class="pb-8">
                  <v-text-field
                    v-model="name"
                    :rules="[rules.required, rules.counter]"
                    label="Имя"
                    counter
                    maxlength="191"
                  ></v-text-field>
                  <v-text-field
                    v-model="surname"
                    :rules="[rules.required, rules.counter]"
                    label="Имя"
                    counter
                    maxlength="191"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.counter]"
                    label="Email"
                    counter
                    maxlength="191"
                  ></v-text-field>
                  <v-select
                    :items="gender"
                    label="Пол"
                    class=""
                  ></v-select>
                  <v-text-field
                    v-model="birthDate"
                    :rules="[rules.required, rules.counter]"
                    label="Дата рождения"
                    counter
                    maxlength="191"
                  ></v-text-field>
                  <v-text-field
                    v-model="telNumb"
                    :rules="[rules.required, rules.counter]"
                    label="Телефон"
                    counter
                    maxlength="191"
                  ></v-text-field>
                </v-col>
              </v-row>
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
                <v-col cols="12">
                  <v-select
                    :items="customerGroup"
                    label="Группа клиентов"
                    class="pt-0 pb-2"
                    hide-details
                  ></v-select>
                  <v-checkbox
                    v-model="settingsActive"
                    label="Активный"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                  <v-text-field
                    v-model="commission"
                    :rules="[rules.required, rules.counter]"
                    label="Коммисия"
                    counter
                    maxlength="191"
                    class=""
                  ></v-text-field>
                  <v-text-field
                    v-model="commPersent"
                    :rules="[rules.required, rules.counter]"
                    label="Commission Percentage"
                    counter
                    maxlength="191"
                    class=""
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-end">
                  <v-btn
                    dense
                    class="btn-black mb-2"
                    height="45px"
                    small
                  >
                    Change Commission
                  </v-btn>
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
        panel1: [0],
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 191 || 'Max 191 characters',
        },
        name: '',
        surname: '',
        email: '',
        gender: ['Мужчина', 'Женщина'],
        birthDate: '',
        telNumb: '',
        panel2: [0],
        customerGroup: ['Основная', 'Гость', 'Оптовик'],
        commission: '',
        commPersent: '',
        settingsActive: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
.customers-overview {
  background-color: #F9F9F9;
  padding: 0;

  .btn-black {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    color: $white !important;
    background-color: $black !important;
  }
}
</style>
