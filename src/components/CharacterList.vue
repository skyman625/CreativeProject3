<template>
<div class="wrapper">
  <div class="chars">
    <div class="character" v-for="character in chars" :key="character.id">
      <div class="info">
        <h1>{{character.name}}</h1>
        <p><strong>Weight: </strong>{{character.weight}}</p>
        <p><strong>Air Speed: </strong>{{character.airSpeed}}</p>
        <p><strong>Fall Speed: </strong>{{character.fallSpeed}}</p>
        <p><strong>Run Speed: </strong>{{character.runSpeed}}</p>
        <p><strong>Dash Speed: </strong>{{character.dashSpeed}}</p>
      </div>
      <div class="image">
        <img :src="'/images/smash/'+character.image">
      </div>
      <div class="select">
        <button v-on:click="selectCharacter(character)">Select</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CharacterList',
  props: {
    chars: Array
  },
  methods: {
    selectCharacter: function(character) {
    if(this.$root.$data.selectedCharacters.length == 1) {
      if(this.$root.$data.selectedCharacters[0].name != character.name) {
        this.$root.$data.selectedCharacters.push(character);
        }
      }
      else if(this.$root.$data.selectedCharacters.length == 2) {
        if(this.$root.$data.selectedCharacters[1].name != character.name) {
          this.$root.$data.selectedCharacters.push(character);
        }
      }
      else {
        this.$root.$data.selectedCharacters.push(character);
      }
      if(this.$root.$data.selectedCharacters.length == 3) {
        this.$root.$data.selectedCharacters.splice(0, 1);
      }
    }
  },
  }
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.chars {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.character {
  margin: 10px;
  margin-top: 50px;
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

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.select {
  display: flex;
}

button {
  height: 50px;
  width: 200px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
