<template>
  <div class="page-register">
    <div class="regist-from">
      <el-form status-icon ref="ruleForm"  :model="formData" :rules="rules">
        <div class="title">标准化产品开发平台</div>

        <el-form-item prop="username">
          <div class="item">
            <el-input type="text" placeholder="请输入用户名" v-model="formData.username"></el-input>
            <span>用户名</span>
          </div>
        </el-form-item>
        <el-form-item prop="password">
          <div class="item">
            <el-input type="text" placeholder="请输入密码" class="password" v-model="formData.password"></el-input>
            <span>密码</span>
          </div>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="onSubmit" :disabled='disabled' :title="title">登录 </el-button>
      <div class="prompt">
        <router-link to="/" title="找回密码？">忘记密码 </router-link>
        <router-link to="/" title="前往注册">新用户注册</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-register {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: url("/imgs/login.jpg") no-repeat;
  background-size: cover;
  text-align: center;
  .regist-from {
    position: absolute;
    height: 500px;
    width: 500px;
    background-color: #ffffff;
    top: 270px;
    right: 200px;
  }
  div.title {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
   /deep/ .el-form-item__error{
      top: 70%;
      left: 100px;
    }
  div.item {
    height: 50px;
    width: 300px;
    margin: 0px auto;
    margin-bottom: 30px;
    border: 1px solid #dddddd;
    position: relative;
   
    /deep/ .el-input__inner {
      height: 50px;
      width: 300px;
      border-width: 0px;
      background: url("/imgs/username.png") no-repeat;
      background-size: 30px;
      background-position: 10px 10px;
      text-indent: 110px;
      &.password {
        background: url("/imgs/password.png") no-repeat;
        background-size: 25px;
        background-position: 10px 10px;
      }
    }
    span {
      position: absolute;
      top: 0px;
      left: 50px;
      line-height: 50px;
    }
  }
  div.prompt {
    a {
      text-decoration: none;
      display: inline-block;
      width: 100px;
      margin-right: 30px;
      margin-top: 30px;
      // color: #1ABC9C;
      color: #66b1ff;
    }
  }
  .el-button {
    padding: 15px 150px;
  }
  .el-form-item{
    margin-bottom: 0;
  }
}
</style>
<script>
import { checkUsername, checkPassword } from '../../tools/validator';
export default {
  data() {
    return {
      formData: {
       username:'',
       password:'',
      },
      rules:{
        username: [{ trigger: 'blur', validator: checkUsername }],
				password: [{ trigger: 'blur', validator: checkPassword }]
      },
     
    };
  },
  computed:{
    title:function(){
      if(this.disabled){
        return '请先输入登录信息';
      }
      else return ""
    },
     disabled:function(){
       if(this.formData.username&&this.formData.password){
         return false;
       }
       return true;
     }
  },
  methods: {
    onSubmit() {
      let username = this.formData.username;
      this.$store.commit('updateUsername',username)
    }
  }
};
</script>