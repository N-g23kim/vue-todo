
<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <InputBox></InputBox>
      <TodoList></TodoList>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/todo-header';
import InputBox from './components/todo-input';
import TodoList from './components/todo-list';
import Footer from './components/todo-footer';

export default {
  name: 'App',

  components: {
      Header, InputBox, TodoList, Footer
  }
};
</script>