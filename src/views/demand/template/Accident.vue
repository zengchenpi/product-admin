<template>
  <div class="page-template">
    <h3>需求中心</h3>
    <p class="minTitle">意外</p>
    <el-form ref="form" :model="form" label-width="100px" :inline="true">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="产品要素" name="1">
          <el-form-item label="产品大类">
            <el-input v-model="form.productType" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="产品类型">
            <el-select v-model="form.productSubType" placeholder="请选择主产品类型">
              <el-option label="定期寿险" value="定期寿险"></el-option>
              <el-option label="终身寿险" value="终身寿险"></el-option>
              <el-option label="两全保险" value="两全保险"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设计类型">
            <el-select v-model="form.proDesignType" placeholder="请选择主产品类型">
              <el-option label="普通型" value="普通型"></el-option>
              <el-option label="分红型" value="分红型"></el-option>
              <el-option label="万能型" value="万能型"></el-option>
              <el-option label="投资连结型" value="投资连结型"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主附险">
            <el-select v-model="form.masterOrAppend" placeholder="请选择主附险">
              <el-option label="主险" value="0"></el-option>
              <el-option label="附险" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="承保方式">
            <el-select v-model="form.insuranceType" placeholder="请选择承保方式">
              <el-option label="个人" value="0"></el-option>
              <el-option label="团体" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="保险期类型">
            <el-select v-model="form.insuranceTermType" placeholder="请选择保险期类型">
              <el-option label="长期" value="0"></el-option>
              <el-option label="短期" value="1"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="投保开始年龄">
            <el-input v-model="form.insuranceAgeBegin"></el-input>
          </el-form-item>
          <el-form-item label="投保结束年龄">
            <el-input v-model="form.insuranceAgeEnd"></el-input>
          </el-form-item>
          <el-form-item label="缴费方式">
            <el-select v-model="form.premFrequency" multiple placeholder="请选择缴费方式">
              <el-option label="年交" value="年交"></el-option>
              <el-option label="季交" value="季交"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="缴费期间" class="insurance">
            <el-radio-group v-model="form.premPeriodType" :disabled="disable3">
              <el-radio label="按年龄"></el-radio>
              <p v-show="form.premPeriodType=='按年龄'">
                <el-input v-model="form.premPeriod"></el-input>
                <span>岁</span>
                <!-- <el-checkbox v-model="form.premPeriod" label="终身"></el-checkbox> -->
              </p>
              <el-radio label="按年份"></el-radio>
              <p v-show="form.premPeriodType=='按年份'">
                <el-input v-model="form.premPeriod"></el-input>
                <span>年</span>
              </p>
              <el-radio label="其它" title="请在右方输入"></el-radio>
              <p v-show="form.premPeriodType=='其它'">
                <el-input v-model="form.premPeriod"></el-input>
              </p>
            </el-radio-group>
          </el-form-item>
          <el-form-item style="display:block" label="保险期间" class="insurance">
            <el-radio-group v-model="form.coverPeriodType">
              <el-radio label="按年龄"></el-radio>
              <p v-show="form.coverPeriodType=='按年龄'">
                <el-input v-model="form.coverPeriod"></el-input>
                <span>岁</span>
                <!-- <el-checkbox v-model="form.checked">终身</el-checkbox> -->
              </p>
              <el-radio label="按年份"></el-radio>
              <p v-show="form.coverPeriodType=='按年份'">
                <el-input v-model="form.coverPeriod"></el-input>
                <span>年</span>
              </p>
              <el-radio label="其它"></el-radio>
              <p v-show="form.coverPeriodType=='其它'">
                <el-input v-model="form.coverPeriod"></el-input>
              </p>
            </el-radio-group>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item title="市场分析" name="2">
          <el-form-item label="市场规模">
            <el-input v-model="form.marketSize"></el-input>
          </el-form-item>
          <el-form-item label="业务结构">
            <el-input v-model="form.yw"></el-input>
          </el-form-item>
          <el-form-item label="销售策略">
            <el-input v-model="form.salesStrategy"></el-input>
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
            <el-input v-model="form.premiumScale"></el-input>
            <span class="prompt">万</span>
          </el-form-item>
          <el-form-item label="件均保费">
            <el-input v-model="form.eachAvgPremiun"></el-input>
            <span class="prompt">元</span>
          </el-form-item>
          <el-form-item label="其它补充">
            <el-input v-model="form.otherSupplement"></el-input>
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
            <el-input v-model="form.expectRate" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="业务类别" label-width="180px">
            <el-select v-model="form.rateBusinessType" placeholder="请选择业务">
              <el-option label="长期价值险" value="1"></el-option>
              <el-option label="长期规模险" value="2"></el-option>
              <el-option label="短期险" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" label-width="180px">
            <el-input v-model="form.rateNote" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="新业务价值类别" label-width="180px">
            <el-select v-model="form.newBusinessClass" placeholder="请选择业务">
              <el-option label="AAAAA" value="AAAAA"></el-option>
              <el-option label="AAAA" value="AAAA"></el-option>
              <el-option label="AAA" value="AAA"></el-option>
              <el-option label="AA" value="AA"></el-option>
              <el-option label="A" value="A"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="新业务价值系数" label-width="180px">
            <el-select v-model="form.newBusinessFactor" placeholder="请选择价值系数" :disabled="valueD">
              <el-option label="140%" value="140"></el-option>
              <el-option label="120%" value="120"></el-option>
              <el-option label="100%" value="10"></el-option>
              <el-option label="80%" value="80"></el-option>
              <el-option label="55%" value="55"></el-option>
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
          <el-form-item label="特殊保全需求" label-width="180px">
            <el-upload
              class="upload-demo"
              ref="upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-change="preservation"
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
          <el-form-item label="特殊投核保需求" label-width="180px">
            <el-upload
              class="upload-demo"
              ref="upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-change="special"
              action
              :limit='1'
              :auto-upload="false"
            >
              <el-input class="inputText" v-model="form.gm"></el-input>
              <el-button
                class="uploadF"
                slot="trigger"
                size="small"
                type="primary"
                title="只能上传一个文件"
              >上传文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="其它特殊需求" label-width="180px">
            <el-input v-model="form.otherSpecialRequied" placeholder="请输入特殊需求"></el-input>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item title="保险责任" name="5">
          <div class="item">
            <div class="left">
              <span>意外身故保险金</span>
              <el-select v-model="form.value" placeholder="请选择">
                <el-option label="含" value="含"></el-option>
                <el-option label="不含" value="不含"></el-option>
              </el-select>
            </div>
            <div class="right line">
              <el-input v-model="form.fy" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <span>特殊人群意外身故保险金</span>
              <el-select v-model="form.value" placeholder="请选择">
                <el-option label="含" value="含"></el-option>
                <el-option label="不含" value="不含"></el-option>
              </el-select>
            </div>
            <div class="right line">
              <el-input v-model="form.fy" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="item limit">
            <div class="left">
              <span>特殊人群意外伤残保险金</span>
              <el-select v-model="form.value" placeholder="请选择">
                <el-option label="含" value="含"></el-option>
                <el-option label="不含" value="不含"></el-option>
              </el-select>
            </div>
            <div class="right line">
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="旅客"></el-checkbox>
                <el-checkbox label="借款人"></el-checkbox>
                <el-checkbox label="驾驶"></el-checkbox>
                <el-checkbox label="乘客"></el-checkbox>
                <el-checkbox label="驾乘人员"></el-checkbox>
                <el-checkbox label="其它"></el-checkbox>
              </el-checkbox-group>
              <el-input v-model="form.fy" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="item limit">
            <div class="left">
              <span>特殊场景意外身故保险金</span>
              <el-select v-model="form.value" placeholder="请选择">
                <el-option label="含" value="含"></el-option>
                <el-option label="不含" value="不含"></el-option>
              </el-select>
            </div>
            <div class="right line">
              <el-checkbox-group v-model="checkList1">
                <el-checkbox label="建筑工程"></el-checkbox>
                <el-checkbox label="旅游"></el-checkbox>
                <el-checkbox label="工伤"></el-checkbox>
                <el-checkbox label="麻醉"></el-checkbox>
                <el-checkbox label="手术"></el-checkbox>
                <el-checkbox label="疫苗"></el-checkbox>
                <el-checkbox label="其它"></el-checkbox>
              </el-checkbox-group>
              <el-input v-model="form.fy" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="item limit">
            <div class="left">
              <span>特殊场景意外伤残保险金</span>
              <el-select v-model="form.value" placeholder="请选择">
                <el-option label="含" value="含"></el-option>
                <el-option label="不含" value="不含"></el-option>
              </el-select>
            </div>
            <div class="right line">
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="旅客"></el-checkbox>
                <el-checkbox label="借款人"></el-checkbox>
                <el-checkbox label="驾驶"></el-checkbox>
                <el-checkbox label="乘客"></el-checkbox>
                <el-checkbox label="驾乘人员"></el-checkbox>
                <el-checkbox label="其它"></el-checkbox>
              </el-checkbox-group>
              <el-input v-model="form.fy" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <span>意外烧伤伤残保险金</span>
              <el-select v-model="form.value" placeholder="请选择">
                <el-option label="含" value="含"></el-option>
                <el-option label="不含" value="不含"></el-option>
              </el-select>
            </div>
            <div class="right line">
              <el-input v-model="form.fy" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <span>意外医疗保险金</span>
              <el-select v-model="form.value" placeholder="请选择">
                <el-option label="含" value="含"></el-option>
                <el-option label="不含" value="不含"></el-option>
              </el-select>
            </div>
            <div class="right line">
              <el-input v-model="form.fy" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <span>其它</span>
              <el-select v-model="form.value" placeholder="请选择">
                <el-option label="含" value="含"></el-option>
                <el-option label="不含" value="不含"></el-option>
              </el-select>
            </div>
            <div class="right line">
              <el-input v-model="form.fy" placeholder="请输入内容"></el-input>
            </div>
          </div>
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
    background-color: #fff;
  }
  p.minTitle {
    padding-left: 28px;
    font-size: 13px;
    font-weight: bold;
    background-color: #fff;
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
    background-color: #f8f8f8;
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
    /deep/ .el-radio {
      margin-right: 15px;
      position: relative;
      margin-top: 12px;
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
  div.item {
    overflow: hidden;
    margin-bottom: 10px;
    /deep/ .el-input__inner {
      width: 142px;
    }
    &.limit {
      .right {
        display: flex;
        /deep/ .el-input {
          width: 20%;
          margin-left: 30px;
        }
      }
    }
    div.left {
      float: left;
      display: flex;
      line-height: 40px;
      margin-left: 20px;
      max-width: 350px;
      span {
        display: inline-block;
        width: 151px;
      }
    }
    div.right {
      float: left;
      margin-left: 90px;
      line-height: 40px;
      text-align: center;
      p {
        margin-bottom: 10px;
        & > div {
          display: inline-block;
          width: 150px;
          margin-left: 10px;
          margin-right: 10px;
        }
      }
      p > span {
        width: 80px;
      }
      .el-button {
        width: 200px;
        margin-top: 10px;
        margin-bottom: 50px;
      }
    }

    div.line {
      width: 800px;
      /deep/ .el-input__inner {
        width: 100%;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        productType: "意外",
        productSubType:'',
        proDesignType:'',
        masterOrAppend:'',
        insuranceType:'',
        insuranceTermType:'',
        insuranceAgeBegin:'',
        insuranceAgeEnd:'',
        premFrequency:'',
        premPeriodType:'',
        coverPeriodType:'',
        coverPeriod:'',
        marketSize:'',
        bussinessConstruction:'',
        salesStrategy:'',
        expectOnlineDate:'',
        premiumScale:'',
        eachAvgPremiun:'',
        tradeResearch: { fileName: "", content: "", filePath: "" },
        specialAssureRequie: { fileName: "", content: "", filePath: "" },
        specialInsuranceReq: { fileName: "", content: "", filePath: "" },
        expectRate:'',
        rateBusinessType:'',
        rateNote:'',
        newBusinessFactor:'',
        otherSpecialRequied:'',
      },
      activeNames: ["1", "2", "3", "4", "5"],
      checkList: [],
      checkList1: [],
      valueD: false,
      payment:'',
    };
  },
  computed: {
    value: function() {
      let { params } = this.$route;
      return params;
    },
    valueType: function() {
      return this.form.newBusinessClass;
    }
  },
  watch: {
    valueType(val) {
      this.valueD = true;
      if (val === "AAAAA") {
        this.form.newBusinessFactor = "140%";
      } else if (val === "AAAA") {
        this.form.newBusinessFactor = "120%";
      } else if (val === "AAA") {
        this.form.newBusinessFactor = "100%";
      } else if (val === "AA") {
        this.form.newBusinessFactor = "80%";
      } else if (val === "A") {
        this.form.newBusinessFactor = "55%";
      }
    }
  },
  methods: {
    special(file) {
      let reader = new FileReader();
      reader.onload = () => {
        let _base64 = reader.result;
        console.log(_base64);
        let BASE64 = _base64.split(",");
        this.form.specialInsuranceReq.content = BASE64[1];
      };
      reader.readAsDataURL(file.raw);
      this.form.specialInsuranceReq.fileName = file.name;
    },
    preservation(file) {
      let reader = new FileReader();
      reader.onload = () => {
        let _base64 = reader.result;
        console.log(_base64);
        let BASE64 = _base64.split(",");
        this.form.specialAssureRequie.content = BASE64[1];
      };
      reader.readAsDataURL(file.raw);
      this.form.specialAssureRequie.fileName = file.name;
    },
    handleChange(file) {
       let reader = new FileReader();
      reader.onload = () => {
        let _base64 = reader.result;
        console.log(_base64);
        let BASE64 = _base64.split(",");
        this.form.tradeResearch.content = BASE64[1];
      };
      reader.readAsDataURL(file.raw);
      this.form.tradeResearch.fileName = file.name;
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