<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="workList">工作经历</el-menu-item>
      <el-menu-item index="content">内容中心</el-menu-item>
    </el-menu>
    </el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      activeIndex:null
    }
  },
  mounted(){
    this.activeIndex=this.$route.name
  },
  methods:{
    handleSelect(key) {
        this.$router.push({name:key});
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.auto{
    width: 1000px;
    margin:0 auto;
}
</style>
