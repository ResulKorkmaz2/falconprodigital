import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "شبكة Google الإعلانية Display Ads | فالكون برو ديجيتال",
    description: "اعرض إعلاناتك على ملايين المواقع والتطبيقات عبر شبكة جوجل الإعلانية. بناء الوعي بعلامتك التجارية في الخليج.",
    keywords: ["شبكة جوجل الإعلانية", "Google Display Network", "إعلانات بانر", "Display Ads الخليج"],
};

export default function DisplayAdsPage() {
    const features = [
        "إعلانات مصورة وفيديو جذابة",
        "استهداف حسب الاهتمامات والسلوك",
        "إعادة استهداف الزوار السابقين",
        "الوصول لملايين المواقع والتطبيقات",
        "تصميمات إعلانية احترافية",
        "تتبع وقياس كل ظهور ونقرة",
    ];

    const stats = [
        { number: "+3M", label: "موقع وتطبيق" },
        { number: "90%", label: "من مستخدمي الإنترنت" },
        { number: "+35B", label: "ظهور يومي" },
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
                                <span>شبكة Google الإعلانية</span>
                            </div>
                            <h1>شبكة Google الإعلانية</h1>
                            <p>اعرض علامتك التجارية على ملايين المواقع والتطبيقات</p>
                        </div>
                        <div className="page-header-image">
                            <Image src="/img/goruntulu-reklam.png" alt="شبكة Google الإعلانية" width={800} height={533} style={{ width: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
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

                    <div className="service-content-grid">
                        <div>
                            <h2 style={{ color: "var(--neutral-50)", marginBottom: "1.5rem" }}>انتشر في كل مكان</h2>
                            <p style={{ marginBottom: "1.5rem", lineHeight: "1.9" }}>
                                شبكة جوجل الإعلانية تتيح لك عرض إعلانات مصورة وفيديو على أكثر من 3 ملايين موقع وتطبيق، للوصول لـ 90% من مستخدمي الإنترنت حول العالم.
                            </p>
                            <p style={{ marginBottom: "2rem", lineHeight: "1.9" }}>
                                سواء كنت تريد بناء الوعي بعلامتك التجارية أو إعادة استهداف الزوار السابقين، شبكة جوجل الإعلانية هي الحل الأمثل.
                            </p>
                            <ul className="feature-list">
                                {features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="card" style={{ padding: "2.5rem", textAlign: "center" }}>
                            <h3 style={{ color: "var(--gold-400)", marginBottom: "2rem" }}>أنواع الإعلانات</h3>
                            <div style={{ display: "grid", gap: "1rem" }}>
                                <div className="stat-item" style={{ padding: "1.25rem" }}>🖼️ إعلانات مصورة (Banner)</div>
                                <div className="stat-item" style={{ padding: "1.25rem" }}>📱 إعلانات التطبيقات</div>
                                <div className="stat-item" style={{ padding: "1.25rem" }}>🔄 إعادة الاستهداف</div>
                                <div className="stat-item" style={{ padding: "1.25rem" }}>🎨 إعلانات متجاوبة</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="container text-center">
                    <h2 style={{ color: "var(--neutral-50)", marginBottom: "1rem" }}>انشر علامتك في كل مكان</h2>
                    <p style={{ marginBottom: "2rem" }}>تواصل معنا لبدء حملة Display الآن</p>
                    <a
                        href="https://wa.me/16288006818?text=أريد الاستفسار عن شبكة جوجل الإعلانية"
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
