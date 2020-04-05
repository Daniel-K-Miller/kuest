<template>
  <section>
    <div class="text-container">
      <h2 class="question-and-keyword">
        {{ this.question }}<span>{{ this.keyword }}</span>?
      </h2>
      <p>{{ this.answer }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    question: String,
    keyword: String,
    answer: String
  }
};
</script>

<style lang="scss" scoped>
@import "../../SCSS/_variables.scss";

section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  background-color: lighten($darkColor, 10);
  width: 1000px;
  margin: 0 auto;
  div.text-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 500px;
    line-height: 2rem;
    text-shadow: 2px 2px $darkColor;
    h2 {
      margin-right: 5px;
      color: $primaryColor;
      font-size: 1.3rem;
      display: flex;
      flex-direction: row;
      &::after, &::before {
        position: relative;
        content: "";
        height: 3px;
        margin: auto 5px;
        width: 40px;
        bottom: 2.5px;
        background-color: lighten($darkColor, 15);
      }
      span {
        color: $lightColor;
        font-size: 2rem;
        padding-bottom: 0.5rem;
        margin: 0 5px;
      }
    }
    p {
      text-align: justify;
      color: $lightColor;
      font-size: 1.15rem;
    }
  }
}

@media only screen and (max-width: 1000px) {
  section {
    width: 100%;
    align-items: center;
    div.text-container {
      width: 70%;
    }
  }
}
@media only screen and (max-width: 630px) {
  section div.text-container h2::after, section div.text-container h2::before {
    position: relative;
    content: "";
    height: 0;
    margin: auto 5px;
    width: 0;
    bottom: 2.5px;
    background-color: lighten($darkColor, 15);
  }
}
@media only screen and (max-width: 550px) {
  section div.text-container {
    width: 85%;
  }
}
@media only screen and (max-width: 450px) {
  section div.text-container h2 {
    flex-direction: column;
  }
  section div.text-container {
    align-items: flex-start;
  }
}
</style>
