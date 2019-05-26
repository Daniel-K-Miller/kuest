<template>
  <div>
    <form @submit.prevent="submit">
      Character Name:
      <input type="text" name="playerName" required>
      <div id="race-container">
        <label>
          <input type="radio" name="race" value="gruvat" required>
          <img src="@/assets/emblems/gruvatEmblem.svg">
          <h3>Gruvat</h3>
        </label>
        <label>
          <input type="radio" name="race" value="tiekkot">
          <img src="@/assets/emblems/tiekkotEmblem.svg">
          <h3>Tiekkot</h3>
        </label>
        <label>
          <input type="radio" name="race" value="zhial">
          <img src="@/assets/emblems/zhialEmblem.svg">
          <h3>Zhial</h3>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    playerData: Object
  },
  methods: {
    submit() {
      console.log("submit");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../SCSS/variables";
[type="radio"] {
  position: absolute;
  opacity: 0;
}
[type="radio"] + img {
  cursor: pointer;
}
[type="radio"]:checked + img {
  box-shadow: 0 0 20px $mainColor;
  border-radius: 10px;
}
input {
  background: white;
  font-size: 1em;
}
form img {
  width: 150px;
  border-radius: 10px;
  user-select: none;
  margin: 2em 1em;
}
label {
  background-color: transparent;
}
#race-container {
  display: flex;
  background-color: $inactiveLinkColor;
  width: max-content;
  height: max-content;
  border-radius: 10px;
  margin: 0 auto;
  h2 {
    background-color: $inactiveLinkColor;
    color: $backgroundColor;
  }
}
</style>