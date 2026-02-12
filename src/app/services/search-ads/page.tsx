import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "إعلانات شبكة البحث جوجل | فالكون برو ديجيتال",
    description: "احصل على عملاء جاهزين للشراء عبر إعلانات شبكة البحث في جوجل. نستهدف الباحثين عن خدماتك في السعودية، قطر، الكويت والبحرين.",
    keywords: ["إعلانات شبكة البحث", "Google Search Ads", "إعلانات جوجل البحث", "PPC الخليج", "إعلانات جوجل السعودية"],
    openGraph: {
        title: "إعلانات شبكة البحث جوجل | فالكون برو ديجيتال",
        description: "احصل على عملاء جاهزين للشراء عبر إعلانات شبكة البحث في جوجل",
    },
};

export default function SearchAdsPage() {
    const features = [
        "استهداف الكلمات المفتاحية الأكثر ربحية",
        "إعلانات نصية جذابة تزيد معدل النقر",
        "استهداف جغرافي دقيق للخليج",
        "تحسين مستمر لتقليل تكلفة النقرة",
        "تتبع التحويلات وقياس العائد",
        "تقارير أداء شهرية مفصلة",
    ];

    const benefits = [
        { icon: "🎯", title: "استهداف دقيق", desc: "نصل للعملاء الباحثين فعلياً عن خدماتك" },
        { icon: "💰", title: "عائد مضمون", desc: "تدفع فقط عند نقر العملاء المهتمين" },
        { icon: "📈", title: "نتائج فورية", desc: "ابدأ باستقبال العملاء خلال ساعات" },
        { icon: "🔧", title: "تحسين مستمر", desc: "نحسن حملتك يومياً لزيادة الأداء" },
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
                                <span>إعلانات شبكة البحث</span>
                            </div>
                            <h1>إعلانات شبكة البحث جوجل</h1>
                            <p>استهدف العملاء الذين يبحثون عن خدماتك الآن واحصل على مبيعات فورية</p>
                        </div>
                        <div className="page-header-image">
                            <Image src="/img/arama-agi-reklam.png" alt="إعلانات شبكة البحث" width={800} height={533} style={{ width: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className="service-content-grid">
                        <div>
                            <h2 style={{ color: "var(--neutral-50)", marginBottom: "1.5rem" }}>ما هي إعلانات شبكة البحث؟</h2>
                            <p style={{ marginBottom: "1.5rem", lineHeight: "1.9" }}>
                                إعلانات شبكة البحث هي الإعلانات النصية التي تظهر في أعلى نتائج بحث جوجل عندما يبحث المستخدمون عن كلمات مفتاحية متعلقة بنشاطك التجاري.
                            </p>
                            <p style={{ marginBottom: "2rem", lineHeight: "1.9" }}>
                                هذه الإعلانات تصل للعملاء في اللحظة الحاسمة - عندما يكونون مستعدين للشراء أو طلب الخدمة. نحن نساعدك على الظهور أمام هؤلاء العملاء بالرسالة الصحيحة.
                            </p>
                            <ul className="feature-list">
                                {features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="card" style={{ padding: "2.5rem" }}>
                            <h3 style={{ color: "var(--gold-400)", marginBottom: "2rem", textAlign: "center" }}>مميزات الخدمة</h3>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                                {benefits.map((benefit, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                                        <span style={{ fontSize: "2rem" }}>{benefit.icon}</span>
                                        <div>
                                            <h4 style={{ color: "var(--neutral-50)", marginBottom: "0.25rem" }}>{benefit.title}</h4>
                                            <p style={{ fontSize: "0.9rem", margin: 0 }}>{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="container text-center">
                    <h2 style={{ color: "var(--neutral-50)", marginBottom: "1rem" }}>جاهز لبدء حملتك الإعلانية؟</h2>
                    <p style={{ marginBottom: "2rem" }}>تواصل معنا الآن واحصل على استشارة مجانية</p>
                    <a
                        href="https://wa.me/16288006818?text=أريد الاستفسار عن إعلانات شبكة البحث"
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
