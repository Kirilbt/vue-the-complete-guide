<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
  dialog {
    margin: 0;
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.20);
    padding: 1rem;
  }
</style>
