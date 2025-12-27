# جـوالي أعـمال | Jawali Business Wallet

نظام محفظة تجارية احترافي للشركات والمؤسسات. يوفر تحويلات فورية، تقارير مالية متقدمة، وإدارة مالية ذكية.

A professional business wallet system for companies and institutions. Provides instant transfers, advanced financial reports, and smart financial management.

## 🚀 Features

### Core Features
- 💰 **Balance Management** - Real-time balance tracking with incoming/outgoing transactions
- 🔄 **Money Transfers** - Individual and bulk transfer capabilities
- 📊 **Financial Reports** - Comprehensive financial analytics and charts
- ⚙️ **Settings Management** - User and system configuration
- 📱 **Responsive Design** - Fully responsive UI for all devices
- 🌙 **Dark Mode Support** - Built-in dark mode support

### Pages
- **Dashboard** - Overview of balance, transactions, and financial activity
- **Transfers** - Transfer management and history
- **Individual Transfer** - Single transfer interface
- **Bulk Transfer** - Multiple transfers at once
- **Reports** - Financial reports and analytics
- **Settings** - System and user settings

## 🛠️ Tech Stack

### Frontend
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Vue Router** - Official router for Vue.js
- **TanStack Vue Query** - Powerful data synchronization for Vue

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI (Vue)** - Beautiful component library
- **Lucide Vue Next** - Icon library
- **ApexCharts** - Modern charting library
- **Vue Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vue TSC** - TypeScript checking for Vue files

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone <repository-url>
cd jawali-business-wallet-main
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The application will be available at `http://localhost:5333`

## 🏗️ Project Structure

```
src/
├── components/          # Vue components
│   ├── dashboard/      # Dashboard components
│   ├── layout/         # Layout components (Header, AppLayout)
│   └── ui/             # UI components (Shadcn Vue)
├── hooks/              # Vue composables
├── pages/              # Page components
├── router/             # Vue Router configuration
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── App.vue             # Root component
└── main.ts             # Application entry point
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 UI Components

The project uses a comprehensive set of UI components based on Shadcn UI:

- **Forms**: Input, Label, Textarea, Select, Checkbox, Switch, Radio Group
- **Layout**: Card, Separator, Sheet, Dialog, Popover
- **Navigation**: Breadcrumb, Tabs, Pagination
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Data Display**: Table, Badge, Avatar
- **Charts**: Activity Chart (ApexCharts)

## 🔧 Configuration

### Vite Configuration
- Server runs on port `5333`
- Path alias `@` points to `./src`
- Vue plugin configured for SFC support

### Tailwind Configuration
- Custom color scheme with CSS variables
- RTL (Right-to-Left) support for Arabic
- Custom animations and utilities
- Cairo font family integration

## 🌐 Internationalization

The application is designed with Arabic (RTL) support:
- RTL layout support
- Arabic typography (Cairo font)
- Arabic number formatting
- RTL-optimized UI components

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 🔐 Features in Detail

### Dashboard
- Real-time balance display
- Quick action buttons
- Financial activity chart
- Recent transactions list

### Transfers
- Individual transfer form
- Bulk transfer capability
- Transfer history
- Transaction filtering

### Reports
- Financial analytics
- Transaction reports
- Export capabilities
- Date range filtering

### Settings
- User management
- System preferences
- Notification settings
- Security options

## 🚧 Development

### Adding New Components
1. Create component in appropriate directory
2. Use TypeScript for type safety
3. Follow Vue 3 Composition API patterns
4. Use Tailwind CSS for styling
5. Ensure RTL support for Arabic text

### Code Style
- Use TypeScript strict mode
- Follow Vue 3 best practices
- Use Composition API with `<script setup>`
- Follow ESLint rules

## 📄 License

This project is private and proprietary.

## 👥 Contributors

- Jawali Business Team

## 📞 Support

For support and inquiries, please contact the development team.

---

**Built with ❤️ using Vue 3 + TypeScript + Tailwind CSS**

