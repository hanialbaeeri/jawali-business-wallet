<template>
  <AppLayout>
    <div class="space-y-8">
      <BalanceCard
        :balance="125750.50"
        :incoming="45200"
        :outgoing="28500"
      />
      <QuickActions />
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ActivityChart />
        <RecentTransactions />
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
import BalanceCard from '@/components/dashboard/BalanceCard.vue'
import QuickActions from '@/components/dashboard/QuickActions.vue'
import ActivityChart from '@/components/dashboard/ActivityChart.vue'
import RecentTransactions from '@/components/dashboard/RecentTransactions.vue'
</script>

