<template>
  <AppLayout>
    <div class="space-y-6">
      <div class="animate-fade-up">
        <h1 class="text-2xl font-bold text-foreground mb-2">التقارير</h1>
        <p class="text-muted-foreground">تقارير مالية ومحاسبية متقدمة</p>
      </div>

      <div class="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft border border-border/50 animate-fade-up">
        <Calendar class="h-5 w-5 text-muted-foreground" />
        <div class="flex gap-2 flex-1">
          <button
            v-for="period in ['week', 'month', 'quarter', 'year']"
            :key="period"
            @click="dateRange = period"
            :class="`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              dateRange === period
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`"
          >
            <span v-if="period === 'week'">أسبوع</span>
            <span v-else-if="period === 'month'">شهر</span>
            <span v-else-if="period === 'quarter'">ربع سنة</span>
            <span v-else>سنة</span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-3 animate-fade-up" style="animation-delay: 0.1s">
        <div
          v-for="stat in summaryStats"
          :key="stat.label"
          class="rounded-xl bg-card p-4 shadow-soft border border-border/50 text-center"
        >
          <p class="text-xs text-muted-foreground mb-1">{{ stat.label }}</p>
          <p class="text-xl font-bold text-foreground">{{ stat.value }}</p>
          <span :class="`text-xs ${stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`">
            {{ stat.change }}
          </span>
        </div>
      </div>

      <div class="grid gap-4">
        <RouterLink
          v-for="(type, index) in reportTypes"
          :key="type.path"
          :to="type.path"
          :class="`flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft border border-border/50 card-hover animate-fade-up`"
          :style="{ animationDelay: `${(index + 2) * 0.1}s` }"
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

      <Button
        variant="secondary"
        class="w-full flex items-center justify-center gap-3 animate-fade-up"
        style="animation-delay: 0.5s"
      >
        <Download class="h-5 w-5" />
        تصدير التقارير
      </Button>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { FileText, Wallet, BookOpen, Download, ArrowLeft, Calendar } from 'lucide-vue-next'
import AppLayout from '@/components/layout/AppLayout.vue'
import Button from '@/components/ui/button.vue'

const dateRange = ref('month')

const reportTypes = [
  {
    icon: FileText,
    title: 'تقرير العمليات',
    description: 'جميع العمليات المالية المنفذة',
    path: '/reports/transactions',
    color: 'bg-primary text-primary-foreground',
  },
  {
    icon: Wallet,
    title: 'تقرير الأرصدة',
    description: 'حركة الأرصدة والتغييرات',
    path: '/reports/balances',
    color: 'bg-accent text-accent-foreground',
  },
  {
    icon: BookOpen,
    title: 'العرض المحاسبي',
    description: 'مدين ودائن وميزان المراجعة',
    path: '/reports/accounting',
    color: 'bg-success text-success-foreground',
  },
]

const summaryStats = [
  { label: 'إجمالي العمليات', value: '1,247', change: '+12%' },
  { label: 'إجمالي المبالغ', value: '2.5M', change: '+8%' },
  { label: 'متوسط العملية', value: '2,005', change: '-3%' },
]
</script>

