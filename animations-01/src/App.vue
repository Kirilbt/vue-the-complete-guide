<template>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="paragraph">
      <p v-if="paragraphIsVisible">This is only visible sometimes...</p>
    </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        animatedBlock: false,
        dialogIsVisible: false,
        paragraphIsVisible: false,
      };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform .2s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale .3s ease-out forwards;
}

.paragraph-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}

.paragraph-enter-active {
  /* transition: all .3s ease-out; */
  animation: slide-scale .3s ease-out;
}

.paragraph-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.paragraph-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}

.paragraph-leave-active {
  /* transition: all .2s ease-in; */
  animation: slide-scale .3s ease-out;
}

.paragraph-leave-to {
  /* opacity: 0;
  transform: translateY(-30px); */
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
