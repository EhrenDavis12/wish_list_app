<template>
  <v-container>
    <CoreCrudDataTable
        :headers="headers"
        :getFetchItems="fetchItems"
        :getCreateItem="createItem"
        :getDeleteItem="deleteItem"
        :getEditItem="editItem"
    >
      <template v-slot:default="slotProps" >
        <wish-lists-edit-model v-model="slotProps.selectedItem"/>
      </template>
    </CoreCrudDataTable>
  </v-container>
</template>


<script>
import simpleHeaders from "./headers";
export default {
  data: () => ({
    headers: simpleHeaders
  }),

  methods: {
    fetchItems() {
      return this.api.wishList.list;
    },
    createItem() {
      return this.api.wishList.create;
    },
    editItem() {
      return this.api.wishList.edit;
    },
    deleteItem() {
      return this.api.wishList.delete;
    }
  }
}
</script>
