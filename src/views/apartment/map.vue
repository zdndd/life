<template>
  <baidu-map class="map" center="上海">
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <bm-boundary name="上海市嘉定区" :strokeWeight="2" strokeColor="blue"></bm-boundary>
    <bm-boundary name="上海市宝山区" :strokeWeight="2" strokeColor="blue"></bm-boundary>
    <bm-boundary name="上海市普陀区" :strokeWeight="2" strokeColor="red"></bm-boundary>
    <bm-boundary name="上海市闵行区" :strokeWeight="2" strokeColor="blue"></bm-boundary>
    <bm-boundary name="上海市长宁" :strokeWeight="2" strokeColor="black"></bm-boundary>
  </baidu-map>
</template>

<script>
  export default {
    name: "map.vue"
  }
</script>

<style scoped>
  .map {
    width: 100%;
    height: 1000px;
  }
</style>
