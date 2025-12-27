<template>
  <header class="sticky top-0 z-50 bg-card border-b border-border/50 shadow-soft">
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 gap-2 sm:gap-3 md:gap-4">
      <div class="flex items-center gap-1.5 sm:gap-2 md:gap-4 min-w-0 flex-shrink-0 max-w-[45%] sm:max-w-[50%] md:max-w-none">
        <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div class="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl balance-gradient">
            <span class="text-base sm:text-lg font-bold text-primary-foreground">ج</span>
          </div>
          <div class="flex flex-col hidden sm:flex">
            <span class="text-base sm:text-lg font-bold text-foreground">جـوالي</span>
            <span class="text-xs font-semibold text-accent">أعـمال</span>
          </div>
        </div>
        
        <div class="h-8 w-px bg-border/50 mx-1 sm:mx-2 md:mx-4 hidden sm:block" />
        
        <div class="flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg bg-secondary/50 border border-border/30 flex-shrink-0 min-w-0 max-w-[140px] sm:max-w-[180px] md:max-w-none">
          <Building2 class="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
          <span class="text-[10px] sm:text-xs md:text-sm font-medium text-foreground whitespace-nowrap truncate">شركة التقنية المتقدمة</span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-shrink-0 min-w-0 flex-1 justify-end">
        <div :class="`relative transition-all duration-300 hidden md:block flex-shrink-0 max-w-[180px] lg:max-w-[220px] xl:max-w-[260px] ${searchFocused ? 'w-44 lg:w-52 xl:w-60' : 'w-36 lg:w-44 xl:w-52'}`">
          <Search class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
          <input
            type="text"
            placeholder="بحث..."
            @focus="searchFocused = true"
            @blur="searchFocused = false"
            class="w-full h-9 sm:h-10 pr-10 pl-4 rounded-xl bg-secondary/50 border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
          />
        </div>

        <button class="md:hidden p-2 rounded-xl bg-secondary/50 border border-border/30 hover:bg-secondary transition-colors">
          <Search class="h-5 w-5 text-muted-foreground" />
        </button>

        <div class="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-primary/10 border border-primary/20">
          <span class="text-xs sm:text-sm text-muted-foreground hidden lg:inline">الرصيد:</span>
          <span class="text-base sm:text-lg font-bold text-primary whitespace-nowrap">125,750.50</span>
          <span class="text-xs sm:text-sm text-primary hidden sm:inline">ر.س</span>
        </div>

        <button class="relative p-2 sm:p-2.5 rounded-xl bg-secondary/50 border border-border/30 hover:bg-secondary transition-colors">
          <Bell class="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
          <span class="absolute -top-1 -left-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-accent text-[10px] font-bold text-accent-foreground flex items-center justify-center">
            3
          </span>
        </button>

        <div class="relative">
          <button
            @click="userMenuOpen = !userMenuOpen"
            class="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-xl hover:bg-secondary/50 transition-colors"
          >
            <Avatar class="h-8 w-8 sm:h-9 sm:w-9 border-2 border-primary/20 flex-shrink-0">
              <AvatarFallback class="bg-primary/10 text-primary font-semibold text-xs sm:text-sm">
                أم
              </AvatarFallback>
            </Avatar>
            <div class="flex flex-col items-start hidden sm:flex">
              <span class="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">أحمد محمد</span>
              <span class="text-xs text-muted-foreground whitespace-nowrap">مدير النظام</span>
            </div>
            <ChevronDown class="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground hidden sm:block flex-shrink-0" />
          </button>
          <div
            v-if="userMenuOpen"
            class="absolute left-0 mt-2 w-48 rounded-md border bg-popover p-1 shadow-md z-50"
            @click.stop
          >
            <div class="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-accent cursor-pointer">
              <Settings class="h-4 w-4" />
              <span>الإعدادات</span>
            </div>
            <div class="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-accent cursor-pointer">
              <HelpCircle class="h-4 w-4" />
              <span>المساعدة</span>
            </div>
            <div class="-mx-1 my-1 h-px bg-muted" />
            <div class="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-accent cursor-pointer text-destructive">
              <LogOut class="h-4 w-4" />
              <span>تسجيل الخروج</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="flex items-center gap-2 px-4 sm:px-6 lg:px-8 pb-4 overflow-x-auto scrollbar-hide">
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="`flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
          $route.path === item.path
            ? 'bg-primary text-primary-foreground shadow-soft'
            : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
        }`"
      >
        <component :is="item.icon" class="h-4 w-4 flex-shrink-0" />
        <span class="text-xs sm:text-sm">{{ item.label }}</span>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  LayoutDashboard,
  ArrowLeftRight,
  FileText,
  Settings,
  Building2,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  HelpCircle,
} from 'lucide-vue-next'
import Avatar from '@/components/ui/avatar.vue'
import AvatarFallback from '@/components/ui/avatar-fallback.vue'

const route = useRoute()
const searchFocused = ref(false)
const userMenuOpen = ref(false)

const navItems = [
  { path: '/', label: 'لوحة التحكم', icon: LayoutDashboard },
  { path: '/transfers', label: 'التحويلات', icon: ArrowLeftRight },
  { path: '/reports', label: 'التقارير', icon: FileText },
  { path: '/settings', label: 'الإعدادات', icon: Settings },
]

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    userMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
