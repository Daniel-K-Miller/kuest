<template>
  <div id="species-container" class="divide">
    <h2>Select Species</h2>
    <div class="labels-container">
      <div class="label-container" v-for="(item, key) in defaultAttributes.species">
        <label :class="[ playerData.species === key ? `selected` : `non-selected`]">
          <input
            type="radio"
            name="species"
            :value="key"
            v-model="playerData.species"
            @click="toggleHighlight"
            required
          >
          <ul class="stats">
            <li
              v-for="(item, key) in defaultAttributes.species[key]"
              :key="`item${key}`"
              :class=" classColor(key) "
            >{{ item }}</li>
          </ul>
          <img src="@/assets/info.svg" class="info" @click="toggleZoom">
          <img
            v-bind:src="require(`@/assets/emblems/${key}Emblem.svg`)"
            draggable="false"
            class="label-image species-image"
          >
          <h3>{{key}}</h3>
        </label>
      </div>
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