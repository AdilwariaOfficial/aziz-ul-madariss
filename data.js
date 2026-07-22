const siteData = {
    name: "Jamia Aziz-ul-Madaris Pakistan",
    tagline: "A Perfect Blend of Traditional Islamic and Modern Sciences",
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    about: "Jamia Aziz-ul-Madaris is dedicated to providing high-quality Islamic and contemporary education, fostering moral excellence, and preparing students to meet modern intellectual challenges.",
    announcement: "Admissions are open for the new academic year! All students are requested to submit their documents at the office.",

    mohtamim: {
        name: "Mufti Sahib",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
        taaruf: "Founder and Principal of Jamia Aziz-ul-Madaris, dedicated to Islamic education, Fiqh, and spiritual guidance for over two decades.",
        degrees: [
            "Sanah Faraghat: Wifaq-ul-Madaris Al-Arabia Pakistan",
            "Takhassus fil-Fiqh wal-Ifta",
            "Over 20 Years of Teaching & Academic Experience"
        ],
        social: {
            whatsapp: "https://wa.me/",
            facebook: "https://facebook.com/"
        }
    },

    developer: {
        name: "Developer Profile",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        location: "Pakistan",
        about: "Passionate web developer who designed and developed this zero-cost, responsive digital platform for the Jamia.",
        skills: ["HTML5 / CSS3", "JavaScript", "GitHub Pages", "UI/UX Design"],
        khidmaat: [
            "Official Bilingual Web Platform Development",
            "Responsive & Zero-Cost Architecture Setup"
        ],
        social: {
            github: "https://github.com/",
            whatsapp: "https://wa.me/"
        }
    },

    nisab: [
        { name: "Ibtidaiyah" },
        { name: "Hifz & Tajweed" },
        { name: "Mutawassitah" },
        { name: "Sanawiyah A'amma" },
        { name: "Sanawiyah Khassa" },
        { name: "Aliyah (Fazilah)" },
        { name: "Alimiyah (Takmeel)" }
    ],

    gallery: [
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
    ],

    categories: [
        {
            id: "madrasa",
            nameUr: "Madrasa Curriculum",
            nameEn: "Core Books & Notes",
            icon: "🏛️",
            hasGrades: true,
            grades: [
                { id: "ibtidayiah", nameUr: "Ibtidaiyah", nameEn: "Basic Level" },
                { id: "hifz", nameUr: "Hifz & Tajweed", nameEn: "Memorization" },
                { id: "mutawassitah", nameUr: "Mutawassitah", nameEn: "Middle Level" }
            ]
        },
        {
            id: "wafaq",
            nameUr: "Wifaq-ul-Madaris",
            nameEn: "Board Syllabi",
            icon: "📚",
            hasGrades: true,
            grades: [
                { id: "sanawiyah-amma", nameUr: "Sanawiyah A'amma", nameEn: "Metric Equivalent" },
                { id: "sanawiyah-khassa", nameUr: "Sanawiyah Khassa", nameEn: "Intermediate" },
                { id: "fazilah", nameUr: "Fazilah (Aliyah)", nameEn: "Graduation" },
                { id: "takmeel", nameUr: "Takmeel (Alimiyah)", nameEn: "Masters Equivalent" }
            ]
        },
        {
            id: "aiou",
            nameUr: "AIOU Programs",
            nameEn: "Contemporary Education",
            icon: "🎓",
            hasGrades: true,
            grades: [
                { id: "matric", nameUr: "Matric", nameEn: "Matriculation" },
                { id: "fa", nameUr: "FA / FSC", nameEn: "Intermediate" },
                { id: "ba", nameUr: "BA / BSC", nameEn: "Bachelors" }
            ]
        },
        {
            id: "apps",
            nameUr: "Premium Apps",
            nameEn: "Islamic Tools & APKs",
            icon: "📱",
            hasGrades: false
        }
    ],

    items: [
        {
            id: "item1",
            title: "Tafsir Al-Sawi (Madrasa Course)",
            author: "Allama Al-Sawi",
            categorySlug: "madrasa",
            gradeId: "mutawassitah",
            coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80",
            driveLink: "https://drive.google.com/file/d/SAMPLE_FILE_ID/preview"
        },
        {
            id: "item2",
            title: "Hidayat-ul-Nahw (Wifaq)",
            author: "Maulvi Rahmatullah",
            categorySlug: "wafaq",
            gradeId: "sanawiyah-amma",
            coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80",
            driveLink: "https://drive.google.com/file/d/SAMPLE_FILE_ID/preview"
        }
    ]
};
