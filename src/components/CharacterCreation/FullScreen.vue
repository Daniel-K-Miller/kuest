<template>
  <div id="fullScreen-container">
    <div id="imgAndText-container">
      <div id="image-container">
        <img :src="imgSrc" id="zoomedImg" />
      </div>
      <div id="text-container">
        <h1>{{ selection }}</h1>
        <h2>{{ description }}</h2>
        <h3>Young</h3>
        <p>{{ youngParagraph }}</p>
        <h3>Habitat</h3>
        <p>{{ habitatParagraph }}</p>
        <h3>Fighting Style</h3>
        <p>{{ fightingStyleParagraph }}</p>
      </div>
      <img src="@/assets/zoomOut.svg" class="info" @click="toggleZoom()" draggable="false" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    toggleZoom: Function,
    selection: String,
    defaultAttributes: Object
  },
  computed: {
    description() {
      return this.selection === "Gruvat" ||
        this.selection === "Tiekkot" ||
        this.selection === "Zhial"
        ? this.defaultAttributes.species[this.selection].description
        : this.defaultAttributes.weapon[this.selection].description;
    },
    youngParagraph() {
      switch (this.selection) {
        case "Gruvat":
          return `Born in isolation, the abandoned Gruvat youngling trusts only themselves. Every sound, sight, 
                  and scent is a potential risk. Intuition is the only friend a youngling possesses and the only
                  one it truly needs to bear. There are no brothers, sisters, or family. Gruvat breed once - to an
                  offspring of one. `;
        case "Tiekkot":
          return `Wrapped tightly in a muddish coloured film, the Tiekkot young sprouts by piercing its way out with 
                  a tusks located on the back of its head. Pyramid shaped wings are weak and frail and will not mature
                  until adulthood. Tiekkot are awakened into unity believing no individual is special, and no one is
                  different from one another.`;
        case "Zhial":
          return `Said to 'have been created by themselves' the Zhial whimper when the day of birth greets them, masking
                  vibrations of sorrow through the skies. Witnesses of before their own creation they carry with them the
                  pain of the unknown. Unlike the Gruvat and the Tiekkot, the Zhial are unpredictable. No one encounter 
                  generates the same result.`;
        case "Lepparrin's Lowertooth":
          return `A sharp pointy little thing`;
        case "Kurkkuin Rind":
          return `Don't slip on this!`;
        case "Eiliin Tears":
          return `What are they?`;
      }
    },
    habitatParagraph() {
      switch (this.selection) {
        case "Gruvat":
          return `Matured in a valley of natural rocks the Gruvat's battlefield has a hidden horizon and because of this  
                  is scarce of food. Only those that lose themselves and wander within this labyrinth are able to name 
                  themselves prey. Darkness is cast upon this biome and becomes the Gruvat's dependency, as without it
                  their senses are dramatically impacted losing central vision, met with dampening of hearing, and complete 
                  loss of smell. The Gruvat's biggest strength is also their grandest weakness.`;
        case "Tiekkot":
          return `Cold is a familiar acquaintance to the Tiekkot. Born upon the open fields shielded by a snow like substance
                  this is what the Tiekkot calls home. A transparent ground allows the Tiekkot to find their food below. 
                  Fighting the much larger 'Bluffa' to feast, this feeding is a rarity and may cost the Tiekkot gravely. 
                  Within erected hollowed out dens the Tiekkot hearth.`;
        case "Zhial":
          return `Retracted into themselves, the home of a Zhial is its shell. Camouflaged among a rich multitude of organic  
                  matter it is difficult to distinguish if a Zhial is there or not. If taken too long to decide that could mean 
                  the end is close.`;
        case "Lepparrin's Lowertooth":
          return `A sharp pointy little thing`;
        case "Kurkkuin Rind":
          return `Don't slip on this!`;
        case "Eiliin Tears":
          return `What are they?`;
      }
    },
    fightingStyleParagraph() {
      switch (this.selection) {
        case "Gruvat":
          return `At the end of their arms the Gruvat have split shards that when met with the right conditions are able to pierce 
                  through the natural rocks. When in an unfavourable condition the shards appear to have very little effect. To leave 
                  a trace would be foolish, the Gruvat do not stand upon legs but instead emit the only magically prowess they have to 
                  lift themselves above the ground. Lined among their flesh is a crimson red liquid indicating their fury, as it builds 
                  the more troublesome they will become.`;
        case "Tiekkot":
          return `The biggest threat when facing the Tiekkot are their extended tusks. When flying downwards can seriously harm those waiting 
                  to catch a painful end. Coated in a hard layer of exoskeleton gives the Tiekkot their high resistence and protection. Although 
                  strong when above the Tiekkot struggle to compete stationary or using their undeveloped stumps.`;
        case "Zhial":
          return `Retracted into themselves, the home of a Zhial is its shell. Camouflaged among a rich multitude of organic  
                  matter it is difficult to distinguish if a Zhial is there or not. If taken too long to decide that could mean 
                  the end is close.`;
        case "Lepparrin's Lowertooth":
          return `A sharp pointy little thing`;
        case "Kurkkuin Rind":
          return `Don't slip on this!`;
        case "Eiliin Tears":
          return `What are they?`;
      }
    }
  }
};
</script>

<style scope lang="scss">
@import "../../SCSS/variables";
#fullScreen-container {
  position: relative;
  background: $backgroundColor;
  position: fixed;
  margin: auto auto;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  img {
    opacity: 1;
    width: 50vw;
    height: 80vh;
  }
  .info {
    position: absolute;
    width: 3.5vw;
    height: 3.5vw;
    filter: invert(1);
    left: $label-image-width - $info - 5px;
    top: 90%;
    left: 90vw;
    right: 0;
    margin: 0 auto;
    background-color: white;
    opacity: 0.5;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
  }
}
#imgAndText-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
#image-container {
  margin: auto 0;
}
#text-container {
  background-color: $inactiveLinkColor;
  color: white;
  text-align: justify;
  width: 50vw;
  :first-child {
    margin-top: 10px;
  }
  p,
  h1,
  h2,
  h3 {
    margin: 10px 20px;
  }
  h2 {
    color: $backgroundColor;
  }
  p {
    color: $linkColor;
  }
}
</style>
