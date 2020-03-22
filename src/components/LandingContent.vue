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
    <button id="mobile-button">toggle</button>
  </nav>
  <!-- <router-view :initiated="initiated" @changeInitiated="changeInitiated"/> -->
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    initiated: Boolean
  },
  methods: {
    changeInitiated() {
      this.$emit("toggleInitiated");
    }
  },
  computed: mapState({
    isMobile: state => state.mobile.isMobile
  }),
  watch: {
    isMobile: function() {
      console.log(this.$el);
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
      transition: background-color 0.15s ease-in-out;
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
#mobile-button {
  display: none;
}

@media only screen and (max-width: 1400px) {
  nav#primary {
    background-color: $tertiaryColor;
  }

  #logo-item a img {
    filter: brightness(0) invert(0.75);
  }
}

@media only screen and (max-width: 550px) {
  nav#primary ul {
    visibility: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    li {
      height: auto;
      flex: 1;
      font-size: 1.2em;
      a {
        width: 100%;
      }
    }
  }

  #logo-item a img {
    width: 100vw;
  }

  #mobile-button {
    display: flex;
  }
}
</style>
