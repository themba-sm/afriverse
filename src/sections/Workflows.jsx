import { useState } from 'react';
import { WORKFLOWS } from '../data/site.js';

/* Illustrative design patterns only. Clearly labelled as proposed flows. */
export default function Workflows() {
  const [id, setId] = useState(WORKFLOWS[0].id);
  const wf = WORKFLOWS.find((w) => w.id === id);

  return (
    <section id="workflows" className="section section--dark" aria-labelledby="workflows-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Featured workflow examples</p>
          <h2 id="workflows-title" className="h2">See how a flow can be designed.</h2>
          <p className="lead">Illustrative patterns that show how we think. Your version is shaped around your tools, your team and your customers.</p>
        </div>

        <div className="wf-switch" role="group" aria-label="Choose a workflow example">
          {WORKFLOWS.map((w) => (
            <button key={w.id} type="button" className={`chip ${w.id === id ? 'is-active' : ''}`} aria-pressed={w.id === id} onClick={() => setId(w.id)}>
              {w.label}
            </button>
          ))}
        </div>

        <div className="wf card" aria-live="polite">
          <p className="wf__intro">{wf.intro}</p>
          <ol className="wf__steps" key={wf.id}>
            {wf.steps.map((s, i) => (
              <li className="wf__step" key={s.t}>
                <span className="wf__dot" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3 className="wf__title">{s.t}</h3>
                  <p className="muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="wf__note">Illustrative example of a proposed workflow. It is not a live system or a past client project.</p>
        </div>
      </div>
    </section>
  );
}
