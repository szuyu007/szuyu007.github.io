export async function initProjects() {
  const container = document.getElementById('project-list');
  if (!container) return;

  let projects = [];
  try {
    const res = await fetch('data/projects.json');
    if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
    const data = await res.json();
    projects = data.projects || [];
  } catch (err) {
    console.warn('[projects] fetch failed, falling back to inline data:', err);
    projects = FALLBACK_PROJECTS;
  }

  container.innerHTML = projects.map(renderProject).join('');
}

function renderProject(p) {
  const tags = (p.tags || [])
    .map(tag => `<span class="project-tag">${escape(tag)}</span>`)
    .join('');

  return `
    <li class="project-item">
      <a href="${escape(p.url || '#')}" class="project-link" ${p.url && p.url !== '#' ? 'target="_blank" rel="noopener"' : ''}>
        <span class="project-id">${escape(p.id)}</span>
        <div class="project-info">
          <h3 class="project-title">
            ${escape(p.title)}
            <span class="project-status" data-status="${escape(p.status)}">${escape(p.status.replace('-', ' '))}</span>
          </h3>
          <p class="project-description">${escape(p.description)}</p>
        </div>
        <div class="project-tags">${tags}</div>
        <span class="project-arrow" aria-hidden="true">→</span>
      </a>
    </li>
  `;
}

function escape(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// Fallback for when fetch fails (e.g., file:// protocol without a server)
const FALLBACK_PROJECTS = [
  { id: 'SP01', title: 'Judge Sentencing Analysis', description: 'Data-driven exploration of judicial sentencing patterns.', tags: ['legal-tech', 'data'], status: 'in-progress', url: '#' },
  { id: 'SP02', title: 'Credit Card Optimizer', description: 'Recommends the best card for any purchase. Live and in daily use.', tags: ['consumer', 'deployed'], status: 'deployed', url: '#' },
  { id: 'SP06', title: 'Case Tracker', description: 'A focused workspace for ongoing legal cases.', tags: ['legal-tech'], status: 'in-progress', url: '#' },
  { id: 'SP09', title: 'Courtroom Simulation', description: 'Interactive courtroom scenarios for law students.', tags: ['legal-tech', 'ai'], status: 'in-progress', url: '#' },
  { id: 'SP11', title: 'This Portfolio', description: 'The site you\'re reading. Hand-built, no frameworks.', tags: ['design', 'personal'], status: 'in-progress', url: '#' }
];
