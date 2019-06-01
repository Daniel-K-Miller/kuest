<template>
  <div class="home-container">
    <span id="slogan-container">
      <h1>Your journey begins here...</h1>
      <p>How far can you progress?</p>
    </span>
    <p id="referral">
      For a quick-start guide and more information about Kuest visit the
      <router-link to="/about">about</router-link>&nbsp;section
    </p>
    <div>
      <img src="@/assets/models/gruvat.png" draggable="false">
      <img src="@/assets/models/tiekkot.png" draggable="false">
      <img src="@/assets/models/zhial.png" draggable="false">
    </div>
    <button @click="change" id="start-btn">Play</button>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
  methods: {
    change() {
      this.$emit("changeInitiated");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../SCSS/variables";

h3 {
  margin: 40px 0 0;
  color: $mainColor;
  background-color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $linkColor;
}
#referral {
  margin-top: 20px;
  color: $inactiveLinkColor;
}
#slogan-container {
  color: $linkColor;
}
#start-btn {
  background-color: $inactiveLinkColor;
  color: $mainColor;
  font-size: 1.5em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}
img {
  width: 150px;
  background-color: $inactiveLinkColor;
  padding: 1em;
  margin: 2em;
}
</style>
