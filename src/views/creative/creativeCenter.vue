<template>
  <div class="creative-center">
    <div class="title">
      <h2>创意中心</h2>
    </div>
     <searchFrom :formConfig="formConfig" :value="value" :block="block"></searchFrom>
     <div class="btn"> <el-button type="primary" icon="el-icon-shopping-cart-full">加入操作车</el-button><el-button type="primary" icon="el-icon-shopping-cart-full">查看操作车</el-button></div>
    <el-table border :data="tableData" style="width: 100%" @select="select">
      <el-table-column align="center" type="selection" min-width="55"></el-table-column>
      <el-table-column align="center"  label="ID" type="index" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="type" label="产品类型" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="name" label="创意名称" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="province" label="产品亮点" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="salesChannels" label="销售渠道" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="perfect" label="完善度" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="introducer" label="提出人" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="public" label="是否公开" min-width="80px">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.public" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="similar" align="center" label="相似" min-width="80">
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
    <el-pagination :page-size="20" background :pager-count="11" layout="prev, pager, next" :total="20"></el-pagination>
  </div>
</template>
<style lang="scss" scoped>
.creative-center {
  text-align: center;
  padding: 0 20px;
  padding-top: 20px;
  div {
    &.title {
      height: 60px;
      background-color: #ffffff;
      width: 99%;
      box-sizing: border-box;
      padding-left: 10px;
      line-height: 60px;
      h2 {
        text-align: left;
      }
    }
  }
   .el-table {
    border-top: 1px solid #ddd;
    margin-top: 10px;
    thead tr th{
      background-color: #f8f8f8;
    }
  }
  .el-form {
    margin-top: 0px;
    text-align: left;
     box-sizing: border-box;
    .el-input {
      width: 65%;
    }
    .el-input.is-disabled .el-input__inner {
      background-color: #ffffff;
    }
    .el-form-item {
      width: 305px;
      &:nth-last-child(2) {
        // width: 390px;
        margin-right: 25px;
      }
    }
  }
  .el-form--inline .el-form-item {
    margin-right: 0;
  }
  .el-pagination{
    margin-top: 20px;
  }
  div.btn{
    float: right;
    margin-bottom: 20px;
    margin-right: 15px;
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
            type: "select",
            prop: "state",
            label: "产品类型:",
            placeholder: "请选择产品类型",
            optList: [
              {
                label: "寿险",
                value: "寿险"
              },
              {
                label: "年金",
                value: "年金"
              }, {
                label: "医疗",
                value: "医疗"
              },
              {
                label: "意外",
                value: "意外"
              }, {
                label: "疾病",
                value: "疾病"
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
            placeholder: "请选择审核状态",
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
            label: "创意名称:",
            placeholder: "请输入创意名称"
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
    // onSubmit(Ideas) {
    //   console.log(Ideas);
    // },
    handleCheckedCitiesChange(...arg) {
      console.log(arg);
    },
    select(selection,row){
        console.log(selection,row)
    },
     search() {
      console.log(this.value);
    },
  }
};
</script>
