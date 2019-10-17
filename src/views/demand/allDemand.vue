<template>
  <div class="creative-center">
    <div class="title">
      <h2>需求中心</h2>
    </div>
    <!-- <el-form :inline="true" :model="Ideas" class="demo-form-inline" label-width="75px">
      <el-form-item label="提出部门">
        <el-select v-model="Ideas.type" placeholder="请选择部门">
          <el-option label="精算部1" value="精算部1"></el-option>
          <el-option label="精算部2" value="精算部2"></el-option>
          <el-option label="精算部3" value="精算部3"></el-option>
          <el-option label="精算部4" value="精算部4"></el-option>
          <el-option label="精算部5" value="精算部5"></el-option>
          <el-option label="精算部6" value="精算部6"></el-option>
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
      <el-form-item label="需求名称">
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
    </el-form>-->
    <searchFrom :formConfig="formConfig" :value="value" :block="block"></searchFrom>
    <div class="btn">
      <el-dropdown split-button type="primary" @command="handleCommand">
        新增
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="寿险">寿险</el-dropdown-item>
          <el-dropdown-item command="年金">年金</el-dropdown-item>
          <el-dropdown-item command="疾病">疾病</el-dropdown-item>
          <el-dropdown-item command="医疗">医疗</el-dropdown-item>
          <el-dropdown-item command="意外">意外</el-dropdown-item>
          <el-dropdown-item command="其它">其它</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-table :data="tableData" style="width: 100%" @select="select">
      <!-- <el-table-column type="selection" width="55"></el-table-column> -->
      <!-- <el-table-column fixed label="ID" type="index" min-width="80px"></el-table-column> -->
      <el-table-column prop="type" label="需求名称" min-width="100px"></el-table-column>
      <el-table-column prop="name" label="提出部门" min-width="80px"></el-table-column>
      <el-table-column prop="province" label="产品亮点" min-width="80px"></el-table-column>
      <el-table-column prop="time" label="提出时间" min-width="90px"></el-table-column>
      <el-table-column prop="introducer" label="提出人" min-width="90px"></el-table-column>
      <el-table-column prop="state" label="状态" min-width="90px"></el-table-column>
      <el-table-column label="操作" min-width="80px">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleDetail(scope.row)">需求详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="20"
      background
      :pager-count="11"
      layout="prev, pager, next"
      :total="200"
    ></el-pagination>
  </div>
</template>
<style type="text/css" lang="scss" scoped>
.creative-center {
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
  /deep/ .searchBtn {
    margin-left: 30px;
  }
  /deep/ .el-table {
    padding-top: 10px;
    border-top: 1px solid #ddd;
    margin-top: 10px;
  }
  .el-form--inline .el-form-item {
    margin-right: 0;
  }
  /deep/ .el-pagination {
    margin: 20px 0;
    text-align: center;
  }
  div.btn {
    height: 50px;
    line-height: 50px;
    margin-top: 10px;
    width: 100%;
    background-color: #fff;
    padding-left: 20px;
    text-align: left;
  }
}
</style>

<script>
import searchFrom from "../../components/searchFrom/searchFrom";
export default {
  components: {
    searchFrom
  },
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
      formConfig: {
        formItemList: [
          {
            type: "input",
            prop: "lightspot",
            label: "产品亮点:",
            placeholder: "请输入产品亮点"
          },
          {
            type: "select",
            prop: "designType",
            label: "提出部门:",
            placeholder: "请选择提出部门",
            optList: [
              {
                label: "精算部1",
                value: "精算部1"
              },
              {
                label: "精算部2",
                value: "精算部2"
              },
              {
                label: "精算部3",
                value: "精算部3"
              },
              {
                label: "精算部4",
                value: "精算部4"
              },
              {
                label: "精算部5",
                value: "精算部5"
              },
              {
                label: "精算部6",
                value: "精算部6"
              }
            ]
          },
          {
            type: "select",
            prop: "state",
            label: "审核状态:",
            placeholder: "请选择提审核状态",
            optList: [
              {
                label: "已审核",
                value: "已审核"
              },
              {
                label: "未审核",
                value: "未审核"
              }
            ]
          },
          {
            type: "input",
            prop: "demandName",
            label: "需求名称:",
            placeholder: "请输入需求名称"
          },
          {
            type: "select",
            prop: "type",
            label: "产品类型:",
            placeholder: "请选择设计类型",
            optList: [
              {
                label: "寿险",
                value: "寿险"
              },
              {
                label: "年金",
                value: "年金"
              },
              {
                label: "疾病",
                value: "疾病"
              },
              {
                label: "医疗",
                value: "医疗"
              },
              {
                label: "意外",
                value: "意外"
              },
              {
                label: "其它",
                value: "其它"
              }
            ]
          },

          {
            type: "input",
            prop: "lightspot",
            label: "产品亮点:",
            placeholder: "请输入产品亮点"
          },
          {
            type: "select",
            prop: "introducer",
            label: "提出人:",
            placeholder: "请选择提出人",
            optList: [
              {
                label: "小红",
                value: "小红"
              },
              {
                label: "小丽",
                value: "小丽"
              },
              {
                label: "小东",
                value: "小东"
              },
              {
                label: "小杰",
                value: "小杰"
              },
              {
                label: "小明",
                value: "小明"
              },
              {
                label: "小东",
                value: "小东"
              }
            ]
          },
          {
            type: "date",
            prop: "submitTime",
            label: "提交时间",
            dateFormate: "2019-10-15"
          }
        ],
        operate: [
          {
            type: "primary",
            name: "搜索",
            handleClick: this.search
          }
        ],

        labelWidth: "100"
      },
      value: {},
      block: true,
      tableData: [
        {
          type: "年金",
          name: "小虎",
          province: "上海",
          time: "2019-10-15",
          perfect: "90%",
          introducer: "小杰",
          public: "需求详情",
          similar: 1,
          boolean: false,
          state: "已提交"
        },
        {
          type: "寿险",
          name: "小虎",
          province: "上海",
          time: "2019-10-15",
          perfect: "85",
          introducer: "小蓝",
          public: "需求详情",
          similar: 3,
          boolean: true,
          state: "未提交"
        }
      ]
    };
  },
  methods: {
    search() {
      console.log(this.value);
    },
    onSubmit(Ideas) {
      console.log(Ideas);
    },
    handleCheckedCitiesChange(...arg) {
      console.log(arg);
    },
    select(selection, row) {
      console.log(selection, row);
    },
    handleDetail(data) {
       let  name = data.type;
       console.log(name)
      this.$router.push("/add/template/" + name);
    },
    handleCommand(value) {
      let detail = value;
      this.$store.commit("updateType", detail);
      this.$router.push("/add/template/" + detail);
    }
  }
};
</script>
