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
                <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
                <AboutSection sectionId="about" heading="Profile" />
                <InterestsSection sectionId="details" heading="Favorite Tools" />
                <ProjectsSection sectionId="features" heading="Professional Interests" />
                <ContactSection sectionId="github" heading="Get Ahold of Me!" />
            </Page>
        </>
    );
}
