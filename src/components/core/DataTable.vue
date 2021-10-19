<template>
  <div>
    <v-data-table
        dense
        :headers="headers"
        :items="items"
        item-key="name"
        class="elevation-1"
        loading="loading"
    >
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
    loading:true
  }),

  props: {
    headers: {
      type: Array,
      default: () => []
    },
    fetchItems: {
      type: Function,
      default: () => []
    }
  },

  mounted() {
    this.fetchItems()
        .then(results => this.items = results?.data?.results)
        .finally(() => this.loading=false);
  }
}

</script>

<style scoped>

</style>