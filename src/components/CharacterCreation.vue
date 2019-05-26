<template>
  <div>
    <form @submit.prevent="submit">
      <div id="name">
        <h2>Character Name:</h2>
        <input type="text" name="playerName" maxlength="12" v-model="playerData.name" required>
      </div>
      <div id="species-container">
        <h2>Select Species</h2>
        <div id="labels-container">
          <label>
            <input
              type="radio"
              name="race"
              value="Gruvat"
              v-model="playerData.race"
              @click="toggleHighlight"
              required
            >
            <img src="@/assets/emblems/gruvatEmblem.svg" draggable="false">
            <h3 :class="[ highlighted === `Gruvat` ? `white-text` : ``]">Gruvat</h3>
          </label>
          <label>
            <input
              type="radio"
              name="race"
              value="Tiekkot"
              v-model="playerData.race"
              @click="toggleHighlight"
            >
            <img src="@/assets/emblems/tiekkotEmblem.svg" draggable="false">
            <h3 :class="[ highlighted === `Tiekkot` ? `white-text` : ``]">Tiekkot</h3>
          </label>
          <label>
            <input
              type="radio"
              name="race"
              value="Zhial"
              v-model="playerData.race"
              @click="toggleHighlight"
            >
            <img src="@/assets/emblems/zhialEmblem.svg" draggable="false">
            <h3 :class="[ highlighted === `Zhial` ? `white-text` : ``]">Zhial</h3>
          </label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    playerData: Object
  },
  data() {
    return {
      highlighted: "hello"
    };
  },
  methods: {
    toggleHighlight(event) {
      this.highlighted = event.target.value;
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
}
label {
  background-color: $backgroundColor;
  margin: 10px;
  border-radius: 10px;
}
#labels-container {
  display: flex;
  background-color: $inactiveLinkColor;
  width: max-content;
  height: max-content;
  border-radius: 10px;
  margin: 0 auto;
  h3 {
    border-radius: 5px;
  }
}
.white-text {
  color: white;
}
</style>