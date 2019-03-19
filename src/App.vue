<template>
  <div id="app">
    <el-container>
      <!-- <Slide></Slide> -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              钱
            </template>

            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/money/monthly">每月花费</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/money/hk">香港</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <router-link to="/login">Go to Login</router-link>
            </template>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              房
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/apartment/apartment">二手房计算</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/apartment/map">map</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {

    methods: {}
  }
</script>
<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
