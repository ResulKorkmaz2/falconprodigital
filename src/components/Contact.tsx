"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
    const [whatsappForm, setWhatsappForm] = useState({
        name: "",
        phone: "",
        country: "",
        service: "",
        message: "",
    });

    const countries = [
        { value: "السعودية", label: "المملكة العربية السعودية 🇸🇦" },
        { value: "قطر", label: "قطر 🇶🇦" },
        { value: "الكويت", label: "الكويت 🇰🇼" },
        { value: "البحرين", label: "البحرين 🇧🇭" },
    ];

    const services = [
        "إعلانات شبكة البحث",
        "إعلانات الأداء الأقصى",
        "شبكة جوجل الإعلانية",
        "إعلانات يوتيوب",
        "تحليل الكلمات المفتاحية",
        "تطوير البرمجيات",
    ];

    const handleWhatsappSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `*طلب استشارة جديد*

*الاسم:* ${whatsappForm.name}
*الهاتف:* ${whatsappForm.phone}
*الدولة:* ${whatsappForm.country}
*الخدمة:* ${whatsappForm.service}
*الرسالة:* ${whatsappForm.message}`;

        window.open(`https://wa.me/16288006818?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <section className="section" id="contact" style={{ background: "rgba(0,0,0,0.3)" }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">تواصل معنا</span>
                    <h2>ابدأ رحلة نجاحك الإعلاني اليوم</h2>
                    <p>اختر طريقة التواصل المفضلة لديك</p>
                </div>

                <div className="contact-single">
                    <div className="contact-card whatsapp-card">
                        {/* Telegram Link - Top Right */}
                        <a
                            href="https://t.me/falconprodigital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="telegram-corner-link"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                            </svg>
                            تواصل عبر تليجرام
                        </a>

                        <div className="contact-card-header">
                            <div className="contact-icon whatsapp-icon-bg">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <h3>تواصل عبر واتساب</h3>
                            <p>أرسل استفسارك مباشرة عبر واتساب</p>
                        </div>

                        <form onSubmit={handleWhatsappSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="الاسم الكامل *"
                                        value={whatsappForm.name}
                                        onChange={(e) => setWhatsappForm({ ...whatsappForm, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        placeholder="رقم الهاتف *"
                                        value={whatsappForm.phone}
                                        onChange={(e) => setWhatsappForm({ ...whatsappForm, phone: e.target.value })}
                                        required
                                        dir="ltr"
                                        style={{ textAlign: "right" }}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <select
                                        value={whatsappForm.country}
                                        onChange={(e) => setWhatsappForm({ ...whatsappForm, country: e.target.value })}
                                        required
                                    >
                                        <option value="">اختر الدولة *</option>
                                        {countries.map((country) => (
                                            <option key={country.value} value={country.value}>
                                                {country.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        value={whatsappForm.service}
                                        onChange={(e) => setWhatsappForm({ ...whatsappForm, service: e.target.value })}
                                        required
                                    >
                                        <option value="">اختر الخدمة *</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea
                                    placeholder="رسالتك..."
                                    value={whatsappForm.message}
                                    onChange={(e) => setWhatsappForm({ ...whatsappForm, message: e.target.value })}
                                    rows={3}
                                />
                            </div>

                            <button type="submit" className="btn btn-whatsapp contact-submit-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                إرسال عبر واتساب
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
