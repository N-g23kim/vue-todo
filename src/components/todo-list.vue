
<template>
    <section class="todo_list-wrap">
        <h2>List Area</h2>

        <div class="todo_list-item">
            <ul>
                <TodoItem v-for="(item, index) in todoItems" :key="index" :itemdata="item"></TodoItem>
            </ul>
        </div>
    </section>
</template>

<script>
import TodoItem from './todo-list_item';

export default {
    components: {
        TodoItem
    },

    data() {
        return {
            todoItems: []
        }
    },

    // created() : 라이프사이클 단계 중 data속성과 methods속성이 정의된 후 실행되는 단계
    created() {
        // localStorage에 저장되어있는 목록을 vue 데이터 todoItems에 저장
        if(localStorage.length > 0) {
            Object.keys(localStorage).forEach( (key, value) => {
                // console.log(localStorage.getItem(key));
                this.todoItems.push(localStorage.getItem(key));
            });
        }
    }
}
</script>