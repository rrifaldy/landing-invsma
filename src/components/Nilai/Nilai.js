import React from 'react';

const Nilai = () => {
    return (
        <div className="competitive-advantage-section">
            <div className="competitive-advantage-container">
                <div className="competitive-advantage-text-section">
                    <h2 className="competitive-advantage-title">Nilai-Nilai INVSMA (INVSMA Values)</h2>
                </div>

                <div className="competitive-advantage-features-grid">
                    {features.map((feature, index) => (
                        <div className="competitive-advantage-feature" key={index}>
                            <div className="competitive-advantage-icon-container">
                                <span className="competitive-advantage-icon">{feature.icon}</span>
                            </div>
                            <div>
                                <h3 className="competitive-advantage-feature-title">{feature.title}</h3>
                                <p className="competitive-advantage-feature-description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const features = [
    {
        title: 'Integrity',
        description: 'The quality of being honest and having strong moral principles. It involves consistency in actions, values, methods, and principles, and is often associated with trustworthiness and reliability.',
        icon: 'I',
    },
    {
        title: 'Niche',
        description: 'These are products or services designed to appeal to a specific segment of the market. For example, a company might produce organic, gluten-free snacks for health-conscious consumers. These products cater to a niche market rather than the mass market.',
        icon: 'N',
    },
    {
        title: 'Visionary',
        description: 'Forward-Thinking, Resilient and Persistent, Strategic Thinker.',
        icon: 'V',
    },
    {
        title: 'Sustainability',
        description: 'Consider their long-term impacts on society, the economy, and the environment.',
        icon: 'S',
    },
    {
        title: 'Muamalah',
        description: 'Governs financial and commercial dealings, ensuring they are conducted in a manner that is fair, transparent, and compliant with Islamic law.',
        icon: 'M',
    },
    {
        title: 'Amanah',
        description: 'Our key ethical concept that emphasizes integrity, honesty, and the importance of fulfilling obligations.',
        icon: 'A',
    },
];

export default Nilai;
