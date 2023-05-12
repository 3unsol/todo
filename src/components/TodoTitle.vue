<template>
  <div class="title">
    <p class="title_text">
      <span class="title_message">
        {{ message }}
      </span>
      <span>{{ propsName }}</span>
    </p>
    <p class="title_task">
      <span class="title_task_top">You've got </span>
      <span class="title_task_count">
        <em class="title_task_left">{{ propsCount.left }}</em>
        <em v-if="propsCount.total" class="title_task_total"
          >&nbsp;/&nbsp;{{ propsCount.total }}</em
        >
      </span>
      <span class="title_task_bottom"> tasks today.</span>
      <span class="title_task_info"></span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["propsCount", "propsName"],
  data() {
    return {
      message: "Hello, ",
    };
  },
};
</script>

<style></style>
