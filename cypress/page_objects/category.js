class category {
    
    get mensCategoryTab() {
        return cy.get('a#ui-id-5');
    }
    get mensCategoryTops(){
        return cy.get("dd > .items > :nth-child(1) > a");
    }
    get filterByColour(){
        return cy.clickElementByNthChild("5");
    }
    get redColour(){
        return cy.get('div.swatch-option.color[option-id="58"][option-label="Red"]');

    }
}
export default new category();