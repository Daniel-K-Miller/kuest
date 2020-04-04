<template>
  <div class="about">
    <Block />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Block from "@/components/About/Block.vue";

export default {
  components: {
    Block,
    Footer
  }
}
</script>
