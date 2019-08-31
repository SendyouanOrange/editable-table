<template>
  <div class="json-container">
    <h1>JSON:</h1>
    <h2>Title</h2>
    <div v-html="title"></div>
    <h2>Data</h2>
     <div v-html="content"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
@Component({})
export default class JsonText extends Vue {
  @Getter info
  get title () {
    return JSON.stringify(this.info.title)
  }
  get content () {
    return JSON.stringify(this.info.data).replace('},', '},<br/>')
  }
}
</script>
<style >
.json-container {
  margin-left: 30px;
  padding-right: 15px;
  width: 300px;
  word-wrap: break-word;
  box-sizing: border-box;
}
</style>
