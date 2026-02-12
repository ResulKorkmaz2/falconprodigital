import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "إعلانات جوجل في قطر | خبراء Google Ads الدوحة",
    description: "شريكك الموثوق لإعلانات جوجل في قطر. نساعد الشركات القطرية على النمو عبر حملات إعلانية مستهدفة في الدوحة.",
    keywords: [
        "إعلانات جوجل قطر",
        "Google Ads قطر",
        "إعلانات جوجل الدوحة",
        "تسويق رقمي قطر",
        "شركة إعلانات قطر",
        "حملات جوجل قطر",
        "وكالة تسويق الدوحة",
    ],
};

export default function QatarPage() {
    const stats = [
        { number: "+2.9M", label: "عدد السكان" },
        { number: "+99%", label: "انتشار الإنترنت" },
        { number: "#1", label: "في مؤشر الثروة" },
        { number: "+85%", label: "يستخدمون جوجل" },
    ];

    const services = [
        { title: "إعلانات البحث", desc: "استهدف الباحثين في قطر" },
        { title: "إعلانات يوتيوب", desc: "فيديوهات للجمهور القطري" },
        { title: "Performance Max", desc: "أقصى أداء بالذكاء الاصطناعي" },
        { title: "شبكة Display", desc: "انتشار واسع في قطر" },
    ];

    return (
        <main>
            <header className="page-header">
                <div className="breadcrumb">
                    <Link href="/">الرئيسية</Link>
                    <span>/</span>
                    <span>قطر</span>
                </div>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🇶🇦</div>
                <h1>إعلانات جوجل في قطر</h1>
                <p>استهدف السوق القطري ذو القوة الشرائية العالية</p>
            </header>

            <section className="section">
                <div className="container">
                    <div className="stats-grid mb-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-item">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
                        <div>
                            <h2 style={{ color: "var(--neutral-50)", marginBottom: "1.5rem" }}>سوق قطر: فرص ذهبية</h2>
                            <p style={{ marginBottom: "1.5rem", lineHeight: "1.9" }}>
                                قطر تمتلك واحداً من أعلى معدلات دخل الفرد في العالم، مع نسبة انتشار إنترنت تتجاوز 99%. هذا يجعلها سوقاً مثالياً للإعلانات الرقمية.
                            </p>
                            <p style={{ marginBottom: "2rem", lineHeight: "1.9" }}>
                                نساعدك على الوصول للجمهور القطري المتميز عبر حملات إعلانية مصممة خصيصاً لتلبية احتياجات وتوقعات هذا السوق الراقي.
                            </p>
                            <ul className="feature-list">
                                <li>استهداف دقيق للجمهور القطري</li>
                                <li>رسائل إعلانية تناسب الذوق القطري</li>
                                <li>تحسين للكلمات المفتاحية المحلية</li>
                                <li>تقارير أداء مفصلة</li>
                            </ul>
                        </div>
                        <div className="card" style={{ padding: "2rem" }}>
                            <h3 style={{ color: "var(--gold-400)", marginBottom: "1.5rem", textAlign: "center" }}>خدماتنا في قطر</h3>
                            <div style={{ display: "grid", gap: "1rem" }}>
                                {services.map((service, i) => (
                                    <div key={i} className="stat-item" style={{ padding: "1rem", textAlign: "right" }}>
                                        <div style={{ fontWeight: "bold", color: "var(--neutral-50)" }}>{service.title}</div>
                                        <div style={{ fontSize: "0.85rem", color: "var(--neutral-400)" }}>{service.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="container text-center">
                    <h2 style={{ color: "var(--neutral-50)", marginBottom: "1rem" }}>ابدأ حملتك الإعلانية في قطر</h2>
                    <p style={{ marginBottom: "2rem" }}>تواصل معنا الآن للحصول على استشارة مجانية</p>
                    <a
                        href="https://wa.me/16288006818?text=أريد الاستفسار عن إعلانات جوجل في قطر"
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
