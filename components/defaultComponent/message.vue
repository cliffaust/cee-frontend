<template>
  <transition @enter="enter" @before-enter="beforeEnter" @leave="leave">
    <div
      v-if="showMessageBox"
      :css="false"
      :class="[
        'py-2',
        'px-5',
        'rounded-md',
        'drop-shadow-md',
        'bg-white',
        'w-106',
        'fixed',
        'left-2/4',
        '-translate-x-2/4',
        '-translate-y-2/4',
      ]"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div class="text-sm font-bold text-center">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from 'gsap'
export default {
  inheritAttrs: false,
  props: {
    showMessageBox: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.bottom = 0
    },
    enter(el, done) {
      gsap.to(el, {
        bottom: 20,
        duration: 0.5,
        ease: 'back.out(10)',
        onComplete: done,
      })
    },

    leave(el, done) {
      gsap.to(el, {
        bottom: -20,
        duration: 0.5,
        opacity: 0,
        ease: 'expo.out',
        onComplete: done,
      })
    },
  },
}
</script>
