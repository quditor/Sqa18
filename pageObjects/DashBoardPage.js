class DashBoardPage {
    constructor (page) {
        this.page = page;
        this.products = page.locator ('.card-body');
        this.productsText = page.locator ('.card-body b');
        this.cart = page.locator ("[routerlink*= 'cart']");
        this.orders = page.locator ("button[routerlink*='myorders']");

    }

    async searchProductAndAddToCart(productName){
        await this.products.first().waitFor();
        const title = await this.productsText.allTextContents();
        console.log(title);
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if ((await this.products.nth(i).locator('b').textContent()).toLowerCase() === productName.toLowerCase()) {
                await this.products.nth(i).locator('text= Add to Cart').click();
                break;
            }
        }

    }
 
  async navigateToOrders(){
    await this.orders.click();
  }

  async navigateToCart(){
    await this.cart.click();
  }
}
module.exports = { DashBoardPage };