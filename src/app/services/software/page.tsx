import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "تطوير البرمجيات | مواقع ويب وتطبيقات سطح المكتب | فالكون برو ديجيتال",
    description: "نطور مواقع ويب احترافية وتطبيقات سطح مكتب مخصصة لأعمالك. تصميم عصري وأداء عالي مع دعم كامل.",
    keywords: ["تطوير مواقع", "تصميم مواقع", "برمجة ويب", "تطبيقات سطح المكتب", "تطوير برمجيات الخليج"],
};

export default function SoftwarePage() {
    const webServices = [
        "مواقع شركات احترافية",
        "متاجر إلكترونية متكاملة",
        "صفحات هبوط تسويقية",
        "تطبيقات ويب متقدمة",
        "لوحات تحكم إدارية",
        "تكامل مع APIs خارجية",
    ];

    const desktopServices = [
        "برامج إدارة الأعمال",
        "أنظمة نقاط البيع POS",
        "برامج المحاسبة",
        "أتمتة المهام",
        "برامج مخصصة حسب الطلب",
        "صيانة ودعم مستمر",
    ];

    const technologies = [
        { name: "React / Next.js", category: "الويب" },
        { name: "Node.js", category: "الخادم" },
        { name: "Python", category: "سطح المكتب" },
        { name: "TypeScript", category: "البرمجة" },
        { name: "PostgreSQL", category: "قواعد البيانات" },
        { name: "Electron", category: "التطبيقات" },
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
                                <span>تطوير البرمجيات</span>
                            </div>
                            <h1>تطوير البرمجيات</h1>
                            <p>مواقع ويب وتطبيقات سطح مكتب احترافية لأعمالك</p>
                        </div>
                        <div className="page-header-image">
                            <Image src="/img/yazilim-gelistirme.png" alt="تطوير البرمجيات" width={800} height={533} style={{ width: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="service-content-grid">
                        <div className="card" style={{ padding: "2.5rem" }}>
                            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                                <span style={{ fontSize: "3rem" }}>🌐</span>
                                <h3 style={{ color: "var(--gold-400)", marginTop: "1rem" }}>تطوير الويب</h3>
                            </div>
                            <ul className="feature-list">
                                {webServices.map((service, i) => (
                                    <li key={i}>{service}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="card" style={{ padding: "2.5rem" }}>
                            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                                <span style={{ fontSize: "3rem" }}>💻</span>
                                <h3 style={{ color: "var(--gold-400)", marginTop: "1rem" }}>برامج سطح المكتب</h3>
                            </div>
                            <ul className="feature-list">
                                {desktopServices.map((service, i) => (
                                    <li key={i}>{service}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: "4rem" }}>
                        <h2 style={{ color: "var(--neutral-50)", textAlign: "center", marginBottom: "2rem" }}>التقنيات المستخدمة</h2>
                        <div className="grid-6">
                            {technologies.map((tech, i) => (
                                <div key={i} className="stat-item" style={{ padding: "1.5rem" }}>
                                    <div style={{ fontWeight: "bold", color: "var(--neutral-50)" }}>{tech.name}</div>
                                    <div style={{ fontSize: "0.85rem", color: "var(--neutral-400)" }}>{tech.category}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="container text-center">
                    <h2 style={{ color: "var(--neutral-50)", marginBottom: "1rem" }}>لديك فكرة برمجية؟</h2>
                    <p style={{ marginBottom: "2rem" }}>تواصل معنا لتحويل فكرتك إلى واقع</p>
                    <a
                        href="https://wa.me/16288006818?text=أريد الاستفسار عن خدمات تطوير البرمجيات"
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
