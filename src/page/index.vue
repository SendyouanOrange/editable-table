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
export default class Index extends Vue {}
</script>
<style>
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
