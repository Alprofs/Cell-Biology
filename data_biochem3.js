allLectures.push({
    id: "biochem_3",
    branch: "biochem", 
    title: { 
        ar: "المحاضرة الثالثة: عملية النسخ (DNA Transcription)", 
        en: "Lecture 3: DNA Transcription" 
    },
    
    // ==========================================
    // قسم المراجعة والشرح (Review & Essay Questions)
    // ==========================================
    revision: [
        {
            title: { ar: "أساسيات بناء البروتين والنسخ", en: "Basics of Protein Synthesis & Transcription" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "مقدمة هامة 🧬", en: "Important Introduction 🧬" },
                    content: { 
                        ar: "عملية بناء البروتين تتكون من خطوتين أساسيتين: *Transcription* (النسخ) و *Translation* (الترجمة).<br><br>• **النسخ (Transcription):** هو عملية نقل المعلومات المخزنة في الـ DNA المزدوج إلى RNA مفرد، وتحدث هذه العملية داخل *النواة (Nucleus)*.", 
                        en: "Protein synthesis involves 2 processes: *Transcription* and *Translation*.<br><br>• **Transcription:** is the transfer of information stored in double-stranded DNA into a single-stranded RNA, occurring in the *Nucleus*." 
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "مكونات الجين (Gene) ومتطلبات النسخ 🔄", en: "Gene Components & Requirements 🔄" },
                    content: { 
                        ar: "يتكون الجين من 3 أجزاء:<br>1. *Promotor*: يبدأ عملية النسخ.<br>2. *Coding region*: ينسخ لإنتاج (mRNA, rRNA, tRNA).<br>3. *Terminator*: يوقف النسخ.<br><br>**متطلبات النسخ:** شريط DNA كقالب، نيوكليوتيدات RNA (Substrates)، وإنزيم *RNA polymerase*.", 
                        en: "Gene consists of 3 parts:<br>1. *Promotor*: initiates transcription.<br>2. *Coding region*: codes for (mRNA, rRNA, tRNA).<br>3. *Terminator*: signal to stop.<br><br>**Requirements:** Template DNA, Ribonucleotides, and *RNA polymerase* enzyme." 
                    }
                }
            ]
        },
        {
            title: { ar: "أشرطة الـ DNA (DNA Template)", en: "DNA Template Strands" },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "Coding Strand (الشريط المشفر)", en: "Coding Strand" },
                    val1: { 
                        ar: "• اتجاهه: *5' إلى 3'*<br>• يسمى أيضاً: Sense strand أو Non-template strand.<br>• *لا يتم* استخدامه كقالب فعلي للنسخ.", 
                        en: "• Direction: *5' to 3'*<br>• Also called: Sense strand or Non-template strand.<br>• *Not* actually transcribed into RNA." 
                    },
                    val2Title: { ar: "Non-coding Strand (الشريط غير المشفر)", en: "Non-coding Strand" },
                    val2: { 
                        ar: "• اتجاهه: *3' إلى 5'*<br>• يسمى أيضاً: *Template strand* أو Antisense strand.<br>• هو الشريط الذي يتم *نسخه فعلياً* لإنتاج الـ RNA.", 
                        en: "• Direction: *3' to 5'*<br>• Also called: *Template strand* or Antisense strand.<br>• The strand *actually transcribed* into RNA." 
                    }
                }
            ]
        },
        {
            title: { ar: "الاختلافات وإنزيم البوليميريز", en: "Differences & Polymerase Enzyme" },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "بدائيات النواة (Prokaryotes)", en: "Prokaryotes" },
                    val1: { 
                        ar: "تمتلك إنزيم *RNA polymerase واحد فقط* يقوم بنسخ جميع أنواع الـ RNA الثلاثة.", 
                        en: "Have a *single RNA polymerase* that transcribes all 3 RNAs." 
                    },
                    val2Title: { ar: "حقيقيات النواة (Eukaryotes)", en: "Eukaryotes" },
                    val2: { 
                        ar: "تمتلك *3 أنواع* من إنزيم RNA polymerases، كل نوع مسؤول عن نسخ نوع محدد من الـ RNA.", 
                        en: "Have *3 types* of RNA polymerases, each responsible for transcribing one type of RNA." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "سؤال مقالي: تركيب إنزيم RNA Polymerase في بدائيات النواة 📝", en: "Essay: Structure of prokaryotic RNA polymerase 📝" },
                    content: { 
                        ar: "يتكون من جزئين أساسيين:<br>1. **Core enzyme (الإنزيم الأساسي):** يتكون من 4 وحدات فرعية (2α, β, β').<br>2. **Sigma subunit (وحدة سيجما):** الوحدة الخامسة التي تتحد مع الإنزيم الأساسي لتكوين الإنزيم النشط (Holoenzyme). وظيفة *سيجما* هي التعرف والارتباط بمنطقة الـ *Promoter* على الـ DNA لبدء النسخ.", 
                        en: "Consists of two main parts:<br>1. **Core enzyme:** consists of 4 subunits (2α, β, β').<br>2. **Sigma subunit:** the 5th subunit that makes the active enzyme (holoenzyme). The *sigma* subunit is required for binding the enzyme to the *promoter* region of the DNA template." 
                    }
                }
            ]
        },
        {
            title: { ar: "تعديلات ما بعد النسخ (Post-transcriptional Mod)", en: "Post-transcriptional Modifications" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "سؤال مقالي: أنواع التعديلات 📝", en: "Essay: Types of modifications 📝" },
                    content: { 
                        ar: "الـ RNA الأولي يحتاج لعمليات تحويل ليصبح فعالاً، وتشمل 4 أنواع أساسية (إجابة السؤال المقالي الأول):<br>1. *Cleavage* (الانقسام بواسطة إنزيمات nuclease).<br>2. *Splicing* (إزالة الأجزاء غير المشفرة Introns، وربط الأجزاء المشفرة Exons).<br>3. *Terminal addition* (إضافة نيوكليوتيدات للأطراف).<br>4. *Nucleoside modifications* (تعديلات النيوكليوسيد).<br><br>إجابة السؤال المقالي الثاني (تعديلات تكوين mRNA):<br>1. **5'-capping**.<br>2. **Splicing**.<br>3. **Poly-A tail**.", 
                        en: "Primary RNA needs processing to become functional. The 4 types (Answer to Essay 1):<br>1. *Cleavage* by endo/exonuclease.<br>2. *Splicing* (removing non-coding introns and joining exons).<br>3. *Terminal addition* of nucleotides.<br>4. *Nucleoside modifications*.<br><br>Answer to Essay 2 (Modifications to form mRNA):<br>1. **5'-capping**.<br>2. **Splicing**.<br>3. **Poly-A tail**." 
                    }
                }
            ]
        }
    ],

    // ==========================================
    // قسم الأسئلة (MCQ & True/False)
    // ==========================================
    quiz: [
        {
            q: { 
                ar: "عملية نسخ جزئ الـ *DNA* وتحويله إلى جزئ *RNA* تُسمى.......", 
                en: "The coping of *DNA molecule* into an RNA molecule is called......." 
            },
            opts: {
                ar: ["الترجمة (Translation)", "النسخ (Transcription)", "التضاعف (Replication)", "تمسخ (Denaturation)"],
                en: ["Translation", "Transcription", "Replication", "Denaturation"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "عملية *بناء البروتين* تتضمن عمليتين هما....... و .......", 
                en: "*Protein synthesis* involves 2 processes.......and......." 
            },
            opts: {
                ar: ["النسخ والتضاعف", "الترجمة والتضاعف", "النسخ والترجمة (Transcription and translation)", "التمسخ وإعادة التشكيل"],
                en: ["Transcription and replication", "Translation and replication", "Transcription and translation", "Denaturation and renaturation"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "عملية *النسخ (Transcription)* لجزيء الـ DNA تحدث في الـ ......", 
                en: "*Transcription* of the DNA process occurs in the ......" 
            },
            opts: {
                ar: ["السيتوبلازم", "الميتوكوندريا", "الشبكة الإندوبلازمية", "النواة (Nucleus)"],
                en: ["Cytoplasm", "Mitochondria", "Endoplasmic reticulum", "Nucleus"]
            },
            correct: 3
        },
        {
            q: { 
                ar: "أحد هذه المكونات *غير مطلوب* في عملية نسخ الـ DNA.", 
                en: "A component that is *not required* for transcription of DNA." 
            },
            opts: {
                ar: ["النيوكليوتيدات (Ribonucleotides)", "قالب الـ DNA", "إنزيم DNA polymerases", "إنزيم RNA polymerases"],
                en: ["Ribonucleotides", "Template DNA", "DNA polymerases enzyme", "RNA polymerases enzyme"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "الـ *Coding region* في الجين، تقوم بتكوين شفرات لـ ......", 
                en: "The *coding region* in gene codes for......" 
            },
            opts: {
                ar: ["mRNA فقط", "rRNA فقط", "tRNA فقط", "جميع أنواع الـ RNA"],
                en: ["mRNA", "rRNA", "tRNA", "all RNA types"]
            },
            correct: 3
        },
        {
            q: { 
                ar: "نسخ الـ DNA في بدائيات النواة وحقيقيات النواة *يختلف* في الـ ......", 
                en: "DNA transcription in prokaryotes and eukaryotes is *different* in the ......" 
            },
            opts: {
                ar: ["Terminator", "Coding region", "المراحل (Stages)", "الإنزيمات (Enzymes)"],
                en: ["Terminator", "Coding region", "Stages", "Enzymes"]
            },
            correct: 3
        },
        {
            q: { 
                ar: "في عملية نسخ الـ DNA، الشريط الذي يتم *نسخه فعلياً* ليصبح RNA يُسمى شريط.......", 
                en: "In DNA transcription, the strand that *actually transcribed* into RNA is called.......strand." 
            },
            opts: {
                ar: ["Coding strand", "Sense strand", "Non-template strand", "Non-coding (أو Template strand)"],
                en: ["Coding strand", "Sense strand", "Non-template strand", "Non-coding"]
            },
            correct: 3
        },
        {
            q: { 
                ar: "الشريط المسمى *coding strand* يتميز بأنه................", 
                en: "The *coding strand* is characterised by................" 
            },
            opts: {
                ar: ["يمتد في الاتجاه من 5' إلى 3'", "يسمى بشريط القالب (Template)", "يسمى بالشريط المعاكس (Antisense)", "هو الذي يتم نسخه إلى RNA"],
                en: ["Being in the direction of 5’ to 3’", "Called a template strand", "Called as antisense strand", "Being transcribed into the RNA"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "(صح أم خطأ) *حقيقيات النواة (Eukaryotes)* تمتلك إنزيم RNA polymerase واحد فقط ينسخ جميع الأنواع الثلاثة.", 
                en: "(True/False) *Eukaryotes* have single RNA polymerase that transcribes all 3 RNAs." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "(صح أم خطأ) وحدة *سيجما (sigma subunit)* مطلوبة لربط الإنزيم بمنطقة المحفز (promoter) على الـ DNA.", 
                en: "(True/False) The *sigma subunit* is required for binding of the RNA-polymerase to promoter region of DNA template." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "(صح أم خطأ) تسلسلات *المحفز (Promoter sequences)* مسؤولة عن توجيه الإنزيم لبدء النسخ من نقطة محددة.", 
                en: "(True/False) *Promoter sequences* are responsible for directing RNA polymerase to initiate transcription at a particular point." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0
        }
    ]
});