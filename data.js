const siteData = {
    // 1. General Site Info
    name: "جامعہ عزیز المدارس پاکستان",
    tagline: "دین اور عصری علوم کا حسین امتزاج - مفت تعلیمی وسائل کا مرکز",
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    about: "جامعہ عزیز المدارس کا قیام دینی و عصری علوم کے فروغ، طلباء کی بہترین اخلاقی و علمی تربیت اور انہیں جدید تقاضوں کے مطابق زیورِ تعلیم سے آراستہ کرنے کے لیے عمل میں لایا گیا ہے۔",
    announcement: "داخلے جاری ہیں! تمام طلباء مقررہ وقت پر اپنے کاغذات جامعہ کے دفتر میں جمع کروائیں۔",

    // 2. Mohtamim Profile
    mohtamim: {
        name: "حضرت مولانا مفتی صاحب",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
        taaruf: "آپ جامعہ عزیز المدارس کے بانی اور مہتمم ہیں۔ آپ نے دینی علوم کی ترویج، فقہ اسلامی کی اشاعت اور طلباء کی اخلاقی و روحانی تربیت میں اپنی زندگی وقف کر رکھی ہے۔",
        degrees: [
            "سنہ فراغت: وفاق المدارس العربيۃ پاکستان",
            "تخصص فی الفقہ الاسلامی والافتاء",
            "تدریس و افتاء کا 20 سال سے زائد کا تجربہ"
        ],
        social: {
            whatsapp: "https://wa.me/",
            facebook: "https://facebook.com/"
        }
    },

    // 3. Developer Profile
    developer: {
        name: "محمد ڈویلپر",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        location: "پاکستان",
        about: "میں ایک پرجوش ویب ڈویلپر ہوں جس نے اس مدرسہ کی ڈیجیٹل موجودگی اور طلباء کے لیے اس مفت تعلیمی پلیٹ فارم کو زیرو کاسٹ اسٹیٹک آرکیٹیکچر کے تحت تیار کیا ہے۔",
        skills: ["HTML5 / CSS3", "JavaScript", "GitHub Pages", "Responsive UI"],
        khidmaat: [
            "جامعہ عزیز المدارس کی آفیشل بائی لنگول ویب سائٹ کی تیاری",
            "موبائل فرینڈلی اور تیز رفتار نظام کا نفاذ"
        ],
        social: {
            github: "https://github.com/",
            whatsapp: "https://wa.me/"
        }
    },

    // 4. Nisab / Courses List
    nisab: [
        { name: "ابتدائیہ" },
        { name: "حفظ و تجوید" },
        { name: "متوسطہ" },
        { name: "ثانویہ عامہ" },
        { name: "ثانویہ خاصہ" },
        { name: "عالیہ (فضیلت)" },
        { name: "عالمیہ (تکمیل)" }
    ],

    // 5. Gallery Images (Paste any direct image URL)
    gallery: [
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
    ],

    // 6. Categories (With Grades / Sub-categories)
    categories: [
        {
            id: "madrasa",
            nameUr: "مدرسہ کا اپنا نصاب",
            nameEn: "Madrasa Nisab",
            icon: "🏛️",
            hasGrades: true,
            grades: [
                { id: "ibtidayiah", nameUr: "ابتدائیہ", nameEn: "Ibtidaiyah" },
                { id: "hifz", nameUr: "حفظ و تجوید", nameEn: "Hifz & Tajweed" },
                { id: "mutawassitah", nameUr: "متوسطہ", nameEn: "Mutawassitah" }
            ]
        },
        {
            id: "wafaq",
            nameUr: "وفاق المدارس",
            nameEn: "Wifaq-ul-Madaris",
            icon: "📚",
            hasGrades: true,
            grades: [
                { id: "sanawiyah-amma", nameUr: "ثانویہ عامہ", nameEn: "Sanawiyah A'amma" },
                { id: "sanawiyah-khassa", nameUr: "ثانویہ خاصہ", nameEn: "Sanawiyah Khassa" },
                { id: "fazilah", nameUr: "فضیلت (عالیہ)", nameEn: "Fazilah" },
                { id: "takmeel", nameUr: "تکمیل (عالمیہ)", nameEn: "Takmeel" }
            ]
        },
        {
            id: "aiou",
            nameUr: "اے آئی او یو (AIOU)",
            nameEn: "AIOU Programs",
            icon: "🎓",
            hasGrades: true,
            grades: [
                { id: "matric", nameUr: "میٹرک", nameEn: "Matric" },
                { id: "fa", nameUr: "ایف اے / ایف ایس سی", nameEn: "FA / FSC" },
                { id: "ba", nameUr: "بی اے / بی ایس سی", nameEn: "BA / BSC" }
            ]
        },
        {
            id: "apps",
            nameUr: "پریمیم ایپس",
            nameEn: "Premium Apps",
            icon: "📱",
            hasGrades: false
        }
    ],

    // 7. Uploaded Items (Books / Notes / Apps)
    items: [
        {
            id: "item1",
            title: "تفسیر صاوی (مدرسہ نصاب)",
            author: "علامہ صاوی رح",
            categorySlug: "madrasa",
            gradeId: "mutawassitah",
            coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80",
            driveLink: "https://drive.google.com/file/d/SAMPLE_FILE_ID/preview"
        },
        {
            id: "item2",
            title: "ہدایۃ النحو (وفاق المدارس)",
            author: "مولوی رحمت اللہ",
            categorySlug: "wafaq",
            gradeId: "sanawiyah-amma",
            coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80",
            driveLink: "https://drive.google.com/file/d/SAMPLE_FILE_ID/preview"
        }
    ]
};
              
