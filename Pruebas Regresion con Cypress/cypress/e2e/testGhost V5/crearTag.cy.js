//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Crear Tag
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('Crear tag con datos vacios', () => {
    it('Debe permitir crear un post sin titulo ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")  
      cy.wait(1000)
      cy.get("a[href='#/tags/']").click()    
      cy.get("a[href='#/tags/new/']").click()
      
      cy.get('input[name="name"]').type(" ")
      cy.get('div > input[placeholder="15171A"]').type("FFFFFF")      
      cy.get('input[name="slug"]').type(" ")
      cy.get('textarea[name="description"]').type(" ")

      cy.get('header > section > button[type="Button"] > span').click()
      cy.get('button[type="Button"] > span').should('contain',"Retry")

      cy.screenshot('Regresion/v5/tag-vacio', { overwrite: true })
      cy.screenshot('v5/tag/tag-vacio', { overwrite: true })

    })
    
  })

  describe('Crear tag con solo titulo', () => {
    it('Debe permitir crear un post solo con el titulo', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")  
      cy.wait(1000)
      cy.get("a[href='#/tags/']").click()    
      cy.get("a[href='#/tags/new/']").click()
      
      cy.get('input[name="name"]').type("Tag1 ")
      cy.get('div > input[placeholder="15171A"]').type(" ")      
      cy.get('input[name="slug"]').type("  ")
      cy.get('textarea[name="description"]').type(" ")

      cy.get('header > section > button[type="Button"] > span').click()

      cy.get('button[type="Button"] > span').should('contain',"Retry")
      
      cy.screenshot('v5/tag/tag-solo-titulo', { overwrite: true })

    })
    
    
  })

  describe('Crear tag con solo titulo, slug y description', () => {
    it('Debe permitir crear un post con titulo, slug y description ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts")  
      cy.wait(1000)
      cy.get("a[href='#/tags/']").click()    
      cy.get("a[href='#/tags/new/']").click()
      
      cy.get('input[name="name"]').type("Tag1 ")
      cy.get('input[placeholder="15171A"]').type(" ")      
      cy.get('input[name="slug"]').type("_slug")
      cy.get('textarea[name="description"]').type("Description Tag1")

      cy.get('header > section > button[type="Button"] > span').click()

      cy.get('button[type="Button"] > span').should('contain',"Retry")
      
      cy.screenshot('v5/tag/tag-titulo-slug-desc', { overwrite: true })

    })
    
    
  })


  describe('Crear tag con color exadecimal que de error', () => {
    it('Debe alertar por color invalido vacio', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/posts") 
      cy.wait(1000) 
      cy.get("a[href='#/tags/']").click()    
      cy.get("a[href='#/tags/new/']").click()
      
      cy.get('input[name="name"]').type("Tag1 ")
      cy.get('input[placeholder="15171A"]').invoke('val', '').type(' ', {force: true})     
      cy.get('input[name="slug"]').type("  ")
      cy.get('textarea[name="description"]').type(" ")

      cy.get('header > section > button[type="Button"] > span').click()
      cy.get('[data-test-error="accentColor"]').should('contain',"The colour should be in valid hex format")

      cy.screenshot('v5/tag/tag-color-error', { overwrite: true })

    })

    it('Debe alertar por formato hexadecimal invalido', () => {
        cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
        cy.visit("http://localhost:2368/ghost/#/posts")  
        cy.wait(1000)
        cy.get("a[href='#/tags/']").click()    
        cy.get("a[href='#/tags/new/']").click()
        
        cy.get('input[name="name"]').type("Tag1 ")
        cy.get('input[placeholder="15171A"]').invoke('val', '').type('FFFFpG', {force: true})     
        cy.get('input[name="slug"]').type("  ")
        cy.get('textarea[name="description"]').type(" ")
  
        cy.get('header > section > button[type="Button"] > span').click()
        cy.get('p[data-test-error="accentColor"]').should('contain',"The colour should be in valid hex format")
        
        cy.screenshot('v5/tag/tag-color-invalido', { overwrite: true })
  
      })
    
    
  })