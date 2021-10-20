<template>
  <v-container>
    <v-row>
<!--      <v-col-->
<!--          cols="12"-->
<!--          sm="6"-->
<!--          md="4"-->
<!--      >-->
        <v-text-field
            v-model="model.name"
            label="Group Name"
        ></v-text-field>
<!--      </v-col>-->
    </v-row>
    <v-row>
<!--      <v-col-->
<!--          cols="12"-->
<!--          sm="6"-->
<!--          md="4"-->
<!--      >-->
        <v-textarea
            v-model="model.public_note"
            label="Public notes for your wish list"
        ></v-textarea>
<!--      </v-col>-->
    </v-row>
    <v-row>
<!--      <v-col-->
<!--          cols="12"-->
<!--          sm="6"-->
<!--          md="4"-->
<!--      >-->
        <v-textarea
            v-model="model.private_note"
            label="Private notes for your wish list"
        ></v-textarea>
<!--      </v-col>-->
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
      get: function () {
        return this.value;
      },
      set: function (newValue) {
        this.$emit("input", newValue)
      }
    }
  }
}
</script>

<style scoped>

</style>