'use strict';

/* -------------------------------------------------------------
 * Translations
 * ---------------------------------------------------------- */
const i18n = {
  en: {
    'meta.title': 'Michalis Smyrlis — CTO & Cybersecurity Researcher',
    'meta.desc': "I'm Michalis Smyrlis — CTO at Sphynx and cybersecurity researcher. I architect secure software, lead engineering teams, and coordinate EU-funded research projects.",

    'sidebar.status': 'Currently at Sphynx',
    'sidebar.title': 'CTO @ Sphynx · Cybersecurity researcher',
    'sidebar.btn': 'Contact',

    'contact.employment': 'Employment',
    'contact.work': 'Work',
    'contact.personal': 'Personal',

    'nav.about': 'About',
    'nav.resume': 'Resume',

    'about.eyebrow': 'About',
    'about.title': 'Hi — I help teams build <em>secure</em> software,<br>from research to production.',
    'about.kicker': 'CTO at Sphynx. Scientific Collaborator at the European University of Cyprus. Contributor and technical coordinator on 30+ EU cybersecurity research projects.',

    'stats.projects': 'EU projects',
    'stats.years': 'Years in cybersec',
    'stats.phd': 'City, University of London',

    'about.p1': "I'm a cybersecurity researcher and software engineer. I hold a BSc from the <strong>University of Crete</strong> and a PhD from <strong>City, University of London</strong>, where my doctoral research introduced a hybrid approach to cyber risk evaluation.",
    'about.p2': "As <strong>CTO at Sphynx</strong>, I lead the company's technical direction — architecting secure software, setting engineering standards, and shipping cybersecurity products from design to delivery. I've contributed to <strong>30+ European research projects</strong>, many of them as technical coordinator.",
    'about.p3': "I'm also a <strong>Scientific Collaborator</strong> at the European University of Cyprus, where I teach and supervise postgraduate research in the MSc Cybersecurity programme.",

    'focus.eyebrow': 'Focus areas',
    'focus.title': 'What I do',
    'focus.1.title': 'Cyber risk assessment',
    'focus.1.text': 'My PhD introduced a <em>hybrid</em> approach to cyber risk evaluation. I keep extending it in practice — modelling threats, quantifying exposure, and turning risk into concrete engineering decisions.',
    'focus.2.title': 'Secure software architecture',
    'focus.2.text': 'At Sphynx I design systems security-first — defining architecture, enforcing security-by-design, and keeping the codebase scalable and maintainable.',
    'focus.3.title': 'Teaching & thesis supervision',
    'focus.3.text': "I teach cybersecurity courses at MSc level and supervise Master's theses at the European University of Cyprus.",
    'focus.4.title': 'EU research & innovation',
    'focus.4.text': "I've contributed to <strong>30+ EU-funded cybersecurity projects</strong>, many as technical coordinator — translating research outputs into production-ready systems.",

    'resume.eyebrow': 'Resume',
    'resume.title': 'A career in cybersecurity —<br>research, engineering, and teaching.',
    'btn.download': 'Download CV',
    'btn.contact': 'Get in touch',

    'edu.eyebrow': '01 — Education',
    'edu.1.title': 'PhD, Cybersecurity',
    'edu.1.company': 'City, University of London',
    'edu.1.text': 'Thesis: <em>A hybrid approach to cyber risk evaluation.</em> Supervised by Prof. George Spanoudakis and Dr. Christos Kloukinas.',
    'edu.1.link': 'Read the thesis →',
    'edu.2.title': 'BSc, Computer Science',
    'edu.2.company': 'University of Crete',
    'edu.2.text': 'Thesis: <em>Evaluation and extension of question-answering systems over medical texts.</em>',

    'exp.eyebrow': '02 — Experience',
    'exp.1.title': 'Chief Technology Officer',
    'exp.1.text': "I lead Sphynx's technical direction — secure software architecture, engineering standards, and product delivery. I recruit and mentor engineers, run code reviews, and serve as technical lead across multiple EU-funded cybersecurity R&amp;I projects.",
    'exp.2.title': 'Chief Software Engineer',
    'exp.2.text': "Owned software architecture and delivery for Sphynx's products. Set development methodologies and coding standards, recruited and mentored engineers, and led multiple EU-funded projects.",
    'exp.3.title': 'Scientific Collaborator',
    'exp.3.company': 'European University Cyprus',
    'exp.3.text': 'Instructor for cybersecurity courses and supervisor for MSc theses.',
    'exp.4.title': 'Senior Software Engineer',
    'exp.4.text': 'Designed and built scalable software architectures for complex systems. Worked with cross-functional teams on requirements, specs, and debugging.',
    'exp.5.title': 'Software Engineer',
    'exp.5.text': 'R&amp;D for the EVOTION H2020 project.',
    'exp.6.title': 'Graduate Teaching Assistant',
    'exp.6.text': 'Taught <em>Security Audit and Certification</em> and <em>Systems Architecture</em>.',
    'exp.7.title': 'Research Assistant',
    'exp.7.text': 'Centre for Adaptive Computing Systems (CeNACS). R&amp;D on EU-funded projects including TOREADOR and CyberSURE.',
    'exp.8.title': 'Graduate Software Engineer',
    'exp.8.company': 'University General Hospital of Heraklion (PAGNI)',
    'exp.8.text': 'Designed and built the official Android app for PAGNI.',
  },

  el: {
    'meta.title': 'Μιχάλης Σμυρλής — CTO & Ερευνητής Κυβερνοασφάλειας',
    'meta.desc': 'Είμαι ο Μιχάλης Σμυρλής — CTO στη Sphynx και ερευνητής κυβερνοασφάλειας. Σχεδιάζω ασφαλές λογισμικό, ηγούμαι ομάδων μηχανικών και συντονίζω ευρωπαϊκά ερευνητικά έργα.',

    'sidebar.status': 'Αυτή τη στιγμή στη Sphynx',
    'sidebar.title': 'Τεχνικός Διευθυντής @ Sphynx · Ερευνητής κυβερνοασφάλειας',
    'sidebar.btn': 'Επαφή',

    'contact.employment': 'Απασχόληση',
    'contact.work': 'Εργασία',
    'contact.personal': 'Προσωπικό',

    'nav.about': 'Σχετικά',
    'nav.resume': 'Βιογραφικό',

    'about.eyebrow': 'Σχετικά',
    'about.title': 'Γεια — βοηθώ ομάδες να φτιάχνουν <em>ασφαλές</em> λογισμικό,<br>από την έρευνα στην παραγωγή.',
    'about.kicker': 'Τεχνικός Διευθυντής στη Sphynx. Επιστημονικός Συνεργάτης στο Ευρωπαϊκό Πανεπιστήμιο Κύπρου. Συνεισφέρω και συντονίζω τεχνικά σε 30+ ευρωπαϊκά ερευνητικά έργα κυβερνοασφάλειας.',

    'stats.projects': 'Ευρωπαϊκά έργα',
    'stats.years': 'Χρόνια στην κυβερνοασφάλεια',
    'stats.phd': 'City, University of London',

    'about.p1': 'Είμαι ερευνητής κυβερνοασφάλειας και μηχανικός λογισμικού. Κατέχω BSc από το <strong>Πανεπιστήμιο Κρήτης</strong> και PhD από το <strong>City, University of London</strong>, όπου η διδακτορική μου έρευνα εισήγαγε μια υβριδική προσέγγιση στην αξιολόγηση κυβερνοκινδύνου.',
    'about.p2': 'Ως <strong>Τεχνικός Διευθυντής στη Sphynx</strong>, ηγούμαι της τεχνικής κατεύθυνσης της εταιρείας — σχεδιάζοντας ασφαλές λογισμικό, θέτοντας πρότυπα μηχανικής, και παραδίδοντας προϊόντα κυβερνοασφάλειας από τον σχεδιασμό στην παραγωγή. Έχω συνεισφέρει σε <strong>30+ ευρωπαϊκά ερευνητικά έργα</strong>, πολλά ως τεχνικός συντονιστής.',
    'about.p3': 'Είμαι επίσης <strong>Επιστημονικός Συνεργάτης</strong> στο Ευρωπαϊκό Πανεπιστήμιο Κύπρου, όπου διδάσκω και επιβλέπω μεταπτυχιακή έρευνα στο πρόγραμμα MSc Κυβερνοασφάλειας.',

    'focus.eyebrow': 'Τομείς εστίασης',
    'focus.title': 'Τι κάνω',
    'focus.1.title': 'Αξιολόγηση κυβερνοκινδύνου',
    'focus.1.text': 'Το PhD μου εισήγαγε μια <em>υβριδική</em> προσέγγιση στην αξιολόγηση κυβερνοκινδύνου. Συνεχίζω να την επεκτείνω στην πράξη — μοντελοποιώντας απειλές, ποσοτικοποιώντας την έκθεση, και μετατρέποντας τον κίνδυνο σε συγκεκριμένες αποφάσεις μηχανικής.',
    'focus.2.title': 'Ασφαλής αρχιτεκτονική λογισμικού',
    'focus.2.text': 'Στη Sphynx σχεδιάζω συστήματα με προτεραιότητα στην ασφάλεια — ορίζοντας την αρχιτεκτονική, εφαρμόζοντας security-by-design, και διατηρώντας τον κώδικα κλιμακώσιμο και συντηρήσιμο.',
    'focus.3.title': 'Διδασκαλία & επίβλεψη διπλωματικών',
    'focus.3.text': 'Διδάσκω μαθήματα κυβερνοασφάλειας σε μεταπτυχιακό επίπεδο και επιβλέπω διπλωματικές εργασίες στο Ευρωπαϊκό Πανεπιστήμιο Κύπρου.',
    'focus.4.title': 'Ευρωπαϊκή έρευνα & καινοτομία',
    'focus.4.text': 'Έχω συνεισφέρει σε <strong>30+ ευρωπαϊκά έργα κυβερνοασφάλειας</strong>, πολλά ως τεχνικός συντονιστής — μετατρέποντας ερευνητικά αποτελέσματα σε συστήματα παραγωγής.',

    'resume.eyebrow': 'Βιογραφικό',
    'resume.title': 'Μια καριέρα στην κυβερνοασφάλεια —<br>έρευνα, μηχανική και διδασκαλία.',
    'btn.download': 'Κατέβασμα CV',
    'btn.contact': 'Επικοινωνία',

    'edu.eyebrow': '01 — Εκπαίδευση',
    'edu.1.title': 'PhD, Κυβερνοασφάλεια',
    'edu.1.company': 'City, University of London',
    'edu.1.text': 'Διατριβή: <em>Μια υβριδική προσέγγιση στην αξιολόγηση κυβερνοκινδύνου.</em> Επιβλέποντες: Καθ. George Spanoudakis και Δρ. Christos Kloukinas.',
    'edu.1.link': 'Διάβασε τη διατριβή →',
    'edu.2.title': 'BSc, Επιστήμη Υπολογιστών',
    'edu.2.company': 'Πανεπιστήμιο Κρήτης',
    'edu.2.text': 'Πτυχιακή: <em>Αξιολόγηση και επέκταση συστημάτων απάντησης ερωτήσεων σε ιατρικά κείμενα.</em>',

    'exp.eyebrow': '02 — Εμπειρία',
    'exp.1.title': 'Τεχνικός Διευθυντής',
    'exp.1.text': 'Ηγούμαι της τεχνικής κατεύθυνσης της Sphynx — ασφαλής αρχιτεκτονική λογισμικού, πρότυπα μηχανικής, και παράδοση προϊόντων. Στρατολογώ και καθοδηγώ μηχανικούς, κάνω ανασκοπήσεις κώδικα, και λειτουργώ ως τεχνικός υπεύθυνος σε πολλαπλά ευρωπαϊκά έργα έρευνας &amp; καινοτομίας κυβερνοασφάλειας.',
    'exp.2.title': 'Επικεφαλής Μηχανικός Λογισμικού',
    'exp.2.text': 'Υπεύθυνος για την αρχιτεκτονική λογισμικού και την παράδοση προϊόντων της Sphynx. Όρισα μεθοδολογίες ανάπτυξης και πρότυπα κώδικα, στρατολόγησα και καθοδήγησα μηχανικούς, και ηγήθηκα πολλαπλών ευρωπαϊκών έργων.',
    'exp.3.title': 'Επιστημονικός Συνεργάτης',
    'exp.3.company': 'Ευρωπαϊκό Πανεπιστήμιο Κύπρου',
    'exp.3.text': 'Διδάσκων μαθημάτων κυβερνοασφάλειας και επιβλέπων μεταπτυχιακών διπλωματικών εργασιών.',
    'exp.4.title': 'Ανώτερος Μηχανικός Λογισμικού',
    'exp.4.text': 'Σχεδίασα και υλοποίησα κλιμακώσιμες αρχιτεκτονικές λογισμικού για πολύπλοκα συστήματα. Συνεργασία με διατμηματικές ομάδες σε απαιτήσεις, προδιαγραφές, και αποσφαλμάτωση.',
    'exp.5.title': 'Μηχανικός Λογισμικού',
    'exp.5.text': 'Έρευνα &amp; ανάπτυξη για το έργο EVOTION (H2020).',
    'exp.6.title': 'Βοηθός Διδασκαλίας',
    'exp.6.text': 'Δίδαξα τα μαθήματα <em>Security Audit and Certification</em> και <em>Systems Architecture</em>.',
    'exp.7.title': 'Ερευνητικός Βοηθός',
    'exp.7.text': 'Centre for Adaptive Computing Systems (CeNACS). Έρευνα &amp; ανάπτυξη σε ευρωπαϊκά έργα, μεταξύ άλλων TOREADOR και CyberSURE.',
    'exp.8.title': 'Απόφοιτος Μηχανικός Λογισμικού',
    'exp.8.company': 'Πανεπιστημιακό Γενικό Νοσοκομείο Ηρακλείου (ΠΑΓΝΗ)',
    'exp.8.text': 'Σχεδίασα και υλοποίησα την επίσημη εφαρμογή Android για το ΠΑΓΝΗ.',
  },
};


/* -------------------------------------------------------------
 * Theme toggle
 * ---------------------------------------------------------- */
const themeBtn = document.querySelector('[data-theme-toggle]');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('theme', theme); } catch (e) {}
  if (themeBtn) {
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b0d0c' : '#efece3');
}

if (themeBtn) {
  applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}


/* -------------------------------------------------------------
 * Language toggle
 * ---------------------------------------------------------- */
const langBtn = document.querySelector('[data-lang-toggle]');
const langLabel = document.querySelector('.ctrl-lang-label');

function applyLang(lang) {
  const dict = i18n[lang];
  if (!dict) return;
  document.documentElement.setAttribute('lang', lang);
  try { localStorage.setItem('lang', lang); } catch (e) {}

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  if (dict['meta.title']) document.title = dict['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict['meta.desc']) metaDesc.setAttribute('content', dict['meta.desc']);

  if (langLabel) langLabel.textContent = lang === 'en' ? 'EL' : 'EN';
  if (langBtn) langBtn.setAttribute('aria-label', lang === 'en' ? 'Μετάφραση στα ελληνικά' : 'Translate to English');
}

(function initLang() {
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  const browserIsEl = (navigator.language || '').toLowerCase().startsWith('el');
  const initial = saved || (browserIsEl ? 'el' : 'en');
  applyLang(initial);
})();

if (langBtn) {
  langBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('lang') || 'en';
    applyLang(current === 'en' ? 'el' : 'en');
  });
}


/* -------------------------------------------------------------
 * Sidebar toggle (mobile)
 * ---------------------------------------------------------- */
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', () => {
    const isActive = sidebar.classList.toggle('active');
    sidebarBtn.setAttribute('aria-expanded', String(isActive));
  });
}


/* -------------------------------------------------------------
 * Tab navigation (About / Resume)
 * ---------------------------------------------------------- */
const tabs = Array.from(document.querySelectorAll('[data-nav-link]'));
const panels = Array.from(document.querySelectorAll('[data-page]'));

function activateTab(tab, { focus = false, updateHash = true } = {}) {
  if (!tab) return;
  const key = tab.dataset.key;

  tabs.forEach((t) => {
    const isActive = t === tab;
    t.classList.toggle('active', isActive);
    t.setAttribute('aria-selected', String(isActive));
    t.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  panels.forEach((panel) => {
    const isActive = panel.dataset.page === key;
    panel.classList.toggle('active', isActive);
    if (isActive) panel.removeAttribute('hidden');
    else panel.setAttribute('hidden', '');
  });

  if (focus) tab.focus();
  if (updateHash && key) history.replaceState(null, '', `#${key}`);
  window.scrollTo({ top: 0, behavior: 'auto' });
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => activateTab(tab));

  tab.addEventListener('keydown', (e) => {
    let next = -1;
    if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;

    if (next !== -1) {
      e.preventDefault();
      activateTab(tabs[next], { focus: true });
    }
  });
});

(function initFromHash() {
  const hash = (location.hash || '').replace('#', '').toLowerCase();
  if (!hash) return;
  const match = tabs.find((t) => t.dataset.key === hash);
  if (match) activateTab(match, { updateHash: false });
})();
