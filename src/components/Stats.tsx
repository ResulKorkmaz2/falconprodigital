"use client";

import React from "react";

const Stats: React.FC = () => {
    const stats = [
        { number: "+500", label: "حملة إعلانية ناجحة" },
        { number: "+300%", label: "متوسط زيادة المبيعات" },
        { number: "+150", label: "عميل راضٍ" },
        { number: "4", label: "دول خليجية نخدمها" },
    ];

    return (
        <section className="section" id="stats">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
