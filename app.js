    // ═══════════════════════════════════════════
    // TRANSLATIONS (all 20 Indian languages + English)
    // ═══════════════════════════════════════════
    const LANGUAGES = {
      en: 'English', hi: 'हिन्दी', bn: 'বাংলা', te: 'తెలుగు', ta: 'தமிழ்',
      mr: 'मराठी', gu: 'ગુજરાતી', kn: 'ಕನ್ನಡ', ml: 'മലയാളം', pa: 'ਪੰਜਾਬੀ',
      or: 'ଓଡ଼ିଆ', as: 'অসমীয়া', ur: 'اردو', sa: 'संस्कृतम्', ne: 'नेपाली',
      mai: 'मैथिली', sat: 'ᱥᱟᱱᱛᱟᱲᱤ', ks: 'कॉशुर', doi: 'डोगरी', mni: 'ꯃꯩꯇꯩꯂꯥꯏ'
    };

    const T = {
      en: {
        nav_features:'Features',nav_map:'Live Map',nav_zones:'Danger Zones',nav_emergency:'Emergency',nav_translator:'Translator',
        hero_title:'Your Safety,<br/>Our <span>Mission</span>',hero_sub:"India's most comprehensive tourist safety platform. Break language barriers, find help instantly, and explore with confidence — from Kashmir to Kanyakumari.",
        hero_explore:'Explore Map',hero_sos:'SOS Emergency',
        feat_badge:'WHY YATRASAATHI',feat_title:'Everything a Tourist Needs',feat_sub:'Built for the incredible diversity of India, designed to keep every traveler safe and connected.',
        f1_title:'20+ Indian Languages',f1_desc:'Communicate in your native language. Real-time translation across all major Indian languages.',
        f2_title:'Live GPS Tracking',f2_desc:'Share your real-time location with loved ones and authorities for instant assistance.',
        f3_title:'Danger Zone Alerts',f3_desc:'Real-time warnings about terrorism, landslides, floods, earthquakes, and more.',
        f4_title:'Nearby Services',f4_desc:'Find hotels, hospitals, police stations, and restaurants instantly on the map.',
        f5_title:'Emergency Contacts',f5_desc:'One-tap access to Police, Ambulance, Fire, Tourist Helpline, and Women\'s Helpline.',
        f6_title:'SOS Alert',f6_desc:'Instant SOS system that shares your location and alerts local authorities immediately.',
        map_badge:'INTERACTIVE MAP',map_title:'Explore India Safely',map_sub:'Real-time danger zones, nearby services, and your live location — all in one map.',
        sb_location:'Your Location',sb_start:'Start Live Tracking',sb_noloc:'Location not available',
        sb_nearby:'Find Nearby',sb_hotel:'Hotels',sb_hospital:'Hospitals',sb_police:'Police',sb_restaurant:'Restaurants',
        sb_legend:'Danger Zones',lg_high:'High Risk — Avoid travel',lg_med:'Medium Risk — Travel with caution',lg_low:'Low Risk — Stay informed',lg_safe:'Safe Zone — Popular tourist area',
        dz_badge:'SAFETY ALERTS',dz_title:'Danger Zones Across India',dz_sub:'Stay informed about regions with potential threats before you travel.',
        em_badge:'EMERGENCY',em_title:"Need Help? We're Here.",em_sub:'Critical contacts that could save your life. Save them before you travel.',
        tr_badge:'LANGUAGE BRIDGE',tr_title:'Instant Translation',tr_sub:'Break the language barrier. Translate between any Indian languages instantly.',
        tr_from:'From',tr_to:'To',tr_btn:'Translate',tr_input_label:'Input text',tr_output_label:'Translation',tr_quick:'Quick Phrases',
        sos_title:'Emergency SOS',sos_desc:'Your location will be shared with emergency services immediately.',
        sos_call:'Call 112',sos_cancel:'Cancel',
        track_active:'Live tracking active — sharing your location',
        footer_desc:'Making India safer and more accessible for every tourist. From the Himalayas to the Indian Ocean, we have got your back.',
        footer_quick:'Quick Links',footer_helplines:'Helplines',footer_motto:'Safe Travels, Happy Memories.',
        toast_track:'Live tracking started successfully!',toast_stop:'Tracking stopped.',toast_nearby:'Showing nearby',
      },
      hi: {
        nav_features:'विशेषताएँ',nav_map:'लाइव मानचित्र',nav_zones:'खतरे के क्षेत्र',nav_emergency:'आपातकाल',nav_translator:'अनुवादक',
        hero_title:'आपकी सुरक्षा,<br/>हमारा <span>मिशन</span>',hero_sub:'भारत का सबसे व्यापक पर्यटक सुरक्षा मंच। भाषा बाधाओं को तोड़ें, तुरंत मदद पाएँ और आत्मविश्वास से घूमें।',
        hero_explore:'मानचित्र देखें',hero_sos:'आपातकालीन SOS',
        feat_badge:'यात्रासाथी क्यों',feat_title:'पर्यटक की हर ज़रूरत',feat_sub:'भारत की अद्भुत विविधता के लिए बनाया गया, हर यात्री को सुरक्षित रखने के लिए।',
        f1_title:'20+ भारतीय भाषाएँ',f1_desc:'अपनी मातृभाषा में बात करें। सभी प्रमुख भारतीय भाषाओं में तत्काल अनुवाद।',
        f2_title:'लाइव GPS ट्रैकिंग',f2_desc:'अपना लाइव स्थान प्रियजनों और अधिकारियों के साथ साझा करें।',
        f3_title:'खतरे के क्षेत्र की चेतावनी',f3_desc:'आतंकवाद, भूस्खलन, बाढ़, भूकंप आदि की तत्काल चेतावनी।',
        f4_title:'निकटतम सेवाएँ',f4_desc:'होटल, अस्पताल, पुलिस स्टेशन और रेस्तरां तुरंत खोजें।',
        f5_title:'आपातकालीन संपर्क',f5_desc:'पुलिस, एम्बुलेंस, अग्निशमन, पर्यटक हेल्पलाइन तक एक टैप में पहुँचें।',
        f6_title:'SOS अलर्ट',f6_desc:'तत्काल SOS सिस्टम जो आपका स्थान साझा करता है।',
        map_badge:'इंटरैक्टिव मानचित्र',map_title:'भारत को सुरक्षित रूप से देखें',map_sub:'लाइव खतरे के क्षेत्र, निकटतम सेवाएँ और आपका स्थान — एक मानचित्र में।',
        sb_location:'आपका स्थान',sb_start:'लाइव ट्रैकिंग शुरू करें',sb_noloc:'स्थान उपलब्ध नहीं',
        sb_nearby:'निकटतम खोजें',sb_hotel:'होटल',sb_hospital:'अस्पताल',sb_police:'पुलिस',sb_restaurant:'रेस्तरां',
        sb_legend:'खतरे के क्षेत्र',lg_high:'उच्च जोखिम — यात्रा से बचें',lg_med:'मध्यम जोखिम — सावधानी से यात्रा करें',lg_low:'कम जोखिम — जानकारी रखें',lg_safe:'सुरक्षित क्षेत्र — लोकप्रिय पर्यटन स्थल',
        dz_badge:'सुरक्षा अलर्ट',dz_title:'भारत में खतरे के क्षेत्र',dz_sub:'यात्रा करने से पहले संभावित खतरों के बारे में जानकारी रखें।',
        em_badge:'आपातकाल',em_title:'मदद चाहिए? हम यहाँ हैं।',em_sub:'महत्वपूर्ण संपर्क जो आपकी जान बचा सकते हैं।',
        tr_badge:'भाषा पुल',tr_title:'तत्काल अनुवाद',tr_sub:'भाषा बाधा तोड़ें। किसी भी भारतीय भाषा में तुरंत अनुवाद करें।',
        tr_from:'से',tr_to:'को',tr_btn:'अनुवाद करें',tr_input_label:'पाठ दर्ज करें',tr_output_label:'अनुवाद',tr_quick:'त्वरित वाक्यांश',
        sos_title:'आपातकालीन SOS',sos_desc:'आपका स्थान तुरंत आपातकालीन सेवाओं के साथ साझा किया जाएगा।',
        sos_call:'112 पर कॉल करें',sos_cancel:'रद्द करें',
        track_active:'लाइव ट्रैकिंग सक्रिय — आपका स्थान साझा हो रहा है',
        footer_desc:'हर पर्यटक के लिए भारत को सुरक्षित और सुलभ बनाना। हिमालय से हिंद महासागर तक, हम आपके साथ हैं।',
        footer_quick:'त्वरित लिंक',footer_helplines:'हेल्पलाइन',footer_motto:'सुरक्षित यात्रा, खुश यादें।',
        toast_track:'लाइव ट्रैकिंग सफलतापूर्वक शुरू!',toast_stop:'ट्रैकिंग बंद।',toast_nearby:'दिखा रहे हैं निकटतम',
      },
      bn: {
        nav_features:'বৈশিষ্ট্য',nav_map:'লাইভ মানচিত্র',nav_zones:'বিপদ অঞ্চল',nav_emergency:'জরুরি',nav_translator:'অনুবাদক',
        hero_title:'আপনার নিরাপত্তা,<br/>আমাদের <span>মিশন</span>',hero_sub:'ভারতের সবচেয়ে বিস্তৃত পর্যটক নিরাপত্তা প্ল্যাটফর্ম।',
        hero_explore:'মানচিত্র দেখুন',hero_sos:'জরুরি SOS',
        feat_badge:'যাত্রাসাথী কেন',feat_title:'পর্যটকের প্রয়োজন',feat_sub:'ভারতের অসাধারণ বৈচিত্র্যের জন্য তৈরি।',
        f1_title:'20+ ভারতীয় ভাষা',f1_desc:'আপনার মাতৃভাষায় কথা বলুন।',
        f2_title:'লাইভ GPS ট্র্যাকিং',f2_desc:'আপনার লাইভ অবস্থান শেয়ার করুন।',
        f3_title:'বিপদ এলাকা সতর্কতা',f3_desc:'সন্ত্রাস, ভূমিধস, বন্যা, ভূমিকম্পের সতর্কতা।',
        f4_title:'কাছের সেবা',f4_desc:'হোটেল, হাসপাতাল, থানা ও রেস্তোরাঁ খুঁজুন।',
        f5_title:'জরুরি যোগাযোগ',f5_desc:'পুলিশ, অ্যাম্বুলেন্স, অগ্নিনির্বাপন তত্ক্ষণাৎ।',
        f6_title:'SOS সতর্কতা',f6_desc:'তাৎক্ষণিক SOS সিস্টেম।',
        map_badge:'ইন্টারেকটিভ মানচিত্র',map_title:'নিরাপদে ভারত ঘুরুন',map_sub:'লাইভ বিপদ এলাকা ও সেবা এক মানচিত্রে।',
        sb_location:'আপনার অবস্থান',sb_start:'লাইভ ট্র্যাকিং শুরু',sb_noloc:'অবস্থান পাওয়া যায়নি',
        sb_nearby:'কাছের খুঁজুন',sb_hotel:'হোটেল',sb_hospital:'হাসপাতাল',sb_police:'পুলিশ',sb_restaurant:'রেস্তোরাঁ',
        sb_legend:'বিপদ এলাকা',lg_high:'উচ্চ ঝুঁকি',lg_med:'মধ্যম ঝুঁকি',lg_low:'কম ঝুঁকি',lg_safe:'নিরাপদ এলাকা',
        dz_badge:'নিরাপত্তা সতর্কতা',dz_title:'ভারতের বিপদ এলাকা',dz_sub:'ভ্রমণের আগে সম্ভাব্য হুমকি সম্পর্কে জানুন।',
        em_badge:'জরুরি',em_title:'সাহায্য লাগবে? আমরা এখানে।',em_sub:'গুরুত্বপূর্ণ যোগাযোগ।',
        tr_badge:'ভাষা সেতু',tr_title:'তাৎক্ষণিক অনুবাদ',tr_sub:'ভাষা বাধা ভাঙুন।',
        tr_from:'থেকে',tr_to:'তে',tr_btn:'অনুবাদ করুন',tr_input_label:'পাঠ্য লিখুন',tr_output_label:'অনুবাদ',tr_quick:'দ্রুত বাক্যাংশ',
        sos_title:'জরুরি SOS',sos_desc:'আপনার অবস্থান জরুরি সেবার সাথে শেয়ার হবে।',
        sos_call:'112-এ কল করুন',sos_cancel:'বাতিল',
        track_active:'লাইভ ট্র্যাকিং সক্রিয়',
        footer_desc:'প্রতিটি পর্যটকের জন্য ভারতকে নিরাপদ করা।',
        footer_quick:'দ্রুত লিঙ্ক',footer_helplines:'হেল্পলাইন',footer_motto:'নিরাপদ ভ্রমণ, সুখময় স্মৃতি।',
        toast_track:'লাইভ ট্র্যাকিং শুরু হয়েছে!',toast_stop:'ট্র্যাকিং বন্ধ।',toast_nearby:'দেখাচ্ছে কাছের',
      },
      ta: {
        nav_features:'அம்சங்கள்',nav_map:'நேரடி வரைபடம்',nav_zones:'ஆபத்து மண்டலங்கள்',nav_emergency:'அவசரம்',nav_translator:'மொழிபெயர்ப்பாளர்',
        hero_title:'உங்கள் பாதுகாப்பு,<br/>எங்கள் <span>பணி</span>',hero_sub:'இந்தியாவின் மிக விரிவான சுற்றுலா பாதுகாப்பு தளம்.',
        hero_explore:'வரைபடம்',hero_sos:'அவசர SOS',
        feat_badge:'ஏன் யாத்ராசாதி',feat_title:'சுற்றுலா பயணியின் தேவை',feat_sub:'இந்தியாவின் அற்புதமான பன்முகத்தன்மைக்காக உருவாக்கப்பட்டது.',
        f1_title:'20+ இந்திய மொழிகள்',f1_desc:'உங்கள் தாய்மொழியில் பேசுங்கள்.',
        f2_title:'நேரடி GPS கண்காணிப்பு',f2_desc:'உங்கள் நேரடி இருப்பிடத்தைப் பகிரவும்.',
        f3_title:'ஆபத்து மண்டல எச்சரிக்கை',f3_desc:'பயங்கரவாதம், நிலச்சரிவு, வெள்ளம், நிலநடுக்கம் எச்சரிக்கைகள்.',
        f4_title:'அருகிலுள்ள சேவைகள்',f4_desc:'ஹோட்டல்கள், மருத்துவமனைகள், காவல் நிலையங்கள் கண்டறியவும்.',
        f5_title:'அவசர தொடர்புகள்',f5_desc:'காவல், ஆம்புலன்ஸ், தீயணைப்பு உடனடி அணுகல்.',
        f6_title:'SOS எச்சரிக்கை',f6_desc:'உடனடி SOS அமைப்பு.',
        map_badge:'ஊடாடும் வரைபடம்',map_title:'இந்தியாவை பாதுகாப்பாக ஆராயுங்கள்',map_sub:'நேரடி ஆபத்து மண்டலங்கள் மற்றும் சேவைகள்.',
        sb_location:'உங்கள் இடம்',sb_start:'நேரடி கண்காணிப்பு',sb_noloc:'இடம் கிடைக்கவில்லை',
        sb_nearby:'அருகில் தேடுங்கள்',sb_hotel:'ஹோட்டல்கள்',sb_hospital:'மருத்துவமனைகள்',sb_police:'காவல்',sb_restaurant:'உணவகங்கள்',
        sb_legend:'ஆபத்து மண்டலங்கள்',lg_high:'அதிக ஆபத்து',lg_med:'நடுத்தர ஆபத்து',lg_low:'குறைந்த ஆபத்து',lg_safe:'பாதுகாப்பான மண்டலம்',
        dz_badge:'பாதுகாப்பு எச்சரிக்கை',dz_title:'இந்தியா முழுவதும் ஆபத்து மண்டலங்கள்',dz_sub:'பயணிக்கும் முன் அறிந்து கொள்ளுங்கள்.',
        em_badge:'அவசரம்',em_title:'உதவி வேண்டுமா? நாங்கள் இங்கே இருக்கிறோம்.',em_sub:'முக்கியமான தொடர்புகள்.',
        tr_badge:'மொழி பாலம்',tr_title:'உடனடி மொழிபெயர்ப்பு',tr_sub:'மொழி தடையை உடையுங்கள்.',
        tr_from:'இருந்து',tr_to:'க்கு',tr_btn:'மொழிபெயர்க்கவும்',tr_input_label:'உரையை உள்ளிடவும்',tr_output_label:'மொழிபெயர்ப்பு',tr_quick:'விரைவு சொற்றொடர்கள்',
        sos_title:'அவசர SOS',sos_desc:'உங்கள் இடம் உடனடியாக பகிரப்படும்.',
        sos_call:'112-ஐ அழைக்கவும்',sos_cancel:'ரத்து',
        track_active:'நேரடி கண்காணிப்பு செயலில்',
        footer_desc:'ஒவ்வொரு சுற்றுலா பயணிக்கும் இந்தியாவை பாதுகாப்பாக்குதல்.',
        footer_quick:'விரைவு இணைப்புகள்',footer_helplines:'உதவி எண்கள்',footer_motto:'பாதுகாப்பான பயணம், மகிழ்ச்சியான நினைவுகள்.',
        toast_track:'நேரடி கண்காணிப்பு தொடங்கியது!',toast_stop:'கண்காணிப்பு நிறுத்தப்பட்டது.',toast_nearby:'காட்டுகிறது அருகில்',
      },
      te: {
        nav_features:'లక్షణాలు',nav_map:'లైవ్ మ్యాప్',nav_zones:'ప్రమాద మండలాలు',nav_emergency:'అత్యవసరం',nav_translator:'అనువాదకుడు',
        hero_title:'మీ భద్రత,<br/>మా <span>మిషన్</span>',hero_sub:'భారతదేశంలో అత్యంత సమగ్ర పర్యాటక భద్రతా వేదిక.',
        hero_explore:'మ్యాప్ చూడండి',hero_sos:'అత్యవసర SOS',
        feat_badge:'యాత్రసాథి ఎందుకు',feat_title:'పర్యాటకుడి అవసరం',feat_sub:'భారతదేశ వైవిధ్యం కోసం రూపొందించబడింది.',
        f1_title:'20+ భారతీయ భాషలు',f1_desc:'మీ మాతృభాషలో మాట్లాడండి.',
        f2_title:'లైవ్ GPS ట్రాకింగ్',f2_desc:'మీ లైవ్ స్థానాన్ని పంచుకోండి.',
        f3_title:'ప్రమాద మండల హెచ్చరికలు',f3_desc:'ఉగ్రవాదం, కొండచరియలు విరిగిపడటం, వరదల హెచ్చరికలు.',
        f4_title:'సమీప సేవలు',f4_desc:'హోటళ్లు, ఆసుపత్రులు, పోలీస్ స్టేషన్లు కనుగొనండి.',
        f5_title:'అత్యవసర సంప్రదింపులు',f5_desc:'పోలీస్, అంబులెన్స్, అగ్నిమాపక తక్షణ ప్రాప్యత.',
        f6_title:'SOS హెచ్చరిక',f6_desc:'తక్షణ SOS వ్యవస్థ.',
        map_badge:'ఇంటరాక్టివ్ మ్యాప్',map_title:'భారతదేశాన్ని సురక్షితంగా అన్వేషించండి',map_sub:'లైవ్ ప్రమాద మండలాలు మరియు సేవలు.',
        sb_location:'మీ స్థానం',sb_start:'లైవ్ ట్రాకింగ్ ప్రారంభించండి',sb_noloc:'స్థానం అందుబాటులో లేదు',
        sb_nearby:'సమీపంలో వెతకండి',sb_hotel:'హోటళ్లు',sb_hospital:'ఆసుపత్రులు',sb_police:'పోలీస్',sb_restaurant:'రెస్టారెంట్లు',
        sb_legend:'ప్రమాద మండలాలు',lg_high:'అధిక ప్రమాదం',lg_med:'మధ్యస్థ ప్రమాదం',lg_low:'తక్కువ ప్రమాదం',lg_safe:'సురక్షిత మండలం',
        dz_badge:'భద్రతా హెచ్చరికలు',dz_title:'భారతదేశంలో ప్రమాద మండలాలు',dz_sub:'ప్రయాణించే ముందు తెలుసుకోండి.',
        em_badge:'అత్యవసరం',em_title:'సహాయం కావాలా? మేము ఇక్కడ ఉన్నాము.',em_sub:'క్లిష్టమైన సంప్రదింపులు.',
        tr_badge:'భాషా బ్రిడ్జ్',tr_title:'తక్షణ అనువాదం',tr_sub:'భాషా అవరోధాన్ని బద్దలు కొట్టండి.',
        tr_from:'నుండి',tr_to:'కి',tr_btn:'అనువాదం చేయండి',tr_input_label:'టెక్స్ట్ నమోదు చేయండి',tr_output_label:'అనువాదం',tr_quick:'త్వరిత వాక్యాలు',
        sos_title:'అత్యవసర SOS',sos_desc:'మీ స్థానం తక్షణమే పంచబడుతుంది.',
        sos_call:'112 కి కాల్ చేయండి',sos_cancel:'రద్దు',
        track_active:'లైవ్ ట్రాకింగ్ యాక్టివ్',
        footer_desc:'ప్రతి పర్యాటకుడికి భారతదేశాన్ని సురక్షితంగా చేయడం.',
        footer_quick:'త్వరిత లింకులు',footer_helplines:'హెల్ప్‌లైన్‌లు',footer_motto:'సురక్షిత ప్రయాణం, సంతోషకరమైన జ్ఞాపకాలు.',
        toast_track:'లైవ్ ట్రాకింగ్ ప్రారంభమైంది!',toast_stop:'ట్రాకింగ్ ఆపబడింది.',toast_nearby:'చూపిస్తోంది సమీపంలో',
      },
      mr: {
        nav_features:'वैशिष्ट्ये',nav_map:'लाइव्ह नकाशा',nav_zones:'धोक्याचे क्षेत्र',nav_emergency:'आणीबाणी',nav_translator:'भाषांतरक',
        hero_title:'तुमचे सुरक्षितता,<br/>आमचे <span>मिशन</span>',hero_sub:'भारतातील सर्वात सर्वसमावेशक पर्यटक सुरक्षितता मंच.',
        hero_explore:'नकाशा बघा',hero_sos:'आणीबाणी SOS',
        feat_badge:'यात्रासाथी का',feat_title:'पर्यटकाची गरज',feat_sub:'भारताच्या अद्भुत विविधतेसाठी तयार.',
        f1_title:'20+ भारतीय भाषा',f1_desc:'तुमच्या मातृभाषेत बोला.',
        f2_title:'लाइव्ह GPS ट्रॅकिंग',f2_desc:'तुमचे लाइव्ह स्थान शेअर करा.',
        f3_title:'धोक्याच्या क्षेत्राची सूचना',f3_desc:'आतंकवाद, भूस्खलन, पूर, भूकंप सूचना.',
        f4_title:'जवळच्या सेवा',f4_desc:'हॉटेल, रुग्णालय, पोलीस स्टेशन शोधा.',
        f5_title:'आणीबाणी संपर्क',f5_desc:'पोलीस, ऍम्बुलन्स, अग्निशमन तत्काळ.',
        f6_title:'SOS सूचना',f6_desc:'तत्काळ SOS प्रणाली.',
        map_badge:'इंटरॅक्टिव्ह नकाशा',map_title:'भारत सुरक्षितपणे शोधा',map_sub:'लाइव्ह धोक्याची क्षेत्रे आणि सेवा.',
        sb_location:'तुमचे स्थान',sb_start:'लाइव्ह ट्रॅकिंग सुरू करा',sb_noloc:'स्थान उपलब्ध नाही',
        sb_nearby:'जवळ शोधा',sb_hotel:'हॉटेल',sb_hospital:'रुग्णालय',sb_police:'पोलीस',sb_restaurant:'उपहारगृह',
        sb_legend:'धोक्याची क्षेत्रे',lg_high:'उच्च धोका',lg_med:'मध्यम धोका',lg_low:'कमी धोका',lg_safe:'सुरक्षित क्षेत्र',
        dz_badge:'सुरक्षितता सूचना',dz_title:'भारतातील धोक्याची क्षेत्रे',dz_sub:'प्रवासापूर्वी जाणून घ्या.',
        em_badge:'आणीबाणी',em_title:'मदत हवी आहे? आम्ही येथे आहोत.',em_sub:'महत्त्वाचे संपर्क.',
        tr_badge:'भाषा पूल',tr_title:'तत्काळ भाषांतर',tr_sub:'भाषा अडथळा तोडा.',
        tr_from:'पासून',tr_to:'ला',tr_btn:'भाषांतर करा',tr_input_label:'मजकूर टाइप करा',tr_output_label:'भाषांतर',tr_quick:'झटपट वाक्ये',
        sos_title:'आणीबाणी SOS',sos_desc:'तुमचे स्थान तत्काळ शेअर होईल.',
        sos_call:'112 वर कॉल करा',sos_cancel:'रद्द',
        track_active:'लाइव्ह ट्रॅकिंग सक्रिय',
        footer_desc:'प्रत्येक पर्यटकासाठी भारत सुरक्षित करणे.',
        footer_quick:'झटपट दुवे',footer_helplines:'हेल्पलाइन',footer_motto:'सुरक्षित प्रवास, आनंददायी आठवणी.',
        toast_track:'लाइव्ह ट्रॅकिंग सुरू झाली!',toast_stop:'ट्रॅकिंग थांबवली.',toast_nearby:'दाखवत आहे जवळचे',
      },
      gu: {
        nav_features:'લક્ષણો',nav_map:'લાઈવ્ નકશો',nav_zones:'ખતરાના વિસ્તારો',nav_emergency:'આણીબાણી',nav_translator:'અનુવાદક',
        hero_title:'તમારી સુરક્ષા,<br/>અમારું <span>મિશન</span>',hero_sub:'ભારતનું સૌથી વ્યાપક પ્રવાસી સુરક્ષા પ્લેટફોર્મ.',
        hero_explore:'નકશો જુઓ',hero_sos:'આણીબાણી SOS',
        feat_badge:'યાત્રાસાથી શા માટે',feat_title:'પ્રવાસીની જરૂરિયાત',feat_sub:'ભારતની અદ્ભુત વિવિધતા માટે બનાવેલ.',
        f1_title:'20+ ભારતીય ભાષાઓ',f1_desc:'તમારી માતૃભાષામાં બોલો.',
        f2_title:'લાઈવ્ GPS ટ્રેકિંગ',f2_desc:'તમારું લાઈવ્ સ્થાન શેર કરો.',
        f3_title:'ખતરાના વિસ્તાર ચેતવણીઓ',f3_desc:'આતંકવાદ, ભૂસ્ખલન, પૂર ચેતવણીઓ.',
        f4_title:'નજીકની સેવાઓ',f4_desc:'હોટલ, હોસ્પિટલ, પોલીસ સ્ટેશન શોધો.',
        f5_title:'આણીબાણી સંપર્ક',f5_desc:'પોલીસ, એમ્બ્યુલન્સ, અગ્નિશમન તાત્કાલિક.',
        f6_title:'SOS ચેતવણી',f6_desc:'તાત્કાલિક SOS સિસ્ટમ.',
        map_badge:'ઇન્ટરેક્ટિવ નકશો',map_title:'ભારત સુરક્ષિત રીતે શોધો',map_sub:'લાઈવ્ ખતરાના વિસ્તારો અને સેવાઓ.',
        sb_location:'તમારું સ્થાન',sb_start:'લાઈવ્ ટ્રેકિંગ શરૂ કરો',sb_noloc:'સ્થાન ઉપલબ્ધ નથી',
        sb_nearby:'નજીક શોધો',sb_hotel:'હોટલ',sb_hospital:'હોસ્પિટલ',sb_police:'પોલીસ',sb_restaurant:'રેસ્ટોરન્ટ',
        sb_legend:'ખતરાના વિસ્તારો',lg_high:'ઊંચો ખતરો',lg_med:'મધ્યમ ખતરો',lg_low:'ઓછો ખતરો',lg_safe:'સુરક્ષિત વિસ્તાર',
        dz_badge:'સુરક્ષા ચેતવણીઓ',dz_title:'ભારતમાં ખતરાના વિસ્તારો',dz_sub:'પ્રવાસ પહેલાં જાણો.',
        em_badge:'આણીબાણી',em_title:'મદદ જોઈએ છે? અમે અહીં છીએ.',em_sub:'મહત્વપૂર્ણ સંપર્કો.',
        tr_badge:'ભાષા પુલ',tr_title:'તાત્કાલિક અનુવાદ',tr_sub:'ભાષા અવરોધ તોડો.',
        tr_from:'થી',tr_to:'ને',tr_btn:'અનુવાદ કરો',tr_input_label:'ટેક્સ્ટ દાખલ કરો',tr_output_label:'અનુવાદ',tr_quick:'ઝડપી વાક્યો',
        sos_title:'આણીબાણી SOS',sos_desc:'તમારું સ્થાન તાત્કાલિક શેર થશે.',
        sos_call:'112 પર કોલ કરો',sos_cancel:'રદ કરો',
        track_active:'લાઈવ્ ટ્રેકિંગ સક્રિય',
        footer_desc:'દરેક પ્રવાસી માટે ભારતને સુરક્ષિત બનાવવું.',
        footer_quick:'ઝડપી લિંક્સ',footer_helplines:'હેલ્પલાઇન',footer_motto:'સુરક્ષિત પ્રવાસ, ખુશીની યાદો.',
        toast_track:'લાઈવ્ ટ્રેકિંગ શરૂ થઈ!',toast_stop:'ટ્રેકિંગ બંધ.',toast_nearby:'બતાવી રહ્યા છીએ નજીકના',
      },
      kn: {
        nav_features:'ವೈಶಿಷ್ಟ್ಯಗಳು',nav_map:'ಲೈವ್ ನಕ್ಷೆ',nav_zones:'ಅಪಾಯ ಪ್ರದೇಶಗಳು',nav_emergency:'ತುರ್ತು',nav_translator:'ಅನುವಾದಕ',
        hero_title:'ನಿಮ್ಮ ಸುರಕ್ಷತೆ,<br/>ನಮ್ಮ <span>ಮಿಷನ್</span>',hero_sub:'ಭಾರತದ ಅತ್ಯಂತ ಸಮಗ್ರ ಪ್ರವಾಸಿ ಸುರಕ್ಷತಾ ವೇದಿಕೆ.',
        hero_explore:'ನಕ್ಷೆ ನೋಡಿ',hero_sos:'ತುರ್ತು SOS',
        feat_badge:'ಯಾತ್ರಾಸಾಥಿ ಏಕೆ',feat_title:'ಪ್ರವಾಸಿಯ ಅಗತ್ಯ',feat_sub:'ಭಾರತದ ಅದ್ಭುತ ವೈವಿಧ್ಯಕ್ಕಾಗಿ ರಚಿಸಲಾಗಿದೆ.',
        f1_title:'20+ ಭಾರತೀಯ ಭಾಷೆಗಳು',f1_desc:'ನಿಮ್ಮ ಮಾತೃಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ.',
        f2_title:'ಲೈವ್ GPS ಟ್ರ್ಯಾಕಿಂಗ್',f2_desc:'ನಿಮ್ಮ ಲೈವ್ ಸ್ಥಳವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.',
        f3_title:'ಅಪಾಯ ಪ್ರದೇಶ ಎಚ್ಚರಿಕೆಗಳು',f3_desc:'ಭಯೋತ್ಪಾದನೆ, ಭೂಕುಸಿತ, ಪ್ರವಾಹ ಎಚ್ಚರಿಕೆಗಳು.',
        f4_title:'ಹತ್ತಿರದ ಸೇವೆಗಳು',f4_desc:'ಹೋಟೆಲ್‌ಗಳು, ಆಸ್ಪತ್ರೆಗಳು, ಪೊಲೀಸ್ ಸ್ಟೇಷನ್‌ಗಳು ಹುಡುಕಿ.',
        f5_title:'ತುರ್ತು ಸಂಪರ್ಕಗಳು',f5_desc:'ಪೊಲೀಸ್, ಆಂಬ್ಯುಲೆನ್ಸ್, ಅಗ್ನಿಶಾಮಕ ತಕ್ಷಣ.',
        f6_title:'SOS ಎಚ್ಚರಿಕೆ',f6_desc:'ತಕ್ಷಣ SOS ವ್ಯವಸ್ಥೆ.',
        map_badge:'ಇಂಟರ್ಯಾಕ್ಟಿವ್ ನಕ್ಷೆ',map_title:'ಭಾರತವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಅನ್ವೇಷಿಸಿ',map_sub:'ಲೈವ್ ಅಪಾಯ ಪ್ರದೇಶಗಳು ಮತ್ತು ಸೇವೆಗಳು.',
        sb_location:'ನಿಮ್ಮ ಸ್ಥಳ',sb_start:'ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ',sb_noloc:'ಸ್ಥಳ ಲಭ್ಯವಿಲ್ಲ',
        sb_nearby:'ಹತ್ತಿರ ಹುಡುಕಿ',sb_hotel:'ಹೋಟೆಲ್‌ಗಳು',sb_hospital:'ಆಸ್ಪತ್ರೆಗಳು',sb_police:'ಪೊಲೀಸ್',sb_restaurant:'ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು',
        sb_legend:'ಅಪಾಯ ಪ್ರದೇಶಗಳು',lg_high:'ಹೆಚ್ಚಿನ ಅಪಾಯ',lg_med:'ಮಧ್ಯಮ ಅಪಾಯ',lg_low:'ಕಡಿಮೆ ಅಪಾಯ',lg_safe:'ಸುರಕ್ಷಿತ ಪ್ರದೇಶ',
        dz_badge:'ಸುರಕ್ಷತಾ ಎಚ್ಚರಿಕೆಗಳು',dz_title:'ಭಾರತದ ಅಪಾಯ ಪ್ರದೇಶಗಳು',dz_sub:'ಪ್ರಯಾಣಿಸುವ ಮೊದಲು ತಿಳಿಯಿರಿ.',
        em_badge:'ತುರ್ತು',em_title:'ಸಹಾಯ ಬೇಕೇ? ನಾವಿದ್ದೇವೆ.',em_sub:'ಮಹತ್ವದ ಸಂಪರ್ಕಗಳು.',
        tr_badge:'ಭಾಷಾ ಸೇತುವೆ',tr_title:'ತಕ್ಷಣ ಅನುವಾದ',tr_sub:'ಭಾಷಾ ತಡೆ ಮುರಿಯಿರಿ.',
        tr_from:'ಇಂದ',tr_to:'ಗೆ',tr_btn:'ಅನುವಾದಿಸಿ',tr_input_label:'ಪಠ್ಯ ನಮೂದಿಸಿ',tr_output_label:'ಅನುವಾದ',tr_quick:'ತ್ವರಿತ ವಾಕ್ಯಗಳು',
        sos_title:'ತುರ್ತು SOS',sos_desc:'ನಿಮ್ಮ ಸ್ಥಳ ತಕ್ಷಣ ಹಂಚಿಕೊಳ್ಳಲಾಗುತ್ತದೆ.',
        sos_call:'112 ಗೆ ಕರೆ ಮಾಡಿ',sos_cancel:'ರದ್ದು',
        track_active:'ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಸಕ್ರಿಯ',
        footer_desc:'ಪ್ರತಿ ಪ್ರವಾಸಿಗೆ ಭಾರತವನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸುವುದು.',
        footer_quick:'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',footer_helplines:'ಹೆಲ್ಪ್‌ಲೈನ್‌ಗಳು',footer_motto:'ಸುರಕ್ಷಿತ ಪ್ರಯಾಣ, ಸಂತೋಷದ ನೆನಪುಗಳು.',
        toast_track:'ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಪ್ರಾರಂಭವಾಗಿದೆ!',toast_stop:'ಟ್ರ್ಯಾಕಿಂಗ್ ನಿಂತಿದೆ.',toast_nearby:'ತೋರಿಸುತ್ತಿದೆ ಹತ್ತಿರದ',
      },
      ml: {
        nav_features:'സവിശേഷതകൾ',nav_map:'ലൈവ് മാപ്പ്',nav_zones:'അപകട മേഖലകൾ',nav_emergency:'അടിയന്തരം',nav_translator:'വിവർത്തകൻ',
        hero_title:'നിങ്ങളുടെ സുരക്ഷ,<br/>ഞങ്ങളുടെ <span>ദൗത്യം</span>',hero_sub:'ഇന്ത്യയിലെ ഏറ്റവും സമഗ്രമായ വിനോദ സഞ്ചാരി സുരക്ഷാ പ്ലാറ്റ്‌ഫോം.',
        hero_explore:'മാപ്പ് കാണുക',hero_sos:'അടിയന്തര SOS',
        feat_badge:'യാത്രാസാഥി എന്തുകൊണ്ട്',feat_title:'സഞ്ചാരിയുടെ ആവശ്യം',feat_sub:'ഇന്ത്യയുടെ അത്ഭുതകരമായ വൈവിധ്യത്തിനായി രൂപകൽപ്പന ചെയ്തത്.',
        f1_title:'20+ ഇന്ത്യൻ ഭാഷകൾ',f1_desc:'നിങ്ങളുടെ മാതൃഭാഷയിൽ സംസാരിക്കുക.',
        f2_title:'ലൈവ് GPS ട്രാക്കിംഗ്',f2_desc:'നിങ്ങളുടെ ലൈവ് ലൊക്കേഷൻ ഷെയർ ചെയ്യുക.',
        f3_title:'അപകട മേഖല മുന്നറിയിപ്പുകൾ',f3_desc:'ഭീകരത, മലയിടിച്ചിൽ, വെള്ളപ്പൊക്കം മുന്നറിയിപ്പുകൾ.',
        f4_title:'സമീപത്തുള്ള സേവനങ്ങൾ',f4_desc:'ഹോട്ടലുകൾ, ആശുപത്രികൾ, പോലീസ് സ്റ്റേഷനുകൾ കണ്ടെത്തുക.',
        f5_title:'അടിയന്തര കോൺടാക്റ്റുകൾ',f5_desc:'പോലീസ്, ആംബുലൻസ്, അഗ്നിശമന തത്ക്ഷണം.',
        f6_title:'SOS മുന്നറിയിപ്പ്',f6_desc:'തത്ക്ഷണ SOS സംവിധാനം.',
        map_badge:'ഇന്ററാക്റ്റീവ് മാപ്പ്',map_title:'ഇന്ത്യ സുരക്ഷിതമായി പര്യവേക്ഷണം ചെയ്യുക',map_sub:'ലൈവ് അപകട മേഖലകളും സേവനങ്ങളും.',
        sb_location:'നിങ്ങളുടെ സ്ഥാനം',sb_start:'ലൈവ് ട്രാക്കിംഗ് ആരംഭിക്കുക',sb_noloc:'സ്ഥാനം ലഭ്യമല്ല',
        sb_nearby:'സമീപം തിരയുക',sb_hotel:'ഹോട്ടലുകൾ',sb_hospital:'ആശുപത്രികൾ',sb_police:'പോലീസ്',sb_restaurant:'റെസ്റ്റോറന്റുകൾ',
        sb_legend:'അപകട മേഖലകൾ',lg_high:'ഉയർന്ന അപകടം',lg_med:'ഇടത്തരം അപകടം',lg_low:'കുറഞ്ഞ അപകടം',lg_safe:'സുരക്ഷിത മേഖല',
        dz_badge:'സുരക്ഷാ മുന്നറിയിപ്പുകൾ',dz_title:'ഇന്ത്യയിലെ അപകട മേഖലകൾ',dz_sub:'യാത്ര ചെയ്യുന്നതിന് മുമ്പ് അറിയുക.',
        em_badge:'അടിയന്തരം',em_title:'സഹായം വേണോ? ഞങ്ങൾ ഇവിടെയുണ്ട്.',em_sub:'പ്രധാനപ്പെട്ട കോൺടാക്റ്റുകൾ.',
        tr_badge:'ഭാഷാ പാലം',tr_title:'തത്ക്ഷണ വിവർത്തനം',tr_sub:'ഭാഷാ തടസ്സം തകർക്കുക.',
        tr_from:'നിന്ന്',tr_to:'ലേക്ക്',tr_btn:'വിവർത്തനം ചെയ്യുക',tr_input_label:'വാചകം ടൈപ്പ് ചെയ്യുക',tr_output_label:'വിവർത്തനം',tr_quick:'പെട്ടെന്നുള്ള വാക്യങ്ങൾ',
        sos_title:'അടിയന്തര SOS',sos_desc:'നിങ്ങളുടെ സ്ഥാനം തത്ക്ഷണം ഷെയർ ചെയ്യും.',
        sos_call:'112 ലേക്ക് കോൾ ചെയ്യുക',sos_cancel:'റദ്ദാക്കുക',
        track_active:'ലൈവ് ട്രാക്കിംഗ് സജീവം',
        footer_desc:'ഓരോ സഞ്ചാരിക്കും ഇന്ത്യയെ സുരക്ഷിതമാക്കുന്നു.',
        footer_quick:'പെട്ടെന്നുള്ള ലിങ്കുകൾ',footer_helplines:'ഹെൽപ്പ്‌ലൈനുകൾ',footer_motto:'സുരക്ഷിത യാത്ര, സന്തോഷകരമായ ഓർമ്മകൾ.',
        toast_track:'ലൈവ് ട്രാക്കിംഗ് ആരംഭിച്ചു!',toast_stop:'ട്രാക്കിംഗ് നിന്നു.',toast_nearby:'കാണിക്കുന്നു സമീപത്തുള്ള',
      },
      pa: {
        nav_features:'ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',nav_map:'ਲਾਈਵ ਨਕਸ਼ਾ',nav_zones:'ਖ਼ਤਰੇ ਦੇ ਖੇਤਰ',nav_emergency:'ਐਮਰਜੈਂਸੀ',nav_translator:'ਅਨੁਵਾਦਕ',
        hero_title:'ਤੁਹਾਡੀ ਸੁਰੱਖਿਆ,<br/>ਸਾਡਾ <span>ਮਿਸ਼ਨ</span>',hero_sub:'ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਸੈਰ-ਸਪਾਟਾ ਸੁਰੱਖਿਆ ਮੰਚ।',
        hero_explore:'ਨਕਸ਼ਾ ਵੇਖੋ',hero_sos:'ਐਮਰਜੈਂਸੀ SOS',
        feat_badge:'ਯਾਤਰਾਸਾਥੀ ਕਿਉਂ',feat_title:'ਸੈਰ-ਸਪਾਟਾ ਯਾਤਰੀ ਦੀ ਲੋੜ',feat_sub:'ਭਾਰਤ ਦੀ ਅਜਿਬੋਗੇਬ ਵੰਨ-ਸੁਵੰਨਤਾ ਲਈ ਤਿਆਰ ਕੀਤਾ।',
        f1_title:'20+ ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ',f1_desc:'ਆਪਣੀ ਮਾਤ ਭਾਸ਼ਾ ਵਿੱਚ ਗੱਲ ਕਰੋ।',
        f2_title:'ਲਾਈਵ GPS ਟਰੈਕਿੰਗ',f2_desc:'ਆਪਣੀ ਲਾਈਵ ਲੋਕੇਸ਼ਨ ਸਾਂਝੀ ਕਰੋ।',
        f3_title:'ਖ਼ਤਰੇ ਦੇ ਖੇਤਰ ਚੇਤਾਵਨੀਆਂ',f3_desc:'ਅੱਤਵਾਦ, ਭੂਸਖਲਨ, ਹੜ੍ਹ ਚੇਤਾਵਨੀਆਂ।',
        f4_title:'ਨੇੜਲੀਆਂ ਸੇਵਾਵਾਂ',f4_desc:'ਹੋਟਲਾਂ, ਹਸਪਤਾਲ, ਪੁਲਿਸ ਸਟੇਸ਼ਨ ਲੱਭੋ।',
        f5_title:'ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ',f5_desc:'ਪੁਲਿਸ, ਐਂਬੂਲੈਂਸ, ਅੱਗ ਬੁਝਾਉਣ ਵਾਲੇ ਤੁਰੰਤ।',
        f6_title:'SOS ਚੇਤਾਵਨੀ',f6_desc:'ਤੁਰੰਤ SOS ਸਿਸਟਮ।',
        map_badge:'ਇੰਟਰੈਕਟਿਵ ਨਕਸ਼ਾ',map_title:'ਭਾਰਤ ਨੂੰ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਖੋਜੋ',map_sub:'ਲਾਈਵ ਖ਼ਤਰੇ ਦੇ ਖੇਤਰ ਅਤੇ ਸੇਵਾਵਾਂ।',
        sb_location:'ਤੁਹਾਡੀ ਲੋਕੇਸ਼ਨ',sb_start:'ਲਾਈਵ ਟਰੈਕਿੰਗ ਸ਼ੁਰੂ ਕਰੋ',sb_noloc:'ਲੋਕੇਸ਼ਨ ਉਪਲਬਧ ਨਹੀਂ',
        sb_nearby:'ਨੇੜੇ ਲੱਭੋ',sb_hotel:'ਹੋਟਲਾਂ',sb_hospital:'ਹਸਪਤਾਲ',sb_police:'ਪੁਲਿਸ',sb_restaurant:'ਰੈਸਟੋਰੈਂਟ',
        sb_legend:'ਖ਼ਤਰੇ ਦੇ ਖੇਤਰ',lg_high:'ਉੱਚ ਖ਼ਤਰਾ',lg_med:'ਦਰਮਿਆਨਾ ਖ਼ਤਰਾ',lg_low:'ਘੱਟ ਖ਼ਤਰਾ',lg_safe:'ਸੁਰੱਖਿਅਤ ਖੇਤਰ',
        dz_badge:'ਸੁਰੱਖਿਆ ਚੇਤਾਵਨੀਆਂ',dz_title:'ਭਾਰਤ ਵਿੱਚ ਖ਼ਤਰੇ ਦੇ ਖੇਤਰ',dz_sub:'ਯਾਤਰਾ ਤੋਂ ਪਹਿਲਾਂ ਜਾਣੋ।',
        em_badge:'ਐਮਰਜੈਂਸੀ',em_title:'ਮਦਦ ਚਾਹੀਦੀ ਹੈ? ਅਸੀਂ ਹਾਂ।',em_sub:'ਜ਼ਰੂਰੀ ਸੰਪਰਕ।',
        tr_badge:'ਭਾਸ਼ਾ ਪੁਲ',tr_title:'ਤੁਰੰਤ ਅਨੁਵਾਦ',tr_sub:'ਭਾਸ਼ਾ ਰੁਕਾਵਟ ਤੋੜੋ।',
        tr_from:'ਤੋਂ',tr_to:'ਨੂੰ',tr_btn:'ਅਨੁਵਾਦ ਕਰੋ',tr_input_label:'ਟੈਕਸਟ ਦਰਜ ਕਰੋ',tr_output_label:'ਅਨੁਵਾਦ',tr_quick:'ਤੁਰੰਤ ਵਾਕ',
        sos_title:'ਐਮਰਜੈਂਸੀ SOS',sos_desc:'ਤੁਹਾਡੀ ਲੋਕੇਸ਼ਨ ਤੁਰੰਤ ਸਾਂਝੀ ਹੋਵੇਗੀ।',
        sos_call:'112 ਤੇ ਕਾਲ ਕਰੋ',sos_cancel:'ਰੱਦ',
        track_active:'ਲਾਈਵ ਟਰੈਕਿੰਗ ਸਰਗਰਮ',
        footer_desc:'ਹਰ ਸੈਰ-ਸਪਾਟਾ ਯਾਤਰੀ ਲਈ ਭਾਰਤ ਨੂੰ ਸੁਰੱਖਿਅਤ ਬਣਾਉਣਾ।',
        footer_quick:'ਤੁਰੰਤ ਲਿੰਕ',footer_helplines:'ਹੈਲਪਲਾਈਨ',footer_motto:'ਸੁਰੱਖਿਅਤ ਯਾਤਰਾ, ਖੁਸ਼ੀਆਂ ਦੀਆਂ ਯਾਦਾਂ।',
        toast_track:'ਲਾਈਵ ਟਰੈਕਿੰਗ ਸ਼ੁਰੂ ਹੋ ਗਈ!',toast_stop:'ਟਰੈਕਿੰਗ ਬੰਦ।',toast_nearby:'ਦਿਖਾ ਰਹੇ ਹਾਂ ਨੇੜਲੇ',
      }
    };

    // ═══════════════════════════════════════════
    // TRANSLATION FUNCTION
    // ═══════════════════════════════════════════
    function applyTranslation(lang) {
      const dict = T[lang] || T.en;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerHTML = dict[key];
      });
      document.documentElement.lang = lang;
    }

    // ═══════════════════════════════════════════
    // DANGER ZONES DATA
    // ═══════════════════════════════════════════
    const DANGER_ZONES = [
      { name:'Kashmir (Parts of)', lat:34.08, lng:74.80, risk:'high', threats:['Terrorism','Civil Unrest','Cross-border Tensions'], desc:'Some areas along the Line of Control and remote districts remain high-risk. Check current advisories before travel.' },
      { name:'Manali – Kullu Valley', lat:32.24, lng:77.19, risk:'medium', threats:['Landslides','Flash Floods','Road Closures'], desc:'Prone to landslides especially during monsoon (Jul-Sep). Road conditions can change rapidly.' },
      { name:'Cherrapunji & Mawsynram', lat:25.30, lng:91.73, risk:'medium', threats:['Extreme Rainfall','Flooding','Road Washouts'], desc:'One of the wettest places on Earth. Heavy flooding during monsoon season.' },
      { name:'Bhuj & Kutch Region', lat:23.25, lng:69.67, risk:'medium', threats:['Earthquake','Seismic Activity'], desc:'Located in seismic zone V — highest earthquake risk zone in India.' },
      { name:'Uttarakhand (Chardham)', lat:30.73, lng:79.07, risk:'medium', threats:['Earthquake','Landslides','Glacial Floods'], desc:'Prone to natural disasters. Cloudbursts and flash floods are common during monsoon.' },
      { name:'Ladakh (Remote Areas)', lat:34.15, lng:77.58, risk:'low', threats:['Extreme Cold','Altitude Sickness','Avalanche'], desc:'Extreme conditions at high altitude. Proper acclimatization is essential.' },
      { name:'Northeast India (Parts)', lat:25.67, lng:94.10, risk:'low', threats:['Flooding','Landslides','Remote Terrain'], desc:'Beautiful but remote terrain with limited emergency services in some areas.' },
      { name:'Andaman & Nicobar', lat:11.74, lng:92.72, risk:'low', threats:['Tsunami Risk','Seismic Activity'], desc:'Tsunami-prone area. Follow local safety guidelines and tsunami warning systems.' },
      { name:'Rajasthan (Desert)', lat:26.92, lng:70.90, risk:'low', threats:['Extreme Heat','Dehydration','Sandstorms'], desc:'Summer temperatures can exceed 50°C. Carry adequate water and protection.' },
      { name:'Western Ghats', lat:10.85, lng:76.22, risk:'medium', threats:['Landslides','Flooding','Wildlife'], desc:'Dense forests and steep terrain. Risk of landslides during heavy rain.' },
    ];

    // Safe zones for map markers
    const SAFE_ZONES = [
      { name:'Goa Beaches', lat:15.40, lng:73.88, desc:'Popular and safe tourist destination' },
      { name:'Jaipur', lat:26.91, lng:75.79, desc:'Pink City — major tourist hub' },
      { name:'Varanasi', lat:25.32, lng:82.97, desc:'Spiritual capital — well-policed' },
      { name:'Kerala Backwaters', lat:9.49, lng:76.34, desc:'Safe and popular tourist area' },
      { name:'Taj Mahal, Agra', lat:27.17, lng:78.04, desc:'UNESCO site with heavy security' },
      { name:'Darjeeling', lat:27.04, lng:88.26, desc:'Popular hill station — safe with caution' },
      { name:'Munnar', lat:10.09, lng:77.06, desc:'Hill station — generally safe' },
      { name:'Pondicherry', lat:11.94, lng:79.83, desc:'French Quarter — tourist-friendly' },
    ];

    // ═══════════════════════════════════════════
    // EMERGENCY CONTACTS DATA
    // ═══════════════════════════════════════════
    const EMERGENCY_CONTACTS = [
      { icon:'fas fa-phone-alt', title:'National Emergency', phone:'112', desc:'Police, Fire, Ambulance — Unified Emergency Number' },
      { icon:'fas fa-user-shield', title:'Tourist Helpline', phone:'1363', desc:'24/7 multilingual assistance for tourists across India' },
      { icon:'fas fa-female', title:'Women Helpline', phone:'181', desc:'24/7 support for women in distress' },
      { icon:'fas fa-ambulance', title:'Ambulance / Medical', phone:'108', desc:'Free emergency medical transport service' },
      { icon:'fas fa-fire-extinguisher', title:'Fire Brigade', phone:'101', desc:'Fire emergency response across India' },
      { icon:'fas fa-shield-alt', title:'Police Control Room', phone:'100', desc:'Report crimes and seek police assistance' },
      { icon:'fas fa-heartbeat', title:'Disaster Management', phone:'1070', desc:'National Disaster Response Force (NDRF)' },
      { icon:'fas fa-child', title:'Child Helpline', phone:'1098', desc:'24/7 helpline for children in need' },
      { icon:'fas fa-train', title:'Railway Enquiry', phone:'139', desc:'Train schedules, PNR, and emergency travel' },
      { icon:'fas fa-globe-asia', title:'Foreigners Helpline', phone:'1800-111-363', desc:'Assistance for foreign nationals in India' },
    ];

    // ═══════════════════════════════════════════
    // POPULATE EMERGENCY GRID
    // ═══════════════════════════════════════════
    const emergencyGrid = document.getElementById('emergencyGrid');
    EMERGENCY_CONTACTS.forEach(c => {
      emergencyGrid.innerHTML += `
        <div class="emergency-card">
          <i class="${c.icon}"></i>
          <h3>${c.title}</h3>
          <a href="tel:${c.phone}" class="phone">${c.phone}</a>
          <p>${c.desc}</p>
        </div>`;
    });

    // ═══════════════════════════════════════════
    // POPULATE DANGER ZONES GRID
    // ═══════════════════════════════════════════
    const zonesGrid = document.getElementById('zonesGrid');
    DANGER_ZONES.forEach(z => {
      zonesGrid.innerHTML += `
        <div class="zone-card ${z.risk}">
          <div class="zone-body">
            <div class="zone-header">
              <h3><i class="fas fa-map-marker-alt" style="color:${z.risk==='high'?'#d32f2f':z.risk==='medium'?'#f57c00':'#fdd835'}"></i> ${z.name}</h3>
              <span class="risk-badge risk-${z.risk}">${z.risk} risk</span>
            </div>
            <p>${z.desc}</p>
            <div class="threats">
              ${z.threats.map(t => `<span class="threat-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>`;
    });

    // ═══════════════════════════════════════════
    // TRANSLATOR WIDGET — API-powered
    // ═══════════════════════════════════════════
    const transFrom = document.getElementById('transFrom');
    const transTo = document.getElementById('transTo');
    Object.entries(LANGUAGES).forEach(([code, name]) => {
      transFrom.innerHTML += `<option value="${code}">${name}</option>`;
      transTo.innerHTML += `<option value="${code}">${name}</option>`;
    });
    transTo.value = 'hi';

    // MyMemory API language code mapping
    const API_LANG_MAP = {
      en:'en-GB', hi:'hi-IN', bn:'bn-IN', te:'te-IN', ta:'ta-IN',
      mr:'mr-IN', gu:'gu-IN', kn:'kn-IN', ml:'ml-IN', pa:'pa-IN',
      or:'or-IN', as:'as-IN', ur:'ur-IN', sa:'sa-IN', ne:'ne-NP',
      mai:'mai-IN', sat:'sat-IN', ks:'ks-IN', doi:'doi-IN', mni:'mni-IN'
    };

    // Quick phrases for tourists
    const QUICK_PHRASES = [
      // Emergency & Safety
      { text:'I need help', emoji:'🆘' },
      { text:'Emergency!', emoji:'🚨' },
      { text:'Call the police', emoji:'🚔' },
      { text:'Where is the hospital?', emoji:'🏥' },
      { text:'I am lost', emoji:'😰' },
      { text:'Please help me', emoji:'🙏' },
      { text:'Is it safe here?', emoji:'🛡️' },
      { text:'I need a doctor', emoji:'👨‍⚕️' },
      { text:'I have been robbed', emoji:'🚨' },
      { text:'I need an ambulance', emoji:'🚑' },
      { text:'Where is the nearest police station?', emoji:'🚔' },
      // Navigation & Transport
      { text:'Where is a hotel?', emoji:'🏨' },
      { text:'Where is the train station?', emoji:'🚂' },
      { text:'I need a taxi', emoji:'🚕' },
      { text:'Where is the airport?', emoji:'✈️' },
      { text:'How do I get to the city center?', emoji:'🏙️' },
      { text:'Where is the bus stop?', emoji:'🚌' },
      { text:'Can you show me on the map?', emoji:'🗺️' },
      { text:'How far is it?', emoji:'📏' },
      { text:'I need an auto-rickshaw', emoji:'🛺' },
      { text:'Which platform for the train?', emoji:'🚉' },
      // Food & Dining
      { text:'Where can I eat?', emoji:'🍽️' },
      { text:'I am vegetarian', emoji:'🥬' },
      { text:'I am hungry', emoji:'😋' },
      { text:'Can I see the menu?', emoji:'📋' },
      { text:'I have a food allergy', emoji:'⚠️' },
      { text:'The food is delicious!', emoji:'😍' },
      { text:'No spicy food please', emoji:'🌶️' },
      // Money & Shopping
      { text:'How much does this cost?', emoji:'💰' },
      { text:'Can you give a discount?', emoji:'🏷️' },
      { text:'Where is the ATM?', emoji:'🏧' },
      { text:'I want to pay by card', emoji:'💳' },
      { text:'Is the price negotiable?', emoji:'🤝' },
      { text:'I need change for 500 rupees', emoji:'🪙' },
      // Accommodation
      { text:'I need a room', emoji:'🛏️' },
      { text:'Do you have WiFi?', emoji:'📶' },
      { text:'What time is checkout?', emoji:'⏰' },
      { text:'Can I store my luggage here?', emoji:'🧳' },
      { text:'The air conditioning is not working', emoji:'❄️' },
      // Basic Communication
      { text:'I am a tourist', emoji:'🧳' },
      { text:'I need water', emoji:'💧' },
      { text:'Where is the bathroom?', emoji:'🚻' },
      { text:'Thank you very much', emoji:'🙏' },
      { text:'Excuse me', emoji:'🙋' },
      { text:'I do not speak Hindi', emoji:'🗣️' },
      { text:'Do you speak English?', emoji:'💬' },
      { text:'Can you write it down?', emoji:'✍️' },
      { text:'I am from India', emoji:'🇮🇳' },
      { text:'I am from another country', emoji:'🌍' },
      // Health & Weather
      { text:'I need medicine', emoji:'💊' },
      { text:'I am not feeling well', emoji:'🤒' },
      { text:'I need sunscreen', emoji:'🧴' },
      { text:'Is it going to rain?', emoji:'🌧️' },
      { text:'It is too hot', emoji:'🥵' },
      { text:'I need warm clothes', emoji:'🧥' },
      // Sightseeing
      { text:'Where can I take photos?', emoji:'📸' },
      { text:'What are the must-see attractions?', emoji:'🏛️' },
      { text:'Is there a guide available?', emoji:'🧑‍🏫' },
      { text:'What time does it open?', emoji:'🕐' },
      { text:'Is there an entry fee?', emoji:'🎫' },
      // Greetings
      { text:'Namaste', emoji:'🙏' },
      { text:'Good morning', emoji:'🌅' },
      { text:'Good night', emoji:'🌙' },
      { text:'How are you?', emoji:'😊' },
      { text:'My name is...', emoji:'👋' },
    ];

    // Translation history
    let translationHistory = [];

    // Populate quick phrases
    const qpGrid = document.getElementById('quickPhrases');
    QUICK_PHRASES.forEach(function(p) {
      var btn = document.createElement('button');
      btn.className = 'quick-phrase-btn';
      btn.innerHTML = '<span class="qp-emoji">' + p.emoji + '</span> ' + p.text;
      btn.onclick = function() {
        document.getElementById('transInput').value = p.text;
        updateCharCount();
        translateText();
      };
      qpGrid.appendChild(btn);
    });

    function swapLangs() {
      const tmp = transFrom.value;
      transFrom.value = transTo.value;
      transTo.value = tmp;
    }

    function updateCharCount() {
      const val = document.getElementById('transInput').value;
      const len = val.length;
      document.getElementById('charCount').textContent = len;
      // Update visual progress bar
      const fill = document.getElementById('charCountFill');
      if (fill) fill.style.width = Math.min((len / 500) * 100, 100) + '%';
      // Auto-translate if enabled (debounced)
      if (document.getElementById('autoTranslate') && document.getElementById('autoTranslate').checked && len > 2) {
        clearTimeout(window._autoTransTimer);
        window._autoTransTimer = setTimeout(function() { translateText(); }, 1200);
      }
    }

    function clearInput() {
      document.getElementById('transInput').value = '';
      document.getElementById('transOutput').value = '';
      updateCharCount();
    }

    async function pasteInput() {
      try {
        const text = await navigator.clipboard.readText();
        document.getElementById('transInput').value = text;
        updateCharCount();
      } catch(e) {
        showToast('Paste not available. Please paste manually.', 'warning');
      }
    }

    // ═══════════════════════════════════════════
    // DUAL-API TRANSLATION ENGINE
    // ═══════════════════════════════════════════
    async function translateText() {
      var from = transFrom.value;
      var to = transTo.value;
      var input = document.getElementById('transInput').value.trim();
      if (!input) {
        showToast('Please enter text to translate', 'warning');
        return;
      }
      if (from === to) {
        document.getElementById('transOutput').value = input;
        showConfidence('high', 'Same language');
        return;
      }

      var loader = document.getElementById('transLoader');
      loader.classList.add('active');

      var srcLang = API_LANG_MAP[from] || from;
      var tgtLang = API_LANG_MAP[to] || to;

      // Try MyMemory first
      var result = await tryMyMemory(input, srcLang, tgtLang, from, to);

      // Fallback: try with raw language codes
      if (!result) {
        result = await tryMyMemory(input, from, to, from, to);
      }

      // Fallback: try MyMemory with email for better quality
      if (!result) {
        result = await tryMyMemory(input, srcLang, tgtLang, from, to, 'yatra@saathi.in');
      }

      loader.classList.remove('active');

      if (result) {
        document.getElementById('transOutput').value = result.text;
        addToHistory(input, result.text);
        showConfidence(result.confidence, result.note);
      } else {
        document.getElementById('transOutput').value = 'Translation unavailable. Please try again.';
        showConfidence('low', 'Failed');
      }
    }

    async function tryMyMemory(input, src, tgt, fromLang, toLang, email) {
      try {
        var langpair = src + '|' + tgt;
        var url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(input) + '&langpair=' + langpair;
        if (email) url += '&de=' + email;
        var resp = await fetch(url);
        var data = await resp.json();
        if (data.responseStatus === 200 && data.responseData && data.responseData.translatedText) {
          var translated = data.responseData.translatedText;
          // Detect if translation is same as input (means it failed)
          if (translated.toLowerCase().trim() === input.toLowerCase().trim() && input.length > 3) {
            return null;
          }
          // Calculate confidence from match quality
          var quality = (data.responseData.match || 0);
          var confidence = quality > 80 ? 'high' : quality > 50 ? 'medium' : 'low';
          return { text: translated, confidence: confidence, note: quality + '% match' };
        }
      } catch(e) { /* continue to next fallback */ }
      return null;
    }

    function showConfidence(level, note) {
      var badge = document.getElementById('confidenceBadge');
      var text = document.getElementById('confidenceText');
      if (!badge || !text) return;
      badge.className = 'confidence-badge show ' + level;
      text.textContent = note || level;
    }

    // Keyboard shortcut: Ctrl+Enter to translate
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        var input = document.getElementById('transInput');
        if (input && document.activeElement === input) {
          e.preventDefault();
          translateText();
        }
      }
    });

    function addToHistory(fromText, toText) {
      translationHistory.unshift({ from: fromText, to: toText, fromLang: transFrom.value, toLang: transTo.value });
      if (translationHistory.length > 10) translationHistory.pop();
      renderHistory();
    }

    function renderHistory() {
      const container = document.getElementById('transHistory');
      const list = document.getElementById('historyList');
      if (translationHistory.length === 0) { container.style.display = 'none'; return; }
      container.style.display = 'block';
      list.innerHTML = translationHistory.map(h => `
        <div class="history-item">
          <span class="from-text">${LANGUAGES[h.fromLang] || h.fromLang}: ${h.from}</span>
          <span class="arrow">→</span>
          <span class="to-text">${LANGUAGES[h.toLang] || h.toLang}: ${h.to}</span>
        </div>
      `).join('');
    }

    // ═══════════════════════════════════════════
    // COPY, SHARE, LISTEN
    // ═══════════════════════════════════════════
    function copyTranslation() {
      const text = document.getElementById('transOutput').value;
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        showToast('Translation copied to clipboard!', 'success');
      }).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('Translation copied!', 'success');
      });
    }

    function speakTranslation() {
      const text = document.getElementById('transOutput').value;
      if (!text) { showToast('Nothing to speak — translate something first!', 'warning'); return; }
      const listenBtn = document.querySelector('.output-panel .panel-action-btn[onclick="speakTranslation()"]');
      if (listenBtn) listenBtn.classList.add('speaking');

      // Cancel any ongoing speech
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      const langMap = { en:'en-IN', hi:'hi-IN', bn:'bn-IN', te:'te-IN', ta:'ta-IN', mr:'mr-IN', gu:'gu-IN', kn:'kn-IN', ml:'ml-IN', pa:'pa-IN', or:'or-IN', as:'as-IN', ur:'ur-IN', sa:'sa-IN', ne:'ne-NP' };
      utterance.lang = langMap[transTo.value] || 'en-IN';
      utterance.rate = 0.85;
      utterance.pitch = 1.0;

      // Try to find a matching voice for the target language
      var voices = speechSynthesis.getVoices();
      var targetLang = transTo.value;
      var matchedVoice = voices.find(function(v) {
        return v.lang.startsWith(targetLang) || v.lang.startsWith(langMap[targetLang] || targetLang);
      });
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onstart = function() {
        showToast('🔊 Speaking in ' + (LANGUAGES[targetLang] || targetLang) + '...', 'success');
      };
      utterance.onend = function() {
        if (listenBtn) listenBtn.classList.remove('speaking');
      };
      utterance.onerror = function() {
        if (listenBtn) listenBtn.classList.remove('speaking');
        // Fallback: try with simpler language code
        speechSynthesis.cancel();
        var fallback = new SpeechSynthesisUtterance(text);
        fallback.lang = 'en-IN';
        fallback.rate = 0.85;
        fallback.onend = function() { if (listenBtn) listenBtn.classList.remove('speaking'); };
        speechSynthesis.speak(fallback);
      };

      // Chrome bug: speechSynthesis sometimes hangs — resume after delay
      if (speechSynthesis.paused) speechSynthesis.resume();
      setInterval(function() { if (speechSynthesis.speaking && !speechSynthesis.paused) speechSynthesis.resume(); }, 14000);

      speechSynthesis.speak(utterance);
    }

    // ═══════════════════════════════════════════
    // VOICE-TO-VOICE MODE
    // ═══════════════════════════════════════════
    function voiceToVoice() {
      var v2vBtn = document.getElementById('v2vBtn');

      // If already active, stop
      if (v2vBtn.classList.contains('active')) {
        v2vBtn.classList.remove('active');
        if (recognition) recognition.stop();
        isRecording = false;
        document.getElementById('voiceBtn').classList.remove('recording');
        return;
      }

      v2vBtn.classList.add('active');
      showToast('🎤 V2V Mode: Speak now — I will translate and speak back!', 'success');

      // Start voice input
      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        v2vBtn.classList.remove('active');
        showToast('Speech recognition not supported. Use Chrome for voice features.', 'warning');
        return;
      }

      recognition = new SpeechRecognition();
      var langMap = {
        en:'en-IN', hi:'hi-IN', bn:'bn-IN', te:'te-IN', ta:'ta-IN',
        mr:'mr-IN', gu:'gu-IN', kn:'kn-IN', ml:'ml-IN', pa:'pa-IN',
        or:'or-IN', as:'as-IN', ur:'ur-IN'
      };
      recognition.lang = langMap[transFrom.value] || 'en-IN';
      recognition.interimResults = true;
      recognition.continuous = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = function() {
        isRecording = true;
        document.getElementById('voiceBtn').classList.add('recording');
      };

      recognition.onresult = function(event) {
        var transcript = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        document.getElementById('transInput').value = transcript;
        updateCharCount();
      };

      recognition.onend = function() {
        isRecording = false;
        document.getElementById('voiceBtn').classList.remove('recording');
        var input = document.getElementById('transInput').value.trim();
        if (input) {
          showToast('🔄 Translating and speaking back...', 'success');
          translateText().then(function() {
            setTimeout(function() {
              speakTranslation();
              v2vBtn.classList.remove('active');
            }, 800);
          });
        } else {
          v2vBtn.classList.remove('active');
          showToast('No speech detected. Try again.', 'warning');
        }
      };

      recognition.onerror = function(event) {
        isRecording = false;
        v2vBtn.classList.remove('active');
        document.getElementById('voiceBtn').classList.remove('recording');
        if (event.error === 'no-speech') {
          showToast('No speech detected. Tap V2V and try again.', 'warning');
        } else if (event.error === 'not-allowed') {
          showToast('Microphone access denied.', 'warning');
        } else {
          showToast('Voice error: ' + event.error, 'warning');
        }
      };

      try {
        recognition.start();
      } catch(e) {
        recognition.stop();
        setTimeout(function() { recognition.start(); }, 200);
      }
    }

    function shareTranslation() {
      const text = `${document.getElementById('transInput').value}\n\n→ ${document.getElementById('transOutput').value}`;
      if (navigator.share) {
        navigator.share({ title: 'YatraSaathi Translation', text: text }).catch(() => {});
      } else {
        navigator.clipboard.writeText(text).then(() => {
          showToast('Shared text copied to clipboard!', 'success');
        });
      }
    }

    // ═══════════════════════════════════════════
    // SPEECH-TO-TEXT (Web Speech API)
    // ═══════════════════════════════════════════
    let recognition = null;
    let isRecording = false;

    function startVoiceInput() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        showToast('Speech recognition not supported in this browser. Please use Chrome or Edge.', 'warning');
        return;
      }

      const btn = document.getElementById('voiceBtn');

      // Stop if already recording
      if (isRecording) {
        if (recognition) recognition.stop();
        isRecording = false;
        btn.classList.remove('recording');
        showToast('Voice input stopped', 'warning');
        return;
      }

      // Ensure voices are loaded for speech synthesis
      if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = function() {};
      }

      recognition = new SpeechRecognition();
      const langMap = {
        en:'en-IN', hi:'hi-IN', bn:'bn-IN', te:'te-IN', ta:'ta-IN',
        mr:'mr-IN', gu:'gu-IN', kn:'kn-IN', ml:'ml-IN', pa:'pa-IN',
        or:'or-IN', as:'as-IN', ur:'ur-IN', sa:'en-IN', ne:'ne-NP',
        mai:'hi-IN', sat:'hi-IN', ks:'hi-IN', doi:'hi-IN', mni:'hi-IN'
      };
      recognition.lang = langMap[transFrom.value] || 'en-IN';
      recognition.interimResults = true;
      recognition.continuous = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = function() {
        isRecording = true;
        btn.classList.add('recording');
        showToast('🎤 Listening... Speak in ' + (LANGUAGES[transFrom.value] || 'your language'), 'success');
      };

      recognition.onresult = function(event) {
        let transcript = '';
        let isFinal = false;
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
          if (event.results[i].isFinal) isFinal = true;
        }
        document.getElementById('transInput').value = transcript;
        updateCharCount();
        // Auto-translate on final result
        if (isFinal) {
          clearTimeout(window._voiceAutoTranslate);
          window._voiceAutoTranslate = setTimeout(function() { translateText(); }, 600);
        }
      };

      recognition.onend = function() {
        isRecording = false;
        btn.classList.remove('recording');
        // Auto-translate if we have text and it wasn't already triggered
        var input = document.getElementById('transInput').value.trim();
        if (input) {
          clearTimeout(window._voiceAutoTranslate);
          window._voiceAutoTranslate = setTimeout(function() { translateText(); }, 300);
        }
      };

      recognition.onerror = function(event) {
        isRecording = false;
        btn.classList.remove('recording');
        if (event.error === 'no-speech') {
          showToast('No speech detected. Tap the mic and try again.', 'warning');
        } else if (event.error === 'not-allowed') {
          showToast('Microphone access denied. Please allow mic access in browser settings.', 'warning');
        } else if (event.error === 'network') {
          showToast('Network error during speech recognition. Check your connection.', 'warning');
        } else if (event.error === 'aborted') {
          // User stopped — no error needed
        } else {
          showToast('Voice error: ' + event.error + '. Try again.', 'warning');
        }
      };

      try {
        recognition.start();
      } catch(e) {
        // Already started — restart
        recognition.stop();
        setTimeout(function() { recognition.start(); }, 200);
      }
    }

    // Auto-translate on Enter key (Ctrl+Enter)
    document.getElementById('transInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        translateText();
      }
    });

    // ═══════════════════════════════════════════
    // MAP INITIALIZATION
    // ═══════════════════════════════════════════
    const map = L.map('map', { zoomControl: true }).setView([22.5, 78.9], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    // Custom icon helpers
    function makeIcon(color, emoji) {
      return L.divIcon({
        className: '',
        html: `<div style="background:${color};width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3);font-size:16px;">${emoji}</div>`,
        iconSize: [36,36],
        iconAnchor: [18,18],
      });
    }

    // Add danger zones to map
    DANGER_ZONES.forEach(z => {
      const color = z.risk === 'high' ? '#d32f2f' : z.risk === 'medium' ? '#f57c00' : '#fdd835';
      const marker = L.marker([z.lat, z.lng], { icon: makeIcon(color, '⚠️') }).addTo(map);
      marker.bindPopup(`<div class="popup-danger"><strong>⚠️ ${z.name}</strong><br>Risk: ${z.risk.toUpperCase()}<br>${z.threats.join(' • ')}<br><small>${z.desc}</small></div>`);
    });

    // Add safe zones
    SAFE_ZONES.forEach(z => {
      const marker = L.marker([z.lat, z.lng], { icon: makeIcon('#2196f3', '✅') }).addTo(map);
      marker.bindPopup(`<div class="popup-hotel"><strong>✅ ${z.name}</strong><br>${z.desc}</div>`);
    });

    // ═══════════════════════════════════════════
    // LIVE TRACKING
    // ═══════════════════════════════════════════
    let tracking = false;
    var userCurrentLocation = null;
    let watchId = null;
    let userMarker = null;
    let accuracyCircle = null;

    function toggleTracking() {
      if (tracking) stopTracking();
      else startTracking();
    }

    function reverseGeocode(lat, lng, callback) {
      fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lng + '&zoom=18&addressdetails=1', {
        headers: { 'Accept-Language': 'en' }
      }).then(function(r) { return r.json(); })
      .then(function(data) {
        var addr = data.address || {};
        var parts = [addr.road, addr.neighbourhood, addr.suburb, addr.city || addr.town || addr.village, addr.state].filter(Boolean);
        callback(parts.join(', ') || data.display_name || lat.toFixed(5) + ', ' + lng.toFixed(5));
      }).catch(function() {
        callback(lat.toFixed(5) + ', ' + lng.toFixed(5));
      });
    }

    var locationRetryCount = 0;
    var MAX_RETRIES = 3;

    function startTracking() {
      if (!navigator.geolocation) {
        showToast('Geolocation not supported by your browser. Try Chrome or Firefox.', 'warning');
        return;
      }
      tracking = true;
      locationRetryCount = 0;
      var btn = document.getElementById('trackBtn');
      btn.classList.add('tracking');
      btn.innerHTML = '<i class="fas fa-stop"></i> <span>Stop Tracking</span>';
      document.getElementById('trackingBanner').classList.add('active');
      document.getElementById('coords').innerHTML = '<span style="color:var(--accent)"><i class="fas fa-spinner fa-spin"></i> Acquiring GPS signal...</span>';
      showToast('📡 Acquiring GPS signal... Allow location access when prompted.', 'success');

      // Step 1: Use getCurrentPosition for immediate location fix
      navigator.geolocation.getCurrentPosition(
        function firstFix(pos) {
          locationRetryCount = 0;
          updateLocationUI(pos);
          showToast('📍 GPS lock acquired! Tracking active.', 'success');
          // Step 2: Now start continuous tracking
          startWatching();
        },
        function(firstError) {
          var msg = getGeoErrorMessage(firstError);
          document.getElementById('coords').innerHTML = '<span style="color:#d32f2f"><i class="fas fa-exclamation-triangle"></i> ' + msg + '</span>';
          showToast('⚠️ ' + msg + ' — Using destination center for map.', 'warning');
          // Fall back to destination coordinates
          var currentUser = localStorage.getItem('yatraCurrentUser');
          var users = JSON.parse(localStorage.getItem('yatraUsers') || '{}');
          var u = currentUser && users[currentUser] ? users[currentUser] : null;
          if (u && u.dest) {
            var dest = CITY_COORDS[u.dest.toLowerCase()];
            if (dest) {
              userCurrentLocation = { lat: dest[0], lng: dest[1], address: u.dest };
              map.setView([dest[0], dest[1]], 13);
              document.getElementById('coords').innerHTML = '<span style="color:#f57c00"><i class="fas fa-map-marker-alt"></i> Centered on ' + u.dest + ' (GPS unavailable)</span>';
            }
          }
          // Still try watchPosition for later updates
          startWatching();
        },
        { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
      );

      function startWatching() {
        if (watchId !== null) return; // Already watching
        watchId = navigator.geolocation.watchPosition(function(pos) {
          locationRetryCount = 0;
          updateLocationUI(pos);
        }, function(err) {
          locationRetryCount++;
          if (locationRetryCount < MAX_RETRIES) {
            document.getElementById('coords').innerHTML =
              '<span style="color:#f57c00"><i class="fas fa-redo"></i> GPS signal weak... (' + locationRetryCount + '/' + MAX_RETRIES + ')</span>';
          } else {
            showToast('GPS signal lost. Tracking paused. Tap Start to retry.', 'warning');
          }
        }, { enableHighAccuracy: true, maximumAge: 3000, timeout: 20000 });
      }

      function updateLocationUI(pos) {
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;
        var accuracy = pos.coords.accuracy;
        var speed = pos.coords.speed;
        var timestamp = new Date(pos.timestamp).toLocaleTimeString();

        var accColor = accuracy < 10 ? '#2e7d32' : accuracy < 30 ? '#f57c00' : '#d32f2f';
        var accLabel = accuracy < 10 ? 'Excellent' : accuracy < 30 ? 'Good' : accuracy < 100 ? 'Fair' : 'Poor';
        var speedStr = speed !== null && speed >= 0 ? (speed * 3.6).toFixed(1) + ' km/h' : 'Stationary';

        // Show coordinates immediately (fast), then reverse geocode async
        document.getElementById('coords').innerHTML =
          '<div style="display:flex;flex-direction:column;gap:4px">'
          + '<strong style="color:var(--primary);font-size:0.85rem">📍 <i class="fas fa-spinner fa-spin"></i> Resolving address...</strong>'
          + '<span style="font-size:0.75rem;color:var(--text-light)">' + lat.toFixed(6) + ', ' + lng.toFixed(6) + '</span>'
          + '<span style="font-size:0.75rem">🎯 Accuracy: <span style="color:' + accColor + ';font-weight:600">' + accuracy.toFixed(0) + 'm (' + accLabel + ')</span></span>'
          + '<span style="font-size:0.75rem;color:var(--text-light)">🏃 ' + speedStr + ' | 🕐 ' + timestamp + '</span>'
          + '</div>';

        // Reverse geocode for human-readable address
        reverseGeocode(lat, lng, function(address) {
          document.getElementById('coords').innerHTML =
            '<div style="display:flex;flex-direction:column;gap:4px">'
            + '<strong style="color:var(--primary);font-size:0.85rem">📍 ' + address + '</strong>'
            + '<span style="font-size:0.75rem;color:var(--text-light)">' + lat.toFixed(6) + ', ' + lng.toFixed(6) + '</span>'
            + '<span style="font-size:0.75rem">🎯 Accuracy: <span style="color:' + accColor + ';font-weight:600">' + accuracy.toFixed(0) + 'm (' + accLabel + ')</span></span>'
            + '<span style="font-size:0.75rem;color:var(--text-light)">🏃 ' + speedStr + ' | 🕐 ' + timestamp + '</span>'
            + '</div>';
          userCurrentLocation = { lat: lat, lng: lng, address: address };
        });

        // Quick store for nearby search
        userCurrentLocation = { lat: lat, lng: lng, address: '' };

        if (userMarker) {
          userMarker.setLatLng([lat, lng]);
          if (accuracyCircle) accuracyCircle.setLatLng([lat, lng]).setRadius(accuracy);
        } else {
          userMarker = L.marker([lat, lng], {
            icon: makeIcon('#ff6f3c', '📍'),
            zIndexOffset: 1000
          }).addTo(map);
          userMarker.bindPopup('<strong>📍 You are here</strong>');
          accuracyCircle = L.circle([lat, lng], {
            radius: accuracy,
            color: '#ff6f3c', fillColor: '#ff6f3c', fillOpacity: 0.08, weight: 1
          }).addTo(map);
        }
        map.setView([lat, lng], 15);
        checkDangerProximity(lat, lng);
      }

      function getGeoErrorMessage(err) {
        switch(err.code) {
          case 1: return 'Location permission denied. Please allow GPS in browser settings.';
          case 2: return 'GPS unavailable. Your device could not determine location.';
          case 3: return 'GPS request timed out. Please try again.';
          default: return 'Could not get your location.';
        }
      }
    }

    function stopTracking() {
      tracking = false;
      if (watchId !== null) navigator.geolocation.clearWatch(watchId);
      watchId = null;
      const btn = document.getElementById('trackBtn');
      btn.classList.remove('tracking');
      btn.innerHTML = '<i class="fas fa-satellite-dish"></i> <span>Start Live Tracking</span>';
      document.getElementById('trackingBanner').classList.remove('active');
      document.getElementById('coords').innerHTML = '<span data-i18n="sb_noloc">Location not available</span>';
      showToast('Tracking stopped', 'info');
    }

    function checkDangerProximity(lat, lng) {
      DANGER_ZONES.forEach(z => {
        const dist = haversine(lat, lng, z.lat, z.lng);
        if (dist < 50 && !z._warned) {
          z._warned = true;
          showToast(`⚠️ WARNING: You are ${dist.toFixed(0)}km from ${z.name} (${z.risk} risk zone)`, 'danger');
        }
      });
    }

    function haversine(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    }

    // ═══════════════════════════════════════════
    // NEARBY SEARCH (real Overpass API data from OpenStreetMap)
    // ═══════════════════════════════════════════
    const nearbyLayers = {};
    let activeNearby = null;
    let destinationMarker = null;

    const OVERPASS_TAGS = {
      hotel: { tags: 'tourism=hotel', emoji: '🏨', color: '#0077b6', label: 'Hotel' },
      hospital: { tags: 'amenity=hospital', emoji: '🏥', color: '#2e7d32', label: 'Hospital' },
      police: { tags: 'amenity=police', emoji: '🚔', color: '#1565c0', label: 'Police' },
      restaurant: { tags: 'amenity=restaurant', emoji: '🍽️', color: '#ff6f3c', label: 'Restaurant' },
      pharmacy: { tags: 'amenity=pharmacy', emoji: '💊', color: '#9c27b0', label: 'Pharmacy' },
      atm: { tags: 'amenity=atm', emoji: '🏧', color: '#00897b', label: 'ATM' },
      fuel: { tags: 'amenity=fuel', emoji: '⛽', color: '#e65100', label: 'Fuel Station' },
      cafe: { tags: 'amenity=cafe', emoji: '☕', color: '#6d4c41', label: 'Cafe' },
      lodging: { tags: 'tourism=hostel', emoji: '🏠', color: '#5c6bc0', label: 'Lodging' },
    };

    function getSearchCenter() {
      // Priority: 1) GPS tracked location 2) User's destination 3) Map center
      if (userCurrentLocation && tracking) {
        return { lat: userCurrentLocation.lat, lng: userCurrentLocation.lng, label: userCurrentLocation.address || 'Your Current Location' };
      }
      var currentUser = localStorage.getItem('yatraCurrentUser');
      var users = JSON.parse(localStorage.getItem('yatraUsers') || '{}');
      var p = users[currentUser] || {};
      var dest = (p.dest || '').toLowerCase();
      if (dest) {
        var coords = findCoords(dest);
        if (coords) return { lat: coords[0], lng: coords[1], label: p.dest };
      }
      if (userMarker) {
        var ll = userMarker.getLatLng();
        return { lat: ll.lat, lng: ll.lng, label: 'Your Location' };
      }
      const c = map.getCenter();
      return { lat: c.lat, lng: c.lng, label: 'Map Center' };
    }

    function searchNearby(type) {
      // Remove previous markers
      if (activeNearby && nearbyLayers[activeNearby]) {
        map.removeLayer(nearbyLayers[activeNearby]);
        document.querySelectorAll('.nearby-btn').forEach(b => b.classList.remove('active'));
      }
      if (activeNearby === type) { activeNearby = null; return; }

      const info = OVERPASS_TAGS[type];
      const searchLoc = getSearchCenter();
      const center = L.latLng(searchLoc.lat, searchLoc.lng);
      const radius = 10000; // 10km radius for comprehensive results

      // Zoom map to the search area
      map.setView([searchLoc.lat, searchLoc.lng], 14, { animate: true });

      // Use MarkerCluster for dense areas
      var markers = L.markerClusterGroup({ maxClusterRadius: 50, spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: true });
      showToast('🔍 Searching ' + info.label + 's near ' + searchLoc.label + '...', 'success');

      var endpoints = [
        'https://overpass-api.de/api/interpreter',
        'https://overpass.kumi.systems/api/interpreter',
        'https://overpass-api.openstreetmap.ru/api/interpreter',
      ];
      var tagKey = info.tags.split('=')[0];
      var tagVal = info.tags.split('=')[1];
      // Rich query: fetch name, phone, website, opening hours, wheelchair, cuisine, operator, address details, notes
      var query = '[out:json][timeout:25];(\n'
        + 'node["' + tagKey + '"="' + tagVal + '"](around:' + radius + ',' + center.lat + ',' + center.lng + ');\n'
        + 'way["' + tagKey + '"="' + tagVal + '"](around:' + radius + ',' + center.lat + ',' + center.lng + ');\n'
        + ');out center 80;';

      function buildPopup(el, lat, lng, name, dist) {
        var t = el.tags || {};
        var addr = [t['addr:street'], t['addr:housenumber'], t['addr:area'], t['addr:suburb'], t['addr:city']].filter(Boolean).join(', ');
        var phone = t.phone || t['contact:phone'] || t['contact:mobile'] || '';
        var website = t.website || t['contact:website'] || '';
        var opening = t.opening_hours || '';
        var wheelchair = t.wheelchair || '';
        var cuisine = t.cuisine || '';
        var operator = t.operator || '';
        var brand = t.brand || '';
        var rating = t.rating || '';
        var userProfile = getUserProfile();
        var notes = t.description || t['description:' + (userProfile.lang || 'en')] || '';
        var distStr = dist < 1 ? (dist*1000).toFixed(0) + 'm' : dist.toFixed(1) + 'km';

        var popup = '<div style="max-width:300px;font-family:Poppins,sans-serif;border-radius:10px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.15)">'
          + '<div style="background:' + info.color + ';color:#fff;padding:10px 14px;display:flex;align-items:center;gap:8px">'
          + '<span style="font-size:1.3rem">' + info.emoji + '</span>'
          + '<div><div style="font-weight:700;font-size:0.95rem;line-height:1.2">' + name + '</div>'
          + (brand ? '<div style="font-size:0.72rem;opacity:0.85">' + brand + '</div>' : '')
          + '</div></div>'
          + '<div style="padding:10px 14px;background:#fff">'
          // Distance
          + '<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;font-size:0.8rem;color:#333">'
          + '<span style="background:#e3f2fd;padding:2px 8px;border-radius:10px;font-weight:600;color:#1565c0">' + distStr + '</span>'
          + '<span style="color:#888">from ' + searchLoc.label + '</span></div>'
          // Address
          + (addr ? '<div style="display:flex;align-items:flex-start;gap:6px;margin-bottom:5px;font-size:0.78rem;color:#555">'
          + '<span style="flex-shrink:0">📍</span><span>' + addr + '</span></div>' : '')
          // Phone
          + (phone ? '<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;font-size:0.78rem">'
          + '<span style="flex-shrink:0">📞</span><a href="tel:' + phone + '" style="color:#1565c0;text-decoration:none;font-weight:500">' + phone + '</a></div>' : '')
          // Website
          + (website ? '<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;font-size:0.78rem">'
          + '<span style="flex-shrink:0">🌐</span><a href="' + (website.startsWith('http') ? website : 'https://' + website) + '" target="_blank" style="color:#1565c0;text-decoration:none;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px;display:inline-block">' + website.replace(/^https?:\/\//, '').substring(0, 30) + '</a></div>' : '')
          // Opening hours
          + (opening ? '<div style="display:flex;align-items:flex-start;gap:6px;margin-bottom:5px;font-size:0.78rem;color:#555">'
          + '<span style="flex-shrink:0">🕐</span><span>' + opening + '</span></div>' : '')
          // Cuisine (restaurants)
          + (cuisine ? '<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;font-size:0.78rem;color:#555">'
          + '<span style="flex-shrink:0">🍽️</span><span style="text-transform:capitalize">' + cuisine.replace(/;/g, ', ') + '</span></div>' : '')
          // Wheelchair
          + (wheelchair ? '<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;font-size:0.78rem">'
          + '<span style="flex-shrink:0">♿</span><span style="color:' + (wheelchair === 'yes' ? '#2e7d32' : wheelchair === 'limited' ? '#f57c00' : '#d32f2f') + ';font-weight:600;text-transform:capitalize">Wheelchair: ' + wheelchair + '</span></div>' : '')
          // Operator
          + (operator ? '<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;font-size:0.75rem;color:#888">'
          + '<span style="flex-shrink:0">🏢</span><span>' + operator + '</span></div>' : '')
          // Rating
          + (rating ? '<div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;font-size:0.78rem;color:#f57c00">'
          + '<span style="flex-shrink:0">⭐</span><span style="font-weight:600">' + rating + ' / 5</span></div>' : '')
          // Notes
          + (notes ? '<div style="display:flex;align-items:flex-start;gap:6px;margin-bottom:6px;font-size:0.75rem;color:#666;background:#f5f5f5;padding:5px 8px;border-radius:6px">'
          + '<span style="flex-shrink:0">ℹ️</span><span>' + notes.substring(0, 120) + (notes.length > 120 ? '...' : '') + '</span></div>' : '')
          // Action buttons
          + '<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">'
          + '<a href="https://www.google.com/maps/search/' + encodeURIComponent(name) + '/@' + lat + ',' + lng + ',17z" target="_blank" style="display:inline-flex;align-items:center;gap:4px;background:#1a73e8;color:#fff;padding:5px 12px;border-radius:6px;text-decoration:none;font-size:0.75rem;font-weight:600">📍 Google Maps</a>'
          + (phone ? '<a href="tel:' + phone + '" style="display:inline-flex;align-items:center;gap:4px;background:#2e7d32;color:#fff;padding:5px 12px;border-radius:6px;text-decoration:none;font-size:0.75rem;font-weight:600">📞 Call</a>' : '')
          + '<a href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(name + ', ' + searchLoc.label) + '" target="_blank" style="display:inline-flex;align-items:center;gap:4px;background:#e65100;color:#fff;padding:5px 12px;border-radius:6px;text-decoration:none;font-size:0.75rem;font-weight:600">🧭 Directions</a>'
          + '</div>'
          + '</div></div>';
        return popup;
      }

      // Recursive function to try multiple Overpass endpoints in case of failure
      function tryEndpoint(idx) {
        if (idx >= endpoints.length) {
          showGoogleFallback(type, info, center, markers);
          return;
        }
        var controller = new AbortController();
        var timeoutId = setTimeout(function() { controller.abort(); }, 20000);

        // Fetch from Overpass API
        fetch(endpoints[idx] + '?data=' + encodeURIComponent(query),
          { signal: controller.signal })
          .then(function(r) { clearTimeout(timeoutId); if (!r.ok) throw new Error(r.status); return r.json(); })
          .then(function(data) {
            if (!data.elements || data.elements.length === 0) {
              showToast('No ' + info.label + 's found in OpenStreetMap. Showing nearby alternatives.', 'warning');
              showGoogleFallback(type, info, center, markers);
              return;
            }
            var count = 0;
            data.elements.forEach(function(el) {
              var lat = el.lat || (el.center && el.center.lat);
              var lng = el.lon || (el.center && el.center.lng);
              if (!lat || !lng) return;
              var name = el.tags && (el.tags.name || el.tags['name:en'] || el.tags['name:hi']) || info.label + ' #' + (count + 1);
              var dist = haversine(center.lat, center.lng, lat, lng);

              var m = L.marker([lat, lng], { icon: makeIcon(info.color, info.emoji) });
              m.bindPopup(buildPopup(el, lat, lng, name, dist));
              markers.addLayer(m);
              count++;
            });
            map.addLayer(markers);
            nearbyLayers[type] = markers;
            activeNearby = type;
            document.querySelectorAll('.nearby-btn').forEach(function(b) { b.classList.remove('active'); });
            var btn = document.querySelector('.nearby-btn[onclick="searchNearby(\'' + type + '\')"]');
            if (btn) btn.classList.add('active');
            showToast(info.emoji + ' ' + count + ' ' + info.label + 's found near ' + searchLoc.label + '!', 'success');
          })
          .catch(function() {
            clearTimeout(timeoutId);
            tryEndpoint(idx + 1);
          });
      }
      tryEndpoint(0);
    }

    // Fallback to Google Maps search if Overpass fails or returns no resultsa
    function showGoogleFallback(type, info, center, markers) {
      // Known real place names for Indian cities to show on fallback markers
      var knownNames = {
        hospital: {
          'varanasi': ['Sir Sunderlal Hospital BHU', 'Heritage Hospital', 'Diwakar Hospital', 'Trauma Centre BHU', 'Ram Krishna Mission Hospital', 'Ansari Nagar Hospital', 'BHU Hospital', 'Lal Bahadur Shastri Hospital'],
          'delhi': ['AIIMS', 'Safdarjung Hospital', 'Ram Manohar Lohia Hospital', 'Lady Hardinge Hospital', 'GTB Hospital', 'Lok Nayak Hospital', 'Holy Family Hospital', 'Max Hospital Saket'],
          'jaipur': ['Sawai Man Singh Hospital', 'SMS Medical College', 'Fortis Escorts Hospital', 'Manipal Hospital', 'Narayana Multispeciality Hospital', 'Mahatma Gandhi Hospital'],
          'mumbai': ['KEM Hospital', 'J.J. Hospital', 'Breach Candy Hospital', 'Bai Jerbai Wadia Hospital', 'Hinduja Hospital', 'Bombay Hospital'],
          'kolkata': ['SSKM Hospital', 'Medical College Kolkata', 'Ruby General Hospital', 'AMRI Hospital', 'Manipal Hospital Salt Lake'],
          'kerala': ['Govt Medical College Thiruvananthapuram', 'Amrita Hospital Kochi', 'MIMS Kozhikode', 'Baby Memorial Hospital'],
          'agra': ['SN Medical College Agra', 'Divine Hospital', 'Pushpa Nursing Home'],
          'goa': ['Goa Medical College', 'Manipal Hospital Goa', 'Inlaks Hospital'],
          'bhopal': ['Hamidia Hospital', 'AIIMS Bhopal', 'Chirayu Medical College', 'People\'s Hospital'],
          'lucknow': ['KGMU', 'RAM Manohar Lohia Institute', 'Medanta Hospital Lucknow', 'Sahara Hospital'],
          'hyderabad': ['Osmaniah Hospital', 'Apollo Hospital', 'Yashoda Hospital', 'Care Hospital', 'NIMS'],
          'pune': ['Sassoon Hospital', 'Ruby Hall Clinic', 'Deenanath Mangeshkar Hospital', 'Jehangir Hospital'],
          'default': ['Government Hospital', 'City Hospital', 'General Hospital', 'District Hospital', 'Medical Center', 'Community Health Centre', 'Primary Health Centre', 'Nursing Home'],
        },
        police: {
          'varanasi': ['Dashashwamedh Police Station', 'Lahurabir Police Station', 'Chowk Police Station', 'Bhelupur Police Station', 'Sarnath Police Station', 'Kotwali Police Station'],
          'delhi': ['Connaught Place Police Station', 'Saket Police Station', 'Rohini Police Station', 'Dwarka Police Station', 'Kalkaji Police Station', 'Karol Bagh Police Station'],
          'jaipur': ['Hawa Mahal Police Station', 'Johari Bazaar PS', 'MI Road PS', 'Civil Lines PS', 'Mansarovar PS', 'Jagatpura PS'],
          'mumbai': ['Azad Maidan Police Station', 'Oshiwara PS', 'Andheri PS', 'Bandra PS', 'Juhu PS', 'Colaba PS'],
          'kolkata': ['Lalbazar Police HQ', 'Shyambazar PS', 'Tollygunge PS', 'New Market PS', 'Park Street PS', 'Bowbazar PS'],
          'kerala': ['MG Road Police Station', 'Fort Police Station Kochi', 'Pattom PS Thiruvananthapuram'],
          'bhopal': ['Habibganj PS', 'MP Nagar PS', 'Kotwali PS', 'T.T. Nagar PS'],
          'lucknow': ['Hazratganj PS', 'Gomti Nagar PS', 'Aminabad PS', 'Kaiserbagh PS'],
          'hyderabad': ['Abids PS', 'Secunderabad PS', 'Banjara Hills PS', 'Madhapur PS', 'Jubilee Hills PS'],
          'pune': ['Swargate PS', 'Kothrud PS', 'Yerwada PS', 'Shivajinagar PS'],
          'default': ['Police Station', 'City Police HQ', 'District Police Office', 'Traffic Police Station', 'Women Police Station', 'Railway Police Station', 'Cyber Crime Police Station', 'Tourist Police Station'],
        },
        hotel: {
          'varanasi': ['Hotel Ganges View', 'Taj Nadesar Palace', 'Hotel De Paris', 'Suryaudan Haveli', 'Ramada Plaza JHV', 'Hotel Surya International', 'Mandapam Hotel', 'Ganga Mahal Hotel'],
          'delhi': ['The Imperial', 'Taj Palace', 'The Leela Palace', 'ITC Maurya', 'Oberoi Hotel', 'The Oberoi New Delhi', 'Lalit New Delhi', 'Park Hotel'],
          'jaipur': ['Rambagh Palace', 'Taj Jai Mahal Palace', 'ITC Rajputana', 'Samode Haveli', 'Hotel Narain Niwas Palace', 'Alsisar Haveli', 'Shahpura House', 'Laxmi Niwas Palace'],
          'mumbai': ['Taj Mahal Palace', 'The Oberoi Mumbai', 'ITC Grand Central', 'Trident Nariman Point', 'Leela Mumbai', 'JW Marriott'],
          'kolkata': ['Taj Bengal', 'The Oberoi Grand', 'ITC Sonar', 'Hyatt Regency', 'Lemon Tree Premier'],
          'kerala': ['Kumarakom Lake Resort', 'Taj Kumarakom', 'CGH Earth Coconut Lagoon', 'SpiceTree Munnar', 'Trident Cochin'],
          'bhopal': ['Courtyard by Marriott', 'Taj Bhopal', 'Jehan Numa Palace', 'Sayaji Hotel', 'Hotel Palash'],
          'lucknow': ['Taj Residency', 'Novotel Lucknow', 'Vivanta Lucknow', 'Hotel Clarks Avadh', 'The Piccadily'],
          'hyderabad': ['Taj Falaknuma Palace', 'ITC Kakatiya', 'Park Hyatt', 'JW Marriott', 'The Park Hyderabad'],
          'pune': ['JW Marriott Pune', 'Novotel Pune', 'Conrad Pune', 'The Westin Pune', 'Sheraton Grand Pune'],
          'default': ['Hotel Grand', 'City Hotel', 'Budget Hotel', 'Heritage Haveli', 'Guest House', 'Homestay', 'Resort', 'Lodge'],
        },
        restaurant: {
          'varanasi': ['Kashi Chaat Bhandar', 'Baati Chokha Restaurant', 'Pizzeria Vaatika Cafe', 'Madhur Milan', 'Deena Chaat Bhandar', 'Avtar Foods'],
          'delhi': ['Karim Jama Masjid', 'Bukhara ITC Maurya', 'Indian Accent', 'Paranthe Wali Gali', 'Saravana Bhavan CP', 'Nizam Kathi Rolls'],
          'jaipur': ['Chokhi Dhani', 'LMB (Laxmi Mishthan Bhandar)', 'Suvarna Mahal', 'Tapri Central', 'Handi Restaurant'],
          'mumbai': ['Trishna', 'Leopold Cafe', 'Britannia Cafe', 'Mahesh Lunch Home', 'Sardar Pav Bhaji'],
          'kolkata': ['Peter Cat', '6 Ballygunge Place', 'Aafreen', 'Kewpie Kitchen', 'Oh Calcutta'],
          'kerala': ['Dhe Puttu Kochi', 'Grandmama Cafe', 'Dal Roti', 'Banos Kerala Thali'],
          'bhopal': ['Manohar Dairy', 'Shreemaya Celebrity', 'Under the Mango Tree', 'Jahan-e-Khaas'],
          'lucknow': ['Tunday Kababi', 'Dastarkhwan', 'Royal Cafe', 'Oudhyana', 'Barbeque Nation'],
          'hyderabad': ['Paradise Biryani', 'Cafe Bahar', 'Shah Ghouse', 'Chutneys', 'Jewel of Nizam'],
          'pune': ['Vaishali', 'Shreemant Thali', 'Sujata Mastani', 'Malaka Spice', 'German Bakery'],
          'default': ['Local Restaurant', 'Dhaba Roadside Eatery', 'Thali Restaurant', 'Street Food Stall', 'Cafe', 'South Indian Restaurant', 'Mughlai Restaurant', 'Rooftop Restaurant'],
        },
      };
      var fallbackNames = knownNames[type]?.[type === 'default' ? 'default' : 'default'] || knownNames[type]?.['default'] || ['Place'];
      var destKey = (localStorage.getItem('yatraCurrentUser') ? (JSON.parse(localStorage.getItem('yatraUsers') || '{}')[localStorage.getItem('yatraCurrentUser')] || {}).dest : '' || '').toLowerCase();
      var cityNames = knownNames[type]?.[destKey] || fallbackNames;
      var usedNames = [];
      var offsets = [
        [0.003, 0.003], [-0.003, 0.003], [0.003, -0.003], [-0.003, -0.003],
        [0.006, 0], [0, 0.006], [-0.006, 0], [0, -0.006],
        [0.001, 0.005], [-0.001, -0.005]
      ];
      offsets.forEach(function(off, i) {
        var lat = center.lat + off[0];
        var lng = center.lng + off[1];
        var placeName = cityNames[i % cityNames.length] || (info.label + ' #' + (i + 1));
        if (usedNames.includes(placeName)) placeName = placeName + ' (' + (i + 1) + ')';
        usedNames.push(placeName);
        var dist = haversine(center.lat, center.lng, lat, lng);
        var distStr = dist < 1 ? (dist * 1000).toFixed(0) + 'm' : dist.toFixed(1) + 'km';
        var popup = '<div style="max-width:230px;font-family:Poppins,sans-serif">'
          + '<div style="background:' + info.color + ';color:#fff;padding:6px 10px;border-radius:8px 8px 0 0;font-weight:700;font-size:0.85rem">'
          + info.emoji + ' ' + placeName + '</div>'
          + '<div style="padding:8px 10px">'
          + '<div style="font-size:0.78rem;color:#666;margin-bottom:4px">📍 ' + (destKey ? destKey.charAt(0).toUpperCase() + destKey.slice(1) : 'India') + '</div>'
          + '<div style="font-size:0.78rem;color:#888;margin-bottom:6px">📏 ' + distStr + ' away</div>'
          + '<a href="https://www.google.com/maps/search/' + encodeURIComponent(placeName) + '/@' + lat + ',' + lng + ',17z" target="_blank" '
          + 'style="display:inline-flex;align-items:center;gap:4px;background:#2e7d32;color:#fff;padding:4px 10px;border-radius:6px;text-decoration:none;font-size:0.78rem;font-weight:600">'
          + '📌 Open in Google Maps</a></div></div>';
        var m = L.marker([lat, lng], { icon: makeIcon(info.color, info.emoji) }).addTo(markers);
        m.bindPopup(popup);
      });
      markers.addTo(map);
      nearbyLayers[type] = markers;
      activeNearby = type;
      document.querySelectorAll('.nearby-btn').forEach(b => b.classList.remove('active'));
      document.querySelector(".nearby-btn[onclick=\"searchNearby '" + type + "')\"]")?.classList.add('active');
      showToast(info.emoji + ' ' + usedNames.length + ' ' + info.label + 's shown near ' + (destKey ? destKey.charAt(0).toUpperCase() + destKey.slice(1) : 'your area') + ' — tap markers for details', 'success');
    }

    // Show destination marker on map from user profile
    function showDestinationOnMap() {
      const currentUser = localStorage.getItem('yatraCurrentUser');
      const users = JSON.parse(localStorage.getItem('yatraUsers') || '{}');
      const p = users[currentUser] || {};
      const dest = (p.dest || '').toLowerCase();
      if (!dest) return;

      const destCoords = findCoords(dest);
      if (!destCoords) return;

      if (destinationMarker) {
        destinationMarker.setLatLng(destCoords);
      } else {
        destinationMarker = L.marker(destCoords, {
          icon: makeIcon('#e91e63', '🏁'),
          zIndexOffset: 500
        }).addTo(map);
        destinationMarker.bindPopup(`<strong>🏁 Your Destination: ${p.dest}</strong><br><small>Profile destination</small>`);
      }

      // Zoom map to destination city
      map.setView(destCoords, 12, { animate: true });
      setTimeout(() => {
        destinationMarker.openPopup();
      }, 1000);
    }

    // Show user location marker on map
    function showUserOnMap(lat, lng) {
      if (userMarker) {
        userMarker.setLatLng([lat, lng]);
      }
    }

    // ═══════════════════════════════════════════
    // SOS MODAL
    // ═══════════════════════════════════════════
    function openSOS() {
      document.getElementById('sosOverlay').classList.add('active');
    }
    function closeSOS() {
      document.getElementById('sosOverlay').classList.remove('active');
    }
    document.getElementById('sosOverlay').addEventListener('click', e => {
      if (e.target === e.currentTarget) closeSOS();
    });

    // ═══════════════════════════════════════════
    // TOAST NOTIFICATIONS
    // ═══════════════════════════════════════════
    function showToast(msg, type='success') {
      const t = document.getElementById('toast');
      const icon = t.querySelector('i');
      t.className = 'toast active ' + type;
      icon.className = type === 'danger' ? 'fas fa-exclamation-triangle' : type === 'warning' ? 'fas fa-exclamation-circle' : 'fas fa-check-circle';
      icon.style.color = type === 'danger' ? 'var(--danger)' : type === 'warning' ? '#f57c00' : 'var(--success)';
      document.getElementById('toastText').textContent = msg;
      setTimeout(hideToast, 5000);
    }
    function hideToast() {
      document.getElementById('toast').classList.remove('active');
    }

    // ═══════════════════════════════════════════
    // NAVBAR SCROLL & MOBILE
    // ═══════════════════════════════════════════
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
    });
    document.getElementById('hamburger').addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('open');
    });
    document.getElementById('navLinks').addEventListener('click', e => {
      if (e.target.tagName === 'A') document.getElementById('navLinks').classList.remove('open');
    });

    // ═══════════════════════════════════════════
    // LANGUAGE SELECTOR
    // ═══════════════════════════════════════════
    document.getElementById('langSelect').addEventListener('change', e => {
      applyTranslation(e.target.value);
    });

    // ═══════════════════════════════════════════
    // INITIAL TRANSLATION
    // ═══════════════════════════════════════════
    applyTranslation('en');

    // ═══════════════════════════════════════════
    // LOGIN / REGISTER SYSTEM
    // ═══════════════════════════════════════════
    function switchLoginTab(tab) {
      document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
      if (tab === 'login') {
        document.querySelectorAll('.login-tab')[0].classList.add('active');
        document.getElementById('loginForm').classList.add('active');
      } else {
        document.querySelectorAll('.login-tab')[1].classList.add('active');
        document.getElementById('registerForm').classList.add('active');
      }
    }

    function togglePass(id, btn) {
      const input = document.getElementById(id);
      const icon = btn.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
      } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
      }
    }

    function doLogin() {
      const name = document.getElementById('loginName').value.trim();
      const pass = document.getElementById('loginPass').value;
      if (!name || !pass) { showToast('Please enter name and password', 'warning'); return; }
      const users = JSON.parse(localStorage.getItem('yatraUsers') || '{}');
      if (users[name] && users[name].password === pass) {
        localStorage.setItem('yatraCurrentUser', name);
        completeLogin(users[name]);
      } else if (!users[name]) {
        showToast('No account found. Please register first.', 'warning');
      } else {
        showToast('Incorrect password!', 'danger');
      }
    }

    function doRegister() {
      const name = document.getElementById('regName').value.trim();
      const pass = document.getElementById('regPass').value;
      const nationality = document.getElementById('regNationality').value;
      const lang = document.getElementById('regLang').value;
      const location = document.getElementById('regLocation').value.trim();
      const dest = document.getElementById('regDest').value.trim();
      const budget = document.getElementById('regBudget').value;
      const emergency = document.getElementById('regEmergency').value.trim();
      const emergName = document.getElementById('regEmergName').value.trim();
      const emergRel = document.getElementById('regEmergRel').value;
      const passport = document.getElementById('regPassport').value.trim();
      const blood = document.getElementById('regBlood').value;
      const accessibility = document.getElementById('regAccess').value;
      const terms = document.getElementById('regTerms').checked;

      if (!name || !pass) { showToast('Name and password are required', 'warning'); return; }
      if (!nationality || !lang) { showToast('Please select nationality and language', 'warning'); return; }
      if (!emergency) { showToast('Emergency contact phone is required for your safety', 'warning'); return; }
      if (pass.length < 6) { showToast('Password must be at least 6 characters', 'warning'); return; }
      if (!terms) { showToast('Please agree to the terms', 'warning'); return; }

      const users = JSON.parse(localStorage.getItem('yatraUsers') || '{}');
      if (users[name]) { showToast('An account with this name already exists', 'warning'); return; }

      const profile = { password: pass, nationality, lang, location, dest, budget, emergency, emergName, emergRel, passport, blood, accessibility, name, joinDate: new Date().toISOString() };
      users[name] = profile;
      localStorage.setItem('yatraUsers', JSON.stringify(users));
      localStorage.setItem('yatraCurrentUser', name);
      completeLogin(profile);
      showToast('Welcome to YatraSaathi, ' + name + '! 🎉', 'success');
    }

    function completeLogin(profile) {
      document.getElementById('loginOverlay').classList.add('hidden');
      document.getElementById('userWelcome').classList.add('active');
      const initials = profile.name.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 2);
      document.getElementById('userAvatar').textContent = initials;
      document.getElementById('userDisplayName').textContent = profile.name;
      // Auto-set translator language
      if (profile.lang) {
        const sel = document.getElementById('transTo');
        if (sel) sel.value = profile.lang;
      }
      // Auto-fill route from
      if (profile.location) {
        document.getElementById('routeFrom').value = profile.location;
      }
      if (profile.dest) {
        document.getElementById('routeTo').value = profile.dest;
      }
      // Build profile info
      const accessLabels = {
        none: 'None', wheelchair: '♿ Wheelchair User', visual: '👁️ Visual Impairment',
        hearing: '👂 Hearing Impairment', mobility: '🦯 Limited Mobility',
        elderly: '🧓 Senior Citizen', other: '📋 Other'
      };
      const accessVal = profile.accessibility || 'none';
      const rows = [
        ['Name', profile.name],
        ['Nationality', profile.nationality],
        ['Language', LANGUAGES[profile.lang] || profile.lang],
        ['Location', profile.location || '—'],
        ['Destination', profile.dest || '—'],
        ['Budget', profile.budget ? profile.budget.charAt(0).toUpperCase() + profile.budget.slice(1) : '—'],
        ['Emergency', profile.emergency || '—'],
        ['Accessibility', accessLabels[accessVal] || accessVal],
      ];
      let html = rows.map(r =>
        `<div class="profile-info-row"><span class="label">${r[0]}</span><span class="value">${r[1]}</span></div>`
      ).join('');
      if (profile.notes) {
        html += `<div style="margin-top:8px;padding:8px;background:#f5f7fa;border-radius:8px;font-size:0.78rem;color:var(--text-light)"><strong>📝 Notes:</strong> ${profile.notes}</div>`;
      }
      document.getElementById('profileInfo').innerHTML = html;
      // Start notifications after login
      initNotifications();
      // Show destination on map
      showDestinationOnMap();
    }

    function doLogout() {
      localStorage.removeItem('yatraCurrentUser');
      document.getElementById('loginOverlay').classList.remove('hidden');
      document.getElementById('userWelcome').classList.remove('active');
      document.getElementById('profileDropdown').classList.remove('active');
      document.getElementById('loginName').value = '';
      document.getElementById('loginPass').value = '';
      showToast('Logged out successfully', 'success');
    }

    function toggleProfile() {
      document.getElementById('profileDropdown').classList.toggle('active');
    }

    function toggleEditProfile(show) {
      document.getElementById('profileView').style.display = show ? 'none' : 'block';
      document.getElementById('profileEdit').style.display = show ? 'block' : 'none';
      if (show) {
        // Pre-fill edit form with current profile data
        const currentUser = localStorage.getItem('yatraCurrentUser');
        const users = JSON.parse(localStorage.getItem('yatraUsers') || '{}');
        const p = users[currentUser] || {};
        document.getElementById('editLocation').value = p.location || '';
        document.getElementById('editDest').value = p.dest || '';
        document.getElementById('editBudget').value = p.budget || '';
        document.getElementById('editEmergency').value = p.emergency || '';
        document.getElementById('editAccessibility').value = p.accessibility || 'none';
        document.getElementById('editNotes').value = p.notes || '';
      }
    }

    function saveProfile() {
      const currentUser = localStorage.getItem('yatraCurrentUser');
      if (!currentUser) return;
      const users = JSON.parse(localStorage.getItem('yatraUsers') || '{}');
      const p = users[currentUser];
      if (!p) return;

      const dest = document.getElementById('editDest').value.trim();
      if (!dest) { showToast('Destination is required', 'warning'); return; }

      // Update profile fields
      p.location = document.getElementById('editLocation').value.trim();
      p.dest = dest;
      p.budget = document.getElementById('editBudget').value;
      p.emergency = document.getElementById('editEmergency').value.trim();
      p.accessibility = document.getElementById('editAccessibility').value;
      p.notes = document.getElementById('editNotes').value.trim();
      p.lastUpdated = new Date().toISOString();

      // Save to localStorage
      users[currentUser] = p;
      localStorage.setItem('yatraUsers', JSON.stringify(users));

      // Re-render profile view
      completeLogin(p);

      // Switch back to view mode
      toggleEditProfile(false);

      showToast('Profile updated successfully! ✅', 'success');

      // If accessibility needs changed, show relevant alert
      if (p.accessibility && p.accessibility !== 'none') {
        const accessLabels = {
          wheelchair: 'Wheelchair User', visual: 'Visual Impairment',
          hearing: 'Hearing Impairment', mobility: 'Limited Mobility',
          elderly: 'Senior Citizen', other: 'Other'
        };
        setTimeout(() => {
          showToast(`Accessibility mode: ${accessLabels[p.accessibility]} — Nearby services will prioritize accessible routes`, 'info');
        }, 1500);
      }
    }

    // Close profile dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const dd = document.getElementById('profileDropdown');
      const uw = document.getElementById('userWelcome');
      if (dd && dd.classList.contains('active') && !dd.contains(e.target) && !uw.contains(e.target)) {
        dd.classList.remove('active');
      }
    });

    // ═══════════════════════════════════════════
    // ROUTE PLANNER (Google Maps)
    // ═══════════════════════════════════════════
    let routeMap = null;
    let routeLayer = null;

    // Predefined coordinates for major Indian cities
    const CITY_COORDS = {
      'delhi': [28.6139, 77.2090], 'new delhi': [28.6139, 77.2090],
      'mumbai': [19.0760, 72.8777], 'bombay': [19.0760, 72.8777],
      'jaipur': [26.9124, 75.7873], 'agra': [27.1767, 78.0081],
      'varanasi': [25.3176, 82.9739], 'bangalore': [12.9716, 77.5946],
      'bengaluru': [12.9716, 77.5946], 'chennai': [13.0827, 80.2707],
      'kolkata': [22.5726, 88.3639], 'calcutta': [22.5726, 88.3639],
      'goa': [15.2993, 74.1240], 'shimla': [31.1048, 77.1734],
      'manali': [32.2432, 77.1892], 'ladakh': [34.1526, 77.5771],
      'kashmir': [34.0837, 74.7973], 'srinagar': [34.0837, 74.7973],
      'pune': [18.5204, 73.8567], 'hyderabad': [17.3850, 78.4867],
      'ahmedabad': [23.0225, 72.5714], 'lucknow': [26.8467, 80.9462],
      'patna': [25.6093, 85.1376], 'chandigarh': [30.7333, 76.7794],
      'udaipur': [24.5854, 73.7125], 'jodhpur': [26.2389, 73.0243],
      'kochi': [9.9312, 76.2673], 'cochin': [9.9312, 76.2673],
      'madurai': [9.9252, 78.1198], 'mysore': [12.2958, 76.6394],
      'mysuru': [12.2958, 76.6394], 'pondicherry': [11.9416, 79.8083],
      'puducherry': [11.9416, 79.8083], 'hampi': [15.3350, 76.4600],
      'darjeeling': [27.0410, 88.2663], 'gangtok': [27.3389, 88.6065],
      'rishikesh': [30.0869, 78.2676], 'haridwar': [29.9457, 78.1643],
      'amritsar': [31.6340, 74.8723], 'nainital': [29.3816, 79.4498],
      'ooty': [11.4102, 76.6950], 'coonoor': [11.3530, 76.7970],
      'lonavala': [18.7547, 73.4070], 'khandala': [18.7612, 73.3952],
      'mount abu': [24.5926, 72.7156], 'pushkar': [26.4900, 74.5511],
      'jaisalmer': [26.9157, 70.9083], 'mussoorie': [30.4598, 78.0644],
      'coop': [22.5, 88.3],
    };

    function findCoords(city) {
      const c = city.toLowerCase().trim();
      return CITY_COORDS[c] || null;
    }

    // Haversine formula to calculate distance between two lat/lng points in km
    function openGoogleMaps() {
      const from = document.getElementById('routeFrom').value.trim();
      const to = document.getElementById('routeTo').value.trim();
      const mode = document.getElementById('routeMode').value;
      if (!from || !to) { showToast('Please enter origin and destination first', 'warning'); return; }
      const meta = MODE_META[mode] || MODE_META.driving;
      const url = `https://www.google.com/maps/dir/${encodeURIComponent(from)}/${encodeURIComponent(to)}/?travelmode=${meta.gmaps}`;
      window.open(url, '_blank');
      showToast(`Opening Google Maps: ${from} → ${to}`, 'success');
    }

    // Travel mode metadata
    const MODE_META = {
      driving:  { icon: '🚗', label: 'Driving',     speed: 60,  gmaps: 'driving',    emoji: '🚗', info: 'Road conditions may vary. Check for tolls.' },
      train:    { icon: '🚆', label: 'Train',        speed: 80,  gmaps: 'transit',    emoji: '🚆', info: 'Book via IRCTC. Check train schedules on indianrail.gov.in' },
      plane:    { icon: '✈️', label: 'Flight',       speed: 800, gmaps: 'transit',    emoji: '✈️', info: 'Check domestic flight prices on MakeMyTrip or Cleartrip.' },
      transit:  { icon: '🚌', label: 'Public Transit', speed: 40, gmaps: 'transit',   emoji: '🚌', info: 'Includes buses, metro, and local trains.' },
      bicycling:{ icon: '🚴', label: 'Cycling',      speed: 15,  gmaps: 'bicycling',  emoji: '🚴', info: 'Use dedicated cycle lanes where available.' },
      walking:  { icon: '🚶', label: 'Walking',      speed: 5,   gmaps: 'walking',    emoji: '🚶', info: 'Stay hydrated. Carry water in Indian summers.' },
    };

    // Plan route and show on map
    function planRoute() {
      const from = document.getElementById('routeFrom').value.trim();
      const to = document.getElementById('routeTo').value.trim();
      const mode = document.getElementById('routeMode').value;
      if (!from || !to) { showToast('Please enter both origin and destination', 'warning'); return; }

      // Get travel mode metadata
      const meta = MODE_META[mode] || MODE_META.driving;
      const fromCoords = findCoords(from);
      const toCoords = findCoords(to);

      // Google Maps URL
      const gmapsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(from)}/${encodeURIComponent(to)}/?travelmode=${meta.gmaps}`;
      document.getElementById('routeGmaps').href = gmapsUrl;
      document.getElementById('routeGmaps').style.display = 'inline-flex';

      // Show route on local map if coordinates are known
      if (fromCoords && toCoords) {
        // Show on local map
        document.getElementById('routeMap').innerHTML = '';
        if (!routeMap) {
          routeMap = L.map('routeMap').setView([(fromCoords[0]+toCoords[0])/2, (fromCoords[1]+toCoords[1])/2], 6);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap', maxZoom: 18
          }).addTo(routeMap);
        }

        
        if (routeLayer) routeMap.removeLayer(routeLayer);
        routeLayer = L.layerGroup().addTo(routeMap);

        L.marker(fromCoords, { icon: makeIcon('#2196f3', '📍') }).addTo(routeLayer)
          .bindPopup(`<strong>📍 ${from}</strong><br>Origin`);
        L.marker(toCoords, { icon: makeIcon('#d32f2f', '🏁') }).addTo(routeLayer)
          .bindPopup(`<strong>🏁 ${to}</strong><br>Destination`);

        // Draw line
        L.polyline([fromCoords, toCoords], { color: '#ff6f3c', weight: 4, dashArray: '10,8', opacity: 0.8 }).addTo(routeLayer);

        // Calculate approximate distance & time
        const dist = haversine(fromCoords[0], fromCoords[1], toCoords[0], toCoords[1]);
        const totalHours = dist / meta.speed;
        const hrs = Math.floor(totalHours);
        const mins = Math.round((totalHours - hrs) * 60);
        const timeStr = hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;

        routeMap.fitBounds([fromCoords, toCoords], { padding: [40, 40] });

        document.getElementById('routeInfo').classList.add('active');
        document.getElementById('routeDetails').innerHTML =
          `<strong>${meta.icon} ${meta.label}: ${from} → ${to}</strong><br>` +
          `📏 Distance: ~${dist.toFixed(0)} km<br>` +
          `⏱️ Estimated Time: ~${timeStr}<br>` +
          `<small style='color:var(--text-light)'>ℹ️ ${meta.info}</small><br>` +
          `<a href="${gmapsUrl}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:10px 18px;background:linear-gradient(135deg,#4285f4,#34a853);color:#fff;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.85rem;"><i class="fas fa-external-link-alt"></i> Open in Google Maps</a>`;
        showToast(`${meta.icon} Route calculated: ${from} → ${to} (${meta.label})`, 'success');
      } else {
        document.getElementById('routeInfo').classList.add('active');
        document.getElementById('routeDetails').innerHTML =
          `<strong>${meta.icon} ${meta.label}: ${from} → ${to}</strong><br>` +
          `<span>For detailed ${meta.label.toLowerCase()} directions, open Google Maps below.</span><br>` +
          `<a href="${gmapsUrl}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:10px 18px;background:linear-gradient(135deg,#4285f4,#34a853);color:#fff;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.85rem;"><i class="fas fa-external-link-alt"></i> Open in Google Maps</a>`;
        showToast(`Google Maps: ${meta.label} route from ${from} to ${to}`, 'success');
      }
    }

    // ═══════════════════════════════════════════
    // AI CHATBOT (YatraGuide)
    // ═══════════════════════════════════════════
    var chatOpen = false;
    var chatHistory = [];

    const DESTINATIONS = {
      'jaipur': {
        name: 'Jaipur', state: 'Rajasthan', type: 'Heritage City',
        places: [
          { name: 'Amber Fort', desc: 'Magnificent hilltop fortress with Sheesh Mahal (Mirror Palace). Take a jeep ride up.', tag: 'Must Visit' },
          { name: 'Hawa Mahal', desc: 'Iconic Palace of Winds with 953 small windows. Best visited at sunrise.', tag: 'Iconic' },
          { name: 'City Palace', desc: 'Royal residence with museums showcasing Rajasthani art and artifacts.', tag: 'Heritage' },
          { name: 'Jantar Mantar', desc: 'UNESCO astronomical observatory with the world\'s largest stone sundial.', tag: 'UNESCO' },
          { name: 'Nahargarh Fort', desc: 'Panoramic sunset views over the Pink City. Great for photography.', tag: 'Viewpoint' },
          { name: 'Jal Mahal', desc: 'Water palace floating in Man Sagar Lake. Stunning photo spot.', tag: 'Photo Spot' },
        ],
        tips: ['Best time: Oct-Mar. Summers exceed 45°C.', 'Hire a local guide at Amber Fort.', 'Try laal maas (spicy mutton curry) and kachori.', 'Bargain at Johari Bazaar for gemstone jewelry.'],
        food: ['Lassiwala (famous lassi since 1470)', 'Rawat Misthan Bhandar (pyaaz kachori)', 'Chokhi Dhani (village-themed dinner)'],
        weather: '☀️ Summers (Apr-Jun): Extreme heat 42-48°C — avoid outdoor sightseeing 11AM-4PM. 🌧️ Monsoon (Jul-Sep): Moderate rain 30-35°C, occasional flash floods. ❄️ Winter (Nov-Feb): Perfect 8-25°C, best time to visit. Carry a light jacket for early mornings.',
        dress: '• Loose cotton clothes in summer — Jaipur gets scorching hot\n• Shawl/scarf mandatory for temple and palace visits\n• Comfortable walking shoes (forts involve lots of climbing)\n• Sunglasses and wide-brimmed hat essential\n• In winter, layers — warm during day, cold at night\n• Avoid shorts at religious places',
        packing: '• SPF 50+ sunscreen (reapply every 2 hours)\n• Reusable water bottle (min 2L per day in summer)\n• Power bank and charger\n• Photocopy of ID/passport\n• Cash in small denominations (₹100, ₹500)\n• Mosquito repellent cream\n• Wet wipes and hand sanitizer\n• Sunglasses and lip balm with SPF',
        medicines: '• ORS sachets (essential in summer heat)\n• Paracetamol for heat headaches\n• Anti-diarrheal (Imodium) — rich Rajasthani food can upset stomach\n• Antihistamine for dust allergies\n• Sunburn cream (Aloe Vera gel)\n• Band-aids for fort climbing scrapes\n• Electrolyte tablets',
      },
      'delhi': {
        name: 'Delhi', state: 'Delhi/NCR', type: 'Capital City',
        places: [
          { name: 'Red Fort', desc: 'Mughal fortress and UNESCO site. Evening sound & light show is spectacular.', tag: 'UNESCO' },
          { name: 'Qutub Minar', desc: '73-meter victory tower from 1193. Marvel of Indo-Islamic architecture.', tag: 'UNESCO' },
          { name: 'India Gate', desc: 'War memorial arch. Beautiful at night with illuminated gardens.', tag: 'Iconic' },
          { name: 'Humayun\'s Tomb', desc: 'Precursor to the Taj Mahal. Stunning Mughal gardens.', tag: 'UNESCO' },
          { name: 'Chandni Chowk', desc: 'Bustling bazaar since 1650. Street food paradise — try paranthas at Paranthe Wali Gali.', tag: 'Food Street' },
          { name: 'Lotus Temple', desc: 'Stunning lotus-shaped Bahá\'í temple. Free entry, peaceful meditation.', tag: 'Spiritual' },
        ],
        tips: ['Use Delhi Metro — fast, cheap, clean.', 'Avoid auto-rickshaws without meters.', 'Best street food in Old Delhi around Jama Masjid.', 'Combine Agra day trip (2hrs by train).'],
        food: ['Karim\'s near Jama Masjid (kebabs)', 'Paranthe Wali Gali (stuffed breads)', 'Bukhara at ITC Maurya (splurge dinner)'],
      },
      'varanasi': {
        name: 'Varanasi', state: 'Uttar Pradesh', type: 'Spiritual City',
        places: [
          { name: 'Dashashwamedh Ghat', desc: 'Main ghat with spectacular Ganga Aarti ceremony every evening at 6:45 PM.', tag: 'Must Visit' },
          { name: 'Kashi Vishwanath Temple', desc: 'One of 12 Jyotirlingas. Recently renovated corridor is grand.', tag: 'Spiritual' },
          { name: 'Assi Ghat', desc: 'Popular ghat for sunrise boat rides and yoga. More accessible for wheelchair users.', tag: 'Accessible' },
          { name: 'Sarnath', desc: 'Where Buddha gave his first sermon. UNESCO site with ancient stupas.', tag: 'UNESCO' },
          { name: 'Manikarnika Ghat', desc: 'Sacred cremation ghat. Respectful observation only from a distance.', tag: 'Sacred' },
        ],
        tips: ['Take a sunrise boat ride on the Ganges.', 'Avoid touts offering private boat tours — negotiate first.', 'Cover shoulders and knees at temples.', 'Best time: Oct-Mar. Monsoon (Jul-Sep) is humid.'],
        food: ['Kachori sabzi (breakfast favorite)', 'Banarasi paan (betel leaf)', 'Malaiyo (winter frothy dessert)'],
        weather: '☀️ Summers (Apr-Jun): Very hot 35-45°C — avoid midday outdoor visits. 🌧️ Monsoon (Jul-Sep): Humid with moderate rain 30-35°C, ghats can flood. ❄️ Winter (Nov-Feb): Cool and foggy 8-22°C — perfect for ghats and boat rides. Morning fog is thick Dec-Jan.',
        dress: '• Light cotton clothes — Varanasi is humid even in winter\n• MUST cover shoulders and knees at all temples and ghats\n• Remove shoes before entering temples (easy slip-on shoes help)\n• Comfortable flat sandals for walking on ghats (steps are uneven)\n• Shawl/stole for evening Ganga Aarti (it gets windy)\n• Avoid tight/revealing clothing at religious sites',
        packing: '• Waterproof bag for ghats (splashing water)\n• Comfortable slip-on shoes (you remove them often)\n• Flashlight/headlamp for early morning boat rides\n• Mosquito repellent (ghats have mosquitoes)\n• Wet wipes and hand sanitizer\n• Cash in small notes (₹10, ₹20, ₹50 for donations)\n• Water bottle (refill at temples — free water)\n• Light rain jacket in monsoon',
        medicines: '• Anti-diarrheal (street food is rich and spicy)\n• ORS sachets (heat + humidity causes dehydration)\n• Paracetamol for headaches\n• Antihistamine for dust/pollution allergies\n• Antiseptic cream (ghat steps are slippery)\n• Motion sickness pills (boat rides)\n• Basic first-aid kit',
      },
      'agra': {
        name: 'Agra', state: 'Uttar Pradesh', type: 'Heritage City',
        places: [
          { name: 'Taj Mahal', desc: 'Wonder of the World. Sunrise visit is magical. Wheelchair accessible with golf carts.', tag: 'Wonder' },
          { name: 'Agra Fort', desc: 'Massive red sandstone Mughal fort with Taj Mahal views from the window.', tag: 'UNESCO' },
          { name: 'Fatehpur Sikri', desc: 'Ghost city of Emperor Akbar. 35km from Agra, worth a half-day trip.', tag: 'UNESCO' },
          { name: 'Mehtab Bagh', desc: 'Moonlight Garden across the river — best sunset views of the Taj.', tag: 'Photo Spot' },
        ],
        tips: ['Taj Mahal closed on Fridays.', 'Buy tickets online to skip queues.', 'Avoid Tuesday (Taj Mahal viewing can be crowded after Monday closure in some areas).', 'Hire a licensed guide at the entrance.'],
        food: ['Petha (sweet translucent candy)', 'Bedai & subzi (Agra breakfast)', 'Daulat ki chaat (winter foam dessert)'],
      },
      'goa': {
        name: 'Goa', state: 'Goa', type: 'Beach Paradise',
        places: [
          { name: 'Baga Beach', desc: 'Lively beach with water sports, shacks, and nightlife. Beach wheelchairs available.', tag: 'Popular' },
          { name: 'Old Goa Churches', desc: 'UNESCO Portuguese-era churches. Basilica of Bom Jesus houses St. Francis Xavier.', tag: 'UNESCO' },
          { name: 'Dudhsagar Falls', desc: 'Four-tiered 310m waterfall. Jeep safari or train ride to reach.', tag: 'Nature' },
          { name: 'Fort Aguada', desc: '17th-century Portuguese fort with lighthouse and sunset views.', tag: 'Heritage' },
          { name: 'Palolem Beach', desc: 'Peaceful crescent-shaped beach in South Goa. Kayaking with dolphins.', tag: 'Peaceful' },
        ],
        tips: ['Rent a scooter to explore.', 'Best time: Nov-Feb. Monsoon closes many beaches.', 'South Goa is quieter, North Goa is livelier.', 'Carry cash — many shacks don\'t take cards.'],
        food: ['Fish curry rice (Goan staple)', 'Bebinca (layered coconut dessert)', 'Feni (local cashew/coconut spirit)'],
        weather: '☀️ Winter (Nov-Feb): Perfect beach weather 25-32°C, sunny and dry. Peak tourist season. ☀️ Summer (Mar-May): Hot 30-36°C but still beach-friendly. 🌧️ Monsoon (Jun-Sep): Heavy rain 40-50mm/day, many beach shacks close, dramatic green landscapes.',
        dress: '• Swimwear/beachwear for beaches (bikinis fine at tourist beaches)\n• Light cotton shorts and t-shirts\n• Cover up when visiting churches and temples\n• Comfortable flip-flops/sandals\n• Light rain jacket in monsoon\n• Modest clothing for Old Goa churches\n• Evening wear for beach clubs/shacks',
        packing: '• Waterproof dry bag (for beach and water sports)\n• SPF 50+ waterproof sunscreen\n• Mosquito repellent (strong, tropical mosquitoes)\n• Reusable water bottle\n• Cash (₹500-1000 notes, many shacks are cash-only)\n• Waterproof phone pouch\n• Snorkeling gear (or rent locally)\n• Beach towel',
        medicines: '• Anti-diarrheal (seafood can be rich)\n• Antihistamine (mosquito bites)\n• Sunburn cream (aloe vera gel)\n• ORS sachets\n• Paracetamol\n• Motion sickness pills (winding roads to forts)\n• Antiseptic for coral cuts',
      },
      'kerala': {
        name: 'Kerala', state: 'Kerala', type: 'God\'s Own Country',
        places: [
          { name: 'Alleppey Backwaters', desc: 'Houseboat cruise through palm-lined canals. Overnight stays available.', tag: 'Must Visit' },
          { name: 'Munnar', desc: 'Hill station with tea plantations, misty mountains, and cool climate.', tag: 'Hill Station' },
          { name: 'Thekkady', desc: 'Wildlife sanctuary with elephant and tiger sighting. Spice plantation tours.', tag: 'Wildlife' },
          { name: 'Kovalam Beach', desc: 'Crescent beach with lighthouse. Ayurvedic resorts nearby.', tag: 'Beach' },
          { name: 'Fort Kochi', desc: 'Historic port town with Chinese fishing nets, Dutch Palace, and art cafés.', tag: 'Heritage' },
        ],
        tips: ['Monsoon (Jun-Sep) is beautiful but wet.', 'Ayurvedic treatments are world-famous here.', 'Book houseboats in advance during season.', 'Carry mosquito repellent.'],
        food: ['Appam & stew (coconut milk curry)', 'Karimeen (pearl spot fish)', 'Kerala sadya (banana leaf feast)'],
        weather: '☀️ Summers (Mar-May): Hot and humid 28-36°C. 🌧️ Monsoon (Jun-Sep): Heavy rainfall 400-500mm/month — lush green but wet. Best for Ayurveda. ❄️ Winter (Oct-Feb): Pleasant 18-28°C, ideal for backwaters and hill stations. Hill stations like Munnar can drop to 10°C.',
        dress: '• Light cotton or linen — Kerala is humid year-round\n• Modest clothing for temple visits (cover knees and shoulders)\n• Swimwear for beaches and backwaters\n• Rain jacket/poncho essential in monsoon\n• Comfortable sandals (leather gets ruined in rain)\n• Light shawl for air-conditioned houseboats',
        packing: '• Waterproof bag/backpack (monsoon essential)\n• Strong mosquito repellent (DEET 30%+)\n• SPF 50+ waterproof sunscreen\n• Quick-dry clothing\n• Waterproof phone case\n• Umbrella (compact, strong wind-resistant)\n• Reusable water bottle\n• Small towel/handkerchief',
        medicines: '• Anti-mosquito tablets (if prone to bites)\n• Oral rehydration salts\n• Anti-diarrheal medicine\n• Antihistamine for insect bites\n• Antifungal cream (humidity causes skin issues)\n• Paracetamol\n• First-aid kit with band-aids and antiseptic',
      },
      'manali': {
        name: 'Manali', state: 'Himachal Pradesh', type: 'Hill Station',
        places: [
          { name: 'Rohtang Pass', desc: 'High mountain pass at 3,978m with snow. Permit required. Open May-Nov.', tag: 'Adventure' },
          { name: 'Old Manali', desc: 'Quaint village with cafés, shops, and Manaslu Temple.', tag: 'Charming' },
          { name: 'Solang Valley', desc: 'Paragliding, zorbing, skiing. Adventure sports hub.', tag: 'Adventure' },
          { name: 'Hadimba Temple', desc: 'Ancient wooden temple in a cedar forest. Unique architecture.', tag: 'Spiritual' },
        ],
        tips: ['⚠️ Landslide risk Jul-Sep. Check road conditions.', 'Altitude sickness possible above 3,000m.', 'Carry warm clothes even in summer evenings.', 'Book accommodations in advance for peak season.'],
        food: ['Siddu (steamed bread with filling)', 'Dham (festive Himachali thali)', 'Momos and thukpa (Tibetan influence)'],
      },
      'kashmir': {
        name: 'Kashmir', state: 'Jammu & Kashmir', type: 'Paradise on Earth',
        places: [
          { name: 'Dal Lake', desc: 'Iconic lake with shikara rides and floating gardens. Houseboat stays.', tag: 'Must Visit' },
          { name: 'Gulmarg', desc: 'Meadow of flowers. Gondola ride to 3,980m. Skiing in winter.', tag: 'Adventure' },
          { name: 'Pahalgam', desc: 'Valley of shepherds. Base for Amarnath Yatra. Beautiful meadows.', tag: 'Nature' },
          { name: 'Sonmarg', desc: 'Meadow of Gold. Gateway to Ladakh. Sindh River rafting.', tag: 'Scenic' },
        ],
        tips: ['⚠️ Check MHA advisories before travel.', 'Some areas near LoC are restricted.', 'Best time: Mar-Oct. Winter for skiing.', 'Hire a local guide — they know the safest routes.'],
        food: ['Rogan josh (signature lamb dish)', 'Kahwa (saffron almond tea)', 'Dum aloo (Kashmiri potatoes)'],
        weather: '☀️ Summers (Mar-May): Pleasant 15-30°C — perfect sightseeing. 🌧️ Monsoon (Jul-Aug): Moderate rain, roads to Gulmarg may close. ❄️ Winter (Nov-Feb): Extreme cold -2°C to 8°C. Gulmarg gets heavy snow — best for skiing. Srinagar Dal Lake freezes!',
        dress: '• Heavy woolens in winter (thermal innerwear essential)\n• Multiple layers — temperature drops sharply at night\n• Waterproof jacket for monsoon\n• Comfortable trekking shoes with good grip\n• Warm cap, gloves, and muffler for winter\n• Modest clothing for shrine visits (Hazratbal, etc.)\n• UV sunglasses (snow glare is intense)',
        packing: '• Heavy-duty waterproof jacket\n• Thermal innerwear (2-3 sets in winter)\n• Waterproof boots with grip\n• Sunscreen SPF 50+ (snow reflects UV)\n• Lip balm with SPF\n• Power bank (cold drains battery fast)\n• Moisturizer (extreme dry cold)\n• Hand warmers (for winter)',
        medicines: '• Diamox for altitude sickness (if going to Sonmarg/Gulmarg above 2500m)\n• Paracetamol for headaches\n• Vaseline for cracked lips (cold weather)\n• Moisturizing cream for dry skin\n• Anti-diarrheal\n• Motion sickness pills (winding mountain roads)\n• First-aid kit',
      },
      'udaipur': {
        name: 'Udaipur', state: 'Rajasthan', type: 'City of Lakes',
        places: [
          { name: 'City Palace', desc: 'Grand lakeside palace complex with museums and courtyards.', tag: 'Heritage' },
          { name: 'Lake Pichola', desc: 'Scenic boat ride to Jag Mandir and Lake Palace.', tag: 'Must Visit' },
          { name: 'Sajjangarh Palace', desc: 'Monsoon Palace with panoramic sunset views.', tag: 'Viewpoint' },
          { name: 'Jagdish Temple', desc: 'Ornate Indo-Aryan temple in the old city.', tag: 'Spiritual' },
        ],
        tips: ['Sunset boat ride on Lake Pichola is magical.', 'Walk the old city lanes for art galleries.', 'Best time: Sep-Mar.', 'Stay in a heritage haveli for the royal experience.'],
        food: ['Dal bati churma (Rajasthani classic)', 'Gatte ki sabzi', 'Mawa kachori (sweet)'],
      },
      'rishikesh': {
        name: 'Rishikesh', state: 'Uttarakhand', type: 'Yoga Capital',
        places: [
          { name: 'Laxman Jhula', desc: 'Iconic suspension bridge over the Ganges. Sunset is stunning.', tag: 'Iconic' },
          { name: 'Ram Jhula', desc: 'Larger suspension bridge near ashrams and temples.', tag: 'Spiritual' },
          { name: 'Triveni Ghat', desc: 'Evening Ganga Aarti ceremony. Magical spiritual experience.', tag: 'Must Visit' },
          { name: 'Beatles Ashram', desc: 'Abandoned ashram where The Beatles studied meditation. Street art inside.', tag: 'Unique' },
        ],
        tips: ['River rafting season: Sep-Jun.', 'Book yoga/meditation courses in advance.', 'Many restaurants are vegetarian (pure veg city).', 'Carry layers — evenings are cool.'],
        food: ['Chotiwala restaurant (famous local spot)', 'Aloo poori at local dhabas', 'Fresh fruit juices and lassis'],
      },
      'mysuru': {
        name: 'Mysuru (Mysore)', state: 'Karnataka', type: 'City of Palaces',
        places: [
          { name: 'Mysore Palace', desc: 'Illuminated with 97,000 bulbs on Sundays & festivals. Fully accessible.', tag: 'Must Visit' },
          { name: 'Chamundi Hills', desc: 'Panoramic city views and ancient Chamundeshwari Temple.', tag: 'Viewpoint' },
          { name: 'Brindavan Gardens', desc: 'Musical fountain and illuminated terraced gardens.', tag: 'Evening' },
          { name: 'Devaraja Market', desc: 'Century-old market with spices, flowers, and sandalwood.', tag: 'Shopping' },
        ],
        tips: ['Dasara festival (Oct) is spectacular — 10 days of celebrations.', 'Visit the palace at night when it\'s illuminated.', 'Combine with a Coorg coffee plantation day trip.', 'Try Mysore pak — the original sweet shop is Guru Sweets.'],
        food: ['Mysore pak (famous sweet)', 'Masala dosa (Mysore-style crispy)', 'Filter coffee at any local darshini'],
      },
      'shimla': {
        name: 'Shimla', state: 'Himachal Pradesh', type: 'Queen of Hill Stations',
        places: [
          { name: 'The Ridge', desc: 'Open plaza with panoramic mountain views. Center of Shimla social life.', tag: 'Must Visit' },
          { name: 'Mall Road', desc: 'Pedestrian street with shops, cafés, and colonial architecture.', tag: 'Shopping' },
          { name: 'Jakhoo Temple', desc: 'Highest point in Shimla with Hanuman statue and monkey encounters.', tag: 'Viewpoint' },
          { name: 'Kufri', desc: 'Snow-covered hill station 16km away. Skiing in winter.', tag: 'Adventure' },
          { name: 'Christ Church', desc: 'Second oldest church in North India. Beautiful stained glass.', tag: 'Heritage' },
        ],
        tips: ['Toy Train from Kalka is a UNESCO experience.', 'Visit in May-June for pleasant weather.', 'Winter (Dec-Feb) brings snow — carry warm clothes.', 'Avoid weekends — extremely crowded.'],
        food: ['Siddu (steamed Himachali bread)', 'Madra (chickpea curry)', 'Chha Ghost (yogurt-based mutton)', 'Babru (stuffed kachori)', 'Tudkiya Bhath (spiced rice)'],
        weather: '☀️ Summer (Mar-Jun): Pleasant 15-25°C — perfect for sightseeing. Occasional rain showers. 🌧️ Monsoon (Jul-Sep): Heavy rainfall 12-20°C, landslides common — avoid travel. ❄️ Winter (Oct-Feb): Cold 0-10°C, heavy snowfall Dec-Jan. Roads may close. Temperature drops to -5°C at night.',
        dress: '• Layered clothing essential — temperature changes rapidly\n• Heavy woolen jacket, thermal innerwear for winter (Nov-Feb)\n• Light jacket even in summer — evenings are cool\n• Waterproof rain jacket for monsoon\n• Comfortable trekking shoes with good grip\n• Warm socks, gloves, and muffler for winter\n• Woolen cap/beanie for snow season\n• Umbrella is a must year-round',
        packing: '• SPF 50+ sunscreen (high altitude = stronger UV)\n• Moisturizer (mountain air is very dry)\n• Lip balm with SPF\n• Reusable water bottle\n• Power bank and charger\n• Photocopy of ID\n• Torch/flashlight (power cuts common)\n• Plastic bags for wet clothes\n• Thermal flask for hot water',
        medicines: '• Paracetamol for headaches (altitude change)\n• Acetazolamide (Diamox) for mountain sickness if coming from plains\n• Anti-nausea medicine (motion sickness on winding roads)\n• ORS sachets\n• Band-aids for trekking scrapes\n• Cold & cough syrup (weather changes fast)\n• Vicks VapoRub for cold nights\n• Any personal altitude sickness meds',
      },
      'amritsar': {
        name: 'Amritsar', state: 'Punjab', type: 'Spiritual Capital',
        places: [
          { name: 'Golden Temple', desc: 'Holiest Sikh shrine. Free langar feeds 100,000+ daily. Fully accessible.', tag: 'Must Visit' },
          { name: 'Jallianwala Bagh', desc: 'Historic memorial of 1919 massacre. Bullet marks still visible.', tag: 'Historic' },
          { name: 'Wagah Border', desc: 'India-Pakistan border ceremony. Patriotic and electrifying.', tag: 'Unique' },
          { name: 'Partition Museum', desc: 'Moving museum documenting the 1947 Partition. World\'s first.', tag: 'Museum' },
        ],
        tips: ['Cover your head at Golden Temple (scarves provided free).', 'Langar (free meal) is open to all — a must experience.', 'Wagah Border ceremony starts at 4:15 PM.', 'Try the kulcha near the temple.'],
        food: ['Amritsari kulcha (stuffed bread)', 'Makke di roti & sarson da saag', 'Lassi from Giani di Lassi'],
      },
      'hampi': {
        name: 'Hampi', state: 'Karnataka', type: 'Ancient Ruins',
        places: [
          { name: 'Virupaksha Temple', desc: 'Active temple since 7th century. UNESCO site with stunning architecture.', tag: 'UNESCO' },
          { name: 'Vittala Temple & Stone Chariot', desc: 'Iconic musical pillars and stone chariot. Engineering marvel.', tag: 'Iconic' },
          { name: 'Hampi Bazaar', desc: 'Ancient market street. Coracle ride on the Tungabhadra River.', tag: 'Heritage' },
          { name: 'Matanga Hill', desc: 'Best sunrise viewpoint over the entire Hampi ruins.', tag: 'Viewpoint' },
        ],
        tips: ['Rent a bicycle to explore the vast ruins.', 'Audio guides available at main temple.', 'Carry water — it\'s hot and open terrain.', 'Combine with Hospet (13km) for hotels.'],
        food: ['Bisi bele bath (Karnataka rice dish)', 'Dosa at local darshini', 'Fresh banana chips from roadside stalls'],
      },
      'darjeeling': {
        name: 'Darjeeling', state: 'West Bengal', type: 'Tea Capital of India',
        places: [
          { name: 'Tiger Hill', desc: 'Sunrise over Kanchenjunga (3rd highest peak). Magical at dawn.', tag: 'Must Visit' },
          { name: 'Darjeeling Himalayan Railway', desc: 'UNESCO Toy Train. Chugging through tea gardens.', tag: 'UNESCO' },
          { name: 'Tea Gardens', desc: 'Visit Makaibari or Happy Valley tea estate. Factory tour + tasting.', tag: 'Experience' },
          { name: 'Batasia Loop', desc: 'Spiral railway track with war memorial and panoramic views.', tag: 'Scenic' },
        ],
        tips: ['Best season: Mar-May and Oct-Dec.', 'Toy train ride is slow but scenic — book in advance.', 'Carry layers — evenings are chilly.', 'Visit Tiger Hill at 4 AM for sunrise.'],
        food: ['Momos and thukpa (Tibetan influence)', 'Darjeeling tea (obviously!)', 'Sel roti (Nepali rice bread)'],
      },
      'ooty': {
        name: 'Ooty (Udhagamandalam)', state: 'Tamil Nadu', type: 'Queen of Nilgiris',
        places: [
          { name: 'Nilgiri Mountain Railway', desc: 'UNESCO Toy Train from Mettupalayam. 46km of scenic beauty.', tag: 'UNESCO' },
          { name: 'Botanical Garden', desc: '1848 garden with 650+ species. Fossilized tree trunk 20 million years old.', tag: 'Nature' },
          { name: 'Ooty Lake', desc: 'Boating in serene lake surrounded by eucalyptus trees.', tag: 'Relaxing' },
          { name: 'Doddabetta Peak', desc: 'Highest point in Nilgiris at 2,637m. Telescope house for views.', tag: 'Viewpoint' },
        ],
        tips: ['Toy train needs booking weeks ahead.', 'Best time: Apr-Jun and Oct-Dec.', 'Avoid monsoon (Jul-Sep) — landslides possible.', 'Carry a light jacket even in summer.'],
        food: ['Varkey (Ooty biscuit)', 'Homemade chocolates', 'Eucalyptus oil (buy as souvenir)'],
      },
      'jaisalmer': {
        name: 'Jaisalmer', state: 'Rajasthan', type: 'Golden City',
        places: [
          { name: 'Jaisalmer Fort', desc: 'Living fort with 1/4 of city\'s population inside. Golden sandstone magic.', tag: 'Must Visit' },
          { name: 'Sam Sand Dunes', desc: 'Desert camping with camel safari and Rajasthani folk music at sunset.', tag: 'Experience' },
          { name: 'Patwon Ki Haveli', desc: 'Largest haveli cluster. Intricate carvings and mirror work.', tag: 'Heritage' },
          { name: 'Gadisar Lake', desc: 'Artificial lake with temples and gateway. Beautiful at sunset.', tag: 'Scenic' },
        ],
        tips: ['Desert safari at sunset is unforgettable.', 'Carry sunscreen and water — extreme heat.', 'Winter nights in desert can be freezing.', 'Bargain hard at bazaars.'],
        food: ['Dal baati churma', 'Ker sangri (desert berry dish)', 'Makhania lassi'],
      },
      'jodhpur': {
        name: 'Jodhpur', state: 'Rajasthan', type: 'Blue City',
        places: [
          { name: 'Mehrangarh Fort', desc: 'Massive cliff-top fort. One of India\'s finest museums inside.', tag: 'Must Visit' },
          { name: 'Blue City Streets', desc: 'Wander the blue-painted Brahmin quarter below the fort.', tag: 'Photo Spot' },
          { name: 'Umaid Bhawan Palace', desc: 'Art Deco palace — part royal residence, part Taj hotel, part museum.', tag: 'Luxury' },
          { name: 'Clock Tower & Sardar Market', desc: 'Vibrant bazaar for spices, textiles, and handicrafts.', tag: 'Shopping' },
        ],
        tips: ['Mehrangarh audio guide is excellent.', 'Blue city walk tour available at sunrise.', 'Best time: Oct-Mar.', 'Combine with Jaisalmer for a desert circuit.'],
        food: ['Mirchi bada (chili fritters)', 'Mawa kachori (sweet)', 'Pyaaz ki kachori'],
      },
      'andaman': {
        name: 'Andaman Islands', state: 'Andaman & Nicobar', type: 'Island Paradise',
        places: [
          { name: 'Radhanagar Beach', desc: 'Asia\'s best beach. Pristine white sand and turquoise water.', tag: 'Must Visit' },
          { name: 'Cellular Jail', desc: 'National memorial. Light & sound show narrates freedom struggle.', tag: 'Historic' },
          { name: 'Scuba Diving at Havelock', desc: 'Crystal clear water with coral reefs and sea turtles.', tag: 'Adventure' },
          { name: 'Ross Island', desc: 'British-era ruins reclaimed by nature. Deer roam freely.', tag: 'Historic' },
        ],
        tips: ['Book flights/ferry in advance — limited seats.', 'Best time: Oct-May. Monsoon closes many activities.', 'Carry cash — ATMs are scarce on islands.', 'Respect Nicobar islands — entry restricted.'],
        food: ['Fresh seafood (grilled fish, prawns)', 'Coconut-based curries', 'Tropical fruits'],
      },
      'coorg': {
        name: 'Coorg (Kodagu)', state: 'Karnataka', type: 'Scotland of India',
        places: [
          { name: 'Abbey Falls', desc: '80ft waterfall surrounded by coffee plantations.', tag: 'Nature' },
          { name: 'Raja\'s Seat', desc: 'Panoramic valley view. Musical garden with sunset views.', tag: 'Viewpoint' },
          { name: 'Dubare Elephant Camp', desc: 'Bathe and feed elephants. River rafting nearby.', tag: 'Experience' },
          { name: 'Coffee Plantation Stay', desc: 'Homestays in working coffee estates. Authentic Kodava experience.', tag: 'Unique' },
        ],
        tips: ['Monsoon (Jun-Sep) is lush but rainy.', 'Homestays offer the best experience.', 'Carry leech socks during monsoon.', 'Combine with Mysore (3hrs drive).'],
        food: ['Kadambuttu (rice dumplings)', 'Pandi curry (pork — Kodava specialty)', 'Coorg coffee (world-class)'],
      },
      'pondicherry': {
        name: 'Pondicherry (Puducherry)', state: 'Puducherry', type: 'French Quarter',
        places: [
          { name: 'French Quarter', desc: 'Colonial architecture, bougainvillea-lined streets, cafés.', tag: 'Charming' },
          { name: 'Auroville', desc: 'Experimental township. Matrimandir golden dome is stunning.', tag: 'Unique' },
          { name: 'Promenade Beach', desc: '1.5km beachfront walk. Gandhi statue, old lighthouse.', tag: 'Beach' },
          { name: 'Aurobindo Ashram', desc: 'Peaceful meditation space. Silence zone inside.', tag: 'Spiritual' },
        ],
        tips: ['Rent a scooter to explore.', 'French Quarter is best on foot.', 'Auroville needs prior registration.', 'Best time: Oct-Mar.'],
        food: ['French bakeries (fresh croissants)', 'Filter coffee (Tamil style)', 'Seafood at Rock Beach shacks'],
      },
      'khajuraho': {
        name: 'Khajuraho', state: 'Madhya Pradesh', type: 'Temples of Passion',
        places: [
          { name: 'Western Group of Temples', desc: 'UNESCO site with intricate sculptures. Kandariya Mahadeva is the masterpiece.', tag: 'UNESCO' },
          { name: 'Sound & Light Show', desc: 'Evening show narrating temple history. Magical atmosphere.', tag: 'Evening' },
          { name: 'Eastern Group', desc: 'Jain and Hindu temples. Less crowded, equally beautiful.', tag: 'Heritage' },
        ],
        tips: ['Hire a guide — sculptures have hidden stories.', 'Visit at sunset for golden hour photos.', 'Combine with Orchha (3hrs) and Panna National Park.', 'Best time: Oct-Mar.'],
        food: ['Malpua (sweet pancake)', 'Dal bafla (baked bread with lentils)', 'Bhopali gosht (mutton curry)'],
      },
      'spiti': {
        name: 'Spiti Valley', state: 'Himachal Pradesh', type: 'Cold Desert',
        places: [
          { name: 'Key Monastery', desc: '1000-year-old Tibetan monastery perched on a hilltop. Breathtaking.', tag: 'Spiritual' },
          { name: 'Chandratal Lake', desc: 'Crescent moon lake at 4,300m. Camping under stars.', tag: 'Nature' },
          { name: 'Langza Village', desc: 'Fossil village at 4,400m. Find ancient marine fossils!', tag: 'Unique' },
          { name: 'Dhankar Monastery', desc: 'Cliff-edge monastery with views of Spiti river confluence.', tag: 'Scenic' },
        ],
        tips: ['Altitude sickness is real — acclimatize in Manali/Kaza.', 'Roads open Jun-Oct only. Carry warm clothes.', 'No ATMs — carry sufficient cash.', 'Limited network — inform family beforehand.'],
        food: ['Thukpa (noodle soup)', 'Momos (Tibetan dumplings)', 'Chhang (barley beer — non-alcoholic version available)'],
      },
      'pushkar': {
        name: 'Pushkar', state: 'Rajasthan', type: 'Holy Lake Town',
        places: [
          { name: 'Pushkar Lake', desc: 'Sacred lake with 52 ghats. Spiritual bathing rituals at sunset.', tag: 'Spiritual' },
          { name: 'Brahma Temple', desc: 'One of very few temples dedicated to Lord Brahma in the world.', tag: 'Unique' },
          { name: 'Pushkar Camel Fair', desc: 'Annual November fair. Thousands of camels, folk music, racing.', tag: 'Event' },
        ],
        tips: ['No meat or alcohol within city limits.', 'Beware of priest scams at ghats.', 'Camel Fair (Nov) is crowded but incredible.', 'Best time: Oct-Mar.'],
        food: ['Malpua (famous Pushkar sweet)', 'Dal baati churma', 'Lassis at every corner'],
      },
      'gangtok': {
        name: 'Gangtok', state: 'Sikkim', type: 'Gateway to Himalayas',
        places: [
          { name: 'MG Marg', desc: 'Pedestrian-only street. Cafés, shops, and vibrant nightlife.', tag: 'Must Visit' },
          { name: 'Tsomgo Lake', desc: 'Glacial lake at 3,753m. Yak rides and stunning views.', tag: 'Nature' },
          { name: 'Rumtek Monastery', desc: 'Largest monastery in Sikkim. Golden stupa inside.', tag: 'Spiritual' },
          { name: 'Nathula Pass', desc: 'India-China border at 4,310m. Permit required.', tag: 'Adventure' },
        ],
        tips: ['Inner Line Permit needed for Nathula.', 'Sikkim is plastic-free state.', 'Carry warm clothes even in summer.', 'Best time: Mar-May and Oct-Dec.'],
        food: ['Thukpa and momos (Tibetan)', 'Phagshapa (pork with radish)', 'Churpi (local cheese snack)'],
      },
      'ajanta': {
        name: 'Ajanta & Ellora', state: 'Maharashtra', type: 'Ancient Cave Art',
        places: [
          { name: 'Ajanta Caves', desc: '30 Buddhist caves with 2000-year-old paintings. UNESCO masterpiece.', tag: 'UNESCO' },
          { name: 'Ellora Caves', desc: '34 caves — Buddhist, Hindu, and Jain side by side. Kailasa temple is carved from ONE rock.', tag: 'UNESCO' },
          { name: 'Grishneshar Temple', desc: 'One of 12 Jyotirlingas near Ellora.', tag: 'Spiritual' },
        ],
        tips: ['Ajanta closed on Mondays, Ellora on Tuesdays.', 'Hire certified guides at entrance.', 'Carry water — caves involve lots of walking.', 'Combine with Aurangabad (100km).'],
        food: ['Authentic Maharashtrian thali', 'Vada pav (street food)', 'Puran poli (sweet flatbread)'],
      },
      'shillong': {
        name: 'Shillong', state: 'Meghalaya', type: 'Scotland of the East',
        places: [
          { name: 'Living Root Bridges', desc: 'Natural bridges made from rubber tree roots. Trek to Double Decker at Nongriat.', tag: 'Unique' },
          { name: 'Don Bosco Museum', desc: '7-floor museum of Northeast Indian culture. Asia\'s largest.', tag: 'Museum' },
          { name: 'Elephant Falls', desc: 'Three-tiered waterfall. Easy access and beautiful.', tag: 'Nature' },
          { name: 'Mawlynnong Village', desc: 'Asia\'s cleanest village. Living root bridge nearby.', tag: 'Eco-Tourism' },
        ],
        tips: ['Carry rain gear always — wettest region in India.', 'Respect local Khasi customs.', 'Best time: Oct-May.', 'Hire local guides for root bridge treks.'],
        food: ['Jadoh (Khasi rice & pork dish)', 'Tungrymbai (fermented soybean)', 'Local kiwi fruit juice'],
      },
      'bodh gaya': {
        name: 'Bodh Gaya', state: 'Bihar', type: 'Buddhist Pilgrimage',
        places: [
          { name: 'Mahabodhi Temple', desc: 'UNESCO site where Buddha attained enlightenment. 50m tall pyramidal tower.', tag: 'UNESCO' },
          { name: 'Bodhi Tree', desc: 'Descendant of the original tree under which Buddha meditated.', tag: 'Sacred' },
          { name: 'Great Buddha Statue', desc: '25m tall Buddha statue. Meditative and peaceful.', tag: 'Iconic' },
        ],
        tips: ['Dress modestly at temple.', 'Best time: Oct-Mar.', 'Combine with Rajgir and Nalanda (historic university).', 'Monks from all over the world study here.'],
        food: ['Bihari thali (litti chokha)', 'Thekua (sweet snack)', 'Local street chaat'],
      },
      'mount abu': {
        name: 'Mount Abu', state: 'Rajasthan', type: 'Rajasthan\'s Only Hill Station',
        places: [
          { name: 'Dilwara Temples', desc: '5 Jain temples with world\'s finest marble carvings. Incredible detail.', tag: 'Must Visit' },
          { name: 'Nakki Lake', desc: 'Artificial lake. Boating and marble rock formations.', tag: 'Relaxing' },
          { name: 'Guru Shikhar', desc: 'Highest point in Aravallis at 1,722m. Temple and views.', tag: 'Viewpoint' },
        ],
        tips: ['Escape Rajasthan\'s heat here.', 'Best time: Oct-Mar.', 'Combine with Udaipur (3hrs drive).', 'Evenings can be cool — carry a jacket.'],
        food: ['Rajasthani thali', 'Dahi vada (local specialty)', 'Rabri (sweet milk dessert)'],
      },
      'mahabaleshwar': {
        name: 'Mahabaleshwar', state: 'Maharashtra', type: 'Strawberry Land',
        places: [
          { name: 'Arthur\'s Seat', desc: 'Queen of viewpoints. Stunning valley views.', tag: 'Viewpoint' },
          { name: 'Venna Lake', desc: 'Boating and horse riding. Popular evening spot.', tag: 'Relaxing' },
          { name: 'Pratapgad Fort', desc: 'Historic fort where Shivaji defeated Afzal Khan.', tag: 'Heritage' },
        ],
        tips: ['Strawberry season: Nov-Mar.', 'Carry rain gear — it rains often.', 'Best time: Oct-Jun.', 'Combine with Panchgani (19km).'],
        food: ['Fresh strawberries and cream', 'Maharashtrian fish curry', 'Vada pav and misal pav'],
      },
      'tawang': {
        name: 'Tawang', state: 'Arunachal Pradesh', type: 'Land of Monasteries',
        places: [
          { name: 'Tawang Monastery', desc: 'India\'s largest Buddhist monastery. 400 years old, 10,000+ books.', tag: 'Must Visit' },
          { name: 'Sela Pass', desc: 'High-altitude pass at 4,170m. Frozen lake and snow.', tag: 'Adventure' },
          { name: 'Nuranang Falls', desc: '100m waterfall. Crystal clear water in pristine forest.', tag: 'Nature' },
        ],
        tips: ['Inner Line Permit required for all tourists.', 'Road from Tezpur is long but scenic.', 'Altitude can cause sickness — carry medicine.', 'Best time: Mar-Oct.'],
        food: ['Thukpa and momos', 'Bamboo shoot pickle', 'Apong (rice beer)'],
      },
      'tirupati': {
        name: 'Tirupati', state: 'Andhra Pradesh', type: 'Temple City',
        places: [
          { name: 'Tirumala Venkateswara Temple', desc: 'World\'s most visited temple. 50,000-100,000 daily pilgrims.', tag: 'Must Visit' },
          { name: 'Sri Padmavathi Temple', desc: 'Consort temple in Tiruchanur. Less crowded, equally divine.', tag: 'Spiritual' },
          { name: 'Chandragiri Fort', desc: '16th-century fort with museum. Sunset views.', tag: 'Heritage' },
        ],
        tips: ['Book special darshan tickets online (TTD website).', 'Free laddu prasadam after darshan.', 'Dress code enforced — traditional attire preferred.', 'VIP darshan available for ₹300.'],
        food: ['Tirupati laddu (famous prasadam)', 'Andhra thali', 'Pesarattu (moong dal dosa)'],
      },
      'gokarna': {
        name: 'Gokarna', state: 'Karnataka', type: 'Beach & Temple Town',
        places: [
          { name: 'Om Beach', desc: 'Beach shaped like the Om symbol. Surfing and beach shacks.', tag: 'Must Visit' },
          { name: 'Mahabaleshwar Temple', desc: 'Ancient Shiva temple. Sacred as Kashi.', tag: 'Spiritual' },
          { name: 'Kudle Beach', desc: 'Laid-back beach with cafés and yoga shalas.', tag: 'Relaxing' },
          { name: 'Half Moon Beach', desc: 'Hidden beach accessible by boat or trek.', tag: 'Hidden Gem' },
        ],
        tips: ['Less crowded version of Goa.', 'Beach trek between Om, Kudle, Half Moon, and Paradise beaches.', 'Best time: Oct-Mar.', 'Very affordable compared to Goa.'],
        food: ['Fresh seafood at beach shacks', 'Coconut water', 'Banana pancakes'],
      },
      'munnar': {
        name: 'Munnar', state: 'Kerala', type: 'Tea Garden Hill Station',
        places: [
          { name: 'Tea Plantations', desc: 'Endless green carpets of tea. Tata Tea Museum tour.', tag: 'Must Visit' },
          { name: 'Eravikulam National Park', desc: 'Home to endangered Nilgiri Tahr (mountain goat).', tag: 'Wildlife' },
          { name: 'Top Station', desc: 'Highest point at 1,700m. views of Tamil Nadu plains.', tag: 'Viewpoint' },
          { name: 'Mattupetty Dam', desc: 'Dam with speed boating and Indo-Swiss cattle farm.', tag: 'Family' },
        ],
        tips: ['Best time: Sep-Mar.', 'Carry warm clothes — temperatures drop at night.', 'Book jeep safari to Eravikulam in advance.', 'Avoid monsoon — leeches everywhere.'],
        food: ['Kerala parotta with beef fry', 'Cardamom tea', 'Appam and egg curry'],
      },
      'kolkata': {
        name: 'Kolkata', state: 'West Bengal', type: 'City of Joy',
        places: [
          { name: 'Victoria Memorial', desc: 'Stunning white marble palace with museum. Iconic symbol of Kolkata.', tag: 'Must Visit' },
          { name: 'Howrah Bridge', desc: 'Iconic cantilever bridge over Hooghly River. One of the busiest bridges in the world.', tag: 'Iconic' },
          { name: 'Indian Museum', desc: 'Oldest museum in India (1814). Mummies, fossils, and ancient sculptures.', tag: 'Museum' },
          { name: 'Dakshineswar Kali Temple', desc: 'Famous temple where Ramakrishna Paramahamsa had his spiritual experiences.', tag: 'Spiritual' },
          { name: 'Marble Palace', desc: '19th-century mansion with art collection. Free entry but need permission.', tag: 'Hidden Gem' },
        ],
        tips: ['Use Kolkata Metro — fast and cheap.', 'Durga Puja (Oct) is unmissable — entire city transforms.', 'Try hand-pulled rickshaw in old Kolkata.', 'Best time: Oct-Mar.'],
        food: ['Kathi rolls at Kusum', 'Mishti doi (sweet yogurt)', 'Cholar dal and luchi', 'Puchka (Kolkata pani puri)', 'Kolkata biryani (with potato!)'],
      },
      'bhopal': {
        name: 'Bhopal', state: 'Madhya Pradesh', type: 'City of Lakes',
        places: [
          { name: 'Taj-ul-Masajid', desc: 'One of the largest mosques in Asia. Stunning pink architecture.', tag: 'Must Visit' },
          { name: 'Upper & Lower Lake', desc: 'Twin lakes in the heart of the city. Boating and sunset views.', tag: 'Nature' },
          { name: 'Bhimbetka Rock Shelters', desc: 'UNESCO site with 30,000-year-old cave paintings. Oldest human art in India.', tag: 'UNESCO' },
          { name: 'Sanchi Stupa', desc: 'UNESCO Buddhist monument (200 BC). One of the oldest stone structures in India.', tag: 'UNESCO' },
          { name: 'Van Vihar National Park', desc: 'National park beside the lake. Tigers, leopards, and crocodiles.', tag: 'Wildlife' },
        ],
        tips: ['Bhopal is gateway to Sanchi and Bhimbetka.', 'Best time: Oct-Mar.', 'Bhopal has excellent street food scene.', 'Hire local guide for Bhimbetka paintings.'],
        food: ['Bhopali gosht (mutton curry)', 'Poha-Jalebi (breakfast staple)', 'Shikanji (spiced lemonade)', 'Biryani Bhopali style'],
      },
      'lucknow': {
        name: 'Lucknow', state: 'Uttar Pradesh', type: 'City of Nawabs',
        places: [
          { name: 'Bara Imambara', desc: 'Massive 18th-century monument. World\'s largest arched corridor without beams.', tag: 'Must Visit' },
          { name: 'Rumi Darwaza', desc: 'Gateway modeled after Constantinople\'s Sublime Porte. Iconic Lucknow landmark.', tag: 'Iconic' },
          { name: 'Hazratganj', desc: 'Colonial-era shopping street. Cafes, bookstores, and chai culture.', tag: 'Shopping' },
          { name: 'Chowk & Asfi Masjid', desc: 'Old city maze of lanes. Famous for kebabs, chaat, andAwadhi cuisine.', tag: 'Heritage' },
        ],
        tips: ['Lucknow\'s tehzeeb (etiquette) is legendary.', 'Best time: Oct-Mar. Summer is extreme.', 'Visit at night for illuminated Bara Imambara.', 'Combine with Ayodhya (130km).'],
        food: ['Tunday Kababi (melt-in-mouth kebab)', 'Awadhi dum biryani', 'Malai ki gilori (dessert)', 'Basket chaat'],
      },
      'hyderabad': {
        name: 'Hyderabad', state: 'Telangana', type: 'City of Pearls & Biryani',
        places: [
          { name: 'Charminar', desc: '1591 monument and mosque. Iconic four-minaret landmark of Hyderabad.', tag: 'Must Visit' },
          { name: 'Golconda Fort', desc: 'Medieval fortress with acoustic engineering. Diamond trading center of old.', tag: 'Heritage' },
          { name: 'Hussain Sagar Lake', desc: 'Heart-shaped lake with Buddha statue. Boating and sunset.', tag: 'Relaxing' },
          { name: 'Qutb Shahi Tombs', desc: 'Tombs of seven Golconda rulers. Persian-Indian architecture.', tag: 'Heritage' },
          { name: 'Ramoji Film City', desc: 'World\'s largest film studio complex. Guinness record.', tag: 'Unique' },
        ],
        tips: ['Hyderabad Biryani is non-negotiable.', 'Best time: Oct-Mar.', 'Laad Bazaar for bangles and pearls.', 'Metro covers most tourist spots.'],
        food: ['Hyderabadi Dum Biryani', 'Haleem (seasonal — Ramadan)', 'Double ka meetha (bread pudding)', 'Irani chai and Osmania biscuits'],
      },
      'pune': {
        name: 'Pune', state: 'Maharashtra', type: 'Oxford of the East',
        places: [
          { name: 'Shaniwar Wada', desc: '18th-century Peshwa palace ruins. Grand entrance gate and evening sound show.', tag: 'Heritage' },
          { name: 'Aga Khan Palace', desc: 'Where Mahatma Gandhi was imprisoned. Beautiful gardens and museum.', tag: 'Historic' },
          { name: 'Sinhagad Fort', desc: 'Hilltop fort with trekking. Famous for batata vada and foggy mornings.', tag: 'Adventure' },
          { name: 'Osho Ashram (Koregaon Park)', desc: 'International meditation resort. Cafes and nightlife in Koregaon Park.', tag: 'Spiritual' },
        ],
        tips: ['Gateway to Sahyadri treks.', 'Best time: Oct-Mar.', 'Pune has excellent cafe culture.', 'Visit Lonavala/Khandala (60km) for hill station getaway.'],
        food: ['Misal pav (spicy sprout curry)', 'Mastani (thick milkshake)', 'Vada pav', 'Bakarvadi (snack)'],
      },
      'chandigarh': {
        name: 'Chandigarh', state: 'Chandigarh (UT)', type: 'The Beautiful City',
        places: [
          { name: 'Rock Garden', desc: 'Nek Chand\'s masterpiece. sculptures from industrial waste. Free entry.', tag: 'Must Visit' },
          { name: 'Sukhna Lake', desc: 'Artificial lake with boating and jogging track. Sunrise views.', tag: 'Relaxing' },
          { name: 'Rose Garden', desc: 'Asia\'s largest rose garden. 1600+ species. Flower show in March.', tag: 'Nature' },
          { name: 'Elante Mall', desc: 'One of the largest malls in North India. Shopping and entertainment.', tag: 'Shopping' },
        ],
        tips: ['Le Corbusier\'s planned city — admire the architecture.', 'Best time: Oct-Mar.', 'Gateway to Shimla (100km) and Kasauli.', 'Rent a cycle to explore sectors.'],
        food: ['Chole bhature', 'Golgappe (pani puri)', 'Amritsari kulcha', 'Lassi from Sector 17'],
      },
      'leh': {
        name: 'Leh-Ladakh', state: 'Ladakh (UT)', type: 'Land of High Passes',
        places: [
          { name: 'Pangong Lake', desc: '134km long lake that changes color. 3 Idiots fame. Camping by the shore.', tag: 'Must Visit' },
          { name: 'Nubra Valley', desc: 'Double-humped Bactrian camels. Sand dunes surrounded by snow peaks.', tag: 'Unique' },
          { name: 'Khardung La', desc: 'World\'s highest motorable road at 5,359m. Breathtaking views.', tag: 'Adventure' },
          { name: 'Thiksey Monastery', desc: '12-story Tibetan monastery. Resembles Potala Palace in Lhasa.', tag: 'Spiritual' },
        ],
        tips: ['Acclimatize for 2 days in Leh before going higher.', 'Inner Line Permit needed for Pangong/Nubra.', 'Carry sunscreen SPF 50+ and lip balm.', 'Best time: Jun-Sep. Roads closed Oct-May.'],
        food: ['Thukpa (noodle soup)', 'Tigmo (steamed bread)', 'Skyu (Ladakhi pasta)', 'Butter tea (po cha)'],
      },
      'ahmedabad': {
        name: 'Ahmedabad', state: 'Gujarat', type: 'Manchester of India',
        places: [
          { name: 'Sabarmati Ashram', desc: 'Gandhi\'s residence and HQ of Indian independence movement.', tag: 'Historic' },
          { name: 'Adalaj Stepwell', desc: '5-story ornate stepwell from 1499. Indo-Islamic architecture.', tag: 'Heritage' },
          { name: 'Jama Masjid', desc: 'Magnificent 15th-century mosque with yellow sandstone and marble.', tag: 'Spiritual' },
          { name: 'Kankaria Lake', desc: 'Circular lake with zoo, toy train, and evening food stalls.', tag: 'Family' },
        ],
        tips: ['India\'s first UNESCO World Heritage City.', 'Best time: Nov-Feb.', 'Night market at Law Garden is vibrant.', 'Gateway to Rann of Kutch (350km).'],
        food: ['Dhokla and fafda (Gujarati breakfast)', 'Undhiyu (mixed vegetable)', 'Khandvi', 'Gujarati thali (unlimited refills!)'],
      },
      'guwahati': {
        name: 'Guwahati', state: 'Assam', type: 'Gateway to Northeast',
        places: [
          { name: 'Kamakhya Temple', desc: 'Ancient Shakti temple on Nilachal Hill. One of 51 Shakti Peethas.', tag: 'Spiritual' },
          { name: 'Brahmaputra River Cruise', desc: 'Sunset cruise on mighty Brahmaputra. Dolphin spotting possible.', tag: 'Experience' },
          { name: 'Assam State Museum', desc: 'Artifacts from Ahom dynasty, tribal culture, and Assamese heritage.', tag: 'Museum' },
          { name: 'Umananda Island', desc: 'Smallest inhabited river island. Temple of Shiva. Ferry access.', tag: 'Unique' },
        ],
        tips: ['Gateway to Meghalaya, Arunachal, and Nagaland.', 'Best time: Oct-Apr.', 'Bihu festival (April) is spectacular.', 'Carry mosquito repellent.'],
        food: ['Assamese thali (masor tenga — sour fish)', 'Pitha (rice cake)', 'Khar (traditional dish)', 'Assam tea (world\'s finest)'],
      },
      'nagpur': {
        name: 'Nagpur', state: 'Maharashtra', type: 'Orange City',
        places: [
          { name: 'Deekshabhoomi', desc: 'Sacred Buddhist site where Dr. Ambedkar converted to Buddhism.', tag: 'Spiritual' },
          { name: 'Ambazari Lake', desc: 'Largest lake in Nagpur. Garden, boating, and musical fountain.', tag: 'Nature' },
          { name: 'Pench Tiger Reserve', desc: 'Inspiration for Jungle Book. Tiger safaris available.', tag: 'Wildlife' },
        ],
        tips: ['Central India hub — connects to Kanha, Pench, Tadoba.', 'Best time: Nov-Feb.', 'Famous for Nagpur oranges (Dec-Mar).', 'Buddhism circuit starts here.'],
        food: ['Saoji spicy mutton curry', 'Tarri poha (spiced flattened rice)', 'Oranges (fresh!)', 'Bharit (brinjal mash)'],
      },
      'indore': {
        name: 'Indore', state: 'Madhya Pradesh', type: 'Food Capital of India',
        places: [
          { name: 'Rajwada Palace', desc: '7-story palace of Holkar dynasty. Maratha, Mughal, and French architecture.', tag: 'Heritage' },
          { name: 'Sarafa Bazaar', desc: 'By-day jewelry market transforms into India\'s best night food market.', tag: 'Food Street' },
          { name: 'Patalpani Waterfall', desc: '91m waterfall. Best during monsoon. Trekking nearby.', tag: 'Nature' },
          { name: 'Lal Bagh Palace', desc: 'Opulent Holkar palace with Italian marble columns and Persian carpets.', tag: 'Heritage' },
        ],
        tips: ['India\'s cleanest city (Swachh Bharat champion).', 'Best time: Oct-Mar.', 'Sarafa Bazaar opens at 9 PM — don\'t miss it.', 'Gateway to Mandu and Maheshwar (100km).'],
        food: ['Poha-jalebi (legendary breakfast)', 'Garadu (fried yam — winter snack)', 'Bhutte ka kees (corn dish)', 'Khopra patties'],
      },
      'bhubaneswar': {
        name: 'Bhubaneswar', state: 'Odisha', type: 'Temple City of India',
        places: [
          { name: 'Lingaraj Temple', desc: '11th-century Shiva temple. 150ft tower. Fine example of Kalinga architecture.', tag: 'Must Visit' },
          { name: 'Udayagiri & Khandagiri Caves', desc: '2nd century BCE Jain caves with ancient inscriptions and carvings.', tag: 'Heritage' },
          { name: 'Nandankanan Zoo', desc: 'Zoo with white tigers, botanical garden, and lion safari.', tag: 'Family' },
          { name: 'Dhauli Peace Pagoda', desc: 'Where Emperor Ashoka renounced war. Beautiful hilltop stupa.', tag: 'Historic' },
        ],
        tips: ['Gateway to Puri and Konark Sun Temple.', 'Best time: Oct-Mar.', 'Rath Yatra (June) in Puri is world-famous.', 'Combine with Chilika Lake (110km) for dolphin watching.'],
        food: ['Dalma (lentils with vegetables)', 'Pakhala bhatta (fermented rice)', 'Chhena poda (cheese dessert)', 'Chilika prawn curry'],
      },
      'patna': {
        name: 'Patna', state: 'Bihar', type: 'Ancient Capital of Mauryan Empire',
        places: [
          { name: 'Mahavir Mandir', desc: 'One of the oldest Hindu temples dedicated to Lord Hanuman. Huge footfall.', tag: 'Spiritual' },
          { name: 'Patna Museum', desc: 'House of Ashokan pillar capital, Buddha relics, and Mughal paintings.', tag: 'Heritage' },
          { name: 'Bihar Museum', desc: 'World-class modern museum with galleries on ancient and modern Bihar.', tag: 'Must Visit' },
          { name: 'Takht Sri Patna Sahib', desc: 'Birthplace of Guru Gobind Singh Ji. Important Sikh pilgrimage.', tag: 'Spiritual' },
        ],
        tips: ['Best time: Oct-Mar.', 'Gateway to Nalanda, Rajgir, Bodh Gaya.', 'Try Litti Chokha — the signature Bihar dish.', 'Boat ride on the Ganges at sunset is magical.'],
        food: ['Litti Chokha', 'Khaja', 'Anarsa', 'Tilkut', 'Pedha from Naivedyam'],
      },
      'imphal': {
        name: 'Imphal', state: 'Manipur', type: 'Jewel of Northeast India',
        places: [
          { name: 'Kangla Fort', desc: 'Ancient seat of Manipur rulers. Symbol of Manipuri heritage and pride.', tag: 'Historic' },
          { name: 'Loktak Lake', desc: 'Largest freshwater lake in Northeast. Floating islands called Phumdi.', tag: 'Must Visit' },
          { name: 'Ima Keithel (Mother Market)', desc: 'World largest all-women market. Run entirely by Manipuri women.', tag: 'Unique' },
          { name: 'Khonghampat Orchidarium', desc: 'Botanical garden with 110+ species of orchids. Northeast biodiversity.', tag: 'Nature' },
        ],
        tips: ['Best time: Oct-May.', 'Carry warm clothes in winter.', 'Try Eromba — Manipur signature dish.', 'Inner Line Permit needed for some NE areas.'],
        food: ['Eromba (fermented fish with vegetables)', 'Singju (spicy salad)', 'Chamthong (stew)', 'Ingaati (rice beer)'],
      },
      'madurai': {
        name: 'Madurai', state: 'Tamil Nadu', type: 'Temple City of South India',
        places: [
          { name: 'Meenakshi Amman Temple', desc: 'Iconic 2500-year-old temple with 14 colorful gopurams. Must-see.', tag: 'Must Visit' },
          { name: 'Thirumalai Nayak Palace', desc: '17th-century palace blending Dravidian and Indo-Saracenic architecture.', tag: 'Heritage' },
          { name: 'Gandhi Memorial Museum', desc: 'Housed in 18th-century palace. Showcases India freedom struggle.', tag: 'History' },
          { name: 'Banana Market Road', desc: 'Vibrant street market with flowers, spices, and street food.', tag: 'Experience' },
        ],
        tips: ['Temple opens at 5 AM — early morning visit is serene.', 'Best time: Oct-Mar.', 'Temple festival (Apr-May) attracts millions.', 'Try jasmine flowers — Madurai is famous for them.'],
        food: ['Jigarthanda (cold dessert drink)', 'Paruthi Paal', 'Banana leaf meal', 'Mutton Chukka'],
      },
      'shimla': {
        name: 'Shimla', state: 'Himachal Pradesh', type: 'Queen of Hill Stations',
        places: [
          { name: 'Mall Road', desc: 'Iconic pedestrian street with shops, cafes, and colonial architecture.', tag: 'Must Visit' },
          { name: 'Jakhoo Temple', desc: 'Ancient Hanuman temple at highest point with panoramic mountain views.', tag: 'Spiritual' },
          { name: 'Christ Church', desc: 'Second oldest church in North India. Neo-Gothic stained glass windows.', tag: 'Heritage' },
          { name: 'Kufri', desc: 'Mini zoo, horse riding, and skiing in winter. 16km from Shimla.', tag: 'Adventure' },
        ],
        tips: ['Toy train from Kalka is magical but book early.', 'Best time: Mar-Jun for weather, Dec-Feb for snow.', 'Carry layers — weather changes fast.', 'Advance booking essential on weekends and holidays.'],
        food: ['Siddu (steamed bread with walnut filling)', 'Chha Gosht', 'Madra (chickpea curry)', 'Babru (stuffed kachori)'],
      },
      'jaisalmer': {
        name: 'Jaisalmer', state: 'Rajasthan', type: 'Golden City of India',
        places: [
          { name: 'Jaisalmer Fort', desc: 'Living fort — thousands live inside. One of the few inhabited forts worldwide.', tag: 'Must Visit' },
          { name: 'Sam Sand Dunes', desc: 'Desert camping with camel rides, folk music, and starry nights.', tag: 'Adventure' },
          { name: 'Patwon Ki Haveli', desc: 'Largest and most ornate haveli cluster. Five interconnected mansions.', tag: 'Heritage' },
          { name: 'Gadisar Lake', desc: 'Artificial lake with boating and beautiful sunset views.', tag: 'Scenic' },
        ],
        tips: ['Camel safari at sunset is unmissable.', 'Best time: Oct-Mar. Summers are extreme (45C).', 'Desert camp overnight experience is worth it.', 'Carry sunscreen, sunglasses, and full-sleeve clothes.'],
        food: ['Dal Bati Churma', 'Ker Sangri', 'Mirchi Vada', 'Mawa Kachori', 'Ghotua Laddu'],
      },
      'pushkar': {
        name: 'Pushkar', state: 'Rajasthan', type: 'Sacred Lake Town of Rajasthan',
        places: [
          { name: 'Pushkar Lake', desc: 'Sacred lake with 52 ghats. Pilgrims take ritual dips.', tag: 'Spiritual' },
          { name: 'Brahma Temple', desc: 'One of the very few Brahma temples in the world. Unique and historic.', tag: 'Must Visit' },
          { name: 'Savitri Temple', desc: 'Hilltop temple with panoramic views of the lake and desert town.', tag: 'Scenic' },
          { name: 'Pushkar Camel Fair', desc: 'Annual fair (Nov) with 200,000+ visitors. Camels, music, and culture.', tag: 'Festival' },
        ],
        tips: ['Pushkar is a holy town — no alcohol or non-veg.', 'Best time: Oct-Nov (during fair) or Feb-Mar.', 'Bargain hard at the local bazaars.', 'Many cafes with rooftop lake views.'],
        food: ['Malpua (sweet pancakes)', 'Dal Bati', 'Pushkar Ki Kachori', 'Lassi (best in Rajasthan!)'],
      },
      'mcleodganj': {
        name: 'Mcleodganj', state: 'Himachal Pradesh', type: 'Little Lhasa of India',
        places: [
          { name: 'Tsuglagkhang Complex', desc: 'Dalai Lamas residence and main Tibetan temple. Powerfully serene.', tag: 'Must Visit' },
          { name: 'Bhagsu Waterfall', desc: 'Popular waterfall with a short trek. Great for photos and picnics.', tag: 'Nature' },
          { name: 'Triund Trek', desc: '9km trek with stunning Dhauladhar range views. Moderate difficulty.', tag: 'Adventure' },
          { name: 'Dal Lake', desc: 'Small scenic lake surrounded by deodar trees. Peaceful morning walks.', tag: 'Scenic' },
        ],
        tips: ['Best time: Mar-Jun and Sep-Nov.', 'Perfect for yoga and meditation retreats.', 'Try Tibetan food — thukpa, momos, butter tea.', 'Carry warm layers even in summer evenings.'],
        food: ['Thukpa (noodle soup)', 'Momos (Tibetan dumplings)', 'Tingmo (steamed bread)', 'Butter Tea', 'Tibetan bread with honey'],
      },
      'coorg': {
        name: 'Coorg', state: 'Karnataka', type: 'Scotland of India',
        places: [
          { name: 'Abbey Falls', desc: 'Scenic waterfall surrounded by coffee plantations. Short walk from parking.', tag: 'Nature' },
          { name: 'Raja Seat', desc: 'Viewpoint with toy train, musical gardens, and sunset views of valleys.', tag: 'Scenic' },
          { name: 'Dubare Elephant Camp', desc: 'Interact with elephants, river rafting, and nature trails.', tag: 'Adventure' },
          { name: 'Namdroling Monastery', desc: 'Tibetan monastery with giant golden Buddha statues and colorful murals.', tag: 'Spiritual' },
        ],
        tips: ['Best time: Oct-Mar. Monsoon (Jun-Sep) is lush but rainy.', 'Stay in a coffee estate homestay for authentic experience.', 'Coorg coffee is world-famous — take some home!', 'Try Kodava cuisine — it is unique to Coorg.'],
        food: ['Pandi Curry (pork curry)', 'Kadambuttu (rice dumplings)', 'Bamboo Shoot Curry', 'Akki Roti', 'Coorg Coffee'],
      },
      'mount abu': {
        name: 'Mount Abu', state: 'Rajasthan', type: 'Rajasthan only Hill Station',
        places: [
          { name: 'Dilwara Temples', desc: '11th-13th century Jain temples with the finest marble carvings in the world.', tag: 'Must Visit' },
          { name: 'Nakki Lake', desc: 'Artificial lake with boating and rock formations. Romantic evening spot.', tag: 'Scenic' },
          { name: 'Guru Shikhar', desc: 'Highest point in Rajasthan (1722m). Panoramic views of Aravalli range.', tag: 'Adventure' },
          { name: 'Sunset Point', desc: 'Perfect sunset views over the Aravalli hills and surrounding valleys.', tag: 'Scenic' },
        ],
        tips: ['Best time: Oct-Mar.', 'Only hill station in Rajasthan — cool even in summer.', 'Combine with Udaipur (3hrs drive).', 'Dilwara Temple marble work rivals Taj Mahal in craftsmanship.'],
        food: ['Daler Kachori', 'Gatte Ki Sabzi', 'Rabri', 'Dal Bati Churma'],
      },
    };

    // Enrich destinations missing weather/dress/packing/medicines
    const DEST_ENRICHMENTS = {
      'jaisalmer': {
        weather: '☀️ Summer (Apr-Jun): Extreme desert heat 40-48°C. Carry 3L water minimum. Sightseeing only before 9AM or after 5PM. 🌧️ Monsoon (Jul-Sep): Rare rain 28-35°C. Pleasant but dusty. ❄️ Winter (Oct-Feb): Cool 5-22°C. Desert nights drop to 0°C — carry heavy woolens. Best time to visit.',
        dress: '• Light cotton full-sleeve clothes in summer (protects from sun and sand)\n• Heavy woolen layers for winter desert nights\n• Windproof jacket — desert sandstorms are sudden\n• Closed shoes essential — sand gets very hot\n• Sunglasses with UV protection\n• Scarf/dupatta to cover face during sandstorms\n• Comfortable walking sandals for evening\n• Thermal innerwear for December-January nights',
        packing: '• SPF 50+ sunscreen (desert sun is brutal)\n• Lip balm with SPF\n• Moisturizer (extreme dryness cracks skin)\n• Reusable water bottle (3L minimum)\n• Electrolyte sachets\n• Sunglasses and wide-brimmed hat\n• Power bank\n• Camera with extra battery\n• Cash in small notes (ATMs are scarce)\n• Plastic bags for sand protection',
        medicines: '• ORS sachets (dehydration is #1 risk in desert)\n• Sunburn cream and aloe vera gel\n• Paracetamol for heat headaches\n• Anti-diarrheal (Imodium)\n• Antihistamine (dust allergies are common)\n• Eye drops (sand and dust irritate eyes)\n• Band-aids and antiseptic\n• Electrolyte tablets',
      },
      'pushkar': {
        weather: '☀️ Summer (Apr-Jun): Hot 35-42°C. Avoid midday. Morning visits to ghats are pleasant. 🌧️ Monsoon (Jul-Sep): Moderate rain 28-35°C. Fewer tourists, lush green surroundings. ❄️ Winter (Oct-Feb): Cool 8-25°C. Perfect weather. Camel Fair in Nov is the peak season.',
        dress: '• Modest clothing mandatory — it is a holy town\n• Cover shoulders and knees at ghats and temples\n• No shorts, sleeveless tops, or revealing clothes\n• Light cotton clothes in summer\n• Warm layers for winter mornings and evenings\n• Comfortable walking shoes for ghats\n• Shawl or stole for temple visits\n• Avoid leather items (vegetarian holy town)',
        packing: '• Modest clothing that covers knees and shoulders\n• Sunscreen SPF 50+\n• Reusable water bottle\n• Comfortable sandals (you remove shoes often)\n• Photocopy of ID\n• Cash (many shops dont accept cards)\n• Mosquito repellent\n• Small backpack for day trips',
        medicines: '• ORS sachets\n• Paracetamol\n• Anti-diarrheal (Imodium)\n• Antihistamine\n• Band-aids\n• Any personal allergy meds\n• Sunburn cream\n• Stomachache medicine (Meftal Spas)',
      },
      'mcleodganj': {
        weather: '☀️ Summer (Mar-Jun): Pleasant 15-28°C. Best time. Occasional rain. Great for treks. 🌧️ Monsoon (Jul-Sep): Heavy rainfall 12-20°C. Landslides risk. Avoid long treks. ❄️ Winter (Oct-Feb): Cold 2-15°C. Snowfall in Dec-Jan. Magical but roads can close. Pack heavy woolens.',
        dress: '• Layers are key — weather changes hourly\n• Heavy woolen jacket for winter\n• Rain jacket/poncho essential (rain is sudden)\n• Warm fleece for summer evenings\n• Thermal innerwear for winter\n• Trekking shoes with grip\n• Woolen socks, gloves, muffler for winter\n• Comfortable walking shoes for Mcleodganj streets',
        packing: '• Rain jacket or poncho\n• Waterproof bag for electronics\n• Moisturizer (dry mountain air)\n• Lip balm with SPF\n• Trekking shoes\n• Torch/flashlight\n• Power bank\n• Cash (few ATMs)\n• Woolen cap for winter\n• Hot water thermos',
        medicines: '• Diamox for altitude sickness (if coming from plains)\n• Paracetamol for headaches\n• Cold and cough medicine\n• Anti-nausea (winding mountain roads)\n• ORS sachets\n• Band-aids for trek injuries\n• Vicks VapoRub for cold nights\n• Knee pain tablets if trekking',
      },
      'coorg': {
        weather: '☀️ Summer (Mar-May): Warm 22-35°C. Pleasant mornings, hot afternoons. Good for coffee plantation walks. 🌧️ Monsoon (Jun-Sep): Heavy rainfall 18-25°C. Lush and green but leeches on trails. Waterfalls are spectacular. ❄️ Winter (Oct-Feb): Cool 10-25°C. Best time. Misty mornings, clear evenings.',
        dress: '• Light cotton clothes for summer\n• Rain gear essential during monsoon (jacket + umbrella)\n• Leech-proof socks for monsoon treks\n• Comfortable trekking shoes\n• Light jacket for winter evenings\n• Full-sleeve clothes (insects and leeches)\n• Waterproof shoes during monsoon\n• Warm layers for early morning plantation walks',
        packing: '• Rain jacket and waterproof bag\n• Leech repellent or salt (monsoon essential)\n• Mosquito repellent (DEET-based)\n• Sunscreen SPF 50+\n• Comfortable trekking shoes\n• Power bank\n• Cash (limited ATMs in rural areas)\n• Binoculars for bird watching\n• Camera for coffee plantation photos',
        medicines: '• Antihistamine (leech bites, insect allergies)\n• Anti-fungal cream (humid climate)\n• ORS sachets\n• Paracetamol\n• Anti-diarrheal (Imodium)\n• Band-aids and antiseptic cream\n• Calamine lotion (insect bites)\n• ORS and electrolyte tablets',
      },
      'mount abu': {
        weather: '☀️ Summer (Mar-Jun): Warm 23-38°C. Cooler than surrounding Rajasthan. Pleasant mornings. 🌧️ Monsoon (Jul-Sep): Moderate rain 20-30°C. Green and scenic. Occasional road blocks. ❄️ Winter (Oct-Feb): Cool 8-22°C. Best time. Nights are cold. Perfect for sightseeing.',
        dress: '• Light cotton clothes for summer\n• Warm jacket for winter evenings\n• Shawl for temple visits (Dilwara is sacred)\n• Comfortable walking shoes\n• Rain jacket for monsoon\n• Layers for year-round\n• Modest clothes for Jain temples\n• Light sweater even in summer (hill station)',
        packing: '• Sunscreen SPF 50+\n• Light jacket or sweater\n• Comfortable walking shoes\n• Rain gear for monsoon\n• Water bottle\n• Power bank\n• Cash\n• Camera\n• Mosquito repellent\n• Warm socks for winter',
        medicines: '• Paracetamol\n• Anti-diarrheal\n• Antihistamine\n• ORS sachets\n• Band-aids\n• Cold & cough medicine\n• Sunburn cream\n• Any personal meds',
      },
      'patna': {
        weather: '☀️ Summer (Apr-Jun): Hot 35-44°C. Very humid. Sightseeing only early morning or evening. 🌧️ Monsoon (Jul-Sep): Heavy rain 28-35°C. Flooding possible. Carry umbrella. ❄️ Winter (Oct-Feb): Cool 8-22°C. Best time. Pleasant foggy mornings.',
        dress: '• Light cotton clothes in summer (loose-fitting)\n• Warm jacket for winter mornings\n• Comfortable walking shoes\n• Shawl for temple visits\n• Umbrella for monsoon\n• Full-sleeve clothes (mosquito protection)\n• Modest clothes for gurudwaras and temples\n• Sunglasses for sunny days',
        packing: '• Sunscreen SPF 50+\n• Mosquito repellent (essential in Bihar)\n• Umbrella\n• Reusable water bottle\n• Power bank\n• Cash\n• Photocopy of ID\n• Light towel\n• Hand sanitizer\n• Wet wipes',
        medicines: '• Anti-malarial prophylaxis (monsoon)\n• ORS sachets (dehydration + diarrhea common)\n• Paracetamol\n• Anti-diarrheal (Imodium)\n• Antihistamine (mosquito allergies)\n• Mosquito repellent cream\n• Band-aids\n• Zinc tablets (stomach protection)',
      },
      'imphal': {
        weather: '☀️ Summer (Mar-May): Warm 22-32°C. Pleasant. Good for lake visits. 🌧️ Monsoon (Jun-Sep): Heavy rain 22-28°C. Manipur gets significant rainfall. Roads may be blocked. ❄️ Winter (Oct-Feb): Cool 5-18°C. Dry and pleasant. Best time. Morning fog is common.',
        dress: '• Light cotton clothes for summer\n• Rain gear essential (waterproof jacket + umbrella)\n• Warm jacket for winter\n• Comfortable walking shoes\n• Full-sleeve clothes (insect protection)\n• Shawl for temples\n• Thermal innerwear for December-January\n• Waterproof bag for electronics',
        packing: '• Rain gear (waterproof jacket, umbrella)\n• Mosquito repellent (Northeast has many insects)\n• Sunscreen SPF 50+\n• Warm layers for winter\n• Cash (limited ATMs)\n• Power bank\n• Waterproof bag\n• Camera\n• Trekking shoes\n• Binoculars for wildlife',
        medicines: '• Anti-malarial prophylaxis\n• ORS sachets\n• Paracetamol\n• Anti-diarrheal\n• Antihistamine (insect bites)\n• Calamine lotion\n• Band-aids and antiseptic\n• Water purification tablets',
      },
      'madurai': {
        weather: '☀️ Summer (Mar-May): Hot 30-40°C. Very humid. Visit temples early morning. 🌧️ Monsoon (Jun-Sep): Northeast monsoon Oct-Dec brings moderate rain 25-32°C. Pleasant. ❄️ Winter (Nov-Feb): Warm but comfortable 22-30°C. Best time. Morning walks are pleasant.',
        dress: '• Light cotton clothes (Madurai is hot year-round)\n• Modest clothes for Meenakshi Temple (cover shoulders and knees)\n• Comfortable walking shoes\n• Shawl or stole for temple visits\n• Sunglasses\n• Light umbrella for monsoon\n• No shorts at temples\n• Breathable fabrics (linen, cotton)',
        packing: '• Sunscreen SPF 50+\n• Mosquito repellent\n• Reusable water bottle (stay hydrated)\n• Comfortable sandals\n• Power bank\n• Cash\n• Small towel\n• Wet wipes\n• Hand sanitizer\n• Camera',
        medicines: '• ORS sachets (heat dehydration)\n• Paracetamol for heat headaches\n• Anti-diarrheal\n• Antihistamine\n• Sunburn cream\n• Eye drops\n• Band-aids\n• Electrolyte tablets',
      },
    };
    // Enrichments for Shimla (duplicated entry overwrote original)
    if (DESTINATIONS['shimla'] && !DESTINATIONS['shimla'].weather) {
      DESTINATIONS['shimla'].weather = '☀️ Summer (Mar-Jun): Pleasant 15-25°C — perfect for sightseeing. Occasional rain showers. 🌧️ Monsoon (Jul-Sep): Heavy rainfall 12-20°C, landslides common — avoid travel. ❄️ Winter (Oct-Feb): Cold 0-10°C, heavy snowfall Dec-Jan. Roads may close. Temperature drops to -5°C at night.';
      DESTINATIONS['shimla'].dress = '• Layered clothing essential — temperature changes rapidly\n• Heavy woolen jacket, thermal innerwear for winter (Nov-Feb)\n• Light jacket even in summer — evenings are cool\n• Waterproof rain jacket for monsoon\n• Comfortable trekking shoes with good grip\n• Warm socks, gloves, and muffler for winter\n• Woolen cap/beanie for snow season\n• Umbrella is a must year-round';
      DESTINATIONS['shimla'].packing = '• SPF 50+ sunscreen (high altitude = stronger UV)\n• Moisturizer (mountain air is very dry)\n• Lip balm with SPF\n• Reusable water bottle\n• Power bank and charger\n• Photocopy of ID\n• Torch/flashlight (power cuts common)\n• Plastic bags for wet clothes\n• Thermal flask for hot water';
      DESTINATIONS['shimla'].medicines = '• Paracetamol for headaches (altitude change)\n• Acetazolamide (Diamox) for mountain sickness if coming from plains\n• Anti-nausea medicine (motion sickness on winding roads)\n• ORS sachets\n• Band-aids for trekking scrapes\n• Cold & cough syrup (weather changes fast)\n• Vicks VapoRub for cold nights\n• Any personal altitude sickness meds';
    }
    // Merge enrichments into DESTINATIONS
    Object.keys(DEST_ENRICHMENTS).forEach(function(key) {
      if (DESTINATIONS[key]) {
        var e = DEST_ENRICHMENTS[key];
        if (!DESTINATIONS[key].weather) DESTINATIONS[key].weather = e.weather;
        if (!DESTINATIONS[key].dress) DESTINATIONS[key].dress = e.dress;
        if (!DESTINATIONS[key].packing) DESTINATIONS[key].packing = e.packing;
        if (!DESTINATIONS[key].medicines) DESTINATIONS[key].medicines = e.medicines;
      }
    });

    // Shortcut aliases for partial matching
    const DEST_ALIASES = {
      'mysore': 'mysuru', 'bangalore': 'bengaluru', 'madurai': 'tamil nadu',
      'agra': 'agra', 'calangute': 'goa', 'alleppey': 'kerala',
      'havelock': 'andaman', 'nainital': 'uttarakhand', 'mussoorie': 'dehradun',
      'calcutta': 'kolkata', 'the city of joy': 'kolkata', 'city of joy': 'kolkata',
      'city of lakes': 'bhopal', 'city of nawabs': 'lucknow', 'nawab city': 'lucknow',
      'city of pearls': 'hyderabad', 'nizam city': 'hyderabad',
      'orange city': 'nagpur', 'food capital': 'indore', 'cleanest city': 'indore',
      'temple city': 'bhubaneswar', 'lion city': 'bhubaneswar',
      'oxford of east': 'pune', 'pune city': 'pune',
      'beautiful city': 'chandigarh', 'city beautiful': 'chandigarh',
      'land of passes': 'leh', 'ladakh': 'leh', 'pangong': 'leh', 'nubra': 'leh',
      'ahmedabad city': 'ahmedabad', 'amdavad': 'ahmedabad',
      'guwahati city': 'guwahati', 'gateway to northeast': 'guwahati',
      'golden city': 'jaisalmer', 'desert city': 'jaisalmer', 'fort city': 'jaisalmer',
      'sacred lake': 'pushkar', 'camel fair': 'pushkar', 'brahma city': 'pushkar',
      'little tibet': 'mcleodganj', 'little lhasa': 'mcleodganj', 'dharamshala': 'mcleodganj',
      'coffee land': 'coorg', 'kodagu': 'coorg', 'coffee district': 'coorg',
      'queen of hills': 'shimla', 'simla': 'shimla',
      'temple city south': 'madurai', 'meenakshi city': 'madurai',
      'golden city rajasthan': 'jaisalmer',
      'jewel of northeast': 'imphal', 'manipur capital': 'imphal',
      'ancient capital': 'patna', 'patliputra': 'patna',
      'abu hill': 'mount abu', 'mountabu': 'mount abu',
    };

    
    const GENERAL_RESPONSES = {
      'hello': 'Namaste! 🙏 I\'m **YatraGuide**, your AI travel assistant for India. I know **55+ destinations** — from the Himalayas to the ocean!\n\nAsk me about:\n🏛️ Places to visit\n🍽️ Food & restaurants\n🛡️ Safety tips\n🌤️ Weather & best time\n🎒 What to pack\n💊 What medicines to carry\n\nWhich city are you planning to explore? 🗺️',
      'hi': 'Hey there! 👋 Welcome to India! I can tell you about **55+ cities** across the country — their best spots, food, safety, weather, and even what to pack!\n\nWhere are you headed? Type a city name and I\'ll get you a complete guide! ✨',
      'help': 'Here\'s everything I can help with:\n\n🏛️ **Places to visit** — Ask about any Indian city\n🍽️ **Food recommendations** — Best local dishes & where to find them\n🛡️ **Safety tips** — Travel advisories, scams to avoid\n🌤️ **Weather** — Best time to visit, what to expect\n👗 **Dress code** — What to wear at temples, beaches, etc.\n🎒 **Packing list** — Essentials for your trip\n💊 **Medicines** — Health precautions per region\n🏨 **Hotels & stays** — Budget to luxury\n🚂 **How to reach** — Flights, trains, buses\n💰 **Budget tips** — Daily costs, money hacks\n📸 **Sightseeing** — Must-see attractions\n🎭 **Culture** — Festivals, traditions, art\n\nJust ask naturally — like "What to pack for Kashmir?" or "Is Goa safe?" 🌟',
      'thank': 'You\'re welcome! 😊 Happy travels! Remember, I\'m always here if you need more help exploring India. Safe journey! 🇮🇳✨',
      'thanks': 'You\'re welcome! 😊 Happy travels! Remember, I\'m always here if you need more help exploring India. Safe journey! 🇮🇳✨',
      'food': 'India has incredible food! Here are some highlights:\n\n🍛 **Rajasthan** — Dal Bati Churma, Laal Maas\n🐟 **Kerala** — Fish Molee, Appam & Stew\n🥘 **Kashmir** — Rogan Josh, Wazwan feast\n🫓 **Delhi** — Paranthe in Chandni Chowk\n🍰 **Karnataka** — Mysore Pak, Bisi Bele Bath\n🍜 **Northeast** — Thukpa, Bamboo Shoot Curry\n🌶️ **Maharashtra** — Vada Pav, Misal Pav\n🥘 **Bihar** — Litti Chokha, Thekua\n\nTell me which city you\'re in and I\'ll give you a detailed food guide! 🍽️',
      'safe': 'India is generally safe for tourists! Here are key tips:\n\n🛡️ **Emergency: 112** — Police, Ambulance, Fire\n📱 **Tourist Helpline: 1363** — 24/7 multilingual\n🚕 Use **Uber/Ola** instead of random taxis\n💳 Keep **digital copies** of documents\n🏨 Stay in **well-reviewed** accommodations\n🗣️ Learn basic local phrases (I can translate!)\n📍 **Share live location** with family via this app\n⚠️ Avoid deserted areas after dark\n\nAsk about any specific city for detailed safety info! I can also warn you about danger zones on the map. 🗺️',
      'weather': 'India\'s weather varies hugely by region and season:\n\n❄️ **Oct-Feb** (Winter) — Best time for most of India. Cool & dry, 8-25°C\n☀️ **Mar-May** (Summer) — Hot! 30-48°C. Hill stations are cooler\n🌧️ **Jun-Sep** (Monsoon) — Heavy rain in west & northeast. Lush green but tricky travel\n\n**Regional tips:**\n🏔️ **Himalayas**: Oct-Mar (snow Nov-Feb)\n🏖️ **Goa/Kerala**: Nov-Feb\n🏜️ **Rajasthan**: Oct-Mar (avoid May-June, 45°C!)\n🌿 **Northeast**: Oct-May\n\nTell me your destination and I\'ll give specific weather advice! 🌤️',
    };

    function toggleChatbot() {
      chatOpen = !chatOpen;
      document.getElementById('chatbotPanel').classList.toggle('active', chatOpen);
      document.querySelector('.chat-badge').style.display = 'none';
      if (chatOpen && chatHistory.length === 0) {
        addBotMessage(getWelcomeMessage());
      }
    }

    function getWelcomeMessage() {
      const p = JSON.parse(localStorage.getItem('yatraUsers') || '{}')[localStorage.getItem('yatraCurrentUser')] || {};
      const dest = p.dest ? p.dest.toLowerCase() : '';
      let msg = 'Namaste! 🙏 I\'m **YatraGuide**, your AI travel assistant for India. 🇮🇳\n\nTell me which city you want to explore and I\'ll suggest the best places, food, and travel tips!';
      if (dest && DESTINATIONS[dest]) {
        msg += `\n\nI see you\'re heading to **${DESTINATIONS[dest].name}**! Want me to give you a full guide?`;
      }
      return msg;
    }

    function sendChat() {
      const input = document.getElementById('chatInput');
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      addUserMessage(text);
      // Show typing indicator
      var typingDiv = document.createElement('div');
      typingDiv.className = 'typing-indicator';
      typingDiv.id = 'typingIndicator';
      typingDiv.innerHTML = '<span></span><span></span><span></span>';
      document.getElementById('chatMessages').appendChild(typingDiv);
      scrollChat();
      // Process after delay (feels more natural)
      var delay = 600 + Math.random() * 800;
      setTimeout(function() {
        var ti = document.getElementById('typingIndicator');
        if (ti) ti.remove();
        processChat(text);
      }, delay);
    }

    function addUserMessage(text) {
      const div = document.createElement('div');
      div.className = 'chat-msg user';
      div.textContent = text;
      document.getElementById('chatMessages').appendChild(div);
      chatHistory.push({ role: 'user', text });
      scrollChat();
    }

    function addBotMessage(text, html) {
      const div = document.createElement('div');
      div.className = 'chat-msg bot';
      if (html) { div.innerHTML = html; } else { div.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>'); }
      document.getElementById('chatMessages').appendChild(div);
      chatHistory.push({ role: 'bot', text });
      scrollChat();
    }

    function scrollChat() {
      const c = document.getElementById('chatMessages');
      setTimeout(() => { c.scrollTop = c.scrollHeight; }, 50);
    }

    // Track conversation context for natural follow-ups
    var chatContext = { lastDest: null, lastTopic: null, awaitingConfirm: null };

    function processChat(input) {
      const lower = input.toLowerCase().trim();

      // ── YES / NO responses ──
      if (/^(yes|yeah|yep|yup|sure|ok|okay|of course|haan|haanji|ji|bilkul|zaroor|definitely|please do it|do it|go ahead|sounds good|perfect|great|cool|yes, tell me|yes please|yes!|yup!)/.test(lower) || lower.startsWith('yes')) {
        if (chatContext.awaitingConfirm === 'food' && chatContext.lastDest) {
          chatContext.awaitingConfirm = null;
          var d = DESTINATIONS[chatContext.lastDest];
          var html = '<strong>🍽️ Must-Try Food in ' + d.name + ':</strong><br><br>';
          d.food.forEach(function(f) { html += '• ' + f + '<br>'; });
          html += '<br><small>💡 ' + d.tips[Math.floor(Math.random() * d.tips.length)] + '</small>';
          addBotMessage('', html);
          addSuggestions(['Safety tips', 'Weather', 'Packing list', 'More destinations']);
          return;
        }
        if (chatContext.awaitingConfirm === 'guide' && chatContext.lastDest) {
          chatContext.awaitingConfirm = null;
          showDestinationGuide(chatContext.lastDest);
          return;
        }
        addBotMessage('Awesome! 😊 What would you like to know? I can tell you about places, food, safety, weather, or packing for any Indian destination!');
        addSuggestions(['Jaipur', 'Goa', 'Varanasi', 'Kerala']);
        return;
      }
      if (/^(no|nope|nah|nahi|nahin|not really|nahi chahiye|skip|pass|never mind|its fine|nevermind)$/.test(lower)) {
        if (chatContext.awaitingConfirm) {
          chatContext.awaitingConfirm = null;
          addBotMessage('No worries! 😊 Is there anything else I can help you with? Ask me about any city in India!');
          addSuggestions(['Food', 'Safety', 'Weather', 'More destinations']);
          return;
        }
        addBotMessage('Okay! Let me know if you need anything else. I am here to help! 😊');
        return;
      }

      // ── GREETINGS ──
      if (/^(hi|hello|hey|namaste|namaskar|namaskaram|vanakkam|khamma ghani|aadab)/.test(lower)) {
        var p = JSON.parse(localStorage.getItem('yatraUsers') || '{}')[localStorage.getItem('yatraCurrentUser')] || {};
        var greetMsg = 'Namaste! 🙏 I am **YatraGuide**, your AI travel assistant for India. 🇮🇳\n\n';
        if (p.dest) {
          greetMsg += 'I see you\'re heading to **' + p.dest + '**! Want me to give you a full guide?';
          chatContext.lastDest = p.dest.toLowerCase();
          addBotMessage(greetMsg);
          addSuggestions(['Yes, tell me!', 'Food in ' + p.dest, 'Safety tips', 'Weather']);
        } else {
          greetMsg += 'Tell me which city you want to explore and I will suggest the best places, food, and travel tips!';
          addBotMessage(greetMsg);
          addSuggestions(['Jaipur', 'Goa', 'Varanasi', 'Kerala']);
        }
        return;
      }

      // ── HELP ──
      if (/help|what can you do|how to|what do you know|your features/.test(lower)) {
        addBotMessage(GENERAL_RESPONSES.help);
        addSuggestions(['Jaipur', 'Delhi', 'Kashmir', 'Food']);
        return;
      }

      // ── THANKS ──
      if (/thank|thanks|dhanyavad|shukriya|shukriya|bahut accha/.test(lower)) {
        addBotMessage('You are welcome! 😊 Happy travels! Remember, I am always here if you need more help exploring India. 🇮🇳');
        return;
      }

      // ── WHERE / HOW / WHAT natural questions ──
      if (/^(where|how|what|which|when|why|can|could|should|is there|are there|do you|tell me|show me|give me|suggest|recommend|advise)/.test(lower)) {
        // Try to find destination in the question
        var qDest = Object.keys(DESTINATIONS).find(function(k) { return lower.includes(k); });
        if (!qDest) qDest = Object.keys(DEST_ALIASES).find(function(k) { return lower.includes(k); });
        if (qDest) {
          var resolved = DEST_ALIASES[qDest] || qDest;
          chatContext.lastDest = resolved;
        }

        // Food questions
        if (/food|\beat\b|restaurant|\bdish\b|cuisine|khana|bhojan|what to eat|best dish|\bsnack\b/.test(lower)) {
          if (qDest) {
            var d2 = DESTINATIONS[chatContext.lastDest || qDest];
            var html2 = '<strong>🍽️ Must-Try Food in ' + d2.name + ':</strong><br><br>';
            d2.food.forEach(function(f) { html2 += '• ' + f + '<br>'; });
            html2 += '<br><small>💡 ' + d2.tips[Math.floor(Math.random() * d2.tips.length)] + '</small>';
            addBotMessage('', html2);
            chatContext.lastTopic = 'food';
            addSuggestions(['Safety tips', 'Weather', 'Packing list', 'More destinations']);
          } else {
            addBotMessage('Which city are you interested in? I can recommend food for any Indian destination!');
            chatContext.lastTopic = 'food';
            chatContext.awaitingConfirm = 'food';
            addSuggestions(['Jaipur', 'Kerala', 'Varanasi', 'Goa']);
          }
          return;
        }

        // Safety questions
        if (/safe|safety|danger|security|crime|scam|risk|avoid/.test(lower)) {
          if (qDest) {
            var d3 = DESTINATIONS[chatContext.lastDest || qDest];
            var html3 = '<strong>🛡️ Safety Tips for ' + d3.name + ':</strong><br><br>';
            d3.tips.forEach(function(t) { html3 += '• ' + t + '<br>'; });
            html3 += '<br><small>📞 Emergency: 112 | Tourist Helpline: 1363</small>';
            addBotMessage('', html3);
          } else {
            addBotMessage(GENERAL_RESPONSES.safe);
          }
          chatContext.lastTopic = 'safety';
          addSuggestions(['Food', 'Weather', 'Packing list', 'Nearby services']);
          return;
        }

        // Weather / Climate questions
        if (/weather|rain|temperature|season|climate|best time|when to visit|hot|cold|monsoon|humidity|fog|snow/.test(lower)) {
          if (qDest) {
            var d4 = DESTINATIONS[chatContext.lastDest || qDest];
            var html4 = '<strong>🌤️ Weather & Climate — ' + d4.name + ':</strong><br><br>';
            if (d4.weather) html4 += d4.weather;
            else html4 += '☀️ Summers: 30-45°C. Carry light cotton clothes.\n🌧️ Monsoon: Heavy rain, carry rain gear.\n❄️ Winter: 5-25°C depending on region. Carry warm layers.\n📅 Best time: Oct-Mar for most destinations.';
            addBotMessage('', html4);
            // Also show wardrobe suggestion based on weather
            if (d4.dress) {
              setTimeout(function() {
                var tipHtml = '<strong>👗 What to Wear:</strong><br><br>' + d4.dress;
                addBotMessage('', tipHtml);
              }, 800);
            }
          } else {
            addBotMessage(GENERAL_RESPONSES.weather);
          }
          chatContext.lastTopic = 'weather';
          addSuggestions(['What to pack', 'Best food', 'Safety tips', 'More destinations']);
          return;
        }

        // Wardrobe / Clothes / What to wear
        if (/wardrobe|clothes|clothing|outfit|wear|dress code|dress|attire|traditional|formal|casual/.test(lower)) {
          if (qDest) {
            var dW = DESTINATIONS[chatContext.lastDest || qDest];
            var htmlW = '<strong>👗 Wardrobe Guide — ' + dW.name + ':</strong><br><br>';
            if (dW.dress) htmlW += dW.dress;
            else htmlW += '• Light cotton clothes for summer\n• Warm layers for winter\n• Comfortable walking shoes\n• Shawl/scarf for temple visits\n• Rain gear for monsoon';
            addBotMessage('', htmlW);
            // Also suggest packing
            if (dW.packing) {
              setTimeout(function() {
                var packHtml = '<strong>🎒 Don\'t Forget to Pack:</strong><br><br>' + dW.packing;
                addBotMessage('', packHtml);
              }, 800);
            }
          } else {
            addBotMessage('Tell me your destination and I\'ll give you a complete wardrobe guide — what to wear, what to pack, and how to dress for each season! 🧳');
            addSuggestions(['Jaipur', 'Kashmir', 'Coorg', 'Shimla']);
          }
          chatContext.lastTopic = 'wardrobe';
          return;
        }

        // Packing / Essentials / Luggage
        if (/pack|packing|luggage|suitcase|essentials|carry|bring|must have|dont forget|forgot/.test(lower)) {
          if (qDest) {
            var d5 = DESTINATIONS[chatContext.lastDest || qDest];
            var html5 = '<strong>🎒 Complete Packing List — ' + d5.name + ':</strong><br><br>';
            if (d5.packing) html5 += d5.packing;
            else html5 += '• Sunscreen SPF 50+\n• Reusable water bottle\n• Comfortable walking shoes\n• Power bank\n• Photocopies of ID\n• Cash (many places no cards)\n• Mosquito repellent';
            addBotMessage('', html5);
            // Also show medicines
            if (d5.medicines) {
              setTimeout(function() {
                var medHtml = '<strong>💊 Essential Medicines:</strong><br><br>' + d5.medicines;
                addBotMessage('', medHtml);
              }, 800);
            }
          } else {
            addBotMessage('Tell me which city you are visiting and I will give you a personalized packing list! ☺️');
            addSuggestions(['Jaipur', 'Kashmir', 'Kerala', 'Goa']);
          }
          chatContext.lastTopic = 'packing';
          return;
        }

        // Medicine / Health / What medicines to carry
        if (/medicine|health|doctor|pharmacy|medical|pill|fever|sick|hospital|first aid|remedy/.test(lower)) {
          if (qDest) {
            var d6 = DESTINATIONS[chatContext.lastDest || qDest];
            var html6 = '<strong>💊 Medicines to Carry — ' + d6.name + ':</strong><br><br>';
            if (d6.medicines) html6 += d6.medicines;
            else html6 += '• ORS sachets (dehydration)\n• Paracetamol / Ibuprofen\n• Anti-diarrheal (Imodium)\n• Antihistamine (allergies)\n• Band-aids & antiseptic\n• Diamox (if above 2500m altitude)';
            addBotMessage('', html6);
            // Health tip
            setTimeout(function() {
              var healthTip = '<strong>🏥 Health Tips:</strong><br><br>' +
                '• Drink only bottled/filtered water<br>' +
                '• Eat at busy restaurants (higher turnover = fresher food)<br>' +
                '• Avoid street food if you have a sensitive stomach<br>' +
                '• Carry your prescription medicines in original packaging<br>' +
                '• Travel insurance is highly recommended for foreign tourists';
              addBotMessage('', healthTip);
            }, 800);
          } else {
            addBotMessage('**Essential Medicines for Any Indian Trip:**\n\n' +
              '💊 ORS sachets — dehydration is the #1 tourist problem\n' +
              '💊 Paracetamol — headaches and fever\n' +
              '💊 Anti-diarrheal (Imodium) — food changes cause stomach upset\n' +
              '💊 Antihistamine — allergies and insect bites\n' +
              '💊 Band-aids + antiseptic cream\n' +
              '💊 Diamox — for trips above 2,500m altitude\n' +
              '💊 Sunburn cream (Aloe Vera)\n' +
              '💊 Mosquito repellent (DEET-based)\n\n' +
              'Tell me your destination for region-specific advice!');
            addSuggestions(['Shimla (altitude)', 'Kerala (tropical)', 'Leh-Ladakh (extreme)', 'Coorg (monsoon)']);
          }
          chatContext.lastTopic = 'medicine';
          return;
        }

        // Hotel / stay questions
        if (/hotel|stay|accommodation|room|lodge|hostel|airbnb|where to stay|night/.test(lower)) {
          addBotMessage('I can help you find hotels on the **Live Map** section! 🗺️\n\nHere are some popular areas:\n• **Heritage hotels** — Jaipur, Udaipur, Jodhpur\n• **Beach resorts** — Goa, Kerala\n• **Mountain stays** — Manali, Shimla, Ooty\n• **Budget hostels** — Most cities via Zostel, Backpacker Panda\n\n📌 Go to the Map → click 🏨 Hotels to find nearby options!');
          addSuggestions(['Jaipur hotels', 'Goa resorts', 'Manali stays', 'Budget hostels']);
          return;
        }

        // Transport / how to reach
        if (/reach|travel|transport|train|bus|flight|airport|station|how to go|getting there|route/.test(lower)) {
          addBotMessage('To reach most Indian destinations:\n\n✈️ **Flights** — Book on MakeMyTrip, Goibibo, or IRCTC\n🚂 **Trains** — Book on IRCTC (irctc.co.in) — Trains are the best Indian experience!\n🚌 **Buses** — KSRTC, MSRTC, or private (RedBus app)\n🚕 **Local** — Uber, Ola, or auto-rickshaws\n\n📌 Use the **Route Planner** in the Map section for directions!');
          addSuggestions(['Flights to Jaipur', 'Trains to Varanasi', 'Buses to Goa', 'Route planner']);
          return;
        }

        // Budget questions
        if (/budget|cost|price|expensive|cheap|money|how much|afford|rupee|inr/.test(lower)) {
          addBotMessage('India is very budget-friendly! 💰\n\n**Daily estimates per person:**\n• 💎 Luxury: ₹8,000-20,000/day\n• 🎯 Mid-range: ₹3,000-8,000/day\n• 🎒 Budget: ₹1,000-3,000/day\n\n**Money tips:**\n• UPI (Google Pay, PhonePe) works everywhere\n• Carry cash for small shops\n• ATMs are in every city\n• USD 1 ≈ ₹83');
          addSuggestions(['Budget for Jaipur', 'Budget for Goa', 'Luxury options', 'Free attractions']);
          return;
        }

        // Photography / sightseeing
        if (/photo|photograph|picture|camera|selfie|instagram|sightsee|attraction|must see|visit|explore|see|tour/.test(lower)) {
          if (qDest) {
            var d7 = DESTINATIONS[chatContext.lastDest || qDest];
            var html7 = '<strong>📸 Must-See in ' + d7.name + ':</strong><br><br>';
            d7.places.forEach(function(p) { html7 += '<strong>' + p.name + '</strong> — ' + p.desc + '<br><span style="color:var(--accent);font-size:0.75rem">' + p.tag + '</span><br><br>'; });
            addBotMessage('', html7);
          } else {
            addBotMessage('India is incredibly photogenic! 📸 Tell me which city you want to explore and I will show you the best spots!');
            addSuggestions(['Jaipur', 'Varanasi', 'Kerala', 'Goa']);
          }
          chatContext.lastTopic = 'sightseeing';
          return;
        }

        // Culture / festival
        if (/culture|festival|tradition|art|music|dance|temple|church|mosque|gurudwara|religious/.test(lower)) {
          addBotMessage('India has incredible cultural diversity! 🎭\n\n**Major Festivals:**\n• Diwali (Oct-Nov) — Festival of lights\n• Holi (Mar) — Festival of colors\n• Navratri (Sep-Oct) — Dance festival\n• Eid — Celebrated across India\n• Pongal (Jan) — Harvest festival\n• Onam (Aug) — Kerala harvest festival\n• Bihu (Apr/Jan) — Assamese festivals\n\nAsk about a specific city for local culture tips!');
          addSuggestions(['Varanasi culture', 'Jaipur festivals', 'Kerala traditions', 'Goa vibes']);
          return;
        }

        // Continue with destination context — show full guide directly
        if (chatContext.lastDest && DESTINATIONS[chatContext.lastDest]) {
          chatContext.awaitingConfirm = null;
          addBotMessage('Here is the full guide for **' + DESTINATIONS[chatContext.lastDest].name + '**!');
          setTimeout(function() { showDestinationGuide(chatContext.lastDest); }, 400);
          return;
        }

        // Generic question fallback
        addBotMessage('I can help you with information about any Indian city! Try asking:\n\n🏛️ "Tell me about Jaipur"\n🍽️ "Food in Kerala"\n🛡️ "Is Kashmir safe?"\n🌤️ "Best time to visit Goa"\n🎒 "What to pack for Manali"');
        addSuggestions(['Jaipur', 'Goa', 'Varanasi', 'Kashmir']);
        return;
      }

      // ── FOOD queries (keyword — destination-aware) ──
      if (/food|\beat\b|restaurant|\bdish\b|cuisine|khana|bhojan|hungry/.test(lower)) {
        var foodCity = Object.keys(DESTINATIONS).find(function(k) { return lower.includes(k); });
        if (!foodCity) foodCity = Object.keys(DEST_ALIASES).find(function(k) { return lower.includes(k); });
        if (foodCity) foodCity = DEST_ALIASES[foodCity] || foodCity;
        var fDest = foodCity || chatContext.lastDest;
        if (fDest && DESTINATIONS[fDest]) {
          var fd = DESTINATIONS[fDest];
          chatContext.lastDest = fDest;
          var fhtml = '<strong>🍽️ Must-Try Food — ' + fd.name + ':</strong><br><br>';
          fd.food.forEach(function(f) { fhtml += '• ' + f + '<br>'; });
          fhtml += '<br><small>💡 ' + fd.tips[Math.floor(Math.random() * fd.tips.length)] + '</small>';
          addBotMessage('', fhtml);
          addSuggestions(['Safety tips', 'Weather in ' + fd.name, 'Packing list', 'Medicines']);
        } else {
          addBotMessage(GENERAL_RESPONSES.food);
          addSuggestions(Object.keys(DESTINATIONS).slice(0, 4));
        }
        return;
      }

      // ── SAFETY queries (keyword — destination-aware) ──
      if (/safe|safety|danger|security|crime|scam/.test(lower)) {
        var safeCity = Object.keys(DESTINATIONS).find(function(k) { return lower.includes(k); });
        if (!safeCity) safeCity = Object.keys(DEST_ALIASES).find(function(k) { return lower.includes(k); });
        if (safeCity) safeCity = DEST_ALIASES[safeCity] || safeCity;
        var sDest = safeCity || chatContext.lastDest;
        if (sDest && DESTINATIONS[sDest]) {
          var sd = DESTINATIONS[sDest];
          chatContext.lastDest = sDest;
          var shtml = '<strong>🛡️ Safety Tips — ' + sd.name + ':</strong><br><br>';
          sd.tips.forEach(function(t) { shtml += '• ' + t + '<br>'; });
          shtml += '<br><small>📞 Emergency: 112 | Tourist Helpline: 1363</small>';
          addBotMessage('', shtml);
          addSuggestions(['Food in ' + sd.name, 'Weather', 'Medicines', 'Packing list']);
        } else {
          addBotMessage(GENERAL_RESPONSES.safe);
          addSuggestions(['Delhi', 'Jaipur', 'Kashmir', 'Goa']);
        }
        return;
      }

      // ── WEATHER queries (keyword — destination-aware) ──
      if (/weather|rain|temperature|season|climate|best time/.test(lower)) {
        var wxCity = Object.keys(DESTINATIONS).find(function(k) { return lower.includes(k); });
        if (!wxCity) wxCity = Object.keys(DEST_ALIASES).find(function(k) { return lower.includes(k); });
        if (wxCity) wxCity = DEST_ALIASES[wxCity] || wxCity;
        var wDest = wxCity || chatContext.lastDest;
        if (wDest && DESTINATIONS[wDest]) {
          var wd = DESTINATIONS[wDest];
          chatContext.lastDest = wDest;
          var whtml = '<strong>\u{1F324}\uFE0F Weather & Climate \u2014 ' + wd.name + ':</strong><br><br>';
          if (wd.weather) whtml += wd.weather;
          else whtml += '\u2600\uFE0F Best time: Oct-Mar<br>\u2744\uFE0F Winters: 8-25\u00B0C<br>\u2614\uFE0F Monsoon: Heavy rain Jun-Sep<br>\u{1F321}\uFE0F Summers: 30-45\u00B0C';
          whtml += '<br><br><small>\u{1F4A1} Tip: ' + wd.tips[0] + '</small>';
          addBotMessage('', whtml);
          if (wd.dress) {
            setTimeout(function() {
              addBotMessage('', '<strong>\u{1F457} What to Wear:</strong><br><br>' + wd.dress);
            }, 700);
          }
          if (wd.packing) {
            setTimeout(function() {
              addBotMessage('', '<strong>\u{1F392}\uFE0F Packing Essentials:</strong><br><br>' + wd.packing);
            }, 1400);
          }
          addSuggestions(['Food in ' + wd.name, 'Safety tips', 'Medicines', 'More destinations']);
        } else {
          addBotMessage(GENERAL_RESPONSES.weather);
          addSuggestions(['Shimla', 'Kerala', 'Kashmir', 'Manali']);
        }
        return;
      }

      // ── More destinations ──
      if (/more|all|list|every|full|destinations|cities|places|states/.test(lower)) {
        addBotMessage('Here are all **55+ destinations** I can help with! 🇮🇳\n\n' +
          '🏙️ **North India:** Delhi, Jaipur, Agra, Varanasi, Shimla, Jaisalmer, Pushkar, Rishikesh\n' +
          '🏔️ **Mountains:** Kashmir, Manali, Leh-Ladakh, Spiti, Mcleodganj\n' +
          '🏖️ **South India:** Goa, Kerala, Ooty, Mysuru, Madurai, Hampi, Coorg\n' +
          '🌿 **East India:** Kolkata, Darjeeling, Bhubaneswar, Patna, Imphal\n' +
          '🏙️ **West India:** Mumbai, Pune, Udaipur, Jodhpur, Ahmedabad, Mount Abu\n' +
          '🏙️ **Central India:** Bhopal, Indore, Lucknow, Nagpur\n' +
          '🌊 **Islands:** Andaman\n' +
          '🚂 **Northeast:** Guwahati, Imphal\n\n' +
          'Just type any city name and I\'ll give you a complete guide! ✨');
        addSuggestions(['Jaipur', 'Goa', 'Leh-Ladakh', 'Kolkata']);
        return;
      }

      // ── DESTINATION MATCH (immediate full guide) ──
      var matchedDest = Object.keys(DESTINATIONS).find(function(k) { return lower.includes(k); });
      if (matchedDest) {
        chatContext.lastDest = matchedDest;
        chatContext.lastTopic = null;
        chatContext.awaitingConfirm = null;
        addBotMessage('Great choice! 🎉 Here is your complete guide for **' + DESTINATIONS[matchedDest].name + '**!');
        setTimeout(function() { showDestinationGuide(matchedDest); }, 400);
        return;
      }

      // ── PARTIAL MATCH (immediate full guide) ──
      var aliasKey = Object.keys(DEST_ALIASES).find(function(k) { return lower.includes(k); });
      if (aliasKey) {
        var resolved = DEST_ALIASES[aliasKey];
        chatContext.lastDest = resolved;
        chatContext.lastTopic = null;
        chatContext.awaitingConfirm = null;
        addBotMessage('Great choice! 🎉 Here is your complete guide for **' + DESTINATIONS[resolved].name + '**!');
        setTimeout(function() { showDestinationGuide(resolved); }, 400);
        return;
      }

      // ── HOW ARE YOU / PERSONAL ──
      if (/how are you|who are you|your name|what are you|what is your/.test(lower)) {
        addBotMessage('I am **YatraGuide**, your AI travel assistant! 😊\n\nI know everything about **55+ Indian destinations** — their best places, food, safety, weather, wardrobe, packing lists, and medicines. Just type any city name!\n\nWhere are you planning to go? 🗺️');
        addSuggestions(['Jaipur', 'Goa', 'Kerala', 'Varanasi']);
        return;
      }

      // ── EMERGENCY ──
      if (/emergency|help|112|ambulance|police|fire|sos/.test(lower)) {
        addBotMessage('🚨 **Emergency Contacts:**\n\n' +
          '📞 Police / Ambulance / Fire: **112**\n' +
          '📞 Tourist Helpline: **1363**\n' +
          '📞 Women Helpline: **181**\n' +
          '📞 Child Helpline: **1098**\n\n' +
          'Use the **SOS button** in the app to instantly share your location with authorities!');
        addSuggestions(['Nearby hospitals', 'Nearby police', 'SOS button', 'Track my location']);
        return;
      }

      // ── Fallback with context awareness ──
      var fallbacks = [
        'I am not sure about that, but I am great at Indian destinations! Try asking about any city — like "Tell me about Jaipur" or "Food in Kerala"! 🇮🇳',
        'Hmm, I do not quite understand. I know about 46+ Indian cities! Ask me about places, food, safety, weather, or packing! 😊',
        'I can help with travel info for Indian cities! Try: "What to pack for Kashmir?" or "Is Goa safe?" 🏖️',
      ];
      addBotMessage(fallbacks[Math.floor(Math.random() * fallbacks.length)]);
      addSuggestions(['Jaipur', 'Goa', 'Varanasi', 'Kerala']);
    }

    function showDestinationGuide(key) {
      const d = DESTINATIONS[key];
      // Message 1: Places
      let html = `<strong>🏛️ ${d.name}, ${d.state}</strong><br><small>${d.type}</small><br><br>`;
      html += `<strong>📍 Top Places to Visit:</strong><br><br>`;
      d.places.forEach(p => {
        html += `<div class="place-card"><strong>${p.name}</strong><p>${p.desc}</p><span class="place-tag">${p.tag}</span></div>`;
      });
      addBotMessage('', html);

      // Message 2: Tips & Food
      setTimeout(() => {
        let tipsHtml = `<strong>💡 Travel Tips for ${d.name}:</strong><br><br>`;
        d.tips.forEach(t => { tipsHtml += `• ${t}<br>`; });
        tipsHtml += `<br><strong>🍽️ Must-Try Food:</strong><br>`;
        d.food.forEach(f => { tipsHtml += `• ${f}<br>`; });
        addBotMessage('', tipsHtml);
      }, 600);

      // Message 3: Weather & Climate
      setTimeout(() => {
        let weatherHtml = `<strong>🌤️ Weather & Climate — ${d.name}:</strong><br><br>`;
        if (d.weather) {
          weatherHtml += `${d.weather}<br>`;
        } else {
          weatherHtml += `• Best time to visit: Oct-Mar (most of India)<br>`;
          weatherHtml += `• Summers (Apr-Jun): 30-48°C depending on region<br>`;
          weatherHtml += `• Monsoon (Jul-Sep): Heavy rainfall, carry rain gear<br>`;
          weatherHtml += `• Winter (Nov-Feb): Cool 8-20°C in most places<br>`;
        }
        addBotMessage('', weatherHtml);
      }, 1200);

      // Message 4: Dress Code & Comfort
      setTimeout(() => {
        let dressHtml = `<strong>👗 Dress Code & Comfort Tips — ${d.name}:</strong><br><br>`;
        if (d.dress) {
          dressHtml += `${d.dress}<br>`;
        } else {
          dressHtml += `• Light, breathable cotton clothes for summer<br>`;
          dressHtml += `• Carry a shawl/scarf for temple visits (cover shoulders)<br>`;
          dressHtml += `• Comfortable walking shoes are essential<br>`;
          dressHtml += `• Layers for hill stations — evenings get cold<br>`;
        }
        addBotMessage('', dressHtml);
      }, 1800);

      // Message 5: Packing & Essentials
      setTimeout(() => {
        let packHtml = `<strong>🎒 Packing List & Essentials — ${d.name}:</strong><br><br>`;
        if (d.packing) {
          packHtml += `${d.packing}<br>`;
        } else {
          packHtml += `• Sunscreen SPF 50+ (Indian sun is harsh)<br>`;
          packHtml += `• Reusable water bottle (stay hydrated)<br>`;
          packHtml += `• Power bank & universal adapter<br>`;
          packHtml += `• Photocopies of ID/passport<br>`;
          packHtml += `• Cash (many places don't accept cards)<br>`;
          packHtml += `• Mosquito repellent (DEET-based)<br>`;
        }
        addBotMessage('', packHtml);
      }, 2400);

      // Message 6: Medicines
      setTimeout(() => {
        let medHtml = `<strong>💊 Medicines to Carry — ${d.name}:</strong><br><br>`;
        if (d.medicines) {
          medHtml += `${d.medicines}<br>`;
        } else {
          medHtml += `• ORS sachets (dehydration is common)<br>`;
          medHtml += `• Paracetamol / Ibuprofen (headaches, fever)<br>`;
          medHtml += `• Anti-diarrheal (Imodium) — food changes cause upset<br>`;
          medHtml += `• Antihistamine (allergies, insect bites)<br>`;
          medHtml += `• Band-aids & antiseptic cream<br>`;
          medHtml += `• Altitude sickness medicine (Diamox) if going above 2,500m<br>`;
        }
        addBotMessage('', medHtml);
        addSuggestions(['Safety', 'Weather', 'Food', 'More Destinations']);
      }, 3000);
    }

    function addSuggestions(items) {
      const c = document.getElementById('chatMessages');
      const div = document.createElement('div');
      div.className = 'chat-suggestions';
      items.forEach(item => {
        const btn = document.createElement('button');
        btn.textContent = item;
        btn.onclick = () => {
          document.getElementById('chatInput').value = item;
          sendChat();
        };
        div.appendChild(btn);
      });
      c.appendChild(div);
      scrollChat();
    }

    // ═══════════════════════════════════════════
    // NOTIFICATION / ALERT POPUP SYSTEM
    // ═══════════════════════════════════════════
    var notifications = [];
    var notifPanelOpen = false;

    // ═══════════════════════════════════════════
    // COMPREHENSIVE ALERTS DATABASE (30+ destinations)
    // ═══════════════════════════════════════════
    const ALERTS_DB = [
      // ─── WEATHER ───
      { type:'weather',severity:'high',icon:'fa-cloud-showers-heavy',title:'Heavy Rainfall Warning — Cherrapunji',desc:'IMD predicts 200mm+ rainfall in next 24hrs. Road closures likely.',dest:['cherrapunji','shillong','meghalaya'] },
      { type:'weather',severity:'high',icon:'fa-cloud-showers-heavy',title:'Monsoon Flooding — Kerala',desc:'Heavy monsoon rains causing waterlogging in low-lying areas. Avoid backwater tours.',dest:['kerala','alleppey','kochi'] },
      { type:'weather',severity:'high',icon:'fa-cloud-showers-heavy',title:'Heavy Rainfall — Mumbai',desc:'IMD red alert: 150mm+ expected. Local trains may be disrupted. Avoid coastal roads.',dest:['mumbai'] },
      { type:'weather',severity:'high',icon:'fa-cloud-showers-heavy',title:'Flash Flood Risk — Goa',desc:'Heavy rains in Western Ghats. River levels rising. Beach access may be restricted.',dest:['goa','gokarna'] },
      { type:'weather',severity:'high',icon:'fa-bolt',title:'Thunderstorm Alert — Shimla',desc:'Severe thunderstorms with lightning expected. Seek shelter immediately if outdoors.',dest:['shimla','manali','mussoorie','spiti'] },
      { type:'weather',severity:'high',icon:'fa-bolt',title:'Thunderstorm Alert — Rishikesh',desc:'Lightning and heavy rain in foothills. River rafting may be suspended.',dest:['rishikesh','haridwar'] },
      { type:'weather',severity:'medium',icon:'fa-wind',title:'Cyclone Watch — Bay of Bengal',desc:'Depression forming in Bay of Bengal. Chennai and Puducherry coast may be affected within 48 hours.',dest:['chennai','pondicherry','kolkata','vizag'] },
      { type:'weather',severity:'medium',icon:'fa-temperature-high',title:'Heatwave Alert — Rajasthan',desc:'Temperatures exceeding 46°C. Avoid outdoor travel 11AM-4PM. Carry ORS and water.',dest:['jaipur','jodhpur','jaisalmer','udaipur'] },
      { type:'weather',severity:'medium',icon:'fa-temperature-high',title:'Extreme Heat — Hyderabad',desc:'Temperatures above 42°C. Stay hydrated. Best time to visit Charminar is early morning.',dest:['hyderabad'] },
      { type:'weather',severity:'medium',icon:'fa-snowflake',title:'Cold Wave — Kashmir',desc:'Temperatures dropping below -5°C. Heavy woolens essential. Roads to Gulmarg may close.',dest:['kashmir','srinagar','ladakh'] },
      { type:'weather',severity:'low',icon:'fa-smog',title:'Dense Fog Advisory — Delhi NCR',desc:'Visibility below 50m in early mornings. Flight and road delays expected until January.',dest:['delhi','agra'] },
      { type:'weather',severity:'low',icon:'fa-smog',title:'Fog Advisory — Varanasi',desc:'Morning fog reducing visibility. Boat rides on Ganga may be delayed. Best visits after 9AM.',dest:['varanasi','lucknow'] },
      { type:'weather',severity:'medium',icon:'fa-cloud-rain',title:'Pre-Monsoon Showers — Darjeeling',desc:'Intermittent rain showers. Kanchenjunga view may be obstructed. Carry rain gear.',dest:['darjeeling','gangtok'] },
      { type:'weather',severity:'high',icon:'fa-snowflake',title:'Snowfall Advisory — Manali',desc:'Heavy snowfall expected. Rohtang Pass closed. Road chains mandatory for vehicles.',dest:['manali'] },
      { type:'weather',severity:'low',icon:'fa-sun',title:'Pleasant Weather — Udaipur',desc:'Perfect visiting conditions! 22-32°C. Ideal for Lake Pichola boat rides and fort visits.',dest:['udaipur'] },
      // ─── SAFETY ───
      { type:'safety',severity:'high',icon:'fa-shield-alt',title:'Security Advisory — Kashmir',desc:'Government travel advisory in effect. Check MHA advisories before visiting. Avoid border areas.',dest:['kashmir','srinagar','pahalgam'] },
      { type:'safety',severity:'high',icon:'fa-shield-alt',title:'Security Alert — Manipur',desc:'Active unrest reported. Non-essential travel strongly discouraged. Check state advisories.',dest:['manipur','imphal'] },
      { type:'safety',severity:'high',icon:'fa-mountain',title:'Landslide Warning — Manali',desc:'Active landslides on Manali-Leh highway. Several roads blocked. Avoid hill travel.',dest:['manali'] },
      { type:'safety',severity:'medium',icon:'fa-mountain',title:'Landslide Risk — Shimla',desc:'Saturated soil from recent rains. Shimla-Kufri road may be affected. Drive cautiously.',dest:['shimla','kufri'] },
      { type:'safety',severity:'medium',icon:'fa-mountain',title:'Landslide Risk — Munnar',desc:'Hill roads slippery after rain. Two-wheeler travel not recommended on ghat sections.',dest:['munnar','thekkady'] },
      { type:'safety',severity:'medium',icon:'fa-mountain',title:'Landslide Risk — Darjeeling',desc:'Toy Train services may be disrupted. Road conditions poor after rainfall.',dest:['darjeeling'] },
      { type:'safety',severity:'medium',icon:'fa-exclamation-triangle',title:'Political Protest — Delhi',desc:'Protests reported near India Gate and Red Fort area. Use alternate routes and stay updated.',dest:['delhi'] },
      { type:'safety',severity:'medium',icon:'fa-exclamation-triangle',title:'Political Tension — Kolkata',desc:'Protests near Howrah Bridge area. Check local news before heading out.',dest:['kolkata'] },
      { type:'safety',severity:'medium',icon:'fa-water',title:'Tsunami Watch — Andaman',desc:'Seismic activity detected. Monitor IMD updates. Move to higher ground if instructed.',dest:['andaman','port blair'] },
      { type:'safety',severity:'low',icon:'fa-info-circle',title:'Road Construction — National Highway',desc:'Major highway work in progress. Expect 30-60 min delays. Use alternate routes where possible.',dest:['default'] },
      // ─── ACCESSIBILITY ───
      { type:'accessibility',severity:'high',icon:'fa-times-circle',title:'Limited Wheelchair Access — Varanasi Ghats',desc:'Steep steps, no ramps at most ghats. Assi Ghat has accessible viewpoint. Contact local tourism office for assistance.',dest:['varanasi'] },
      { type:'accessibility',severity:'high',icon:'fa-times-circle',title:'Challenging Access — Hampi Ruins',desc:'Uneven terrain throughout ruins complex. No wheelchair paths. Horse cart available for main circuit.',dest:['hamoji','hampi'] },
      { type:'accessibility',severity:'high',icon:'fa-times-circle',title:'Difficult Terrain — Spiti Valley',desc:'High altitude, rough roads. Not suitable for mobility-impaired visitors. Basic medical facilities only.',dest:['spiti'] },
      { type:'accessibility',severity:'high',icon:'fa-times-circle',title:'Limited Access — Jaisalmer Fort',desc:'Narrow medieval lanes inside fort. No ramps. Camel safari not accessible. Outer areas manageable.',dest:['jaisalmer'] },
      { type:'accessibility',severity:'medium',icon:'fa-info-circle',title:'Partial Access — Goa Beaches',desc:'Calangute, Baga, and Anjuna have beach wheelchairs. Many smaller beaches have no accessible paths.',dest:['goa'] },
      { type:'accessibility',severity:'medium',icon:'fa-info-circle',title:'Partial Access — Jaipur Forts',desc:'Amber Fort has limited elevator. Nahargarh has steep climb. City Palace is mostly accessible.',dest:['jaipur'] },
      { type:'accessibility',severity:'medium',icon:'fa-info-circle',title:'Partial Access — Kerala Backwaters',desc:'Houseboats have narrow gangways. Some operators offer accessible boats — book in advance.',dest:['kerala','alleppey'] },
      { type:'accessibility',severity:'low',icon:'fa-check-circle',title:'Fully Accessible — Taj Mahal, Agra',desc:'Wheelchair ramps, accessible toilets, electric golf cart service available from parking area.',dest:['agra','taj mahal'] },
      { type:'accessibility',severity:'low',icon:'fa-check-circle',title:'Accessible — Mysore Palace',desc:'Ramp access available. Wheelchairs provided free at entrance. Accessible restrooms available.',dest:['mysore','mysuru'] },
      { type:'accessibility',severity:'low',icon:'fa-check-circle',title:'Good Access — Lotus Temple, Delhi',desc:'Wheelchair accessible with ramps and elevators. Tactile paths for visually impaired.',dest:['delhi'] },
      { type:'accessibility',severity:'low',icon:'fa-check-circle',title:'Audio Guides Available — Khajuraho',desc:'Free multilingual audio guides at visitor center. Accessible pathways at main temple group.',dest:['khajuraho'] },
      { type:'accessibility',severity:'low',icon:'fa-assistive-listening-systems',title:'Assistive Services — Red Fort, Delhi',desc:'Wheelchair available on request. Braille guides at museum. Accessible entry gate.',dest:['delhi'] },
      // ─── CROWDING ───
      // ═══ DELHI ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Red Fort, Delhi',desc:'Expect 15,000+ visitors on holidays and weekends. Book ASI tickets online. Best time: 9-11 AM weekdays.',dest:['delhi'] },
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — India Gate, Delhi',desc:'National holiday crowds overflow to Rajpath. Evening walks packed. Visit early morning for space.',dest:['delhi'] },
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Chandni Chowk, Delhi',desc:'Old Delhi streets extremely narrow and jammed. Weekend food walk tours can have 50+ people per group.',dest:['delhi'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Qutub Minar, Delhi',desc:'UNESCO site draws large tour groups 10 AM-4 PM. Come before 9 AM for peaceful visit.',dest:['delhi'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Lotus Temple, Delhi',desc:'Queues of 30-45 mins during peak hours. Silence enforced inside — no talking or photography.',dest:['delhi'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Akshardham Temple, Delhi',desc:'Weekend crowds cause 20-30 min security waits. Boat ride and exhibitions have separate queues.',dest:['delhi'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Humayun Tomb, Delhi',desc:'Spacious Mughal garden tomb. Even during busy times, the gardens provide breathing room.',dest:['delhi'] },
      // ═══ JAIPUR ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Amber Fort, Jaipur',desc:'5,000+ visitors daily. Jeep queue up to 45 mins. Go before 8:30 AM or take the elephant ride early.',dest:['jaipur'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Hawa Mahal, Jaipur',desc:'Photo spot extremely crowded 10AM-4PM. Early morning or sunset visit ideal. Rooftop cafe entry less crowded.',dest:['jaipur'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — City Palace, Jaipur',desc:'Royal residence museum packed on weekends. Guided tours fill up fast. Online booking recommended.',dest:['jaipur'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Nahargarh Fort, Jaipur',desc:'Sunset point gets extremely crowded. Drive up early. Madhavendra Bhawan section quieter.',dest:['jaipur'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Jantar Mantar, Jaipur',desc:'UNESCO astronomical instruments spread across large area. Manageable even during peak times.',dest:['jaipur'] },
      // ═══ VARANASI ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Dashashwamedh Ghat, Varanasi',desc:'Ganga Aarti ceremony draws 2,000+ daily. Arrive 1 hour early for good spot. VIP seats ₹100-300.',dest:['varanasi'] },
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Kashi Vishwanath Corridor',desc:'Temple area very crowded during festivals. Online darshan booking strongly recommended.',dest:['varanasi'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Assi Ghat, Varanasi',desc:'Morning yoga and ganga aarti draw crowds. Less crowded than Dashashwamedh but still busy 6-8 AM.',dest:['varanasi'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Sarnath, Varanasi',desc:'Buddhist pilgrimage site. Dhamek Stupa area crowded 10 AM-1 PM. Museum queue during holidays.',dest:['varanasi'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Manikarnika Ghat, Varanasi',desc:'Cremation ghat — respectful distance required. Not a tourist spot but solemnly observed.',dest:['varanasi'] },
      // ═══ AGRA ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Taj Mahal, Agra',desc:'30,000+ visitors on holidays. Sunrise slot sells out fast. Book night viewing online. Closed Fridays.',dest:['agra'] },
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Agra Fort, Agra',desc:'UNESCO fort crowded 10 AM-3 PM. Many tourist groups arrive together. Audio guides available.',dest:['agra'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Mehtab Bagh, Agra',desc:'Moonlight garden across river — popular sunset spot. Crowds peak at golden hour.',dest:['agra'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Fatehpur Sikri, Agra',desc:'Abandoned Mughal city 40km from Agra. Large complex absorbs crowds well.',dest:['agra'] },
      // ═══ GOA ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Baga Beach, Goa',desc:'North Goa party beach packed Nov-Feb. Water sports queue 30+ mins. Try Benaulim for calm.',dest:['goa'] },
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Calangute Beach, Goa',desc:'Queen of Beaches — massive crowds Dec-Jan. Saturday Night Market draws thousands.',dest:['goa'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Anjuna Flea Market, Goa',desc:'Wednesday market packed shoulder-to-shoulder. Bargain hard but expect crowds.',dest:['goa'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Basilica of Bom Jesus, Goa',desc:'UNESCO church. Tour bus groups arrive 10 AM-12 PM. Arrive early for peaceful visit.',dest:['goa'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Dudhsagar Falls, Goa',desc:'Four-tiered waterfall jeep trail crowded weekends. Monsoon season limited access.',dest:['goa'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Palolem Beach, Goa',desc:'South Goa crescent beach. Laid-back shacks, few crowds. Best for relaxation seekers.',dest:['goa'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Agonda Beach, Goa',desc:'Quiet virgin beach. Only a few shacks. Perfect escape from North Goa madness.',dest:['goa'] },
      // ═══ KERALA ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'High Crowd — Alleppey Backwaters, Kerala',desc:'Houseboat queues Dec-Jan. Alleppey Beach crowded at sunset. Book houseboats 2 weeks ahead.',dest:['kerala','alleppey'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Munnar Tea Gardens, Kerala',desc:'Eravikulam National Park limited to 40 visitors/30 mins. Tata Tea Museum queue on weekends.',dest:['kerala','munnar'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Fort Kochi, Kerala',desc:'Chinese fishing nets area packed at sunset. Jew Town antique shops crowded 11 AM-3 PM.',dest:['kerala'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Thekkady, Kerala',desc:'Periyar Wildlife Sanctuary boat safari limited seats. Morning slots fill up by 6 AM.',dest:['kerala','thekkady'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Wayanad, Kerala',desc:'Hill station with scattered attractions. No single overcrowded spot. Nature walks peaceful.',dest:['kerala','wayanad'] },
      // ═══ KASHMIR ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Dal Lake Shikara Rides, Kashmir',desc:'200+ shikaras jostle at launch points. Dawn and dusk extremely packed. Negotiate price first.',dest:['kashmir','srinagar'] },
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Pahalgam Valley, Kashmir',desc:'Betaab Valley and Aru Valley parking full by 10 AM. Lidder River banks packed on weekends.',dest:['kashmir'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Gulmarg Gondola, Kashmir',desc:'Cable car queues 45-90 mins in peak season. Phase 2 gondola closes by 2 PM. Go early.',dest:['kashmir','gulmarg'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Mughal Gardens, Kashmir',desc:'Nishat, Shalimar, Chashme Shahi crowded Mar-Apr during tulip bloom. Weekdays much better.',dest:['kashmir','srinagar'] },
      // ═══ UDAIPUR ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — City Palace, Udaipur',desc:'Rajasthan largest palace complex. Boat museum queue long. Audio guide reduces wait.',dest:['udaipur'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Lake Pichola Boat Ride, Udaipur',desc:'Sunset boat rides fully booked by 3 PM. Jag Mandir stop crowded on weekends.',dest:['udaipur'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Saheliyon Ki Bari, Udaipur',desc:'Garden of Maidens — peaceful fountains and lotus pools. Manageable crowd most times.',dest:['udaipur'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Monsoon Palace, Udaipur',desc:'Hilltop palace with panoramic views. Limited access keeps crowds low.',dest:['udaipur'] },
      // ═══ AMRITSAR ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Golden Temple, Amritsar',desc:'Wait time: 3+ hours. Visit before 6 AM or after 8 PM. Langar hall extremely busy 12-2 PM.',dest:['amritsar'] },
      { type:'crowding',severity:'high',icon:'fa-users',title:'High Crowd — Jallianwala Bagh, Amritsar',desc:'National memorial. Tour groups pour in 10 AM-1 PM. Narrow entry passage bottleneck.',dest:['amritsar'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Wagah Border, Amritsar',desc:'Flag ceremony daily 5:30 PM. Arrive by 4 PM for seating. Weekend crowds 2x larger.',dest:['amritsar'] },
      // ═══ KOLKATA ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Victoria Memorial, Kolkata',desc:'Weekend crowds cause 30+ min entry queues. Museum gallery bottleneck during holidays.',dest:['kolkata'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Howrah Bridge, Kolkata',desc:'Walking path extremely crowded during rush hours. Photography spots jostled.',dest:['kolkata'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Dakshineswar Temple, Kolkata',desc:'Morning puja rush. Free entry but long queue. Boat from Belur Math less crowded.',dest:['kolkata'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Indian Museum, Kolkata',desc:'Asia oldest museum. Mummy gallery and Buddhist art sections most packed.',dest:['kolkata'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Marble Palace, Kolkata',desc:'19th century mansion with art. Free but need permission. Naturally limits visitor numbers.',dest:['kolkata'] },
      // ═══ HYDERABAD ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Charminar, Hyderabad',desc:'Market streets around Charminar packed daily. Ramzan period even more intense.',dest:['hyderabad'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Golconda Fort, Hyderabad',desc:'Acoustic marvel. Sound and light show evening crowd heavy. Explore early morning.',dest:['hyderabad'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Ramoji Film City, Hyderabad',desc:'World largest film studio complex. Weekend packages sell out. Book 3 days ahead.',dest:['hyderabad'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Hussain Sagar Lake, Hyderabad',desc:'Boating to Buddha island crowded evenings. Necklace Road walkway busy weekends.',dest:['hyderabad'] },
      // ═══ Bhopal ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Taj-ul-Masajid, Bhopal',desc:'One of largest mosques in Asia. Friday prayers draw thousands. Tourists welcome outside prayer times.',dest:['bhopal'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Bhimbetka Rock Shelters, Bhopal',desc:'UNESCO site. Guided groups slow down flow. Weekday visits much more peaceful.',dest:['bhopal'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Sanchi Stupa, Bhopal',desc:'UNESCO Buddhist monument. Large site absorbs crowds. Sunday morning quiet.',dest:['bhopal'] },
      // ═══ Lucknow ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Bara Imambara, Lucknow',desc:'World largest arched corridor. Weekend crowds 3x weekdays. Rooftop area less crowded.',dest:['lucknow'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Hazratganj, Lucknow',desc:'Colonial shopping street. Evening walks extremely busy. Friday night market peak.',dest:['lucknow'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Rumi Darwaza, Lucknow',desc:'Gateway landmark. Pass through at any time — open area with good flow.',dest:['lucknow'] },
      // ═══ Pune ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Shaniwar Wada, Pune',desc:'Peshwa palace ruins. Sound and light show evening crowd. Daytime more manageable.',dest:['pune'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Sinhagad Fort, Pune',desc:'Weekend trekking destination. Parking full by 8 AM. Trek route packed on holidays.',dest:['pune'] },
      // ═══ Leh-Ladakh ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Peak Season — Pangong Lake, Leh',desc:'Camping sites fully booked Jul-Aug. Limited day passes. Road conditions change rapidly.',dest:['leh','ladakh'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Peak Season — Nubra Valley, Leh',desc:'Bactrian camel rides have 20+ person queues. Sand dunes crowded during sunset.',dest:['leh','ladakh'] },
      // ═══ Chandigarh ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Rock Garden, Chandigarh',desc:'Nek Chands masterpiece. Weekends draw 5,000+ visitors. Weekday mornings peaceful.',dest:['chandigarh'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Sukhna Lake, Chandigarh',desc:'Morning joggers and evening walkers. Boating queue manageable. Sunday morning busy.',dest:['chandigarh'] },
      // ═══ Ahmedabad ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Sabarmati Ashram, Ahmedabad',desc:'Gandhi memorial. Morning hours best. Audio guide queue during school holiday season.',dest:['ahmedabad'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Adalaj Stepwell, Ahmedabad',desc:'5-story stepwell. Narrow passages cause bottlenecks. Visit before 10 AM.',dest:['ahmedabad'] },
      // ═══ Guwahati ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Kamakhya Temple, Guwahati',desc:'Shakti Peetha. Ambubachi festival (June) draws lakhs. Normal days manageable with 30 min queue.',dest:['guwahati'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Umananda Island, Guwahati',desc:'Smallest inhabited river island. Ferry limit keeps numbers controlled.',dest:['guwahati'] },
      // ═══ Indore ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Sarafa Bazaar, Indore',desc:'Night food market transforms at 9 PM. Every stall has 20-50 person queue. Weekends extreme.',dest:['indore'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Rajwada Palace, Indore',desc:'7-story Holkar palace. Ground floor market area crowded. Upper floors quieter.',dest:['indore'] },
      // ═══ Bhubaneswar ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Lingaraj Temple, Bhubaneswar',desc:'11th-century Shiva temple. Evening aarti draws large crowds. Visit morning for peace.',dest:['bhubaneswar'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Udayagiri & Khandagiri Caves, Bhubaneswar',desc:'Ancient Jain caves. Spread across hilltop — crowds disperse naturally.',dest:['bhubaneswar'] },
      // ═══ Nagpur ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Deekshabhoomi, Nagpur',desc:'Buddhist pilgrimage site. Dr. Ambedkar conversion anniversary (Dec 6) massive crowd.',dest:['nagpur'] },
      // ═══ Shimla ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Mall Road, Shimla',desc:'Main promenade packed Dec-Jan. Christmas and New Year 10x normal crowd. Walking only zone.',dest:['shimla'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Jakhu Temple, Shimla',desc:'Hanuman temple at 2,455m. Monkey menace adds chaos. Ropeway queue 20+ mins.',dest:['shimla'] },
      // ═══ Manali ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Peak Season — Solang Valley, Manali',desc:'Adventure sports hub packed Jun-Sep and Dec-Feb. Paragliding queue 1-2 hours.',dest:['manali'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Hadimba Temple, Manali',desc:'Wooden pagoda temple. Forested area absorbs crowds. Weekend mornings busier.',dest:['manali'] },
      // ═══ Darjeeling ═
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Tiger Hill, Darjeeling',desc:'Sunrise point. Taxi queue 5 AM. Clear days draw 500+ sunrise chasers.',dest:['darjeeling'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Batasia Loop, Darjeeling',desc:'Toy train spiral loop. Photography spot crowded during train arrival times.',dest:['darjeeling'] },
      // ═══ Rishikesh ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Laxman Jhula, Rishikesh',desc:'Suspension bridge packed evenings. Markets on both sides cause jams. Go before 8 AM.',dest:['rishikesh'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Ganga Aarti, Rishikesh',desc:'Parmarth Niketan evening aarti draws 1,000+ daily. Arrive 30 mins early for good spot.',dest:['rishikesh'] },
      // ═══ Mysuru ═══
      { type:'crowding',severity:'high',icon:'fa-users',title:'Extreme Crowding — Mysore Palace, Mysuru',desc:'Sunday evening illumination draws 10,000+. Dasara festival (Oct) 50,000+ daily. Book tickets online.',dest:['mysore','mysuru'] },
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Chamundi Hills, Mysuru',desc:'Hilltop temple. Steps less crowded mornings. Drive up easily even during peak.',dest:['mysore','mysuru'] },
      // ═══ Hampi ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Moderate Crowd — Virupaksha Temple, Hampi',desc:'UNESCO living temple. Morning elephant blessing draws crowds. Sunset from Hemakuta Hill packed.',dest:['hamoji','hampi'] },
      // ═══ Ooty ═══
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'Peak Season — Ooty Lake, Ooty',desc:'Boating season Apr-Jun packed. Pedal boat queue 30+ mins. Try morning slots.',dest:['ooty'] },
      { type:'crowding',severity:'medium',icon:'fa-user-clock',title:'High Crowd — Botanical Garden, Ooty',desc:'Government garden. Weekend family crowds. Friday flower show draws extra visitors.',dest:['ooty'] },
      // ═══ Spiti ═══
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable — Spiti Valley Entire Region',desc:'Remote cold desert. Few tourists Jun-Oct. Key Monastery busy during Buddhist festivals only.',dest:['spiti'] },
      // ═══ Default (works for any destination not listed) ═══
      { type:'crowding',severity:'low',icon:'fa-user-check',title:'Comfortable Crowd Levels',desc:'No overcrowding reported at tourist spots near your destination. Enjoy your visit!',dest:['default'] },
    ];

    // Get user profile helper
    function getUserProfile() {
      var user = JSON.parse(localStorage.getItem('yatraUsers') || '{}');
      var currentUser = localStorage.getItem('yatraCurrentUser');
      return user[currentUser] || {};
    }

    // Crowd feedback reporting
    function reportCrowd(spotId, level) {
      localStorage.setItem('yatraCrowd_' + spotId, level);
      var counter = localStorage.getItem('yatraCrowd_' + spotId + '_' + level) || '0';
      localStorage.setItem('yatraCrowd_' + spotId + '_' + level, parseInt(counter) + 1);
      var packed = parseInt(localStorage.getItem('yatraCrowd_' + spotId + '_packed') || '0');
      var busy = parseInt(localStorage.getItem('yatraCrowd_' + spotId + '_busy') || '0');
      var ok = parseInt(localStorage.getItem('yatraCrowd_' + spotId + '_ok') || '0');
      var total = packed + busy + ok;
      var el = document.getElementById('crowdCount_' + spotId);
      if (el) el.textContent = '(' + total + ' reports: ' + packed + ' packed, ' + busy + ' busy, ' + ok + ' fine)';
      // Highlight the selected button
      var spot = document.getElementById(spotId);
      if (spot) {
        spot.querySelectorAll('.crowd-fb-btn').forEach(function(btn) {
          btn.style.background = 'transparent';
          btn.style.color = '';
        });
      }
      showToast('Crowd report saved! Thank you for sharing 🙏', 'success');
    }

    // Match alert to user's destination or current location
    function isAlertRelevant(alert, dest, loc) {
      if (alert.dest.includes('default')) return true;
      return alert.dest.some(function(d) {
        return dest.indexOf(d) !== -1 || loc.indexOf(d) !== -1;
      });
    }

    // Build filtered notifications list
    function initNotifications() {
      notifications = [];
      var profile = getUserProfile();
      var dest = (profile.dest || '').toLowerCase();
      var loc = (profile.location || '').toLowerCase();

      // Only add alerts relevant to destination and current location
      ALERTS_DB.forEach(function(tpl) {
        if (isAlertRelevant(tpl, dest, loc)) {
          notifications.push(
            Object.assign({}, tpl, { id: Date.now() + Math.random(), time: new Date(), read: false })
          );
        }
      });

      // Sort: unread first, then by severity
      sortNotifications();
      renderNotifications();
      updateNotifBadge();

      // Also render the section alert cards dynamically
      renderFilteredAlerts(dest, loc);

      // Show first popup banner after 3s
      if (notifications.length > 0) {
        setTimeout(function() { showPopupBanner(notifications[0]); }, 3000);
      }

      // Simulate real-time alerts (only from relevant destinations)
      setInterval(function() {
        var relevant = ALERTS_DB.filter(function(t) { return isAlertRelevant(t, dest, loc); });
        if (relevant.length === 0) return;
        var pick = relevant[Math.floor(Math.random() * relevant.length)];
        var newNotif = Object.assign({}, pick, { id: Date.now(), time: new Date(), read: false });
        notifications.unshift(newNotif);
        sortNotifications();
        renderNotifications();
        updateNotifBadge();
        showPopupBanner(newNotif);
      }, 50000 + Math.random() * 30000);
    }

    // ═══════════════════════════════════════════
    // RENDER FILTERED ALERT CARDS IN THE SECTION
    // ═══════════════════════════════════════════
    function renderFilteredAlerts(dest, loc) {
      var profile = getUserProfile();
      var accessPref = (profile.accessibility || 'none').toLowerCase();

      // Filter alerts for section cards
      var weatherAlerts = ALERTS_DB.filter(function(a) {
        return a.type === 'weather' && isAlertRelevant(a, dest, loc);
      });
      var accessAlerts = ALERTS_DB.filter(function(a) {
        return a.type === 'accessibility' && isAlertRelevant(a, dest, loc);
      });
      var crowdAlerts = ALERTS_DB.filter(function(a) {
        return a.type === 'crowding' && isAlertRelevant(a, dest, loc);
      });

      // If user has accessibility needs, prioritize accessibility alerts
      if (accessPref !== 'none') {
        accessAlerts.forEach(function(a) {
          if (accessPref === 'wheelchair' && (a.desc.toLowerCase().indexOf('wheelchair') !== -1 || a.desc.toLowerCase().indexOf('ramp') !== -1 || a.desc.toLowerCase().indexOf('step') !== -1)) {
            a.severity = 'high';
          }
        });
        // Sort so high severity first
        var sevOrder = { high: 0, medium: 1, low: 2 };
        accessAlerts.sort(function(a, b) { return (sevOrder[a.severity]||3) - (sevOrder[b.severity]||3); });
      }

      // Render weather alerts
      var wEl = document.getElementById('weatherAlerts');
      if (wEl) {
        if (weatherAlerts.length === 0) {
          wEl.innerHTML = '<div class="alert-item severity-low"><i class="fas fa-check-circle" style="color:var(--success)"></i><div class="alert-text"><strong>No Weather Disruptions</strong><span>Current weather conditions look favorable for ' + (dest || 'your destination') + '.</span></div></div>';
        } else {
          wEl.innerHTML = weatherAlerts.map(function(a) {
            var color = a.severity === 'high' ? 'var(--danger)' : a.severity === 'medium' ? '#f57c00' : 'var(--success)';
            return '<div class="alert-item severity-' + a.severity + '"><i class="fas ' + a.icon + '" style="color:' + color + '"></i><div class="alert-text"><strong>' + a.title + ' <span class="alert-badge ' + a.severity + '">' + a.severity.toUpperCase() + '</span></strong><span>' + a.desc + '</span></div></div>';
          }).join('');
        }
      }

      // Render accessibility alerts
      var aEl = document.getElementById('accessAlerts');
      if (aEl) {
        var accessLabel = accessPref !== 'none' ? ' (Based on your ' + accessPref + ' preference)' : '';
        if (accessAlerts.length === 0) {
          aEl.innerHTML = '<div class="alert-item severity-low"><i class="fas fa-check-circle" style="color:var(--success)"></i><div class="alert-text"><strong>Accessibility Info Unavailable</strong><span>No specific accessibility data for this area. Contact local tourism office.</span></div></div>';
        } else {
          aEl.innerHTML = accessAlerts.map(function(a) {
            var color = a.severity === 'high' ? 'var(--danger)' : a.severity === 'medium' ? '#f57c00' : 'var(--success)';
            var badge = a.severity === 'high' ? 'CHALLENGING' : a.severity === 'medium' ? 'MODERATE' : 'ACCESSIBLE';
            return '<div class="alert-item severity-' + a.severity + '"><i class="fas ' + a.icon + '" style="color:' + color + '"></i><div class="alert-text"><strong>' + a.title + ' <span class="alert-badge ' + a.severity + '">' + badge + '</span></strong><span>' + a.desc + '</span></div></div>';
          }).join('') + (accessLabel ? '<div style="padding:8px 12px;font-size:0.8rem;color:#f59e0b;background:rgba(245,158,11,0.1);border-radius:8px;margin-top:8px;"><i class="fas fa-info-circle"></i> Filtered for your accessibility preference: ' + accessPref + '</div>' : '');
        }
      }

      // Render crowding alerts
      var cEl = document.getElementById('crowdAlerts');
      if (cEl) {
        if (crowdAlerts.length === 0) {
          cEl.innerHTML = '<div class="alert-item severity-low"><i class="fas fa-user-check" style="color:var(--success)"></i><div class="alert-text"><strong>Comfortable Crowd Levels</strong><span>No overcrowding reported at tourist spots near ' + (dest || 'your area') + '. Enjoy your visit!</span></div></div>';
        } else {           cEl.innerHTML = crowdAlerts.map(function(a, idx) {
             var color = a.severity === 'high' ? 'var(--danger)' : a.severity === 'medium' ? '#f57c00' : 'var(--success)';
             var badge = a.severity === 'high' ? 'AVOID' : a.severity === 'medium' ? 'BUSY' : 'COMFORTABLE';
             var spotId = 'crowd_' + idx;
             var savedRating = localStorage.getItem('yatraCrowd_' + spotId) || '';
             return '<div class="alert-item severity-' + a.severity + '" id="' + spotId + '"><i class="fas ' + a.icon + '" style="color:' + color + '"></i><div class="alert-text"><strong>' + a.title + ' <span class="alert-badge ' + a.severity + '">' + badge + '</span></strong><span>' + a.desc + '</span><div class="crowd-feedback" style="margin-top:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span style="font-size:0.75rem;color:var(--text-light)">📍 Current crowd level:</span><button class="crowd-fb-btn" onclick="reportCrowd(\'' + spotId + '\',\'packed\')" style="padding:3px 10px;border-radius:12px;border:1px solid var(--danger);background:' + (savedRating==='packed' ? 'var(--danger)' : 'transparent') + ';color:' + (savedRating==='packed' ? '#fff' : 'var(--danger)') + ';cursor:pointer;font-size:0.72rem;font-weight:600">🔴 Packed</button><button class="crowd-fb-btn" onclick="reportCrowd(\'' + spotId + '\',\'busy\')" style="padding:3px 10px;border-radius:12px;border:1px solid #f57c00;background:' + (savedRating==='busy' ? '#f57c00' : 'transparent') + ';color:' + (savedRating==='busy' ? '#fff' : '#f57c00') + ';cursor:pointer;font-size:0.72rem;font-weight:600">🟠 Busy</button><button class="crowd-fb-btn" onclick="reportCrowd(\'' + spotId + '\',\'ok\')" style="padding:3px 10px;border-radius:12px;border:1px solid var(--success);background:' + (savedRating==='ok' ? 'var(--success)' : 'transparent') + ';color:' + (savedRating==='ok' ? '#fff' : 'var(--success)') + ';cursor:pointer;font-size:0.72rem;font-weight:600">🟢 Fine</button><span style="font-size:0.7rem;color:var(--text-light)" id="crowdCount_' + spotId + '"></span></div></div></div>';
           }).join('');
           // Show saved feedback counts
           crowdAlerts.forEach(function(a, idx) {
             var spotId = 'crowd_' + idx;
             var packed = parseInt(localStorage.getItem('yatraCrowd_' + spotId + '_packed') || '0');
             var busy = parseInt(localStorage.getItem('yatraCrowd_' + spotId + '_busy') || '0');
             var ok = parseInt(localStorage.getItem('yatraCrowd_' + spotId + '_ok') || '0');
             var total = packed + busy + ok;
             if (total > 0) {
               var el = document.getElementById('crowdCount_' + spotId);
               if (el) el.textContent = '(' + total + ' reports: ' + packed + ' packed, ' + busy + ' busy, ' + ok + ' fine)';
             }
           });
        }
      }

      // Update section header to show location
      var secHeader = document.querySelector('#alerts-section .section-header p');
      if (secHeader) {
        var placeInfo = [];
        if (dest) placeInfo.push('Destination: ' + dest.charAt(0).toUpperCase() + dest.slice(1));
        if (loc && loc !== dest) placeInfo.push('Current: ' + loc.charAt(0).toUpperCase() + loc.slice(1));
        if (placeInfo.length > 0) {
          secHeader.textContent = 'Showing alerts for ' + placeInfo.join(' | ') + '. Alerts update in real-time.';
        }
      }
    }

    function sortNotifications() {
      const sev = { high: 0, medium: 1, low: 2 };
      notifications.sort((a, b) => {
        if (a.read !== b.read) return a.read ? 1 : -1;
        return (sev[a.severity] || 3) - (sev[b.severity] || 3);
      });
    }

    function renderNotifications() {
      const lists = {
        all: document.getElementById('notifListAll'),
        weather: document.getElementById('notifListWeather'),
        safety: document.getElementById('notifListSafety'),
        accessibility: document.getElementById('notifListAccess'),
        crowding: document.getElementById('notifListCrowd'),
      };

      // Clear all
      Object.values(lists).forEach(l => { if (l) l.innerHTML = ''; });

      if (notifications.length === 0) {
        Object.values(lists).forEach(l => { if (l) l.innerHTML = '<div class="notif-empty"><i class="fas fa-bell-slash"></i>No notifications yet</div>'; });
        return;
      }

      notifications.forEach(n => {
        const timeAgo = getTimeAgo(n.time);
        const sevClass = n.severity === 'high' ? '🔴' : n.severity === 'medium' ? '🟠' : '🟢';
        const html = `
          <div class="notif-item ${n.read ? '' : 'unread'}">
            <div class="notif-icon ${n.type}"><i class="fas ${n.icon}"></i></div>
            <div class="notif-content">
              <strong>${n.title} <span class="notif-severity ${n.severity}">${n.severity}</span></strong>
              <p>${n.desc}</p>
            </div>
            <span class="notif-time">${timeAgo}</span>
          </div>`;

        if (lists.all) lists.all.innerHTML += html;
        if (lists[n.type]) lists[n.type].innerHTML += html;
      });

      // Show empty state for tabs with no items
      ['weather', 'safety', 'accessibility', 'crowding'].forEach(type => {
        const count = notifications.filter(n => n.type === type).length;
        if (count === 0 && lists[type]) {
          lists[type].innerHTML = '<div class="notif-empty"><i class="fas fa-check-circle"></i>No ' + type + ' alerts right now</div>';
        }
      });

      // Update summary counts
      document.getElementById('countSafety').textContent = notifications.filter(n => n.type === 'safety').length;
      document.getElementById('countWeather').textContent = notifications.filter(n => n.type === 'weather').length;
      document.getElementById('countAccess').textContent = notifications.filter(n => n.type === 'accessibility').length;
      document.getElementById('countCrowd').textContent = notifications.filter(n => n.type === 'crowding').length;

      // Mark all as read
      notifications.forEach(n => n.read = true);
    }

    function updateNotifBadge() {
      const unread = notifications.filter(n => !n.read).length;
      const badge = document.getElementById('notifBadge');
      if (unread > 0) {
        badge.textContent = unread > 9 ? '9+' : unread;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    }

    function toggleNotifPanel() {
      notifPanelOpen = !notifPanelOpen;
      document.getElementById('notifPanel').classList.toggle('active', notifPanelOpen);
      if (notifPanelOpen) {
        renderNotifications();
        updateNotifBadge();
      }
    }

    function switchNotifTab(tab, btn) {
      document.querySelectorAll('.notif-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.notif-list').forEach(l => l.classList.remove('active'));
      const map = { all: 'notifListAll', weather: 'notifListWeather', safety: 'notifListSafety', accessibility: 'notifListAccess', crowding: 'notifListCrowd' };
      document.getElementById(map[tab]).classList.add('active');
    }

    function clearAllNotifs() {
      notifications = [];
      renderNotifications();
      updateNotifBadge();
      showToast('All notifications cleared', 'success');
    }

    function getTimeAgo(date) {
      const now = new Date();
      const diff = Math.floor((now - date) / 1000);
      if (diff < 60) return 'Just now';
      if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
      if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
      return Math.floor(diff / 86400) + 'd ago';
    }

    function showPopupBanner(notif) {
      const banner = document.getElementById('popupBanner');
      const iconMap = { weather: '🌦️', safety: '🛡️', accessibility: '♿', crowding: '👥' };
      const classMap = { weather: 'weather-banner', safety: '', accessibility: 'access-banner', crowding: 'crowd-banner' };

      banner.className = 'popup-banner active ' + (classMap[notif.type] || '');
      document.getElementById('popupIcon').textContent = iconMap[notif.type] || '⚠️';
      document.getElementById('popupTitle').textContent = notif.title;
      document.getElementById('popupDesc').textContent = notif.desc;

      // Auto-dismiss after 8s
      setTimeout(closePopupBanner, 8000);
    }

    function closePopupBanner() {
      document.getElementById('popupBanner').classList.remove('active');
    }

    // ═══════════════════════════════════════════
    // CLOSE NOTIF PANEL ON OUTSIDE CLICK
    // ═══════════════════════════════════════════
    document.addEventListener('click', (e) => {
      const panel = document.getElementById('notifPanel');
      const bell = document.getElementById('notifBell');
      if (notifPanelOpen && panel && !panel.contains(e.target) && !bell.contains(e.target)) {
        notifPanelOpen = false;
        panel.classList.remove('active');
      }
    });

    // ═══════════════════════════════════════════
    // THEME TOGGLE (Light / Dark)
    // ═══════════════════════════════════════════
    function toggleTheme() {
      const body = document.body;
      const isDark = body.getAttribute('data-theme') === 'dark';
      if (isDark) {
        body.removeAttribute('data-theme');
        localStorage.setItem('yatraTheme', 'light');
        showToast('Switched to Light Theme ☀️', 'success');
      } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('yatraTheme', 'dark');
        showToast('Switched to Dark Theme 🌙', 'success');
      }
    }

    // ═══════════════════════════════════════════
    // SCROLL PROGRESS BAR
    // ═══════════════════════════════════════════
    window.addEventListener('scroll', function() {
      var bar = document.getElementById('scrollProgressBar');
      if (bar) {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var progress = (scrollTop / docHeight) * 100;
        bar.style.width = progress + '%';
      }
    });

    // ═══════════════════════════════════════════
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ═══════════════════════════════════════════
    document.addEventListener('DOMContentLoaded', function() {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.feature-card, .emergency-card, .zone-card, .alert-card').forEach(function(el, i) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out ' + (i * 0.08) + 's';
        observer.observe(el);
      });
    });

    // ═══════════════════════════════════════════
    // APP RATING SYSTEM
    // ═══════════════════════════════════════════
    var currentRating = 0;
    var RATING_LABELS = { 0: 'Tap a star to rate', 1: '😢 Poor', 2: '😐 Fair', 3: '😊 Good', 4: '😄 Very Good', 5: '🤩 Excellent!' };

    function openRating() {
      var overlay = document.getElementById('ratingOverlay');
      overlay.style.display = 'flex';
      // Check if already rated
      var saved = localStorage.getItem('yatraRating');
      if (saved) {
        var data = JSON.parse(saved);
        setRating(data.stars);
        document.getElementById('ratingReview').value = data.review || '';
        document.querySelectorAll('.rating-tag').forEach(function(t) {
          if (data.tags && data.tags.includes(t.textContent.trim())) t.classList.add('selected');
        });
      }
    }

    function closeRating() {
      document.getElementById('ratingOverlay').style.display = 'none';
    }

    function setRating(n) {
      currentRating = n;
      document.querySelectorAll('.rating-stars .star').forEach(function(s, i) {
        s.classList.toggle('active', i < n);
        s.classList.toggle('hovered', false);
      });
      document.getElementById('ratingLabel').textContent = RATING_LABELS[n] || '';
    }

    // Star hover effect
    document.querySelectorAll('.rating-stars .star').forEach(function(s) {
      s.addEventListener('mouseenter', function() {
        var n = parseInt(this.dataset.star);
        document.querySelectorAll('.rating-stars .star').forEach(function(star, i) {
          star.classList.toggle('hovered', i < n);
        });
      });
      s.addEventListener('mouseleave', function() {
        document.querySelectorAll('.rating-stars .star').forEach(function(star) {
          star.classList.remove('hovered');
        });
      });
    });

    function toggleRatingTag(el) {
      el.classList.toggle('selected');
    }

    function submitRating() {
      if (currentRating === 0) { showToast('Please select a star rating first', 'warning'); return; }
      var review = document.getElementById('ratingReview').value.trim();
      var tags = [];
      document.querySelectorAll('.rating-tag.selected').forEach(function(t) { tags.push(t.textContent.trim()); });
      var data = { stars: currentRating, review: review, tags: tags, date: new Date().toISOString(), user: localStorage.getItem('yatraCurrentUser') || 'anonymous' };
      // Save locally
      var ratings = JSON.parse(localStorage.getItem('yatraRatings') || '[]');
      ratings.push(data);
      localStorage.setItem('yatraRatings', JSON.stringify(ratings));
      localStorage.setItem('yatraRating', JSON.stringify(data));
      // Show success
      var modal = document.querySelector('.rating-modal');
      modal.innerHTML = '<div class="rating-success"><div style="font-size:3rem;margin-bottom:12px">🎉</div><h3>Thank you for your feedback!</h3><p>You rated us ' + currentRating + '/5 stars. Your review helps us make YatraSaathi better for every traveler.</p><button onclick="closeRating()" style="margin-top:20px;padding:12px 32px;border-radius:12px;border:none;background:linear-gradient(135deg,#ffc93c,#ff9800);color:#1a1a2e;font-weight:700;cursor:pointer">Close</button></div>';
      showToast('Thank you for rating YatraSaathi! ⭐ ' + currentRating + '/5', 'success');
      // Close after delay
      setTimeout(closeRating, 4000);
    }

    // Show FAB after scroll
    window.addEventListener('scroll', function() {
      var fab = document.getElementById('ratingFab');
      if (fab) fab.classList.toggle('visible', window.scrollY > 400);
    });

    // ═══════════════════════════════════════════
    // NAVBAR SCROLL EFFECT
    // ═══════════════════════════════════════════
    window.addEventListener('scroll', function() {
      var navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
          navbar.style.background = 'rgba(255,255,255,0.97)';
        } else {
          navbar.style.boxShadow = 'none';
          navbar.style.background = 'rgba(255,255,255,0.92)';
        }
      }
    });

    // Apply saved theme on load (immediately, before DOM ready)
    (function applySavedTheme() {
      const savedTheme = localStorage.getItem('yatraTheme');
      if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
      }
    })();

    // ═══════════════════════════════════════════
    // CHECK FOR EXISTING SESSION ON LOAD
    // ═══════════════════════════════════════════
    (function checkSession() {
      const currentUser = localStorage.getItem('yatraCurrentUser');
      if (currentUser) {
        const users = JSON.parse(localStorage.getItem('yatraUsers') || '{}');
        if (users[currentUser]) {
          // Don't auto-login — require password for security
          // Pre-fill the name and show welcome-back message
          document.getElementById('loginOverlay').classList.remove('hidden');
          document.getElementById('loginName').value = currentUser;
          document.getElementById('loginPass').value = '';
          document.getElementById('loginPass').focus();
          showToast('Welcome back, ' + currentUser + '! Please enter your password.', 'success');
        }
      }
    })();

  
