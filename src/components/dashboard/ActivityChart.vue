<template>
  <div
    class="rounded-2xl bg-card p-6 shadow-soft border border-border/50 animate-fade-up"
    style="animation-delay: 0.25s"
  >
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
      <div>
        <h2 class="text-xl font-bold text-foreground">الحركة المالية</h2>
        <p class="text-sm text-muted-foreground">تحليل التدفقات المالية</p>
      </div>
      <div class="flex items-center gap-6">
        <div class="hidden md:flex items-center gap-6">
          <div class="flex items-center gap-2">
            <div class="h-3 w-3 rounded-full bg-success" />
            <span class="text-sm text-muted-foreground">الداخل:</span>
            <span class="font-semibold text-foreground">{{ totalIncoming.toLocaleString('ar-SA') }}</span>
            <TrendingUp class="h-4 w-4 text-success" />
          </div>
          <div class="flex items-center gap-2">
            <div class="h-3 w-3 rounded-full bg-destructive" />
            <span class="text-sm text-muted-foreground">الخارج:</span>
            <span class="font-semibold text-foreground">{{ totalOutgoing.toLocaleString('ar-SA') }}</span>
            <TrendingDown class="h-4 w-4 text-destructive" />
          </div>
        </div>
        <div class="flex gap-1 rounded-xl bg-secondary p-1">
          <Button
            v-for="p in (Object.keys(periodLabels) as Period[])"
            :key="p"
            @click="period = p"
            :variant="period === p ? 'default' : 'ghost'"
            size="sm"
          >
            {{ periodLabels[p] }}
          </Button>
        </div>
      </div>
    </div>

    <div class="h-72">
      <apexchart
        type="area"
        height="100%"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { TrendingUp, TrendingDown } from 'lucide-vue-next'
import Button from '@/components/ui/button.vue'

type Period = 'daily' | 'weekly' | 'monthly'

const periodLabels: Record<Period, string> = {
  daily: 'يومي',
  weekly: 'أسبوعي',
  monthly: 'شهري',
}

const dailyData = [
  { name: 'السبت', incoming: 4000, outgoing: 2400 },
  { name: 'الأحد', incoming: 3000, outgoing: 1398 },
  { name: 'الاثنين', incoming: 2000, outgoing: 9800 },
  { name: 'الثلاثاء', incoming: 2780, outgoing: 3908 },
  { name: 'الأربعاء', incoming: 1890, outgoing: 4800 },
  { name: 'الخميس', incoming: 2390, outgoing: 3800 },
  { name: 'الجمعة', incoming: 3490, outgoing: 4300 },
]

const weeklyData = [
  { name: 'الأسبوع 1', incoming: 24000, outgoing: 18000 },
  { name: 'الأسبوع 2', incoming: 28000, outgoing: 22000 },
  { name: 'الأسبوع 3', incoming: 32000, outgoing: 19000 },
  { name: 'الأسبوع 4', incoming: 26000, outgoing: 24000 },
]

const monthlyData = [
  { name: 'يناير', incoming: 120000, outgoing: 95000 },
  { name: 'فبراير', incoming: 98000, outgoing: 88000 },
  { name: 'مارس', incoming: 145000, outgoing: 102000 },
  { name: 'أبريل', incoming: 132000, outgoing: 115000 },
  { name: 'مايو', incoming: 155000, outgoing: 128000 },
  { name: 'يونيو', incoming: 142000, outgoing: 118000 },
]

const dataMap: Record<Period, typeof dailyData> = {
  daily: dailyData,
  weekly: weeklyData,
  monthly: monthlyData,
}

const period = ref<Period>('daily')
const data = computed(() => dataMap[period.value])
const totalIncoming = computed(() => data.value.reduce((sum, item) => sum + item.incoming, 0))
const totalOutgoing = computed(() => data.value.reduce((sum, item) => sum + item.outgoing, 0))

const series = computed(() => [
  {
    name: 'الداخل',
    data: data.value.map(item => item.incoming),
  },
  {
    name: 'الخارج',
    data: data.value.map(item => item.outgoing),
  },
])

const chartOptions = computed(() => ({
  chart: {
    type: 'area',
    toolbar: { show: false },
    fontFamily: 'Cairo, sans-serif',
  },
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 2.5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.3,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  colors: ['hsl(142, 76%, 36%)', 'hsl(0, 84%, 60%)'],
  xaxis: {
    categories: data.value.map(item => item.name),
    labels: {
      style: {
        colors: 'hsl(var(--muted-foreground))',
        fontSize: '12px',
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      style: {
        colors: 'hsl(var(--muted-foreground))',
        fontSize: '12px',
      },
      formatter: (value: number) => `${(value / 1000).toFixed(0)}K`,
    },
  },
  grid: {
    borderColor: 'hsl(var(--border))',
    strokeDashArray: 3,
    xaxis: { lines: { show: false } },
  },
  tooltip: {
    theme: 'light',
    style: {
      fontFamily: 'Cairo, sans-serif',
    },
    y: {
      formatter: (value: number) => `${value.toLocaleString('ar-SA')} ر.س`,
    },
  },
  legend: {
    show: false,
  },
}))
</script>
