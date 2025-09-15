"use client";

import config from "@/config.json";
import { trackPDFDownload } from "@/lib/analytics";
import { Code2, Sparkles, Package, FileText, Mail, Github, Calendar } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import ContactButton from "@/components/ContactButton";
import WritingCard from "@/components/WritingCard";

export default function Home() {
  const handlePDFClick = (trackingLabel) => {
    if (config.analytics.enabled && trackingLabel) {
      trackPDFDownload(trackingLabel);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      <div className="max-w-[700px] mx-auto px-4 py-20">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-semibold text-[#37352f] mb-3">
            {config.personal.name}
          </h1>
          <p className="text-[#787774] leading-[1.6]">
            {config.personal.tagline}
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Projects */}
          {config.projects && config.projects.length > 0 && (
            <Section title="Projects" icon={Code2}>
              <div className="space-y-1">
                {config.projects
                  .filter(project => project.featured)
                  .map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
              </div>
            </Section>
          )}

          {/* About */}
          {config.personal.about && config.personal.about.length > 0 && (
            <Section title="About" icon={Sparkles}>
              <div className="p-3 rounded-lg bg-white border border-[#e9e9e7]">
                {config.personal.about.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={`text-[#37352f] leading-[1.6] ${
                      index < config.personal.about.length - 1 ? "mb-3" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Section>
          )}

          {/* Expertise */}
          {config.expertise && config.expertise.length > 0 && (
            <Section title="Expertise" icon={Package}>
              <div className="flex flex-wrap gap-2">
                {config.expertise.map((skill, index) => (
                  <Tag key={index} text={skill} />
                ))}
              </div>
            </Section>
          )}

          {/* Writing */}
          {config.writing && config.writing.length > 0 && (
            <Section title="Writing" icon={FileText}>
              <div className="space-y-1">
                {config.writing.map((article, index) => (
                  <WritingCard
                    key={index}
                    {...article}
                    onClick={
                      article.type === "pdf" && article.trackingLabel
                        ? () => handlePDFClick(article.trackingLabel)
                        : undefined
                    }
                  />
                ))}
              </div>
            </Section>
          )}

          {/* Contact */}
          {config.contact && (
            <Section title="Connect">
              <div className="flex gap-2">
                {config.contact.email && (
                  <ContactButton
                    href={`mailto:${config.contact.email}`}
                    icon={Mail}
                    text="Email"
                  />
                )}
                {config.contact.github && (
                  <ContactButton
                    href={config.contact.github}
                    icon={Github}
                    text="GitHub"
                  />
                )}
                {config.contact.calendar && (
                  <ContactButton
                    href={config.contact.calendar}
                    icon={Calendar}
                    text="Schedule"
                  />
                )}
              </div>
            </Section>
          )}
        </main>
      </div>
    </div>
  );
}