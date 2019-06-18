<template>
  <div id="name-container" class="divide">
    <h2>Character Name:</h2>
    <input type="text" name="playerName" maxlength="12" v-model="playerData.name" required>
    <button id="random-btn" type="button" @click="handleRandom"></button>
  </div>
</template>

<script>
export default {
  props: {
    playerData: Object,
    handleRandom: Function
  }
};
</script>