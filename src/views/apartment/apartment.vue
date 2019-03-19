<template>
  <el-row  style="text-align: left">
    <el-col :span="20">
      <el-form
          ref="form"
          :model="form"
          label-position="left"
          label-width="120px">
        <el-form-item label="总价">
          <el-col :span="5">
            <el-input v-model="form.money"></el-input>
          </el-col>
          万
        </el-form-item>
        <el-form-item label="当年购买价格">
          <el-col :span="5">
            <el-input v-model="form.oldMoney"></el-input>
          </el-col>
          万
        </el-form-item>

        <el-form-item label="房屋类型">
          <el-radio-group v-model="form.type">
            <el-radio label="1">普通住宅</el-radio>
            <el-radio label="1.5">非普通住宅</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="契税">
          比例：{{form.type}}
        </el-form-item>

        <el-form-item label="增值税及附加税">
          <el-radio-group v-model="form.year">
            <el-radio label="1">不满两年</el-radio>
            <el-radio label="2">满两年</el-radio>
          </el-radio-group>
          <div v-if="form.year>=2">
            <p v-if="form.type<=1">满两年-普通住宅-0</p>
            <p v-else>满两年-非普通-（税务核定价-原来价格） × 5.38</p>
          </div>
          <div v-else>
            <p v-if="form.type<=1">不满两年-普通住宅-税务核定价 × 5.38</p>
            <p v-else>不满两年-非普通-税务核定价 × 5.38</p>
          </div>
        </el-form-item>
        <el-form-item label="个税">
          <el-radio-group v-model="form.year2">
            <el-radio label="1">不满五或者不唯一</el-radio>
            <el-radio label="5">满五唯一</el-radio>

          </el-radio-group>
          <div v-if="form.year2<5">
            <p v-if="form.type<=1">普通住宅-（税务核定价-增值税） × 1</p>
            <p v-else>非普通-（税务核定价-增值税） × 2</p>
          </div>
        </el-form-item>
        <el-form-item label="中介费">
          <el-col :span="5">
            <el-input v-model="form.middle"></el-input>
          </el-col>
          %

        </el-form-item>

        <el-form-item label="计算结果">
          <div>
            手续费：{{total}}万 = 契税：{{qiTax}}万 + 增值税及附加税：{{zengzhiTax}}万 + 个税{{personTax}}万 + 中介费{{form.money*form.middle/100}}万

          </div>
          <div>
            首付：{{first}}
            <!--给房东：{{form.money-229}}-->


          </div>
          <div>
            最终总价:{{total + first}}
          </div>

        </el-form-item>

      </el-form>
    </el-col>
  </el-row>


</template>

<script>
  export default {
    name: "apartmentvue",
    data() {
      return {
        form: {
          money: '260',
          oldMoney: '10',
          type:'1.5',
          year:'2',
          year2:'5',
          middle:'2'
        }
      }
    },
    computed:{
      first:function(){
        return this.form.money *0.35
      },
      qiTax:function () {
        return this.form.money*this.form.type/100
      },
      zengzhiTax:function () {
        let result = 0
        if(this.form.year>=2){
          //满2年
          if(this.form.type>1){
            //非普通住宅
            result = (this.form.money - this.form.oldMoney)*5.38/100
          }else{
            result = 0
          }
        }else{
          //不满两年
          if(this.form.type>1){
            result = this.form.money*5.38/100
          }else{
            result = this.form.money*5.38/100
          }
        }
        return result
      },
      personTax:function(){
        let result = 0
        if(this.form.year2>=5){
          //满5年
          result = 0
        }else{
          //不满5年
          if(this.form.type>1){
            //非普通
            result = (this.form.money - this.zengzhiTax)*2/100
          }else{
            result = (this.form.money - this.zengzhiTax)*1/100
          }
        }
        return result
      },
      total:function(){
        return this.qiTax + this.zengzhiTax + this.personTax + (this.form.money*this.form.middle/100)
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

  .el-form-item{
    background:#fff;
    border-radius: 5px;
    padding: 5px 0 5px 5px;
  }



</style>
