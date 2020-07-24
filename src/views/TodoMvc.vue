<template>
    <section class="todoapp">
        <header class="header">
            <h1>Vue3 todos</h1>
            <input class="new-todo" placeholder="想说的话" v-model="newTodo" @keyup.enter="addTodo">
        </header>
        <section class="main" v-show="todos.length">
            <ul class="todo-list">
                <li v-for="todo in todos" class="todo" :key="todo.id">
                    <div class="view">
                        <label>{{ todo.title }}</label>
                        <button class="destroy" @click="removeTodo(todo)">X</button>
                    </div>
                </li>
            </ul>
        </section>

    </section>
</template>

<script>
    import { ref, reactive, toRefs } from 'vue'
    export default {
        setup() {
            const state = reactive({
                newTodo: '',
                todos: [
                    { id: "1", title: "宁叫青山长相守", completed: false },
                    { id: "2", title: "不许人间见白头", completed: false }
                ],
            })
            function addTodo() {
                var value = state.newTodo && state.newTodo.trim()
                if (!value) {
                    return
                }
                state.todos.push({
                    id: state.todos.length + 1,
                    title: value,
                    completed: false
                })
                state.newTodo = ""
            }
            function removeTodo(todo){
          console.log(todo);
          
          state.todos = state.todos.filter(i => todo != i );
        }
            return {
                ...toRefs(state),removeTodo,
                addTodo
            }
        }
    }
</script>