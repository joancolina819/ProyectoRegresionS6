//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Crear Pages
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('Editar perfil con datos vacios', () => {

    

    it('Debe generar alerta al editar el nombre del perfil con datos vacios" ', () => {
        cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()
        cy.get("input#user-name").invoke('val', '').type(' ', {force: true});   
        cy.get("input#user-slug").type(" ") 
        cy.get(' div.error > p.response' ).should('contain',"Please enter a name.")
        
        cy.screenshot('v5/perfil/perfil-nombre-vacio', { overwrite: true })
        
        //cy.get("header > section > button[type='Button'] > span").should('contain',"Save")
      })

      it('Debe generar alerta al editar el correo del perfil con datos vacios" ', () => {
        cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click() 
        cy.get("input#user-email").invoke('val', '').type(' ', {force: true});
        cy.get("input#user-slug").type(" ") 
        cy.get(' div.error > p.response' ).should('contain',"Please supply a valid email address")
        
        cy.screenshot('v5/perfil/perfil-correo-vacio', { overwrite: true })
        
        //cy.get("header > section > button[type='Button'] > span").should('contain',"Save")
      })
    
    
    it('No debe permitir editar el perfil con datos vacios" ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/settings/staff")
      cy.wait(1000)
      cy.get("article[class='apps-card-app']").click()
      cy.get("input#user-name").type(" ")      
      cy.get("input#user-slug").type(" ")      
      cy.get("input#user-email").type(" ")
      cy.get("input#user-location").type(" ")
      cy.get("input#user-website").type(" ")
      cy.get("input[id='user-facebook").type(" ")
      cy.get("input[id='user-twitter").type(" ")
      cy.get("textarea#user-bio").type(" ")
      cy.get("input#user-password-old").type(" ")
      cy.get("input#user-password-new").type(" ")
      cy.get("input#user-new-password-verification").type(" ")

      cy.get('button.button-change-password').click()
      cy.get('button.button-change-password').should('contain',"Retry")
      
      cy.screenshot('v5/perfil/perfil-vacio')
      
      //cy.get("header > section > button[type='Button'] > span").should('contain',"Save")
    })
  })


  describe('Editar perfil con solo nombre', () => {
    it('Debe permitir editar perfil cambiando unicamente nombre" ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/settings/staff")
      cy.wait(1000)
      cy.get("article[class='apps-card-app']").click()

      cy.get("input#user-name").type("Edwin Tijaro")
      //cy.get('button.button-change-password').click()
      //cy.get('button.button-change-password').should('contain',"Retry")
      cy.get("header > section > button > span").click()

      cy.get("header > section > button> span").should('contain',"Save")
      
      cy.screenshot('v5/perfil/perfil-nombre', { overwrite: true })
    })    
  })

describe('Editar perfil con solo nombre y correo', () => {
    it('Debe permitir editar perfil cambiando unicamente nombre y correo" ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/settings/staff")
      cy.wait(1000)
      cy.get("article[class='apps-card-app']").click()
  
      cy.get('input#user-name').invoke('val', '').type('Edwin Tijaro', {force: true});
      cy.get("input#user-email").invoke('val', '').type("e.tijaro@uniandes.edu.co", {force: true})

      cy.get("header > section > button > span").click()
      cy.get("header > section > button> span").should('contain',"Save")
      
      cy.screenshot('Regresion/v5/perfil-nombre-correo', { overwrite: true })
      cy.screenshot('v5/perfil/perfil-nombre-correo', { overwrite: true })
    })
 })


 describe('Editar perfil de facebook', () => {
    it('Debe permitir editar el perfil de facebook" ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/settings/staff")
      cy.wait(1000)
      cy.get("article[class='apps-card-app']").click()
     
      cy.get("input[id='user-facebook").type(" ").invoke('val', '').type("NameFacebbok", {force: true})

      cy.get("header > section > button > span").click()
      cy.get("header > section > button> span").should('contain',"Save")
      
      cy.screenshot('v5/perfil/perfil-facebook')
    })

    it('Debe permitir editar el perfil de facebook con usuario vacio" ', () => {
        cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()
       
        cy.get("input[id='user-facebook").type(" ").invoke('val', '').type(" ", {force: true})
  
        cy.get("header > section > button > span").click()
        cy.get("header > section > button> span").should('contain',"Save")
        cy.screenshot('v5/perfil/perfil-facebook-vacio')
      })
 })



 describe('Editar perfil de twitter', () => {
    it('Debe permitir editar el perfil de twitter" ', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.visit("http://localhost:2368/ghost/#/settings/staff")
      cy.wait(1000)
      cy.get("article[class='apps-card-app']").click()
     
      cy.get("input[id='user-twitter").type(" ").invoke('val', '').type("NameTwitter", {force: true})

      cy.get("header > section > button > span").click()
      cy.get("header > section > button> span").should('contain',"Save")
      cy.screenshot('v5/perfil/perfil-twitter', { overwrite: true })
    })

    it('Debe permitir editar el perfil de twitter con usuario vacio" ', () => {
        cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
        cy.visit("http://localhost:2368/ghost/#/settings/staff")
        cy.wait(1000)
        cy.get("article[class='apps-card-app']").click()
       
        cy.get("input[id='user-twitter").type(" ").invoke('val', '').type(" ", {force: true})
  
        cy.get("header > section > button > span").click({force: true})
        cy.get("header > section > button> span").should('contain',"Save")
        cy.screenshot('v5/perfil/perfil-twitter-vacio', { overwrite: true })
      })
 })



  

