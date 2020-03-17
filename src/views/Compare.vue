<template>
<div>
  <h1>Compare:</h1>
  <p v-if = "noCharacter">Please select atleast one character</p>
  <CompareList :selectedCharacters="selectedCharacters" />
</div>
</template>

<script>
import CompareList from "../components/CompareList.vue"
export default {
  name: 'Home',
  components: {
    CompareList
  },
  data() {
    return {
    }
  },
  computed: {
    selectedCharacters() {
      return this.$root.$data.selectedCharacters;
    },
    noCharacter() {
      return this.$root.$data.selectedCharacters.length == 0;
    }
  },
}
</script>

<style scoped>
h1 {
  color: #000000;
  font-size: 50px;
}
p {
  color: #cc3300;
  font-size: 20px;
  text-align: center;
}
</style>
