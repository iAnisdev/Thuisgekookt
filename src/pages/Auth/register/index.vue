<template>
  <section>
    <authNavbar :showBack="showBack" :title="headerTitle" />
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>
<script lang="ts">
import authNavbar from "@/components/shared/authNavbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "register",
  components: {
    authNavbar,
  },
  computed: {
    showBack() {
      let showRoutes = ["kwetsbaar", "bevestiging"];
      return showRoutes.indexOf(this.$route.name) !== -1;
    },
    headerTitle() {
      let showRoutes = ["kwetsbaar", "bevestiging"];
      return showRoutes.indexOf(this.$route.name) === -1 ? "Een thuiskok zoeken" : "Regelmatige Maaltijdservice +";
    },
  },
});
</script>
