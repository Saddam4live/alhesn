/**
 * الحصن Hotspot & Menu Configuration
 * Exported from الحصن Admin Panel
 * 100% Offline Compatible
 */
const DEFAULT_HOTSPOT_CONFIG = {
  "cafeName": "الحصن كافي",
  "cafeTagline": "COFFEE • SWEETS • WIFI",
  "welcomeText": "تفضل بتسجيل الدخول للوصول إلى شبكتنا الخاصة.",
  "address": "ذمار - الدائري الغربي - جولة الدناني",
  "phone": "783333148",
  "copyright": "جميع الحقوق محفوظة",
  "currency": "ريال",
  "loginMode": "username",
  "cardPlaceholder": "رقم البطاقة",
  "loginBtnText": "تسجيل الدخول للشبكة ←",
  "showTrialBtn": true,
  "trialBtnText": "تجربة إنترنت مجاني ←",
  "showMenuCard": true,
  "menuCardTitle": "قائمتنا المختارة",
  "menuCardDesc": "تصفح قائمتنا لاكتشاف متعة المذاق؛ حيث تلتقي روعة المشروبات الساخنة والباردة مع ألذ أصناف الحلويات الفاخرة.",
  "menuCardBtn": "استكشف ←",
  "logoHorizontal": "img/logo-horizontal.png",
  "logoBadge": "img/logo-badge.png",
  "categories": [
    {
      "id": "hot-drinks",
      "title": "المشروبات الساخنة",
      "subtitle": "قهوة، شاي، إسبريسو ومشروبات ساخنة",
      "number": "01",
      "icon": "img/cat-hot.png",
      "sections": [
        {
          "title": "الشاي",
          "items": [
            {
              "name": "شاي",
              "price": "10",
              "note": ""
            },
            {
              "name": "شاي",
              "price": "12",
              "note": "(قرفة / عسل / ميرامية)"
            },
            {
              "name": "شاي كرك",
              "price": "18",
              "note": ""
            }
          ]
        },
        {
          "title": "القهوة",
          "items": [
            {
              "name": "قهوة تركي S",
              "price": "12",
              "note": ""
            },
            {
              "name": "قهوة تركي D",
              "price": "15",
              "note": ""
            },
            {
              "name": "نسكافيه",
              "price": "15",
              "note": ""
            }
          ]
        },
        {
          "title": "هوت درينك",
          "items": [
            {
              "name": "هوت شوكليت",
              "price": "22",
              "note": ""
            },
            {
              "name": "هوت لوتس",
              "price": "25",
              "note": ""
            },
            {
              "name": "هوت نوتيلا",
              "price": "25",
              "note": ""
            }
          ]
        },
        {
          "title": "إسبريسو",
          "items": [
            {
              "name": "كافي لاتيه",
              "price": "22",
              "note": ""
            },
            {
              "name": "كافي لاتيه كراميل",
              "price": "25",
              "note": ""
            },
            {
              "name": "كافي لاتيه بندق",
              "price": "25",
              "note": ""
            },
            {
              "name": "كافي لاتيه فانيلا",
              "price": "25",
              "note": ""
            },
            {
              "name": "كابوساه",
              "price": "20",
              "note": ""
            },
            {
              "name": "سبانش لاتيه",
              "price": "24",
              "note": ""
            },
            {
              "name": "سينامون دولتشي لاتيه",
              "price": "22",
              "note": ""
            }
          ]
        },
        {
          "title": "مشروبات مميزة",
          "items": [
            {
              "name": "كرتادو",
              "price": "24",
              "note": ""
            },
            {
              "name": "مكياتو",
              "price": "22",
              "note": ""
            },
            {
              "name": "أفيكاتو",
              "price": "22",
              "note": ""
            },
            {
              "name": "كراميل مكياتو",
              "price": "28",
              "note": ""
            }
          ]
        },
        {
          "title": "مشروبات أخرى",
          "items": [
            {
              "name": "سحلب بالمكسرات",
              "price": "22",
              "note": ""
            },
            {
              "name": "زهورات بالعسل",
              "price": "15",
              "note": ""
            }
          ]
        },
        {
          "title": "قهوة مختصة",
          "items": [
            {
              "name": "أمريكانو",
              "price": "22",
              "note": ""
            },
            {
              "name": "إسبريسو S",
              "price": "15",
              "note": ""
            },
            {
              "name": "إسبريسو D",
              "price": "22",
              "note": ""
            }
          ]
        }
      ]
    },
    {
      "id": "cold-drinks",
      "title": "المشروبات الباردة",
      "subtitle": "آيس كوفي، عصائر، ميلك شيك ومنعشات",
      "number": "02",
      "icon": "img/cat-cold.png",
      "sections": [
        {
          "title": "القهوة الباردة",
          "items": [
            {
              "name": "آيس كوفي",
              "price": "22",
              "note": ""
            },
            {
              "name": "آيس سبانش لاتيه",
              "price": "25",
              "note": ""
            },
            {
              "name": "آيس كراميل ماكياتو",
              "price": "26",
              "note": ""
            },
            {
              "name": "آيس وايت موكا",
              "price": "26",
              "note": ""
            },
            {
              "name": "آيس موكا شوكليت",
              "price": "24",
              "note": ""
            }
          ]
        },
        {
          "title": "الميلك شيك",
          "items": [
            {
              "name": "ميلك شيك فانيلا",
              "price": "22",
              "note": ""
            },
            {
              "name": "ميلك شيك لوتس",
              "price": "25",
              "note": ""
            },
            {
              "name": "ميلك شيك أوريو",
              "price": "24",
              "note": ""
            },
            {
              "name": "ميلك شيك شوكولا",
              "price": "24",
              "note": ""
            }
          ]
        },
        {
          "title": "العصائر والسموذي",
          "items": [
            {
              "name": "سموذي مانجو",
              "price": "22",
              "note": ""
            },
            {
              "name": "سموذي فراولة",
              "price": "22",
              "note": ""
            },
            {
              "name": "موهيتو كلاسيك",
              "price": "18",
              "note": ""
            },
            {
              "name": "موهيتو رمان / فراولة",
              "price": "20",
              "note": ""
            },
            {
              "name": "عصير برتقال طبيعي",
              "price": "15",
              "note": ""
            },
            {
              "name": "ليموناضة بالنعناع",
              "price": "15",
              "note": ""
            }
          ]
        }
      ]
    },
    {
      "id": "sweets-cake",
      "title": "الحلويات والكيك",
      "subtitle": "كريب، وافل، تشيز كيك وكنافة",
      "number": "03",
      "icon": "img/cat-sweets.png",
      "sections": [
        {
          "title": "كيك وحلى",
          "items": [
            {
              "name": "تشيز كيك",
              "price": "25",
              "note": "(بلوبيري/نوتيلا/بستاشيو/لوتس/ليمون)"
            },
            {
              "name": "تشيز كيك بريميوم",
              "price": "28",
              "note": "(دبي/أناناس)"
            },
            {
              "name": "سان سباستيان",
              "price": "35",
              "note": ""
            },
            {
              "name": "بومب تشيز",
              "price": "30",
              "note": ""
            },
            {
              "name": "حلا الباونتي",
              "price": "30",
              "note": ""
            },
            {
              "name": "حلا الكندر",
              "price": "28",
              "note": ""
            }
          ]
        },
        {
          "title": "متفرقات وإضافات",
          "items": [
            {
              "name": "حلى اليوم",
              "price": "-",
              "note": "إسأل عنه"
            },
            {
              "name": "إضافة بوظة",
              "price": "5",
              "note": ""
            },
            {
              "name": "كريب شوكولاتة",
              "price": "25",
              "note": ""
            },
            {
              "name": "كريب فواكه ونوتيلا",
              "price": "28",
              "note": ""
            },
            {
              "name": "وافل بلجيكي كلاسيك",
              "price": "22",
              "note": ""
            },
            {
              "name": "كنافة نابلسية فاخرة",
              "price": "25",
              "note": ""
            }
          ]
        }
      ]
    }
  ]
};

window.HotspotConfig = DEFAULT_HOTSPOT_CONFIG;
