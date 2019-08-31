<template>
  <div class="row-container">
    <div v-for="key in title" :key="key" class="cell" :class="[data?'':'title',key ==='多选' ?'check-box' :'',key ==='操作' ?'options' :'']">
      <div v-if="key ==='多选'" class="option-item">
        <div v-if="!data">
          <input type="checkbox" id="checkbox" v-model="allStatus" @click="allCheck">
          <label for="checkbox"></label>
        </div>
        <div v-else>
          <input type="checkbox" id="checkbox" v-model="data.checked">
          <label for="checkbox"></label>
        </div>
      </div>
      <span v-else>
        <span v-if="!data">{{key}}</span>
        <input v-else :value="data[key]" type="text" class="cell-input" @input="e => changeCell(e.target.value, key)" />
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'
@Component({})
export default class TableRow extends Vue {
  @Action setInfoRow
  @Prop({ default: [] }) title
  @Prop({ default: {} }) data
  @Prop() index
  @Prop() checkAll
  allStatus: boolean = false
  allCheck () {
    this.checkAll(!this.allStatus)
  }
  changeCell (v, key) {
    this.data[key] = v
    this.setInfoRow({row: this.data, index: this.index})
  }
}
</script>
<style >
.row-container {
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid #e5e5e5;
  margin-top: -2px;
}
.check-box {
  flex: none !important;
  width: 50px !important;
}
.options {
  flex: none !important;
  width: 200px !important;
}
.cell {
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  text-align: center;
  align-self: center;
  font-size: 20px;
  border-right: 2px solid #e5e5e5;
  box-sizing: content-box;
}
.title {
  background-color: #e5e5e5;
  border-right: 2px solid #fff;
}
.cell:last-child,
.title:last-child {
  border-right: none;
}
.cell-input {
  position: absolute;
  top:2px;
  left: 50%;
  bottom: 2px;
  transform: translate(-50%,0);
  width: 90%;
  border: none;
}
</style>
