import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "إعلانات جوجل في الكويت | خبراء Google Ads الكويت",
    description: "شريكك الموثوق لإعلانات جوجل في الكويت. نساعد الشركات الكويتية على النمو عبر حملات إعلانية مستهدفة.",
    keywords: [
        "إعلانات جوجل الكويت",
        "Google Ads الكويت",
        "تسويق رقمي الكويت",
        "شركة إعلانات الكويت",
        "حملات جوجل الكويت",
        "وكالة تسويق الكويت",
    ],
};

export default function KuwaitPage() {
    const stats = [
        { number: "+4.3M", label: "عدد السكان" },
        { number: "+98%", label: "انتشار الإنترنت" },
        { number: "عالي", label: "معدل التفاعل" },
        { number: "+78%", label: "تسوق إلكتروني" },
    ];

    const services = [
        { title: "إعلانات البحث", desc: "استهدف الباحثين الكويتيين" },
        { title: "إعلانات يوتيوب", desc: "وصول للمشاهدين الكويتيين" },
        { title: "Performance Max", desc: "حملات ذكية للكويت" },
        { title: "شبكة Display", desc: "انتشار على المواقع الكويتية" },
    ];

    return (
        <main>
            <header className="page-header">
                <div className="breadcrumb">
                    <Link href="/">الرئيسية</Link>
                    <span>/</span>
                    <span>الكويت</span>
                </div>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🇰🇼</div>
                <h1>إعلانات جوجل في الكويت</h1>
                <p>معدلات تحويل مرتفعة وجمهور متفاعل رقمياً</p>
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
                            <h2 style={{ color: "var(--neutral-50)", marginBottom: "1.5rem" }}>الكويت: سوق رقمي نشط</h2>
                            <p style={{ marginBottom: "1.5rem", lineHeight: "1.9" }}>
                                الكويت تتميز بواحد من أعلى معدلات انتشار الإنترنت في العالم، مع جمهور نشط رقمياً ومستعد للتفاعل. المستهلك الكويتي يتميز بقوة شرائية عالية وميل للتسوق الإلكتروني.
                            </p>
                            <p style={{ marginBottom: "2rem", lineHeight: "1.9" }}>
                                نصمم حملات إعلانية تخاطب المستهلك الكويتي بلغته وأسلوبه، مما يحقق معدلات تحويل استثنائية.
                            </p>
                            <ul className="feature-list">
                                <li>استهداف دقيق للسوق الكويتي</li>
                                <li>رسائل إعلانية محلية</li>
                                <li>تحسين للكلمات المفتاحية الكويتية</li>
                                <li>دعم عربي متكامل</li>
                            </ul>
                        </div>
                        <div className="card" style={{ padding: "2rem" }}>
                            <h3 style={{ color: "var(--gold-400)", marginBottom: "1.5rem", textAlign: "center" }}>خدماتنا في الكويت</h3>
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
                    <h2 style={{ color: "var(--neutral-50)", marginBottom: "1rem" }}>ابدأ حملتك الإعلانية في الكويت</h2>
                    <p style={{ marginBottom: "2rem" }}>تواصل معنا للحصول على استشارة مجانية</p>
                    <a
                        href="https://wa.me/16288006818?text=أريد الاستفسار عن إعلانات جوجل في الكويت"
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
