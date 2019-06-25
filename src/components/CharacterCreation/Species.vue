<template>
  <div id="species-container" class="divide">
    <h2>Select Species</h2>
    <div class="labels-container">
      <label :class="[ playerData.species === `Gruvat` ? `selected` : `non-selected`]">
        <input
          type="radio"
          name="species"
          value="Gruvat"
          v-model="playerData.species"
          @click="toggleHighlight"
          required
        >
        <ul class="stats">
          <li
            v-for="(item, key) in defaultAttributes.species.Gruvat"
            :key="`item${key}`"
            :class=" classColor(key) "
          >{{ item }}</li>
        </ul>
        <img src="@/assets/info.svg" class="info" @click="toggleZoom">
        <img
          src="@/assets/emblems/gruvatEmblem.svg"
          draggable="false"
          class="label-image species-image"
        >
        <h3>Gruvat</h3>
      </label>
      <label :class="[ playerData.species === `Tiekkot` ? `selected` : `non-selected`]">
        <input
          type="radio"
          name="species"
          value="Tiekkot"
          v-model="playerData.species"
          @click="toggleHighlight"
        >
        <ul class="stats">
          <li
            v-for="(item, key) in defaultAttributes.species.Tiekkot"
            :key="`item${key}`"
            :class="classColor(key)"
          >
            {{ item }}
            <!-- ternary in a ternary to only show differentiated colors when label is selected -->
          </li>
        </ul>
        <img src="@/assets/info.svg" class="info">
        <img
          src="@/assets/emblems/tiekkotEmblem.svg"
          draggable="false"
          class="label-image species-image"
        >
        <h3>Tiekkot</h3>
      </label>
      <label :class="[ playerData.species === `Zhial` ? `selected` : `non-selected`]">
        <input
          type="radio"
          name="species"
          value="Zhial"
          v-model="playerData.species"
          @click="toggleHighlight"
        >
        <ul class="stats">
          <li
            v-for="(item, key) in defaultAttributes.species.Zhial"
            :key="`item${key}`"
            :class="classColor(key)"
          >{{ item }}</li>
        </ul>
        <img src="@/assets/info.svg" class="info">
        <img
          src="@/assets/emblems/zhialEmblem.svg"
          draggable="false"
          class="label-image species-image"
        >
        <h3>Zhial</h3>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playerData: Object,
    defaultAttributes: Object,
    toggleHighlight: Function,
    classColor: Function,
    toggleZoom: Function
  }
};
</script>

<style scope lang="scss">
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
</style>