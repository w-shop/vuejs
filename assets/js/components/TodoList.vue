<template>
    <div>
        <ul>
            <todo-element :key="index" v-for="(element, index) in todoList" :todo="element"
                @remove="todoList.splice(index, 1)"
                @toggle-state="element.state = !element.state"
            />
        </ul>
        <input v-model="newTodo" @keypress.enter="addElement" /> <button @click.prevent="addElement">Add new TODO</button>
    </div>
</template>

<script>
    import TodoElement from './TodoElement';

    export default {
        components: {
            'todo-element': TodoElement
        },
        props: ['list'],
        data() {
            return {
                newTodo: '',
                todoList: []
            }
        },
        methods: {
            addElement() {
                const title = this.newTodo.replace(/^\s+|\s+$/, '');
                if (!title) {
                    return;
                }
                this.newTodo = '';
                this.todoList.push({
                    title: title,
                    state: false
                });
            }
        },
        created() {
            this.todoList = this.list;
        }
    }
</script>
