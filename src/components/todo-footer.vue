
<template>
    <footer>
        <div class="select">
            <label for="filter">Filter</label>
            <select name="filter" id="filter">
                <option value="date-asc">Date Asc</option>
                <option value="date-dsc">Date Dsc</option>
                <option value="title-asc">Title Asc</option>
                <option value="title-dsc">Title Dsc</option>
            </select>
        </div>
        <button type="button" @click="clearAllTodo">All Clear!</button>
    </footer>
</template>

<script>
export default {
    name: "todo-footer",

    methods: {
        clearAllTodo() {
            this.$emit('clearAllTodo');
        }
    }
}
</script>