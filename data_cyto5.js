allLectures.push({
    id: "cyto_5",
    branch: "cyto",
    title: { 
        ar: "المحاضرة الخامسة: دورة الخلية وموت الخلية", 
        en: "Lecture 5: Cell Cycle & Cell Death" 
    },
    revision: [
        {
            title: { ar: "دورة الخلية ومراحلها", en: "Cell Cycle & Phases" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "تعريف دورة الخلية (Cell Cycle)", en: "Cell Cycle Definition" },
                    content: { 
                        ar: "هي *التسلسل المنتظم للأحداث* التي تؤدي إلى تكوين خلايا جديدة.", 
                        en: "The *regular sequence of events* that result in new cells." 
                    }
                },
                {
                    type: "table",
                    content: {
                        ar: `
                        <table>
                            <tr><th>المرحلة (Phase)</th><th>الخصائص (Characteristics)</th></tr>
                            <tr><td><b>G1 Phase</b></td><td>أطول مرحلة وأكثرها تغيراً، يحدث فيها تصنيع نشط للبروتين و RNA، ولا يزداد محتوى الـ DNA.</td></tr>
                            <tr><td><b>S Phase</b></td><td>فترة *تضاعف الـ DNA* وتكوين الهيستون، كل كروموسوم يتكون من 2 كروماتيد (Double chromosomes).</td></tr>
                            <tr><td><b>G2 Phase</b></td><td>فترة نمو أخرى تتراكم فيها البروتينات اللازمة لعملية الانقسام الميتوزي.</td></tr>
                            <tr><td><b>M Phase (Mitosis)</b></td><td>تنتظم الكروموسومات في المنتصف وتنفصل إلى مجموعتين متطابقتين لتكوين خلايا ابنة (Daughter cells).</td></tr>
                        </table>`,
                        en: `
                        <table>
                            <tr><th>Phase</th><th>Characteristics</th></tr>
                            <tr><td><b>G1 Phase</b></td><td>Longest & most variable. Active RNA and protein synthesis. No increase in DNA.</td></tr>
                            <tr><td><b>S Phase</b></td><td>*DNA replication*, histone synthesis. Chromosomes become double chromatids.</td></tr>
                            <tr><td><b>G2 Phase</b></td><td>Another period of growth. Proteins required for mitosis accumulate.</td></tr>
                            <tr><td><b>M Phase (Mitosis)</b></td><td>Chromosomes align and separate into two identical sets to form new daughter cells.</td></tr>
                        </table>`
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "نقاط الفحص (Checkpoints)", en: "Checkpoints" },
                    content: { 
                        ar: "تحتوي كل مرحلة على نقطة فحص أو أكثر للتحقق من *جودة* أنشطة الخلية المحددة قبل الانتقال للمرحلة التالية.", 
                        en: "Each phase has one or more checkpoints where the *quality* of specific cell activities is checked." 
                    }
                }
            ]
        },
        {
            title: { ar: "تطور الخلية (Cell Development)", en: "Cell Development" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "المراحل الرئيسية الثلاث", en: "Three Major Stages" },
                    content: { 
                        ar: "1. <b>النمو (Growth):</b> زيادة في الكتلة والعدد نتيجة الانقسام الميتوزي.<br>2. <b>التمايز (Differentiation):</b> العملية التي تكتسب فيها الخلية ميزات ووظائف جديدة.<br>3. <b>التكامل (Integration):</b> العملية التي تبقي النمو والتمايز في حالة انسجام وتناغم.", 
                        en: "1. <b>Growth:</b> Increase in mass & number (result of mitosis).<br>2. <b>Differentiation:</b> Process to achieve new features and functions.<br>3. <b>Integration:</b> Process keeping growth and differentiation in harmony." 
                    }
                }
            ]
        },
        {
            title: { ar: "موت الخلية (Cell Death)", en: "Cell Death" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "تعريف موت الخلية", en: "Cell Death Definition" },
                    content: { 
                        ar: "هو *التوقف التام الذي لا رجعة فيه* للأنشطة الحيوية داخل الخلية.", 
                        en: "The *irreversible cessation* of vital activities inside the cell." 
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "Apoptosis (الموت المبرمج)", en: "Apoptosis" },
                    val1: { 
                        ar: "- موت طبيعي بسبب جينات داخلية.<br>- الخلية *ينكمش حجمها* (Decreases in volume).<br>- العضيات تبقى سليمة (Normal).<br>- الغشاء يحدث له فقاعات (Blebbing).<br>- تتكون أجسام (Apoptotic bodies) تبتلعها الخلايا المجاورة.", 
                        en: "- Normal cell death due to internal genetic info.<br>- Cell *decreases in volume* (shrinks).<br>- Organoids remain normal.<br>- Membrane undergoes *blebbing*.<br>- Forms apoptotic bodies phagocytosed by neighbors." 
                    },
                    val2Title: { ar: "Necrosis (الموت النخري)", en: "Necrosis" },
                    val2: { 
                        ar: "- موت بسبب عوامل خارجية (إصابة، سموم، نقص أكسجين).<br>- الخلية *تنتفخ* (Swells).<br>- العضيات تتدمر (Destroyed).<br>- الغشاء يتمزق (Breakdown).<br>- تنفجر الخلية (Lysis) وتتثر محتوياتها.", 
                        en: "- Death due to exogenous factors (injury, toxins).<br>- Cell *swells*.<br>- Organoids are destroyed.<br>- Membrane undergoes *breakdown*.<br>- Cell bursts (lysis), contents scattered." 
                    }
                }
            ]
        },
        {
            title: { ar: "أسئلة المقالي والمصطلحات (Essay & Scientific Terms)", en: "Essay & Scientific Terms" },
            branches: [
                {
                    type: "flip",
                    nodeTitle: { ar: "مصطلح: تسلسل منتظم يؤدي لخلايا جديدة 🔄", en: "Term: Regular sequence resulting in new cells 🔄" },
                    content: { ar: "دورة الخلية (Cell Cycle)", en: "Cell Cycle" }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "مصطلح: نقاط فحص جودة أنشطة الخلية 🔄", en: "Term: Sites checking quality of cell activities 🔄" },
                    content: { ar: "نقاط الفحص (Checkpoints)", en: "Checkpoints" }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "مصطلح: عملية اكتساب ميزات ووظائف جديدة 🔄", en: "Term: Process to acquire new features and functions 🔄" },
                    content: { ar: "التمايز (Differentiation)", en: "Differentiation" }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "مصطلح: التوقف التام للأنشطة الحيوية 🔄", en: "Term: Irreversible cessation of vital activities 🔄" },
                    content: { ar: "موت الخلية (Cell Death)", en: "Cell Death" }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "سؤال: عدد مراحل دورة الخلية (Enumerate Phases of cell cycle)", en: "Enumerate: Phases of the cell cycle" },
                    content: { ar: "1. G1 phase<br>2. S phase<br>3. G2 phase<br>4. M phase (Mitosis)", en: "1. G1 phase<br>2. S phase<br>3. G2 phase<br>4. M phase (Mitosis)" }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "سؤال: عدد أنواع موت الخلية (Enumerate Types of Cell Death)", en: "Enumerate: Types of Cell Death" },
                    content: { ar: "1. Apoptosis (موت مبرمج طبيعي)<br>2. Necrosis (موت بسبب إصابة أو سموم)", en: "1. Apoptosis<br>2. Necrosis" }
                }
            ]
        }
    ],
    quiz: [
        // MCQs
        {
            q: { 
                ar: "التسلسل المنتظم للأحداث الذي يؤدي إلى *خلايا جديدة* يسمى:", 
                en: "The regular sequence of events that results in *new cells* is called:" 
            },
            opts: {
                ar: ["التمايز (Differentiation)", "دورة الخلية (Cell cycle)", "النخر (Necrosis)", "التكامل (Integration)"],
                en: ["Differentiation", "Cell cycle", "Necrosis", "Integration"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "أي مرحلة تتميز بـ *تضاعف الـ DNA* (DNA replication)؟", 
                en: "Which phase is characterized by *DNA replication*?" 
            },
            opts: {
                ar: ["G1 phase", "G2 phase", "S phase", "M phase"],
                en: ["G1 phase", "G2 phase", "S phase", "M phase"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "*أطول وأكثر مرحلة متغيرة* (longest and most variable) في دورة الخلية هي:", 
                en: "The *longest and most variable* phase of the cell cycle is:" 
            },
            opts: {
                ar: ["G1 phase", "S phase", "G2 phase", "M phase"],
                en: ["G1 phase", "S phase", "G2 phase", "M phase"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "خلال أي مرحلة يحدث تصنيع نشط للـ *RNA والبروتين*؟", 
                en: "During which phase does active *RNA and protein synthesis* occur?" 
            },
            opts: {
                ar: ["S phase", "G1 phase", "M phase", "Apoptosis"],
                en: ["S phase", "G1 phase", "M phase", "Apoptosis"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "في نهاية مرحلة الـ S، تكون *الكروموسومات*:", 
                en: "At the end of the S phase, *chromosomes* are:" 
            },
            opts: {
                ar: ["مدمرة", "أحادية الشريط", "تتكون من اثنين كروماتيد (Double chromatids)", "غير مرئية"],
                en: ["Destroyed", "Single stranded", "Formed of two chromatids", "Invisible"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "تتراكم *البروتينات المطلوبة للانقسام* (Mitosis) خلال مرحلة:", 
                en: "*Proteins required for mitosis* accumulate during:" 
            },
            opts: {
                ar: ["G1 phase", "S phase", "G2 phase", "Necrosis"],
                en: ["G1 phase", "S phase", "G2 phase", "Necrosis"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "الانقسام الميتوزي (Mitosis) هو المرحلة التي:", 
                en: "Mitosis is the phase in which:" 
            },
            opts: {
                ar: ["يتضاعف فيها الـ DNA", "تنفصل الكروموسومات إلى مجموعتين متطابقتين", "يحدث فيها تمايز الخلايا", "يتوقف فيها بناء البروتين"],
                en: ["DNA replication occurs", "Chromosomes separate into two identical sets", "Cell differentiation occurs", "Protein synthesis stops"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "نقاط فحص دورة الخلية (Checkpoints) مسؤولة عن:", 
                en: "Cell cycle *checkpoints* are responsible for:" 
            },
            opts: {
                ar: ["حركة الخلية", "تصنيع الدهون", "التحقق من جودة أنشطة الخلية", "تكوين الريبوسومات"],
                en: ["Cell movement", "Lipid synthesis", "Checking the quality of cell activities", "Formation of ribosomes"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "التمايز (Differentiation) هو العملية التي من خلالها:", 
                en: "*Differentiation* is the process by which:" 
            },
            opts: {
                ar: ["تموت الخلايا", "يتم تحقيق ميزات ووظائف جديدة", "يتضاعف الـ DNA", "تنكمش الخلايا"],
                en: ["Cells die", "New features and functions are achieved", "DNA is replicated", "Cells shrink"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "موت الخلية بسبب *أنشطة جينية داخلية* (طبيعي) يسمى:", 
                en: "Cell death due to *internal genetic activities* is called:" 
            },
            opts: {
                ar: ["النخر (Necrosis)", "الموت المبرمج (Apoptosis)", "الانقسام (Mitosis)", "التكامل (Integration)"],
                en: ["Necrosis", "Apoptosis", "Mitosis", "Integration"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "موت الخلية الناتج عن *الإصابة أو السموم* يسمى:", 
                en: "Cell death caused by *injury or toxins* is called:" 
            },
            opts: {
                ar: ["Apoptosis", "Differentiation", "Necrosis", "Growth"],
                en: ["Apoptosis", "Differentiation", "Necrosis", "Growth"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "خلال *Apoptosis*، يحدث للخلية:", 
                en: "During *apoptosis*, the cell:" 
            },
            opts: {
                ar: ["تنتفخ بشدة", "تنفجر فوراً", "يقل حجمها وتنكمش", "تفقد غشاءها تماماً"],
                en: ["Swells greatly", "Bursts immediately", "Decreases in volume", "Loses membrane completely"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "تكوين الأجسام المبرمجة (Apoptotic bodies) يحدث خلال:", 
                en: "Formation of *apoptotic bodies* occurs during:" 
            },
            opts: {
                ar: ["Necrosis", "Apoptosis", "Mitosis", "Growth"],
                en: ["Necrosis", "Apoptosis", "Mitosis", "Growth"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "في حالة النخر (Necrosis)، *غشاء البلازما* يحدث له:", 
                en: "In *necrosis*, the plasma membrane:" 
            },
            opts: {
                ar: ["يظل سليماً", "يحدث له فقاعات فقط (Blebbing)", "يتمزق ويتحطم (Breaks down)", "يزداد سُمكه"],
                en: ["Remains intact", "Undergoes blebbing only", "Breaks down", "Thickens"]
            },
            correct: 2
        },

        // True / False
        {
            q: { 
                ar: "صح أم خطأ: دورة الخلية تتكون من *ثلاث مراحل فقط*.", 
                en: "T/F: The cell cycle consists of *three phases only*." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1 // False (It's 4 phases G1, S, G2, M)
        },
        {
            q: { 
                ar: "صح أم خطأ: تضاعف الـ DNA يحدث خلال مرحلة *G1*.", 
                en: "T/F: *DNA replication* occurs during G1 phase." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1 // False (Occurs in S phase)
        },
        {
            q: { 
                ar: "صح أم خطأ: أي خلية تدخل مرحلة *S* يجب أن تكمل الدورة.", 
                en: "T/F: Any cell entering the *S phase* must continue the cycle." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0 // True
        },
        {
            q: { 
                ar: "صح أم خطأ: الانقسام الميتوزي ينتج *مجموعتين متطابقتين* من الكروموسومات.", 
                en: "T/F: Mitosis produces *two identical sets* of chromosomes." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0 // True
        },
        {
            q: { 
                ar: "صح أم خطأ: النمو (Growth) يتضمن *زيادة في كتلة وعدد* الخلايا.", 
                en: "T/F: *Growth* includes increase in cell mass and cell number." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0 // True
        },
        {
            q: { 
                ar: "صح أم خطأ: *التمايز* (Differentiation) هو المسؤول عن إبقاء النمو والتمايز في حالة انسجام.", 
                en: "T/F: *Differentiation* is responsible for keeping growth and differentiation in harmony." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1 // False (Integration does this)
        },
        {
            q: { 
                ar: "صح أم خطأ: أثناء الموت النخري (Necrosis)، الخلية *تنكمش* (Shrinks).", 
                en: "T/F: During *necrosis*, the cell shrinks." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1 // False (It swells)
        },
        {
            q: { 
                ar: "صح أم خطأ: أثناء Apoptosis، تظل *العضيات سليمة* (Normal).", 
                en: "T/F: During *apoptosis*, the organoids remain normal." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0 // True
        },
        {
            q: { 
                ar: "صح أم خطأ: في حالة Apoptosis، الخلية *تنفجر وتتناثر محتوياتها*.", 
                en: "T/F: In *apoptosis*, the cell bursts and its contents are scattered and removed by phagocytes." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 1 // False (This describes Necrosis)
        },
        {
            q: { 
                ar: "صح أم خطأ: تحلل الخلية وانفجارها (Cell lysis) يحدث أثناء *Necrosis*.", 
                en: "T/F: *Cell lysis* occurs during necrosis." 
            },
            opts: {
                ar: ["صح (True)", "خطأ (False)"],
                en: ["True", "False"]
            },
            correct: 0 // True
        }
    ]
});