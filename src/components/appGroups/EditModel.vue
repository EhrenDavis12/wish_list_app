<template>
  <v-container>
    <h1>Im here</h1>
    <v-row>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            v-model="model.name"
            label="Group Name"
        ></v-text-field>
      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            v-model="model.description"
            label="Description"
        ></v-text-field>
      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-checkbox
            v-model="model.is_active"
            label="Active"
        ></v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "EditModel",
  props: {
    value:{
      type: Object,
      default: () => {}
    }
  },
  computed: {
    model: {
      // getter
      get: function () {
        return this.value;
      },
      // setter
      set: function (newValue) {
        this.$emit("input", newValue)
      }
    }
  }
}
</script>

<style scoped>

</style>