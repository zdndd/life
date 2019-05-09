<template>
    <div style='background:pink; min-height:100px; width:100%'>
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
            prop="a201812"
            label="2018-12">
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

    <el-container>
      <el-table
          :data="data2019"
          border
          show-summary
          style="width: 100%">
        <el-table-column
            prop="type"
            label="类别">
        </el-table-column>
        <el-table-column
            prop="a201905"
            label="2019-05">
        </el-table-column>
        <el-table-column
            prop="a201904"
            label="2019-04">
        </el-table-column>
        <el-table-column
            prop="a201903"
            label="2019-03">
        </el-table-column>
        <el-table-column
            prop="a201902"
            label="2019-02">
        </el-table-column>
        <el-table-column
            prop="a201901"
            label="2019-01">
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
            a201812: '4288.09',
            a201810: '12299',
            a201809: '5629',
            a201808: '5938',
            a201807: '3907'
          },
          {
            type: '花呗',
            a201812: '2855.13',
            a201810: '2098',
            a201809: '2604',
            a201808: '2541',
            a201807: '3458'
          }],
        data2019:[
          {
            type:'卡',
            a201905:'10',
            a201904:'5195.50',
            a201903:'3524.74',
            a201902:'1769.36',
            a201901:'8422.01'
          },{
            type:'花呗',
            a201905:'10',
            a201904:'4298.24',
            a201903:'3331.69',
            a201902:'2689.31',
            a201901:'3516.54'
          }
        ],
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
