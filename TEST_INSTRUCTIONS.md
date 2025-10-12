# تعليمات اختبار وظيفة البحث

## الخطوات:

### 1. فتح الملف
افتح `index.html` في المتصفح مباشرة

### 2. فتح Console للمطورين
اضغط `F12` أو `Ctrl+Shift+I` لفتح أدوات المطور

### 3. اختبار البحث
جرب البحث عن مدينة مثل:
- `Cairo`
- `London, UK`
- `Dubai, UAE`
- `Riyadh, Saudi Arabia`

### 4. راقب Console
ستر ى رسائل مثل:
```
searchCity called with: Cairo
Fetching from: https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=&method=4
API Response: {code: 200, status: "OK", data: {...}}
Updated prayerTimesData: {Fajr: "05:12", ...}
Search completed successfully!
```

## إذا لم يعمل:

### تحقق من:
1. **الاتصال بالإنترنت**: تأكد من وجود انترنت
2. **Console Errors**: هل هناك أخطاء JavaScript؟
3. **Network Tab**: افحص إذا كان الطلب للAPI ينجح
4. **عناصر HTML**: تأكد من وجود:
   - `<input id="city-search">`
   - `<button id="search-button">`
   - `<div id="current-city">`

## الرسائل المتوقعة:

### عند النجاح:
- تظهر مواقيت الصلاة للمدينة المطلوبة
- يتم تحديث اسم المدينة
- يتم حفظ المدينة في localStorage

### عند الفشل:
- رسالة alert: "لم يتم العثور على: {city}"
- مواقيت الصلاة تظهر: "--:--"

## تجربة مباشرة:

1. افتح Console
2. اكتب: `searchCity('Cairo')`
3. اضغط Enter
4. راقب النتيجة!
