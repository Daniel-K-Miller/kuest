<template>
  <div id="name-container" class="divide">
    <h2>Character Name:</h2>
    <input type="text" name="playerName" maxlength="12" v-model="playerData.name" required />
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

<style scope lang="scss">
@import "../../SCSS/variables";
#name-container {
  background-color: lighten($darkColor, 4);
  display: flex;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  input {
    margin-left: 10px;
    background: white;
    font-size: 1em;
  }
}

#random-btn {
  background-image: url("../../assets/random.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75%;
  border: none;
  width: 30px;
  height: 30px;
  background-color: $lightColor;
}
</style>
