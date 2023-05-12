<template>
  <div class="controller">
    <div class="select">
      <label for="order">정렬</label>
      <select
        name="order"
        id="order"
        class="selectbox"
        v-model="selected"
        @change="sortTodo"
      >
        <option value="date-asc">등록순</option>
        <option value="date-desc">최신순</option>
      </select>
    </div>
    <button class="clear" @click="clearTodo">모두 지우기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "date-asc",
    };
  },
  methods: {
    sortTodo() {
      this.$emit("sortItem", { value: this.selected });
    },
    clearTodo() {
      this.$emit("clearAll");
    },
  },
};
</script>

<style></style>
