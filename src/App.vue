<template>
  <div id="app">
    <!-- 按钮测试 -->
    <div class="row">
      <fmy-button @click="fn" >按钮</fmy-button>
      <fmy-button type="primary" @click="visible = true">按钮</fmy-button>
      <fmy-button type="success">按钮</fmy-button>
      <fmy-button type="info">按钮</fmy-button>
      <fmy-button type="warning">按钮</fmy-button>
      <fmy-button type="danger">按钮</fmy-button>
    </div>
    <div class="row">
      <fmy-button  plain >按钮</fmy-button>
      <fmy-button  round type="primary" disabled>按钮</fmy-button>
      <fmy-button  round type="success">按钮</fmy-button>
      <fmy-button  circle type="info">按钮</fmy-button>
      <fmy-button  circle type="warning">按钮</fmy-button>
      <fmy-button icon="fmy-icon-delete"  circle type="danger"></fmy-button>
    </div>
    <!-- 对话框测试 -->
    <!-- sync修饰符其实就是语法糖 -->
    <fmy-dialog title="温馨提示" width="60%" top="200px" :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
       <fmy-button type="primary" @click="visible=false">确定</fmy-button>
       <fmy-button @click="visible=false">取消</fmy-button>
      </template>
    </fmy-dialog>
    <!-- <fmy-dialog >
      <template v-slot:title>
       <h3>我是标题</h3>
      </template>
    </fmy-dialog> -->
  </div>
</template>

<script>
import FmyButton from "./components/button";
export default {
  name: "App",
  components: {
    FmyButton,
  },
  data(){
    return{
      visible:false
    }
  },
  methods: {
    fn(){
    console.log('123');
    },
    close(val){
      this.visible = val;
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
