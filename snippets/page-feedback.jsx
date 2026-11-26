const repository = "https://github.com/meupost/MultChat-Docks";

const copy = {
  pt: {
    question: "Esta página foi útil?",
    yes: "Sim",
    no: "Não",
    edit: "Sugerir edições",
    report: "Reportar problema",
    note: "Os links abrem um rascunho no GitHub para você revisar e enviar.",
    yesPrompt: "A página foi útil. O que ajudou você?",
    noPrompt: "A página não respondeu à minha dúvida. O que faltou?",
    reportPrompt: "O que você encontrou e o que esperava encontrar?"
  },
  en: {
    question: "Was this page helpful?",
    yes: "Yes",
    no: "No",
    edit: "Suggest edits",
    report: "Report a problem",
    note: "The links open a draft on GitHub for you to review and submit.",
    yesPrompt: "The page was helpful. What helped you?",
    noPrompt: "The page did not answer my question. What was missing?",
    reportPrompt: "What did you find and what did you expect to find?"
  }
};

const iconPaths = {
  yes: "M7 10v11 M15 5.5 14 10h5.5a2 2 0 0 1 2 2.4l-1.5 7a2 2 0 0 1-2 1.6H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2l4-8a3 3 0 0 1 4 3.5Z",
  no: "M17 14V3 M9 18.5 10 14H4.5a2 2 0 0 1-2-2.4l1.5-7A2 2 0 0 1 6 3h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2l-4 8a3 3 0 0 1-4-3.5Z",
  edit: "m16 3 5 5 M4 15 16 3a2 2 0 0 1 3 0l2 2a2 2 0 0 1 0 3L9 20l-6 1 1-6Z",
  report: "m10.3 4.2-8.2 14A2 2 0 0 0 3.8 21h16.4a2 2 0 0 0 1.7-2.8l-8.2-14a2 2 0 0 0-3.4 0Z M12 9v4 M12 17h.01"
};

const issueUrl = (title, prompt, path) => {
  const body = `${prompt}\n\n${repository}/blob/main/${path}.mdx`;
  return `${repository}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
};

export const PageFeedback = ({ title, path, language = "pt" }) => {
  const labels = copy[language];
  const actions = [
    { icon: "yes", label: labels.yes, href: issueUrl(`${title} · ${labels.yes}`, labels.yesPrompt, path) },
    { icon: "no", label: labels.no, href: issueUrl(`${title} · ${labels.no}`, labels.noPrompt, path) },
    { icon: "edit", label: labels.edit, href: `${repository}/edit/main/${path}.mdx` },
    { icon: "report", label: labels.report, href: issueUrl(`${labels.report} · ${title}`, labels.reportPrompt, path) }
  ];
  return (
    <section className="multchat-feedback" aria-label={labels.question}>
      <span>{labels.question}</span>
      <div className="multchat-feedback-actions">
        {actions.map(({ icon, label, href }) => (
          <a key={icon} href={href} target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d={iconPaths[icon]} />
            </svg>
            {label}
          </a>
        ))}
      </div>
      <small>{labels.note}</small>
    </section>
  );
};
