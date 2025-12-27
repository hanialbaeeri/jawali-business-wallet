<template>
  <AppLayout>
    <div class="space-y-6">
      <div class="animate-fade-up">
        <h1 class="text-2xl font-bold text-foreground mb-2">الإعدادات</h1>
        <p class="text-muted-foreground">إدارة النظام وتفضيلات الحساب</p>
      </div>

      <div class="space-y-3">
        <div
          v-for="(section, index) in settingsSections"
          :key="section.id"
          :class="`rounded-2xl bg-card shadow-soft border border-border/50 overflow-hidden animate-fade-up`"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          <button
            @click="openSection = openSection === section.id ? null : section.id"
            class="w-full flex items-center gap-4 p-5 text-right"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <component :is="section.icon" class="h-6 w-6" />
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-foreground">{{ section.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ section.description }}</p>
            </div>
            <ChevronUp v-if="openSection === section.id" class="h-5 w-5 text-muted-foreground" />
            <ChevronDown v-else class="h-5 w-5 text-muted-foreground" />
          </button>
          <div v-if="openSection === section.id" class="border-t border-border animate-scale-in">
            <component :is="section.content" />
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Building2, Users, ShieldCheck, CreditCard, Bell, HelpCircle, ChevronDown, ChevronUp } from 'lucide-vue-next'
import AppLayout from '@/components/layout/AppLayout.vue'

const openSection = ref<string | null>('company')

const settingsSections = [
  {
    id: 'company',
    icon: Building2,
    title: 'معلومات الشركة',
    description: 'بيانات الشركة والتسجيل',
    content: () =>
      h('div', { class: 'space-y-4 p-4' }, [
        h('div', { class: 'space-y-2' }, [
          h('label', { class: 'text-sm font-medium text-foreground' }, 'اسم الشركة'),
          h('input', {
            type: 'text',
            defaultValue: 'شركة التقنية المتقدمة',
            class: 'w-full rounded-xl bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary',
          }),
        ]),
        h('div', { class: 'space-y-2' }, [
          h('label', { class: 'text-sm font-medium text-foreground' }, 'السجل التجاري'),
          h('input', {
            type: 'text',
            defaultValue: '1234567890',
            class: 'w-full rounded-xl bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary',
          }),
        ]),
        h('div', { class: 'space-y-2' }, [
          h('label', { class: 'text-sm font-medium text-foreground' }, 'البريد الإلكتروني'),
          h('input', {
            type: 'email',
            defaultValue: 'info@company.sa',
            class: 'w-full rounded-xl bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary',
          }),
        ]),
      ]),
  },
  {
    id: 'users',
    icon: Users,
    title: 'إدارة المستخدمين',
    description: 'المستخدمين والصلاحيات',
    content: () =>
      h('div', { class: 'space-y-3 p-4' }, [
        ...[
          { name: 'أحمد محمد', role: 'مدير', status: 'نشط' },
          { name: 'سارة أحمد', role: 'محاسب', status: 'نشط' },
          { name: 'خالد علي', role: 'مشغل', status: 'معلق' },
        ].map((user) =>
          h('div', { key: user.name, class: 'flex items-center justify-between rounded-xl bg-secondary p-3' }, [
            h('div', { class: 'flex items-center gap-3' }, [
              h('div', {
                class: 'h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold',
              }, user.name[0]),
              h('div', [
                h('p', { class: 'font-medium text-foreground' }, user.name),
                h('p', { class: 'text-xs text-muted-foreground' }, user.role),
              ]),
            ]),
            h('span', {
              class: `text-xs px-2 py-1 rounded-full ${
                user.status === 'نشط' ? 'bg-success/15 text-success' : 'bg-muted text-muted-foreground'
              }`,
            }, user.status),
          ])
        ),
        h(
          'button',
          {
            class:
              'w-full rounded-xl border-2 border-dashed border-border py-3 text-muted-foreground hover:border-primary hover:text-primary transition-colors',
          },
          '+ إضافة مستخدم جديد'
        ),
      ]),
  },
  {
    id: 'limits',
    icon: CreditCard,
    title: 'الأسقف المالية',
    description: 'حدود التحويلات والعمليات',
    content: () =>
      h('div', { class: 'space-y-4 p-4' }, [
        h('div', { class: 'flex items-center justify-between rounded-xl bg-secondary p-4' }, [
          h('div', [
            h('p', { class: 'font-medium text-foreground' }, 'الحد اليومي'),
            h('p', { class: 'text-sm text-muted-foreground' }, 'الحد الأقصى للتحويلات اليومية'),
          ]),
          h('span', { class: 'text-lg font-bold text-accent' }, '500,000 ر.س'),
        ]),
        h('div', { class: 'flex items-center justify-between rounded-xl bg-secondary p-4' }, [
          h('div', [
            h('p', { class: 'font-medium text-foreground' }, 'الحد الشهري'),
            h('p', { class: 'text-sm text-muted-foreground' }, 'الحد الأقصى للتحويلات الشهرية'),
          ]),
          h('span', { class: 'text-lg font-bold text-accent' }, '5,000,000 ر.س'),
        ]),
        h('div', { class: 'flex items-center justify-between rounded-xl bg-secondary p-4' }, [
          h('div', [
            h('p', { class: 'font-medium text-foreground' }, 'الحد للعملية الواحدة'),
            h('p', { class: 'text-sm text-muted-foreground' }, 'الحد الأقصى لكل تحويل'),
          ]),
          h('span', { class: 'text-lg font-bold text-accent' }, '100,000 ر.س'),
        ]),
      ]),
  },
  {
    id: 'security',
    icon: ShieldCheck,
    title: 'الأمان',
    description: 'إعدادات الأمان والحماية',
    content: () =>
      h('div', { class: 'space-y-4 p-4' }, [
        h('div', { class: 'flex items-center justify-between rounded-xl bg-secondary p-4' }, [
          h('div', [
            h('p', { class: 'font-medium text-foreground' }, 'المصادقة الثنائية'),
            h('p', { class: 'text-sm text-muted-foreground' }, 'حماية إضافية للحساب'),
          ]),
          h('div', { class: 'h-6 w-11 rounded-full bg-success relative cursor-pointer' }, [
            h('div', { class: 'absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform' }),
          ]),
        ]),
        h('div', { class: 'flex items-center justify-between rounded-xl bg-secondary p-4' }, [
          h('div', [
            h('p', { class: 'font-medium text-foreground' }, 'إشعارات الدخول'),
            h('p', { class: 'text-sm text-muted-foreground' }, 'تنبيه عند كل تسجيل دخول'),
          ]),
          h('div', { class: 'h-6 w-11 rounded-full bg-success relative cursor-pointer' }, [
            h('div', { class: 'absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform' }),
          ]),
        ]),
      ]),
  },
  {
    id: 'notifications',
    icon: Bell,
    title: 'الإشعارات',
    description: 'تفضيلات التنبيهات',
    content: () =>
      h('div', { class: 'space-y-4 p-4' }, [
        h('div', { class: 'flex items-center justify-between rounded-xl bg-secondary p-4' }, [
          h('p', { class: 'font-medium text-foreground' }, 'إشعارات التحويلات'),
          h('div', { class: 'h-6 w-11 rounded-full bg-success relative cursor-pointer' }, [
            h('div', { class: 'absolute left-1 top-1 h-4 w-4 rounded-full bg-white' }),
          ]),
        ]),
        h('div', { class: 'flex items-center justify-between rounded-xl bg-secondary p-4' }, [
          h('p', { class: 'font-medium text-foreground' }, 'التقارير الأسبوعية'),
          h('div', { class: 'h-6 w-11 rounded-full bg-muted relative cursor-pointer' }, [
            h('div', { class: 'absolute right-1 top-1 h-4 w-4 rounded-full bg-white' }),
          ]),
        ]),
      ]),
  },
  {
    id: 'help',
    icon: HelpCircle,
    title: 'المساعدة والدعم',
    description: 'تواصل مع فريق الدعم',
    content: () =>
      h('div', { class: 'p-4 text-center space-y-4' }, [
        h('p', { class: 'text-muted-foreground' }, 'هل تحتاج مساعدة؟ فريقنا متاح على مدار الساعة'),
        h(
          'button',
          {
            class:
              'w-full rounded-xl bg-primary py-3 text-primary-foreground font-medium hover:opacity-90 transition-opacity',
          },
          'تواصل معنا'
        ),
      ]),
  },
]
</script>

