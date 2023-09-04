<script lang="js">
import { reactive } from 'vue'
const state = reactive({
    name: '',
    email: '',
    password: ''
})
</script>

<template>
    <v-contain>
        <input type="text" placeholder="名前" v-model="name">
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="パスワード" v-model="password">
        <button @click="add">追加</button>
    </v-contain>

</template>