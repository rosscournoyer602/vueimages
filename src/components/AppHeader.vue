<template>
  <div>
    <div class="ui secondary pointing menu">
      <a href="/" class="active item">
        Image Storage
      </a>
      <div class="right menu" v-if="isLoggedIn">
        <a class="ui item">
          Gallery
        </a>
        <a class="ui item">
          Upload
        </a>
        <a href="/" class="ui item" @click="logout">
          Logout
        </a>
      </div>
    <div class="right menu" v-else>
      <a class="ui item" @click="login">
        Login
      </a>
    </div>
    </div>
    <!-- <div class="ui segment">
      <p></p>
    </div> -->
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout'])
  };
</script>

<style>

</style>
