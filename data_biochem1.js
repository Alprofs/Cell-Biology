allLectures.push({
    id: "biochem_1",
    branch: "biochem",
    title: { 
        ar: "كيمياء الأحماض النووية (Nucleic Acids)", 
        en: "Nucleic Acids Chemistry" 
    },
    revision: [
        {
            title: { ar: "مقدمة ومكونات النيوكليوتيد", en: "Intro & Nucleotide Components" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "ما هي الأحماض النووية؟", en: "What are Nucleic Acids?" },
                    content: { 
                        ar: "هي جزيئات كبيرة (Macromolecules) أو بوليمرات تتكون من نيوكليوتيدات مرتبطة ببعضها بواسطة روابط *3’, 5’ phosphodiester bonds*.", 
                        en: "They are macromolecules or polymers of nucleotides linked by *3’, 5’ phosphodiester bonds*." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "مكونات النيوكليوتيد الثلاثة 🔄", en: "3 Components of Nucleotide 🔄" },
                    content: { 
                        ar: "1. قاعدة نيتروجينية (Nitrogenous base).\n2. سكر خماسي (Pentose sugar).\n3. مجموعة فوسفات (Phosphate group): وهي التي تمنح الـ DNA *شحنته السالبة*.", 
                        en: "1. Nitrogenous base.\n2. Pentose sugar.\n3. Phosphate group: provides the *negative charge* of DNA." 
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "Purines (البيورينات)", en: "Purines" },
                    val1: { ar: "تشمل قواعد: Adenine (A) و Guanine (G).", en: "Include: Adenine (A) & Guanine (G)." },
                    val2Title: { ar: "Pyrimidines (البيريميدينات)", en: "Pyrimidines" },
                    val2: { ar: "تشمل قواعد: Cytosine (C), Thymine (T), و Uracil (U) في الـ RNA فقط.", en: "Include: Cytosine (C), Thymine (T) & Uracil (U) in RNA only." }
                }
            ]
        },
        {
            title: { ar: "تركيب الـ DNA وتعبئته", en: "DNA Structure & Packaging" },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "الروابط بين القواعد (Bases)", en: "Bonds between Bases" },
                    val1: { ar: "يتم ربط السلسلتين المتقابلتين ببعضهما بواسطة *روابط هيدروجينية (Hydrogen bonds)*.", en: "The 2 antiparallel chains are joined by *Hydrogen bonds*." },
                    val2Title: { ar: "الروابط بين النيوكليوتيدات", en: "Bonds between Nucleotides" },
                    val2: { ar: "يتم ربط النيوكليوتيدات في نفس السلسلة (Backbone) بواسطة *Phosphodiester bonds*.", en: "The sugar-phosphate backbone is held by *Phosphodiester bonds*." }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "سؤال مقالي: ما هي قاعدة شارجاف؟", en: "Essay: What is Chargaff’s Rule?" },
                    content: { 
                        ar: "قاعدة شارجاف (Chargaff's Rule) تنص على أن نسبة الـ Adenine تساوي الـ Thymine (%A = %T)، ونسبة الـ Guanine تساوي الـ Cytosine (%G = %C). وبالتالي فإن نسبة البيورينات تساوي البيريميدينات (% purines = % pyrimidines).", 
                        en: "Chargaff's Rule states that %A = %T and %G = %C within a single strand. Therefore, % purines = % pyrimidines." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "تعبئة الـ DNA بروتينات (Histones)", en: "DNA Packaging (Histones)" },
                    content: { 
                        ar: "يتم تعبئة الـ DNA في النواة باستخدام بروتينات تسمى *الهستونات (Histones)*.\n- هي بروتينات صغيرة وقاعدية تحتوي على نسبة عالية من *Arginine و Lysine*.\n- لها 5 أنواع: H1, H2A, H2B, H3, H4.\n- يتكون *Histone octamer* (الذي يلتف حوله الـ DNA) من نسختين من: (H2A, H2B, H3 & H4).", 
                        en: "DNA is packed in the nucleus using *Histones*.\n- Small, basic proteins with high content of *Arginine and Lysine*.\n- 5 classes: H1, H2A, H2B, H3, H4.\n- *Histone octamer* is formed of 2 molecules of each: (H2A, H2B, H3 & H4)." 
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "Denaturation (التفكيك)", en: "Denaturation" },
                    val1: { ar: "الحرارة أو القلويات تفصل شريطي الـ DNA *دون* كسر روابط Phosphodiester.", en: "Heat or alkali separates DNA strands *without* breaking phosphodiester bonds." },
                    val2Title: { ar: "Renaturation (إعادة التكوين)", en: "Renaturation" },
                    val2: { ar: "التبريد البطيء يعيد ارتباط شريطي الـ DNA معاً مرة أخرى.", en: "Slow decrease of temperature allows the 2 strands to come back together." }
                }
            ]
        },
        {
            title: { ar: "الـ RNA وأنواعه والمقارنة", en: "RNA Types & Comparison" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "سؤال مقالي: ما هي أنواع الـ RNA ووظائفها؟", en: "Essay: Types and functions of RNA?" },
                    content: { 
                        ar: "1. **(mRNA)**: يحمل الشفرة الوراثية ويعمل كـ *قالب (template)* لعملية بناء البروتين.\n2. **(tRNA)**: يعمل كـ *ناقل (carrier)* للأحماض الأمينية المنشطة إلى الريبوسوم.\n3. **(rRNA)**: يعمل كـ *مصنع (factory)* لبناء البروتين في الريبوسومات.", 
                        en: "1. **(mRNA)**: Serves as a *template* for genetic info from DNA to protein synthesis.\n2. **(tRNA)**: Serves as a *carrier* for activated amino acids to the ribosome.\n3. **(rRNA)**: Acts as a *factory* for protein synthesis." 
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "DNA", en: "DNA" },
                    val1: { ar: "شريط مزدوج، سكر Deoxyribose، القواعد (A,T,G,C)، يوجد في النواة والميتوكوندريا، وظيفته تخزين الجينات.", en: "Double stranded, Deoxyribose sugar, Bases (A,T,G,C), Location: Nucleus & mitochondria. Function: Genetic storage." },
                    val2Title: { ar: "RNA", en: "RNA" },
                    val2: { ar: "شريط مفرد، سكر Ribose، القواعد (A,U,G,C)، يوجد في السيتوبلازم والنوية، وظيفته بناء البروتين.", en: "Single stranded, Ribose sugar, Bases (A,U,G,C), Location: Cytoplasm & nucleolus. Function: Protein synthesis." }
                }
            ]
        }
    ],
    quiz: [
        {
            q: { ar: "الروابط التي تربط النيوكليوتيدات ببعضها لتكوين الـ Macromolecules تسمى *........*؟", en: "Macromolecules or polymers of nucleotides are linked by *........*?" },
            opts: {
                ar: ["Hydrogen bonds", "3’, 5’ phosphodiester bonds", "Peptide bonds", "Ionic bonds"],
                en: ["Hydrogen bonds", "3’, 5’ phosphodiester bonds", "Peptide bonds", "Ionic bonds"]
            },
            correct: 1
        },
        {
            q: { ar: "الحرارة تؤدي إلى انفصال شريطي الـ DNA في عملية تسمى *........*؟", en: "The separation of DNA strands by heat is called *........*?" },
            opts: {
                ar: ["Renaturation", "Denaturation", "Hybridization", "Condensation"],
                en: ["Renaturation", "Denaturation", "Hybridization", "Condensation"]
            },
            correct: 1
        },
        {
            q: { ar: "أي من القواعد النيتروجينية التالية ينتمي إلى الـ *Purines*؟", en: "An example of nitrogenous base that belongs to *purines* is:" },
            opts: {
                ar: ["Cytosine", "Thymine", "Adenine", "Uracil"],
                en: ["Cytosine", "Thymine", "Adenine", "Uracil"]
            },
            correct: 2
        },
        {
            q: { ar: "أي من القواعد النيتروجينية التالية ينتمي إلى الـ *Purines*؟ (سؤال بصيغة أخرى)", en: "An example of nitrogenous base that belongs to *purines* is:" },
            opts: {
                ar: ["Cytosine", "Thymine", "Uracil", "Guanine"],
                en: ["Cytosine", "Thymine", "Uracil", "Guanine"]
            },
            correct: 3
        },
        {
            q: { ar: "يتم إنتاج *الشحنة السالبة* للـ DNA بواسطة:", en: "The *negative charge* of DNA is produced by:" },
            opts: {
                ar: ["القواعد النيتروجينية", "السكر الخماسي", "مجموعات الفوسفات", "الهستونات"],
                en: ["The nitrogenous bases", "The pentose sugars", "The phosphate groups", "The histones"]
            },
            correct: 2
        },
        {
            q: { ar: "يتكون الـ DNA من سلسلتين ترتبطان معاً بواسطة روابط ........ بين *القواعد النيتروجينية*.", en: "DNA is formed of 2 polynucleotide chains joined by ........ between the *nitrogen bases*." },
            opts: {
                ar: ["Hydrogen bonds", "Phosphodiester bonds", "Ionic bonds", "Sulfide bonds"],
                en: ["Hydrogen bonds", "Phosphodiester bonds", "Ionic bonds", "Sulfide bonds"]
            },
            correct: 0
        },
        {
            q: { ar: "في شريط الـ DNA الواحد، يتم ربط *النيوكليوتيدات* معاً لتكوين الهيكل بواسطة روابط:", en: "Each DNA strand is formed of polynucleotide chains joined by ........ between the *nucleotides*." },
            opts: {
                ar: ["Hydrogen bonds", "Phosphodiester bonds", "Ionic bonds", "Sulfide bonds"],
                en: ["Hydrogen bonds", "Phosphodiester bonds", "Ionic bonds", "Sulfide bonds"]
            },
            correct: 1
        },
        {
            q: { ar: "يتم تعبئة الـ DNA داخل النواة باستخدام أنواع خاصة من البروتينات تسمى *........*.", en: "DNA is *packed in to the nucleus* using special types of proteins called:" },
            opts: {
                ar: ["Globulins", "Albumins", "Histones", "Hemoglobin"],
                en: ["Globulins", "Albumins", "Histones", "Hemoglobin"]
            },
            correct: 2
        },
        {
            q: { ar: "يتكون مركب الـ *Histones octamer* (الثماني) من:", en: "Histones *octamer* is formed of:" },
            opts: {
                ar: ["(H1, H2B, H3& H4) مرتين", "(H2A, H2B, H3& H1) مرتين", "(H2A, H2B, H3& H4) + (H1, H2B, H3& H4)", "(H2A, H2B, H3& H4) + (H2A, H2B, H3& H4)"],
                en: ["(H1, H2B, H3& H4) twice", "(H2A, H2B, H3& H1) twice", "(H2A, H2B, H3& H4) + (H1, H2B, H3& H4)", "(H2A, H2B, H3& H4) + (H2A, H2B, H3& H4)"]
            },
            correct: 3
        },
        {
            q: { ar: "نوع الـ RNA الذي يعمل كـ *قالب (template)* لنقل المعلومات الوراثية من الـ DNA لبناء البروتين:", en: "A type of RNA that serves as a *template* for genetic information from DNA to protein biosynthesis:" },
            opts: {
                ar: ["Messenger RNA (mRNA)", "Transfer RNA (tRNA)", "Ribosomal RNA (rRNA)", "Micro RNAs"],
                en: ["Messenger RNA (mRNA)", "Transfer RNA (tRNA)", "Ribosomal RNA (rRNA)", "Micro RNAs"]
            },
            correct: 0
        },
        {
            q: { ar: "نوع الـ RNA الذي يعمل كـ *ناقل (carrier)* للأحماض الأمينية المنشطة إلى الريبوسوم:", en: "A type of RNA that serves as a *carrier* for activated amino acid into the ribosome:" },
            opts: {
                ar: ["Messenger RNA (mRNA)", "Transfer RNA (tRNA)", "Ribosomal RNA (rRNA)", "Micro RNAs"],
                en: ["Messenger RNA (mRNA)", "Transfer RNA (tRNA)", "Ribosomal RNA (rRNA)", "Micro RNAs"]
            },
            correct: 1
        },
        {
            q: { ar: "نوع الـ RNA الذي يعمل كـ *مصنع (factory)* لبناء البروتين:", en: "A type of RNA that acts as a *factory* for protein synthesis:" },
            opts: {
                ar: ["Messenger RNA (mRNA)", "Transfer RNA (tRNA)", "Ribosomal RNA (rRNA)", "Micro RNAs"],
                en: ["Messenger RNA (mRNA)", "Transfer RNA (tRNA)", "Ribosomal RNA (rRNA)", "Micro RNAs"]
            },
            correct: 2
        },
        {
            q: { ar: "(صح أم خطأ) يخزن الـ DNA *المعلومات الوراثية* في النواة والميتوكوندريا.", en: "(True or False) DNA Stores *genetic information* in the nucleus and mitochondria." },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { ar: "(صح أم خطأ) يتواجد الـ DNA بشكل أساسي في *السيتوبلازم*.", en: "(True or False) DNA is located primarily in the *cytoplasm*, with some in the nucleolus." },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1
        }
    ]
});