<template>
  <div class="page-template">
    <h3>需求中心</h3>
    <p class="minTitle">{{$store.state.type}}</p>
    <el-form ref="form" :model="form" label-width="100px" :inline="true">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="产品要素" name="1">
          <el-form-item label="产品大类">
            <el-input v-model="form.name" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="产品类型">
            <el-input v-model="form.type" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="设计类型">
            <el-input v-model="form.designType" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="主附险">
            <el-select v-model="form.mainRisk" placeholder="请选择主附险">
              <el-option label="主险" value="主险"></el-option>
              <el-option label="附险" value="附险"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="承保方式">
            <el-select v-model="form.mainRisk" placeholder="请选择承保方式">
              <el-option label="个人" value="个人"></el-option>
              <el-option label="集体" value="集体"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="保险期类型">
            <el-select v-model="form.mainRisk" placeholder="请选择保险期类型">
              <el-option label="长期" value="长期"></el-option>
              <el-option label="短期" value="短期"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="投保年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="缴费方式">
            <el-select v-model="form.mainRisk" placeholder="请选择缴费方式">
              <el-option label="年交" value="年交"></el-option>
              <el-option label="季交" value="季交"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="缴费方式" class="insurance">
            <el-radio-group v-model="form.resource">
              <p>
                <el-radio label="按年龄"></el-radio>
                <el-input v-model="form.age"></el-input>
                <span>岁</span>
                <el-checkbox v-model="form.checked">终身</el-checkbox>
              </p>
              <p>
                <el-radio label="按年份"></el-radio>
                <el-input v-model="form.year"></el-input>
                <span>年</span>
              </p>
              <p>
                <el-radio label="其他"></el-radio>
                <el-input v-model="form.other"></el-input>
              </p>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="保险期间" class="insurance">
            <el-radio-group v-model="form.resource">
              <p>
                <el-radio label="按年龄"></el-radio>
                <el-input v-model="form.age"></el-input>
                <span>岁</span>
                <el-checkbox v-model="form.checked">终身</el-checkbox>
              </p>
              <p>
                <el-radio label="按年份"></el-radio>
                <el-input v-model="form.year"></el-input>
                <span>年</span>
              </p>
              <p>
                <el-radio label="其他"></el-radio>
                <el-input v-model="form.other"></el-input>
              </p>
            </el-radio-group>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item title="市场分析" name="2">
          <el-form-item label="市场规模">
            <el-input v-model="form.gm"></el-input>
          </el-form-item>
          <el-form-item label="业务结构">
            <el-input v-model="form.yw"></el-input>
          </el-form-item>
          <el-form-item label="销售策略">
            <el-input v-model="form.cl"></el-input>
          </el-form-item>
          <el-form-item label="期望上市时间">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="保费规模">
            <el-input v-model="form.gm"></el-input>
            <span class="prompt">万</span>
          </el-form-item>
          <el-form-item label="件均保费">
            <el-input v-model="form.gm"></el-input>
            <span class="prompt">元</span>
          </el-form-item>
          <el-form-item label="其它补充">
            <el-input v-model="form.bc"></el-input>
          </el-form-item>
          <el-form-item label="同业调研">
            <el-upload
              class="upload-demo"
              ref="upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              action
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary">上传文件</el-button>
            </el-upload>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item title="费率价值" name="3">
          <el-form-item label="期望费率" label-width="180px">
            <el-input v-model="form.fl" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="业务类别" label-width="180px">
            <el-select v-model="form.workType" placeholder="请选择业务">
              <el-option label="长期价值险" value="长期价值险"></el-option>
              <el-option label="短期价值险" value="短期价值险"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" label-width="180px">
            <el-input v-model="form.bz" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="新业务价值类别" label-width="180px">
            <el-select v-model="form.workType" placeholder="请选择业务">
              <el-option label="AAAA" value="AAAA"></el-option>
              <el-option label="AAA" value="AAA"></el-option>
              <el-option label="AA" value="AA"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="新业务价值系数" label-width="180px">
            <el-select v-model="form.xs" placeholder="请选择价值系数">
              <el-option label="150%" value="150%"></el-option>
              <el-option label="160%" value="160%"></el-option>
              <el-option label="140%" value="140%"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标准化产品费率测算结果" label-width="180px">
            <el-upload
              class="upload-demo"
              ref="upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              action
              :auto-upload="false"
            >
              <el-input class="inputText" v-model="form.gm" placeholder="上传测试参数，费率及价值结果"></el-input>
              <el-button
                class="uploadF"
                slot="trigger"
                size="small"
                type="primary"
                title="上传费率计算文件"
              >费率试算</el-button>
            </el-upload>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item title="运营规则" name="4">
          <el-form-item label="投该保规则" label-width="180px">
            <el-upload
              class="upload-demo"
              ref="upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              action
              :auto-upload="false"
            >
              <el-input class="inputText" v-model="form.gm"></el-input>
              <el-button
                class="uploadF"
                slot="trigger"
                size="small"
                type="primary"
                title="上传文件"
              >上传文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="特殊保全需求" label-width="180px">
            <el-upload
              class="upload-demo"
              ref="upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              action
              :auto-upload="false"
            >
              <el-input class="inputText" v-model="form.gm"></el-input>
              <el-button
                class="uploadF"
                slot="trigger"
                size="small"
                type="primary"
                title="上传文件"
              >上传文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="特殊投该保需求" label-width="180px">
            <el-upload
              class="upload-demo"
              ref="upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              action
              :auto-upload="false"
            >
              <el-input class="inputText" v-model="form.gm"></el-input>
              <el-button
                class="uploadF"
                slot="trigger"
                size="small"
                type="primary"
                title="上传费率计算文件"
              >上传文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="其它特殊需求" label-width="180px">
            <el-input v-model="form.tz" placeholder="请输入特殊需求"></el-input>
          </el-form-item>
          <el-form-item label="保全规则" label-width="180px">
            <el-input v-model="form.gz" placeholder="请输入规则"></el-input>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>

      <el-form-item class="btn">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.page-template {
  background-color: #ddd;
  h3 {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    font-size: 23px;
    background-color: #Fff;
  }
  p.minTitle{
    padding-left: 28px;
    font-size: 13px;
    font-weight: bold;
    background-color: #Fff;
    padding-bottom: 10px;
  }
  /deep/.el-input__inner {
    width: 250px;
  }
  /deep/ .el-form {
    padding: 10px 30px;
  }
  /deep/ .el-collapse-item__header {
    border: 1px solid #bbb;
    margin-top: 15px;
    border-radius: 4px;
    padding-left: 20px;
  }
  /deep/ .el-collapse-item__wrap {
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-top: 10px;
    padding-top: 10px;
  }
  .el-radio-group {
    display: flex;
    /deep/ .el-input__inner {
      width: 100px;
    }
    p {
      display: flex;
      margin-right: 50px;
      .el-radio {
        position: relative;
        top: 12px;
        margin-right: 15px;
      }
      .el-inut {
        margin-right: 15px;
      }
      .el-checkbox {
        padding-top: 10px;
      }
      span {
        display: inline-block;
        width: 40px;
        color: #333;
        font-size: 12px;
        padding-top: 14px;
        margin-left: -13px;
      }
    }
  }
  .prompt {
    position: absolute;
    top: 2px;
    right: -19px;
  }
  .btn {
    display: block;
    text-align: center;
    margin-top: 30px;
  }
  .inputText {
    margin-left: 10px;
    width: 50%;
  }
  // /deep/ .el-upload {
  //   position: relative;
  //   left: 254px;
  // }
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        name: "意外",
        type: "意外伤害保险",
        designType: "普通型",
        mainRisk: "",
        age: "0-60",
        checked: "",
        date1: "2019-10-19"
      },
      activeNames: ["1","2","3"]
    };
  },
  computed: {
    value: function() {
      let { params } = this.$route;
      return params;
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    onSubmit() {},
    submitUpload() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleRoute() {
      console.log(this.$router);
    }
  }
};
</script>