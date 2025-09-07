<script setup>
import { computed } from 'vue'

const props = defineProps({
    todo: {
        type: Object,
        required: true,
    },
})

const emit = defineEmits(['remove-todo', 'update-status'])

const handleRemoveTodo = (id) => {
    emit('remove-todo', id)
}

// 用 computed 包裝，改變時發送事件給父層
const checked = computed({
    get: () => props.todo.status,
    set: (val) => {
        emit('update-status', { id: props.todo.id, status: val })
    },
})
</script>

<template>
    <li>
        <label class="todoList_label">
            <input
                class="todoList_input"
                type="checkbox"
                :checked="checked"
                @change="checked = $event.target.checked"
            />
            <span>{{ props.todo.content }}</span>
        </label>
        <a href="#" @click="handleRemoveTodo(props.todo.id)">
            <i class="fa fa-times"></i>
        </a>
    </li>
</template>

<style scoped></style>
