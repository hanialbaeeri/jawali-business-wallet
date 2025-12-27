<template>
  <div class="animate-fade-up" style="animation-delay: 0.2s">
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-xl font-bold text-foreground">إجراءات سريعة</h2>
      <Button variant="link" size="sm">
        <Plus class="h-4 w-4" />
        إجراء جديد
      </Button>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <RouterLink
        v-for="(action, index) in actions"
        :key="action.path"
        :to="action.path"
        :class="`group flex flex-col rounded-2xl bg-card p-6 shadow-soft border border-border/50 card-hover`"
        :style="{ animationDelay: `${(index + 3) * 0.05}s` }"
      >
        <div
          :class="`flex h-14 w-14 items-center justify-center rounded-xl ${action.color} transition-transform group-hover:scale-110 mb-4`"
        >
          <component :is="action.icon" class="h-7 w-7" />
        </div>
        <h3 class="font-semibold text-foreground mb-1">{{ action.label }}</h3>
        <p class="text-sm text-muted-foreground">{{ action.description }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Send, Users, Globe, ArrowDownLeft, Plus } from 'lucide-vue-next'
import Button from '@/components/ui/button.vue'

const actions = [
  {
    icon: Send,
    label: 'تحويل فردي',
    description: 'إرسال أموال لمشترك',
    path: '/transfers/individual',
    color: 'bg-primary text-primary-foreground',
  },
  {
    icon: Users,
    label: 'تحويل جماعي',
    description: 'تحويل لعدة مستلمين',
    path: '/transfers/bulk',
    color: 'bg-accent text-accent-foreground',
  },
  {
    icon: Globe,
    label: 'حوالة مالية',
    description: 'تحويل محلي ودولي',
    path: '/transfers/remittance',
    color: 'bg-success text-success-foreground',
  },
  {
    icon: ArrowDownLeft,
    label: 'طلب تحويل',
    description: 'استلام أموال',
    path: '/transfers/request',
    color: 'bg-secondary text-secondary-foreground',
  },
]
</script>

