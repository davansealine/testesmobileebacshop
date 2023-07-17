import HomeScreen from "../screens/home.screen.js";
import LoginScreen from "../screens/login.screen.js";
import MyStoreScreen from "../screens/myStore.screen.js";
import ProdutoScreen from "../screens/produto.screen.js";

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let name = `Product da EBAC ${Math.floor(Math.random() * 50)}`
let valor1 = `${Math.floor(Math.random() * 50)}`
let valor2 = valor1 - (valor1*0,10)

describe('Access Admin Panel', () => {
    it('Should login with valid credentials', async () => {
        await HomeScreen.goToLogin()
        await LoginScreen.setStoreAddress(urlLoja)
        await LoginScreen.continue()
        await LoginScreen.continueWithStoreCredentials()
        await LoginScreen.login(usuario, senha)
        await LoginScreen.goToTwoFactorAuth()
        await LoginScreen.twoFactorLogin(senha)

        //expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await MyStoreScreen.getStoreName()).toEqual('EBAC - Shop')
    });

    it('Should register one product', async () => {
        await ProdutoScreen.goToProducts()
                await ProdutoScreen.addProd()
                await ProdutoScreen.addPhysical()
                await ProdutoScreen.addName(name)
                await ProdutoScreen.addPrecos(valor1, valor2)
                await ProdutoScreen.addInventory()
                await ProdutoScreen.pubProduct()


    })
})