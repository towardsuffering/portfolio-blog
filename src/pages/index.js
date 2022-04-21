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
            <Seo title="caRot" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
                <AboutSection sectionId="about" heading="Profile" />
                <InterestsSection sectionId="details" heading="Favorite Tools" />
                <ProjectsSection sectionId="interests" heading="Professional Interests" />
                <ContactSection sectionId="contact" heading="Get Ahold of Me!" />
            </Page>
        </>
    );
}
