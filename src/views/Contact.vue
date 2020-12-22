<template>
<div class="w3-center">
  <form  target="_blank">
  <div class="w3-center">
    <p>
      <input
        class="w3-input w3-border w3-round"
        type="text"
        placeholder="Name"
        required
        name="Name"
      />
    </p>
    <p>
      <input
        class="w3-input w3-border w3-round"
        type="text"
        placeholder="Email"
        required
        name="Email"
      />
    </p>
    <p>
      <input
        class="w3-input  w3-border w3-round"
        type="text"
        placeholder="Subject"
        required
        name="Subject"
      />
    </p>
    <p>
      <input
        class="w3-input w3-border w3-round"
        type="text"
        placeholder="Message"
        required
        name="Message"
      />
    </p>
  </div>
    
    <p>
      <button class="w3-button w3-border w3-black" type="submit">
        <i class="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </p>
  </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script> 

<style scoped>

input {
  margin:10px;
  width:60%;
}
</style>