
<template>
    <div class="inputBx">
        <!-- v-model : 입력 값이 자동으로 뷰 데이터 속성에 연결 -->
        <input 
            type="text"
            class="addTodo"
            placeholder="New Todo"
            v-model="newTodoItem"
        >
        <!-- v-on : @약어 사용 가능 (ex. v-on:keydown.enter = @keydown.enter) -->
        <button
            type="button"
            @click="onClick_addTodoBtn"
        >ADD</button>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            newTodoItem:''
        }
    },
    methods: {
        onClick_addTodoBtn() {
            console.log("* ---------------------------------------------------------- *");
            console.log("Input Value : " + this.newTodoItem);
            console.log("* ---------------------------------------------------------- *");

            if(this.newTodoItem !== "") {
                var txtValue = this.newTodoItem && this.newTodoItem.trim(); //inputbox에 입력된 텍스트의 앞, 뒤 공백문자열 제거
                localStorage.setItem(txtValue, txtValue); // localStorage.setItem(키, 값)

                // input 초기화
                this.clearInputBox();
            }
        },
        clearInputBox() {
            this.newTodoItem = '';
        }
    }
}
</script>