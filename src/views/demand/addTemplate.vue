<template>
  <div class="page-template">
    <Medical v-if="type=='医疗'"       ></Medical>
    <YearGold v-else-if="type=='年金'" ></YearGold>
    <Other v-else-if="type=='其它'"    ></Other>
    <Accident v-else-if="type=='意外'" ></Accident>
    <Insurance v-else-if="type=='寿险'"></Insurance>
    <Disease v-else-if="type=='疾病'"  ></Disease>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import YearGold from "./template/YearGold";
import Medical from "./template/Medical";
import Other from "./template/Other";
import Accident from "./template/Accident";
import Disease from "./template/Disease";
import Insurance from "./template/Insurance";
export default {
  components: {
    YearGold,
    Other,
    Accident,
    Disease,
    Insurance,
    Medical
  },
 
  computed: {
    type: function() {
      let argument = this.$route.params.name;
      console.log(this.$route.params);
      return argument;
    },
  }
};
</script>