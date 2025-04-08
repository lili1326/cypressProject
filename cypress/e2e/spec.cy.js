 
describe("First test", () => { // initie le test + description
    it("Vérifier le contenu de la page", () => { // déclare l'action
      cy.visit("/"); // url à rechercher
    
     //On prend la balise h1
     cy.get('h1');
     // On récupère son contenu dans une variable 
     cy.should(Titre => {
     expect(Titre).to.contain("Hello studi"); // on check si la variable contient Hello studi
      });
    });
  });

 