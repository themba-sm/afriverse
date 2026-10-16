import { useState } from 'react';
import { Plus } from './Icons.jsx';

export default function Accordion({ items, idPrefix = 'acc' }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`accordion__item ${isOpen ? 'is-open' : ''}`} key={it.q}>
            <h3>
              <button
                type="button"
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${i}`}
                id={`${idPrefix}-btn-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{it.q}</span>
                <Plus className="accordion__icon" />
              </button>
            </h3>
            <div id={`${idPrefix}-panel-${i}`} role="region" aria-labelledby={`${idPrefix}-btn-${i}`} className="accordion__panel" hidden={!isOpen}>
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
