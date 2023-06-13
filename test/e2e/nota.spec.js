describe('Calculo da média final', () => {
    it('a media é zero se não tem notas', () => {
        cy.visit('/nota'); // Substitua o caminho "/nota" pela rota correspondente em sua aplicação
        cy.get('#nota-input').type('');
        cy.get('#calcular-btn').click();
        cy.get('#media-final').should('have.text', '0');
    });

    it('a média é (0.4 * a1) + (0.6 * a2) se tem apenas a1 e a2', () => {
        cy.visit('/nota');
        cy.get('#nota-input').type('3');
        cy.get('#nota-input2').type('5');
        cy.get('#calcular-btn').click();
        cy.get('#media-final').should('have.text', String(0.4 * 3 + 0.6 * 5));
    });

    it('a média é (0.4 * a3) + (0.6 * a2) se a3 substitui a1', () => {
        cy.visit('/nota');
        cy.get('#nota-input').type('0');
        cy.get('#nota-input2').type('5');
        cy.get('#nota-input3').type('3');
        cy.get('#calcular-btn').click();
        cy.get('#media-final').should('have.text', String(0.4 * 3 + 0.6 * 5));
    });

    it('a média é (0.4 * a1) + (0.6 * a3) se a3 substitui a2', () => {
        cy.visit('/nota');
        cy.get('#nota-input').type('6');
        cy.get('#nota-input2').type('0');
        cy.get('#nota-input3').type('5');
        cy.get('#calcular-btn').click();
        cy.get('#media-final').should('have.text', String(0.4 * 6 + 0.6 * 5));
    });
});
