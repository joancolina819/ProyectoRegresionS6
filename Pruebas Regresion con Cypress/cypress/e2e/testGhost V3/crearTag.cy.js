//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Crear Tag
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('Crear tag con datos vacios', () => {
    it('Debe permitir crear un post sin titulo ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")  
      cy.get("a[href='#/tags/']").click()    
      cy.get("a[href='#/tags/new/']").click()
      
      cy.get('input[name="name"]').type(" ")
      cy.get('input[name="accent-color"]').type("FFFFFF")      
      cy.get('input[name="slug"]').type(" ")
      cy.get('textarea[name="description"]').type(" ")

      cy.get('header > section > button[type="Button"] > span').click()
      cy.get('button[type="Button"] > span').should('contain',"Retry")

      cy.screenshot('Regresion/v3/tag-vacio', { overwrite: true })
      cy.screenshot('v3/tag/tag-vacio', { overwrite: true })

    })
    
  })

  describe('Crear tag con solo titulo', () => {
    it('Debe permitir crear un post solo con el titulo', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")  
      cy.get("a[href='#/tags/']").click()    
      cy.get("a[href='#/tags/new/']").click()
      
      cy.get('input[name="name"]').type("Tag1 ")
      cy.get('input[name="accent-color"]').type(" ")      
      cy.get('input[name="slug"]').type("  ")
      cy.get('textarea[name="description"]').type(" ")

      cy.get('header > section > button[type="Button"] > span').click()

      cy.get('button[type="Button"] > span').should('contain',"Retry")
      
      cy.screenshot('v3/tag/tag-solo-titulo', { overwrite: true })

    })
    
    
  })

  describe('Crear tag con solo titulo, slug y description', () => {
    it('Debe permitir crear un post con titulo, slug y description ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")  
      cy.get("a[href='#/tags/']").click()    
      cy.get("a[href='#/tags/new/']").click()
      
      cy.get('input[name="name"]').type("Tag1 ")
      cy.get('input[name="accent-color"]').type(" ")      
      cy.get('input[name="slug"]').type("_slug")
      cy.get('textarea[name="description"]').type("Description Tag1")

      cy.get('header > section > button[type="Button"] > span').click()

      cy.get('button[type="Button"] > span').should('contain',"Retry")
      
      cy.screenshot('v3/tag/tag-titulo-slug-desc', { overwrite: true })

    })
    
    
  })


  describe('Crear tag con color exadecimal que de error', () => {
    it('Debe alertar por color invalido vacio', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")  
      cy.get("a[href='#/tags/']").click()    
      cy.get("a[href='#/tags/new/']").click()
      
      cy.get('input[name="name"]').type("Tag1 ")
      cy.get('input[name="accent-color"]').invoke('val', '').type(' ', {force: true})     
      cy.get('input[name="slug"]').type("  ")
      cy.get('textarea[name="description"]').type(" ")

      cy.get('header > section > button[type="Button"] > span').click()
      cy.get('span.error > :nth-child(2)').should('contain',"The color should be in valid hex format")

      cy.screenshot('v3/tag/tag-color-error')

    })

    it('Debe alertar por formato hexadecimal invalido', () => {
        cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
        cy.visit("http://localhost:2368/ghost/#/posts")  
        cy.get("a[href='#/tags/']").click()    
        cy.get("a[href='#/tags/new/']").click()
        
        cy.get('input[name="name"]').type("Tag1 ")
        cy.get('input[name="accent-color"]').invoke('val', '').type('FFFFpG', {force: true})     
        cy.get('input[name="slug"]').type("  ")
        cy.get('textarea[name="description"]').type(" ")
  
        cy.get('header > section > button[type="Button"] > span').click()
        cy.get('span.error > :nth-child(2)').should('contain',"The color should be in valid hex format")
        
        cy.screenshot('v3/tag/tag-color-invalido', { overwrite: true })
  
      })
    
    
  })