<template lang="">
  <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="/public/graph.png"
          alt="Logo"
          width="30"
          height="30"
          class="d-inline-block align-text-top ms-2 me-3"
        />
        Statistics
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"> Inicio </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {}
</script>
<style>
nav {
  background-color: #1e378a !important;
}
</style>
