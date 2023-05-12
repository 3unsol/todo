<template>
  <div>
    <div class="hello">누구세용?</div>
    <label for="user-name">이름</label>
    <input
      type="text"
      id="user-name"
      v-model="userName"
      @keyup.enter="addUserName"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    addUserName() {
      this.$emit("addName", this.userName);
    },
  },
};
</script>

<style></style>
