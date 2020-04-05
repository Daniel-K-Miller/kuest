<template>
  <div class="about">
    <Block />
    <QnA
      v-for="(item, index) in QnAData.qna"
      :key="item.question"
      :question="item.question"
      :keyword="item.keyword"
      :answer="item.answer"
    />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Block from "@/components/About/Block.vue";

import QnA from "@/components/About/QnA.vue";
import QnAData from "@/data/about/QnA.json";

export default {
  components: {
    Block,
    Footer,
    QnA
  },
  data() {
    return {
      QnAData
    };
  }
}
</script>
