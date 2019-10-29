<template>
  <div class="page-review">
    <el-table :data="tableData" border style="width: 100%" @select="select">
      <el-table-column align="center" prop="productType" label="产品名称" min-width="100px"></el-table-column>
      <el-table-column align="center" prop="productSubType" label="产品大类" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="time" label="产品类型" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="time" label="设计类型" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="time" label="保险期间类型" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="introducer" label="提出人" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="time" label="提出时间" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="time" label="生产状态" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="state" label="备案状态" min-width="90px"></el-table-column>
      <el-table-column align="center" label="操作" min-width="222px">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleDetail(scope.row)">查看详情</el-button>
          <el-button size="mini" type="text" @click="handleDetail(scope.row)">查看流程</el-button>
          <el-button size="mini" type="text" @click="dealWith(scope.row)">处理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-card class="box-card dealWith" v-show="review">
      <div slot="header" class="clearfix">
        <span>退回修订</span>
        <i
          class="el-icon-circle-close"
          style="float:right;cursor:pointer"
          title="关闭"
          @click="closeReview"
        ></i>
      </div>
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">基本信息</div>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" size="small">查看详情</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">产品大类:年金</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">产品类型:养老年金</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">设计类型:万能</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">保险期间类型:长期</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">提出人:张三</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">提出时间:2019-07-08</div>
        </el-col>
      </el-row>
      <div class="border"></div>
      <div class="tit">
        <span>审核意见</span>
      </div>
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
      <div class="tit">
        <span>审核历史</span>
      </div>
      <!-- <el-table :data="history" border style="width: 100%" @select="select">
        <el-table-column align="center" prop="startTime" label="发起时间" min-width="100px"></el-table-column>
        <el-table-column align="center" prop="auditor" label="审核人" min-width="70px"></el-table-column>
        <el-table-column align="center" prop="finishTime" label="完成时间" min-width="100px"></el-table-column>
        <el-table-column align="center" prop="results" label="审核结果" min-width="80px"></el-table-column>
        <el-table-column align="center" prop="opinion" label="评估意见" min-width="108px"></el-table-column>
      </el-table>-->
      <el-row style="text-align:center">
        <el-button type="success" size="small">同意</el-button>
        <el-button type="primary" size="small">退回修订</el-button>
        <el-button size="small" @click="closeReview">关闭</el-button>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.page-review {
  .dealWith {
    width: 500px;
    // height: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -350px;
    margin-left: -250px;
    z-index: 10;
    font-size: 14px;

    /deep/ .el-card__header {
      background-color: #f8f8f8;
    }
    /deep/ .el-card__body {
      .el-row {
        margin-top: 20px;
        font-size: 14px;
      }
    }
    .border {
      border-bottom: 1px solid #ddd;
      margin: 20px 5px 10px;
    }
    .tit {
      margin: 10px 0;
    }
    //   transform:translate(-50% -50%);
  }
}
</style>
<script>
export default {
  data() {
    return {
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
      ],
      review:false,
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
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "小杰" },
        { value: "小明" },
        { value: "兴起" },
        { value: "宏大" },
        { value: "大家" },
        { value: "姚远" }
      ];
    },
    dealWith() {
      this.review = true;
    },
    closeReview() {
      this.review = false;
    }
  }
};
</script>