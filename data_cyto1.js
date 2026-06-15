allLectures.push({
    id: "cyto_1",
    branch: "cyto",
    title: { 
        ar: "المحاضرة 1: مقدمة وعلم الخلية", 
        en: "Lecture 1: Intro & Plasma Membrane" 
    },
    revision: [
        {
            title: { ar: "مقدمة وطرق الدراسة", en: "Intro & Methods of Study" },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "Cytology", en: "Cytology" },
                    val1: { 
                        ar: "علم يدرس *تركيب ووظيفة* الخلية. الخلية هي الوحدة البنائية والوظيفية.", 
                        en: "Deals with *structure, function* and molecular construction of the cell." 
                    },
                    val2Title: { ar: "Histology", en: "Histology" },
                    val2: { 
                        ar: "دراسة الخلايا والأنسجة الطبيعية باستخدام الميكروسكوب.", 
                        en: "Study of *normal cells and tissues*, mainly using microscopes." 
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "Light Microscope", en: "Light Microscope" },
                    val1: { 
                        ar: "يستخدم *ضوء* النهار أو المصباح للإضاءة.", 
                        en: "Uses day or artificial lamp *light* for illumination." 
                    },
                    val2Title: { ar: "Electron Microscope", en: "Electron Microscope" },
                    val2: { 
                        ar: "يعتمد على *أشعة الإلكترونات* بدلاً من الضوء.", 
                        en: "Based on the use of *electron beams* (instead of light)." 
                    }
                },
                {
                    type: "table",
                    content: {
                        ar: `<table>
                                <tr><th>نوع المقطع (Section)</th><th>الاستخدام الرئيسي</th></tr>
                                <tr><td>Paraffin (شمع البرافين)</td><td>الأكثر شيوعاً للميكروسكوب الضوئي (L.M)</td></tr>
                                <tr><td>Frozen (مجمد)</td><td>دراسة الإنزيمات الحساسة والدهون (Lipids)</td></tr>
                                <tr><td>Plastic (بلاستيك)</td><td>الأكثر شيوعاً للميكروسكوب الإلكتروني (E.M)</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Section Type</th><th>Main Use</th></tr>
                                <tr><td>Paraffin</td><td>Most common for Light Microscope (L.M)</td></tr>
                                <tr><td>Frozen</td><td>Sensitive enzymes or lipids</td></tr>
                                <tr><td>Plastic</td><td>Most common for Electron Microscope (E.M)</td></tr>
                             </table>`
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "Prokaryotic", en: "Prokaryotic Cells" },
                    val1: { 
                        ar: "لا تمتلك نواة حقيقية محددة (مثل البكتيريا والطحالب).", 
                        en: "Do not have definite nucleus (e.g. bacteria)." 
                    },
                    val2Title: { ar: "Eukaryotic", en: "Eukaryotic Cells" },
                    val2: { 
                        ar: "تمتلك سيتوبلازم ونواة محددة يحيط بها غشاء نووي.", 
                        en: "Consist of cytoplasm and a defined nucleus bounded by a membrane." 
                    }
                }
            ]
        },
        {
            title: { ar: "غشاء الخلية (Plasma Membrane)", en: "Plasma Membrane" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "خصائص غشاء الخلية", en: "General Properties" },
                    content: { 
                        ar: "يُسمى أيضاً *Plasmalemma*، رقيق جداً (7.5 - 10 نانومتر) لذلك لا يُرى بالميكروسكوب الضوئي. يظهر بالميكروسكوب الإلكتروني كـ *خطين داكنين بينهما مسافة مضيئة*.", 
                        en: "Also called *Plasmalemma*. Extremely thin (7.5–10 nm), cannot be seen by LM. With EM, appears as two dark lines and one light space." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "التركيب الكيميائي", en: "Chemical Composition" },
                    content: { 
                        ar: "يتكون الوزن الجاف من: *40% بروتينات*، *20% دهون (Lipids)*، و *5% كربوهيدرات (Oligosaccharides)*.", 
                        en: "Dry weight is composed of: *40% proteins*, *20% lipids*, and *5% oligosaccharides*." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "دهون الغشاء (Lipids) 🔄", en: "Membrane Lipids 🔄" },
                    content: { 
                        ar: "1. *Phospholipids*: طبقة مزدوجة (Bilayer)، الرؤوس محبة للماء لل外 وذيول كارهة للماء للداخل.<br>2. *Cholesterol*: يحجم ويقيد حركة الفوسفوليبيدات.", 
                        en: "1. *Phospholipids*: Double layer (Bilayer), hydrophilic heads out, hydrophobic chains in.<br>2. *Cholesterol*: Restricts movement of phospholipids." 
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "Integral Proteins", en: "Integral Proteins" },
                    val1: { 
                        ar: "مدمجة داخل طبقة الدهون. إذا عبرت الطبقتين بالكامل تُسمى *Transmembrane*.", 
                        en: "Incorporated within bilayer. If they completely span it, called *Transmembrane*." 
                    },
                    val2Title: { ar: "Peripheral Proteins", en: "Peripheral Proteins" },
                    val2: { 
                        ar: "مرتبطة *بشكل غير محكم* بأحد السطحين (غالباً جهة السيتوبلازم).", 
                        en: "Loosely associated with membrane surface (particularly cytoplasmic side)." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "الغلاف الخلوي (Glycocalyx) 🔄", en: "Glycocalyx (Cell Coat) 🔄" },
                    content: { 
                        ar: "يتكون من كربوهيدرات (Oligosaccharides) متصلة بالدهون أو البروتين. *وظيفته*: ربط الإنزيمات ومولدات الضد، وتسهيل *التعرف الخلوي (Cell-cell recognition)*.", 
                        en: "Formed of oligosaccharides attached to lipids/proteins. *Function*: Binds antigens/enzymes, facilitates *cell-cell recognition*." 
                    }
                }
            ]
        },
        {
            title: { ar: "الأسئلة المقالية وتعديلات الغشاء", en: "Modifications & Essay Qs" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "سؤال مقالي: ما هي التعديلات القمية للغشاء؟", en: "Enumerate: Apical Modifications" },
                    content: { 
                        ar: "1. *Cuticle* (الجليدة)<br>2. *Cilia* (الأهداب)<br>3. *Microvilli* (الخملات الدقيقة)", 
                        en: "1. *Cuticle*<br>2. *Cilia*<br>3. *Microvilli*" 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "سؤال مقالي: ما هي التعديلات الجانبية للغشاء؟", en: "Enumerate: Lateral Modifications" },
                    content: { 
                        ar: "1. *Tight Junctions* (zonula occludens): تغلق المسافات بين الخلايا.<br>2. *Anchoring Junctions*: للالتصاق القوي (مثل Desmosomes).<br>3. *Gap Junctions*: قنوات للتواصل بين الخلايا.", 
                        en: "1. *Tight Junctions*: Form a seal.<br>2. *Anchoring Junctions*: Strong adhesion (Desmosomes).<br>3. *Gap Junctions*: Channels for communication." 
                    }
                }
            ]
        }
    ],
    quiz: [
        // --- MCQs ---
        {
            q: { 
                ar: "علم *Histology* هو دراسة:", 
                en: "*Histology* is the study of:" 
            },
            opts: {
                ar: ["الأنسجة المريضة", "الخلايا والأنسجة الطبيعية", "الكائنات الدقيقة فقط", "خلايا الدم فقط"],
                en: ["Diseased tissues", "Normal cells and tissues", "Microorganisms only", "Blood cells only"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "علم *Cytology* يتعامل مع:", 
                en: "*Cytology* is the science that deals with:" 
            },
            opts: {
                ar: ["العظام فقط", "العضلات فقط", "تركيب ووظيفة الخلايا", "الهرمونات فقط"],
                en: ["Bones only", "Muscles only", "Structure and function of cells", "Hormones only"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "الوحدة *التركيبية والوظيفية* لجسم الإنسان هي:", 
                en: "The *structural and functional* unit of the human body is:" 
            },
            opts: {
                ar: ["النسيج (Tissue)", "العضو (Organ)", "الخلية (Cell)", "النواة (Nucleus)"],
                en: ["Tissue", "Organ", "Cell", "Nucleus"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "أي ميكروسكوب يستخدم *أشعة الإلكترونات* بدلاً من الضوء؟", 
                en: "Which microscope uses *electron beams* instead of light?" 
            },
            opts: {
                ar: ["الميكروسكوب الضوئي", "الميكروسكوب المركب", "الميكروسكوب الإلكتروني", "ميكروسكوب التشريح"],
                en: ["Light microscope", "Compound microscope", "Electron microscope", "Dissecting microscope"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "القطاعات *المجمدة (Frozen sections)* مفيدة بشكل خاص لدراسة:", 
                en: "*Frozen sections* are especially useful for studying:" 
            },
            opts: {
                ar: ["العظام", "الدهون والإنزيمات الحساسة", "الأوعية الدموية", "ألياف الكولاجين"],
                en: ["Bone", "Lipids and sensitive enzymes", "Blood vessels", "Collagen fibers"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "القطاعات *البلاستيكية* تستخدم عادة في:", 
                en: "*Plastic sections* are commonly used for:" 
            },
            opts: {
                ar: ["الميكروسكوب الضوئي", "زراعة الأنسجة", "الميكروسكوب الإلكتروني", "كيمياء الأنسجة"],
                en: ["Light microscopy", "Tissue culture", "Electron microscopy", "Histochemistry"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "تتميز الخلايا *حقيقية النواة (Eukaryotic)* بـ:", 
                en: "*Eukaryotic cells* are characterized by:" 
            },
            opts: {
                ar: ["غياب النواة", "وجود نواة محددة", "غياب السيتوبلازم", "غياب الغشاء الخلوي"],
                en: ["Absence of nucleus", "Presence of definite nucleus", "Lack of cytoplasm", "Absence of membrane"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "*غشاء الخلية (Plasma membrane)* يُسمى أيضاً:", 
                en: "*Plasma membrane* is also called:" 
            },
            opts: {
                ar: ["Cytoplasm", "Nucleoplasm", "Plasmalemma", "Glycocalyx"],
                en: ["Cytoplasm", "Nucleoplasm", "Plasmalemma", "Glycocalyx"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "يتم ترتيب *الفوسفوليبيدات (Phospholipids)* في غشاء الخلية على شكل:", 
                en: "*Phospholipids* in the plasma membrane are arranged as:" 
            },
            opts: {
                ar: ["طبقة واحدة (Single layer)", "طبقة مزدوجة (Bilayer)", "ثلاث طبقات", "جزيئات مبعثرة عشوائياً"],
                en: ["Single layer", "Double layer (bilayer)", "Triple layer", "Random scattered particles"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "المكونات *الدهنية الرئيسية (major lipid)* في غشاء الخلية هي:", 
                en: "The *major lipid components* of plasma membrane are:" 
            },
            opts: {
                ar: ["الجليسريدات الثلاثية والستيرويدات", "الفوسفوليبيدات والكوليسترول", "البروتينات السكرية والإنزيمات", "الأحماض الدهنية فقط"],
                en: ["Triglycerides and steroids", "Phospholipids and cholesterol", "Glycoproteins and enzymes", "Fatty acids only"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "البروتينات التي *تعبر طبقة الدهون بالكامل* تُسمى:", 
                en: "Proteins that *completely span* the phospholipid bilayer are called:" 
            },
            opts: {
                ar: ["Peripheral proteins", "Glycoproteins", "Transmembrane proteins", "Cytoplasmic proteins"],
                en: ["Peripheral proteins", "Glycoproteins", "Transmembrane proteins", "Cytoplasmic proteins"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "البروتينات التي *ترتبط بشكل غير محكم (loosely)* بطبقة الدهون هي:", 
                en: "...... are proteins *loosely associated* with the bilayer:" 
            },
            opts: {
                ar: ["Transmembrane proteins", "Peripheral proteins", "Phospholipids", "Glycolipid"],
                en: ["Transmembrane proteins", "Peripheral proteins", "Phospholipids", "Glycolipid"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "*Glycocalyx* يتكون من:", 
                en: "*Glycocalyx* is formed of:" 
            },
            opts: {
                ar: ["DNA و RNA", "دهون سكرية وبروتينات سكرية", "كوليسترول فقط", "فوسفوليبيدات فقط"],
                en: ["DNA and RNA", "Glycolipids and glycoproteins", "Cholesterol only", "Phospholipids only"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "الروابط المحكمة *(Tight junctions)* وظيفتها الأساسية هي:", 
                en: "*Tight junctions* mainly function to:" 
            },
            opts: {
                ar: ["إنتاج الطاقة", "تكوين قنوات للتواصل", "تكوين ختم (seal) بين الخلايا المتجاورة", "تصنيع البروتين"],
                en: ["Produce energy", "Form channels for communication", "Form a seal between adjacent cells", "Synthesize proteins"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "الروابط الفجوية *(Gap junctions)* مسؤولة عن:", 
                en: "*Gap junctions* are responsible for:" 
            },
            opts: {
                ar: ["تواصل الخلايا (Cell communication)", "تخزين الدهون", "تصنيع البروتين", "انقسام الخلية"],
                en: ["Cell communication", "Lipid storage", "Protein synthesis", "Cell division"]
            },
            correct: 0
        },

        // --- True / False Questions (Converted to standard format) ---
        {
            q: { 
                ar: "علم *Histology* يدرس بشكل أساسي الخلايا والأنسجة الطبيعية.", 
                en: "*Histology* mainly studies normal cells and tissues." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "يستخدم الميكروسكوب *الإلكتروني* الضوء في الإضاءة.", 
                en: "*Electron microscope* uses light for illumination." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "القطاعات *المجمدة (Frozen sections)* مفيدة لدراسة الدهون.", 
                en: "*Frozen sections* are useful for studying lipids." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "الخلايا *بدائية النواة (Prokaryotic)* تمتلك نواة محددة.", 
                en: "*Prokaryotic cells* have a definite nucleus." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "يمكن رؤية *غشاء الخلية* بسهولة باستخدام الميكروسكوب الضوئي.", 
                en: "*Plasma membrane* can easily be seen by light microscope." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "جزيئات *الكوليسترول* تقيد حركة الفوسفوليبيدات في الغشاء.", 
                en: "*Cholesterol* restricts movement of phospholipids in the membrane." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "الغلاف الخلوي *(Glycocalyx)* يساعد في التعرف الخلوي (cell-cell recognition).", 
                en: "*Glycocalyx* helps in cell–cell recognition." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "روابط *Desmosomes* تعتبر أمثلة على الروابط الداعمة (anchoring junctions).", 
                en: "*Desmosomes* are examples of anchoring junctions." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "الروابط الفجوية *(Gap junctions)* تمنع التواصل بين الخلايا.", 
                en: "*Gap junctions* prevent communication between cells." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "الخملات الدقيقة *(Microvilli)* هي تعديلات للغشاء القمي للخلية (apical).", 
                en: "*Microvilli* are modifications of the apical plasma membrane." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0
        }
    ]
});