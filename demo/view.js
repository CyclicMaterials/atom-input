/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import combineClassNames from '@cyclic/util-combine-class-names';

function renderSection(headline, ...vtrees) {
  return ( // eslint-disable-line
    <div>
      <h4>{headline}</h4>
      <section className={`template-DemoPages_verticalSection`}>
        {vtrees}
      </section>
    </div>
  );
}

function slice(vtrees, counter, length) {
  return vtrees.slice(counter.count, counter.count += length);
}

function view({state$, id}, ...vtree$s) {
  return state$.combineLatest(
    vtree$s,
    (state, ...vtrees) => {
      const {componentName, className} = state;
      const counter = {count: 0};
      return ( // eslint-disable-line
        <div
          className={combineClassNames(id, componentName, className,
            `template-DemoPages_sectionContainer isVertical isCentered`)}>
          {renderSection(`Text input`, slice(vtrees, counter, 0))}
        </div>
      );
    }
  ).distinctUntilChanged();
}

export default view;
