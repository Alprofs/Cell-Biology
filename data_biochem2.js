allLectures.push({
    id: "biochem_2",
    branch: "biochem",
    title: { 
        ar: "المحاضرة الثانية: تضاعف الحمض النووي (DNA Replication)", 
        en: "Lecture 2: DNA Replication" 
    },
    revision: [
        {
            title: { ar: "العقيدة المركزية وأساسيات التضاعف", en: "Central Dogma & Basics" },
            branches: [
                {
                    type: "flip",
                    nodeTitle: { ar: "Central Dogma (العقيدة المركزية) 🔄", en: "Central Dogma 🔄" },
                    content: { 
                        ar: "هي نقل المعلومات الوراثية لتكوين البروتين عبر 3 عمليات:<br>1. *Replication*: تضاعف الـ DNA.<br>2. *Transcription*: تحويل الـ DNA إلى RNA.<br>3. *Translation*: تحويل الـ mRNA إلى بروتين.", 
                        en: "Transfer of genetic info via 3 processes:<br>1. *Replication*: DNA to DNA.<br>2. *Transcription*: DNA to RNA.<br>3. *Translation*: mRNA to Protein." 
                    }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "آلية تضاعف الـ DNA", en: "DNA Replication Mechanism" },
                    content: { 
                        ar: "هو تصنيع نسخة مطابقة (*Duplication*) من الـ DNA أثناء انقسام الخلية. يحدث بآلية *Semi-conservative* (شبه محافظة). التضاعف أبسط في بدائيات النواة (Prokaryotes) مقارنة بحقيقيات النواة.", 
                        en: "Synthesis of identical copy (*Duplication*) during cell division. Replicates in a *Semi-conservative* mechanism. It is simpler in prokaryotes than eukaryotes." 
                    }
                }
            ]
        },
        {
            title: { ar: "متطلبات التضاعف وإنزيمات البلمرة", en: "Requirements & DNA Polymerases" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "متطلبات التضاعف (Requirements)", en: "Replication Requirements" },
                    content: { 
                        ar: "1. شريط قالب (*Template*).<br>2. ركيزة (*Substrate*): Deoxyribonucleotides.<br>3. إنزيمات وبروتينات: DNA Polymerases, Helicase, SSB, Primase, Ligase.", 
                        en: "1. DNA *Template*.<br>2. *Substrate*: Deoxyribonucleotides.<br>3. Enzymes: DNA Polymerases, Helicase, SSB, Primase, Ligase." 
                    }
                },
                {
                    type: "table",
                    nodeTitle: { ar: "مقارنة أنواع إنزيمات DNA Polymerases", en: "DNA Polymerases Types" },
                    content: {
                        ar: `<table>
                                <tr><th>الوظيفة (Action)</th><th>Prokaryotes</th><th>Eukaryotes</th></tr>
                                <tr><td>إزالة البرايمر وملء الفراغات / بناء التيلومير</td><td>Pol I</td><td>Pol α</td></tr>
                                <tr><td>إصلاح الـ DNA (DNA repair)</td><td>-</td><td>Pol β</td></tr>
                                <tr><td>تضاعف DNA الميتوكوندريا</td><td>-</td><td>Pol γ</td></tr>
                                <tr><td>بناء الأشرطة (Leading & Lagging)</td><td>Pol III</td><td>Pol δ</td></tr>
                                <tr><td>المراجعة والإصلاح (Proofreading)</td><td>Pol II</td><td>Pol ε</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Action</th><th>Prokaryotes</th><th>Eukaryotes</th></tr>
                                <tr><td>Primer removing, Gap filling, Telomere</td><td>Pol I</td><td>Pol α</td></tr>
                                <tr><td>DNA repair</td><td>-</td><td>Pol β</td></tr>
                                <tr><td>Mitochondrial DNA</td><td>-</td><td>Pol γ</td></tr>
                                <tr><td>Leading and lagging synthesis</td><td>Pol III</td><td>Pol δ</td></tr>
                                <tr><td>Proofreading & repair</td><td>Pol II</td><td>Pol ε</td></tr>
                             </table>`
                    }
                }
            ]
        },
        {
            title: { ar: "خطوات التضاعف (Stages)", en: "Stages of Replication" },
            branches: [
                {
                    type: "info",
                    nodeTitle: { ar: "1. البداية (Initiation)", en: "1. Initiation" },
                    content: { 
                        ar: "يرتبط بروتين *DNA A* بمنطقة الأصل (Ori). ثم يأتي بروتين *DNA B (Helicase)* لفك الشريطين وتكوين شوكة التضاعف. يستخدم إنزيم *Topoisomerase* لتقليل الضغط، وتمنع بروتينات *SSB* إعادة ارتباط الشريطين. يقوم إنزيم *Primase* بوضع RNA Primer.", 
                        en: "*DNA A* recognizes 'Ori'. *DNA B (Helicase)* unwinds DNA forming replication fork. *Topoisomerase* releases stress, and *SSB* proteins stabilize separated strands. *Primase* adds RNA Primer." 
                    }
                },
                {
                    type: "compare",
                    val1Title: { ar: "Leading Strand (الشريط المتقدم)", en: "Leading Strand" },
                    val1: { ar: "يُنسخ كشريط متصل (*Continuous*).<br>يحتاج إلى *برايمر واحد* (One Primer).<br>يُبنى في اتجاه 5' إلى 3' نحو شوكة التضاعف.", en: "Copied as *Continuous* strand.<br>Requires *one primer*.<br>Grows 5' to 3' towards the fork." },
                    val2Title: { ar: "Lagging Strand (الشريط المتأخر)", en: "Lagging Strand" },
                    val2: { ar: "يُنسخ كقطع متقطعة تُعرف بـ *Okazaki fragments*.<br>يحتاج إلى *عدة برايمرات*.<br>يُبنى بعيداً عن شوكة التضاعف ويُربط بواسطة *DNA Ligase*.", en: "Copied as discontinuous *Okazaki fragments*.<br>Requires *multiple primers*.<br>Sealed by *DNA Ligase*." }
                },
                {
                    type: "info",
                    nodeTitle: { ar: "3. الإنهاء والمراجعة (Termination & Proofreading)", en: "3. Termination & Proofreading" },
                    content: { 
                        ar: "النهاية تحدث بواسطة تسلسلات التوقف الموجهة المرتبطة ببروتين *ter binding protein*. والمراجعة تتم عبر إزالة النيوكليوتيدات الخاطئة بنشاط (3' إلى 5' exonuclease) الخاص بـ DNA Pol I و II.", 
                        en: "Termination is directed by *ter binding protein* at termination sequences. Proofreading is done by 3' to 5' exonuclease activity of DNA Pol I and II." 
                    }
                }
            ]
        },
        {
            title: { ar: "مقارنة متقدمة وأسئلة مقالية", en: "Advanced Compare & Essays" },
            branches: [
                {
                    type: "table",
                    nodeTitle: { ar: "مقارنة: بدائيات مقابل حقيقيات النواة", en: "Prokaryotes vs Eukaryotes" },
                    content: {
                        ar: `<table>
                                <tr><th>وجه المقارنة</th><th>Prokaryotes (البدائيات)</th><th>Eukaryotes (الحقيقيات)</th></tr>
                                <tr><td>طول البرايمر</td><td>~50 نيوكليوتيدة</td><td>9 نيوكليوتيدات</td></tr>
                                <tr><td>أصول التضاعف (Ori)</td><td>واحد (Single)</td><td>متعدد (Multiple)</td></tr>
                                <tr><td>طول قطع أوكازاكي</td><td>1000-2000 نيوكليوتيدة</td><td>~200 نيوكليوتيدة</td></tr>
                                <tr><td>معدل السرعة</td><td>سريع (~500/ثانية)</td><td>أبطأ بـ 10 مرات (50/ثانية)</td></tr>
                             </table>`,
                        en: `<table>
                                <tr><th>Feature</th><th>Prokaryotes</th><th>Eukaryotes</th></tr>
                                <tr><td>Primer length</td><td>~50 nucleotides</td><td>9 nucleotides</td></tr>
                                <tr><td>Origin of replication</td><td>Single</td><td>Multiple</td></tr>
                                <tr><td>Okazaki fragments</td><td>1000-2000 nucleotides</td><td>~200 nucleotides</td></tr>
                                <tr><td>Replication rate</td><td>Fast (~500/sec)</td><td>Slow (50/sec)</td></tr>
                             </table>`
                    }
                },
                {
                    type: "flip",
                    nodeTitle: { ar: "سؤال مقالي: ما هي متطلبات تضاعف DNA؟ 🔄", en: "Essay: Requirements for DNA Replication? 🔄" },
                    content: { 
                        ar: "1. شريط قالب (Template of DNA).<br>2. ركيزة (Deoxyribonucleotides).<br>3. إنزيمات وبروتينات وتشمل: DNA polymerases, Helicase, SSB protein, Primase, DNA ligase.", 
                        en: "1. DNA Template.<br>2. Substrate (Deoxyribonucleotides).<br>3. Enzymes & proteins (DNA polymerases, Helicase, SSB, Primase, Ligase)." 
                    }
                }
            ]
        }
    ],
    quiz: [
        // ================= القسم الأول: أسئلة الاختيار من متعدد (MCQs) =================
        {
            q: { ar: "العملية التي يتم فيها صنع نسخة متطابقة أثناء انقسام الخلية تُسمى *--------*؟", en: "The *synthesis of identical copy* of DNA during cell division is called:" },
            opts: { ar: ["الترجمة (Translation)", "النسخ (Transcription)", "التضاعف (Replication)", "التشوه (Denaturation)"], en: ["Translation", "Transcription", "Replication", "Denaturation"] },
            correct: 2
        },
        {
            q: { ar: "تكوين جزيء RNA من جزيء DNA يُسمى *--------*؟", en: "The formation of *RNA molecule* from a DNA molecule is called:" },
            opts: { ar: ["الترجمة (Translation)", "النسخ (Transcription)", "التضاعف (Replication)", "التشوه (Denaturation)"], en: ["Translation", "Transcription", "Replication", "Denaturation"] },
            correct: 1
        },
        {
            q: { ar: "تحويل المعلومات من mRNA إلى *بروتين* يُعرف بـ:", en: "The conversion of mRNA into a *protein* is called:" },
            opts: { ar: ["الترجمة (Translation)", "النسخ (Transcription)", "التضاعف (Replication)", "التشوه (Denaturation)"], en: ["Translation", "Transcription", "Replication", "Denaturation"] },
            correct: 0
        },
        {
            q: { ar: "يُعرف العقيدة المركزية (*Central Dogma*) في علم الأحياء الجزيئي بأنها:", en: "The *central dogma* of molecular biology means:" },
            opts: { ar: ["الترجمة فقط", "النسخ فقط", "التضاعف والترجمة فقط", "التضاعف، النسخ، والترجمة"], en: ["Translation only", "Transcription only", "Replication and Translation only", "Replication, transcription and translation."] },
            correct: 3
        },
        {
            q: { ar: "الإنزيم الأساسي الذي *يُحفز بناء* شريط الـ DNA هو:", en: "The enzymes that *catalyze the synthesis* of DNA are:" },
            opts: { ar: ["Topoisomerases", "Helicases", "DNA polymerases", "Ligases"], en: ["Topoisomerases", "Helicases", "DNA polymerases", "Ligases"] },
            correct: 2
        },
        {
            q: { ar: "أي من الآتي يعتبر من أنواع إنزيم *DNA polymerase* في بدائيات النواة (Prokaryotic)؟", en: "A type of *Prokaryotic* DNA polymerase:" },
            opts: { ar: ["Polymerase alpha", "Polymerase beta", "Polymerase III", "Polymerase gamma"], en: ["Polymerase alpha", "Polymerase beta", "Polymerase III", "Polymerase gamma"] },
            correct: 2
        },
        {
            q: { ar: "نوع آخر من إنزيم *DNA polymerase* في بدائيات النواة (Prokaryotic)؟", en: "Another type of *Prokaryotic* DNA polymerase:" },
            opts: { ar: ["Polymerase alpha", "Polymerase beta", "Polymerase gamma", "Polymerase I"], en: ["Polymerase alpha", "Polymerase beta", "Polymerase gamma", "Polymerase I"] },
            correct: 3
        },
        {
            q: { ar: "نوع ثالث من إنزيم *DNA polymerase* في بدائيات النواة (Prokaryotic)؟", en: "A third type of *Prokaryotic* DNA polymerase:" },
            opts: { ar: ["Polymerase II", "Polymerase alpha", "Polymerase beta", "Polymerase gamma"], en: ["Polymerase II", "Polymerase alpha", "Polymerase beta", "Polymerase gamma"] },
            correct: 0
        },
        {
            q: { ar: "أي من الآتي يعتبر من أنواع إنزيم *DNA polymerase* في حقيقيات النواة (Eukaryotic)؟", en: "A type of *Eukaryotic* DNA polymerase:" },
            opts: { ar: ["Polymerase II", "Polymerase alpha", "Polymerase III", "Polymerase I"], en: ["Polymerase II", "Polymerase alpha", "Polymerase III", "Polymerase I"] },
            correct: 1
        },
        {
            q: { ar: "نوع آخر من إنزيم *DNA polymerase* في حقيقيات النواة (Eukaryotic)؟", en: "Another type of *Eukaryotic* DNA polymerase:" },
            opts: { ar: ["Polymerase II", "Polymerase gamma", "Polymerase III", "Polymerase I"], en: ["Polymerase II", "Polymerase gamma", "Polymerase III", "Polymerase I"] },
            correct: 1
        },
        {
            q: { ar: "نوع ثالث من إنزيم *DNA polymerase* في حقيقيات النواة (Eukaryotic)؟", en: "A third type of *Eukaryotic* DNA polymerase:" },
            opts: { ar: ["Polymerase II", "Polymerase beta", "Polymerase III", "Polymerase I"], en: ["Polymerase II", "Polymerase beta", "Polymerase III", "Polymerase I"] },
            correct: 1
        },
        {
            q: { ar: "القطع القصيرة من الـ DNA التي تتصل ببعضها لتكوين الشريط المتأخر (Lagging strand) تُسمى *--------*.", en: "Short pieces of DNA that joined together to form the *lagging strand*:" },
            opts: { ar: ["Single stranded binding protein", "DNA primer", "Okazaki fragments", "DNA A protein"], en: ["Single stranded binding protein", "DNA primer", "Okazaki fragments", "DNA A protein"] },
            correct: 2
        },
        {
            q: { ar: "تسلسلات الـ DNA التي توجه *نهاية عملية التضاعف* تُسمى:", en: "DNA sequences that direct the *end of replication*:" },
            opts: { ar: ["Single stranded binding protein", "Termination sequences", "Okazaki fragments", "Helicases"], en: ["Single stranded binding protein", "Termination sequences", "Okazaki fragments", "Helicases"] },
            correct: 1
        },
        {
            q: { ar: "إنزيم يتطلب وجود *RNA primer* ليبدأ عمله:", en: "An enzyme that requires the presence of *RNA primer*:" },
            opts: { ar: ["Topoisomerases", "Helicases", "DNA polymerase III", "Ligase"], en: ["Topoisomerases", "Helicases", "DNA polymerase III", "Ligase"] },
            correct: 2
        },
        {
            q: { ar: "بروتين يقوم *بتثبيت الأشرطة المنفصلة* ويمنع ارتباطها مجدداً:", en: "*Stabilizes* the separated strands and prevents their reassociation:" },
            opts: { ar: ["Single stranded binding protein", "DNA primer", "Okazaki fragments", "DNA A protein"], en: ["Single stranded binding protein", "DNA primer", "Okazaki fragments", "DNA A protein"] },
            correct: 0
        },
        {
            q: { ar: "إنزيم *DNA polymerase* **لا** يقوم بهذه الوظيفة:", en: "*DNA polymerase* enzyme **doesn’t** perform this action:" },
            opts: { ar: ["إطالة السلسلة (DNA chain elongation)", "المراجعة (Proofreading)", "إصلاح الـ DNA repair", "تخفيف الضغط الناتج عن الفك (Releasing stress)"], en: ["DNA chain elongation.", "Proofreading.", "DNA repair.", "Releasing the stress caused by helicase unwinding."] },
            correct: 3
        },
        {
            q: { ar: "قطعة قصيرة من الـ RNA يتم تكوينها بواسطة إنزيم *primase*:", en: "A short piece of RNA formed by the *primase*:" },
            opts: { ar: ["RNA primer", "Single stranded binding protein", "DNA primer", "Okazaki fragments"], en: ["RNA primer", "Single stranded binding protein", "DNA primer", "Okazaki fragments"] },
            correct: 0
        },
        {
            q: { ar: "الإنزيم المسؤول عن إنشاء رابطة فوسفوديستر *لربط قطع أوكازاكي* هو:", en: "An enzyme that catalyzes phosphodiester bond to *seal the Okazaki fragments*:" },
            opts: { ar: ["Topoisomerases", "DNA ligase", "Helicases", "DNA polymerase I"], en: ["Topoisomerases", "DNA ligase", "Helicases", "DNA polymerase I"] },
            correct: 1
        },
        {
            q: { ar: "نوع رابع من إنزيم *DNA polymerase* في حقيقيات النواة (Eukaryotic)؟", en: "A type of *Eukaryotic* DNA polymerase:" },
            opts: { ar: ["Polymerase II", "Polymerase epsilon", "Polymerase III", "Polymerase I"], en: ["Polymerase II", "Polymerase epsilon", "Polymerase III", "Polymerase I"] },
            correct: 1
        },
        {
            q: { ar: "16- من وظائف *DNA polymerases* كل ما يلي **ما عدا**:", en: "16- Actions of *DNA polymerases* enzyme **doesn’t include**:" },
            opts: { ar: ["إطالة سلسلة DNA", "المراجعة (Proofreading)", "إصلاح الـ DNA", "إطالة سلسلة RNA"], en: ["DNA chain elongation.", "Proofreading.", "DNA repair.", "RNA elongation."] },
            correct: 3
        },
        {
            q: { ar: "17- من وظائف *DNA polymerases* كل ما يلي **ما عدا**:", en: "17- Actions of *DNA polymerases* enzyme **doesn’t include**:" },
            opts: { ar: ["إطالة سلسلة DNA", "المراجعة (Proofreading)", "تثبيت الأشرطة المنفصلة (Stabilization)", "إصلاح الـ DNA"], en: ["DNA chain elongation.", "Proofreading.", "Stabilization of the separated DNA strands.", "DNA repair."] },
            correct: 2
        },
        {
            q: { ar: "18- من وظائف *DNA polymerases* كل ما يلي **ما عدا**:", en: "18- Actions of *DNA polymerases* enzyme **doesn’t include**:" },
            opts: { ar: ["فك الشريطين الأم (Unwinding)", "إطالة سلسلة DNA", "المراجعة (Proofreading)", "إصلاح الـ DNA"], en: ["Unwinding of the parental DNA strands.", "DNA chain elongation.", "Proofreading.", "DNA repair."] },
            correct: 0
        },
        {
            q: { ar: "البروتين الذي *يتعرف ويرتبط بمنطقة (Ori)* ليقوم ببدء فصل شريطي الـ DNA:", en: "*Recognizes and binds to the 'Ori'* of the DNA and denatures the DNA:" },
            opts: { ar: ["Single stranded binding protein", "DNA primer", "Okazaki fragments", "DNA A protein"], en: ["Single stranded binding protein", "DNA primer", "Okazaki fragments", "DNA A protein"] },
            correct: 3
        },
        {
            q: { ar: "بروتين *DNA B* يُعرف أيضاً بإنزيم:", en: "*DNA B* protein is also called ……... enzyme." },
            opts: { ar: ["Topoisomerase", "DNA polymerase", "RNA polymerase", "Helicase"], en: ["Topoisomerase.", "DNA polymerase.", "RNA polymerase.", "Helicase."] },
            correct: 3
        },
        {
            q: { ar: "26- يُنسخ الشريط المتأخر (*Lagging strand*) بواسطة:", en: "26- The *lagging strand* is:" },
            opts: { ar: ["كشريط متصل بواسطة DNA Pol III", "يحتاج برايمر واحد", "في اتجاه 5' إلى 3'", "كشريط متقطع (Discontinuous) بواسطة Pol III"], en: ["Copied as continuous strand.", "Require one primer.", "Copied in 5' to 3' direction.", "Copied by polymerase III as discontinuous strand."] },
            correct: 3
        },
        {
            q: { ar: "27- الشريط المتقدم (*Leading strand*) يتميز بـ:", en: "27- The *leading strand* is:" },
            opts: { ar: ["يُبنى في اتجاه 3' إلى 5'", "يحتاج لعدة برايمرات", "كشريط متصل (Continuous) بواسطة Pol III", "يُنسخ كشريط متقطع"], en: ["Copied in 3' to 5' direction.", "Require multiple primers.", "Copied by polymerase III as continuous strand.", "Copied as discontinuous strand."] },
            correct: 2
        },

        // ================= القسم الثاني: أسئلة الصح والخطأ (True/False) =================
        {
            q: { ar: "تضاعف الـ DNA يتم بآلية *شبه محافظة* (Semi-conservative mechanism).", en: "DNA replicates in *semi conservative* mechanism." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "الرمز “Ori” يشير إلى منطقة *أصل التضاعف* (Origin of replication).", en: "The “Ori” means the *origin of replication*." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "تضاعف الـ DNA يتم بآلية *محافظة بالكامل* (Conservative mechanism).", en: "DNA replicates in *conservative* mechanism." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 1
        },
        {
            q: { ar: "بدائيات وحقيقيات النواة تمتلك *نفس المتطلبات الأساسية والمكونات* لعملية التضاعف.", en: "Prokaryotes & eukaryotes have the *same basic requirements* and components of replication." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "بدائيات وحقيقيات النواة تمتلك *متطلبات مختلفة* لعملية التضاعف.", en: "Prokaryotes & eukaryotes have *different basic requirements* and components of replication." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 1
        },
        {
            q: { ar: "عملية التضاعف تكون *أبسط في بدائيات النواة* (Prokaryotes) مقارنة بالحقيقيات.", en: "Replication is *simpler in prokaryotes* than eukaryotes." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "عملية التضاعف تكون *أبسط في حقيقيات النواة* (Eukaryotes) مقارنة بالبدائيات.", en: "Replication is *simpler in eukaryotes* than prokaryotes." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 1
        },
        {
            q: { ar: "الـ RNA primers عبارة عن قطع قصيرة من الـ RNA يُكونها إنزيم primase باستخدام *الـ DNA كقالب*.", en: "The RNA primers are short pieces of RNA formed by primase using *DNA as a template*." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "الـ RNA primers عبارة عن قطع قصيرة من الـ RNA يُكونها إنزيم primase باستخدام *الـ RNA كقالب*.", en: "The RNA primers are short pieces of RNA formed by primase using *RNA as a template*." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 1
        },
        {
            q: { ar: "يتم بناء كلا شريطي الـ DNA في نفس الوقت ولكن في *اتجاهات متعاكسة*.", en: "Both the DNA strands are synthesized simultaneously but in *opposite direction*." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "يتم بناء كلا شريطي الـ DNA في نفس الوقت في *نفس الاتجاه*.", en: "Both the DNA strands are synthesized simultaneously in the *same direction*." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 1
        },
        {
            q: { ar: "يُطلب إنزيم *DNA ligase* لإنشاء رابطة فوسفوديستر لختم قطع أوكازاكي.", en: "*DNA ligase* is required to catalyzes the formation of a phosphodiester bond to seal the Okazaki fragments." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 0
        },
        {
            q: { ar: "يُطلب إنزيم *DNA polymerase I* لإنشاء رابطة فوسفوديستر لختم قطع أوكازاكي.", en: "*DNA polymerase I* is required to catalyzes the formation of a phosphodiester bond to seal the Okazaki fragments." },
            opts: { ar: ["صح (True)", "خطأ (False)"], en: ["True", "False"] },
            correct: 1
        }
    ]
});