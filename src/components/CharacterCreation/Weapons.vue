<template>
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
          <li v-for="(item, key) in defaultAttributes.weapons[`Kurkkuin Rind`]" :key="`item${key}`">
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
          <li v-for="(item, key) in defaultAttributes.weapons[`Eiliin Tears`]" :key="`item${key}`">
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
</template>

<script>
export default {
  props: {
    playerData: Object,
    defaultAttributes: Object,
    toggleHighlight: Function,
    upperCaseText: Function
  }
};
</script>