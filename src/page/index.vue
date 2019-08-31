<template>
  <div class="container">
    <EditableTable></EditableTable>
    <JsonText></JsonText>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import EditableTable from '@/components/editableTable.vue'
import JsonText from '@/components/jsonText.vue'
@Component({
  components: {
    EditableTable,
    JsonText
  }
})
export default class Index extends Vue {
  msg: string = 'Welcome to Your Vue-Typescript App'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
