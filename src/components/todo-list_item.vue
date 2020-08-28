<template>
    <li>
        <p>{{ itemdata }}</p>
        <!-- <button type="button" @click="onClick_delTodoBtn">Del</button> -->
    </li>
</template>

<script>
export default {
    name: "todo-list_item",

    props: {
        itemdata: {
            type:String,
            default: function() {return {};}
        }
    }
}
</script>