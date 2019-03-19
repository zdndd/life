<template>
  <div>
    <el-container>
      <el-table
          :data="tableData6"
          border
          show-summary
          style="width: 100%">
        <el-table-column
            prop="type"
            label="类别">
        </el-table-column>
        <el-table-column
            prop="a201810"
            label="2018-10">
        </el-table-column>
        <el-table-column
            prop="a201809"
            label="2018-09">
        </el-table-column>
        <el-table-column
            prop="a201808"
            label="2018-08">
        </el-table-column>
        <el-table-column
            prop="a201807"
            label="2018-07">
        </el-table-column>
      </el-table>
    </el-container>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        tableData6: [
          {
            type: '卡',
            a201810: '12299',
            a201809: '5629',
            a201808: '5938',
            a201807: '3907'
          },
          {
            type: '花呗',
            a201810: '2098',
            a201809: '2604',
            a201808: '2541',
            a201807: '3458'
          }],
        count:0
      };
    },
    components: {

    },
    methods: {
      getCount(){
        ++this.count
      }
    }
  }
</script>

<style>

</style>
