import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "إعلانات جوجل في البحرين | خبراء Google Ads المنامة",
    description: "شريكك الموثوق لإعلانات جوجل في البحرين. نساعد الشركات البحرينية على النمو عبر حملات إعلانية مستهدفة في المنامة.",
    keywords: [
        "إعلانات جوجل البحرين",
        "Google Ads البحرين",
        "إعلانات جوجل المنامة",
        "تسويق رقمي البحرين",
        "شركة إعلانات البحرين",
        "حملات جوجل البحرين",
    ],
};

export default function BahrainPage() {
    const stats = [
        { number: "+1.5M", label: "عدد السكان" },
        { number: "+99%", label: "انتشار الإنترنت" },
        { number: "تنافسية", label: "تكاليف الإعلان" },
        { number: "+85%", label: "استخدام الهواتف" },
    ];

    const services = [
        { title: "إعلانات البحث", desc: "استهدف الباحثين البحرينيين" },
        { title: "إعلانات يوتيوب", desc: "وصول للمشاهدين في البحرين" },
        { title: "Performance Max", desc: "أداء أقصى بتكلفة أقل" },
        { title: "شبكة Display", desc: "انتشار واسع في البحرين" },
    ];

    return (
        <main>
            <header className="page-header">
                <div className="breadcrumb">
                    <Link href="/">الرئيسية</Link>
                    <span>/</span>
                    <span>البحرين</span>
                </div>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🇧🇭</div>
                <h1>إعلانات جوجل في البحرين</h1>
                <p>بوابة الخليج بتكاليف تنافسية وعوائد ممتازة</p>
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
                            <h2 style={{ color: "var(--neutral-50)", marginBottom: "1.5rem" }}>البحرين: بوابة الخليج</h2>
                            <p style={{ marginBottom: "1.5rem", lineHeight: "1.9" }}>
                                البحرين تتميز بموقعها الاستراتيجي كبوابة للخليج، مع بيئة أعمال متطورة ونسبة انتشار إنترنت تقارب 100%. تكاليف الإعلان فيها تنافسية مقارنة بجيرانها.
                            </p>
                            <p style={{ marginBottom: "2rem", lineHeight: "1.9" }}>
                                نساعدك على الوصول للجمهور البحريني المتصل رقمياً، مع إمكانية استهداف الزوار من السعودية عبر جسر الملك فهد.
                            </p>
                            <ul className="feature-list">
                                <li>استهداف السوق البحريني</li>
                                <li>تكاليف إعلانية تنافسية</li>
                                <li>استهداف زوار البحرين من السعودية</li>
                                <li>عوائد استثمار ممتازة</li>
                            </ul>
                        </div>
                        <div className="card" style={{ padding: "2rem" }}>
                            <h3 style={{ color: "var(--gold-400)", marginBottom: "1.5rem", textAlign: "center" }}>خدماتنا في البحرين</h3>
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
                    <h2 style={{ color: "var(--neutral-50)", marginBottom: "1rem" }}>ابدأ حملتك الإعلانية في البحرين</h2>
                    <p style={{ marginBottom: "2rem" }}>تواصل معنا للحصول على استشارة مجانية</p>
                    <a
                        href="https://wa.me/16288006818?text=أريد الاستفسار عن إعلانات جوجل في البحرين"
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
