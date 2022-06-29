<template>
  <div
    class="fmy-switch"
    @click="handleClick"
    :class="{ 'is-checked': value }"
  >
    <span class="fmy-switch_core" ref="core">
      <span class="fmy-switch_button"> </span>
    </span>
    <input type="checkbox" class="fmy-switch_input" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: "FmySwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      //等待value改变后再改变颜色
      await this.$nextTick();
      this.setColor();
      this.$refs.input.checked = this.value
    },
    setColor() {
      //修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    },
  },
  mounted() {
    //修改开关的颜色
    this.setColor();
    //控制checkbox的值
    this.$refs.input.checked = this.value
  },
};
</script>

<style lang="scss" scoped>
.fmy-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .fmy-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .fmy-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .fmy-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .fmy-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.fmy-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>