import User from "@/types/User";
import { defineStore } from "pinia";
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
    const users = ref<User[]>([
        {
            active: false,
            name: 'Marcelo',
            id: 14,
            email: 'teste@teste.com',
            role: 'user'
        }
    ])

    return { users }
})