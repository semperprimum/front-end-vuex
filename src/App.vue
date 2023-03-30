<template>
  <div class="app">
    <form-component />
    <total-balance-component />
    <budget-list-component />
  </div>
</template>

<script>
import BudgetListComponent from "./components/BudgetListComponent.vue";
import FormComponent from "./components/FormComponent.vue";
import TotalBalanceComponent from "./components/TotalBalanceComponent.vue";
export default {
  name: "App",
  components: { FormComponent, TotalBalanceComponent, BudgetListComponent },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
