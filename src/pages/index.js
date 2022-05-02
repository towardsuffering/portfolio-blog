import React from 'react';
import {
    AboutSection,
    ArticlesSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="caRot Blog" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
                <AboutSection sectionId="about" heading="Profile" />
                <InterestsSection sectionId="details" heading="Favorite Tools" />
                <ProjectsSection sectionId="interests" heading="Professional Interests" />
                <ContactSection sectionId="contact" heading="Get Ahold of Me!" />
            </Page>
        </>
    );
}
