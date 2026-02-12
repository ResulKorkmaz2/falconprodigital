import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "إعلانات YouTube في الخليج | فالكون برو ديجيتال",
    description: "أوصل رسالتك لملايين المشاهدين في السعودية، قطر، الكويت والبحرين عبر إعلانات يوتيوب المستهدفة.",
    keywords: ["إعلانات يوتيوب", "YouTube Ads", "إعلانات فيديو الخليج", "تسويق يوتيوب السعودية"],
};

export default function YouTubeAdsPage() {
    const adTypes = [
        { name: "إعلانات قابلة للتخطي", desc: "تظهر قبل الفيديو ويمكن تخطيها بعد 5 ثوانٍ", icon: "⏭️" },
        { name: "إعلانات غير قابلة للتخطي", desc: "15-20 ثانية لرسالة مركزة وقوية", icon: "📺" },
        { name: "إعلانات Bumper", desc: "6 ثوانٍ مؤثرة لتعزيز الوعي", icon: "⚡" },
        { name: "إعلانات Discovery", desc: "تظهر في نتائج البحث والاقتراحات", icon: "🔍" },
    ];

    const features = [
        "استهداف ديموغرافي دقيق",
        "استهداف حسب الاهتمامات",
        "إعادة استهداف المشاهدين",
        "قياس كامل للأداء والتحويلات",
        "تحسين مستمر للحملة",
        "تقارير شفافة ومفصلة",
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
                                <span>إعلانات YouTube</span>
                            </div>
                            <h1>إعلانات YouTube</h1>
                            <p>اوصل رسالتك بالفيديو لملايين المشاهدين في الخليج</p>
                        </div>
                        <div className="page-header-image">
                            <Image src="/img/youtube-reklamlari.png" alt="إعلانات YouTube" width={800} height={533} style={{ width: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>أنواع إعلانات يوتيوب</h2>
                        <p>اختر النوع المناسب لأهدافك التسويقية</p>
                    </div>

                    <div className="grid-4 mb-6">
                        {adTypes.map((type, i) => (
                            <div key={i} className="card service-card">
                                <div className="icon-wrapper">{type.icon}</div>
                                <h3>{type.name}</h3>
                                <p>{type.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="service-content-grid">
                        <div className="card" style={{ padding: "2.5rem" }}>
                            <h3 style={{ color: "var(--gold-400)", marginBottom: "2rem" }}>لماذا يوتيوب؟</h3>
                            <div className="stats-grid" style={{ gridTemplateColumns: "1fr", gap: "1rem" }}>
                                <div className="stat-item">
                                    <div className="stat-number" style={{ fontSize: "2rem" }}>+2B</div>
                                    <div className="stat-label">مستخدم نشط شهرياً</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number" style={{ fontSize: "2rem" }}>+90%</div>
                                    <div className="stat-label">من سكان الخليج يشاهدون</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number" style={{ fontSize: "2rem" }}>+70%</div>
                                    <div className="stat-label">يتذكرون الإعلانات</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 style={{ color: "var(--neutral-50)", marginBottom: "1.5rem" }}>خدماتنا في إعلانات يوتيوب</h2>
                            <p style={{ marginBottom: "2rem", lineHeight: "1.9" }}>
                                نساعدك على إنشاء وإدارة حملات إعلانية فعالة على يوتيوب، تصل لجمهورك المستهدف في الخليج وتحقق أهدافك التسويقية.
                            </p>
                            <ul className="feature-list">
                                {features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="container text-center">
                    <h2 style={{ color: "var(--neutral-50)", marginBottom: "1rem" }}>ابدأ حملتك على يوتيوب</h2>
                    <p style={{ marginBottom: "2rem" }}>تواصل معنا لبدء الوصول لملايين المشاهدين</p>
                    <a
                        href="https://wa.me/16288006818?text=أريد الاستفسار عن إعلانات يوتيوب"
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
