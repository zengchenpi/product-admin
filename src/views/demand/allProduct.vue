<template>
  <div class="page-allProduct">
    <searchFrom :formConfig="formConfig" :value="value" :block="block"></searchFrom>
    <el-table :data="tableData" header-align="center" border style="width: 100%" max-height="550" @select="select">
      <el-table-column align="center" type="selection" width="55"></el-table-column>
      <el-table-column align="center" fixed label="ID" type="index" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="productType" label="产品类型" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="productName" label="产品名称" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="insuranceTermType" label="保险期间类型" min-width="80px"></el-table-column>
      <el-table-column align="center" prop="sales" label="销售渠道" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="time" label="提出时间" min-width="90px"></el-table-column>
      <el-table-column align="center" prop="introducer" label="提出人" min-width="90px"></el-table-column>
      <el-table-column align="center" label="操作" min-width="80px">
         <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleDetail(scope.row)">详情</el-button>
        </template>
        <!-- <el-button size="mini" type="primary" @click="handleDetail()">详情</el-button> -->
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="total"></el-pagination>
  </div>
</template>
<style lang="scss" scoped>
.page-allProduct {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  .el-form {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border: 1px solid #dddddd;
  }
  /deep/ .el-form-item {
    margin-right: 100px;
    .el-input{
      width: 150px;
    }
    .el-form-item__label {
      width: 100px;
      line-height: 40px;
    }
    .el-input__inner {
      width: 158px;
      height: 40px;
      line-height: 40px;
    }
  }
  /deep/ .searchBtn {
    margin-left: 30px;
  }
  /deep/ .el-pagination{
      margin: 20px 0;
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
      formConfig: {
        formItemList: [
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
            prop: "designType",
            label: "设计类型:",
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
          productType: "寿险",
          productName: "教育无忧",
          insuranceTermType: "长期",
          sales: "银保",
          time: "2019-10-16",
          introducer: "张三"
        },
        {
          productType: "医疗",
          productName: "保障全面",
          insuranceTermType: "短期",
          sales: "中介",
          time: "2019-10-16",
          introducer: "李四"
        },
        {
          productType: "其它",
          productName: "教育无忧",
          insuranceTermType: "长期",
          sales: "银保",
          time: "2019-10-16",
          introducer: "张三"
        },
        {
          productType: "年金",
          productName: "保障全面",
          insuranceTermType: "短期",
          sales: "中介",
          time: "2019-10-16",
          introducer: "李四"
        },
        {
          productType: "疾病",
          productName: "教育无忧",
          insuranceTermType: "长期",
          sales: "银保",
          time: "2019-10-16",
          introducer: "张三"
        },
        {
          productType: "意外",
          productName: "保障全面",
          insuranceTermType: "短期",
          sales: "中介",
          time: "2019-10-16",
          introducer: "李四"
        }
      ]
    };
  },
   computed: {
     total:function(){
       return this.tableData.length;
     },
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
    handleDetail(value){
      let type= value.productType;
        this.$router.push('/add/template/'+type)
    }
  }
};
</script>