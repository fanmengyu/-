<template>
  <div id="app">
    <div class="row">
      <fmy-button @click="fn">按钮</fmy-button>
      <fmy-button type="primary">按钮</fmy-button>
      <fmy-button type="success">按钮</fmy-button>
      <fmy-button type="info">按钮</fmy-button>
      <fmy-button type="warning">按钮</fmy-button>
      <fmy-button type="danger">按钮</fmy-button>
    </div>
    <div class="row">
      <fmy-button  plain >按钮</fmy-button>
      <fmy-button  round type="primary">按钮</fmy-button>
      <fmy-button  round type="success">按钮</fmy-button>
      <fmy-button  circle type="info">按钮</fmy-button>
      <fmy-button  circle type="warning">按钮</fmy-button>
      <fmy-button icon="fmy-icon-delete"  circle type="danger"></fmy-button>
    </div>
  </div>
</template>

<script>
import FmyButton from "./components/button";
export default {
  name: "App",
  components: {
    FmyButton,
  },
  methods: {
    fn(){
    console.log('123');
    }
  },
};
</script>

<style lang="scss" scoped>
.row{
  margin-button:20px;
  .fmy-button{
    margin-right: 20px;
  }
}
</style>
