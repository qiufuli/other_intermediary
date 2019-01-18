<template>
  <div class="home">

    <el-row class="home_fixed">
      <el-col :span="8">
        <router-link tag="div" class="list_item" to='/home'>
          <i class="fa fa-home"></i>
          <span>首页</span>
        </router-link>
      </el-col>
       <el-col :span="8">
        <div  class="list_item static_icon">
          <i class="fa fa-superpowers" aria-hidden="true"></i>
          <!-- <span>发现</span> -->
        </div>
      </el-col>
       <el-col :span="8">
        <router-link tag="div" class="list_item" to='/me'>
          <i class="fa fa-user"></i>
          <span>我的</span>
        </router-link>
      </el-col>
    </el-row>
    <transition>

    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  // overflow-x: hidden;
  .home_fixed{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: #ffffff;
    text-align: center;
    color:#b0adad;
    .el-col{
     padding: 5px 0;
    }
    span{
      display: block;
    }
  }
  .fa{
    font-size: 20px;
  }
}
.router-link-active{
  .fa{
    color: #77a5ff;
  }
  span{
    color: #77a5ff;
  }
}
.static_icon{
  color: #77a5ff;
  height: 100%;
  .fa{
  font-size: 28px;
  margin-top: 6px;
  }
}
</style>
