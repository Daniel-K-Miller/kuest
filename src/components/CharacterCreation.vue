<template>
  <div id="main-container">
    <form @submit.prevent="handleSubmit">
      <div id="name-container" class="divide">
        <h2>Character Name:</h2>
        <input type="text" name="playerName" maxlength="12" v-model="playerData.name" required>
        <button id="random-btn" type="button" @click="handleRandom"></button>
      </div>
      <div id="species-container" class="divide">
        <h2>Select Species</h2>
        <div class="labels-container">
          <label :class="[ playerData.species === `Gruvat` ? `selected` : ``]">
            <input
              type="radio"
              name="species"
              value="Gruvat"
              v-model="playerData.species"
              @click="toggleHighlight"
              required
            >
            <ul class="stats">
              <li v-for="(item, key) in defaultAttributes.species.Gruvat" :key="`item${key}`">
                {{ key.slice(0, 1).toUpperCase() + key.slice(1) }}:
                <span
                  :class=" playerData.species === `Gruvat` ? (item < 30 ? `txt-low` : item > 30 ? `txt-high` : `txt-mid`) : '' "
                >{{ item }}</span>
              </li>
            </ul>
            <img src="@/assets/emblems/gruvatEmblem.svg" draggable="false">
            <h3>Gruvat</h3>
          </label>
          <label :class="[ playerData.species === `Tiekkot` ? `selected` : ``]">
            <input
              type="radio"
              name="species"
              value="Tiekkot"
              v-model="playerData.species"
              @click="toggleHighlight"
            >
            <ul class="stats">
              <li v-for="(item, key) in defaultAttributes.species.Tiekkot" :key="`item${key}`">
                {{ key.slice(0, 1).toUpperCase() + key.slice(1) }}:
                <span
                  :class=" playerData.species === `Tiekkot` ? (item < 30 ? `txt-low` : item > 30 ? `txt-high` : `txt-mid`) : '' "
                >{{ item }}</span>
                <!-- ternary in a ternary to only show differentiated colors when label is selected -->
              </li>
            </ul>
            <img src="@/assets/emblems/tiekkotEmblem.svg" draggable="false">
            <h3>Tiekkot</h3>
          </label>
          <label :class="[ playerData.species === `Zhial` ? `selected` : ``]">
            <input
              type="radio"
              name="species"
              value="Zhial"
              v-model="playerData.species"
              @click="toggleHighlight"
            >
            <ul class="stats">
              <li v-for="(item, key) in defaultAttributes.species.Zhial" :key="`item${key}`">
                {{ key.slice(0, 1).toUpperCase() + key.slice(1) }}:
                <span
                  :class=" playerData.species === `Zhial` ? (item < 30 ? `txt-low` : item > 30 ? `txt-high` : `txt-mid`) : '' "
                >{{ item }}</span>
              </li>
            </ul>
            <img src="@/assets/emblems/zhialEmblem.svg" draggable="false">
            <h3>Zhial</h3>
          </label>
        </div>
      </div>
      <div id="weapon-container" class="divide">
        <h2>Select Weapon</h2>
        <div class="labels-container">
          <label :class="[ playerData.weapon === `Lepparrin's Lowertooth` ? `selected` : ``]">
            <input
              type="radio"
              name="weapon"
              value="Lepparrin's Lowertooth"
              v-model="playerData.weapon"
              @click="toggleHighlight"
              required
            >
            <ul class="stats">
              <li
                v-for="(item, key) in defaultAttributes.weapons[`Lepparrin's Lowertooth`]"
                :key="`item${key}`"
              >
                {{ key.slice(0, 1).toUpperCase() + upperCaseText(key.slice(1)) }}:
                <span
                  :class=" playerData.weapon === `Lepparrin's Lowertooth` ? (item < 30 ? `txt-low` : item > 30 ? `txt-high` : `txt-mid`) : '' "
                >{{ item }}</span>
              </li>
            </ul>
            <img src="@/assets/weapons/weapon1.svg" draggable="false">
            <h3>Lepparrin's Lowertooth</h3>
          </label>
          <label :class="[ playerData.weapon === `Kurkkuin Rind` ? `selected` : ``]">
            <input
              type="radio"
              name="weapon"
              value="Kurkkuin Rind"
              v-model="playerData.weapon"
              @click="toggleHighlight"
            >
            <ul class="stats">
              <li
                v-for="(item, key) in defaultAttributes.weapons[`Kurkkuin Rind`]"
                :key="`item${key}`"
              >
                {{ key.slice(0, 1).toUpperCase() + upperCaseText(key.slice(1)) }}:
                <span
                  :class=" playerData.weapon === `Kurkkuin Rind` ? (item < 30 ? `txt-low` : item > 30 ? `txt-high` : `txt-mid`) : '' "
                >{{ item }}</span>
              </li>
            </ul>
            <img src="@/assets/weapons/weapon3.svg" draggable="false">
            <h3>Kurkkuin Rind</h3>
          </label>
          <label :class="[ playerData.weapon === `Eiliin Tears` ? `selected` : ``]">
            <input
              type="radio"
              name="weapon"
              value="Eiliin Tears"
              v-model="playerData.weapon"
              @click="toggleHighlight"
            >
            <ul class="stats">
              <li
                v-for="(item, key) in defaultAttributes.weapons[`Eiliin Tears`]"
                :key="`item${key}`"
              >
                {{ key.slice(0, 1).toUpperCase() + upperCaseText(key.slice(1)) }}:
                <span
                  :class=" playerData.weapon === `Eiliin Tears` ? (item < 30 ? `txt-low` : item > 30 ? `txt-high` : `txt-mid`) : '' "
                >{{ item }}</span>
              </li>
            </ul>
            <img src="@/assets/weapons/weapon2.svg" draggable="false">
            <h3>Eiliin Tears</h3>
          </label>
        </div>
      </div>
      <button type="submit" id="create-character-button">Create Character</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    playerData: Object,
    defaultAttributes: Object
  },
  data() {
    return {
      prevRandomValue: {}
    };
  },
  methods: {
    toggleHighlight(event) {
      if (
        event.target.value === "Gruvat" ||
        event.target.value === "Tiekkot" ||
        event.target.value === "Zhial"
      ) {
        this.highlightedSpecies = event.target.value;
      } else if (
        event.target.value === "Lepparrin's Lowertooth" ||
        event.target.value === "Eiliin Tears" ||
        event.target.value === "Kurkkuin Rind"
      ) {
        this.highlightedWeapon = event.target.value;
      }
    },
    handleSubmit() {
      this.playerData.level = 1;
      // sending species stats to playerData within App.js
      switch (this.playerData.species) {
        case "Gruvat":
          this.playerData.attributes.species.brute = 50;
          this.playerData.attributes.species.resistance = 30;
          this.playerData.attributes.species.life = 10;
          break;
        case "Tiekkot":
          this.playerData.attributes.species.brute = 30;
          this.playerData.attributes.species.resistance = 50;
          this.playerData.attributes.species.life = 10;
          break;
        case "Zhial":
          this.playerData.attributes.species.brute = 10;
          this.playerData.attributes.species.resistance = 30;
          this.playerData.attributes.species.life = 50;
          break;
      }
      // sending weapon stats to playerData within App.js
      switch (this.playerData.weapon) {
        case "Lepparrin's Lowertooth":
          this.playerData.attributes.weapon.damage = 30;
          this.playerData.attributes.weapon.criticalHitChance = 50;
          this.playerData.attributes.weapon.accuracy = 10;
          break;
        case "Kurkkuin Rind":
          this.playerData.attributes.weapon.damage = 50;
          this.playerData.attributes.weapon.criticalHitChance = 10;
          this.playerData.attributes.weapon.accuracy = 30;
          break;
        case "Eiliin Tears":
          this.playerData.attributes.weapon.damage = 10;
          this.playerData.attributes.weapon.criticalHitChance = 30;
          this.playerData.attributes.weapon.accuracy = 50;
          break;
      }
    },
    handleRandom() {
      const names = ["Aeal", "Jasu", "Binksia"];
      const species = ["Gruvat", "Tiekkot", "Zhial"];
      const weapons = [
        "Lepparrin's Lowertooth",
        "Eiliin Tears",
        "Kurkkuin Rind"
      ];

      // current iteration of playerData passed from getRandomValues()
      let newPlayerData = {};

      let getRandomValues = () => {
        Object.assign(newPlayerData, {
          name: names[Math.floor(Math.random() * names.length)],
          species: species[Math.floor(Math.random() * species.length)],
          weapon: weapons[Math.floor(Math.random() * weapons.length)]
        });
      };
      getRandomValues();

      // while loop to catch if an identical set of random values exist in the previous object of playerData and this current iteration
      // therefore retriggering getting random values until a non-identical copy is made. Prevent random button being useless.

      while (
        this.playerData.name === newPlayerData.name &&
        this.playerData.species === newPlayerData.species &&
        this.playerData.weapon === newPlayerData.weapon
      ) {
        getRandomValues();
      }
      this.playerData.name = newPlayerData.name;
      this.playerData.species = newPlayerData.species;
      this.playerData.weapon = newPlayerData.weapon;
    },

    // checking for a capital leter then after returning true inserting a space before it
    upperCaseText(string) {
      let splitString = string.slice(0).split("");

      // i set to 1 to skip first as no need for beginning to need a space before
      for (let i = 1; i < string.length; i++) {
        if (splitString[i] === splitString[i].toUpperCase()) {
          splitString[i - 1] += ` `;
        }
      }
      return splitString.join("");
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
    width: 8vw;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    user-select: none;
    background: $linkColor;
    opacity: 0.1;
    cursor: pointer;
  }
  h3 {
    font-size: 1.2em;
    width: 8vw;
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
  background-color: lighten($backgroundColor, 6);

  img {
    background-color: $linkColor;
  }
  .labels-container {
    background-color: transparent;
  }
}
#species-container .labels-container:hover {
  // displaying stats on hover for species
  ul {
    opacity: 1;
    font-size: 0.9em;
    background-color: $inactiveLinkColor;
    color: black;
    width: 150px;
    padding: 5px 2px;
    li {
      padding: 3px 0;
    }
  }
}
#weapon-container {
  background-color: lighten($backgroundColor, 7);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  img {
    background-color: $inactiveLinkColor;
  }
  .labels-container {
    background-color: transparent;
  }
}
#weapon-container .labels-container:hover {
  // displaying stats on hover for species
  ul {
    opacity: 1;
    font-size: 0.9em;
    background-color: $inactiveLinkColor;
    color: black;
    width: 150px;
    padding: 10px 2px;
    li {
      padding: 3px 0;
    }
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
#random-btn {
  background-image: url("../assets/random.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75%;
  border: none;
  width: 30px;
  height: 30px;
  background-color: $linkColor;
}
.stats {
  position: absolute;
  list-style: none;
  text-decoration: none;
  color: $mainColor;
  text-align: center;
  width: 1;
  opacity: 0;
  font-size: 1em;
}

.selected {
  cursor: pointer;
  h3 {
    color: white;
  }
  img {
    opacity: 1;
  }
  ul {
    padding: 0 2px;
    li {
      opacity: 1;
      color: white;
      text-shadow: 2px 2px 8px $inactiveLinkColor;
    }
  }
}

// setting attributes to correct visual colors
.txt-low {
  color: #a52121;
  background-color: $backgroundColor;
  padding: 2px;
  border-radius: 3px;
}
.txt-mid {
  color: goldenrod;
  background-color: $backgroundColor;
  padding: 2px;
  border-radius: 3px;
}
.txt-high {
  color: #86ef97;
  background-color: $backgroundColor;
  padding: 2px;
  border-radius: 3px;
}
</style>