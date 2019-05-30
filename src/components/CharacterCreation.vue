<template>
  <div id="main-container">
    <form @submit.prevent="submit">
      <div id="name-container" class="divide">
        <h2>Character Name:</h2>
        <input type="text" name="playerName" maxlength="12" v-model="playerData.name" required>
      </div>
      <div id="species-container" class="divide">
        <h2>Select Species</h2>
        <div class="labels-container">
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
            <h3 :class="[ highlightedRace === `Gruvat` ? `white-text` : ``]">Gruvat</h3>
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
            <h3 :class="[ highlightedRace === `Tiekkot` ? `white-text` : ``]">Tiekkot</h3>
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
            <h3 :class="[ highlightedRace === `Zhial` ? `white-text` : ``]">Zhial</h3>
          </label>
        </div>
      </div>
      <div id="weapon-container" class="divide">
        <h2>Select Weapon</h2>
        <div class="labels-container">
          <label>
            <input
              type="radio"
              name="weapon"
              value="Lepparrin's Lowertooth"
              v-model="playerData.weapon"
              @click="toggleHighlight"
              required
            >
            <img src="@/assets/weapons/weapon1.svg" draggable="false">
            <h3
              :class="[ highlightedWeapon === `Lepparrin's Lowertooth` ? `white-text` : ``]"
            >Lepparrin's Lowertooth</h3>
          </label>
          <label>
            <input
              type="radio"
              name="weapon"
              value="Eiliin Tears"
              v-model="playerData.weapon"
              @click="toggleHighlight"
            >
            <img src="@/assets/weapons/weapon2.svg" draggable="false">
            <h3 :class="[ highlightedWeapon === `Eiliin Tears` ? `white-text` : ``]">Eiliin Tears</h3>
          </label>
          <label>
            <input
              type="radio"
              name="weapon"
              value="Kurkkuin Rind"
              v-model="playerData.weapon"
              @click="toggleHighlight"
            >
            <img src="@/assets/weapons/weapon3.svg" draggable="false">
            <h3 :class="[ highlightedWeapon === `Kurkkuin Rind` ? `white-text` : ``]">Kurkkuin Rind</h3>
          </label>
        </div>
      </div>
      <button id="create-character-button">Create Character</button>
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
      highlightedRace: "",
      highlightedWeapon: ""
    };
  },
  methods: {
    toggleHighlight(event) {
      if (
        event.target.value === "Gruvat" ||
        event.target.value === "Tiekkot" ||
        event.target.value === "Zhial"
      ) {
        this.highlightedRace = event.target.value;
      } else if (
        event.target.value === "Lepparrin's Lowertooth" ||
        event.target.value === "Eiliin Tears" ||
        event.target.value === "Kurkkuin Rind"
      ) {
        this.highlightedWeapon = event.target.value;
      }
    }
  }
};
</script>

<style scoped lang="scss">
#main-container {
  border-radius: 20px;
}

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

label {
  background-color: $backgroundColor;
  margin: 10px;
  border-radius: 10px;
}

.divide {
  background-color: $inactiveLinkColor;
  padding: 20px 0;
  width: 50vw;
  margin: 0 auto;
  img {
    width: 10vw;
    border-radius: 10px;
    user-select: none;
    background: $linkColor;
  }
  h3 {
    font-size: 1.2em;
    width: 10vw;
  }
  h2 {
    color: white;
  }
  .labels-container {
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
}
#name-container {
  background-color: lighten($backgroundColor, 4);
  display: flex;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  input {
    margin-left: 10px;
  }
}
#species-container {
  background-color: lighten($backgroundColor, 8);

  img {
    background-color: $linkColor;
  }
  .labels-container {
    background-color: transparent;
  }
}
#weapon-container {
  background-color: lighten($backgroundColor, 4);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  img {
    background-color: $linkColor;
  }
  .labels-container {
    background-color: transparent;
  }
}
#create-character-button {
  background-color: $inactiveLinkColor;
  color: $mainColor;
  font-size: 1.2em;
  padding: 0.5em;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}

.white-text {
  color: white;
}
</style>