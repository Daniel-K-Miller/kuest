<template>
  <!-- Starting Screen -->
  <nav id="primary">
    <button id="mobile-button" @click="toggleMobileNav">Menu</button>
    <ul class="fade">
      <li v-if="isMobile === false" id="logo-item">
        <router-link to="/about" draggable="false">
          <img src="@/assets/title/title.svg" id="kuest-title" draggable="false" />
        </router-link>
      </li>
      <li v-else-if="isMobile === true">
        <router-link to="/about" draggable="false">
          <router-link to="/about">Home</router-link>
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
import { mapState } from "vuex";

export default {
  props: {
    initiated: Boolean
  },
  data() {
    return {
      isMobileNavActive: false
    };
  },
  methods: {
    changeInitiated() {
      this.$emit("toggleInitiated");
    },
    toggleMobileNav() {
      const ul = this.$el.getElementsByTagName("ul")[0];
      // changing mobile nav state
      if (this.isMobileNavActive === true && this.isMobile === true) {
        this.isMobileNavActive = !this.isMobileNavActive;
        ul.classList.add("show");
        ul.classList.remove("hide");
        return;
      }

      this.isMobileNavActive = !this.isMobileNavActive;

      if (this.isMobileNavActive === true) {
        console.log(ul);
        ul.classList.add("show");
        ul.classList.remove("hide");
      } else {
        console.log(ul);
        ul.classList.remove("show");
        ul.classList.add("hide");
      }
    }
  },
  computed: mapState({
    isMobile: state => state.mobile.isMobile
  }),
  watch: {
    isMobile: function() {
      if (this.isMobile === true) {
        this.toggleMobileNav();
      }
    }
  },
  mounted() {
    const ul = this.$el.getElementsByTagName("ul")[0];
    if (this.isMobile === true) {
      if (this.isMobileNavActive === true) {
        ul.classList.add("hide");
      } else {
        ul.classList.add("hide");
      }
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

@media only screen and (min-width: 551px) and (max-width: 1000px) {
  nav#primary ul {
    height: 80px;

    #logo-item a {
      height: 100%;
      padding: 0 20px;
    }
  }
  nav#primary ul li {
    height: auto;
    #kuest-title {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 550px) {
  nav#primary ul {
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
    z-index: 5;
    cursor: pointer;
    position: absolute;
    right: 0;
    background-color: $primaryColor;
    border: none;
    padding: 1em;
    border-radius: 10px;
  }

  .show {
    visibility: visible;
  }

  .hide {
    visibility: hidden;
  }
}
</style>
