<template>
  <form id="main-container" @submit.prevent="handleSubmit">
    <Name :playerData="playerData" :handleRandom="handleRandom"/>
    <Species
      :playerData="playerData"
      :defaultAttributes="defaultAttributes"
      :toggleHighlight="toggleHighlight"
    />
    <Weapons
      :playerData="playerData"
      :defaultAttributes="defaultAttributes"
      :toggleHighlight="toggleHighlight"
      :upperCaseText="upperCaseText"
    />
    <PlayerStatChart
      :defaultAttributes="defaultAttributes"
      :playerData="playerData"
      :playerDataUpdate="playerDataUpdate"
      :shortAtr="shortAtr"
    />
    <button type="submit" id="create-character-button">Create Character</button>
  </form>
</template>

<script>
import Name from "@/components/CharacterCreation/Name.vue";
import Species from "@/components/CharacterCreation/Species.vue";
import Weapons from "@/components/CharacterCreation/Weapons.vue";
import PlayerStatChart from "@/components/CharacterCreation/PlayerStatChart.vue";

export default {
  components: { Name, Species, Weapons, PlayerStatChart },
  props: {
    playerData: Object,
    defaultAttributes: Object,
    shortAtr: Array
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
      // sending species stats to playerData if random-btn is used
    },
    handleRandom() {
      const names = ["Aeal", "Jasu", "Binksia"];

      // current iteration of playerData passed from getRandomValues()
      let newPlayerData = {};

      let getRandomValues = () => {
        Object.assign(newPlayerData, {
          name: names[Math.floor(Math.random() * names.length)],
          species: Object.keys(this.defaultAttributes.species)[
            Math.floor(
              Math.random() * Object.keys(this.defaultAttributes.species).length
            )
          ],
          weapon: Object.keys(this.defaultAttributes.weapons)[
            Math.floor(
              Math.random() * Object.keys(this.defaultAttributes.weapons).length
            )
          ]
        });
      };

      getRandomValues();

      // while loop to catch if an identical set of random values exist in the previous object of playerData and this current iteration
      // therefore retriggering getting random values until a non-identical copy is made. Prevent random button press being useless.

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
  },
  computed: {
    playerDataUpdate() {
      return [this.playerData.species, this.playerData.weapon];
    }
  },
  watch: {
    playerDataUpdate(newVal) {
      if (newVal[0] === "Gruvat") {
        this.playerData.attributes.species.brute = 50;
        this.playerData.attributes.species.resistance = 30;
        this.playerData.attributes.species.life = 10;
      } else if (newVal[0] === "Tiekkot") {
        this.playerData.attributes.species.brute = 30;
        this.playerData.attributes.species.resistance = 50;
        this.playerData.attributes.species.life = 10;
      } else if (newVal[0] === "Zhial") {
        this.playerData.attributes.species.brute = 10;
        this.playerData.attributes.species.resistance = 30;
        this.playerData.attributes.species.life = 50;
      }

      if (newVal[1] === "Lepparrin's Lowertooth") {
        this.playerData.attributes.weapon.damage = 30;
        this.playerData.attributes.weapon.criticalHitChance = 50;
        this.playerData.attributes.weapon.accuracy = 10;
      } else if (newVal[1] === "Eiliin Tears") {
        this.playerData.attributes.weapon.damage = 10;
        this.playerData.attributes.weapon.criticalHitChance = 30;
        this.playerData.attributes.weapon.accuracy = 50;
      } else if (newVal[1] === "Kurkkuin Rind") {
        this.playerData.attributes.weapon.damage = 50;
        this.playerData.attributes.weapon.criticalHitChance = 10;
        this.playerData.attributes.weapon.accuracy = 30;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../SCSS/variables";

#main-container {
  border-radius: 20px;
}

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
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.divide {
  background-color: $inactiveLinkColor;
  padding: 20px 0;
  width: 1000px;
  margin: 0 auto;
  img {
    width: 150px;
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

#weapon-container {
  background-color: lighten($backgroundColor, 7);
  img {
    background-color: $inactiveLinkColor;
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
  font-size: 1em;
}
label {
  ul {
    height: 0;
    width: 150px;
    li {
      opacity: 0;
      transition: all 0.3s ease-in-out;
      padding: 2px;
    }
  }
}
// hovering over labl
label:hover {
  ul {
    background: blue;
    li {
      opacity: 1;
      transition: all 0.1s ease-in-out;
    }
  }
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