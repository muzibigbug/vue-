<template>
    <div class="axios">
        <h1>axios数据</h1>
        <ul>
            <li v-for="(item,i) of users" :key="i">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            users:{}
        }
    },
    mounted() {
        axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
            console.log(response.data)
            this.users = response.data
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>