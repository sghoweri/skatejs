/* eslint-env jest */

import { mount } from '@skatejs/bore';
import './';

describe('samples/simple', () => {
    it('renders what we expect', (done) => {
        let el = document.createElement('hello-simple');
        mount( el ).wait(e => {
            expect(e.shadowRoot.firstChild.textContent).toBe('Hello, !');
            expect(e.node.textContent).toBe('');
            done();
        });
    });

    it('renders slot contents', (done) => {
        let el = document.createElement('hello-simple');
        el.textContent = 'World';
        mount( el ).wait(e => {
            expect(e.shadowRoot.firstChild.textContent).toBe('Hello, !');
            expect(e.node.textContent).toBe('World');
            done();
        });
    });
});
