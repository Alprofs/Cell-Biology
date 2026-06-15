allLectures.push({
    id: "cyto_3",
    branch: "cyto",
    title: { 
        ar: "المحاضرة الثالثة: العضيات الغشائية (Membranous Organoids)", 
        en: "Lecture 3: Membranous Organoids" 
    },
    revision: [
        {
            title: { ar: "مقدمة العضيات (Organoids)", en: "Introduction to Organoids" },
            branches: [
                {
                    type: "flip",
                    nodeTitle: { ar: "ما هي العضيات الخلوية؟ (مصطلح علمي) 🔄", en: "What are Cell Organoids? (Scientific Term) 🔄" },
                    content: { 
                        ar: "هي هياكل حية موجودة في السيتوبلازم، *ضرورية لحياة الخلية* وتؤدي وظائف محددة داخل الخلية.\n(Living structures present in the cytoplasm that are essential for cell life and perform specific functions).", 
                        en: "Living structures present in the cytoplasm that are essential for cell life and perform specific functions within the cell." 
                    }
                },
                {
                    type: "table",
                    nodeTitle: { ar: "سؤال التعداد: أقسام العضيات", en: "Enumerate: Organoids Types" },
                    content: {
                        ar: `
                        <table>
                            <tr><th>Membranous organoids (غشائية)</th><th>Non-membranous organoids (غير غشائية)</th></tr>
                            <tr><td>Golgi apparatus</td><td>Ribosomes</td></tr>
                            <tr><td>Lysosomes</td><td>Centrosome</td></tr>
                            <tr><td>Rough & Smooth ER</td><td>Cytoskeleton (Microtubules, Microfilaments, Intermediate)</td></tr>
                            <tr><td>Mitochondria & Microbodies</td><td>-</td></tr>
                        </table>`,
                        en: `
                        <table>
                            <tr><th>Membranous organoids</th><th>Non-membranous organoids</th></tr>
                            <tr><td>Golgi apparatus</td><td>Ribosomes</td></tr>
                            <tr><td>Lysosomes</td><td>Centrosome</td></tr>
                            <tr><td>Rough & Smooth ER</td><td>Cytoskeleton (Microtubules, Microfilaments, Intermediate)</td></tr>
                            <tr><td>Mitochondria & Microbodies</td><td>-</td></tr>
                        </table>`
                    }
                }
            ]
        },
        {
            title: { ar: "الشبكة الإندوبلازمية (Endoplasmic Reticulum)", en: "Endoplasmic Reticulum (ER)" },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "Smooth ER (SER)", en: "Smooth ER (SER)" },
                    val1: { 
                        ar: "- *لا تحتوي* على ريبوسومات.\n- *حمضية (Acidophilic)* تحت المجهر الضوئي.\n- تظهر على شكل أنابيب (Tubules).\n- *الوظائف:* تصنيع الدهون، تكسير الجليكوجين، وتخليص الكبد من السموم (Detoxification).", 
                        en: "- *No* ribosomes.\n- Highly *acidophilic* in L.M.\n- Form of tubules.\n- *Functions:* Lipid synthesis, Glycogenolysis, Detoxification in liver cells." 
                    },
                    val2Title: { ar: "Rough ER (RER)", en: "Rough ER (RER)" },
                    val2: { 
                        ar: "- *تحتوي* على ريبوسومات.\n- *قاعدية (Basophilic)* تحت المجهر الضوئي.\n- تظهر على شكل حويصلات وأنابيب.\n- *الوظيفة:* تصنيع البروتينات للتصدير (Export).", 
                        en: "- *Has* ribosomes.\n- Highly *basophilic* in L.M.\n- Tubules, vesicles, cisternae.\n- *Function:* Synthesis of proteins for export." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "البوليسومات (مصطلح علمي) 🔄", en: "Polysomes (Scientific Term) 🔄" },
                    content: { 
                        ar: "هي مجموعات من الريبوسومات المرتبطة بأغشية الشبكة الإندوبلازمية الخشنة (RER).\n(Groups of ribosomes attached to RER membranes).", 
                        en: "Groups of ribosomes attached to RER membranes." 
                    }
                }
            ]
        },
        {
            title: { ar: "جهاز جولجي والليزوسومات", en: "Golgi Apparatus & Lysosomes" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "جهاز جولجي (Golgi Apparatus)", en: "Golgi Apparatus" },
                    content: { 
                        ar: "يظهر كحبيبات داكنة بصبغة الفضة (*Silver stain*)، وسلبي مع صبغة (H&E).\nوظيفته: تكثيف وتغليف البروتينات، إضافة الكربوهيدرات، وتعبئة الإنزيمات المحللة لتكوين الليزوسومات الأولية.", 
                        en: "Appears as dark granules after *Silver staining* (Negative with H&E).\nFunction: Packing of proteins, adding carbohydrates, and packing hydrolytic enzymes for primary lysosomes." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "الليزوسومات (مصطلح علمي) 🔄", en: "Lysosomes (Scientific Term) 🔄" },
                    content: { 
                        ar: "حويصلات غشائية غنية بالإنزيمات المحللة (*hydrolytic enzymes*).\nتنشأ من جهاز جولجي أو RER.", 
                        en: "Membrane-bound vesicles rich in *hydrolytic enzymes*.\nOriginate from Golgi or RER." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "الفجوات الالتهامية (مصطلح علمي) 🔄", en: "Autophagic Vacuoles (Scientific Term) 🔄" },
                    content: { 
                        ar: "ليزوسومات كبيرة الحجم تبتلع المكونات الخلوية التالفة (مثل الميتوكوندريا).\n(Larger lysosomes that engulf damaged cellular components).", 
                        en: "Larger lysosomes that engulf damaged cellular components (such as mitochondria)." 
                    }
                }
            ]
        },
        {
            title: { ar: "الميتوكوندريا والأجسام الدقيقة", en: "Mitochondria & Microbodies" },
            branches: [
                {
                    type: "flip",
                    nodeTitle: { ar: "الميتوكوندريا (مصطلح علمي) 🔄", en: "Mitochondria (Scientific Term) 🔄" },
                    content: { 
                        ar: "هي *مصنع الطاقة (Powerhouse)* في الخلية، مسؤولة عن إنتاج ATP. محاطة بغشائين (غشاء داخلي متعرج يسمى Cristae).", 
                        en: "The *powerhouse of the cell*. Surrounded by two membranes (inner folds are called Cristae)." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "الأجسام الدقيقة (Microbodies / Peroxisomes)", en: "Microbodies" },
                    content: { 
                        ar: "محاطة بغشاء *مفرد (Single membrane)*.\n*لا تحتوي* على إنزيمات محللة (No acid phosphatase).\nتحتوي على إنزيم الكاتاليز (Catalase/Peroxidase) لتحويل فوق أكسيد الهيدروجين السام إلى ماء وأكسجين.", 
                        en: "Limited by a *single membrane*.\nHave *no acid phosphatase*.\nContain Catalase/Peroxidase to convert toxic H2O2 into water and O2." 
                    }
                }
            ]
        }
    ],
    quiz: [
        // ================= MCQs =================
        {
            q: { ar: "أين تقع العضيات الخلوية (*Cell organoids are located*)؟", en: "Cell organoids are *located* in the:" },
            opts: { ar: ["النواة", "السيتوبلازم", "غشاء الخلية", "النوية"], en: ["Nucleus", "Cytoplasm", "Cell membrane", "Nucleolus"] },
            correct: 1
        },
        {
            q: { ar: "أي من التالي يعتبر عضية غشائية (*membranous organoid*)؟", en: "Which of the following is a *membranous organoid*?" },
            opts: { ar: ["الريبوسوم", "السنتروسوم", "الليزوسوم", "الخيوط الدقيقة"], en: ["Ribosome", "Centrosome", "Lysosome", "Microfilament"] },
            correct: 2
        },
        {
            q: { ar: "الشبكة الإندوبلازمية الملساء (*Smooth ER*) تظهر أساساً على شكل:", en: "*Smooth endoplasmic reticulum* mainly appears as:" },
            opts: { ar: ["أكياس مع ريبوسومات", "أنابيب بدون ريبوسومات", "حبيبات", "خيوط"], en: ["Cisternae with ribosomes", "Tubules without ribosomes", "Granules", "Filaments"] },
            correct: 1
        },
        {
            q: { ar: "الخلايا الغنية بالشبكة الملساء (*SER*) تكون شديدة الحمضية بسبب:", en: "Cells rich in *SER* are highly acidophilic because:" },
            opts: { ar: ["احتوائها على DNA", "احتوائها على ليزوسومات", "غياب الريبوسومات", "احتوائها على جليكوجين"], en: ["They contain DNA", "They contain lysosomes", "Ribosomes are absent", "They contain glycogen"] },
            correct: 2
        },
        {
            q: { ar: "إحدى وظائف الشبكة الملساء (*function of smooth ER*) هي:", en: "One *function of smooth endoplasmic reticulum* is:" },
            opts: { ar: ["تصدير البروتين", "إنتاج ATP", "تصنيع الدهون", "الهضم الليزوسومي"], en: ["Protein export", "ATP production", "Lipid synthesis", "Lysosome digestion"] },
            correct: 2
        },
        {
            q: { ar: "الشبكة الإندوبلازمية الخشنة (*RER*) قاعدية بشدة بسبب وجود:", en: "*Rough endoplasmic reticulum* is highly basophilic due to the presence of:" },
            opts: { ar: ["الدهون", "الجليكوجين", "الريبوسومات", "الأعراف (Cristae)"], en: ["Lipids", "Glycogen", "Ribosomes", "Cristae"] },
            correct: 2
        },
        {
            q: { ar: "تترتب الريبوسومات على أغشية (*RER*) في مجموعات تسمى:", en: "Ribosomes on the membranes of *RER* are arranged in groups called:" },
            opts: { ar: ["الأعراف", "الفجوات", "البوليسومات", "الحبيبات"], en: ["Cristae", "Vacuoles", "Polysomes", "Granules"] },
            correct: 2
        },
        {
            q: { ar: "الوظيفة الأساسية للشبكة الخشنة (*main function of RER*) هي:", en: "The *main function of rough endoplasmic reticulum* is:" },
            opts: { ar: ["إزالة السموم", "تصنيع الدهون", "تصنيع البروتين للتصدير", "تكوين ATP"], en: ["Detoxification", "Lipid synthesis", "Protein synthesis for export", "ATP formation"] },
            correct: 2
        },
        {
            q: { ar: "يظهر جهاز جولجي كحبيبات داكنة (*dark granules*) بعد استخدام صبغة:", en: "The Golgi apparatus appears as *dark granules* after:" },
            opts: { ar: ["صبغة الفضة", "صبغة H&E", "صبغة PAS", "هيماتوكسيلين الحديد"], en: ["Silver staining", "H&E staining", "PAS staining", "Iron hematoxylin staining"] },
            correct: 0
        },
        {
            q: { ar: "جهاز جولجي مسؤول عن (*responsible for*):", en: "The *Golgi apparatus is responsible* for:" },
            opts: { ar: ["إنتاج ATP", "تغليف البروتين (Protein packing)", "تكسير الجليكوجين", "انقسام الخلية"], en: ["ATP production", "Protein packing", "Glycogenolysis", "Cell division"] },
            correct: 1
        },
        {
            q: { ar: "الليزوسومات غنية بـ (*Lysosomes are rich in*):", en: "*Lysosomes are rich* in:" },
            opts: { ar: ["الكاتاليز", "الإنزيمات المحللة (Hydrolytic enzymes)", "الريبوسومات", "الـ DNA"], en: ["Catalase", "Hydrolytic enzymes", "Ribosomes", "DNA"] },
            correct: 1
        },
        {
            q: { ar: "تنشأ الليزوسومات من (*originate from*):", en: "*Lysosomes originate* from the:" },
            opts: { ar: ["النواة", "الميتوكوندريا", "جهاز جولجي", "الريبوسومات"], en: ["Nucleus", "Mitochondria", "Golgi apparatus", "Ribosomes"] },
            correct: 2
        },
        {
            q: { ar: "الأجسام المتبقية (*Residual bodies*) تحتوي على:", en: "*Residual bodies* contain:" },
            opts: { ar: ["إنزيمات حديثة التكوين", "مواد غير قابلة للهضم (Indigestible materials)", "دهون فقط", "جزيئات DNA"], en: ["Newly formed enzymes", "Indigestible materials", "Lipids only", "DNA particles"] },
            correct: 1
        },
        {
            q: { ar: "الليزوسومات الكبيرة التي تبتلع مكونات خلوية تالفة (*engulf damaged components*) تسمى:", en: "Larger lysosomes that *engulf damaged cellular components* (such as mitochondria) are called:" },
            opts: { ar: ["ليزوسومات أولية", "ليزوسومات ثانوية", "أجسام متبقية", "فجوات التهامية ذاتية (Autophagic)"], en: ["Primary lysosomes", "Secondary lysosomes", "Residual bodies", "Autophagic vacuoles"] },
            correct: 3
        },
        {
            q: { ar: "تُعرف الميتوكوندريا بأنها (*Mitochondria are known as*):", en: "*Mitochondria* are known as the:" },
            opts: { ar: ["مركز هضم الخلية", "مركز تحكم الخلية", "مصنع طاقة الخلية (Powerhouse)", "مصنع بروتين الخلية"], en: ["Digestive center of the cell", "Control center of the cell", "Powerhouse of the cell", "Protein factory of the cell"] },
            correct: 2
        },
        {
            q: { ar: "طيّات الغشاء الداخلي للميتوكوندريا (*folds of inner mitochondrial membrane*) تسمى:", en: "The *folds* of the *inner mitochondrial membrane* are called:" },
            opts: { ar: ["الحويصلات", "الأكياس", "الأعراف (Cristae)", "الفجوات"], en: ["Vesicles", "Cisternae", "Cristae", "Vacuoles"] },
            correct: 2
        },
        {
            q: { ar: "تحتوي الأجسام الدقيقة (*Microbodies*) على:", en: "*Microbodies contain*:" },
            opts: { ar: ["إنزيمات محللة", "إنزيم الكاتاليز (Catalase)", "ريبوسومات", "سيتوكروم أوكسيديز"], en: ["Acid phosphatase", "Catalase enzyme", "Ribosomes", "Cytochrome oxidase"] },
            correct: 1
        },
        {
            q: { ar: "إنزيم البيروكسيديز يحول فوق أكسيد الهيدروجين إلى:", en: "*Peroxidase enzyme converts* hydrogen peroxide into:" },
            opts: { ar: ["ATP وماء", "ماء وأكسجين", "جلوكوز وأكسجين", "ثاني أكسيد الكربون وماء"], en: ["ATP and water", "Water and oxygen", "Glucose and oxygen", "Carbon dioxide and water"] },
            correct: 1
        },

        // ================= True/False Questions =================
        {
            q: { ar: "العضيات الخلوية *ضرورية لحياة الخلية*.", en: "*Cell organoids* are *essential* for cell life." },
            opts: { ar: ["صح", "خطأ"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "الشبكة الإندوبلازمية الملساء (*Smooth ER*) تحتوي على *ريبوسومات* على غشائها.", en: "*Smooth ER* contains *ribosomes* on its membrane." },
            opts: { ar: ["صح", "خطأ"], en: ["True", "False"] },
            correct: 1
        },
        {
            q: { ar: "الشبكة الملساء (*SER*) تشارك في *إزالة السموم* في خلايا الكبد.", en: "*SER* participates in *detoxification* in liver cells." },
            opts: { ar: ["صح", "خطأ"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "جهاز جولجي يعطي نتيجة *إيجابية* مع صبغة (H&E).", en: "*Golgi apparatus* is *positive* with H&E stain." },
            opts: { ar: ["صح", "خطأ"], en: ["True", "False"] },
            correct: 1
        },
        {
            q: { ar: "الليزوسومات غنية بالإنزيمات المحللة (*hydrolytic enzymes*).", en: "*Lysosomes* are rich in *hydrolytic enzymes*." },
            opts: { ar: ["صح", "خطأ"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "الميتوكوندريا محاطة *بغشاء واحد فقط*.", en: "*Mitochondria* are surrounded by *one membrane only*." },
            opts: { ar: ["صح", "خطأ"], en: ["True", "False"] },
            correct: 1
        },
        {
            q: { ar: "الأعراف (*Cristae*) هي طيات الغشاء الداخلي للميتوكوندريا.", en: "*Cristae* are folds of the inner mitochondrial membrane." },
            opts: { ar: ["صح", "خطأ"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "الأجسام الدقيقة (*Microbodies*) تحتوي على الإنزيم المحلل (acid phosphatase).", en: "*Microbodies* contain *acid phosphatase*." },
            opts: { ar: ["صح", "خطأ"], en: ["True", "False"] },
            correct: 1
        },
        {
            q: { ar: "البيروكسيسومات (*Peroxisomes*) تحتوي على إنزيم (acid phosphatase).", en: "*Peroxisomes* contain *acid phosphatase* enzyme." },
            opts: { ar: ["صح", "خطأ"], en: ["True", "False"] },
            correct: 1
        },
        {
            q: { ar: "إنتاج الـ ATP يحدث داخل *الميتوكوندريا*.", en: "*ATP production* occurs in *mitochondria*." },
            opts: { ar: ["صح", "خطأ"], en: ["True", "False"] },
            correct: 0
        }
    ]
});