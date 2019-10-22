<template>
  <el-form
    :inline='block'
    :model="value"
    label-position="right"
    :label-width="formConfig.labelWidth"
    :rules="rules"
    size="mini"
    class="menu"
  >
    <el-form-item
      v-for="(item,index) in formConfig.formItemList"
      :key="index"
      :label="item.label"
      :prop="item.prop"
      :span="4"
    >
      <el-input
        v-if="item.type=='input'"
        v-model="value[item.prop]"
        :disabled="item.disabled"
        :clearable="true"
        :placeholder="item.placeholder"
      ></el-input>
      <el-select
        :clearable="true"
        v-else-if="item.type=='select'"
        v-model="value[item.prop]"
        :disabled="item.disabled"
        :placeholder="item.placeholder"
      >
        <el-option
          v-for="(optItem,index) in item.optList"
          :key="index"
          :label="optItem.label"
          :value="optItem.value"
        ></el-option>
      </el-select>
      <el-date-picker
        :value-format="item.dateFormate"
        v-else
        v-model="value[item.prop]"
        :type="item.type"
        :disabled="item.disabled"
        :clearable="true"
        :placeholder="item.label"
      ></el-date-picker>
      <slot name="formItem" />
    </el-form-item>
    <el-form-item>
       <div class="searchBtn">
      <el-button-group>
        <el-button
          v-for="(item, index) in formConfig.operate"
          :key="index"
          size="medium"
          :type="item.type"
          :icon="item.icon"
          @click="item.handleClick"
        >{{item.name}}</el-button>
      </el-button-group>
      <slot name="operate"></slot>
    </div>
    </el-form-item>
  </el-form>
</template>
<style lang="scss" scoped>
   .el-form {
    padding-top: 30px;
    // padding-left: 20px;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 99%;
    border: 1px solid #dddddd;
    text-align: right;
    margin-bottom: 20px;
    background-color: #fff;
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
  }
  
 
</style>
<script>
export default {
  components: {},
  props: {
    formConfig: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    },
    block: {
      required: true
    }
  },
  computed: {},
  methods: {
    setDefaultValue() {
      const formData = { ...this.value };
      // 设置默认值
      this.formConfig.formItemList.forEach(({ key, value }) => {
        if (formData[key] === undefined || formData[key] === null) {
          formData[key] = value;
        }
      });
      //   this.$emit("input", formData);
    }
  },
  mounted() {
    this.setDefaultValue();
  }
};
</script>