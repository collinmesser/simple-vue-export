<template>
  <button :class="type">{{ value }}</button>
</template>
<script>
export default {
  name: "CoreButton",
  props: {
    type: String,
    value: String,
  },
};
</script>
<style scoped lang="scss">
$main: rgb(58, 173, 54);
$background: white;

@if variable-exists(Button) {
  $main: $Button;
  $background: $PageBackground;
}

button {
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 3px;
  padding: 10px 25px;
  font-size: 0.85em;
  font-weight: 600;
  line-height: 1.2em;
  &.primary {
    background: $main;
    color: $background;
    border: 2px solid $main;
  }
  &.secondary {
    background: $background;
    border: 2px solid $main;
    border-radius: 3px;
    padding: 10px 25px;
    color: $main;
    &:active {
      background: $main;
      color: $background;
    }
  }
  &.naked {
    background: $background;
    border: 2px solid transparent;
    border-radius: 3px;
    padding: 10px 25px;
    color: $main;
    text-decoration: underline;
  }
}
</style>
