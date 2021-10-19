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
        <app-groups-edit-model v-model="slotProps.selectedItem"/>
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
      return this.api.appGroup.list;
    },
    createItem() {
      return this.api.appGroup.create;
    },
    editItem() {
      return this.api.appGroup.edit;
    },
    deleteItem() {
      return this.api.appGroup.delete;
    }
  }
}
</script>
