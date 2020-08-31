
<template>
    <section class="todo_list-wrap">
        <h2>List Area</h2>

        <div class="item-wrapper">
            <ul>
                <!-- v-bind: 데이터를 동적으로 바인딩해 자식(하위 컴포넌트에 전달) -->
                <!-- v-bind:key = :key (:단축 구문으로 사용) -->
                <li v-for="(item, index) in todos" :key="index">
                    <!-- <TodoItem :item="item" :index="index" v-on:removeTodo="removeTodo"></TodoItem> -->
                    <TodoItem :item="item" :index="index"></TodoItem><!-- eventBus로 변경 -->
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import TodoItem from './todo-list_item';

export default {
    name: "todo-list",

    components: {
        TodoItem
    },

    props: {
        todos: {
            type: Array,
            default: function() {return {};}
        }
    },

    // emit을 또 하기 보다는 EventBus를 사용
    // methods: {
    //     removeTodo(item, index) {
    //         this.$emit("removeTodo", item, index);
    //     }
    // }
}
</script>

<style scoped lang="scss">

.todo_list-wrap {
    h2 {
        color:blueviolet;
        font-size:22px;
        font-weight:600;
    }
    .todo_list-item {
        ul {
            li {
                &:after {
                    content:"";
                    display:block;
                    clear:both;
                }
                p {
                    float:left;
                }
                button {
                    float:left;
                }
            }
        }
    }
}

</style>