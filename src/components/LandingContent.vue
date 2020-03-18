<template>
  <!-- Starting Screen -->
  <nav id="nav">
    <div class="nav-items">
      <router-link to="/about" id="kuest-link" draggable="false">
        <img src="@/assets/title/title.svg" id="kuest-title" draggable="false" />
      </router-link>
      <ul>
        <router-link to="/about">About</router-link>
        <router-link to="/about">News</router-link>
        <router-link to="/about">Updates</router-link>
        <router-link to="/about">Social</router-link>
      </ul>
    </div>
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
nav {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  .nav-items {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    #kuest-title {
      height: 100%;
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      &:hover {
        filter: brightness(0) invert(1);
      }
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    height: 50px;
    justify-content: flex-end;
    a {
      color: $lightColor;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 2em;
      background-color: transparent;
      border: solid 3px $tertiaryColor;
      text-decoration: none;
      &:hover {
        background-color: $secondaryColor;
        li {
          color: white;
        }
      }
      &:first-child {
        border-bottom-left-radius: 10px;
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  nav .nav-items {
    justify-content: space-between;
  }
  nav .nav-items #kuest-title {
    position: static;
    height: 40px;
    margin-left: 10px;
    margin-top: 5px;
  }
}

@media only screen and (max-width: 1000px) {
  nav .nav-items {
    justify-content: center;
    height: 50px;
    ul {
      border: none;
      a {
        &:first-child {
          border-bottom-left-radius: 0px;
        }
      }
    }
    a {
      border: solid 3px $secondaryColor;
      &:first-child {
        border-bottom-left-radius: 10px;
      }
      &:last-child {
        border-bottom-right-radius: 10px;
      }
    }
    #kuest-title {
      height: 85%;
      padding: 0;
      margin: 0;
    }
  }
}

@media only screen and (max-width: 800px) {
  nav {
    border-bottom: solid 3px $secondaryColor;
  }
  nav .nav-items a {
    border-bottom: none;
    border-top: none;
    &:first-child {
      border-left: none;
    }
    &:last-child {
      border-right: none;
    }
  }
  nav ul a {
    border-left: solid 3px $secondaryColor;
  }
}
</style>
