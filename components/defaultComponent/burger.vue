<template>
  <div class="z-40">
    <input
      id="nav-toggle"
      v-model="navbarSlider"
      type="checkbox"
      class="navigation-checkbox"
    />
    <label for="nav-toggle" class="navigation-icon">
      <div class="burger"></div>
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      navbarSlider: (state) => state.navbarSlider,
    }),
    navbarSlider: {
      get() {
        return this.$store.state.navbarSlider
      },
      set() {
        if (this.navbarSlider === false) {
          return this.$store.commit('CHANGE_NAVBAR_SLIDER', true)
        } else {
          return this.$store.commit('CHANGE_NAVBAR_SLIDER', false)
        }
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
.navigation-icon {
  cursor: pointer;
  height: 1.2rem;
  width: 1.4rem;
  padding: 4px 3px 4px 2px;
}

.burger {
  position: relative;
}

.burger,
.burger::before,
.burger::after {
  width: 1.4rem;
  height: 2px;
  display: inline-block;
  background-color: #fca311;
  transition: 0.2s ease;
}

.burger {
  width: 1rem;
}

.burger::before,
.burger::after {
  content: '';
  position: absolute;
  left: 0;
}

.burger::before {
  top: -0.6rem;
}

.burger::after {
  top: 0.6rem;
}

.navigation-icon:hover .burger::before {
  background-color: #fca311;
}
.navigation-icon:hover .burger::after {
  background-color: #fca311;
}
.navigation-icon:hover .burger {
  background-color: #fca311;
}

.navigation-checkbox:checked + .navigation-icon .burger {
  background-color: transparent;
}

.navigation-checkbox:checked + .navigation-icon .burger::before {
  top: 0;
  transform: rotate(45deg);
}

.navigation-checkbox:checked + .navigation-icon .burger::after {
  top: 0;
  transform: rotate(-45deg);
}

.navigation-checkbox {
  display: none;
}
</style>
