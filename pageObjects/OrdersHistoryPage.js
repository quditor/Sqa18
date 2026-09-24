class OrdersHistoryPage {
    constructor(page) {
        this.page = page;
        this.ordersTable = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderIDDetails = page.locator(".col-text");

    }
    async verifyOrderDisplayInOrdersHistory(orderId){
        await this.ordersTable.waitFor();
            const count = await this.rows.count();
        for (let i = 0; i < count; ++i) {
           const rowOrderID = await this.rows.nth(i).locator("th").textContent(); 
           if(rowOrderID.includes(orderId)){
            await this.rows.nth(i).locator("button").first().click();
            break;
           }
    }
 }
    async getOrderID(){
       return await this.orderIDDetails.textContent();
 }
}
module.exports = {OrdersHistoryPage};