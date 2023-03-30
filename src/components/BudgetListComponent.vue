<template>
  <div class="card col-4 m-auto shadow-sm">
    <div class="card-header">
      <p>Budget List</p>
    </div>
    <div class="card-body">
      <table class="table">
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>

        <tr v-for="item in $store.state.operations" :key="item.id">
          <td>{{ item.type }}</td>
          <td>
            <strong>{{ item.comment }}</strong>
          </td>
          <td v-if="item.type == 'Income'" style="font-weight: 700">
            {{ item.value }}
          </td>
          <td v-if="item.type == 'Outcome'" style="font-weight: 700">
            -{{ item.value }}
          </td>
          <td>
            <button
              class="btn btn-danger btn-sm"
              @click="$store.commit('deleteItem', item.id)"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  background: none;
  border: none;
}

i {
  color: red;
}
button:hover {
  background-color: #cfcfcf;
}
</style>
