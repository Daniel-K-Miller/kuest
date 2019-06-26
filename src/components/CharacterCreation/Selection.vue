<template>
  <div :id=" `${version}-container`" class="divide">
    <h2>Select {{ UpperCaseVersion }}</h2>
    <div class="labels-container">
      <div
        class="label-container"
        v-for="(item, key, index) in defaultAttributes[version]"
        :key="key + ` container`"
      >
        <label :class="[ playerData[version] === key ? `selected` : `non-selected`]">
          <input
            type="radio"
            :name="version"
            :value="key"
            v-model="playerData[version]"
            @click="toggleHighlight"
            required
          >
          <ul class="stats">
            <li
              v-for="(item, key) in defaultAttributes[version][key]"
              :key="`item${key}`"
              :class=" classColor(key) "
            >{{ item }}</li>
          </ul>
          <img src="@/assets/info.svg" class="info" @click="toggleZoom">
          <img
            :src="getImages(version, key, index)"
            draggable="false"
            :class=" `label-image ${version}-image` "
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
    toggleZoom: Function,
    version: String
  },
  methods: {
    getImages(version, key, index) {
      if (version === `species`) {
        return require(`@/assets/emblems/${key}Emblem.svg`);
      } else if (version === `weapon`) {
        return require(`@/assets/weapons/weapon${index + 1}.svg`);
      }
    }
  },
  computed: {
    UpperCaseVersion() {
      return this.version.slice(0, 1).toUpperCase() + this.version.slice(1);
    }
  }
};
</script>

<style scope lang="scss">
</style>