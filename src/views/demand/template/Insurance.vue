<template>
  <div class="page-template">
    <h3>需求中心</h3>
    <p class="minTitle">寿险</p>
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
            <el-select v-model="form.masterOrAppend" placeholder="请选择主附险" :disabled="disable">
              <el-option label="主险" value="0"></el-option>
              <el-option label="附险" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="承保方式">
            <el-select v-model="form.insuranceType" placeholder="请选择承保方式" :disabled="disable1">
              <el-option label="个人" value="0"></el-option>
              <el-option label="团体" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="保险期类型">
            <el-select v-model="form.insuranceTermType" placeholder="请选择保险期类型" :disabled="disable2">
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
            <el-input v-model="form.bussinessConstruction"></el-input>
          </el-form-item>
          <el-form-item label="销售策略">
            <el-input v-model="form.salesStrategy"></el-input>
          </el-form-item>
          <el-form-item label="期望上市时间">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.expectOnlineDate"
              value-format="yyyy-MM-dd"
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
              ref="form.tradeResearch"
              :on-success="handleAvatarSuccess"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              action="https://jsonplaceholder.typicode.com/posts/"
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
            <el-input v-model="form.otherSpecialRequied" placeholder="请输入特殊需求"></el-input>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item title="保险责任" name="5">
          <div class="item" v-if="productType==='两全保险'">
            <div class="left" style="width:18%;margin-right:1%">
              <el-row>
                <el-col :span="8">
                  <span>生存金</span>
                </el-col>
                <el-col :span="16">
                  <el-select v-model="form.responsbilities[0].ifInclude" placeholder="请选择">
                    <el-option label="含" value="1"></el-option>
                    <el-option label="不含" value="0"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
            <div class="right" style="width:70%">
              <el-row :gutter="7">
                <el-col :span="1">
                  <span>第</span>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    value-format="yyyy-MM-dd"
                    v-model="form.responsbilities[0].periodStart"
                  ></el-date-picker>
                </el-col>
                <el-col :span="1">
                  <span>至</span>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    value-format="yyyy-MM-dd"
                    v-model="form.responsbilities[0].periodEnd"
                  ></el-date-picker>
                </el-col>
                <el-col :span="3">
                  <el-select
                    v-model="form.responsbilities[0].responsibilityPeriodType"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
                <el-col :span="1.5">
                  <span>付给</span>
                </el-col>
                <el-col :span="3">
                  <el-input
                    v-model="form.responsbilities[0].payMoneyRatio"
                    type="number"
                    placeholder="请输入"
                  ></el-input>
                </el-col>
                <el-col :span="4">
                  <el-select v-model="form.responsbilities[0].payType" placeholder="请选择">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="item" v-if="productType==='两全保险'">
            <div class="left" style="width:18%;margin-right:1%">
              <el-row>
                <el-col :span="8">
                  <span>满险金</span>
                </el-col>
                <el-col :span="16">
                  <el-select v-model="form.responsbilities[1].ifInclude" placeholder="请选择">
                    <el-option label="含" value="1"></el-option>
                    <el-option label="不含" value="0"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
            <div class="right" style="width:70%">
              <el-row :gutter="7">
                <el-col :span="1">
                  <span>第</span>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.responsbilities[1].periodStart"
                  ></el-date-picker>
                </el-col>
                <el-col :span="1">
                  <span>至</span>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.responsbilities[1].periodEnd"
                  ></el-date-picker>
                </el-col>
                <el-col :span="3">
                  <el-select
                    v-model="form.responsbilities[1].responsibilityPeriodType"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
                <el-col :span="1.5">
                  <span>付给</span>
                </el-col>
                <el-col :span="3">
                  <el-input
                    v-model="form.responsbilities[1].payMoneyRatio"
                    type="number"
                    placeholder="请输入"
                  ></el-input>
                </el-col>
                <el-col :span="4">
                  <el-select v-model="form.responsbilities[1].payType" placeholder="请选择">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="item">
            <div class="left" style="width:18%;margin-right:1%">
              <el-row>
                <el-col :span="8">
                  <span>身故保险金</span>
                </el-col>
                <el-col :span="16">
                  <el-select v-model="form.responsbilities[2].ifInclude" placeholder="请选择">
                    <el-option label="含" value="1"></el-option>
                    <el-option label="不含" value="0"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
            <div class="right" style="width:70%">
              <el-row :gutter="7">
                <el-col :span="1">
                  <span>第</span>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.responsbilities[2].periodStart"
                  ></el-date-picker>
                </el-col>
                <el-col :span="1">
                  <span>至</span>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.responsbilities[2].periodEnd"
                  ></el-date-picker>
                </el-col>
                <el-col :span="3">
                  <el-select
                    v-model="form.responsbilities[2].responsibilityPeriodType"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
                <el-col :span="1.5">
                  <span>付给</span>
                </el-col>
                <el-col :span="3">
                  <el-input
                    v-model="form.responsbilities[2].payMoneyRatio"
                    type="number"
                    placeholder="请输入"
                  ></el-input>
                </el-col>
                <el-col :span="4">
                  <el-select v-model="form.responsbilities[2].payType" placeholder="请选择">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="item">
            <div class="left" style="width:18%;margin-right:1%">
              <el-row>
                <el-col :span="8">
                  <span>全残保险金</span>
                </el-col>
                <el-col :span="16">
                  <el-select v-model="form.responsbilities[3].ifInclude" placeholder="请选择">
                    <el-option label="含" value="1"></el-option>
                    <el-option label="不含" value="0"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
            <div class="right" style="width:70%">
              <el-row :gutter="7">
                <el-col :span="1">
                  <span>第</span>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.responsbilities[3].periodStart"
                  ></el-date-picker>
                </el-col>
                <el-col :span="1">
                  <span>至</span>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.responsbilities[3].periodEnd"
                  ></el-date-picker>
                </el-col>
                <el-col :span="3">
                  <el-select
                    v-model="form.responsbilities[3].responsibilityPeriodType"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
                <el-col :span="1.5">
                  <span>付给</span>
                </el-col>
                <el-col :span="3">
                  <el-input
                    v-model="form.responsbilities[3].payMoneyRatio "
                    type="number"
                    placeholder="请输入"
                  ></el-input>
                </el-col>
                <el-col :span="4">
                  <el-select v-model="form.responsbilities[3].payType" placeholder="请选择">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="item">
            <div class="left" style="width:18%;margin-right:1%">
              <el-row>
                <el-col :span="8">
                  <span>其它</span>
                </el-col>
                <el-col :span="16">
                  <el-select v-model="form.responsbilities[4].ifInclude" placeholder="请选择">
                    <el-option label="含" value="1"></el-option>
                    <el-option label="不含" value="0"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
            <div class="right" style="width:70%">
              <el-row :gutter="7">
                <el-col :span="1">
                  <span>第</span>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.responsbilities[4].periodStart"
                  ></el-date-picker>
                </el-col>
                <el-col :span="1">
                  <span>至</span>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.responsbilities[4].periodEnd"
                  ></el-date-picker>
                </el-col>
                <el-col :span="3">
                  <el-select
                    v-model="form.responsbilities[4].responsibilityPeriodType"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
                <el-col :span="1.5">
                  <span>付给</span>
                </el-col>
                <el-col :span="3">
                  <el-input
                    v-model="form.responsbilities[4].payMoneyRatio "
                    type="number"
                    placeholder="请输入"
                  ></el-input>
                </el-col>
                <el-col :span="4">
                  <el-select v-model="form.responsbilities[4].payType" placeholder="请选择">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="universal" v-if="form.proDesignType==='万能型'">
            <div class="item">
              <div class="left" style="width:18%;margin-right:1%">
                <el-row>
                  <el-col :span="8">
                    <span>等待期</span>
                  </el-col>
                  <el-col :span="16">
                    <el-select v-model="form.responsbilities[5].ifInclude" placeholder="请选择">
                      <el-option label="含" value="1"></el-option>
                      <el-option label="不含" value="0"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
              <div class="right" style="width:70%">
                <el-row :gutter="7">
                  <el-col :span="1">
                    <span>第</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[5].periodStart"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="1">
                    <span>至</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[5].periodEnd"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="3">
                    <el-select
                      v-model="form.responsbilities[5].responsibilityPeriodType"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1.5">
                    <span>付给</span>
                  </el-col>
                  <el-col :span="3">
                    <el-input
                      v-model="form.responsbilities[5].payMoneyRatio "
                      type="number"
                      placeholder="请输入"
                    ></el-input>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="form.responsbilities[5].payType" placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="item">
              <div class="left" style="width:18%;margin-right:1%">
                <el-row>
                  <el-col :span="8">
                    <span>是否保证续保</span>
                  </el-col>
                  <el-col :span="16">
                    <el-select v-model="form.responsbilities[6].ifInclude" placeholder="请选择">
                      <el-option label="含" value="1"></el-option>
                      <el-option label="不含" value="0"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
              <div class="right" style="width:70%">
                <el-row :gutter="7">
                  <el-col :span="1">
                    <span>第</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[6].periodStart"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="1">
                    <span>至</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[6].periodEnd"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="3">
                    <el-select
                      v-model="form.responsbilities[6].responsibilityPeriodType"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1.5">
                    <span>付给</span>
                  </el-col>
                  <el-col :span="3">
                    <el-input
                      v-model="form.responsbilities[6].payMoneyRatio "
                      type="number"
                      placeholder="请输入"
                    ></el-input>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="form.responsbilities[6].payType" placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="item">
              <div class="left" style="width:18%;margin-right:1%">
                <el-row>
                  <el-col :span="8">
                    <span>最低保障利率</span>
                  </el-col>
                  <el-col :span="16">
                    <el-select v-model="form.responsbilities[7].ifInclude" placeholder="请选择">
                      <el-option label="含" value="1"></el-option>
                      <el-option label="不含" value="0"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
              <div class="right" style="width:70%">
                <el-row :gutter="7">
                  <el-col :span="1">
                    <span>第</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[7].periodStart"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="1">
                    <span>至</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[7].periodEnd"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="3">
                    <el-select
                      v-model="form.responsbilities[7].responsibilityPeriodType"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1.5">
                    <span>付给</span>
                  </el-col>
                  <el-col :span="3">
                    <el-input
                      v-model="form.responsbilities[7].payMoneyRatio "
                      type="number"
                      placeholder="请输入"
                    ></el-input>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="form.responsbilities[7].payType" placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="item">
              <div class="left" style="width:18%;margin-right:1%">
                <el-row>
                  <el-col :span="8">
                    <span>期望结算利率</span>
                  </el-col>
                  <el-col :span="16">
                    <el-select v-model="form.responsbilities[8].ifInclude" placeholder="请选择">
                      <el-option label="含" value="1"></el-option>
                      <el-option label="不含" value="0"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
              <div class="right" style="width:70%">
                <el-row :gutter="7">
                  <el-col :span="1">
                    <span>第</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[8].periodStart"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="1">
                    <span>至</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[8].periodEnd"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="3">
                    <el-select
                      v-model="form.responsbilities[8].responsibilityPeriodType"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1.5">
                    <span>付给</span>
                  </el-col>
                  <el-col :span="3">
                    <el-input
                      v-model="form.responsbilities[8].payMoneyRatio "
                      type="number"
                      placeholder="请输入"
                    ></el-input>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="form.responsbilities[8].payType" placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
          <div class="investment" v-else-if="form.proDesignType==='投资连结型'">
            <div class="item">
              <div class="left" style="width:18%;margin-right:1%">
                <el-row>
                  <el-col :span="8">
                    <span>初始费用</span>
                  </el-col>
                  <el-col :span="16">
                    <el-select v-model="form.responsbilities[5].ifInclude" placeholder="请选择">
                      <el-option label="含" value="1"></el-option>
                      <el-option label="不含" value="0"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
              <div class="right" style="width:70%">
                <el-row :gutter="7">
                  <el-col :span="1">
                    <span>第</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[5].periodStart"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="1">
                    <span>至</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[5].periodEnd"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="3">
                    <el-select
                      v-model="form.responsbilities[5].responsibilityPeriodType"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1.5">
                    <span>付给</span>
                  </el-col>
                  <el-col :span="3">
                    <el-input
                      v-model="form.responsbilities[5].payMoneyRatio "
                      type="number"
                      placeholder="请输入"
                    ></el-input>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="form.responsbilities[5].payType" placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="item">
              <div class="left" style="width:18%;margin-right:1%">
                <el-row>
                  <el-col :span="8">
                    <span>退保费用</span>
                  </el-col>
                  <el-col :span="16">
                    <el-select v-model="form.responsbilities[6].ifInclude" placeholder="请选择">
                      <el-option label="含" value="1"></el-option>
                      <el-option label="不含" value="0"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
              <div class="right" style="width:70%">
                <el-row :gutter="7">
                  <el-col :span="1">
                    <span>第</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[6].periodStart"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="1">
                    <span>至</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[6].periodEnd"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="3">
                    <el-select
                      v-model="form.responsbilities[6].responsibilityPeriodType"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1.5">
                    <span>付给</span>
                  </el-col>
                  <el-col :span="3">
                    <el-input
                      v-model="form.responsbilities[6].payMoneyRatio "
                      type="number"
                      placeholder="请输入"
                    ></el-input>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="form.responsbilities[6].payType" placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="item">
              <div class="left" style="width:18%;margin-right:1%">
                <el-row>
                  <el-col :span="8">
                    <span>风险费用</span>
                  </el-col>
                  <el-col :span="16">
                    <el-select v-model="form.responsbilities[7].ifInclude" placeholder="请选择">
                      <el-option label="含" value="1"></el-option>
                      <el-option label="不含" value="0"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
              <div class="right" style="width:70%">
                <el-row :gutter="7">
                  <el-col :span="1">
                    <span>第</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[7].periodStart"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="1">
                    <span>至</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.responsbilities[7].periodEnd"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="3">
                    <el-select
                      v-model="form.responsbilities[7].responsibilityPeriodType"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1.5">
                    <span>付给</span>
                  </el-col>
                  <el-col :span="3">
                    <el-input
                      v-model="form.responsbilities[7].payMoneyRatio "
                      type="number"
                      placeholder="请输入"
                    ></el-input>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="form.responsbilities[7].payType" placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <span>持续奖金</span>
                <el-select v-model="form.responsbilities[8].ifInclude" placeholder="请选择">
                  <el-option label="含" value="含"></el-option>
                  <el-option label="不含" value="不含"></el-option>
                </el-select>
              </div>
              <div class="right line">
                <el-input
                  v-model="form.responsbilities[8].responsibilityDescribe"
                  placeholder="请输入"
                ></el-input>
              </div>
            </div>
          </div>
          <div class="share" v-else-if="form.proDesignType==='分红型'">
            <div class="item">
              <div class="left" style="width:18%;margin-right:1%">
                <el-row>
                  <el-col :span="8">
                    <span>分红方式</span>
                  </el-col>
                </el-row>
              </div>

              <div class="right" style="width:70%">
                <el-row :gutter="7">
                  <el-col :span="1">
                    <span></span>
                  </el-col>
                  <el-col :span="7">
                    <el-select
                      style="margin-right:80px;"
                      v-model="form.responsbilities[5].bonusType"
                      placeholder="请选择"
                    >
                      <el-option label="现金分红" value="0"></el-option>
                      <el-option label="保额分红" value="1"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1">
                    <span></span>
                  </el-col>
                  <el-col :span="5">
                    <el-select v-model="form.responsbilities[5].bonusGetMethod" placeholder="请选择">
                      <el-option label="现金领取" value="1"></el-option>
                      <el-option label="累积生息" value="2"></el-option>
                      <el-option label="其它" value="3"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </div>
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
  /deep/.el-radio {
    position: relative;
    top: 12px;
  }
  p.minTitle {
    padding-left: 28px;
    font-size: 13px;
    font-weight: bold;
    background-color: #fff;
    padding-bottom: 10px;
  }
  // /deep/.el-input__inner {
  //   width: 100%;
  // }
  /deep/ .el-form {
    padding: 0 30px;
  }
  /deep/ .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 100%;
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
  /deep/ .el-form-item__content {
    width: 217px;
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
        margin-left: -6px;
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
    // /deep/ .el-input__inner {
    //   width: 142px;
    // }

    div.left {
      float: left;
      display: flex;
      line-height: 40px;
      margin-left: 20px;
      max-width: 250px;
      span {
        display: inline-block;
        width: 90px;
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
  // /deep/ .el-select {
  //   margin-right: 20px;
  // }
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
      fileList: [],
      payment: "",
      period: "",
      proDesignType: "",
      form: {
        productType: "寿险",
        responsbilities: [
          {
            includeDetail: "生存金",
            ifInclude: "",
            responsibilityPeriodType: "",
            periodStart: "",
            periodEnd: "",
            payType: "",
            payMoneyRatio: ""
          },
          {
            includeDetail: "满险金",
            ifInclude: "",
            responsibilityPeriodType: "",
            periodStart: "",
            periodEnd: "",
            payType: "",
            payMoneyRatio: ""
          },
          {
            includeDetail: "身故保险金",
            ifInclude: "",
            responsibilityPeriodType: "",
            periodStart: "",
            periodEnd: "",
            payType: "",
            payMoneyRatio: ""
          },
          {
            includeDetail: "全残保险金",
            ifInclude: "",
            responsibilityPeriodType: "",
            periodStart: "",
            periodEnd: "",
            payType: "",
            payMoneyRatio: ""
          },
          {
            includeDetail: "其它",
            ifInclude: "",
            responsibilityPeriodType: "",
            periodStart: "",
            periodEnd: "",
            payType: "",
            payMoneyRatio: ""
          },
          {
            includeDetail: "分红型",
            ifInclude: "",
            bonusType: "",
            periodStart: "",
            periodEnd: "",
            payType: "",
            payMoneyRatio: ""
          },
          {
            includeDetail: "其它",
            ifInclude: "",
            responsibilityPeriodType: "",
            periodStart: "",
            periodEnd: "",
            payType: "",
            payMoneyRatio: ""
          },
          {
            includeDetail: "其它",
            ifInclude: "",
            responsibilityPeriodType: "",
            periodStart: "",
            periodEnd: "",
            payType: "",
            payMoneyRatio: ""
          },
          {
            includeDetail: "其它",
            ifInclude: "",
            responsibilityPeriodType: "",
            periodStart: "",
            periodEnd: "",
            payType: "",
            payMoneyRatio: "",
            responsibilityDescribe: ""
          }
        ],
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
         ifMaster:'',
      },
      activeNames: ["1", "2", "3", "4", "5"],
      length: ["1"],
      options: [
        {
          value: "0",
          label: "保单周单日"
        },
        {
          value: "1",
          label: "周岁"
        }
      ],
      options1: [
        {
          value: "0",
          label: "基本保额"
        },
        {
          value: "1",
          label: "年交保费"
        },
        {
          value: "2",
          label: "已交保费"
        }
      ],
      disable: false,
      disable1: false,
      disable2: false,
      disable3: false,
      valueD: false,
      show: false
    };
  },
  computed: {
    value: function() {
      let { params } = this.$route;
      return params;
    },
    designType: function() {
      return this.form.proDesignType;
    },
    productType: function() {
      return this.form.productSubType;
    },
    valueType: function() {
      return this.form.newBusinessClass;
    },
    goldEndDate: function() {
      return this.form.responsbilities[0].periodEnd;
    },
    goldPayType: function() {
      return this.form.responsbilities[0].payType;
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
    },
    designType(val) {
      if (val === "万能型") {
        this.form.masterOrAppend = "0";
        this.disable = true;
        this.payment = "其它";
        this.disable3 = true;
        this.form.responsbilities[5].includeDetail = "等待期";
        this.form.responsbilities[6].includeDetail = "是否保证续保";
        this.form.responsbilities[7].includeDetail = "最低保证利率";
        this.form.responsbilities[8].includeDetail = "期望结算利率";
      } else if (val === "投资连结型") {
        this.form.masterOrAppend = "0";
        this.disable = true;
        this.disable3 = true;
        this.payment = "其它";
        this.form.responsbilities[5].includeDetail = "初始费用";
        this.form.responsbilities[6].includeDetail = "退保费用";
        this.form.responsbilities[7].includeDetail = "风险费用";
        this.form.responsbilities[8].includeDetail = "持续奖金";
      } else if (val === "分红型") {
        // let obj = {
        // includeDetail: "分红型",
        // ifInclude: "",
        // bonusType: "",
        // periodStart: "",
        // periodEnd: "",
        // payType: "",
        // payMoneyRatio: ""
        // };
        this.form.responsbilities[5].includeDetail = "分红型";
        this.form.responsbilities.length = 6;
        this.disable3 = false;
      } else {
        this.form.responsbilities.length = 5;
        this.disable = false;
        this.disable3 = false;
      }
    },
    productType(val) {
      if (val === "两全保险") {
        this.form.insuranceType = "0";
        this.form.insuranceTermType = "0";
        this.disable2 = true;
        this.disable1 = true;
      } else if (val === "终身寿险") {
        this.form.insuranceTermType = "0";
        this.disable2 = true;
        this.disable1 = false;
      } else {
        this.disable2 = false;
        this.disable1 = false;
      }
    },
    goldEndDate() {
      let start = this.form.responsbilities[0].periodStart.slice(0, 4);
      let end = this.form.responsbilities[0].periodEnd.slice(0, 4);
      if (end - start < 5) {
        this.$alert("生存金起领年需大于第五年", "友情提示", {
          confirmButtonText: "确定"
        });
      }
    },
    goldPayType(val) {
      if (val === "2" && this.form.responsbilities[0].payMoneyRatio > 20) {
        this.$alert("给付比例需小于20%", "友情提示", {
          confirmButtonText: "确定"
        });
      }
    },
    fileList(val) {
      console.log(val);
    }
  },
   created:function(){
     this.form.ifMaster=sessionStorage.getItem('ifMaster');
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
    onSubmit() {
      console.log(this.form);
    },
    submitUpload() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleAvatarSuccess(res, file) {
      console.log(res, file, "123");
    },
    handleRoute() {
      console.log(this.$router);
    },
    addtemplate() {
      this.length.push("1");
    }
  }
};
</script>