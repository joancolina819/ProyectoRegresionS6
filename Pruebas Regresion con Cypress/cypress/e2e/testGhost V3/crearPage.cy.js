//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Crear Pages
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('Crear pages con datos vacios', () => {
    it('Debe permitir crear un page con titulo "sin titulo" ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('div.koenig-editor__editor').type(" ")
      cy.get('div.gh-publishmenu-trigger > span').click()
      cy.get('button.gh-publishmenu-button > span ').click()
      cy.get("span.gh-notification-title").should('contain',"Published")
      
      cy.screenshot('v3/pages/pages-vacio', { overwrite: true })
    })
  })


  describe('Crear pages con titulo y sin cuerpo', () => {
    it('Debe permitir crear un page con titulo y sin cuerpo ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type("Page1")
      cy.get('div.koenig-editor__editor').type(" ")
      cy.get('div.gh-publishmenu-trigger > span').click()
      cy.get('button.gh-publishmenu-button > span ').click()
      cy.get("span.gh-notification-title").should('contain',"Published")
      
      cy.screenshot('Regresion/v3/pages-titulo-sin-cuerpo', { overwrite: true })
      cy.screenshot('v3/pages/pages-titulo-sin-cuerpo', { overwrite: true })
    })
  })


  describe('Crear pages con cuerpo y sin titulo', () => {
    it('Debe permitir crear un page con cuerpo y sin titulo', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('div.koenig-editor__editor').type("Cuerpo de la pagina.")
      cy.get('div.gh-publishmenu-trigger > span').click()
      cy.get('button.gh-publishmenu-button > span ').click()
      cy.get("span.gh-notification-title").should('contain',"Published")
      
      cy.screenshot('v3/pages/pages-cuerpo-sin-titulo', { overwrite: true })
    })
  })

  describe('Crear pages completo', () => {
    it('Debe permitir crear una page con datos completos ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/pages")
      cy.get("a[href='#/editor/page/']").click()
      cy.get('textarea.gh-editor-title').type("Page1")
      cy.get('div.koenig-editor__editor').type("Cuerpo de la pagina.")
      cy.get('div.gh-publishmenu-trigger > span').click()
      cy.get('button.gh-publishmenu-button > span ').click()
      cy.get("span.gh-notification-title").should('contain',"Published")
      
      cy.screenshot('v3/pages/pages-completo', { overwrite: true })
    })
  })


