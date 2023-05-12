<template>
  <div class="add">
    <input
      type="text"
      class="add_input"
      placeholder="해야 할 일이 몰까용?"
      v-model="newTodoItem"
      v-on:keyup.enter="addTodoItem"
    />
    <!-- 엔터에서 손 떼면 addTodoItem 실행 -->
    <button class="add_button" @click="addTodoItem">
      <span class="blind">+</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodoItem() {
      // 입력칸에 아이템이 들어왔을 때
      if (this.newTodoItem !== "") {
        // addItem 한다고 부모한테 알리기
        this.$emit("addItem", this.newTodoItem);
        this.clearInput();
      }
    },
    // 입력값 비우는 메서드
    clearInput() {
      // 현재 데이터 값 비우기
      this.newTodoItem = "";
    },
  },
};
</script>

<style></style>
