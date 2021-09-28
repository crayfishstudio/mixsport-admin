<template>
  <v-container>
    <v-row>
      <v-col md="3">
        <div class="d-flex">
          <v-select
            :items="items"
            label="Действия"
            dense
            height="45px"
            outlined
            hide-details
            background-color="white"
          ></v-select>
          <v-btn
            outlined
            large
            height="45px"
            class="ml-3"
            style="background-color: white"
          >
            Применить
          </v-btn>
        </div>
      </v-col>
      <v-col md="4" offset-md="1">
        <div class="d-flex">
          <v-btn
            outlined
            large
            height="45px"
            class="mr-3"
            style="background-color: white"
          >
            зАГРУЗИТЬ ФАЙЛЫ
          </v-btn>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            label="Поиск..."
            class="ml-3"
            single-line
            dense
            outlined
            height="45px"
            hide-details="auto"
            background-color="white"
          >
          </v-text-field>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="gallery-wrap">
          <v-item-group
            v-model="selected"
            multiple
          >
            <v-row>
              <v-col
                v-for="n in 12"
                :key="n"
                class="d-flex child-flex"
                cols="2"
              >
                <v-item v-slot="{ active, toggle }">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2 text-right pa-2 gallery-image"
                    @click="toggle"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                    <v-btn
                      icon
                    >
                      <v-icon>
                        {{ active ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
                      </v-icon>
                    </v-btn>
                  </v-img>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Photos',
  data: () => ({
    items: ['Рус', 'Англ'],
    selected: [],
  }),
}
</script>

<style lang="scss" scoped>

  .gallery-wrap {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  }
  .gallery-image {
    &::v-deep {
      &.v-item--active {
        i {
          color: red;
        }
      }
    }
  }
</style>