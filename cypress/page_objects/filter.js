class filter {
    
    get mensCategoryTab() {
        return cy.get("#ui-id-5 > :nth-child(2)");
    }
    get mensCategoryTops(){
        return cy.get("dd > .items > :nth-child(1) > a");
    }
    get filterByColour(){
        return cy.get(":nth-child(5) > .filter-options-title").should("be.visible");
    }
    get redColour(){
        return cy.get('a[href="https://magento.softwaretestingboard.com/men/tops-men.html?color=58"] > .swatch-option').should("be.visible");

    }
}
export default new filter();