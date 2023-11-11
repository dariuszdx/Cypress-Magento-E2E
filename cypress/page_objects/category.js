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
        return cy.get('[href="https://magento.softwaretestingboard.com/men/tops-men.html?color=58"] > .swatch-option');
    }
}
export default new category();