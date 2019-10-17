<template>
  <div class="creative-center">
    <div class="title">
      <h2>创意中心</h2>
    </div>
    <el-form :inline="true" :model="Ideas" class="demo-form-inline" label-width="75px">
      <el-form-item label="产品类型">
        <el-select v-model="Ideas.type" placeholder="选择产品类型">
          <el-option label="寿险" value="寿险"></el-option>
          <el-option label="年金" value="年金"></el-option>
          <el-option label="疾病" value="疾病"></el-option>
          <el-option label="医疗" value="医疗"></el-option>
          <el-option label="意外" value="意外"></el-option>
          <el-option label="其它" value="其它"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品亮点">
        <el-input v-model="Ideas.lightspot" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="提出人">
        <el-input v-model="Ideas.peoplename" placeholder="小芳"></el-input>
      </el-form-item>
      <el-form-item label="审批状态">
        <el-input v-model="Ideas.state" placeholder="未审核"></el-input>
      </el-form-item>
      <el-form-item label="创意名称">
        <el-input v-model="Ideas.ideaName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="提出时间">
        <el-form-item prop="time">
          <el-date-picker
            type="date"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy.MM.dd"
            placeholder="选择日期"
            v-model="Ideas.time"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(Ideas)">搜素</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" @select="select">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed label="ID" type="index" min-width="80px"></el-table-column>
      <el-table-column prop="type" label="产品类型" min-width="80px"></el-table-column>
      <el-table-column prop="name" label="创意名称" min-width="80px"></el-table-column>
      <el-table-column prop="province" label="产品亮点" min-width="80px"></el-table-column>
      <el-table-column prop="salesChannels" label="销售渠道" min-width="90px"></el-table-column>
      <el-table-column prop="perfect" label="完善度" min-width="80px"></el-table-column>
      <el-table-column prop="introducer" label="提出人" min-width="90px"></el-table-column>
      <el-table-column prop="public" label="是否公开" min-width="80px">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.public" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="similar" label="相似" min-width="80">
         <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>1</p>
          <p>3</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.similar }}</el-tag>
          </div>
        </el-popover>
      </template>
      </el-table-column>
    </el-table>
    <el-pagination :page-size="20" background :pager-count="11" layout="prev, pager, next" :total="200"></el-pagination>
  </div>
</template>
<style type="text/css" lang="scss">
.creative-center {
  text-align: center;
  padding: 0 20px;
  padding-top: 20px;
  div {
    &.title {
      height: 60px;
      border-bottom: 1px solid #999;
      h2 {
        text-align: left;
      }
    }
  }
  .el-form {
    border-bottom: 1px solid #999;
    margin-top: 15px;
    text-align: left;
    .el-input {
      width: 65%;
    }
    .el-input.is-disabled .el-input__inner {
      background-color: #ffffff;
    }
    .el-form-item {
      width: 305px;
      &:nth-last-child(2) {
        width: 390px;
      }
    }
  }
  .el-form--inline .el-form-item {
    margin-right: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      Ideas: {
        type: "",
        lightspot: "",
        peoplename: "",
        ideaName: "",
        state: "",
        time: "2019.10.9",
        boolean: []
      },
      tableData: [
        {
          type: "寿金",
          name: "小虎",
          province: "上海",
          salesChannels: "银保",
          perfect: "90%",
          introducer: "小杰",
          public: false,
          similar: 1,
          boolean: false
        },
        {
          type: "寿险",
          name: "小虎",
          province: "上海",
          salesChannels: "中介",
          perfect: "85",
          introducer: "小蓝",
          public: true,
          similar: 3,
          boolean: true
        }
      ]
    };
  },
  methods: {
    onSubmit(Ideas) {
      console.log(Ideas);
    },
    handleCheckedCitiesChange(...arg) {
      console.log(arg);
    },
    select(selection,row){
        console.log(selection,row)
    }
  }
};
</script>
