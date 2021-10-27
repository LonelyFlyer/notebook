<template>
  <div class="Index">
    <el-container>
      <el-header>NoteBook</el-header>   
      <!-- <div class="div-hor-space"></div> -->
      <el-container>
        <el-aside width="200px">
          <Menu/>
        </el-aside>
        <el-container>
          <el-main>内容</el-main>
          <el-footer>尾部</el-footer>
        </el-container>
      </el-container> 
    </el-container>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Index',
  components: {
    Menu
  },
  data () {
    return {
      msg: 'Index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div-hor-space {
  background-color: gray;
  height: 1px;
}


.el-header {
    background-color: white;
    color:black;
    text-align: left;
    line-height: 60px;
    font-size: 30px;
    padding-left: 0px;
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e6e6e6;
}

.el-footer {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

.el-aside {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 160px;
}
  
  /* body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
