<template>
  <div class="creative-center">
    <div class="title">
      <h2>生产中心 > 所有需求</h2>
    </div>
    <searchFrom :formConfig="formConfig" :value="value" :block="block"></searchFrom>
    <div class="btn">
     <el-button @click="addNew" type="primary">新增</el-button>
    </div>
    <el-table :data="tableData"  border style="width: 100%" @select="select">
     
      <el-table-column align="center" prop="productType" label="需求名称" min-width="100px"></el-table-column>
      <el-table-column align="center" prop="productSubType" label="提出部门" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="time" label="提出时间" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="introducer" label="提出人" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="state" label="状态" min-width="90px"></el-table-column>
      <el-table-column align="center" label="操作" min-width="80px">
      <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleDetail(scope.row)">需求详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="4"
      background
      :pager-count="11"
      layout="prev, pager, next"
      :total="total"
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
      // border-bottom: 1px solid #999;
      h2 {
        text-align: left;
      }
    }
  }
  /deep/ .searchBtn {
    margin-left: 30px;
  }
  /deep/ .el-table {
    border-top: 1px solid #ddd;
    margin-top: 10px;
    thead tr th{
      background-color: #f8f8f8;
    }
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
            label: "状态:",
            placeholder: "请选择状态",
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
          productType: "年金",
          productSubType: "小虎",
          province: "上海",
          date: "2019-10-15",
          perfect: "90%",
          introducer: "小杰",
          public: "需求详情",
          similar: 1,
          boolean: false,
          state: "已提交"
        },
        {
          productType: "寿险",
          productSubType: "小虎",
          province: "上海",
          date: "2019-10-15",
          perfect: "85",
          introducer: "小蓝",
          public: "需求详情",
          similar: 3,
          boolean: true,
          state: "未提交"
        },
         {
          productType: "其它",
          productSubType: "小虎",
          province: "上海",
          date: "2019-10-15",
          perfect: "85",
          introducer: "小蓝",
          public: "需求详情",
          similar: 3,
          boolean: true,
          state: "未提交"
        },
         {
          productType: "医疗",
          productSubType: "小虎",
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
   computed: {
     total:function(){
       return this.tableData.length;
     }
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
    addNew() {
      this.$router.push("/add/demand");
    }
  }
};
</script>
