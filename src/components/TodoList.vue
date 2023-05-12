<template>
  <div>
    <ul class="list">
      <li
        class="list_item"
        v-for="(todoItem, index) in propsdata"
        :key="todoItem.item"
      >
        <input
          type="checkbox"
          :id="todoItem.item"
          :checked="todoItem.completed === true"
          @change="toggleComplete(todoItem)"
        />&nbsp;
        <!-- v-on:change : 변화 감지
        토글이 눌리면 토글컴플 메서드 실행
        인자로는 해당 투두아이템을 필요로 한다 -->
        <label :for="todoItem.item" class="list_label">
          <span class="list_text">{{ todoItem.item }}</span
          >&nbsp;
        </label>
        <span class="list_date">{{ todoItem.date }}</span
        >&nbsp;
        <button class="list_delete" @click="removeTodo(todoItem, index)">
          <div class="blind">삭제</div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 부모한테서 todoItems를 받아온다
  props: ["propsdata"],
  methods: {
    // 토글컴플 메서드
    // 현재 아이템의 컴플 상황을 반대로 토글
    // 그리고 로컬스토리지에 아이템 컴플 바뀐 거 반영해서 넣어줌
    toggleComplete(todoItem) {
      this.$emit("toggleItem", todoItem);
    },
    removeTodo(todoItem, index) {
      this.$emit("removeItem", todoItem, index);
    },
  },
  created() {
    // if (localStorage.length > 0) {
    //   for (let i = 0; i < localStorage.length; i++) {
    //     // 웹팩 데브 서버가 뭔지 모르겠다...
    //     if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
    //       this.todoItems.push(
    //         JSON.parse(localStorage.getItem(localStorage.key(i)))
    //       );
    //     }
    //   }
    // }
  },
};
</script>

<style></style>
