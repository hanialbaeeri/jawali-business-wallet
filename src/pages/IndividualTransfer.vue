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
          <h1 class="text-xl font-bold text-foreground">تحويل إلى مشترك</h1>
          <p class="text-sm text-muted-foreground">إرسال أموال فوري</p>
        </div>
      </div>

      <div class="flex items-center justify-between animate-fade-up" style="animation-delay: 0.1s">
        <div v-for="(step, index) in steps" :key="step" class="flex items-center gap-2 flex-1">
          <div
            :class="`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all ${
              index <= currentStep
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-muted-foreground'
            }`"
          >
            <CheckCircle2 v-if="index < currentStep" class="h-5 w-5" />
            <span v-else>{{ index + 1 }}</span>
          </div>
          <span :class="`text-sm ${index <= currentStep ? 'text-foreground' : 'text-muted-foreground'}`">
            {{ step }}
          </span>
          <div
            v-if="index < 2"
            :class="`flex-1 h-1 rounded-full mx-2 ${index < currentStep ? 'bg-primary' : 'bg-secondary'}`"
          />
        </div>
      </div>

      <div
        class="rounded-2xl bg-card p-6 shadow-soft border border-border/50 animate-fade-up"
        style="animation-delay: 0.2s"
      >
        <div v-if="currentStep === 0" class="space-y-5">
          <div class="text-center mb-6">
            <div class="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <User class="h-8 w-8 text-primary" />
            </div>
            <h2 class="text-lg font-semibold text-foreground">معلومات المستلم</h2>
            <p class="text-sm text-muted-foreground">أدخل رقم هاتف أو معرف المستلم</p>
          </div>
          <div class="space-y-2">
            <Label class="text-sm font-medium text-foreground">رقم الهاتف / المعرف</Label>
            <div class="relative">
              <Phone class="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                v-model="recipient"
                type="text"
                placeholder="05xxxxxxxx"
                class="pr-12 pl-4 py-4 text-lg"
              />
            </div>
          </div>
        </div>

        <div v-if="currentStep === 1" class="space-y-5">
          <div class="text-center mb-6">
            <div class="mx-auto h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-3">
              <Wallet class="h-8 w-8 text-accent" />
            </div>
            <h2 class="text-lg font-semibold text-foreground">مبلغ التحويل</h2>
            <p class="text-sm text-muted-foreground">حدد المبلغ المراد تحويله</p>
          </div>
          <div class="space-y-2">
            <Label class="text-sm font-medium text-foreground">المبلغ (ر.س)</Label>
            <Input
              v-model="amount"
              type="number"
              placeholder="0.00"
              class="px-4 py-4 text-3xl text-center font-bold"
            />
          </div>
          <div class="flex gap-2">
            <Button
              v-for="preset in [100, 500, 1000, 5000]"
              :key="preset"
              @click="amount = preset.toString()"
              variant="secondary"
              class="flex-1"
            >
              {{ preset }}
            </Button>
          </div>
        </div>

        <div v-if="currentStep === 2" class="space-y-5">
          <div class="text-center mb-6">
            <div class="mx-auto h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mb-3">
              <Send class="h-8 w-8 text-success" />
            </div>
            <h2 class="text-lg font-semibold text-foreground">تأكيد التحويل</h2>
            <p class="text-sm text-muted-foreground">راجع تفاصيل العملية</p>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between rounded-xl bg-secondary p-4">
              <span class="text-muted-foreground">المستلم</span>
              <span class="font-semibold text-foreground">{{ recipient || 'غير محدد' }}</span>
            </div>
            <div class="flex justify-between rounded-xl bg-secondary p-4">
              <span class="text-muted-foreground">المبلغ</span>
              <span class="font-semibold text-foreground">{{ amount || '0' }} ر.س</span>
            </div>
            <div class="flex justify-between rounded-xl bg-secondary p-4">
              <span class="text-muted-foreground">الرسوم</span>
              <span class="font-semibold text-success">مجاناً</span>
            </div>
            <div class="flex justify-between rounded-xl bg-accent/10 p-4">
              <span class="font-medium text-foreground">الإجمالي</span>
              <span class="text-xl font-bold text-accent">{{ amount || '0' }} ر.س</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-3 animate-fade-up" style="animation-delay: 0.3s">
        <Button
          v-if="currentStep > 0"
          @click="handleBack"
          variant="secondary"
          class="flex-1"
        >
          رجوع
        </Button>
        <Button
          @click="handleNext"
          class="flex-1"
        >
          {{ currentStep === 2 ? 'تأكيد وإرسال' : 'التالي' }}
        </Button>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, User, Phone, Wallet, Send, CheckCircle2 } from 'lucide-vue-next'
import AppLayout from '@/components/layout/AppLayout.vue'
import Button from '@/components/ui/button.vue'
import Input from '@/components/ui/input.vue'
import Label from '@/components/ui/label.vue'

const steps = ['المستلم', 'المبلغ', 'التأكيد']
const currentStep = ref(0)
const recipient = ref('')
const amount = ref('')

const handleNext = () => {
  if (currentStep.value < 2) currentStep.value++
}

const handleBack = () => {
  if (currentStep.value > 0) currentStep.value--
}
</script>

