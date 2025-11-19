# AKIRO — AI Learning Companion

A responsive React + Tailwind frontend prototype for an AI-powered educational platform that adapts to different learning levels and career paths.

## 🎯 Features

### Multi-Level Education Support
- **High School**: Subject-focused learning with systematic roadmaps
- **Undergraduate**: Tech vs Non-Tech career pathways  
- **Graduate**: Government exam preparation tracks

### Core Components
- **Smart Onboarding**: Progressive form with education-based routing
- **Dynamic Dashboards**: Tailored content based on education level
- **Interactive Timeline**: Progress tracking with quizzes and assignments
- **24/7 AI Chatbot**: Always-available learning support
- **Job Portal**: Tech career opportunities for graduates
- **Calendar Integration**: Study schedule and deadline management

## 🎨 Design System

### Color Palette
- **Primary**: #2563EB (Bright Blue) - Main actions and branding
- **Accent**: #10B981 (Green) - Progress indicators and success states
- **Warning**: #F59E0B (Amber) - Highlights and alerts
- **Background**: #F9FAFB (Soft Gray) - Clean, educational backdrop
- **Text**: #111827 (Slate Black) - High contrast readability

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive**: Mobile-first approach with fluid scaling
- **Accessibility**: High contrast ratios and readable sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [your-repo-url]
cd akiro-learning-companion

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Server
Visit `http://localhost:8080` to view the application.

## 📱 User Flows

### 1. High School Flow
1. **Login** → Select "High School"
2. **Dashboard** opens with:
   - Left sidebar: Important subjects (Math, Physics, Chemistry, etc.)
   - Center: Systematic learning roadmap with quizzes/assignments
   - Right sidebar: Calendar widget with upcoming events
   - Header: Previous papers and 24x7 support access

### 2. Undergraduate Flow
1. **Login** → Select "Undergraduate"  
2. **Confirmation Page** → Enter college details
3. **Dashboard** routes based on degree:
   - **Tech (B.Tech/BCA)**: Job portal with MERN, Java, AI/ML opportunities
   - **Non-Tech (BBA/B.Com/BA)**: Skill roadmaps for HR, Accounting, MS Tools

### 3. Graduate Flow
1. **Login** → Select "Graduate"
2. **Confirmation Page** → Enter master's details  
3. **Dashboard** → Government exam preparation with:
   - Aptitude, Reasoning, and Verbal Ability tracks
   - Weekly quiz assignments with progress tracking
   - Study schedule and achievement system

## 🧩 Component Architecture

```
src/
├── components/
│   ├── ui/                     # Shadcn UI components
│   ├── CalendarWidget.tsx      # Schedule and events
│   ├── ChatbotWidget.tsx       # AI support chat
│   ├── GovtExamSection.tsx     # Graduate exam prep
│   ├── JobPortalSection.tsx    # Tech job listings
│   ├── LoginForm.tsx           # User registration
│   ├── NonTechRoadmapSection.tsx # Business skills
│   ├── RoadmapTimeline.tsx     # Learning progress
│   └── SubjectSidebar.tsx      # High school subjects
├── contexts/
│   └── UserContext.tsx         # Global user state
├── pages/
│   ├── Index.tsx               # Landing page
│   ├── Login.tsx               # Authentication
│   ├── Confirmation*.tsx       # Profile completion
│   └── Dashboard*.tsx          # Level-specific dashboards
└── assets/
    ├── akiro-hero.png          # Hero section image
    └── akiro-mascot.png        # Login page mascot
```

## 🔧 Mock Data & APIs

The application currently uses mock data for:

### Subjects Data
```javascript
const subjects = [
  { name: 'Mathematics', progress: 75, icon: Calculator },
  { name: 'Physics', progress: 60, icon: Atom },
  // ... more subjects
];
```

### Job Portal
```javascript
const jobs = [
  {
    title: 'MERN Stack Developer',
    company: 'TechCorp Solutions', 
    salary: '₹6-12 LPA',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js']
  },
  // ... more jobs
];
```

### Roadmap Progress
```javascript
const roadmapData = [
  {
    title: 'Mathematics Quiz - Algebra Basics',
    status: 'completed',
    points: 85
  },
  // ... more items
];
```

## 🔄 Replacing Mock APIs

To integrate with real APIs, update these files:

1. **User Authentication**: `src/components/LoginForm.tsx`
2. **Subject Data**: `src/components/SubjectSidebar.tsx`  
3. **Job Listings**: `src/components/JobPortalSection.tsx`
4. **Progress Tracking**: `src/components/RoadmapTimeline.tsx`
5. **Exam Content**: `src/components/GovtExamSection.tsx`

### Example API Integration
```javascript
// Replace mock data with API calls
const fetchJobs = async () => {
  const response = await fetch('/api/jobs');
  return response.json();
};
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (Stacked cards, collapsed navigation)
- **Tablet**: 768px - 1024px (2-column layouts)
- **Desktop**: > 1024px (Full 3-column dashboards)

### Mobile Optimizations
- Touch-friendly button sizes (44px minimum)
- Swipeable cards and carousels
- Collapsible sidebar navigation
- Optimized font sizes and spacing

## ♿ Accessibility Features

- **High Contrast**: WCAG AA compliant color ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🎯 Next Steps

### Recommended Enhancements
1. **User Authentication**: Implement secure login/registration
2. **Progress Persistence**: Save user progress to database
3. **Real-time Chat**: Upgrade chatbot with actual AI integration
4. **Notifications**: Push notifications for assignments and deadlines
5. **Offline Support**: PWA capabilities for offline studying
6. **Analytics**: Track learning patterns and optimize content

### Technical Improvements
1. **State Management**: Implement Redux for complex state
2. **Testing**: Add unit and integration tests
3. **Performance**: Code splitting and lazy loading
4. **SEO**: Server-side rendering with Next.js
5. **Monitoring**: Error tracking and performance monitoring

## 📄 License

This project is created for educational purposes and demonstration.

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Shadcn UI**
