<template>
  <el-container>
    <el-header>
      <h2>需求中心</h2>
      <el-row>
        <el-col :span="2">
          <span>新增</span>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">创意导入</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="100px" :inline="true">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="基本信息及背景" name="1">
            <el-form-item label="需求名称">
              <el-input v-model="form.productType"></el-input>
            </el-form-item>
            <el-form-item label="客群特征">
              <el-select v-model="form.productSubType" placeholder="请选择主产品类型">
                <el-option label="普通用户" value="普通用户"></el-option>
                <el-option label="高端用户" value="高端用户"></el-option>
                <el-option label="少儿" value="少儿"></el-option>
                <el-option label="女性" value="女性"></el-option>
                <el-option label="男性" value="男性"></el-option>
                <el-option label="中老年" value="中老年"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="需求单位">
              <el-select v-model="form.productSubType" placeholder="请选择">
                <el-option label="营销事业群" value="营销事业群"></el-option>
                <el-option label="银保事业中心" value="银保事业中心"></el-option>
                <el-option label="中介营销事业部" value="中介营销事业部"></el-option>
                <el-option label="战略资源事业部" value="战略资源事业部"></el-option>
                <el-option label="数字金融事业部" value="数字金融事业部"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品功能">
              <el-select v-model="form.productSubType" placeholder="请选择">
                <el-option label="基础产品" value="基础产品"></el-option>
                <el-option label="明星产品" value="明星产品"></el-option>
                <el-option label="辅助产品" value="辅助产品"></el-option>
                <el-option label="获客产品" value="获客产品"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品描述">
              <el-input
                type="textarea"
                :rows="4"
                placeholder="(非必填项) 请输入您想附加的。比如：是否允许调剂其他分类等"
                v-model="form.textarea"
              ></el-input>
            </el-form-item>
            <el-form-item label="产品亮点">
              <el-input type="textarea" :rows="4" placeholder="(非必填项) 请输入" v-model="form.textarea"></el-input>
            </el-form-item>
          </el-collapse-item>
          <el-collapse-item title="主产品" name="2">
            <el-row style="padding: 0 15px 10px;border-bottom:2px solid #ddd;">
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
            </el-row>
            <el-row>
              <el-table :data="mainData" border style="width: 100%">
                <el-table-column
                  align="center"
                  fixed
                  prop="productType"
                  label="产品类型"
                  min-width="90"
                ></el-table-column>
                <el-table-column
                  align="center"
                  prop="insuranceTermType"
                  label="保险期间类型"
                  min-width="60"
                ></el-table-column>
                <el-table-column
                  align="center"
                  prop="productDesignType"
                  label="设计类型"
                  min-width="80"
                ></el-table-column>
                <el-table-column align="center" prop="introducer" label="提出人" min-width="80"></el-table-column>
                <el-table-column align="center" fixed="right" label="操作" min-width="100">
                  <template slot-scope="scope">
                    <el-button
                      @click="handleDelete(scope.$index, scope.row)"
                      type="text"
                      size="small"
                      style="color:red"
                    >删除</el-button>
                    <el-button type="text" size="small">修改</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="搭配产品" name="3">
             <el-row style="padding: 0 15px 10px;border-bottom:2px solid #ddd;">
              <el-dropdown split-button type="primary" @command="collocation">
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
            </el-row>
            <el-row>
              <el-table :data="matchData" border style="width: 100%">
                <el-table-column
                  align="center"
                  fixed
                  prop="productType"
                  label="产品类型"
                  min-width="90"
                ></el-table-column>
                <el-table-column
                  align="center"
                  prop="insuranceTermType"
                  label="保险期间类型"
                  min-width="60"
                ></el-table-column>
                <el-table-column
                  align="center"
                  prop="productDesignType"
                  label="设计类型"
                  min-width="80"
                ></el-table-column>
                <el-table-column align="center" prop="introducer" label="提出人" min-width="80"></el-table-column>
                <el-table-column align="center" fixed="right" label="操作" min-width="100">
                  <template slot-scope="scope">
                    <el-button
                      @click="handleMatchDelete(scope.$index, scope.row)"
                      type="text"
                      size="small"
                      style="color:red"
                    >删除</el-button>
                    <el-button type="text" size="small">修改</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-row>
          </el-collapse-item>
         
        </el-collapse>
        <el-form-item class="btn">
           <el-button type="info">保存</el-button>
           <el-button type="primary">提交</el-button>
           <el-button >返回</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>
<style lang="scss" scoped>
.el-container {
  .el-header {
    background-color: #fff;
    padding-bottom: 20px;
    height: 80px !important;
  }
  /deep/ .el-collapse-item__header {
    border: 1px solid #bbb;
    margin-top: 15px;
    border-radius: 4px;
    padding-left: 20px;
    font-weight: bold;
    background-color: #f8f8f8;
  }
  /deep/ .el-collapse-item__wrap {
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-top: 10px;
    padding-top: 10px;
  }
  .btn{
    margin-top: 20px;
    text-align: center;
    width: 100%;
    .el-button{
      margin-right: 30px;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      form: {},
      activeNames: ["1", "2", "3", "4", "5"],
      mainData: [
        {
          productType: "年金",
          insuranceTermType: "长期",
          productDesignType: "上海",
          introducer: "普陀区"
        },
        {
          productType: "2016-05-04",
          insuranceTermType: "短期",
          productDesignType: "上海",
          introducer: "普陀区"
        },
        {
          productType: "2016-05-01",
          insuranceTermType: "王小虎",
          productDesignType: "上海",
          introducer: "普陀区"
        },
        {
          productType: "2016-05-03",
          insuranceTermType: "王小虎",
          productDesignType: "上海",
          introducer: "普陀区"
        }
      ],
      matchData: [
        {
          productType: "年金",
          insuranceTermType: "长期",
          productDesignType: "上海",
          introducer: "普陀区"
        },
        {
          productType: "2016-05-04",
          insuranceTermType: "短期",
          productDesignType: "上海",
          introducer: "普陀区"
        },
        {
          productType: "2016-05-01",
          insuranceTermType: "王小虎",
          productDesignType: "上海",
          introducer: "普陀区"
        },
        {
          productType: "2016-05-03",
          insuranceTermType: "王小虎",
          productDesignType: "上海",
          introducer: "普陀区"
        }
      ]
    };
  },
  methods: {
    handleCommand(value) {
      let detail = value;
      this.$router.push({
        name:'addTemplate',
        params: { 
                name: detail, 
            }
      });
     sessionStorage.setItem('ifMaster',1);
    },
    collocation(value){
      let detail = value;
      this.$router.push({
        name:'addTemplate',
        params: { 
                name: detail, 
            }
      });
     sessionStorage.setItem('ifMaster',0);
    },
    handleDelete(index){
      
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    handleMatchDelete(index){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.matchData.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>