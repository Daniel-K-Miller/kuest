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

// sub-component containers

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

// button at bottom of page to create character

#create-character-button {
  background-color: $inactiveLinkColor;
  color: $mainColor;
  font-size: 1.2em;
  padding: 0.5em;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
}
</style>