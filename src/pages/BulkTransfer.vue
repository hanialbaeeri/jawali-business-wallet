<template>
  <AppLayout>
    <div class="space-y-6">
      <div class="flex items-center gap-4 animate-fade-up">
        <RouterLink
          to="/transfers"
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground"
        >
          <ArrowRight class="h-5 w-5" />
        </RouterLink>
        <div>
          <h1 class="text-xl font-bold text-foreground">تحويل جماعي</h1>
          <p class="text-sm text-muted-foreground">إرسال أموال لعدة مستلمين</p>
        </div>
      </div>

      <div
        class="rounded-2xl bg-card p-6 shadow-soft border border-border/50 animate-fade-up"
        style="animation-delay: 0.1s"
      >
        <div class="text-center mb-4">
          <div class="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <FileSpreadsheet class="h-7 w-7 text-primary" />
          </div>
          <h2 class="text-lg font-semibold text-foreground">رفع ملف التحويلات</h2>
          <p class="text-sm text-muted-foreground">ارفع ملف Excel أو CSV يحتوي على بيانات المستلمين</p>
        </div>
        <label class="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border py-8 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
          <Upload class="h-8 w-8 text-muted-foreground mb-2" />
          <span class="text-sm text-muted-foreground">اسحب الملف هنا أو اضغط للرفع</span>
          <span class="text-xs text-muted-foreground mt-1">xlsx, csv</span>
          <input
            type="file"
            class="hidden"
            accept=".xlsx,.csv"
            @change="handleFileChange"
          />
        </label>
      </div>

      <div
        class="rounded-2xl bg-card shadow-soft border border-border/50 overflow-hidden animate-fade-up"
        style="animation-delay: 0.2s"
      >
        <div class="flex items-center justify-between p-4 border-b border-border">
          <div class="flex items-center gap-2">
            <Users class="h-5 w-5 text-primary" />
            <span class="font-semibold text-foreground">معاينة البيانات</span>
          </div>
          <span class="text-sm text-muted-foreground">{{ preview.length }} مستلم</span>
        </div>
        <div class="divide-y divide-border">
          <div
            v-for="(item, index) in preview"
            :key="index"
            class="flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-full bg-success/15 flex items-center justify-center">
                <CheckCircle2 class="h-5 w-5 text-success" />
              </div>
              <div>
                <p class="font-medium text-foreground">{{ item.name }}</p>
                <p class="text-xs text-muted-foreground">{{ item.phone }}</p>
              </div>
            </div>
            <span class="font-semibold text-foreground">{{ item.amount.toLocaleString('ar-SA') }} ر.س</span>
          </div>
        </div>
      </div>

      <div class="rounded-2xl bg-accent/10 p-5 animate-fade-up" style="animation-delay: 0.3s">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-muted-foreground">إجمالي التحويلات</p>
            <p class="text-2xl font-bold text-accent">{{ totalAmount.toLocaleString('ar-SA') }} ر.س</p>
          </div>
          <div class="text-left">
            <p class="text-sm text-muted-foreground">عدد المستلمين</p>
            <p class="text-2xl font-bold text-foreground">{{ preview.length }}</p>
          </div>
        </div>
      </div>

      <Button
        class="w-full animate-fade-up"
        style="animation-delay: 0.4s"
      >
        تنفيذ التحويل الجماعي
      </Button>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, Upload, Users, FileSpreadsheet, CheckCircle2 } from 'lucide-vue-next'
import AppLayout from '@/components/layout/AppLayout.vue'
import Button from '@/components/ui/button.vue'

const file = ref<File | null>(null)
const preview = ref([
  { name: 'أحمد محمد', phone: '0501234567', amount: 1500 },
  { name: 'سارة أحمد', phone: '0559876543', amount: 2000 },
  { name: 'خالد علي', phone: '0512345678', amount: 1750 },
  { name: 'فاطمة سعيد', phone: '0541234567', amount: 3000 },
])

const totalAmount = computed(() => preview.value.reduce((sum, item) => sum + item.amount, 0))

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  file.value = target.files?.[0] || null
}
</script>

