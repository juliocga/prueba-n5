import React from 'react'
import SideMenu from './SideMenu'

describe('<SideMenu />', () => {
  it('renders', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideMenu showmenu={true} setShowMenu={onClickSpy} />)
    cy.get('a').contains('Productos').should("be.visible");
    cy.get('a').contains('Add Item').should("be.visible");
    cy.get('a').contains('Test de Lógica').should("be.visible");
  })
})