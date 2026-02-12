import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "تحليل الكلمات المفتاحية | فالكون برو ديجيتال",
    description: "اكتشف الكلمات المفتاحية الأكثر ربحية لنشاطك في السعودية، قطر، الكويت والبحرين. تحليل شامل للمنافسين.",
    keywords: ["تحليل الكلمات المفتاحية", "Keyword Analysis", "بحث الكلمات المفتاحية", "SEO الخليج"],
};

export default function KeywordAnalysisPage() {
    const services = [
        { title: "بحث الكلمات المفتاحية", desc: "اكتشاف أفضل الكلمات لمجالك", icon: "🔍" },
        { title: "تحليل المنافسين", desc: "معرفة استراتيجيات منافسيك", icon: "📊" },
        { title: "تحليل حجم البحث", desc: "معرفة عدد الباحثين شهرياً", icon: "📈" },
        { title: "تحليل نية البحث", desc: "فهم ما يريده الباحثون", icon: "🎯" },
        { title: "تحليل التكلفة", desc: "تقدير تكلفة الإعلان", icon: "💰" },
        { title: "تقرير شامل", desc: "تقرير مفصل مع توصيات", icon: "📋" },
    ];

    const process = [
        "فهم نشاطك التجاري وأهدافك",
        "بحث شامل عن الكلمات المفتاحية",
        "تحليل المنافسين في السوق",
        "تصنيف الكلمات حسب الأولوية",
        "تقديم تقرير مفصل مع التوصيات",
    ];

    return (
        <main>
            <header className="page-header">
                <div className="container">
                    <div className="page-header-content">
                        <div className="page-header-text">
                            <div className="breadcrumb">
                                <Link href="/">الرئيسية</Link>
                                <span>/</span>
                                <span>تحليل الكلمات المفتاحية</span>
                            </div>
                            <h1>تحليل الكلمات المفتاحية</h1>
                            <p>اكتشف الكلمات الأكثر ربحية لنشاطك التجاري</p>
                        </div>
                        <div className="page-header-image">
                            <Image src="/img/keyword-analizi.png" alt="تحليل الكلمات المفتاحية" width={800} height={533} style={{ width: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>خدمات التحليل الشاملة</h2>
                        <p>نقدم تحليلاً متكاملاً للكلمات المفتاحية في سوق الخليج</p>
                    </div>

                    <div className="grid-3 mb-6">
                        {services.map((service, i) => (
                            <div key={i} className="card service-card">
                                <div className="icon-wrapper">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="service-content-grid">
                        <div>
                            <h2 style={{ color: "var(--neutral-50)", marginBottom: "1.5rem" }}>لماذا تحليل الكلمات المفتاحية مهم؟</h2>
                            <p style={{ marginBottom: "1.5rem", lineHeight: "1.9" }}>
                                الكلمات المفتاحية هي أساس نجاح أي حملة إعلانية. استهداف الكلمات الصحيحة يعني الوصول للعملاء المثاليين بأقل تكلفة.
                            </p>
                            <p style={{ marginBottom: "2rem", lineHeight: "1.9" }}>
                                نحلل السوق الخليجي بعمق لنكتشف الفرص التي يغفلها منافسوك، ونساعدك على الهيمنة على الكلمات الأكثر ربحية.
                            </p>
                        </div>
                        <div className="card" style={{ padding: "2.5rem" }}>
                            <h3 style={{ color: "var(--gold-400)", marginBottom: "2rem" }}>منهجية العمل</h3>
                            <ol style={{ listStyle: "none" }}>
                                {process.map((step, i) => (
                                    <li key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", alignItems: "center" }}>
                                        <span style={{ background: "var(--gold-600)", color: "var(--primary-900)", width: "30px", height: "30px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>
                                            {i + 1}
                                        </span>
                                        <span style={{ color: "var(--neutral-200)" }}>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="container text-center">
                    <h2 style={{ color: "var(--neutral-50)", marginBottom: "1rem" }}>احصل على تحليل كلماتك المفتاحية</h2>
                    <p style={{ marginBottom: "2rem" }}>تواصل معنا لبدء تحليل شامل لنشاطك</p>
                    <a
                        href="https://wa.me/16288006818?text=أريد تحليل الكلمات المفتاحية لنشاطي"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                    >
                        تواصل عبر واتساب
                    </a>
                </div>
            </section>
        </main>
    );
}
