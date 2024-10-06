import React from 'react';

const VisiMisi = () => {
    return (
        <div className="visi-misi-section">
            <div className="visi-misi-container">
                <div className="visi-misi-grid">
                    <div className="visi-misi-image-container">
                        <img
                            src="https://images.unsplash.com/photo-1611967564293-9cc64a2fd3dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludmVzdG1lbnR8ZW58MHwxfDB8fHww"
                            loading="lazy"
                            alt="Photo by Martin Sanchez"
                            className="visi-misi-image"
                        />
                    </div>

                    <div className="visi-misi-content">
                        <p className="visi-misi-highlight">Visi Misi Invsma</p>

                        <h1 className="visi-misi-title">Visi</h1>

                        <p className="visi-misi-description">
                            Empower SMEs, support syariah compliant business ecosystems, and be a trusted partner for innovative financial solutions in Asia and beyond.
                        </p>

                        <h2 className="visi-misi-subtitle">Misi</h2>

                        <ul className="visi-misi-list">
                            <li>Deliver Sharia-compliant investment and financing solutions to investors and SME financing partners.</li>
                            <li>Our commitment to integrity, transparency, and accountability aligns Islamic law with every transaction.</li>
                            <li>We aim to provide sustainable, long-term investment growth with a positive societal impact.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisiMisi;
