<template>
  <div class="creative-center">
    <div class="title">
      <h2>我的待办 > 我的需求</h2>
    </div>
    <searchFrom :formConfig="formConfig" :value="value" :block="block"></searchFrom>
    <div class="btn">
      <el-button @click="addNew" type="primary">新建需求</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%" @select="select">
      <el-table-column align="center" prop="requireName" label="需求名称" min-width="100px"></el-table-column>
      <el-table-column align="center" prop="productSubType" label="提出部门" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="createPersion" label="提出人" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="createTime" label="提出时间" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="status" label="状态" min-width="90px"></el-table-column>
      <el-table-column align="center" label="操作" min-width="222px">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleDetail(scope.row)">查看详情</el-button>
          <el-button size="mini" v-show="scope.row.status=='未提交'" type="text" @click="handleDetail(scope.row)">修改</el-button>
          <el-button size="mini" v-show="scope.row.status=='未提交'" type="text" @click="handleDetail(scope.row)">删除</el-button>
          <el-button size="mini" v-show="scope.row.status=='未提交'" type="text" @click="handleDetail(scope.row)">提交审核</el-button>
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
    <el-card class="allocation" v-show="allotShow">
      <span class="textpro">负责人</span>
      <el-autocomplete
        class="inline-input"
        v-model="state2"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        :trigger-on-focus="false"
        @select="handleSelect"
      >
        <i class="el-icon-search el-input__icon" slot="suffix"></i>
      </el-autocomplete>
      <div class="btns">
        <el-button type="primary">分配</el-button>
        <el-button type="primary" @click="close">取消</el-button>
      </div>
    </el-card>
  </div>
</template>
<style type="text/css" lang="scss" scoped>
.creative-center {
  padding: 0 20px;
  padding-top: 20px;
  /deep/ .el-form {
    padding-left: 10px;
  }
  div {
    &.title {
      height: 60px;
      // border-bottom: 1px solid #999;
      h2 {
        text-align: left;
      }
    }
  }
  // /deep/ .searchBtn {
  //   // margin-left: 30px;
  // }
  /deep/ .el-table {
    border-top: 1px solid #ddd;
    margin-top: 10px;
    thead tr th {
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
  .allocation {
    width: 400px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -100px;
    border: 1px solid #ddd;
    background-color: #fff;
    .textpro {
      display: inline-block;
      width: 70px;
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      font-size: 16px;
    }
  }
  .btns {
    margin-top: 30px;
    text-align: center;
    width: 100%;
  }
}
</style>

<script>
import searchFrom from "../../components/searchFrom/searchFrom";
// console.log(window.token,'window')
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
            prop: "productType",
            label: "产品类型:",
            placeholder: "请选择提产品类型",
            optList: [
              {
                label: "年金",
                value: "1"
              },
              {
                label: "寿险",
                value: "2"
              },
              {
                label: "疾病",
                value: "3"
              },
              {
                label: "医疗",
                value: "4"
              },
              {
                label: "意外",
                value: "5"
              },
              {
                label: "其它",
                value: "99"
              }
            ]
          },
          {
            type: "select",
            prop: "productSubType",
            label: "产品详细类型:",
            placeholder: "请选择状态",
            optList: [
              {
                label: "养老年金保险",
                value: "1"
              },
              {
                label: "非养老年金保险",
                value: "2"
              },
              {
                label: "终身寿险",
                value: "3"
              },
              {
                label: "定期寿险",
                value: "4"
              },
              {
                label: "两全保险",
                value: "5"
              },
              {
                label: "重大疾病保险",
                value: "6"
              },
              {
                label: "防癌保险",
                value: "7"
              },
              {
                label: "轻症保险",
                value: "8"
              },
              {
                label: "其它疾病保险",
                value: "9"
              },
              {
                label: "费用补偿型医疗保险",
                value: "10"
              },
              {
                label: "定额给付型医疗保险",
                value: "11"
              },
              {
                label: "意外伤害保险",
                value: "12"
              },
              {
                label: "护理保险",
                value: "13"
              },
              {
                label: "失能收入损失保险",
                value: "14"
              },
              {
                label: "其它类型保险",
                value: "99"
              }
            ]
          },
          {
            type: "select",
            prop: "productDesignType",
            label: "产品设计类型:",
            placeholder: "请选择类型",
            optList: [
              {
                label: "无关",
                value: "0"
              },
              {
                label: "普通",
                value: "1"
              },
              {
                label: "分红",
                value: "2"
              },
              {
                label: "万能",
                value: "3"
              },
              {
                label: "投资连结型",
                value: "4"
              }
            ]
          },
          {
            type: "select",
            prop: "insuranceTermType",
            label: "保险期间类型:",
            placeholder: "请选择保险类型",
            optList: [
              {
                label: "长期",
                value: "0"
              },
              {
                label: "短期",
                value: "1"
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
          requireName: "年金",
          productSubType: "小虎",
          createPersion: "上海",
          createTime: "2019-10-15",
          status: "已提交",
         
        },
        {
          requireName: "寿险",
          productSubType: "小虎",
          createPersion: "上海",
          createTime: "2019-10-15",
          status: "未提交",
          introducer: "小蓝",
         
        },
      ],
      state2: "",
      allotShow: false,
      restaurants: []
    };
  },
  computed: {
    total: function() {
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
      let name = data.type;
      console.log(name);
      this.$router.push("/add/template/" + name);
    },
    addNew() {
      this.$router.push("/add/demand");
    },
    allocation() {
      this.allotShow = true;
    },
    close() {
      this.allotShow = false;
    },
    handleSelect(item) {
      console.log(item);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    // loadAll() {
    //   return [
    //     { name: "小杰" },
    //     { name: "小明" },
    //     { name: "兴起" },
    //     { name: "宏大" },
    //     { name: "大家" },
    //     { name: "姚远" }
    //   ];
    // }
    loadAll() {
      return [
        { 'value': "小杰" },
        { 'value': "小明" },
        { 'value': "兴起" },
        { 'value': "宏大" },
        { 'value': "大家" },
        { 'value': "姚远" }
      ];
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>
