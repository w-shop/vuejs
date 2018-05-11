<template>
    <li :class="['todo__element', {'todo__element--done': todo.state}]">
        {{ todo.title }}
        <button @click.prevent="$emit('toggle-state')">{{ toggleButton }}</button>
        <button @click.prevent="remove">Delete</button>
    </li>
</template>

<script>
    export default {
        props: ['todo'],
        methods: {
            remove() {
                if (confirm('Are you sure you want to delete "' + this.todo.title + '"?')) {
                    this.$emit('remove');
                }
            }
        },
        computed: {
            toggleButton() {
                return this.todo.state ? 'NOT DONE': 'Done';
            }
        }
    }
</script>
