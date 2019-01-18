<template>
  <div class="me">
    <el-row class="me_title">
      <div class="me_icon">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <p>张三</p>
      </div>
    </el-row>
    <el-row class="me_con boxShadow">
      <i class="fa fa-cog"></i>
      <p @click="newps()">修改密码</p>
    </el-row>
    <el-button type="danger" size="medium " class="fbpl" @click="tishi()">退出登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    newps() {
      this.$router.push("/newpassword");
    },
    tishi() {
      this.$confirm("确定要退出当前账号吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$router.push('/login')
        })
        .catch(() => {
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.me {
  width: 100%;
  height: 100%;
  background: #ffffff;
}
.me_title {
  height: 150px;
  background: url("../../assets/images/mebg.jpg") no-repeat;
  background-size: 100% auto;
}
.me_icon {
  text-align: center;
  margin-top: 35px;
  .fa {
    font-size: 50px;
    color: #ffffff;
  }
  p {
    margin: 5px;
    color: #ffffff;
  }
}
.me_con {
  background-color: #fdfcfc;
  padding: 10px;
  .fa {
    float: left;
    color: #bbb7b7;
    font-size: 21px;
  }
  p {
    float: left;
    color: #7e7e7e;
    margin-left: 10px;
    width: calc(100% - 41px);
  }
}
.fbpl {
  display: block;
  width: 100%;
  position: fixed;
  bottom: 60px;
  left: 0;
}
</style>
