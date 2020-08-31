
<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <InputBox v-on:addTodo="addTodo"></InputBox>
      <!-- <TodoList :todos="todos" v-on:removeTodo="removeTodo"></TodoList> -->
      <TodoList :todos="todos"></TodoList><!-- eventBus로 변경 -->
    </div>
    <Footer v-on:clearAllTodo="clearAllTodo"></Footer>
  </div>
</template>

<script>
import Header from './components/todo-header';
import InputBox from './components/todo-input';
import TodoList from './components/todo-list';
import Footer from './components/todo-footer';
import { EventBus } from './bus';

export default {
  name: "App",

  components: {
    Header,
    InputBox,
    TodoList,
    Footer
  },

  // todos 빈 배열 선언
  data() {
    return {
      todos: []
    }
  },

  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todos.push(todoItem);
    },

    // removeTodo(todo, index) {
    //   localStorage.removeItem(todo);
    //   this.todos.splice(index,1);
    // },

    clearAllTodo() {
      localStorage.clear();
      
      // todos 초기화
      this.todos = [];
    }
  },
  
  /*
    [created()]
    - 라이프사이클 단계 중 data속성과 methods속성이 정의된 후 실행되는 단계
    - data와 events에 접근할 수 있고, 가상 DOM은 접근할 수 없는 상태
  */
  created() {
      // localStorage에 저장되어있는 목록을 vue 데이터 todos에 저장
      if(localStorage.length > 0) {
        Object.keys(localStorage).forEach( (value, index) => {
            // console.log("value / key : " + value + " / " + key);

            if(localStorage.key(index) != "loglevel:webpack-dev-server") {
              this.todos.push(localStorage.getItem(value));
            }
        });
      }

      EventBus.$on("removeTodo", (todo, index) => {
        localStorage.removeItem(todo);
        this.todos.splice(index,1);
      })
  },

};
</script>