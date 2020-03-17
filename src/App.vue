<template>
<div id="app">
  <div id="menu">
  <div class="home">
  <router-link to="/">
    <img src="/images/smashorb.jpg">
    <p>Home</p>
  </router-link>
  </div>
    <div id="brand">
      <router-link to="/">
        <img src="/images/smashorb.jpg">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/singleCharStats">
        <div class="menu-item stats">
          <img src="/images/mario.jpg">
          <p>Single Character Stats</p>
        </div>
      </router-link>
      <router-link to="/compare">
        <div class="menu-item">
          <img src="/images/mariovbowser.jpg">
          <p>Compare</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: right;
}

#side img {
  height: 75px;
}
.home img {
  height: 75px;
  border: 2px solid #333;
}
.home {
  justify-content: left;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.stats {
  margin-right: 50px;
}
</style>
