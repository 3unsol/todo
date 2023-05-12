<template>
  <div id="app">
    <modal-view v-show="showModal" @close="showModal = false">
      <template v-slot:modal-text>{{ modalText }}</template>
    </modal-view>
    <div v-if="userName">
      <todo-header></todo-header>
      <todo-title :propsCount="checkCount" :propsName="userName"></todo-title>
      <todo-input @addItem="addOneItem"></todo-input>
      <todo-controller
        @sortItem="sortAllItem"
        @clearAll="clearAllItem"
      ></todo-controller>
      <todo-list
        :propsdata="todoItems"
        @removeItem="removeOneItem"
        @toggleItem="toggleOneItem"
      ></todo-list>
    </div>
    <div v-else>
      <TodoHello @addName="addUserName" />
    </div>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoTitle from "./components/TodoTitle.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoController from "./components/TodoController.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoHello from "./components/TodoHello.vue";
import getDate from "./assets/commonJS/getDate.js";
import ModalView from "./components/common/ModalView.vue";

export default {
  name: "App",
  data() {
    return {
      userName: "",
      todoItems: [],
      showModal: false,
      modalText: "",
    };
  },
  methods: {
    addOneItem(todoItem) {
      if (todoItem === "") {
        this.showModal = !this.showModal;
        this.modalText = "내용을 입력해주세요.";
        return false;
      }
      var value = {
        item: todoItem, // 입력 받은 아이템
        date: `${getDate().month}/${getDate().date} ${getDate().week}`, // 등록 날짜
        time: getDate().time,
        completed: false,
      };
      // 로컬스토리지에 아이템 등록
      // key: 입력 받은 아이템
      // value: 위에서 만든 value를 JSON화
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    sortTodoLatest() {
      this.todoItems.sort(function (a, b) {
        return b.time - a.time;
      });
    },
    sortTodoOldest() {
      this.todoItems.sort(function (a, b) {
        return a.time - b.time;
      });
    },
    sortAllItem(selectedSort) {
      if (selectedSort.value === "date-desc") {
        this.sortTodoLatest();
      } else if (selectedSort.value === "date-asc") {
        this.sortTodoOldest();
      }
    },
    clearAllItem() {
      this.todoItems = [];
      localStorage.clear();
    },
    addUserName(userName) {
      localStorage.setItem("userName", userName);
      this.userName = userName;
    },
  },
  computed: {
    checkCount() {
      const checkLeftItems = () => {
        let leftCount = 0;
        for (let i = 0; i < this.todoItems.length; i++) {
          if (this.todoItems[i].completed === false) {
            leftCount++;
          }
        }
        return leftCount;
      };
      const count = {
        total: this.todoItems.length,
        left: checkLeftItems(),
      };
      return count;
    },
  },
  mounted() {
    this.sortTodoOldest();
  },
  created() {
    this.userName = localStorage.getItem("userName");

    // if (localStorage.length > 0) {
    //   for (let i = 0; i < localStorage.length; i++) {
    //     if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
    //       this.todoItems.push(
    //         JSON.parse(localStorage.getItem(localStorage.key(i)))
    //       );
    //     }
    //   }
    // }
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "userName") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter,
    TodoHello,
    ModalView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
