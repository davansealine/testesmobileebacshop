class MyStoreScreen{
    get myStoreLogo(){
        return $('~My store')
    }

    get myStoreName(){
        return $('id:toolbar_subtitle')
    }

    async getStoreName(){
        return await this.myStoreName.getText()

    }

    async myStoreLogoIsDisplayed(){

    try{
                await this.myStoreLogo.waitForDisplayed({timeout: 20000})
            if(myStoreLogo.isDisplayed()){
                 await this.myStoreLogo.waitForExist()
                 return await this.myStoreLogo.isDisplayed()
                }
         }catch(error){
                console.log('Pass is not displayed.')
            }





    }
}

export default new MyStoreScreen()