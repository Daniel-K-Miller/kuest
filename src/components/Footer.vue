<template>
  <footer>
    <div class="top-level">
      <div class="links">
        <h2>Links</h2>
        <ul>
          <li v-for="link in socialData.links" :key="link.title">
            <a :href="link.href">{{ link.title }}</a>
          </li>
        </ul>
      </div>
      <div class="social">
        <h2>Social</h2>
        <ul>
          <li v-for="item in socialData.social" :key="item.title">
            <a href="www.google.com">
              <img
                :src="require(`@/assets/social/${item.image}`)"
                :alt="item.title"
                draggable="false"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom-level">
      <h3>This website and its contents are copyright &copy; 2020 Kuest.</h3>
    </div>
  </footer>
</template>

<script>
import socialData from "@/data/footer/social.json";

export default {
  data() {
    return {
      socialData
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../SCSS/_variables.scss";

footer {
  width: 100%;
}

footer .top-level {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: $darkColor;
  div {
    padding: 1em 2em;
    h2 {
      padding-bottom: 0.25em;
      color: $lightColor;
    }
    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      text-align: left;
      a {
        color: $primaryColor;
        &:hover {
          color: gray;
        }
      }
    }
  }
}

footer .top-level .social {
  ul {
    flex-direction: row;
    li {
      margin: 0 2.5px;
    }
  }
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    opacity: 0.2;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
}

footer .bottom-level {
  h3 {
    font-size: 0.75em;
    font-weight: normal;
  }
  margin: 1vw 0;
}
</style>
