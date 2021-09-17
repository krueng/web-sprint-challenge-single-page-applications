describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const sizeSelect = () => cy.get('select[name=size]');
    const topping1Input = () => cy.get('input[name=topping1]');
    const topping2Input = () => cy.get('input[name=topping2]');
    const topping3Input = () => cy.get('input[name=topping3]');
    const submitBtn = () => cy.get('button[id=order-button]');
    const anyInput = () => cy.get('input[name=anyinput]');

    it('Sanity check to ensure the test is working', () => {
        expect(9 * 9).to.equal(81);
    })

    it('Check if the proper elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        sizeSelect().should('exist');
        topping1Input().should('exist');
        topping2Input().should('exist');
        topping3Input().should('exist');
        submitBtn().should('exist');
        cy.contains('submit').should('exist');
        anyInput().should('not.exist');
    })

    describe('Filling out the inputs, submit then check after to be empty', () => {
        it('Filling out the Name, Email, size, topping1 to 3, and submit', () => {
            submitBtn()
                .should('be.disabled')

            nameInput()
                .should('have.value', '')
                .type('Frist Lats')
                .should('have.value', 'Frist Lats')

            emailInput()
                .should('have.value', '')
                .type('frist@lats.name')
                .should('have.value', 'frist@lats.name')

            sizeSelect()
                .should('have.value', '')
                .select('Large')
                .should('have.value', 'Large')

            topping1Input()
                .not('[disabled]')
                .uncheck().should('not.be.checked')
                .check()
            topping2Input()
                .not('[disabled]')
                .uncheck().should('not.be.checked')
                .check()
            topping3Input()
                .not('[disabled]')
                .uncheck().should('not.be.checked')
                .check()

            submitBtn()
                .should('be.enabled')
                .click()

        })

        it('Check for form validation if an input is left empty', () => {
            nameInput()
                .should('have.value', '')

            emailInput()
                .should('have.value', '')

            sizeSelect()
                .should('have.value', '')

            topping1Input()
                .uncheck().should('not.be.checked')

            topping2Input()
                .uncheck().should('not.be.checked')

            topping3Input()
                .uncheck().should('not.be.checked')

            submitBtn()
                .should('be.disabled')
        })

    })

})