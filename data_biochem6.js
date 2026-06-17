allLectures.push({
    id: "biochem_6",
    branch: "biochem",
    title: { 
        ar: "المراجعة الشاملة (Mega Review) 🏆", 
        en: "Mega Review (Final Exam) 🏆" 
    },
    revision: [
        {
            title: { 
                ar: "1. العقيدة المركزية والجينات (Central Dogma & Genes)", 
                en: "1. Central Dogma & Genes" 
            },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "Central Dogma (العقيدة المركزية)", en: "Central Dogma" },
                    content: { 
                        ar: "هي مسار تدفق المعلومات الوراثية داخل الخلية: <br> تبدأ بـ *Replication* (تضاعف DNA) ⬅️ ثم *Transcription* (نسخ DNA إلى RNA) ⬅️ ثم *Translation* (ترجمة RNA إلى بروتين Protein).", 
                        en: "The flow of genetic information: <br> *Replication* (DNA ➔ DNA) ⬅️ *Transcription* (DNA ➔ RNA) ⬅️ *Translation* (RNA ➔ Protein)." 
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "مكونات النيوكليوتيد", en: "Nucleotide Components" },
                    val1: { 
                        ar: "1. قاعدة نيتروجينية (Nitrogenous base)<br>2. سكر خماسي (Pentose sugar)<br>3. مجموعة فوسفات (Phosphate group)", 
                        en: "1. Nitrogenous base<br>2. Pentose sugar<br>3. Phosphate group" 
                    },
                    val2Title: { ar: "مكونات الجين", en: "Gene Components" },
                    val2: { 
                        ar: "1. المحفز (*Promotor*): يبدأ النسخ<br>2. منطقة التشفير (*Coding region*): تشفر الـ RNA<br>3. المنهي (*Terminator*): يوقف النسخ", 
                        en: "1. *Promotor*: initiates transcription<br>2. *Coding region*: codes for RNA<br>3. *Terminator*: signal to stop" 
                    }
                }
            ]
        },
        {
            title: { 
                ar: "2. إنزيمات ليلة الامتحان (Key Enzymes)", 
                en: "2. Key Enzymes (Exam Night)" 
            },
            branches: [
                {
                    type: "flip",
                    nodeTitle: { ar: "DNA Helicase & SSB 🔄", en: "DNA Helicase & SSB 🔄" },
                    content: { 
                        ar: "الـ *Helicase* يقوم بفك التواء شريطي الـ DNA.<br>أما بروتينات *SSB* فتقوم بتثبيت الأشرطة المفصولة وتمنع إعادة ارتباطها (prevents reassociation).", 
                        en: "*Helicase* unwinds the DNA double helix.<br>*SSB proteins* stabilize the separated strands and prevent their reassociation." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "RNA Polymerase (Sigma Factor) 🔄", en: "RNA Polymerase (Sigma Factor) 🔄" },
                    content: { 
                        ar: "في بدائيات النواة، وحدة *Sigma factor* هي المسؤولة عن التعرف والارتباط بمنطقة الـ *Promoter* لبدء عملية النسخ.", 
                        en: "In prokaryotes, the *Sigma factor* subunit is responsible for binding of the RNA-polymerase to the *promoter* region." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "Aminoacyl tRNA synthetase 🔄", en: "Aminoacyl tRNA synthetase 🔄" },
                    content: { 
                        ar: "هو الإنزيم الذي ينشط الأحماض الأمينية في السيتوسول ويربطها بـ *tRNA* الخاص بها باستخدام طاقة ATP.", 
                        en: "The enzyme that activates amino acids in the cytosol and attaches them to their respective *tRNA* at the expense of ATP." 
                    }
                }
            ]
        },
        {
            title: { 
                ar: "3. المقارنات الذهبية والتعديلات (Golden Comparisons)", 
                en: "3. Golden Comparisons & Processing" 
            },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "Replication (التضاعف)", en: "Replication Requirements" },
                    val1: { 
                        ar: "يحتاج إلى:<br>- قالب DNA<br>- نيوكليوتيدات منقوصة الأكسجين وغيرها<br>- إنزيمات: Polymerase, Helicase, Ligase, Primase, SSB.", 
                        en: "Requires:<br>- DNA Template<br>- Substrates (Deoxy & ribonucleotides)<br>- Enzymes: Polymerase, Helicase, Ligase, Primase, SSB." 
                    },
                    val2Title: { ar: "Translation (الترجمة)", en: "Translation Requirements" },
                    val2: { 
                        ar: "تحتاج إلى:<br>- *mRNA* (الرسالة)<br>- *tRNAs* (الناقل)<br>- *Ribosomes* (المصنع)<br>- طاقة (ATP & GTP)<br>- عوامل مساعدة (Enzymes & Factors).", 
                        en: "Requires:<br>- *mRNA*<br>- *tRNAs*<br>- *Ribosomes*<br>- Energy (ATP & GTP)<br>- Enzymes and protein factors." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "تعديلات ما بعد النسخ لـ mRNA (Post-transcriptional Mod)", en: "mRNA Post-transcriptional Processing" },
                    content: { 
                        ar: "لتحويل الـ RNA الأولي إلى فعال يجب أن يمر بـ 3 مراحل:<br>1. إضافة القبعة (*5'-capping*)<br>2. التضفير (*Splicing*): إزالة الإنترونات وربط الإكسونات.<br>3. إضافة ذيل بولي إيه (*Poly-A tail*)", 
                        en: "To convert primary mRNA to functional form:<br>1. *5'-capping*<br>2. *Splicing*: removal of introns and joining of exons.<br>3. *Poly-A tail* addition." 
                    }
                }
            ]
        },
        {
            title: { 
                ar: "4. إشارات الخلية والمستقبلات (Cell Signaling & Receptors)", 
                en: "4. Cell Signaling & Receptors" 
            },
            branches: [
                {
                    type: "table",
                    content: {
                        ar: `<table>
                                <tr><th>نوع الإشارة (Signaling)</th><th>الوصف والمثال (Description & Example)</th></tr>
                                <tr><td>*Endocrine* (غدد صماء)</td><td>مسافات طويلة عبر مجرى الدم. (مثل: *Epinephrine*, Insulin).</td></tr>
                                <tr><td>*Paracrine* (إشارات مجاورة)</td><td>تأثير محلي على الخلايا المجاورة. (مثل: الالتهابات Inflammation).</td></tr>
                                <tr><td>*Autocrine* (إشارات ذاتية)</td><td>الخلية تفرز إشارة وتستقبلها بنفسها! (مثل: الخلايا السرطانية *Tumor cells*).</td></tr>
                                <tr><td>*Neuronal* (عصبية)</td><td>سريعة وخاصة عبر محاور الخلايا العصبية. (مثل: الأعصاب للحبل الشوكي).</td></tr>
                            </table>`,
                        en: `<table>
                                <tr><th>Signaling Form</th><th>Description & Example</th></tr>
                                <tr><td>*Endocrine*</td><td>Long distances via bloodstream. (e.g., *Epinephrine*, Insulin).</td></tr>
                                <tr><td>*Paracrine*</td><td>Local mediators on nearby cells. (e.g., Inflammation).</td></tr>
                                <tr><td>*Autocrine*</td><td>Cell responds to its own signals! (e.g., *Cancer/Tumor cells*).</td></tr>
                                <tr><td>*Neuronal*</td><td>Fast, specific delivery via private lines (axons).</td></tr>
                            </table>`
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "Intracellular Receptors", en: "Intracellular Receptors" },
                    val1: { 
                        ar: "داخل السيتوبلازم أو النواة.<br>الرابط (*Ligand*) يجب أن يكون صغيراً وكارهاً للماء (Hydrophobic) ليعبر الغشاء.<br>مثال: *Steroid hormones* و *Sex hormones*.", 
                        en: "In cytoplasm or nucleus.<br>*Ligand* must be small & hydrophobic to cross membrane.<br>Example: *Steroid hormones* & Sex hormones." 
                    },
                    val2Title: { ar: "Cell-Surface Receptors", en: "Cell-Surface Receptors" },
                    val2: { 
                        ar: "على سطح الغشاء البلازمي.<br>الرابط (*Ligand*) لا يحتاج لعبور الغشاء (محبة للماء Hydrophilic).<br>مثال: *Growth factors* و *Insulin*.", 
                        en: "On the surface of the cell.<br>*Ligand* doesn't need to cross the membrane (Water-soluble).<br>Example: *Growth factors* & *Insulin*." 
                    }
                }
            ]
        }
    ],
    quiz: [
        {
            q: { 
                ar: "مريض تم نقله للطوارئ بنبض سريع بسبب إفراز الغدة الكظرية لـ *Epinephrine* في *مجرى الدم* لتؤثر على القلب والرئة. ما هو نوع الإشارة؟", 
                en: "A patient with a racing heart from *Epinephrine* released into the *bloodstream* affecting the heart and lungs. Which signaling form is this?" 
            },
            opts: {
                ar: ["Endocrine signaling (غدد صماء)", "Paracrine signaling (مجاورة)", "Autocrine signaling (ذاتية)", "Neuronal signaling (عصبية)"],
                en: ["Endocrine signaling", "Paracrine signaling", "Autocrine signaling", "Neuronal signaling"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "خلية ورمية (*Tumor cell*) تفرز عامل نمو وتمتلك *مستقبلات لنفس العامل* على غشائها لتنقسم بجنون. ما هو نوع الإشارة؟", 
                en: "A *tumor cell* is secreting a Growth Factor and has *receptors for it* on its own membrane to divide uncontrollably. Which signaling form is this?" 
            },
            opts: {
                ar: ["Paracrine signaling", "Autocrine signaling (ذاتية)", "Endocrine signaling", "Direct physical contact"],
                en: ["Paracrine signaling", "Autocrine signaling", "Endocrine signaling", "Direct physical contact"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "العملية التي يؤدي فيها ارتباط الـ *Ligand* بمستقبلات محددة إلى استجابة خلوية تسمى بـ ...؟", 
                en: "The process by which a *ligand* binding to specific receptors results in a cellular response is termed...?" 
            },
            opts: {
                ar: ["Cell cycle", "Cell adhesion", "Signal transduction (نقل الإشارة)", "Cell transformation"],
                en: ["Cell cycle", "Cell adhesion", "Signal transduction", "Cell transformation"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "أي من الروابط (Ligands) التالية يمكنه *اختراق الغشاء البلازمي* إلى داخل الخلية؟", 
                en: "One of these ligands can *penetrate the plasma membrane* into the inside of the cell:" 
            },
            opts: {
                ar: ["Growth factors", "Insulin hormone", "Glycine", "Steroid hormones (الهرمونات الستيرويدية)"],
                en: ["Growth factors", "Insulin hormone", "Glycine", "Steroid hormones"]
            },
            correct: 3
        },
        {
            q: { 
                ar: "يتكون DNA من سلسلتين مرتبطتين بـ *...* بين القواعد النيتروجينية.", 
                en: "DNA is formed of 2 polynucleotide chains joined by *...* between the nitrogenous bases." 
            },
            opts: {
                ar: ["Hydrogen bonds (روابط هيدروجينية)", "Phosphodiester bonds", "Ionic bonds", "Sulfide bonds"],
                en: ["Hydrogen bonds", "Phosphodiester bonds", "Ionic bonds", "Sulfide bonds"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "في عملية التضاعف، ما هو الإنزيم/البروتين الذي *يثبت السلاسل المفصولة* ويمنع إعادة ارتباطها؟", 
                en: "During replication, what *stabilizes the separated strands* and prevents their reassociation?" 
            },
            opts: {
                ar: ["SSB protein", "DNA primer", "Okazaki fragments", "DNA A protein"],
                en: ["Single stranded binding (SSB) protein", "DNA primer", "Okazaki fragments", "DNA A protein"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "عامل *Sigma factor* في إنزيم RNA polymerase في بدائيات النواة مسؤول عن ...؟", 
                en: "The *sigma factor* in a prokaryotic RNA polymerase is responsible for...?" 
            },
            opts: {
                ar: ["فك التواء DNA", "التعرف على المحفز (Recognition of promoter)", "ربط أجزاء أوكازاكي", "إنهاء عملية النسخ"],
                en: ["Unwinding DNA", "Recognition of promoter", "Joining Okazaki fragments", "Termination of transcription"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "المصطلح العلمي لعملية *إزالة الإنترونات (introns)* وربط الإكسونات لإنتاج RNA فعال هو:", 
                en: "What is the scientific term for the *removal of introns* and joining of exons of a primary transcript?" 
            },
            opts: {
                ar: ["5'-capping", "Terminal addition", "Splicing (التضفير)", "Nucleoside modification"],
                en: ["5'-capping", "Terminal addition", "Splicing", "Nucleoside modification"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "عملية تحويل *mRNA إلى بروتين* تسمى بـ ...؟", 
                en: "The conversion of *mRNA into a protein* is called...?" 
            },
            opts: {
                ar: ["Translation (الترجمة)", "Transcription (النسخ)", "Replication (التضاعف)", "Denaturation (التمسخ)"],
                en: ["Translation", "Transcription", "Replication", "Denaturation"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "وفقاً لعقيدة البيولوجيا الجزيئية (Central Dogma)، أي الجمل التالية صحيحة؟", 
                en: "The *central dogma* of molecular biology means...?" 
            },
            opts: {
                ar: ["نسخ فقط", "ترجمة فقط", "Replication, transcription and translation.", "Replication and Translation only"],
                en: ["Translation only", "Transcription only", "Replication, transcription and translation.", "Replication and Translation only"]
            },
            correct: 2
        }
    ]
});