<template>
  <form id="main-container" @submit.prevent="handleSubmit">
    <Name :playerData="playerData" :handleRandom="handleRandom"/>
    <Selection
      version="species"
      :playerData="playerData"
      :defaultAttributes="defaultAttributes"
      :toggleHighlight="toggleHighlight"
      :classColor="classColor"
      :toggleZoom="toggleZoom"
    />
    <Selection
      version="weapon"
      :playerData="playerData"
      :defaultAttributes="defaultAttributes"
      :toggleHighlight="toggleHighlight"
      :classColor="classColor"
      :toggleZoom="toggleZoom"
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
import PlayerStatChart from "@/components/CharacterCreation/PlayerStatChart.vue";
import Selection from "@/components/CharacterCreation/Selection.vue";

export default {
  components: { Name, Selection, PlayerStatChart },
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
          weapon: Object.keys(this.defaultAttributes.weapon)[
            Math.floor(
              Math.random() * Object.keys(this.defaultAttributes.weapon).length
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
    },
    classColor(key) {
      switch (key) {
        case `brute`:
          return `atr-brute`;
        case `resistance`:
          return `atr-resist`;
        case `life`:
          return `atr-life`;
        case `damage`:
          return `atr-dmg`;
        case `criticalHitChance`:
          return `atr-crit`;
        case `accuracy`:
          return `atr-acc`;
      }
    },
    toggleZoom() {
      console.log("hello");
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

// Component container
#main-container {
  border-radius: 20px;
}

// Radio buttom image styling
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

label {
  background-color: $backgroundColor;
  margin: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

// label main-image dimensions
.label-image {
  opacity: 0.3;
  width: $label-image-width;
}
.species-image {
  height: $species-image-height;
}
.weapon-image {
  height: $weapon-image-height;
}

.divide {
  background-color: $inactiveLinkColor;
  padding: 20px 0;
  width: 1000px;
  margin: 0 auto;

  h3 {
    font-size: 1.2em;
    width: $label-image-width;
  }
  h2 {
    color: white;
  }
}
.labels-container {
  display: flex;
  justify-content: center;
}
.label-container {
  display: flex;
  background-color: transparent;
  width: max-content;
  height: max-content;
  border-radius: 10px;
  h3 {
    border-radius: 5px;
  }
}

label {
  position: relative;
}

#species-container {
  background-color: lighten($backgroundColor, 6);
}

#weapon-container {
  background-color: lighten($backgroundColor, 7);
  img {
    background-color: $inactiveLinkColor;
  }
}

#create-character-button {
  background-color: $inactiveLinkColor;
  color: $mainColor;
  font-size: 1.2em;
  padding: 0.5em;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
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
  text-align: center;
  font-size: 1em;
}
label {
  ul {
    height: 0;
    width: $label-image-width;
    display: flex;
    justify-content: center;
    li {
      opacity: 0;

      padding: 2px;
      margin: 4px 10px;
      height: max-content;
      padding: 2px;
      border-radius: 3px;
      font-size: 1.2em;
    }
  }
}
// hovering over labl
.non-selected:hover {
  li {
    opacity: 0.5;
    color: white;
    transition: all 0.2s ease-out;
  }
}
.selected:hover {
  li {
    opacity: 1;
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
      color: white;
      opacity: 1;
    }
  }
  .info {
    opacity: 1;
  }
}
.info {
  position: absolute;
  width: 30px;
  height: 30px;
  filter: invert(1);
  top: 160px;
  right: 110px;
  background-color: white;
  border-radius: 50%;
}

// setting attributes to correct visual colors

.atr-brute {
  background-color: $brute;
}
.atr-resist {
  background-color: $resist;
}
.atr-life {
  background-color: $life;
}
.atr-dmg {
  background-color: $dmg;
}
.atr-crit {
  background-color: $crit;
}
.atr-acc {
  background-color: $acc;
}

// css for info icon on labels
.info {
  position: absolute;
  width: $info;
  height: $info;
  left: $label-image-width - $info - 5px;
  border-radius: 50%;
  opacity: 0;
}

#species-container .info {
  top: $species-image-height - $info - 5px;
}

#weapon-container .info {
  top: $weapon-image-height - $info - 5px;
}
</style>