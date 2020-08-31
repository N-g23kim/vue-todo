<template>
    <header>
        <div class="inner-wrap">
            <h1>TO DO LIST!</h1>
            <p class="date">{{ timestamp }}</p>

            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "todo-header",

    data() {
        return {
            timestamp:""
        }
    },

    created() {
        const now = new Date();
        
        const month = now.getMonth() + 1;
        
        const weekList = new Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.");
        const week = weekList[now.getDay()];

        const date  = now.getDate();

        this.timestamp = `${month}/${date} (${week})`;
    }
}
</script>

<!-- <style> 태그가 scoped 속성을 가지고있을 때, CSS는 현재 컴포넌트의 엘리먼트에만 적용 -->
<style scoped lang="scss">
    header {
        padding:35px 0;
        background:#333;
        text-align:center;
    }
    h1 {
        font-size:34px;
        font-weight:900;
        color:#fff;
    }
    p {
        margin-top:12px;
        font-size:16px;
        color:#fff;
    }
</style>