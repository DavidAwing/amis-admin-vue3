<template>
  <div class="container">

    <button @click="test">{{ txt }}</button>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  }
})

export default class TestBI extends Vue {

  txt = "测试按钮";

  created() {
    console.log("created");
  }

  mounted(): void {
    console.log("mounted");
  }

  test() {
    console.log("click");
  }
}
</script>
