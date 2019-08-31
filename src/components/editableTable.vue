<template>
  <div class="table-container">
    <h1>
      Table
      <button class="add" @click="addRow">增加</button>
      <button class="delete" @click="deleteRow">删除</button>
      <button class="refresh" @click="refreshData">生成</button>
    </h1>
    <TableRow :title="titleRow" :data="false" :checkAll="checkAll"></TableRow>
    <TableRow v-for="(d, i) in rowData" :key="i" :title="titleRow" :data="d" :index="i"></TableRow>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TableRow from './comps/TableRow.vue'
import { Getter, Action } from 'vuex-class'
@Component({
  components: { TableRow }
})
export default class EditableTable extends Vue {
  @Getter info
  @Action setInfo
  checked: boolean = false
  get titleRow () {
    return ['多选', ...this.info.title]
  }
  get rowData () {
    return JSON.parse(JSON.stringify(this.info.data)).map(v => {
      v.checked = this.checked
      return v
    })
  }
  created () {
    this.refreshData()
  }
  addRow () {
    let row = {}
    this.info.title.forEach(t => {
      row[t] = (Math.random() * 100).toFixed(0)
    })
    this.setInfo({
      title: this.info.title,
      data: [...this.info.data, row]
    })
  }
  deleteRow () {
    this.setInfo({
      title: this.info.title,
      data: this.rowData.filter(v => !v.checked).map(d => {
        delete d.checked
        console.log(d)
        return d
      })
    })
  }
  refreshData () {
    let _t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    // 生成不重复的字母title
    let title = this.getNewArr().map((v, i) => {
      let n = Math.ceil(Math.random() * (26 - i - 1))
      let t = _t[n]
      _t.splice(n, 1)
      return t
    })
    // 随机生成10+行的数据
    let data = this.getNewArr().map(v => {
      let obj = {}
      title.forEach(t => {
        obj[t] = (Math.random() * 100).toFixed(0)
      })
      return obj
    })
    this.setInfo({title, data})
  }
  // 全（不）选
  checkAll (status) {
    this.checked = status
  }
  // 获得随机长度大于10的空数组
  getNewArr () {
    let arr: any = { length: Math.floor(Math.random() * 10) + 10 }
    return Array.from(arr)
  }
}
</script>
<style >
.table-container {
  flex: 1;
  min-height: 100px;
}
.table-container .row {
  background-color: blue;
  height: 50px;
  width: 100%;
}
.add,
.delete,
.refresh {
  padding: 3px 10px;
  border: none;
  border-radius: 6px;
}
.add {
  color: #fff;
  background-color: #2d8cf0;
  margin-left: 50px;
}
.delete {
  color: #fff;
  background-color: #ed4014;
}
.refresh {
  color: #fff;
  background-color: #19be6b;
}
</style>
