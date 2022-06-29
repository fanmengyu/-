<template>
  <div id="app">
    <!-- 按钮测试 -->
    <div class="row">
      <fmy-button @click="fn">按钮</fmy-button>
      <fmy-button type="primary" @click="visible = true">按钮</fmy-button>
      <fmy-button type="success">按钮</fmy-button>
      <fmy-button type="info">按钮</fmy-button>
      <fmy-button type="warning">按钮</fmy-button>
      <fmy-button type="danger">按钮</fmy-button>
    </div>
    <div class="row">
      <fmy-button plain>按钮</fmy-button>
      <fmy-button round type="primary" disabled>按钮</fmy-button>
      <fmy-button round type="success">按钮</fmy-button>
      <fmy-button circle type="info">按钮</fmy-button>
      <fmy-button circle type="warning">按钮</fmy-button>
      <fmy-button icon="fmy-icon-delete" circle type="danger"></fmy-button>
    </div>
    <!-- 对话框测试 -->
    <!-- sync修饰符其实就是语法糖 -->
    <fmy-dialog
      title="温馨提示"
      width="60%"
      top="200px"
      :visible.sync="visible"
    >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <fmy-button type="primary" @click="visible = false">确定</fmy-button>
        <fmy-button @click="visible = false">取消</fmy-button>
      </template>
    </fmy-dialog>
    <!-- <fmy-dialog >
      <template v-slot:title>
       <h3>我是标题</h3>
      </template>
    </fmy-dialog> -->

    <!-- 输入框测试 -->
    <!-- <fmy-input
      placeholder="请输入内容"
      type="password"
      name="username"
      show-password
      v-model="username"
    ></fmy-input>
    <br /><br />
    <fmy-input
      placeholder="请输入内容"
      name="username"
      v-model="username"
      clearable
    ></fmy-input>
    <br /><br />
    <fmy-input
      placeholder="请输入内容"
      type="password"
      name="username"
      disabled
      v-model="username"
    ></fmy-input> -->
    <br /><br />
    <fmy-switch
      v-model="active"
      active-color="black"
      inactive-color="red"
      name="username"
    ></fmy-switch>
  </div>
</template>

<script>
import FmyButton from "./components/button";
export default {
  name: "App",
  components: {
    FmyButton,
  },
  data() {
    return {
      visible: false,
      username: "fmy",
      active: false,
    };
  },
  methods: {
    fn() {
      console.log("123");
    },
    close(val) {
      this.visible = val;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  .row {
    .fmy-button {
      margin-right: 20px;
    }
  }
  .fmy-input {
    width: 180px;
  }
}
</style>
