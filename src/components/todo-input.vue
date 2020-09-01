
<template>
    <div class="inputBx">
        <!-- v-model : 입력 값이 자동으로 뷰 데이터 속성에 연결 -->
        <input 
            type="text"
            class="addTodo"
            placeholder="New Todo"
            v-model="newTodoItem"
            @keyup.enter="addTodo"
        >
        <!-- v-on : @약어 사용 가능 (ex. v-on:keydown.enter = @keydown.enter) -->
        <button type="button" @click="addTodo">ADD</button>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            newTodoItem:""
        }
    },
    
    methods: {
        addTodo() {
            // console.log("Input Value : " + this.newTodoItem);

            if (this.newTodoItem == "") return;
            
            //inputbox에 입력된 텍스트의 앞, 뒤 공백문자열 제거
            let txtValue = this.newTodoItem && this.newTodoItem.trim();

            // App 컴포넌트로 이벤트 전달
            this.$emit('addTodo', txtValue);

            // input 초기화
            this.clearInputBox();
        },
        
        clearInputBox() {
            this.newTodoItem = "";
        }
    }
}
</script>