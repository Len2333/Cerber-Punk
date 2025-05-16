<template>
  <div class="cyberpunk-content">
    <img src="@/assets/start.jpg" alt="Start Image" class="main-image">
    <h1>Cerber Police</h1>
    <div class="nav-sidebar">
      <router-link to="/life-load" class="nav-link">载入人生</router-link>
      <router-link to="/new-start" class="nav-link">新的开始</router-link>
      <router-link to="/honor-wall" class="nav-link">荣誉台</router-link>
    </div>
  </div>
</template>


<style scoped>
.cyberpunk-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.main-image {
  max-width: 100%;
  max-height: 60vh;
  object-fit: contain;
  margin-bottom: 2rem;
}

h1 {
  color: #0ff;
  text-shadow: 0 0 5px #0ff;
  font-size: clamp(1.5rem, 5vw, 3rem);
}

p {
  color: #f0f;
  font-size: clamp(1rem, 3vw, 1.5rem);
}

.nav-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.nav-link {
  color: #0ff;
  text-decoration: none;
  border: 1px solid #0ff;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  transition: all 0.3s;
  display: block;
  text-align: center;
}

.nav-link:hover {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 10px #0ff;
}

@media (max-width: 768px) {
  .main-image {
    max-height: 50vh;
  }
  
  .nav-sidebar {
    width: 100%;
  }
}
</style>
