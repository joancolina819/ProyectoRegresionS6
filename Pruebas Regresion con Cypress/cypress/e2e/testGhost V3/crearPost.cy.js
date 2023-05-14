//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Crear post
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('Crear post con datos vacios', () => {
    it('Debe permitir crear un post sin titulo ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.get("a[href='#/editor/post/']").click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('div.koenig-editor__editor').type(" ")
      cy.get('div.gh-publishmenu-trigger > span').click()
      cy.get('button.gh-publishmenu-button > span ').click()
      cy.get("span.gh-notification-title").should('contain',"Published")
      
      cy.screenshot('v3/post/post-vacio', { overwrite: true })
    })
  })


  
  describe('Crear posts con titulo y sin cuerpo', () => {
    it('Debe permitir crear un post con titulo y sin body ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.get("a[href='#/editor/post/']").click()
      cy.get('textarea.gh-editor-title').type("post1")
      cy.get('div.koenig-editor__editor').type(" ")
      cy.get('div.gh-publishmenu-trigger > span').click()
      cy.get('button.gh-publishmenu-button > span ').click()
      cy.get("span.gh-notification-title").should('contain',"Published")
      
      cy.screenshot('Regresion/v3/post-titulo-sin-cuerpo', { overwrite: true })
      cy.screenshot('v3/post/post-titulo-sin-cuerpo', { overwrite: true })
    })
  })


  describe('Crear posts con cuerpo y sin titulo', () => {
    it('Debe permitir crear un post sin titulo y con body ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.get("a[href='#/editor/post/']").click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('div.koenig-editor__editor').type("Cuerpo del post.")
      cy.get('div.gh-publishmenu-trigger > span').click()
      cy.get('button.gh-publishmenu-button > span ').click()
      cy.get("span.gh-notification-title").should('contain',"Published")
      
      cy.screenshot('v3/post/post-cuerpo-sin-titulo', { overwrite: true })
    })
  })

  describe('Crear posts completo', () => {
    it('Debe permitir crear un post completo ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.get("a[href='#/editor/post/']").click()
      cy.get('textarea.gh-editor-title').type("post1")
      cy.get('div.koenig-editor__editor').type("Cuerpo del post.")
      cy.get('div.gh-publishmenu-trigger > span').click()
      cy.get('button.gh-publishmenu-button > span ').click()
      cy.get("span.gh-notification-title").should('contain',"Published")
      
      cy.screenshot('v3/post/post-completo', { overwrite: true })
    })
  })

