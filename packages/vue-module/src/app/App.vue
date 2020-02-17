<template>
  <div class="App">
    <h4 class="Title">Hello!</h4>
    <div class="Body">
      <span>This is a simple Vue App rendered by Hypernova.</span>
    </div>
    <div class="Buttons">
      <button @click="handleClick">Alert Me</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert("Hello from Vue!");
    }
  }
};
</script>

<style scoped>
.App {
  background-color: #41b883;
  color: white;
  padding: 1em;
}

.Title {
  text-align: center;
}

.Body,
.Buttons {
  display: flex;
  justify-content: center;
}

.Body {
  margin-bottom: 1em;
}

.Body > span {
  text-align: center;
}
</style>
