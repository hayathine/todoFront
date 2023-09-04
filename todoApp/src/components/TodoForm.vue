<script lang="js">
import { reactive } from 'vue'
import { useUserForm } from '../stores/userForm'
const userForm = useUserForm()
const state = reactive({
    name: '',
    email: '',
    password: ''
})
const endpoint = 'http://127.0.0.1:8000/users' //TODO: ここを変更する

const addUser = (name, email, password) => {
    state.name = name
    state.email = email
    state.password = password

    axios.post(
        endpoint, state
    ).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    }
    )

}
</script>

<template>
    <v-contain>
        <input type="text" placeholder="名前" v-model="name">
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="パスワード" v-model="password">
        <button @click="addUser">追加</button>
        HelloWorld
    </v-contain>

</template>