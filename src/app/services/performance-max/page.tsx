import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "إعلانات الأداء الأقصى Performance Max | فالكون برو ديجيتال",
    description: "حملات Performance Max الذكية تستخدم الذكاء الاصطناعي من جوجل للوصول لعملائك عبر جميع منصات جوجل.",
    keywords: ["Performance Max", "إعلانات الأداء الأقصى", "حملات جوجل الذكية", "AI إعلانات", "إعلانات جوجل الخليج"],
};

export default function PerformanceMaxPage() {
    const features = [
        "حملة واحدة تغطي جميع منصات جوجل",
        "الذكاء الاصطناعي يحسن الأداء تلقائياً",
        "استهداف ذكي للجمهور المثالي",
        "تحسين تلقائي للميزانية",
        "تقارير شاملة ومفصلة",
        "نتائج أفضل بتكلفة أقل",
    ];

    const platforms = [
        { name: "Google Search", icon: "🔍" },
        { name: "YouTube", icon: "▶️" },
        { name: "Gmail", icon: "📧" },
        { name: "Display Network", icon: "🖼️" },
        { name: "Discover", icon: "📱" },
        { name: "Maps", icon: "🗺️" },
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
                                <span>إعلانات الأداء الأقصى</span>
                            </div>
                            <h1>إعلانات الأداء الأقصى</h1>
                            <p>حملات ذكية بالذكاء الاصطناعي تحقق أعلى عائد استثمار</p>
                        </div>
                        <div className="page-header-image">
                            <Image src="/img/max-per-reklami.png" alt="إعلانات الأداء الأقصى" width={800} height={533} style={{ width: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="service-content-grid">
                        <div>
                            <h2 style={{ color: "var(--neutral-50)", marginBottom: "1.5rem" }}>قوة الذكاء الاصطناعي في خدمة إعلاناتك</h2>
                            <p style={{ marginBottom: "1.5rem", lineHeight: "1.9" }}>
                                إعلانات Performance Max هي أحدث أنواع حملات جوجل الإعلانية، تستخدم الذكاء الاصطناعي المتقدم للوصول لعملائك عبر جميع منصات جوجل بحملة واحدة فقط.
                            </p>
                            <p style={{ marginBottom: "2rem", lineHeight: "1.9" }}>
                                يقوم نظام جوجل الذكي بتحليل سلوك المستخدمين واختيار أفضل الأوقات والأماكن لعرض إعلاناتك، مما يحقق أعلى معدلات تحويل.
                            </p>
                            <ul className="feature-list">
                                {features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="card" style={{ padding: "2.5rem" }}>
                            <h3 style={{ color: "var(--gold-400)", marginBottom: "2rem", textAlign: "center" }}>المنصات المشمولة</h3>
                            <div className="grid-2">
                                {platforms.map((platform, i) => (
                                    <div key={i} className="stat-item" style={{ padding: "1.25rem" }}>
                                        <span style={{ fontSize: "2rem" }}>{platform.icon}</span>
                                        <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>{platform.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="container text-center">
                    <h2 style={{ color: "var(--neutral-50)", marginBottom: "1rem" }}>ابدأ حملة Performance Max الآن</h2>
                    <p style={{ marginBottom: "2rem" }}>دع الذكاء الاصطناعي يضاعف مبيعاتك</p>
                    <a
                        href="https://wa.me/16288006818?text=أريد الاستفسار عن إعلانات الأداء الأقصى Performance Max"
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
