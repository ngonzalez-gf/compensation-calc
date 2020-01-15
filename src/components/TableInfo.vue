<template>
    <v-simple-table>
        <template v-solt:default>
            <thead>
                <tr>
                    <th>user Id</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <td>{{ todo.userId }}</td>
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.title }}</td>
                    <td>{{ todo.completed }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            todos: null
        }    
    },

    mounted() {
        console.log('Mounted')
        this.getTodos();
    },

    methods: {
        getTodos() {
            console.log('aqui va el codigo get todos')
            axios
                .get('https://jsonplaceholder.typicode.com/todos')
                    .then( response => {
                        console.log(response)
                        this.todos = response.data                        
                    })
                    .catch(e => console.log(e))
        }
    }
}
</script>