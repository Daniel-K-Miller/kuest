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
          <img src="@/assets/zoomIn.svg" class="info" @click="( (e) => toggleZoom(e, key))">
          <img
            :src="getImages(version, lowerCaseKey(key), index)"
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
    },
    lowerCaseKey(key) {
      return key.slice(0, 1).toLowerCase() + key.slice(1);
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
@import "../../SCSS/variables";

#species-container {
  background-color: lighten($backgroundColor, 6);
  .info {
    top: $species-image-height - $info - 5px;
  }
}

#weapon-container {
  background-color: lighten($backgroundColor, 7);
  img {
    background-color: $inactiveLinkColor;
  }
  .info {
    top: $weapon-image-height - $info - 5px;
  }
}

label {
  background-color: $backgroundColor;
  margin: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;

  .label-image {
    opacity: 0.3;
    width: $label-image-width;
  }
  .species-image {
    height: $species-image-height;
  }
  .weapon-image {
    height: $weapon-image-height;
  }
  // Radio buttom image styling
  [type="radio"] {
    position: absolute;
    opacity: 0;
  }
  [type="radio"] + img {
    cursor: pointer;
  }
  [type="radio"]:checked + img {
    box-shadow: 0 0 20px $mainColor;
    border-radius: 10px;
  }
  .stats {
    position: absolute;
    list-style: none;
    text-decoration: none;
    text-align: center;
    font-size: 1em;
  }
  ul {
    height: 0;
    width: $label-image-width;
    display: flex;
    justify-content: center;
    li {
      opacity: 0;
      padding: 2px;
      margin: 4px 10px;
      height: max-content;
      padding: 2px;
      border-radius: 3px;
      font-size: 1.2em;
    }
  }
}

.labels-container {
  display: flex;
  justify-content: center;
  .label-container {
    display: flex;
    background-color: transparent;
    width: max-content;
    height: max-content;
    border-radius: 10px;
    h3 {
      border-radius: 5px;
    }
  }
  .selected {
    cursor: pointer;
    h3 {
      color: white;
    }
    img {
      opacity: 1;
    }
    ul {
      li {
        color: white;
        opacity: 1;
      }
    }
    .info {
      opacity: 0.5;
      transform: rotate(90deg);
      &:hover {
        opacity: 1;
      }
    }
  }
  // hovering over labl
  .non-selected:hover {
    li {
      opacity: 0.5;
      color: white;
      transition: all 0.2s ease-out;
    }
  }
  .selected:hover {
    li {
      opacity: 1;
    }
  }
}

// TODO: put in parent CSS
.info {
  position: absolute;
  width: $info;
  height: $info;
  filter: invert(1);
  left: $label-image-width - $info - 5px;
  top: 160px;
  right: 110px;
  background-color: white;
  opacity: 0;
}

// TODO: put in parent CSS
.atr-brute {
  background-color: $brute;
}
.atr-resist {
  background-color: $resist;
}
.atr-life {
  background-color: $life;
}
.atr-dmg {
  background-color: $dmg;
}
.atr-crit {
  background-color: $crit;
}
.atr-acc {
  background-color: $acc;
}
</style>