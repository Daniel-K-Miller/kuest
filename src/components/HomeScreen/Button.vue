<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>

<style scoped lang="scss">
@import "../../SCSS/_variables.scss";

button {
  background-color: $secondaryColor;
  color: $tertiaryColor;
  font-size: 1.5em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  margin: 50px 0;
}
</style>
