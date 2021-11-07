<template lang="html">
  <div class="attributes-edit">
    <v-app-bar
      app
      color="white"
      class="px-3"
    >
      <v-toolbar-title class="font-weight-medium"> Атрибут # {{ $route.params.id }}</v-toolbar-title>
      <v-spacer></v-spacer>
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
    <v-row class="mt-1 px-2">
        <v-col cols="9">
          <v-expansion-panels v-model="panel1" multiple active-class="mb-5">
            <!-- General -->
            <v-expansion-panel class="px-0">
              <v-expansion-panel-header >
                <v-subheader
                  class="tab-subheader"
                >
                  General
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
                  <v-col cols="3">
                    <p class="mb-0 py-2">
                      Meta descriptopn
                    </p>
                  </v-col>
                  <v-col cols="7">
                    <v-text-field
                      label="product_number"
                      hide-details
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="pb-4">
                  <v-col cols="3">
                    <p class="mb-0 py-2">
                      Attribute Type
                    </p>
                  </v-col>
                  <v-col cols="7">
                    <v-select
                      :items="text"
                      label="Text"
                      background-color="white"
                      dense
                      outlined
                      hide-details
                    ></v-select>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Validations -->
            <v-expansion-panel class="px-0">
              <v-expansion-panel-header >
                <v-subheader
                  class="tab-subheader"
                >
                  Validations
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
                  <v-col cols="3">
                    <p class="mb-0 py-2">
                      Meta descriptopn
                    </p>
                  </v-col>
                  <v-col cols="7">
                    <v-text-field
                      label="product_number"
                      hide-details
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="pb-4">
                  <v-col cols="3">
                    <p class="mb-0 py-2">
                      Attribute Type
                    </p>
                  </v-col>
                  <v-col cols="7">
                    <v-select
                      :items="text"
                      label="Text"
                      background-color="white"
                      dense
                      outlined
                      hide-details
                    ></v-select>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Configuration -->
            <v-expansion-panel class="px-0">
              <v-expansion-panel-header >
                <v-subheader
                  class="tab-subheader"
                >
                  Configuration
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
                  <v-col cols="3">
                    <p class="mb-0 py-2">
                      Meta descriptopn
                    </p>
                  </v-col>
                  <v-col cols="7">
                    <v-text-field
                      label="product_number"
                      hide-details
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="pb-4">
                  <v-col cols="3">
                    <p class="mb-0 py-2">
                      Attribute Type
                    </p>
                  </v-col>
                  <v-col cols="7">
                    <v-select
                      :items="text"
                      label="Text"
                      background-color="white"
                      dense
                      outlined
                      hide-details
                    ></v-select>
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
        panel1: [0, 1, 2],
        text: [''],
      }
    }
  }
</script>

<style lang="scss" scoped>
.attributes-edit {

}
</style>
