<template>
  <!-- Starting Screen -->
  <nav id="primary">
    <ul>
      <li id="logo-item">
        <router-link to="/about" draggable="false">
          <img src="@/assets/title/title.svg" id="kuest-title" draggable="false" />
        </router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/about">News</router-link>
      </li>
      <li>
        <router-link to="/about">Updates</router-link>
      </li>
      <li>
        <router-link to="/about">Social</router-link>
      </li>
    </ul>
  </nav>
  <!-- <router-view :initiated="initiated" @changeInitiated="changeInitiated"/> -->
</template>

<script>
export default {
  props: {
    initiated: Boolean
  },
  methods: {
    changeInitiated() {
      this.$emit("toggleInitiated");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../SCSS/_variables.scss";
nav#primary ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  height: 40px;
  width: 800px;
  margin: 0 auto;
  li {
    height: 100%;
    flex: 1;
    a {
      text-decoration: none;
      background-color: $primaryColor;
      color: $lightColor;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      transition: all 0.15s ease-in-out;
      &:hover {
        background-color: $lightColor;
        color: black;
      }
      img {
        height: 100%;
        width: auto;
      }
    }
  }
  #logo-item a {
    height: 100%;
    background-color: transparent;
    &:hover {
      img {
        filter: brightness(0) invert(1);
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  nav#primary {
    background-color: $secondaryColor;
  }

  #logo-item a img {
    filter: invert(4%) sepia(15%) saturate(1433%) hue-rotate(178deg)
      brightness(90%) contrast(101%);
  }
}
</style>
