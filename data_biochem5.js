allLectures.push({
    id: "biochem_5",
    branch: "biochem",
    title: { 
        ar: "المحاضرة الخامسة: التواصل الخلوي (Cell Signaling)", 
        en: "Lecture 5: Cell Signaling" 
    },
    revision: [
        {
            title: { ar: "مقدمة وطرق التواصل الخلوي", en: "Intro & Forms of Cell Signaling" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "القاعدة الأساسية 💡", en: "Basic Rule 💡" },
                    content: { 
                        ar: "تتواصل الخلايا مع بعضها البعض في الغالب باستخدام *جزيئات إشارة خارج خلوية* (Extracellular signal molecules).", 
                        en: "Cells typically communicate using *extracellular signal molecules*." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "1. إشارات الغدد الصماء (Endocrine) 🔄", en: "1. Endocrine signaling 🔄" },
                    content: { 
                        ar: "هي الطريقة *الأكثر شيوعاً*. تُرسل الإشارات لمسافات *طويلة* عبر *مجرى الدم*. الجزيئات تسمى *هرمونات*.\nمثال: هرمون النمو من الغدة النخامية، والإنسولين من البنكرياس.", 
                        en: "The *most common* form. Transmits signals over *long distances* via the *bloodstream*. Signals are called *hormones*.\nExample: Pituitary growth hormone, Pancreas insulin." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "2. الإشارات العصبية (Neuronal) 🔄", en: "2. Neuronal signaling 🔄" },
                    content: { 
                        ar: "تنتقل لمسافات *طويلة* ولكن بشكل *سريع جداً ومحدد* عبر خطوط خاصة (الخلايا العصبية). السرعة تصل لـ 100 متر/ثانية.\nمثال: من الحبل الشوكي إلى إصبع القدم.", 
                        en: "Delivers messages over *long distances* but *quickly and specifically* through private lines (neurons). Speed up to 100 m/sec.\nExample: Spinal cord to big toe." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "3. إشارات الخلايا المجاورة (Paracrine) 🔄", en: "3. Paracrine signaling 🔄" },
                    content: { 
                        ar: "تنتشر جزيئات الإشارة *محلياً* في السائل خارج الخلية لتؤثر على الخلايا *المجاورة*.\nمثال: تنظيم الالتهابات وعملية التئام الجروح.", 
                        en: "Signal molecules diffuse *locally* through extracellular fluid to act as local mediators on *nearby* cells.\nExample: Inflammation and wound healing." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "4. الإشارات الذاتية (Autocrine) 🔄", en: "4. Autocrine signaling 🔄" },
                    content: { 
                        ar: "تستجيب الخلية للوسائط المحلية التي *أنتجتها هي بنفسها*.\nمثال: الخلايا السرطانية تفرز عوامل نمو لتحفز انقسامها وبقائها.", 
                        en: "Cells respond to local mediators that *they themselves produce*.\nExample: Cancer cells promoting their own survival and proliferation." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "5. الاتصال الجسدي المباشر (Direct Contact) 🔄", en: "5. Direct physical contact 🔄" },
                    content: { 
                        ar: "النوع *الأكثر حميمية والأقصر مسافة*. *لا يتطلب إفراز جزيئات*، بل تتصل الخلايا مباشرة عبر غشائها البلازمي.\nمثال: التطور الجنيني (Embryonic development).", 
                        en: "The *most intimate and short-range*. *Does NOT require secreted molecules*. Direct contact via plasma membrane.\nExample: Embryonic development." 
                    }
                }
            ]
        },
        {
            title: { ar: "نقل الإشارة والمستقبلات (Transduction & Receptors)", en: "Signal Transduction & Receptors" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "نقل الإشارة (Signal Transduction)", en: "Signal Transduction" },
                    content: { 
                        ar: "هو عملية ارتباط الربيطة (Ligand) بمستقبلاتها المتخصصة (Receptor) لتنشيط مسار معين يؤدي إلى استجابة خلوية.\nالمستقبلات والروابط تعمل بنظرية *القفل والمفتاح* (Key & Lock).", 
                        en: "The process of binding a ligand to its specific receptor, triggering a signaling pathway for a cellular response.\nReceptors and ligands work as matched pairs *(Key & Lock)*." 
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "مستقبلات داخلية (Intracellular Receptors)", en: "Intracellular Receptors" },
                    val1: { 
                        ar: "الموقع: السيتوبلازم أو النواة.\nخصائص الربيطة: يجب أن تكون *صغيرة وكارهة للماء* لتعبر الغشاء البلازمي، وتنتقل في الدم عبر بروتينات ناقلة.\nأمثلة: هرمونات الستيرويد، الهرمونات الجنسية، فيتامين D، غاز أكسيد النيتريك (NO).", 
                        en: "Location: Cytoplasm or nucleus.\nLigand features: Must be *small & hydrophobic* to cross the plasma membrane, transported via carrier proteins.\nExamples: Steroids, Sex hormones, Vit D, Nitric oxide (NO)." 
                    },
                    val2Title: { ar: "مستقبلات سطح الخلية (Cell-surface Receptors)", en: "Cell-surface Receptors" },
                    val2: { 
                        ar: "الموقع: الغشاء البلازمي الخارجي للخلية.\nخصائص الربيطة: *لا تعبر* الغشاء، تكون جزيئات كبيرة أو محبة للماء (قطبية/مشحونة) مثل الببتيدات.\nأمثلة: عوامل النمو، الإنسولين، النواقل العصبية (جلايسين).", 
                        en: "Location: Cell plasma membrane.\nLigand features: *Doesn't cross* the membrane, can be large or hydrophilic (polar/charged) like peptides.\nExamples: Growth factors, Insulin, Neurotransmitters (glycine)." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "أصناف مستقبلات سطح الخلية 📊", en: "Classes of Cell-surface Receptors 📊" },
                    content: { 
                        ar: "1. مستقبلات مرتبطة بقنوات أيونية (Ion-channel-coupled).\n2. مستقبلات مرتبطة ببروتين جي (G-protein-coupled).\n3. مستقبلات مرتبطة بإنزيم (Enzyme-coupled).", 
                        en: "1. Ion-channel-coupled receptors.\n2. G-protein-coupled receptors.\n3. Enzyme-coupled receptors." 
                    }
                }
            ]
        },
        {
            title: { ar: "الأسئلة المقالية (Short Notes)", en: "Essay Questions" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "1. أذكر أشكال التواصل الخلوي مع مثال لكل نوع؟", en: "1. Enumerate forms of cell signaling with examples?" },
                    content: { 
                        ar: "1. Endocrine: إفراز الإنسولين في الدم.\n2. Neuronal: إشارات الحبل الشوكي.\n3. Paracrine: التئام الجروح والالتهابات.\n4. Autocrine: الخلايا السرطانية.\n5. Direct contact: التطور الجنيني.", 
                        en: "1. Endocrine (e.g., Insulin via blood).\n2. Neuronal (e.g., Spinal cord impulses).\n3. Paracrine (e.g., Wound healing).\n4. Autocrine (e.g., Cancer cell loop).\n5. Direct contact (e.g., Embryonic development)." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "2. مريض أصيب بنوبة هلع (Panic Attack)، ما نوع التواصل الخلوي؟", en: "2. Panic Attack Case Study" },
                    content: { 
                        ar: "النوع هو *(Endocrine Signaling)*.\nالسبب: الغدة الكظرية أفرزت هرمون (الإبينفرين) في مجرى الدم، والذي أثر بدوره على أعضاء بعيدة ومختلفة في نفس الوقت (القلب، الرئتين، الكبد).", 
                        en: "Type: *(Endocrine Signaling)*.\nReason: Adrenal glands released epinephrine into the bloodstream, which travelled long distances to affect multiple organs simultaneously (heart, lungs, liver)." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "3. حلقة النمو السرطاني (Growth Loop)، ما نوع التواصل؟", en: "3. Cancer Growth Loop Case Study" },
                    content: { 
                        ar: "النوع هو *(Autocrine Signaling)*.\nالسبب: الخلية السرطانية تفرز عامل النمو (Growth Factor) وتمتلك مستقبلات لنفس العامل على سطحها، مما يجعلها تحفز نفسها بنفسها للانقسام غير المنضبط.", 
                        en: "Type: *(Autocrine Signaling)*.\nReason: The tumor cell secretes a Growth Factor and has receptors for that same factor on its own membrane, causing self-stimulation for uncontrolled division." 
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: { 
                ar: "عادة ما تتواصل الخلايا عن طريق استخدام جزيئات تسمى *..............*.", 
                en: "Cells typically communicate using *..............*." 
            },
            opts: {
                ar: ["جزيئات إشارة خارج خلوية", "جزيئات الحمض النووي", "الإنزيمات الهاضمة", "جزيئات ATP"],
                en: ["Extracellular signal molecules", "DNA molecules", "Digestive enzymes", "ATP molecules"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "ما هو نوع الإشارات الخلوية الذي يُعد *الأكثر شيوعاً* ويستخدم *مجرى الدم* لنقل الرسائل لمسافات طويلة؟", 
                en: "Which signaling form is the *most common* and uses the *bloodstream* to send messages over long distances?" 
            },
            opts: {
                ar: ["إشارات الغدد الصماء (Endocrine)", "إشارات الخلايا المجاورة (Paracrine)", "الإشارات العصبية (Neuronal)", "الاتصال المباشر (Direct contact)"],
                en: ["Endocrine signaling", "Paracrine signaling", "Neuronal signaling", "Direct physical contact"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "جزيئات الإشارة المنتجة في نظام الـ *Endocrine* تُعرف باسم:", 
                en: "Signals produced in the *Endocrine* system are known as:" 
            },
            opts: {
                ar: ["نواقل عصبية", "هرمونات", "إنزيمات", "مستقبلات"],
                en: ["Neurotransmitters", "Hormones", "Enzymes", "Receptors"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "إفراز *الإنسولين* من خلايا بيتا في البنكرياس لتنظيم الجلوكوز يعتبر مثالاً على الإشارات:", 
                en: "Release of *insulin* from pancreas β-Cells to regulate glucose is an example of:" 
            },
            opts: {
                ar: ["Autocrine", "Paracrine", "Endocrine", "Neuronal"],
                en: ["Autocrine", "Paracrine", "Endocrine", "Neuronal"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "أي أنواع التواصل الخلوي يرسل الإشارات لمسافات طويلة ولكن بشكل *سريع ومحدد جداً* عبر خطوط خاصة؟", 
                en: "Which signaling delivers messages over long distances but *quickly and specifically* through private lines?" 
            },
            opts: {
                ar: ["Endocrine", "Paracrine", "Neuronal", "Autocrine"],
                en: ["Endocrine", "Paracrine", "Neuronal", "Autocrine"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "قد تصل سرعة النبضات الكهربائية في *الإشارات العصبية (Neuronal)* إلى:", 
                en: "The speed of electrical impulses in *Neuronal signaling* can reach up to:" 
            },
            opts: {
                ar: ["100 متر/ثانية", "1 متر/ثانية", "10 متر/ثانية", "1000 متر/ثانية"],
                en: ["100 m/sec", "1 m/sec", "10 m/sec", "1000 m/sec"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "عندما تنتشر جزيئات الإشارة محلياً لتؤثر على *الخلايا المجاورة* (مثل الالتهابات)، يسمى هذا:", 
                en: "When signal molecules diffuse locally to act on *nearby cells* (e.g., inflammation), this is called:" 
            },
            opts: {
                ar: ["Endocrine signaling", "Paracrine signaling", "Autocrine signaling", "Direct signaling"],
                en: ["Endocrine signaling", "Paracrine signaling", "Autocrine signaling", "Direct signaling"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "استجابة الخلايا *السرطانية* للوسائط المحلية التي *أنتجتها بنفسها* لتحفيز انقسامها، يسمى:", 
                en: "*Cancer* cells responding to local mediators that *they themselves produce* is called:" 
            },
            opts: {
                ar: ["Endocrine signaling", "Paracrine signaling", "Autocrine signaling", "Direct signaling"],
                en: ["Endocrine signaling", "Paracrine signaling", "Autocrine signaling", "Direct signaling"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "النوع الذي يعتبر *الأكثر حميمية* و*لا يتطلب إفراز* أي جزيئات إشارة هو:", 
                en: "The *most intimate* signaling that *does NOT require* the release of a secreted molecule is:" 
            },
            opts: {
                ar: ["Direct physical contact", "Autocrine signaling", "Paracrine signaling", "Neuronal signaling"],
                en: ["Direct physical contact", "Autocrine signaling", "Paracrine signaling", "Neuronal signaling"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "التواصل بين الخلايا المجاورة أثناء مرحلة *التطور الجنيني* (Embryonic development) هو مثال على:", 
                en: "Signaling between adjacent cells during *embryonic development* is an example of:" 
            },
            opts: {
                ar: ["Endocrine", "Neuronal", "Direct physical contact", "Autocrine"],
                en: ["Endocrine", "Neuronal", "Direct physical contact", "Autocrine"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "عملية ارتباط الربيطة (Ligand) بمستقبلها لتحفيز مسار يؤدي لاستجابة خلوية تُعرف بـ:", 
                en: "The process of a ligand binding to its receptor to trigger a response pathway is known as:" 
            },
            opts: {
                ar: ["Signal transduction", "DNA transcription", "Protein translation", "Cell division"],
                en: ["Signal transduction", "DNA transcription", "Protein translation", "Cell division"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "التفاعل بين المستقبلات والروابط (Receptors & Ligands) يشبه نظرية:", 
                en: "The interaction between Receptors and Ligands is closely matched like:" 
            },
            opts: {
                ar: ["القفل والمفتاح (Key & Lock)", "الشمس والقمر", "المغناطيس (Magnet)", "التروس المتشابكة"],
                en: ["Key & Lock", "Sun & Moon", "Magnet", "Interlocking gears"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "*المستقبلات الداخلية* (Intracellular receptors) تتواجد في:", 
                en: "*Intracellular receptors* are located in:" 
            },
            opts: {
                ar: ["الغشاء البلازمي", "السيتوبلازم أو النواة", "الميتوكوندريا", "جدار الخلية"],
                en: ["Plasma membrane", "Cytoplasm or nucleus", "Mitochondria", "Cell wall"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "الروابط (Ligands) التي ترتبط بالمستقبلات *الداخلية* يجب أن تكون:", 
                en: "Ligands that bind to *intracellular* receptors must be:" 
            },
            opts: {
                ar: ["صغيرة وكارهة للماء (Small, hydrophobic)", "كبيرة ومحبة للماء (Large, hydrophilic)", "غازات مشحونة فقط", "بروتينات ضخمة"],
                en: ["Small, hydrophobic", "Large, hydrophilic", "Only charged gases", "Huge proteins"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "أي من التالي يُعد مثالاً على ربيطة ترتبط بمستقبل *داخلي* (Intracellular)؟", 
                en: "Which of the following is an example of a ligand that binds to an *intracellular* receptor?" 
            },
            opts: {
                ar: ["عوامل النمو (Growth factors)", "الإنسولين (Insulin)", "هرمونات الستيرويد (Steroid hormones)", "الجلايسين (Glycine)"],
                en: ["Growth factors", "Insulin", "Steroid hormones", "Glycine"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "كيف تنتقل الروابط الكارهة للماء (Hydrophobic ligands) في *مجرى الدم*؟", 
                en: "How do hydrophobic ligands travel in the *bloodstream*?" 
            },
            opts: {
                ar: ["تذوب مباشرة في بلازما الدم", "ترتبط ببروتينات ناقلة (Carrier proteins)", "تتحول إلى غازات", "عن طريق كرات الدم الحمراء فقط"],
                en: ["Dissolve directly in plasma", "Bind to carrier proteins", "Turn into gases", "Via RBCs only"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "الروابط التي تذوب في الماء (Water-soluble) ولا تعبر الغشاء البلازمي ترتبط بمستقبلات:", 
                en: "Water-soluble ligands that cannot cross the plasma membrane bind to:" 
            },
            opts: {
                ar: ["مستقبلات السيتوبلازم", "مستقبلات سطح الخلية (Cell-surface receptors)", "مستقبلات النواة", "مستقبلات الـ DNA"],
                en: ["Cytoplasm receptors", "Cell-surface receptors", "Nucleus receptors", "DNA receptors"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "أي من التالي هو جزيء *غاز* يعمل كربيطة (Ligand) يمكنه دخول الخلية؟", 
                en: "Which of the following is a *gas* molecule that acts as a ligand and can enter the cell?" 
            },
            opts: {
                ar: ["ثاني أكسيد الكربون", "النيتروجين", "أكسيد النيتريك (Nitric oxide)", "الأكسجين"],
                en: ["Carbon dioxide", "Nitrogen", "Nitric oxide (NO)", "Oxygen"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "الإنسولين وعوامل النمو (Growth factors) هي أمثلة على روابط ترتبط بـ:", 
                en: "Insulin and Growth factors are examples of ligands that bind to:" 
            },
            opts: {
                ar: ["مستقبلات سطح الخلية", "مستقبلات النواة", "مستقبلات السيتوبلازم", "مستقبلات الميتوكوندريا"],
                en: ["Cell-surface receptors", "Nucleus receptors", "Cytoplasm receptors", "Mitochondrial receptors"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "جميع ما يلي من تصنيفات مستقبلات سطح الخلية (Cell-surface receptors) *ما عدا*:", 
                en: "All of the following are classes of cell surface receptors *EXCEPT*:" 
            },
            opts: {
                ar: ["مستقبلات مقترنة بإنزيم (Enzyme-coupled)", "مستقبلات مقترنة بقناة أيونية (Ion-channel-coupled)", "مستقبلات الستيرويد (Steroid receptors)", "مستقبلات مقترنة ببروتين جي (G-protein-coupled)"],
                en: ["Enzyme-coupled receptors", "Ion-channel-coupled receptors", "Steroid receptors", "G-protein-coupled receptors"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "في حالة مريض مصاب بنوبة هلع (Panic Attack)، حيث تفرز الغدة الكظرية الإبينفرين في الدم ليصل للقلب والرئتين. ما هو نوع التواصل هنا؟", 
                en: "In a Panic Attack, the adrenal glands release Epinephrine into the blood affecting the heart and lungs. What signaling is this?" 
            },
            opts: {
                ar: ["Paracrine signaling", "Autocrine signaling", "Neuronal signaling", "Endocrine signaling"],
                en: ["Paracrine signaling", "Autocrine signaling", "Neuronal signaling", "Endocrine signaling"]
            },
            correct: 3
        },
        {
            q: { 
                ar: "*صح أم خطأ:* الإشارات العصبية (Neuronal) تنشر الإشارة على نطاق واسع في جميع أنحاء الجسم (Broadcasted widely).", 
                en: "*True or False:* Neuronal signaling broadcasts messages widely across the entire body." 
            },
            opts: {
                ar: ["صح", "خطأ (تصل بشكل محدد وخاص)"],
                en: ["True", "False (Delivered specifically and privately)"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "*صح أم خطأ:* في التواصل المباشر (Direct contact)، لا يتطلب الأمر إطلاق أي جزيئات مُفرَزة (secreted molecule).", 
                en: "*True or False:* In direct physical contact signaling, no secreted molecule is required." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "*صح أم خطأ:* مستقبلات الخلية السطحية (Cell-surface) تحتاج لروابط قادرة على عبور الغشاء البلازمي.", 
                en: "*True or False:* Cell-surface receptors need ligands that are able to cross the plasma membrane." 
            },
            opts: {
                ar: ["صح", "خطأ (لا تحتاج للعبور)"],
                en: ["True", "False (They don't need to cross)"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "*صح أم خطأ:* التواصل في الخلايا السرطانية التي تحفز نمو نفسها يُعتبر Paracrine.", 
                en: "*True or False:* Signaling in cancer cells that promote their own growth is considered Paracrine." 
            },
            opts: {
                ar: ["صح", "خطأ (هو Autocrine)"],
                en: ["True", "False (It is Autocrine)"]
            },
            correct: 1
        }
    ]
});