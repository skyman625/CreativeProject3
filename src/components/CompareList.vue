<template>
<div class="wrapper">
  <div class="selectedCharacters">
    <div class="character" v-for="character in selectedCharacters" :key="character.id">
    <div class="info">
      <h2>{{character.name}}</h2>
      <p><strong>Weight: </strong>{{character.weight}}</p>
      <p><strong>Air Speed: </strong>{{character.airSpeed}}</p>
      <p><strong>Fall Speed: </strong>{{character.fallSpeed}}</p>
      <p><strong>Run Speed: </strong>{{character.runSpeed}}</p>
      <p><strong>Dash Speed: </strong>{{character.dashSpeed}}</p>
    </div>
    <div class="image">
      <img :src="'/images/smash/'+character.image">
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CompareList',
  props: {
    selectedCharacters: Array
  },
  methods: {

  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.selectedCharacters {
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.character {
  margin: 10px;
  margin-top: 20px;
  width: 200px;
}

.character img {
  border: 2px solid #333;
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.character .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #EE0000;
  color: #000;
  padding: 10px 30px;
  height: 130px;
}

.info h2 {
  font-size: 16px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  width: 200px;
  background: #000;
  color: white;
  border: none;
}
h1 {

}

.auto {
  margin-left: auto;
}
</style>
