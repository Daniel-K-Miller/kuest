<template>
  <section>
    <div class="text-container">
      <h2>
        <span>FAQ about</span>
        Kuest
      </h2>
      <p>Here you'll find the most frequently asked questions and answers about the online browser game Kuest.</p>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "../../SCSS/_variables.scss";

section {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: lighten($darkColor, 5);
  width: 1000px;
  margin: 0 auto;
  div.text-container {
    padding: 20px;
    width: 500px;
    line-height: 2rem;
    text-shadow: 2px 2px $darkColor;
    h2 {
      display: flex;
      flex-direction: column;
      color: $lightColor;
      font-size: 2rem;
      padding-bottom: 0.5rem;
      &::after {
        content: "";
        height: 10px;
        width: 100px;
        background-color: $accentColor;
      }
      span {
        color: $primaryColor;
        font-size: 1.3rem;
      }
    }
    p {
      color: lighten($secondaryColor, 10);
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
@media only screen and (max-width: 550px) {
  section div.text-container {
    width: 85%;
  }
}
</style>
