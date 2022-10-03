/// <reference types="cypress"/>

// #Homework-HomeworkParametrizedTest
const params = [
    {arg:'Andrii', expected: 'Andrii'},
    {arg: 'Ihor', expected: 'Ihor'},
    {arg: 'Olena', expected: 'Olena'}
]

params.forEach(({arg , expected}) => {
    it(`testForStudent`, () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('nb-card-body').first().click();
        cy.get('[title="Forms"]').click();
        cy.get('[class="menu-item ng-tns-c141-11 ng-tns-c141-9 ng-star-inserted"]').click();
        cy.get('[id="exampleInputEmail1"][placeholder="Email"]').clear().type(arg);
        cy.get('[id="exampleInputEmail1"][placeholder="Email"]').should('contain.value', expected);
        cy.get('[id="exampleInputEmail1"][placeholder="Email"]').clear().type(arg);
        cy.get('[id="exampleInputEmail1"][placeholder="Email"]').should('contain.value', expected);
        cy.get('[id="exampleInputEmail1"][placeholder="Email"]').clear().type(arg);
        cy.get('[id="exampleInputEmail1"][placeholder="Email"]').should('contain.value', expected);
    })
})