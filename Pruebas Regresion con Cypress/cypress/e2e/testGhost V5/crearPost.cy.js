//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Crear post
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('Crear post con datos vacios', () => {
    it('Debe permitir crear un post sin titulo ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.wait(1000)
      cy.get("a[data-test-new-post-button]").click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('div.koenig-editor__editor').type(" ")
      cy.get('.darkgrey > span').click()
      cy.get('.gh-publish-cta > .gh-btn > span ').click()      
      cy.get('Button[data-test-button="confirm-publish"]').click()      
      cy.get("span.green").should('contain',"Boom. It’s out there.")
      
      cy.screenshot('v5/post/post-vacio', { overwrite: true })
    })
  })


  
  describe('Crear posts con titulo y sin cuerpo', () => {
    it('Debe permitir crear un post con titulo y sin body ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.wait(1000)
      cy.get("a[data-test-new-post-button]").click()
      cy.get('textarea.gh-editor-title').type("post1")
      cy.get('div.koenig-editor__editor').type(" ")
      cy.get('.darkgrey > span').click()
      cy.get('.gh-publish-cta > .gh-btn > span ').click()      
      cy.get('Button[data-test-button="confirm-publish"]').click()      
      cy.get("span.green").should('contain',"Boom. It’s out there.")
      
      cy.screenshot('Regresion/v5/post-titulo-sin-cuerpo', { overwrite: true })
      cy.screenshot('v5/post/post-titulo-sin-cuerpo', { overwrite: true })
    })
  })


  describe('Crear posts con cuerpo y sin titulo', () => {
    it('Debe permitir crear un post sin titulo y con body ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.wait(1000)
      cy.get("a[data-test-new-post-button]").click()
      cy.get('textarea.gh-editor-title').type(" ")
      cy.get('div.koenig-editor__editor').type("Cuerpo del post.")
      cy.get('.darkgrey > span').click()
      cy.get('.gh-publish-cta > .gh-btn > span ').click()      
      cy.get('Button[data-test-button="confirm-publish"]').click()      
      cy.get("span.green").should('contain',"Boom. It’s out there.")
      
      cy.screenshot('v5/post/post-cuerpo-sin-titulo', { overwrite: true })
    })
  })

  describe('Crear posts completo', () => {
    it('Debe permitir crear un post completo ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")
      cy.wait(1000)
      cy.get("a[data-test-new-post-button]").click()
      cy.get('textarea.gh-editor-title').type("post1")
      cy.get('div.koenig-editor__editor').type("Cuerpo del post.")
      cy.get('.darkgrey > span').click()
      cy.get('.gh-publish-cta > .gh-btn > span ').click()      
      cy.get('Button[data-test-button="confirm-publish"]').click()      
      cy.get("span.green").should('contain',"Boom. It’s out there.")
      
      cy.screenshot('v5/post/post-completo', { overwrite: true })
    })
  })

