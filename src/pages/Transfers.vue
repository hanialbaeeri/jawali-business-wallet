<template>
  <AppLayout>
    <div class="space-y-6">
      <div class="animate-fade-up">
        <h1 class="text-2xl font-bold text-foreground mb-2">التحويلات</h1>
        <p class="text-muted-foreground">اختر نوع التحويل المناسب لاحتياجاتك</p>
      </div>

      <div class="grid gap-4">
        <RouterLink
          v-for="(type, index) in transferTypes"
          :key="type.path"
          :to="type.path"
          :class="`flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft border border-border/50 card-hover animate-fade-up`"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div :class="`flex h-14 w-14 items-center justify-center rounded-xl ${type.color}`">
            <component :is="type.icon" class="h-7 w-7" />
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-foreground">{{ type.title }}</h3>
            <p class="text-sm text-muted-foreground">{{ type.description }}</p>
          </div>
          <ArrowLeft class="h-5 w-5 text-muted-foreground" />
        </RouterLink>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Send, Users, Globe, ArrowLeft } from 'lucide-vue-next'
import AppLayout from '@/components/layout/AppLayout.vue'

const transferTypes = [
  {
    icon: Send,
    title: 'تحويل إلى مشترك',
    description: 'إرسال أموال فوري لمشتركي جوالي',
    path: '/transfers/individual',
    color: 'bg-primary text-primary-foreground',
  },
  {
    icon: Globe,
    title: 'حوالات مالية',
    description: 'إرسال حوالات محلية ودولية',
    path: '/transfers/remittance',
    color: 'bg-accent text-accent-foreground',
  },
  {
    icon: Users,
    title: 'تحويل جماعي للمشتركين',
    description: 'إرسال أموال لعدة مشتركين دفعة واحدة',
    path: '/transfers/bulk',
    color: 'bg-success text-success-foreground',
  },
  {
    icon: Globe,
    title: 'حوالات جماعية',
    description: 'إرسال حوالات متعددة في عملية واحدة',
    path: '/transfers/bulk-remittance',
    color: 'bg-secondary text-secondary-foreground',
  },
]
</script>

