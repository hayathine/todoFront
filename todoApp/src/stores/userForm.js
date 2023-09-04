import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserForm = defineStore('form', {
  stete: () => {
    return {
      user: reactive([{ name: '', email: '', password: '' }])
    }
  },
  actions: {
    addUser(name, email, password) {
      user.push(password)
      user.push(name)
      user.push(email)

      // axiosを使ってPOSTリクエストを送信する

      // エンドポイントを指定する
      const endpoint = 'http://127.0.0.1:8000/users' //TODO: ここを変更する
      // axiosを実行
      // axios.post(エンドポイント, 送信するデータ)
      axios.post(
        endpoint, user
      ).then(
        // 成功した場合の処理
        (response) => {
          // レスポンスのデータをコンソールに出力
          console.log(response.data)
        }
      ).catch(
        // 失敗した場合の処理
        (error) => {
          // エラー内容をコンソールに出力
          console.log(error)
        }
      )

    }
  }
})
