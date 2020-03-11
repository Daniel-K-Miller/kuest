<template>
  <button @click="click">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    click: Function
  }
};
</script>

<style scoped lang="scss">
@import "../../SCSS/_variables.scss";

button {
  background-color: lighten($accentColor, 10);
  color: lighten($darkColor, 10);
  font-size: 1.5em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  margin: 10px;
  transition: background-color 0.15s ease-in-out;
}

button:hover {
  background-color: lighten($color: $accentColor, $amount: 40);
}
</style>
