<template>
  <router-view />
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useRouter } from 'vue-router'

@Options({
  components: {
  }
})

export default class TestBI extends Vue {

  created() {
    console.log("created");
  }

  mounted(): void {
    console.log("app mounted");

    const router = useRouter()
    const url = new URL(document.URL)
    const params = url.searchParams
    const pathname = url.pathname
    console.log("路径", url);
  }

}
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>
