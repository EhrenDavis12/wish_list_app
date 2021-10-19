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
      <template v-slot:top>
        <v-toolbar
            flat
        >
          <v-spacer></v-spacer>
          <v-dialog
              v-model="dialog"
              max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <slot v-bind:selectedItem="selectedItem"></slot>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
<!--      <template v-slot:no-data>-->
<!--        <v-btn-->
<!--            color="primary"-->
<!--            @click="initialize"-->
<!--        >-->
<!--          Reset-->
<!--        </v-btn>-->
<!--      </template>-->
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
    loading:true,
    dialog: false,
    dialogDelete: false,
    selectedIndex: -1,
    selectedItem: {
      id: '',
      name: '',
      description: '',
      is_active: true,
    },
    defaultItem: {
      id: '',
      name: '',
      description: '',
      is_active: true,
    },
  }),

  props: {
    headers: {
      type: Array,
      default: () => []
    },
    getFetchItems: {
      type: Function,
      default: () => ()=>{}
    },
    getCreateItem: {
      type: Function,
      default: () => ()=>{}
    },
    getEditItem: {
      type: Function,
      default: () => ()=>{}
    },
    getDeleteItem: {
      type: Function,
      default: () => ()=>{}
    }
  },

  computed: {
    formTitle () {
      return this.selectedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  methods: {
    fetchData(){
      this.loading=true;
      this.getFetchItems()(this)
        .then(results => this.items = results?.data?.results)
        .finally(() => this.loading=false);
    },
    editItem (item) {
      this.selectedIndex = this.items.indexOf(item)
      this.selectedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.selectedIndex = this.items.indexOf(item)
      this.selectedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.getDeleteItem()(this, this.selectedItem.id).then(() => this.fetchData());
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.selectedItem = Object.assign({}, this.defaultItem)
        this.selectedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.selectedItem = Object.assign({}, this.defaultItem)
        this.selectedIndex = -1
      })
    },

    save () {
      if (this.selectedIndex > -1) {
         this.getEditItem()(this, this.selectedItem).then(() => this.fetchData());
      } else {
         this.getCreateItem()(this, this.selectedItem).then(() => this.fetchData());
      }
      this.close()
    },
  },

  mounted() {
    this.fetchData();
  }
}

</script>

<style scoped>

</style>