// ✅ Liste des sourates avec corrections pour les noms multilingues
const sourates = [
  {
    number: 1,
    ar: "الفاتحة",
    fr: "AL-FATIHA",
    en: "Al-Fātiḥa",
    title: {
      ar: "الفاتحة",
      fr: "Prologue",
      en: "The Opening"
    },
    ayahs: 7
  },
  {
    number: 2,
    ar: "البقرة",
    fr: "AL-BAQARA",
    en: "Al-Baqara",
    title: {
      ar: "البقرة",
      fr: "La Vache",
      en: "The Cow"
    },
    ayahs: 286
  },
  {
    number: 3,
    ar: "آل عمران",
    fr: "AL-IMRAN",
    en: "Al-Imran",
    title: {
      ar: "آل عمران",
      fr: "La Famille d’Imran",
      en: "The Family of Imran"
    },
    ayahs: 200
  },
  {
    number: 4,
    ar: "النساء",
    fr: "AN-NISA'",
    en: "An-Nisa’",
    title: {
      ar: "النساء",
      fr: "Les Femmes",
      en: "The Women"
    },
    ayahs: 176
  },
  {
    number: 5,
    ar: "المائدة",
    fr: "AL-MAIDAH",
    en: "Al-Ma'idah",
    title: {
      ar: "المائدة",
      fr: "La Table servie",
      en: "The Table Spread"
    },
    ayahs: 120
  },
  {
    number: 6,
    ar: "الأنعام",
    fr: "AL-ANAM",
    en: "Al-Anam",
    title: {
      ar: "الأنعام",
      fr: "Les Bestiaux",
      en: "The Cattle"
    },
    ayahs: 165
  },
  {
    number: 7,
    ar: "الأعراف",
    fr: "AL-ARAF",
    en: "Al-Araf",
    title: {
      ar: "الأعراف",
      fr: "Les Murailles",
      en: "The Heights"
    },
    ayahs: 206
  },
  {
    number: 8,
    ar: "الأنفال",
    fr: "AL-ANFAL",
    en: "Al-Anfal",
    title: {
      ar: "الأنفال",
      fr: "Le Butin",
      en: "The Spoils of War"
    },
    ayahs: 75
  },
  {
    number: 9,
    ar: "التوبة",
    fr: "AT-TAWBAH",
    en: "At-Tawbah",
    title: {
      ar: "التوبة",
      fr: "Le Repentir",
      en: "The Repentance"
    },
    ayahs: 129
  },
  {
    number: 10,
    ar: "يونس",
    fr: "YUNUS",
    en: "Yunus",
    title: {
      ar: "يونس",
      fr: "Jonas",
      en: "Jonah"
    },
    ayahs: 109
  },
  {
    number: 11,
    ar: "هود",
    fr: "HUD",
    en: "Hud",
    title: {
      ar: "هود",
      fr: "Hud",
      en: "Hud"
    },
    ayahs: 123
  },
  {
    number: 12,
    ar: "يوسف",
    fr: "YUSUF",
    en: "Yusuf",
    title: {
      ar: "يوسف",
      fr: "Joseph",
      en: "Joseph"
    },
    ayahs: 111
  },
  {
    number: 13,
    ar: "الرعد",
    fr: "AR-RAAD",
    en: "Ar-Ra'd",
    title: {
      ar: "الرعد",
      fr: "Le Tonnerre",
      en: "The Thunder"
    },
    ayahs: 43
  },
  {
    number: 14,
    ar: "إبراهيم",
    fr: "IBRAHIM",
    en: "Ibrahim",
    title: {
      ar: "إبراهيم",
      fr: "Abraham",
      en: "Abraham"
    },
    ayahs: 52
  },
  {
    number: 15,
    ar: "الحجر",
    fr: "AL-HIJR",
    en: "Al-Hijr",
    title: {
      ar: "الحجر",
      fr: "Al-Hijr",
      en: "The Rocky Tract"
    },
    ayahs: 99
  },
  {
    number: 16,
    ar: "النحل",
    fr: "AN-NAHL",
    en: "An-Nahl",
    title: {
      ar: "النحل",
      fr: "Les Abeilles",
      en: "The Bee"
    },
    ayahs: 128
  },
  {
    number: 17,
    ar: "الإسراء",
    fr: "AL-ISRA",
    en: "Al-Isra",
    title: {
      ar: "الإسراء",
      fr: "Le Voyage Nocturne",
      en: "The Night Journey"
    },
    ayahs: 111
  },
  {
    number: 18,
    ar: "الكهف",
    fr: "AL-KAHF",
    en: "Al-Kahf",
    title: {
      ar: "الكهف",
      fr: "La Caverne",
      en: "The Cave"
    },
    ayahs: 110
  },
  {
    number: 19,
    ar: "مريم",
    fr: "MARYAM",
    en: "Maryam",
    title: {
      ar: "مريم",
      fr: "Marie",
      en: "Mary"
    },
    ayahs: 98
  },
  {
    number: 20,
    ar: "طه",
    fr: "TA-HA",
    en: "Ta-Ha",
    title: {
      ar: "طه",
      fr: "Ta-Ha",
      en: "Ta-Ha"
    },
    ayahs: 135
  },
  {
    number: 21,
    ar: "الأنبياء",
    fr: "AL-ANBIYA",
    en: "Al-Anbiya",
    title: {
      ar: "الأنبياء",
      fr: "Les Prophètes",
      en: "The Prophets"
    },
    ayahs: 112
  },
  {
    number: 22,
    ar: "الحج",
    fr: "AL-HAJJ",
    en: "Al-Hajj",
    title: {
      ar: "الحج",
      fr: "Le Pèlerinage",
      en: "The Pilgrimage"
    },
    ayahs: 78
  },
  {
    number: 23,
    ar: "المؤمنون",
    fr: "AL-MUMINUNE",
    en: "Al-Mu’minun",
    title: {
      ar: "المؤمنون",
      fr: "Les Croyants",
      en: "The Believers"
    },
    ayahs: 118
  },
  {
    number: 24,
    ar: "النور",
    fr: "AN-NUR",
    en: "An-Nur",
    title: {
      ar: "النور",
      fr: "La Lumière",
      en: "The Light"
    },
    ayahs: 64
  },
  {
    number: 25,
    ar: "الفرقان",
    fr: "AL-FURQAN",
    en: "Al-Furqan",
    title: {
      ar: "الفرقان",
      fr: "Le Discernement",
      en: "The Criterion"
    },
    ayahs: 77
  },
  {
    number: 26,
    ar: "الشعراء",
    fr: "ASH-SHUARA",
    en: "Ash-Shu‘ara",
    title: {
      ar: "الشعراء",
      fr: "Les Poètes",
      en: "The Poets"
    },
    ayahs: 227
  },
  {
    number: 27,
    ar: "النمل",
    fr: "AN-NAML",
    en: "An-Naml",
    title: {
      ar: "النمل",
      fr: "Les Fourmis",
      en: "The Ant"
    },
    ayahs: 93
  },
  {
    number: 28,
    ar: "القصص",
    fr: "AL-QASAS",
    en: "Al-Qasas",
    title: {
      ar: "القصص",
      fr: "Le Récit",
      en: "The Stories"
    },
    ayahs: 88
  },
  {
    number: 29,
    ar: "العنكبوت",
    fr: "AL-ANKABUT",
    en: "Al-‘Ankabut",
    title: {
      ar: "العنكبوت",
      fr: "L’Araignée",
      en: "The Spider"
    },
    ayahs: 69
  },
  {
    number: 30,
    ar: "الروم",
    fr: "AR-RUM",
    en: "Ar-Rum",
    title: {
      ar: "الروم",
      fr: "Les Romains",
      en: "The Romans"
    },
    ayahs: 60
  },
  {
    number: 31,
    ar: "لقمان",
    fr: "LUQMAN",
    en: "Luqman",
    title: {
      ar: "لقمان",
      fr: "Luqman",
      en: "Luqman"
    },
    ayahs: 34
  },
  {
    number: 32,
    ar: "السجدة",
    fr: "AS-SAJDAH",
    en: "As-Sajdah",
    title: {
      ar: "السجدة",
      fr: "La Prosternation",
      en: "The Prostration"
    },
    ayahs: 30
  },
  {
    number: 33,
    ar: "الأحزاب",
    fr: "AL-AHZAB",
    en: "Al-Ahzab",
    title: {
      ar: "الأحزاب",
      fr: "Les Coalisés",
      en: "The Confederates"
    },
    ayahs: 73
  },
  {
    number: 34,
    ar: "سبإ",
    fr: "SABA",
    en: "Saba",
    title: {
      ar: "سبإ",
      fr: "Saba",
      en: "Sheba"
    },
    ayahs: 54
  },
  {
    number: 35,
    ar: "فاطر",
    fr: "FATIR",
    en: "Fatir",
    title: {
      ar: "فاطر",
      fr: "Le Créateur",
      en: "The Originator"
    },
    ayahs: 45
  },
  {
    number: 36,
    ar: "يس",
    fr: "YA-SIN",
    en: "Ya-Sin",
    title: {
      ar: "يس",
      fr: "Ya-Sin",
      en: "Ya-Sin"
    },
    ayahs: 83
  },
  {
    number: 37,
    ar: "الصافات",
    fr: "AS-SAFFAT",
    en: "As-Saffat",
    title: {
      ar: "الصافات",
      fr: "Les Rangés",
      en: "Those who set the Ranks"
    },
    ayahs: 182
  },
  {
    number: 38,
    ar: "ص",
    fr: "SAD",
    en: "Sad",
    title: {
      ar: "ص",
      fr: "Sad",
      en: "The Letter Sad"
    },
    ayahs: 88
  },
  {
    number: 39,
    ar: "الزمر",
    fr: "AZ-ZUMAR",
    en: "Az-Zumar",
    title: {
      ar: "الزمر",
      fr: "Les Groupes",
      en: "The Groups"
    },
    ayahs: 75
  },
  {
    number: 40,
    ar: "غافر",
    fr: "GHAFIR",
    en: "Ghafir",
    title: {
      ar: "غافر",
      fr: "Le Pardonneur",
      en: "The Forgiver"
    },
    ayahs: 85
  },
  {
    number: 41,
    ar: "فصلت",
    fr: "FUSSILAT",
    en: "Fussilat",
    title: {
      ar: "فصلت",
      fr: "Les Versets détaillés",
      en: "Explained in Detail"
    },
    ayahs: 54
  },
  {
    number: 42,
    ar: "الشورى",
    fr: "ASH-SHURA",
    en: "Ash-Shura",
    title: {
      ar: "الشورى",
      fr: "La Consultation",
      en: "The Consultation"
    },
    ayahs: 53
  },
  {
    number: 43,
    ar: "الزخرف",
    fr: "AZ-ZUKHRUF",
    en: "Az-Zukhruf",
    title: {
      ar: "الزخرف",
      fr: "L'Ornement",
      en: "The Ornaments of Gold"
    },
    ayahs: 89
  },
  {
    number: 44,
    ar: "الدخان",
    fr: "AD-DUKHAN",
    en: "Ad-Dukhan",
    title: {
      ar: "الدخان",
      fr: "La Fumée",
      en: "The Smoke"
    },
    ayahs: 59
  },
  {
    number: 45,
    ar: "الجاثية",
    fr: "AL-JATHIYAH",
    en: "Al-Jathiyah",
    title: {
      ar: "الجاثية",
      fr: "L'Agenouillée",
      en: "The Crouching"
    },
    ayahs: 37
  },
  {
    number: 46,
    ar: "الأحقاف",
    fr: "AL-AHQAF",
    en: "Al-Ahqaf",
    title: {
      ar: "الأحقاف",
      fr: "Les Dunes",
      en: "The Wind-Curved Sandhills"
    },
    ayahs: 35
  },
  {
    number: 47,
    ar: "محمد",
    fr: "MUHAMMAD",
    en: "Muhammad",
    title: {
      ar: "محمد",
      fr: "Muhammad",
      en: "Muhammad"
    },
    ayahs: 38
  },
  {
    number: 48,
    ar: "الفتح",
    fr: "AL-FATH",
    en: "Al-Fath",
    title: {
      ar: "الفتح",
      fr: "La Victoire",
      en: "The Victory"
    },
    ayahs: 29
  },
  {
    number: 49,
    ar: "الحجرات",
    fr: "AL-HUJURAT",
    en: "Al-Hujurat",
    title: {
      ar: "الحجرات",
      fr: "Les Appartements",
      en: "The Rooms"
    },
    ayahs: 18
  },
  {
    number: 50,
    ar: "ق",
    fr: "QAF",
    en: "Qaf",
    title: {
      ar: "ق",
      fr: "Qaf",
      en: "The Letter Qaf"
    },
    ayahs: 45
  },
  {
    number: 51,
    ar: "الذاريات",
    fr: "ADH-DHARIYAT",
    en: "Adh-Dhariyat",
    title: {
      ar: "الذاريات",
      fr: "Les Ouragans",
      en: "The Winnowing Winds"
    },
    ayahs: 60
  },
  {
    number: 52,
    ar: "الطور",
    fr: "AT-TUR",
    en: "At-Tur",
    title: {
      ar: "الطور",
      fr: "Le Mont",
      en: "The Mount"
    },
    ayahs: 49
  },
  {
    number: 53,
    ar: "النجم",
    fr: "AN-NAJM",
    en: "An-Najm",
    title: {
      ar: "النجم",
      fr: "L'Étoile",
      en: "The Star"
    },
    ayahs: 62
  },
  {
    number: 54,
    ar: "القمر",
    fr: "AL-QAMAR",
    en: "Al-Qamar",
    title: {
      ar: "القمر",
      fr: "La Lune",
      en: "The Moon"
    },
    ayahs: 55
  },
  {
    number: 55,
    ar: "الرحمن",
    fr: "AR-RAHMAN",
    en: "Ar-Rahman",
    title: {
      ar: "الرحمن",
      fr: "Le Tout Miséricordieux",
      en: "The Beneficent"
    },
    ayahs: 78
  },
  {
    number: 56,
    ar: "الواقعة",
    fr: "AL-WAQIAH",
    en: "Al-Waqi'ah",
    title: {
      ar: "الواقعة",
      fr: "L'Événement",
      en: "The Inevitable"
    },
    ayahs: 96
  },
  {
    number: 57,
    ar: "الحديد",
    fr: "AL-HADID",
    en: "Al-Hadid",
    title: {
      ar: "الحديد",
      fr: "Le Fer",
      en: "The Iron"
    },
    ayahs: 29
  },
  {
    number: 58,
    ar: "المجادلة",
    fr: "AL-MUJADILA",
    en: "Al-Mujadila",
    title: {
      ar: "المجادلة",
      fr: "La Discussion",
      en: "The Pleading Woman"
    },
    ayahs: 22
  },
  {
    number: 59,
    ar: "الحشر",
    fr: "AL-HASHR",
    en: "Al-Hashr",
    title: {
      ar: "الحشر",
      fr: "L'Exode",
      en: "The Exile"
    },
    ayahs: 24
  },
  {
    number: 60,
    ar: "الممتحنة",
    fr: "AL-MUMTAHINA",
    en: "Al-Mumtahina",
    title: {
      ar: "الممتحنة",
      fr: "L'Éprouvée",
      en: "She that is to be examined"
    },
    ayahs: 13
  },
  {
    number: 61,
    ar: "الصف",
    fr: "AS-SAFF",
    en: "As-Saff",
    title: {
      ar: "الصف",
      fr: "Le Rang",
      en: "The Ranks"
    },
    ayahs: 14
  },
  {
    number: 62,
    ar: "الجمعة",
    fr: "AL-JUMUAA",
    en: "Al-Jumu‘ah",
    title: {
      ar: "الجمعة",
      fr: "Le Vendredi",
      en: "The Congregation"
    },
    ayahs: 11
  },
  {
    number: 63,
    ar: "المنافقون",
    fr: "AL-MUNAFIQUN",
    en: "Al-Munafiqun",
    title: {
      ar: "المنافقون",
      fr: "Les Hypocrites",
      en: "The Hypocrites"
    },
    ayahs: 11
  },
  {
    number: 64,
    ar: "التغابن",
    fr: "AT-TAGHABUN",
    en: "At-Taghabun",
    title: {
      ar: "التغابن",
      fr: "La Grande Perte",
      en: "Mutual Disillusion"
    },
    ayahs: 18
  },
  {
    number: 65,
    ar: "الطلاق",
    fr: "AT-TALAQ",
    en: "At-Talaq",
    title: {
      ar: "الطلاق",
      fr: "Le Divorce",
      en: "The Divorce"
    },
    ayahs: 12
  },
  {
    number: 66,
    ar: "التحريم",
    fr: "AT-TAHRIM",
    en: "At-Tahrim",
    title: {
      ar: "التحريم",
      fr: "L’Interdiction",
      en: "The Prohibition"
    },
    ayahs: 12
  },
  {
    number: 67,
    ar: "الملك",
    fr: "AL-MULK",
    en: "Al-Mulk",
    title: {
      ar: "الملك",
      fr: "La Royauté",
      en: "The Sovereignty"
    },
    ayahs: 30
  },
  {
    number: 68,
    ar: "القلم",
    fr: "AL-QALAM",
    en: "Al-Qalam",
    title: {
      ar: "القلم",
      fr: "La Plume",
      en: "The Pen"
    },
    ayahs: 52
  },
  {
    number: 69,
    ar: "الحاقة",
    fr: "AL-HAQQAH",
    en: "Al-Haqqah",
    title: {
      ar: "الحاقة",
      fr: "La Vérité Inévitable",
      en: "The Inevitable"
    },
    ayahs: 52
  },
  {
    number: 70,
    ar: "المعارج",
    fr: "AL-MAARIJ",
    en: "Al-Ma'arij",
    title: {
      ar: "المعارج",
      fr: "Les Voies d'Ascension",
      en: "The Ascending Stairways"
    },
    ayahs: 44
  },
  {
    number: 71,
    ar: "نوح",
    fr: "NUH",
    en: "Nuh",
    title: {
      ar: "نوح",
      fr: "Noé",
      en: "Noah"
    },
    ayahs: 28
  },
  {
    number: 72,
    ar: "الجن",
    fr: "AL-JINN",
    en: "Al-Jinn",
    title: {
      ar: "الجن",
      fr: "Les Djinns",
      en: "The Jinn"
    },
    ayahs: 28
  },
  {
    number: 73,
    ar: "المزمل",
    fr: "AL-MUZZAMMIL",
    en: "Al-Muzzammil",
    title: {
      ar: "المزمل",
      fr: "L’Enveloppé",
      en: "The Enshrouded One"
    },
    ayahs: 20
  },
  {
    number: 74,
    ar: "المدثر",
    fr: "AL-MUDDATHIR",
    en: "Al-Muddaththir",
    title: {
      ar: "المدثر",
      fr: "Le Revêtu d’un manteau",
      en: "The Cloaked One"
    },
    ayahs: 56
  },
  {
    number: 75,
    ar: "القيامة",
    fr: "AL-QIYAMAH",
    en: "Al-Qiyamah",
    title: {
      ar: "القيامة",
      fr: "La Résurrection",
      en: "The Resurrection"
    },
    ayahs: 40
  },
  {
    number: 76,
    ar: "الإنسان",
    fr: "AL-INSAN",
    en: "Al-Insan",
    title: {
      ar: "الإنسان",
      fr: "L’Homme",
      en: "Man"
    },
    ayahs: 31
  },
  {
    number: 77,
    ar: "المرسلات",
    fr: "AL-MURSALAT",
    en: "Al-Mursalat",
    title: {
      ar: "المرسلات",
      fr: "Les Envoyés",
      en: "The Emissaries"
    },
    ayahs: 50
  },
  {
    number: 78,
    ar: "النبأ",
    fr: "AN-NABA",
    en: "An-Naba",
    title: {
      ar: "النبأ",
      fr: "La Grande Nouvelle",
      en: "The Tidings"
    },
    ayahs: 40
  },
  {
    number: 79,
    ar: "النازعات",
    fr: "AN-NAZIAT",
    en: "An-Nazi'at",
    title: {
      ar: "النازعات",
      fr: "Les Anges qui arrachent",
      en: "Those who drag forth"
    },
    ayahs: 46
  },
  {
    number: 80,
    ar: "عبس",
    fr: "ABASA",
    en: "Abasa",
    title: {
      ar: "عبس",
      fr: "Il s’est renfrogné",
      en: "He Frowned"
    },
    ayahs: 42
  },
  {
    number: 81,
    ar: "التكوير",
    fr: "AT-TAKWIR",
    en: "At-Takwir",
    title: {
      ar: "التكوير",
      fr: "L’Obscurcissement",
      en: "The Overthrowing"
    },
    ayahs: 29
  },
  {
    number: 82,
    ar: "الانفطار",
    fr: "AL-INFITAR",
    en: "Al-Infitar",
    title: {
      ar: "الانفطار",
      fr: "La Déchirure",
      en: "The Cleaving"
    },
    ayahs: 19
  },
  {
    number: 83,
    ar: "المطففين",
    fr: "AL-MUTAFFIFIN",
    en: "Al-Mutaffifin",
    title: {
      ar: "المطففين",
      fr: "Les Fraudeurs",
      en: "Defrauding"
    },
    ayahs: 36
  },
  {
    number: 84,
    ar: "الانشقاق",
    fr: "AL-INSHIQAQ",
    en: "Al-Inshiqaq",
    title: {
      ar: "الانشقاق",
      fr: "La Déchirure",
      en: "The Splitting Open"
    },
    ayahs: 25
  },
  {
    number: 85,
    ar: "البروج",
    fr: "AL-BUROUJ",
    en: "Al-Buruj",
    title: {
      ar: "البروج",
      fr: "Les Constellations",
      en: "The Mansions of the Stars"
    },
    ayahs: 22
  },
  {
    number: 86,
    ar: "الطارق",
    fr: "AT-TARIQ",
    en: "At-Tariq",
    title: {
      ar: "الطارق",
      fr: "L’Astre Nocturne",
      en: "The Morning Star"
    },
    ayahs: 17
  },
  {
    number: 87,
    ar: "الأعلى",
    fr: "AL-AALA",
    en: "Al-A‘la",
    title: {
      ar: "الأعلى",
      fr: "Le Très-Haut",
      en: "The Most High"
    },
    ayahs: 19
  },
  {
    number: 88,
    ar: "الغاشية",
    fr: "AL-GHASHIYAH",
    en: "Al-Ghashiyah",
    title: {
      ar: "الغاشية",
      fr: "L’Enveloppante",
      en: "The Overwhelming"
    },
    ayahs: 26
  },
  {
    number: 89,
    ar: "الفجر",
    fr: "AL-FAJR",
    en: "Al-Fajr",
    title: {
      ar: "الفجر",
      fr: "L’Aube",
      en: "The Dawn"
    },
    ayahs: 30
  },
  {
    number: 90,
    ar: "البلد",
    fr: "AL-BALAD",
    en: "Al-Balad",
    title: {
      ar: "البلد",
      fr: "La Cité",
      en: "The City"
    },
    ayahs: 20
  },
  {
    number: 91,
    ar: "الشمس",
    fr: "ASH-SHAMS",
    en: "Ash-Shams",
    title: {
      ar: "الشمس",
      fr: "Le Soleil",
      en: "The Sun"
    },
    ayahs: 15
  },
  {
    number: 92,
    ar: "الليل",
    fr: "AL-LAYL",
    en: "Al-Layl",
    title: {
      ar: "الليل",
      fr: "La Nuit",
      en: "The Night"
    },
    ayahs: 21
  },
  {
    number: 93,
    ar: "الضحى",
    fr: "AD-DUHA",
    en: "Ad-Duha",
    title: {
      ar: "الضحى",
      fr: "Le Jour Montant",
      en: "The Morning Brightness"
    },
    ayahs: 11
  },
  {
    number: 94,
    ar: "الشرح",
    fr: "ASH-SHARH",
    en: "Ash-Sharh",
    title: {
      ar: "الشرح",
      fr: "L’Ouverture",
      en: "The Relief"
    },
    ayahs: 8
  },
  {
    number: 95,
   ar: "التين",
    fr: "AT-TIN",
    en: "At-Tin",
    title: {
      ar: "التين",
      fr: "Le Figuier",
      en: "The Fig"
    },
    ayahs: 8
  },
  {
    number: 96,
    ar: "العلق",
    fr: "AL-ALAQ",
    en: "Al-Alaq",
    title: {
      ar: "العلق",
      fr: "L’Adhérence",
      en: "The Clot"
    },
    ayahs: 19
  },
  {
    number: 97,
    ar: "القدر",
    fr: "AL-QADR",
    en: "Al-Qadr",
    title: {
      ar: "القدر",
      fr: "La Destinée",
      en: "The Power"
    },
    ayahs: 5
  },
  {
    number: 98,
    ar: "البينة",
    fr: "AL-BAYYINAH",
    en: "Al-Bayyina",
    title: {
      ar: "البينة",
      fr: "La Preuve",
      en: "The Clear Proof"
    },
    ayahs: 8
  },
  {
    number: 99,
    ar: "الزلزلة",
    fr: "AZ-ZALZALAH",
    en: "Az-Zalzalah",
    title: {
      ar: "الزلزلة",
      fr: "La Secousse",
      en: "The Earthquake"
    },
    ayahs: 8
  },
  {
    number: 100,
    ar: "العاديات",
    fr: "AL-ADIYAT",
    en: "Al-Adiyat",
    title: {
      ar: "العاديات",
      fr: "Les Coursiers",
      en: "The Courser"
    },
    ayahs: 11
  },
  {
    number: 101,
    ar: "القارعة",
    fr: "AL-QARIAH",
    en: "Al-Qari‘ah",
    title: {
      ar: "القارعة",
      fr: "Le Fracas",
      en: "The Striking Calamity"
    },
    ayahs: 11
  },
  {
    number: 102,
    ar: "التكاثر",
    fr: "AT-TAKATHUR",
    en: "At-Takathur",
    title: {
      ar: "التكاثر",
      fr: "La Course aux Richesses",
      en: "The Rivalry in world increase"
    },
    ayahs: 8
  },
  {
    number: 103,
    ar: "العصر",
    fr: "AL-ASR",
    en: "Al-Asr",
    title: {
      ar: "العصر",
      fr: "Le Temps",
      en: "The Declining Day"
    },
    ayahs: 3
  },
  {
    number: 104,
    ar: "الهمزة",
    fr: "AL-HUMAZAH",
    en: "Al-Humazah",
    title: {
      ar: "الهمزة",
      fr: "Les Calomniateurs",
      en: "The Slanderer"
    },
    ayahs: 9
  },
  {
    number: 105,
    ar: "الفيل",
    fr: "AL-FIL",
    en: "Al-Fil",
    title: {
      ar: "الفيل",
      fr: "L'Éléphant",
      en: "The Elephant"
    },
    ayahs: 5
  },
  {
    number: 106,
    ar: "قريش",
    fr: "QURAYSH",
    en: "Quraysh",
    title: {
      ar: "قريش",
      fr: "Les Quraychites",
      en: "Quraish"
    },
    ayahs: 4
  },
  {
    number: 107,
    ar: "الماعون",
    fr: "AL-MAUN",
    en: "Al-Ma'un",
    title: {
      ar: "الماعون",
      fr: "L'Aumône",
      en: "The Small Kindnesses"
    },
    ayahs: 7
  },
  {
    number: 108,
    ar: "الكوثر",
    fr: "AL-KAWTHAR",
    en: "Al-Kawthar",
    title: {
      ar: "الكوثر",
      fr: "L’Abondance",
      en: "Abundance"
    },
    ayahs: 3
  },
  {
    number: 109,
    ar: "الكافرون",
    fr: "AL-KAFIRUN",
    en: "Al-Kafirun",
    title: {
      ar: "الكافرون",
      fr: "Les Infidèles",
      en: "The Disbelievers"
    },
    ayahs: 6
  },
  {
    number: 110,
    ar: "النصر",
    fr: "AN-NASR",
    en: "An-Nasr",
    title: {
      ar: "النصر",
      fr: "Le Secours",
      en: "Divine Support"
    },
    ayahs: 3
  },
  {
    number: 111,
    ar: "المسد",
    fr: "AL-MASAD",
    en: "Al-Masad",
    title: {
      ar: "المسد",
      fr: "Les Fibres",
      en: "The Palm Fiber"
    },
    ayahs: 5
  },
  {
    number: 112,
    ar: "الإخلاص",
    fr: "AL-IKHLAS",
    en: "Al-Ikhlas",
    title: {
      ar: "الإخلاص",
      fr: "Le Monothéisme pur",
      en: "Sincerity"
    },
    ayahs: 4
  },
  {
    number: 113,
    ar: "الفلق",
    fr: "AL-FALAQ",
    en: "Al-Falaq",
    title: {
      ar: "الفلق",
      fr: "L’Aube Naissante",
      en: "The Daybreak"
    },
    ayahs: 5
  },
  {
    number: 114,
    ar: "الناس",
    fr: "AN-NAS",
    en: "An-Nas",
    title: {
      ar: "الناس",
      fr: "Les Hommes",
      en: "Mankind"
    },
    ayahs: 6
  }
];let currentLang = "ar"; // langue par défaut

// 🔹 Toutes les traductions centralisées ici
const translations = {
  ar: {
    title: "القرآن بلغات متعددة",
    sectionTitle: "قراءة واستماع لسور القرآن الكريم",
    search: "ابحث عن سورة ...",
    verses: "آيات",
    listen: "🔊 استمع",
    back: "⮑ رجوع",
    langs: { ar: "العربية", fr: "الفرنسية", en: "الإنجليزية" }
  },
  fr: {
    title: "Coran Multilingue",
    sectionTitle: "Lire et écouter les sourates du Coran",
    search: "Rechercher une sourate ...",
    verses: "versets",
    listen: "🔊 Écouter",
    back: "⮐ Retour",
    langs: { ar: "Arabe", fr: "Français", en: "Anglais" }
  },
  en: {
    title: "Quran Multilingual",
    sectionTitle: "Read and Listen to Surahs of the Quran",
    search: "Search Surah ...",
    verses: "verses",
    listen: "🔊 Listen",
    back: "⮐ Back",
    langs: { ar: "Arabic", fr: "French", en: "English" }
  }
};

// ✅ Barre de recherche (filtrage)
document.getElementById("searchBar").addEventListener("input", (e) => {
  renderSourates(e.target.value.toLowerCase());
});

// ✅ Fonction pour changer la langue
function changeLang(lang) {
  currentLang = lang;

  // Mettre à jour les textes du header
  document.querySelector("header h1").textContent = translations[lang].title;
  document.getElementById("section-title").textContent = translations[lang].sectionTitle;
  document.getElementById("searchBar").placeholder = translations[lang].search;
  document.getElementById("back-btn").textContent = translations[lang].back;

  // 🔹 Mise à jour du bouton "Back" dans le header
  const headerBack = document.querySelector(".lang-buttons a");
  if (headerBack) headerBack.textContent = translations[lang].back;

  // Boutons de langue
  const langBtns = document.querySelectorAll(".lang-buttons button");
  langBtns[0].textContent = translations[lang].langs.ar;
  langBtns[1].textContent = translations[lang].langs.fr;
  langBtns[2].textContent = translations[lang].langs.en;

  // Ajuster la direction (RTL pour arabe)
  if (lang === "ar") {
    document.body.setAttribute("dir", "rtl");
    document.body.style.textAlign = "right";
  } else {
    document.body.setAttribute("dir", "ltr");
    document.body.style.textAlign = "left";
  }

  // Mise à jour du contenu affiché
  const verseView = document.getElementById("verse-view");
  if (verseView.style.display === "block") {
    const currentSuraNumber = parseInt(document.getElementById("sura-title").dataset.suraNumber);
    showSura(currentSuraNumber);
  } else {
    renderSourates();
  }
}

// ✅ Affichage de la liste des sourates
function renderSourates(filter = "") {
  const list = document.getElementById("sourate-list");
  list.innerHTML = "";

  sourates
    .filter(s => {
      const query = `${s.ar} ${s.fr} ${s.en} ${s.title?.fr} ${s.title?.en} ${s.title?.ar}`.toLowerCase();
      return query.includes(filter);
    })
    .forEach(s => {
      const name = s[currentLang] || s.fr;
      const subtitle = s.title?.[currentLang] || "";

      const card = document.createElement("div");
      card.className = "sourate-card";

      card.innerHTML = `
        <h3 onclick="showSura(${s.number})" style="cursor:pointer;">
          ${s.number}. ${name}
        </h3>
        <p>${subtitle}</p>
        <small>${s.ayahs} ${translations[currentLang].verses}</small><br>
        <button onclick="playSura(${s.number})">${translations[currentLang].listen}</button>
      `;

      list.appendChild(card);
    });
}

// ✅ Lecture audio
function playSura(suraNumber) {
  const suraStr = String(suraNumber).padStart(3, '0');
  const audio = new Audio(`https://verses.quran.com/${suraStr}001.mp3`);
  audio.play();
}

// ✅ Affichage d'une sourate
function showSura(suraNumber) {
  const sura = sourates.find(s => s.number === suraNumber);
  const verses = quranVerses[suraNumber]?.[currentLang];

  if (!verses) {
    alert("Verses not available!");
    return;
  }

  document.getElementById("sourate-list").style.display = "none";
  document.getElementById("verse-view").style.display = "block";

  const titleEl = document.getElementById("sura-title");
  titleEl.textContent = `${sura.number}. ${sura[currentLang]}`;
  titleEl.dataset.suraNumber = sura.number;

  const verseList = document.getElementById("verse-list");
  verseList.innerHTML = "";
  verses.forEach((v, i) => {
    const div = document.createElement("div");
    div.className = "verse";
    div.innerHTML = `<b>${i + 1}</b> - ${v}`;
    verseList.appendChild(div);
  });
}

// ✅ Retour
function goBack() {
  const list = document.getElementById("sourate-list");
  list.style.display = "grid";
  document.getElementById("verse-view").style.display = "none";
}

// Lancer en langue par défaut
changeLang(currentLang);
