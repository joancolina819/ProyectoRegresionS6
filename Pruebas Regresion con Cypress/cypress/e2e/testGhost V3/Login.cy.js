
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Login
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Login con campo vacio
describe('Inicio de sesión con campos vacios', () => {
    it('Debe generar alerta al iniciar sesión con credenciales vacias', () => {
      cy.ingresar(' ', ' ')
      cy.get('p.main-error').should('contain','Please fill out the form to sign in.')// Verifica que el usuario ha iniciado sesión correctamente
      // cy.compareSnapshot('login', 0.0);
      cy.screenshot('Regresion/v3/login-vacio')
      cy.screenshot('v3/login/login-vacio', { overwrite: true })
    })
  })
  
//Login con credenciales incorrectas
  describe('Inicio de sesión con credenciales incorrectas', () => {
    it('Debe generar alerta al iniciar sesión con correo incorrecto', () => {
      cy.ingresar('David123@uniandes.edu.co', 'Contrasena_12asd3')
      cy.get('p.main-error').should('contain','There is no user with that email address.')// Verifica que el usuario ha iniciado sesión correctamente
      // cy.compareSnapshot('login', 0.1);
      cy.screenshot('v3/login/login-incorrecto1', { overwrite: true })
    })
    it('Debe generar alerta al iniciar sesión con conrtaseña incorrecto', () => {
      cy.ingresar('e.tijaro@uniandes.edu.co', '12345')
      cy.get('p.main-error').should('contain','Your password is incorrect.')// Verifica que el usuario ha iniciado sesión correctamente
      // cy.compareSnapshot('login', 0.2);
      cy.screenshot('v3/login/login-incorrecto2', { overwrite: true })
    })
  })


//Login correcto 
describe('Inicio de sesión', () => {
    it('Debe permitir iniciar sesión con credenciales válidas', () => {
      cy.ingresar('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.url().should('include', '/#/site') // Verifica que el usuario ha iniciado sesión correctamente
      cy.screenshot('v3/login/login-correcto', { overwrite: true })
    })
  })







//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//End of smart monkey
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------