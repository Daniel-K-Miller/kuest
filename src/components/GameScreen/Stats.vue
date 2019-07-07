<template>
  <div class="stats-container">
    <h2>Species</h2>
    <div>
      <ul>
        <li v-for="(item, key) in data.attributes.species" :key="item + key">{{ key }}</li>
      </ul>
      <ul>
        <li v-for="(item, key) in data.attributes.species" :key="item + key">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style scope lang="scss">
@import "../../SCSS/variables";

.stats-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: $mainColor;
  width: max-content;
  margin: 0 auto;
  h2 {
    padding-left: 20px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  ul {
    list-style-type: none;
    padding: 0 20px;
    li {
      text-align: left;
      padding: 2px 0;
    }
  }
}
</style>