import { Page } from '@playwright/test'

export class LoginPage {
    page: Page
    constructor(page: Page) {
        this.page = page
    }

    loginButton = () => this.page.getByText( 'Login')
    loginButtonPopup = () => this.page.getByRole('button', { name: 'Log In' })
    userNameLabel = () => this.page.getByText('E-mail/Username')
    passwordLabel = () => this.page.getByText('Password',{exact:true})
    userName = () => this.page.locator("input[name='username']")
    password = () => this.page.locator("input[name='password']")

    



    async visitLoginpage(){
        await this.page.goto('/')
    }
    async clickOnLoginButton(){
        await this.loginButton().click()
    }

    async typeUsername(userName : string){
        await this.userNameLabel().click()
        await this.userName().fill(userName)
   
    }

    async typePassword(password : string){
       await this.passwordLabel().click()
        await this.password().fill(password)
    }

    

    async userLogin (userName:string , password : string)  {
      await this.typeUsername(userName)
      await this.typePassword(password)
      await this.loginButtonPopup().click()

    }

}
