
<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/todo-header';

export default {
  name: "home",

  components: {
    Header
  }
};
</script>