<template>
  <div>{{ didWarn ? 'caught missing prop warn' : 'no missing prop warn' }}</div>
</template>
<script>
import Vue from "vue";

const originalSilent = Vue.config.silent
const originalWarnHandler = Vue.config.warnHandler

export default {
  name: "CatchWarn",
  data() {
    return {
      didWarn: false
    };
  },
  beforeRouteEnter(to, from, next) {
    let missPropWarn = false;
    Vue.config.silent = false;
    Vue.config.warnHandler = function(msg) {
      if (/Missing required prop/i.test(msg)) {
        missPropWarn = true;
      }
    };
    next(vm => {
      vm.didWarn = missPropWarn;
    });
  },
  beforeRouteLeave(to, from, next) {
    Vue.config.silent = originalSilent;
    Vue.config.warnHandler = originalWarnHandler;
    next();
  }
};
</script>