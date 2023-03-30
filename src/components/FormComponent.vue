<template>
  <div class="row">
    <div class="col-4 card d-flex flex-column m-auto mb-3 shadow-sm">
      <form class="card-body">
        <div class="mb-3">
          <label for="type" class="form-label">Type</label>
          <select
            name="type"
            id="type"
            class="form-select"
            v-model="type"
            required
          >
            <option value="Income">Income</option>
            <option value="Outcome">Outcome</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="value" class="form-label">Comments</label>
          <input
            type="text"
            class="form-control"
            id="value"
            v-model="comment"
            required
          />
        </div>
        <div class="mb-3">
          <label for="value" class="form-label">Value</label>
          <input
            type="number"
            class="form-control"
            id="value"
            v-model="value"
            required
          />
        </div>
        <button
          @click.prevent="
            $store.dispatch('addItem', {
              id: Math.ceil(Math.random() * 1000),
              type: this.type,
              comment: this.comment,
              value: this.value,
            })
          "
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      comment: "",
      value: 0,
    };
  },
};
</script>

<style></style>
