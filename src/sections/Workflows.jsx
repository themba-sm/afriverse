import { useState } from 'react';
import { WORKFLOWS } from '../data/site.js';

/* Illustrative demonstrations only: clearly labelled, and explicitly not
   connected to any live company accounts. */
const KIND = { trigger: 'Trigger', action: 'Action', outcome: 'Outcome' };

export default function Workflows() {
  const [id, setId] = useState(WORKFLOWS[0].id);
  const wf = WORKFLOWS.find((w) => w.id === id);

  return (
    <section id="workflows" className="section section--ivory on-ivory" aria-labelledby="workflows-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Featured automation workflows</p>
          <h2 id="workflows-title" className="h2">See how a flow can be designed.</h2>
          <p className="lead">
            Three illustrative examples showing how triggers, actions and outcomes can connect.
            Your version is shaped around your tools, your team and your customers.
          </p>
        </div>

        <div className="wf-switch" role="group" aria-label="Choose a workflow example">
          {WORKFLOWS.map((w) => (
            <button key={w.id} type="button" className={`chip chip--ink ${w.id === id ? 'is-active' : ''}`} aria-pressed={w.id === id} onClick={() => setId(w.id)}>
              {w.label}
            </button>
          ))}
        </div>

        <div className="wf wf--light" aria-live="polite">
          <p className="wf__intro">{wf.intro}</p>
          <ol className="wf__steps" key={wf.id}>
            {wf.steps.map((s, i) => (
              <li className="wf__step" key={s.t}>
                <span className="wf__dot" aria-hidden="true">{i + 1}</span>
                <div>
                  <p className={`wf__kind wf__kind--${s.k}`}>{KIND[s.k]}</p>
                  <h3 className="wf__title">{s.t}</h3>
                  <p className="muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="wf__note">Illustrative demonstration of a proposed workflow. Not a live system, not a past client project, and not connected to any live company accounts.</p>
        </div>
      </div>
    </section>
  );
}
