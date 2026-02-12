import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "إعلانات جوجل في السعودية | خبراء Google Ads المملكة العربية السعودية",
    description: "شريكك الموثوق لإعلانات جوجل في السعودية. نساعد الشركات السعودية على النمو عبر حملات إعلانية مستهدفة تحقق أعلى عائد استثمار في الرياض، جدة، ومكة.",
    keywords: [
        "إعلانات جوجل السعودية",
        "Google Ads السعودية",
        "إعلانات جوجل الرياض",
        "إعلانات جوجل جدة",
        "تسويق رقمي السعودية",
        "شركة إعلانات السعودية",
        "حملات جوجل السعودية",
        "وكالة تسويق الرياض",
    ],
    openGraph: {
        title: "إعلانات جوجل في السعودية | فالكون برو ديجيتال",
        description: "شريكك الموثوق لإعلانات جوجل في المملكة العربية السعودية",
    },
};

export default function SaudiArabiaPage() {
    const cities = ["الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام", "الخبر"];

    const stats = [
        { number: "+35M", label: "عدد السكان" },
        { number: "+95%", label: "انتشار الإنترنت" },
        { number: "#1", label: "أكبر سوق في الخليج" },
        { number: "+80%", label: "يستخدمون جوجل" },
    ];

    const services = [
        { title: "إعلانات البحث", desc: "استهدف الباحثين السعوديين عن خدماتك" },
        { title: "إعلانات يوتيوب", desc: "الوصول لملايين المشاهدين السعوديين" },
        { title: "Performance Max", desc: "حملات ذكية لنتائج استثنائية" },
        { title: "شبكة Display", desc: "انتشار على المواقع السعودية" },
    ];

    return (
        <main>
            <header className="page-header">
                <div className="breadcrumb">
                    <Link href="/">الرئيسية</Link>
                    <span>/</span>
                    <span>السعودية</span>
                </div>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🇸🇦</div>
                <h1>إعلانات جوجل في المملكة العربية السعودية</h1>
                <p>شريكك الموثوق للنمو في أكبر سوق خليجي</p>
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
                            <h2 style={{ color: "var(--neutral-50)", marginBottom: "1.5rem" }}>فرص استثنائية في السوق السعودي</h2>
                            <p style={{ marginBottom: "1.5rem", lineHeight: "1.9" }}>
                                المملكة العربية السعودية هي أكبر سوق إعلاني في منطقة الخليج، مع أكثر من 35 مليون نسمة وقوة شرائية هائلة. رؤية 2030 فتحت آفاقاً جديدة للنمو الرقمي.
                            </p>
                            <p style={{ marginBottom: "2rem", lineHeight: "1.9" }}>
                                نفهم السوق السعودي بعمق ونصمم حملات إعلانية تتحدث لغة العميل السعودي وتحقق نتائج ملموسة.
                            </p>
                            <h3 style={{ color: "var(--gold-400)", marginBottom: "1rem" }}>المدن التي نخدمها:</h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                                {cities.map((city, i) => (
                                    <span key={i} style={{ background: "rgba(201, 162, 39, 0.2)", padding: "0.5rem 1rem", borderRadius: "var(--radius-full)", fontSize: "0.9rem" }}>
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="card" style={{ padding: "2rem" }}>
                            <h3 style={{ color: "var(--gold-400)", marginBottom: "1.5rem", textAlign: "center" }}>خدماتنا في السعودية</h3>
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
                    <h2 style={{ color: "var(--neutral-50)", marginBottom: "1rem" }}>ابدأ حملتك الإعلانية في السعودية</h2>
                    <p style={{ marginBottom: "2rem" }}>تواصل معنا الآن للحصول على استشارة مجانية</p>
                    <a
                        href="https://wa.me/16288006818?text=أريد الاستفسار عن إعلانات جوجل في السعودية"
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
