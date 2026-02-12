"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo">فالكون برو ديجيتال</div>
                        <p>
                            وكالة متخصصة في إعلانات جوجل، نخدم الشركات في السعودية، قطر،
                            الكويت والبحرين. نحول إعلاناتك إلى مبيعات حقيقية.
                        </p>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-links">
                            <h4>خدماتنا</h4>
                            <ul>
                                <li><Link href="/services/search-ads">إعلانات شبكة البحث</Link></li>
                                <li><Link href="/services/performance-max">إعلانات الأداء الأقصى</Link></li>
                                <li><Link href="/services/display-ads">شبكة جوجل الإعلانية</Link></li>
                                <li><Link href="/services/youtube-ads">إعلانات يوتيوب</Link></li>
                                <li><Link href="/services/keyword-analysis">تحليل الكلمات المفتاحية</Link></li>
                                <li><Link href="/services/software">تطوير البرمجيات</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>الدول</h4>
                            <ul>
                                <li><Link href="/countries/saudi-arabia">السعودية</Link></li>
                                <li><Link href="/countries/qatar">قطر</Link></li>
                                <li><Link href="/countries/kuwait">الكويت</Link></li>
                                <li><Link href="/countries/bahrain">البحرين</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>تواصل معنا</h4>
                            <ul>
                                <li>
                                    <a href="https://wa.me/16288006818" target="_blank" rel="noopener noreferrer">
                                        واتساب
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} فالكون برو ديجيتال - Aptiro LLC. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
