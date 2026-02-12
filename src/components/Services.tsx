"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        id: "search-ads",
        title: "إعلانات شبكة البحث",
        description: "استهدف العملاء الباحثين عن خدماتك واحصل على عملاء جاهزين للشراء",
        href: "/services/search-ads",
        image: "/img/arama-agi-reklam.png",
    },
    {
        id: "performance-max",
        title: "إعلانات الأداء الأقصى",
        description: "حملات ذكية تستخدم الذكاء الاصطناعي لتحقيق أفضل النتائج",
        href: "/services/performance-max",
        image: "/img/max-per-reklami.png",
    },
    {
        id: "display-ads",
        title: "شبكة Google الإعلانية",
        description: "اعرض إعلاناتك على ملايين المواقع وزد الوعي بعلامتك التجارية",
        href: "/services/display-ads",
        image: "/img/goruntulu-reklam.png",
    },
    {
        id: "youtube-ads",
        title: "إعلانات YouTube",
        description: "اوصل رسالتك عبر الفيديو لملايين المشاهدين في الخليج",
        href: "/services/youtube-ads",
        image: "/img/youtube-reklamlari.png",
    },
    {
        id: "keyword-analysis",
        title: "تحليل الكلمات المفتاحية",
        description: "اكتشف الكلمات الأكثر ربحية لنشاطك التجاري",
        href: "/services/keyword-analysis",
        image: "/img/keyword-analizi.png",
    },
    {
        id: "software",
        title: "تطوير البرمجيات",
        description: "تطوير مواقع وتطبيقات ويب وسطح مكتب احترافية",
        href: "/services/software",
        image: "/img/yazilim-gelistirme.png",
    },
];

const Services: React.FC = () => {
    return (
        <section className="section" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">خدماتنا المتميزة</span>
                    <h2>حلول إعلانية متكاملة لنمو أعمالك</h2>
                    <p>نقدم مجموعة شاملة من خدمات الإعلانات الرقمية المصممة خصيصاً لسوق الخليج</p>
                </div>

                <div className="grid-3">
                    {services.map((service) => (
                        <div key={service.id} className="card service-card">
                            <div className="service-card-image">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={400}
                                    height={267}
                                    style={{ width: "100%", height: "auto", borderRadius: "var(--radius-md)" }}
                                />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link href={service.href} className="btn btn-secondary" style={{ padding: "0.75rem 1.5rem" }}>
                                اعرف المزيد
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

