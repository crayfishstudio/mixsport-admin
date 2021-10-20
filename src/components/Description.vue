<template lang="html">
  <v-container class="description">
    <v-row>
      <v-col>
        <h3>описание</h3>
        <v-divider></v-divider>
        <v-text-field
          v-model="SKU"
          :rules="[rules.required, rules.counter]"
          label="SKU"
          counter
          maxlength="191"
          class="mb-5"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      SKU: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 191 || 'Max 191 characters',
      },
    }
  }
}
</script>

<style lang="css" scoped>
.description {
  background-color: #FFF;
  font-family: 'Roboto';

  h3 {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: $grey;
  }
}
</style>
