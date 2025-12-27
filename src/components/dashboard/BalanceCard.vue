<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 relative overflow-hidden rounded-2xl balance-gradient p-8 text-primary-foreground animate-fade-up">
      <div class="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      <div class="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-2xl" />
      <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div class="relative z-10">
        <div class="flex items-start justify-between mb-8">
          <div class="flex items-center gap-4">
            <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Wallet class="h-8 w-8" />
            </div>
            <div>
              <p class="text-primary-foreground/70 text-lg">الرصيد الإجمالي</p>
              <p class="text-4xl font-bold mt-1">
                {{ balance.toLocaleString('ar-SA') }}
                <span class="text-xl mr-2 text-primary-foreground/60">{{ currency }}</span>
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" class="bg-white/20 backdrop-blur-sm hover:bg-white/30">
            <span>تفاصيل الحساب</span>
            <ArrowUpRight class="h-4 w-4" />
          </Button>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center gap-4 rounded-xl bg-white/10 backdrop-blur-sm p-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-success/20">
              <TrendingUp class="h-6 w-6 text-success" />
            </div>
            <div>
              <p class="text-sm text-primary-foreground/60">إجمالي الداخل</p>
              <p class="text-2xl font-bold">+{{ incoming.toLocaleString('ar-SA') }}</p>
            </div>
          </div>
          <div class="flex items-center gap-4 rounded-xl bg-white/10 backdrop-blur-sm p-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/20">
              <TrendingDown class="h-6 w-6 text-destructive" />
            </div>
            <div>
              <p class="text-sm text-primary-foreground/60">إجمالي الخارج</p>
              <p class="text-2xl font-bold">-{{ outgoing.toLocaleString('ar-SA') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <div class="flex-1 rounded-2xl bg-card p-6 shadow-soft border border-border/50 animate-fade-up" style="animation-delay: 0.1s">
        <div class="flex items-center gap-3 mb-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <CreditCard class="h-6 w-6" />
          </div>
          <div>
            <p class="text-sm text-muted-foreground">الحد اليومي المتبقي</p>
            <p class="text-xl font-bold text-foreground">350,000</p>
          </div>
        </div>
        <div class="w-full h-2 rounded-full bg-secondary overflow-hidden">
          <div class="h-full w-[70%] rounded-full bg-accent" />
        </div>
        <p class="text-xs text-muted-foreground mt-2">70% من الحد اليومي متاح</p>
      </div>

      <div class="flex-1 rounded-2xl bg-card p-6 shadow-soft border border-border/50 animate-fade-up" style="animation-delay: 0.15s">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-muted-foreground">عمليات اليوم</p>
            <p class="text-3xl font-bold text-foreground">24</p>
          </div>
          <div class="flex items-center gap-1 text-success text-sm font-medium">
            <TrendingUp class="h-4 w-4" />
            <span>+12%</span>
          </div>
        </div>
        <p class="text-xs text-muted-foreground mt-3">مقارنة بالأمس</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TrendingUp, TrendingDown, Wallet, CreditCard, ArrowUpRight } from 'lucide-vue-next'
import Button from '@/components/ui/button.vue'

interface Props {
  balance: number
  currency?: string
  incoming: number
  outgoing: number
}

withDefaults(defineProps<Props>(), {
  currency: 'ر.س',
})
</script>

