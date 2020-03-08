<template>
  <div class="home">
    <HomeContent @changeInitiated="changeInitiated" />
  </div>
</template>

<script>
import HomeContent from "@/components/HomeContent.vue";

export default {
  name: "home",
  components: {
    HomeContent
  },
  props: {
    initiated: Boolean
  },
  methods: {
    changeInitiated() {
      this.$emit("changeInitiated");
    }
  }
};
</script>
