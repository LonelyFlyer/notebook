<template>
  <div>
    <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#fff"
    text-color="#1e1e1e"
    :unique-opened=true
    :collapse-transition=true
    active-text-color="#ffd04b">

    <div v-for="(value, key, index) in lessonArr" :key="index"> 
      <el-submenu :index="generateIndex(index, -1)">
      <template slot="title">
        <span>{{key}}</span>
      </template>
         <div v-for="(item, col) in value" :key="col"> 
           <el-menu-item index="row+ '-' +col">{{item}}</el-menu-item>
         </div>
    </el-submenu>
    </div>
    <!-- <el-submenu index="1">
      <template slot="title">
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>

     <el-submenu index="2">
      <template slot="title">
        <span>导航二</span>
      </template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
    </el-submenu> -->

    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lessonArr:{
        'Rutime' : ['111','222'],
        'RunLoop' : ['111', '222'],
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    generateIndex(index, num) {
      if (num == -1) return Number(index) + 1
      return index + '-' + num
    }
  }
}
</script>

<style scoped>
.el-menu {
  height: 1000px;
}

.el-submenu {
  text-align: left;
}

</style>