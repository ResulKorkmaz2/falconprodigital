"use client";

import React from "react";

const About: React.FC = () => {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <span className="section-badge">من نحن</span>
                        <h2>شريكك الاستراتيجي في عالم الإعلانات الرقمية</h2>
                        <p>
                            فالكون برو ديجيتال هي وكالة متخصصة في إعلانات جوجل، نمتلك خبرة
                            واسعة في أسواق الخليج العربي. نفهم التحديات الفريدة لكل سوق
                            ونصمم استراتيجيات إعلانية مخصصة تحقق نتائج ملموسة.
                        </p>
                        <ul className="feature-list">
                            <li>فريق متخصص في إعلانات جوجل بخبرة أكثر من 5 سنوات</li>
                            <li>فهم عميق للسوق الخليجي والثقافة العربية</li>
                            <li>تقارير شفافة ومتابعة مستمرة للأداء</li>
                            <li>استراتيجيات مخصصة لكل نشاط تجاري</li>
                            <li>دعم مستمر على مدار الساعة عبر واتساب</li>
                        </ul>
                        <a
                            href="https://wa.me/16288006818?text=أريد معرفة المزيد عن فالكون برو ديجيتال"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            تحدث معنا الآن
                        </a>
                    </div>

                    {/* Animated Google Ads Dashboard Card */}
                    <div className="ads-dashboard-card">
                        {/* Header */}
                        <div className="ads-dash-header">
                            <div className="ads-dash-logo">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" fill="#4285F4" />
                                    <path d="M7 12l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Google Ads</span>
                            </div>
                            <div className="ads-dash-live">
                                <span className="live-dot"></span>
                                Live
                            </div>
                        </div>

                        {/* Metric Cards */}
                        <div className="ads-metrics-row">
                            <div className="ads-metric">
                                <span className="ads-metric-label">Clicks</span>
                                <span className="ads-metric-value ads-counter" data-idx="0">12,847</span>
                                <span className="ads-metric-change positive">▲ 24.5%</span>
                            </div>
                            <div className="ads-metric">
                                <span className="ads-metric-label">CTR</span>
                                <span className="ads-metric-value" data-idx="1">8.3%</span>
                                <span className="ads-metric-change positive">▲ 12.1%</span>
                            </div>
                            <div className="ads-metric">
                                <span className="ads-metric-label">Conv.</span>
                                <span className="ads-metric-value" data-idx="2">1,294</span>
                                <span className="ads-metric-change positive">▲ 31.8%</span>
                            </div>
                        </div>

                        {/* Animated Line Chart */}
                        <div className="ads-chart-container">
                            <svg className="ads-line-chart" viewBox="0 0 300 100" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(66,133,244,0.3)" />
                                        <stop offset="100%" stopColor="rgba(66,133,244,0)" />
                                    </linearGradient>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4285F4" />
                                        <stop offset="50%" stopColor="#34A853" />
                                        <stop offset="100%" stopColor="#FBBC04" />
                                    </linearGradient>
                                </defs>
                                {/* Area Fill */}
                                <path
                                    className="ads-chart-area"
                                    d="M0,80 Q20,70 40,65 T80,50 T120,55 T160,35 T200,40 T240,20 T280,25 L300,22 L300,100 L0,100 Z"
                                    fill="url(#chartGradient)"
                                />
                                {/* Line */}
                                <path
                                    className="ads-chart-line"
                                    d="M0,80 Q20,70 40,65 T80,50 T120,55 T160,35 T200,40 T240,20 T280,25 L300,22"
                                    fill="none"
                                    stroke="url(#lineGradient)"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                {/* Animated Dot */}
                                <circle className="ads-chart-dot" cx="0" cy="80" r="4" fill="#FBBC04" />
                            </svg>
                        </div>

                        {/* Bar Chart */}
                        <div className="ads-bar-section">
                            <span className="ads-bar-title">Campaign Performance</span>
                            <div className="ads-bars">
                                <div className="ads-bar-item">
                                    <div className="ads-bar-track">
                                        <div className="ads-bar-fill bar-1" style={{ width: "85%" }}></div>
                                    </div>
                                    <span className="ads-bar-label">Search</span>
                                </div>
                                <div className="ads-bar-item">
                                    <div className="ads-bar-track">
                                        <div className="ads-bar-fill bar-2" style={{ width: "72%" }}></div>
                                    </div>
                                    <span className="ads-bar-label">Display</span>
                                </div>
                                <div className="ads-bar-item">
                                    <div className="ads-bar-track">
                                        <div className="ads-bar-fill bar-3" style={{ width: "64%" }}></div>
                                    </div>
                                    <span className="ads-bar-label">YouTube</span>
                                </div>
                                <div className="ads-bar-item">
                                    <div className="ads-bar-track">
                                        <div className="ads-bar-fill bar-4" style={{ width: "91%" }}></div>
                                    </div>
                                    <span className="ads-bar-label">P.Max</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="ads-bottom-row">
                            <div className="ads-roi-badge">
                                <span className="ads-roi-label">ROAS</span>
                                <span className="ads-roi-value">4.8x</span>
                            </div>
                            <div className="ads-sparklines">
                                <svg width="60" height="24" viewBox="0 0 60 24">
                                    <polyline className="ads-sparkline spark-1" points="0,20 10,16 20,18 30,10 40,12 50,6 60,8" fill="none" stroke="#34A853" strokeWidth="2" />
                                </svg>
                                <svg width="60" height="24" viewBox="0 0 60 24">
                                    <polyline className="ads-sparkline spark-2" points="0,12 10,18 20,14 30,20 40,8 50,10 60,4" fill="none" stroke="#4285F4" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        {/* Floating Particles */}
                        <div className="ads-particle p1"></div>
                        <div className="ads-particle p2"></div>
                        <div className="ads-particle p3"></div>
                        <div className="ads-particle p4"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
