<template>
    <div class="title-wrap">
        <p>{{ message }}</p>
        <p>You've got <span class="title_task-total">{{ taskTotal }}</span> tasks today!</p>
    </div>
</template>

<script>
export default {
    name:"todo-title",

    data() {
        return {
            message: "Hello, doubledot.",
            taskTotal: 0
        }
    }
}
</script>