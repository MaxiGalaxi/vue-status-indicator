<template>
  <span
    :class="['status-indicator', status, { pulse }]"
    :title="tooltip"
  ></span>
</template>

<script>
export default {
  name: "StatusIndicator",
  props: {
    status: {
      type: String,
      default: "positive",
      validator: (value) => {
        return ["positive", "negative", "active", "intermediary"].includes(
          value
        );
      },
    },
    pulse: {
      type: Boolean,
      default: false,
    },
    tooltip: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
@import "../styles/status-indicator.css";
</style>
