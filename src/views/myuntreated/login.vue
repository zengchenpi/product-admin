<template>
  <div class="approve-page">
    <div class="title">身份认证登录</div>
    
  </div>
</template>
<style lang="scss" scoped>
div.title {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  z-index: 999;
  background: #dddddd;
}
</style>
<script>
// import * from '../../login.js';
export default {
  mounted() {
    var token=window.login('http://10.3.37.224:8080/add/template');
    var uc_token=token;
    this.axios.post("/login", uc_token).then(({ data }) => {
      // 如果成功
      if (data.result === '200') {
        // 进入列表页查看结果
        this.$router.push('/')
      } else {
        // 提示错误
        this.$alert('身份验证失败');
      }
    });
  }
};
</script>