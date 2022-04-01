<template>
  <b-container class="mt-5 head__input w-100">
    <b-row>
      <b-col>
        <b-form-input
          v-model="todo"
          placeholder="Enter todo name"
        ></b-form-input>
      </b-col>
      <b-col>
        <b-button variant="success" @click="addTodo">Button</b-button>
      </b-col>
    </b-row>
    <b-container fluid>
      <b-list-group class="mt-5 w-75">
        <b-list-group-item v-for="todo in todos" :key="todo.id">
          <b-row sm="12">
            <b-col sm="7">
              <b-form-input v-model="todo.name"></b-form-input>
            </b-col>
            <b-col sm="2">
              <b-button
                v-b-modal.modal-1
                @click="updateTodo(todo.id, todo.name)"
              >
                Update</b-button
              >
            </b-col>
            <b-col sm="2">
              <b-button
                @click="delTodo(todo.id)"
                pill
                variant="danger"
                class="d-flex"
                >Delete</b-button
              >
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.todo !== "") {
        this.todos.push({ id: Date.now(), name: this.todo });
      }
      this.todo = "";
    },
    delTodo(id) {
      const index = this.todos.findIndex((el) => el.id === id);
      this.todos.splice(index, 1);
    },
    updateTodo(id, name) {
      const index = this.todos.findIndex((el) => el.id === id);
      this.todos[index] = { id: id, name: name };
    },
  },
};
</script>
