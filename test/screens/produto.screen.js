class ProdutoScreen{

     get #enterProducts(){
             return $('//android.widget.FrameLayout[@content-desc="Products"]/android.widget.ImageView')
        }

     get #addProduct(){
             return $('//android.widget.ImageButton[@content-desc="Add products"]')
        }

     get #productField(){
             return $('android= new UiSelector().text("Simple physical product")')
        }

     get #nameProduct(){
             return $('android= new UiSelector().text("Enter Product Title")')
       }

     get #addPrice(){
             return $('android= new UiSelector().text("Add price")')
       }

     get #regPrice(){
             return $('android=new UiSelector().text("Regular price").className("android.widget.EditText")')
       }

     get #salePrice(){
             return $('android=new UiSelector().text("Sale price").className("android.widget.EditText")')
       }

     get #navigate(){
             return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
       }

     get #typePriceProduct() {
             return $('android=new UiSelector().text("0").className("android.widget.EditText")')
       }

      get #inventory(){
             return $('android= new UiSelector().text("Inventory")')
       }

      get #stockUnity(){
             return $('id:soldIndividually_switch')
       }

      get #publish(){
             return $('android= new UiSelector().text("PUBLISH")')
       }

     async goToProducts(){
            await this.#enterProducts.click()
        }

     async addProd(){
            await this.#addProduct.click()
        }


     async addPhysical(){
            await this.#productField.click()
        }

     async addName(name){
            await this.#nameProduct.setValue(name)
        }

     async addPrecos(valor1, valor2){
            await this.#addPrice.click()
            await this.#typePriceProduct.clearValue()
            await this.#regPrice.setValue(valor1)
            await this.#typePriceProduct.clearValue()
            await this.#salePrice.setValue(valor2)
            await this.#navigate.click()
        }

     async addInventory(){
            await this.#inventory.click()
            await this.#stockUnity.click()
            await this.#navigate.click()
        }


     async pubProduct(){
            await this.#publish.click()
            await this.#navigate.click()
        }
    }
export default new ProdutoScreen()