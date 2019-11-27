<template>
    <div class="otherKnowledge">
        <h1>其他知识</h1>
        <router-link to='/otherKnowledge/dataBrokers'>数据代理</router-link>
        <br>
        <router-link to='/otherKnowledge/templateParse'>模板解析</router-link>
        <br>
        <router-link to='/otherKnowledge/dataBind'>数据绑定</router-link>
        <br>
        <router-link to='/otherKnowledge/dataHijack'>数据劫持</router-link>

        <hr>
        <router-view></router-view>
    </div>
</template>