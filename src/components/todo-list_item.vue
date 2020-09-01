<template>
    <div class="item-wrap">
        <input type="checkbox" v-model="checked" @change="checkTodo">
        <p>{{ item }}</p>
        <p>8/31</p>
        <button type="button" @click="removeTodo(item,index)">Del</button>
    </div>
</template>

<script>
import { EventBus } from '../bus';

export default {
    name: "todo-list_item",

    data() {
        return {
            checked: false
        }
    },

    // 상위 컴포넌트 -> 하위 컴포넌트로 데이터 전달
    props: {
        index: {
            type: Number,
            default: function() {return 0;}
        },
        
        item: {
            type: String,
            default: function() {return {};}
        }
    },

    methods: {
        checkTodo() {
            // console.log("체크 판단 : "+ this.checked);
            this.$emit("checkTodo", this.checked);
        },
        removeTodo(item, index) {
            EventBus.$emit("removeTodo", item, index);
        }
    }
}
</script>