<template>
  <section>
    <authNavbar :showBack="showBack" :title="headerTitle" />
    <div class="container">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
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
  data() {
    return {
      transitionName: "",
    };
  },
  computed: {
    showBack() {
      let currentRoute: any = this.$route.name;
      let showRoutes = ["aanbod" , "kwetsbaar", "bevestiging"];
      return showRoutes.indexOf(currentRoute) !== -1;
    },
    headerTitle() {
      let currentRoute: any = this.$route.name || "none";
      let showRoutes = ["kwetsbaar", "bevestiging"];
      return showRoutes.indexOf(currentRoute) === -1
        ? "Een thuiskok zoeken"
        : "Regelmatige Maaltijdservice +";
    },
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    },
  },
});
</script>
