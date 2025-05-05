import React from 'react';
import { useTranslation } from 'react-i18next'; // Asegúrate de importar useTranslation

// Usa un nombre descriptivo como PrivacyPolicy
const PrivacyPolicy = () => {
    const { t } = useTranslation(); // Llama al hook para obtener la función t

    // --- Variables (pueden seguir siendo constantes si no dependen del idioma) ---
    const appName = "Estimator";
    // La fecha y el email se pueden manejar como variables si necesitas pasarlas
    // o dejarlas hardcodeadas si son fijas para todas las versiones/idiomas.
    // Aquí las mantenemos como constantes para simplicidad en este ejemplo.
    const effectiveDate = "5 de Mayo de 2025";
    const contactEmail = "ca.alberto.p@gmail.com";
    // --- Fin Variables ---


    return (
        // Añade los estilos que necesites, aquí usamos inline como ejemplo
        <section className="colorlib-about" data-section="privacy">
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>

                <section>
                    {/* Usamos interpolación para el nombre de la app */}
                    <h1>{t('privacy.title', { appName })}</h1>
                    <p>
                        {/* La etiqueta <strong> puede ir dentro de la traducción */}
                        <strong>{t('privacy.effectiveDateLabel')}</strong> {effectiveDate}
                    </p>
                    <p>{t('privacy.intro', { appName })}</p>
                </section>

                <section style={{ marginTop: '30px' }}>
                    <h2>{t('privacy.section1.title')}</h2>
                    <p>{t('privacy.section1.p1')}</p>

                    <h3>{t('privacy.section1.subtitle1')}</h3>
                    <p>{t('privacy.section1.p2')}</p>
                    <ul>
                        <li>{t('privacy.section1.item1')}</li>
                        {/* Descomenta y traduce si implementas cuentas de usuario
          <li>{t('privacy.section1.accountInfoItem')}</li>
           */}
                    </ul>

                    <h3>{t('privacy.section1.subtitle2')}</h3>
                    <p>{t('privacy.section1.p3')}</p>
                    <ul>
                        <li>{t('privacy.section1.item2')}</li>
                        <li>{t('privacy.section1.item3')}</li>
                        <li>{t('privacy.section1.item4')}</li>
                    </ul>
                </section>

                <section style={{ marginTop: '30px' }}>
                    <h2>{t('privacy.section2.title')}</h2>
                    <p>{t('privacy.section2.p1')}</p>
                    <ul>
                        <li>{t('privacy.section2.item1')}</li>
                        <li>{t('privacy.section2.item2')}</li>
                        <li>{t('privacy.section2.item3')}</li>
                        <li>{t('privacy.section2.item4')}</li>
                        <li>{t('privacy.section2.item5')}</li>
                    </ul>
                </section>

                <section style={{ marginTop: '30px' }}>
                    <h2>{t('privacy.section3.title')}</h2>
                    <p>{t('privacy.section3.p1')}</p>
                    <p>{t('privacy.section3.p2')}</p>
                    <ul>
                        <li>
                            <strong>{t('privacy.section3.subtitle1')}</strong> {t('privacy.section3.item1')}
                        </li>
                        <li>
                            <strong>{t('privacy.section3.subtitle2')}</strong> {t('privacy.section3.item2')}
                        </li>
                    </ul>
                </section>

                <section style={{ marginTop: '30px' }}>
                    <h2>{t('privacy.section4.title')}</h2>
                    <p>{t('privacy.section4.p1')}</p>
                </section>

                <section style={{ marginTop: '30px' }}>
                    <h2>{t('privacy.section5.title')}</h2>
                    <p>{t('privacy.section5.p1')}</p>
                </section>

                <section style={{ marginTop: '30px' }}>
                    <h2>{t('privacy.section6.title')}</h2>
                    <p>{t('privacy.section6.p1')}</p>
                    {/* Elige el párrafo que mejor aplique a tu caso */}
                    <p>{t('privacy.section6.localData')}</p>
                    {/* O */}
                    {/* <p>{t('privacy.section6.contactRequest')}</p> */}
                </section>

                <section style={{ marginTop: '30px' }}>
                    <h2>{t('privacy.section7.title')}</h2>
                    <p>{t('privacy.section7.p1')}</p>
                </section>

                <section style={{ marginTop: '30px' }}>
                    <h2>{t('privacy.section8.title')}</h2>
                    <p>{t('privacy.section8.p1')}</p>
                </section>

                <section style={{ marginTop: '30px' }}>
                    <h2>{t('privacy.section9.title')}</h2>
                    <p>{t('privacy.section9.p1')}</p>
                    <p>
                        {contactEmail} {/* El email puede no necesitar traducción */}
                    </p>
                </section>
            </div>
        </section>
    );
};

export default PrivacyPolicy;