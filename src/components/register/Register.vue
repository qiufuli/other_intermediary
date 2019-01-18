<template>
  <div class="login">
    <div class="login_con boxShadow">
      <i class="fa fa-long-arrow-left" @click="goback()"></i>
      <el-row class="title">注册</el-row>
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-form-item prop="username">
          <el-input placeholder="user" prefix-icon="fa fa-user" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="password"
            prefix-icon="fa fa-eye-slash"
            v-model="ruleForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-button type="primary" plain round :loading="loading" @click="goin()">submit</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      loading: false,
      rules: {
        username: [
          { required: true, message: "请输入注册用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入注册密码", trigger: "blur" },
          { min: 6, message: "最少输入 6 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  methods: {
    goin() {
      if(!this.valiform('ruleForm')) return false;
      this.loading = true;
      this.$router.push('/index')
    },
    valiform(formname) {
      var _res = true;
      this.$refs[formname].validate((res)=>{
        _res = res
      })
      return _res;
    },
    goback(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
}
.login_con {
  overflow-x: hidden;
  width: 80%;
  height:280px;
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 5%;
  .title {
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    color: #77a5ff;
    letter-spacing: 2px;
  }
  .el-row {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .el-button {
    display: block;
    margin: 20px auto;
    padding: 12px 50px;
  }
}
.van-cell {
  color: #878787;
}
.fa-icon {
  color: #dcdfe6;
}
.fa-long-arrow-left{
  color: #77a5ff;
  font-size: 20px;
}
</style>
