<template>
  <VoAppBar
    id="app-bar"
    border="b"
    class="px-md-3"
    logo="vuetify"
    flat
  >
    <template #prepend>
      <div class="px-1" />

      <AppBtn
        v-if="route.meta.layout !== 'home' && mdAndDown"
        icon="mdi-menu"
        @click="app.drawer = !app.drawer"
      />

      <AppSearchSearch />
    </template>

    <template #append>
      <template v-if="mdAndUp">
        <AppBarBlogLink />

        <AppBarLearnMenu />

        <AppBarSupportMenu />

        <AppBarEcosystemMenu />

        <AppBarTeamLink v-if="lgAndUp" />

        <AppBarPlaygroundLink v-if="lgAndUp" />

        <AppBarEnterpriseLink />
      </template>

      <AppVerticalDivider v-if="smAndUp" class="ms-3 me-2" />

      <AppBarStoreLink v-if="smAndUp" />

      <AppBarJobsLink v-if="smAndUp" />

      <AppBarLanguageMenu />

      <AppBarSettingsToggle />
    </template>
  </VoAppBar>
</template>

<script setup>
  const app = useAppStore()
  const { smAndUp, lgAndUp, mdAndDown, width } = useDisplay()
  const route = useRoute()

  const mdAndUp = computed(() => width.value >= 1044)
</script>
