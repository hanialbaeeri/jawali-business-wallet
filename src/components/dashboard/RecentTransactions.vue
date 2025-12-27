<template>
  <div
    class="rounded-2xl bg-card shadow-soft border border-border/50 overflow-hidden animate-fade-up"
    style="animation-delay: 0.3s"
  >
    <div class="flex items-center justify-between p-6 border-b border-border/50">
      <div>
        <h2 class="text-xl font-bold text-foreground">آخر العمليات</h2>
        <p class="text-sm text-muted-foreground">أحدث التحويلات والعمليات المالية</p>
      </div>
      <div class="flex items-center gap-2">
        <Button variant="secondary" size="sm">
          <Filter class="h-4 w-4" />
          <span class="text-sm font-medium">فلترة</span>
        </Button>
        <Button variant="secondary" size="sm">
          <Download class="h-4 w-4" />
          <span class="text-sm font-medium">تصدير</span>
        </Button>
      </div>
    </div>

    <div class="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-secondary/30 text-sm font-medium text-muted-foreground">
      <div class="col-span-4">العملية</div>
      <div class="col-span-2">النوع</div>
      <div class="col-span-2">الحالة</div>
      <div class="col-span-2">التاريخ</div>
      <div class="col-span-2 text-left">المبلغ</div>
    </div>

    <div class="divide-y divide-border/50">
      <div
        v-for="tx in transactions"
        :key="tx.id"
        class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-6 hover:bg-secondary/30 transition-colors"
      >
        <div class="col-span-4 flex items-center gap-4">
          <div
            :class="`flex h-12 w-12 items-center justify-center rounded-xl ${
              tx.type === 'incoming'
                ? 'bg-success/15 text-success'
                : 'bg-destructive/15 text-destructive'
            }`"
          >
            <ArrowDownLeft v-if="tx.type === 'incoming'" class="h-6 w-6" />
            <ArrowUpRight v-else class="h-6 w-6" />
          </div>
          <div>
            <p class="font-semibold text-foreground">{{ tx.name }}</p>
            <p class="text-sm text-muted-foreground">{{ tx.description }}</p>
          </div>
        </div>

        <div class="col-span-2 hidden md:block">
          <span class="text-sm text-muted-foreground">
            {{ tx.type === 'incoming' ? 'وارد' : 'صادر' }}
          </span>
        </div>

        <div class="col-span-2 hidden md:block">
          <span :class="`inline-flex px-3 py-1 rounded-full text-xs font-medium ${statusLabels[tx.status].class}`">
            {{ statusLabels[tx.status].label }}
          </span>
        </div>

        <div class="col-span-2 hidden md:block">
          <span class="text-sm text-muted-foreground">{{ tx.date }}</span>
        </div>

        <div class="col-span-2 flex items-center justify-between md:justify-end gap-4">
          <p
            :class="`text-lg font-bold ${
              tx.type === 'incoming' ? 'text-success' : 'text-destructive'
            }`"
          >
            {{ tx.type === 'incoming' ? '+' : '' }}{{ tx.amount.toLocaleString('ar-SA') }}
            <span class="text-xs text-muted-foreground mr-1">ر.س</span>
          </p>
          <button class="p-2 rounded-lg hover:bg-secondary transition-colors">
            <MoreHorizontal class="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>

      <div class="flex items-center justify-center p-4 border-t border-border/50">
        <Button variant="link" size="sm">
          عرض جميع العمليات
        </Button>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRight, ArrowDownLeft, MoreHorizontal, Filter, Download } from 'lucide-vue-next'
import Button from '@/components/ui/button.vue'

const transactions = [
  {
    id: 1,
    type: 'outgoing',
    name: 'محمد أحمد العلي',
    description: 'تحويل إلى مشترك',
    amount: -2500,
    date: 'اليوم، 2:30 م',
    status: 'completed',
  },
  {
    id: 2,
    type: 'incoming',
    name: 'شركة التقنية المتقدمة',
    description: 'استلام حوالة',
    amount: 15000,
    date: 'اليوم، 11:15 ص',
    status: 'completed',
  },
  {
    id: 3,
    type: 'outgoing',
    name: 'فاطمة سعيد',
    description: 'حوالة مالية',
    amount: -5200,
    date: 'أمس، 4:45 م',
    status: 'completed',
  },
  {
    id: 4,
    type: 'incoming',
    name: 'مؤسسة الخير',
    description: 'تحويل وارد',
    amount: 8750,
    date: 'أمس، 9:00 ص',
    status: 'pending',
  },
  {
    id: 5,
    type: 'outgoing',
    name: 'خالد محمود',
    description: 'تحويل جماعي',
    amount: -3300,
    date: '22 ديسمبر',
    status: 'completed',
  },
  {
    id: 6,
    type: 'outgoing',
    name: 'سارة أحمد',
    description: 'تحويل فردي',
    amount: -1800,
    date: '22 ديسمبر',
    status: 'completed',
  },
]

const statusLabels: Record<string, { label: string; class: string }> = {
  completed: { label: 'مكتمل', class: 'bg-success/15 text-success' },
  pending: { label: 'قيد المعالجة', class: 'bg-accent/15 text-accent' },
  failed: { label: 'فشل', class: 'bg-destructive/15 text-destructive' },
}
</script>

