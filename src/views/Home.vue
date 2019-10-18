<template>
  <Login v-if="!$store.state.username"></Login>
  <div v-else class="page-main">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <router-link to="/creative/center" tag="p">
              <i class="el-icon-menu"></i>
              <span>创意中心</span>
            </router-link>
            <!-- <router-link to='/creative/center' slot="title" tag='span'>创意中心</router-link> -->
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>生产中心</span>
            </template>
            <el-menu-item-group>
              <router-link tag="div" to="/demand/allDemand">
                <el-menu-item index="2-1">所有需求</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group>
              <router-link to="/demand/allProduct" tag="p">
                <el-menu-item index="2-2">所有产品</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2-3">短险搭配</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>推广中心</span>
            </template>
            <el-menu-item-group>
              <router-link tag="div" to="/demand/allDemand">
                <el-menu-item index="3-1">产品库</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group>
              <router-link to="/demand/allProduct" tag="p">
                <el-menu-item index="3-2">监管规则库</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-3">同业产品库</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">监管规则中心</span>
          </el-menu-item> -->
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">我的待办</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title">我的已办</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21" class="infinite-list" style="background-color:#fff,overflow:auto">
        <div class="header">
          <h1></h1>
          <span class="title">标准化产品开发平台</span>
          <span class="username" v-if="$store.state.username">{{$store.state.username}}</span>
          <span class="username" v-else>你好！请登录</span>
          <div class="right">
            <!-- <router-link to="/" @click="exit">退出</router-link> -->
            <a @click="exit">退出</a>
          </div>
        </div>
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.page-main {
  height: 100%;
  /deep/ .el-row {
    height: 100%;
  }
  /deep/ .el-col-3 {
    overflow: hidden;
    height: 100%;
    .el-menu-vertical-demo {
      height: 100%;
    }
  }
  /deep/ .el-col-21 {
    overflow-x: auto;
    height: 100%;
  }
  /deep/ .el-submenu,
  .el-menu-item {
    text-align: left;
  }
  
  div.header {
    display: flex;
    height: 52px;
    position: relative;
    border-bottom: 1px solid #dddddd;
    h1 {
      background: url("/imgs/logo.png") no-repeat;
      width: 398px;
      height: 50px;
      background-size: contain;
    }
    span.title {
      line-height: 50px;
      font-size: 22px;
      font-weight: bold;
      margin-left: 100px;
    }
    span.username {
      position: absolute;
      right: 100px;
      top: 0;
      line-height: 50px;
    }
    div.right {
      position: absolute;
      top: 0;
      right: 20px;
      line-height: 50px;
      padding-left: 35px;
      background: url(/imgs/close.png) no-repeat;
      background-size: 20px 20px;
      background-position: 12px 14px;
      cursor: pointer;
      a {
        color: red;
        font-size: 16px;
        text-decoration: none;
      }
    }
  }
}
</style>
<script>
import Login from "./user/Login";
export default {
  components: {
    Login
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    exit() {
      let username = "";
      this.$store.commit("updateUsername", username);
    }
  }
};
</script>