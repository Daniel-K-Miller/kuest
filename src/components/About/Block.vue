<template>
  <section>
    <div class="text-container">
      <h2>
        <span>Welcome to</span>
        Zhyithal
      </h2>
      <p>A land of mystery and exploration, a universe with a diverse biome. Lada da da the thing is cha cha cah this is some test text to see the apperance of the divider</p>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "../../SCSS/_variables.scss";

div.text-container {
  padding: 20px;
  width: 500px;
  line-height: 2rem;
}

section {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: lighten($darkColor, 5);
  width: 1000px;
  margin: 0 auto;
  h2 {
    display: flex;
    flex-direction: column;
    color: $lightColor;
    font-size: 2rem;
    span {
      color: $primaryColor;
      font-size: 1.3rem;
    }
  }
  p {
    color: $lightColor;
  }
}
</style>