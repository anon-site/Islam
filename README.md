# صفحة ويب حديثة 2025 🚀

صفحة ويب حديثة ومتطورة تم تطويرها باستخدام أحدث التقنيات والأدوات لعام 2025.

## ✨ المميزات

- **React 18** - أحدث إصدار من مكتبة React
- **TypeScript** - للكتابة الآمنة والموثوقة للكود
- **Tailwind CSS** - لإطار عمل CSS حديث وسريع
- **Framer Motion** - للحركات والانتقالات السلسة
- **Vite** - أداة بناء سريعة وحديثة
- **Lucide React** - أيقونات جميلة ومتسقة
- **تصميم متجاوب** - يعمل على جميع الأجهزة
- **دعم اللغة العربية** - مع اتجاه RTL

## 🛠️ التقنيات المستخدمة

### Frontend
- **React 18.2.0** - مكتبة واجهة المستخدم
- **TypeScript 5.0.2** - لغة برمجة مطورة من JavaScript
- **Tailwind CSS 3.3.3** - إطار عمل CSS
- **Framer Motion 10.16.4** - مكتبة الحركات والانتقالات
- **Lucide React 0.263.1** - مجموعة أيقونات حديثة

### أدوات التطوير
- **Vite 4.4.5** - أداة بناء سريعة
- **ESLint** - لفحص جودة الكود
- **PostCSS** - لمعالجة CSS
- **Autoprefixer** - لإضافة البادئات التلقائية

## 📁 هيكل المشروع

```
modern-web-page-2025/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       └── Features.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── README.md
```

## 🚀 التشغيل

### المتطلبات الأساسية
- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### خطوات التشغيل

1. **تثبيت التبعيات:**
   ```bash
   npm install
   ```

2. **تشغيل المشروع في وضع التطوير:**
   ```bash
   npm run dev
   ```

3. **فتح المتصفح:**
   سيفتح المتصفح تلقائياً على العنوان `http://localhost:3000`

### أوامر أخرى

```bash
# بناء المشروع للإنتاج
npm run build

# معاينة البناء
npm run preview

# فحص الكود
npm run lint

# إصلاح أخطاء الكود
npm run lint:fix

# نشر على GitHub Pages
npm run deploy
```

## 🌐 النشر على GitHub Pages

### الطريقة الأولى: النشر التلقائي (مُوصى بها)

1. **رفع المشروع على GitHub:**
   ```bash
   git init
   git add .
   git commit -m "إضافة صفحة ويب حديثة"
   git branch -M main
   git remote add origin https://github.com/username/modern-web-page-2025.git
   git push -u origin main
   ```

2. **تفعيل GitHub Pages:**
   - اذهب إلى إعدادات المستودع (Settings)
   - اختر "Pages" من القائمة الجانبية
   - اختر "GitHub Actions" كمصدر للنشر
   - احفظ الإعدادات

3. **النشر التلقائي:**
   - كل مرة ترفع فيها تغييرات على الفرع `main`
   - سيعمل GitHub Actions تلقائياً على بناء ونشر الموقع
   - سيكون الموقع متاحاً على: `https://username.github.io/modern-web-page-2025/`

### الطريقة الثانية: النشر اليدوي

```bash
# تثبيت gh-pages
npm install --save-dev gh-pages

# النشر
npm run deploy
```

### ملاحظات مهمة:

- **تأكد من تغيير اسم المستودع** في ملف `vite.config.ts` إذا كان مختلفاً
- **الموقع سيعمل على GitHub Pages** بعد النشر
- **جميع الملفات الثابتة** (CSS, JS, الصور) ستعمل بشكل صحيح

## 🎨 التخصيص

### الألوان
يمكن تخصيص الألوان من ملف `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... المزيد من الألوان
  }
}
```

### الخطوط
يتم تحميل الخطوط من Google Fonts:
- **Inter** - للنصوص العادية
- **Poppins** - للعناوين

### الحركات
يمكن تخصيص الحركات من ملف `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'bounce-slow': 'bounce 2s infinite',
}
```

## 📱 الاستجابة

الصفحة مصممة لتكون متجاوبة مع جميع أحجام الشاشات:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 دعم المتصفحات

- Chrome (آخر إصدارين)
- Firefox (آخر إصدارين)
- Safari (آخر إصدارين)
- Edge (آخر إصدارين)

## 📄 الترخيص

هذا المشروع مفتوح المصدر ومتاح للاستخدام الشخصي والتجاري.

## 🤝 المساهمة

نرحب بالمساهمات! يرجى:
1. عمل Fork للمشروع
2. إنشاء فرع جديد للميزة
3. عمل Commit للتغييرات
4. عمل Push للفرع
5. فتح Pull Request

## 📞 التواصل

- **البريد الإلكتروني**: info@modernweb.com
- **الموقع**: https://modernweb.com
- **تويتر**: @modernweb

---

صُنع بـ ❤️ في السعودية
