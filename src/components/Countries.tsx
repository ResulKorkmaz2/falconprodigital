"use client";

import React from "react";
import Link from "next/link";

const countries = [
    {
        id: "saudi-arabia",
        name: "المملكة العربية السعودية",
        flag: "🇸🇦",
        description: "أكبر سوق إعلاني في الخليج مع فرص نمو هائلة",
        href: "/countries/saudi-arabia",
    },
    {
        id: "qatar",
        name: "قطر",
        flag: "🇶🇦",
        description: "سوق متطور بقوة شرائية عالية وفرص استثنائية",
        href: "/countries/qatar",
    },
    {
        id: "kuwait",
        name: "الكويت",
        flag: "🇰🇼",
        description: "معدلات تحويل مرتفعة وجمهور متفاعل رقمياً",
        href: "/countries/kuwait",
    },
    {
        id: "bahrain",
        name: "البحرين",
        flag: "🇧🇭",
        description: "بوابة الخليج بتكاليف تنافسية وعوائد ممتازة",
        href: "/countries/bahrain",
    },
];

const Countries: React.FC = () => {
    return (
        <section className="section" id="countries" style={{ background: "rgba(0,0,0,0.2)" }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">نطاق خدماتنا</span>
                    <h2>خبراء إعلانات جوجل في دول الخليج</h2>
                    <p>نفهم خصوصية كل سوق خليجي ونقدم استراتيجيات إعلانية مخصصة</p>
                </div>

                <div className="grid-4">
                    {countries.map((country) => (
                        <div key={country.id} className="card country-card">
                            <div className="flag-wrapper" style={{ fontSize: "3rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {country.flag}
                            </div>
                            <h3>{country.name}</h3>
                            <p>{country.description}</p>
                            <Link href={country.href} className="btn btn-primary" style={{ padding: "0.75rem 1.5rem" }}>
                                اكتشف المزيد
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Countries;
