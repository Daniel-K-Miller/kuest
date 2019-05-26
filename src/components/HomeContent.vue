<template>
  <div class="hello">
    <h1>Your journey begins here...</h1>
    <p>
      For a quick-start guide and more information about Kuest check out the
      <router-link to="/about">about</router-link>&nbsp;section
    </p>
    <button @click="change" id="start-button">Play</button>
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
#start-button {
  background: white;
  padding: 0.2em 0.7em;
  border-radius: 5px;
  font-size: 1.5em;
}
</style>
