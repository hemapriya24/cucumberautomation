$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Automation.feature");
formatter.feature({
  "line": 1,
  "name": "Testing login functionlity in automationpractice",
  "description": "",
  "id": "testing-login-functionlity-in-automationpractice",
  "keyword": "Feature"
});
formatter.before({
  "duration": 623918,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User checking login using valid username and password",
  "description": "",
  "id": "testing-login-functionlity-in-automationpractice;user-checking-login-using-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter valid username in username field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter valid password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user confirm whether it navigates to homepage screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 13941105383,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 6568016479,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_valid_username_in_username_field()"
});
formatter.result({
  "duration": 3367631010,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_valid_password_in_password_field()"
});
formatter.result({
  "duration": 3267798984,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 5525532319,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_whether_it_navigates_to_homepage_screen()"
});
formatter.result({
  "duration": 3000182172,
  "status": "passed"
});
formatter.after({
  "duration": 322009,
  "status": "passed"
});
formatter.before({
  "duration": 110757,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user add the product into cart",
  "description": "",
  "id": "testing-login-functionlity-in-automationpractice;user-add-the-product-into-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Productadding"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user select the category",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user select the product",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user add product into the cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "product proceed to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.user_select_the_category()"
});
formatter.result({
  "duration": 7273732407,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition1.user_select_the_product()"
});
formatter.result({
  "duration": 6827510811,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition1.user_add_product_into_the_cart()"
});
formatter.result({
  "duration": 3190782947,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition1.product_proceed_to_checkout()"
});
formatter.result({
  "duration": 6384777853,
  "status": "passed"
});
formatter.after({
  "duration": 261712,
  "status": "passed"
});
formatter.before({
  "duration": 219804,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "user place the order",
  "description": "",
  "id": "testing-login-functionlity-in-automationpractice;user-place-the-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Placingorder"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user check the product summary and proceed to checkout",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user choose the delivery address and proceed to checkout",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user agree the terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user proceeds the order",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user select the payment options",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "finally user place the order",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user logout from account",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition3.user_check_the_product_summary_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 5908387529,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition3.user_choose_the_delivery_address_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 6118377659,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition3.user_agree_the_terms_and_conditions()"
});
formatter.result({
  "duration": 1181146640,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition3.user_proceeds_the_order()"
});
formatter.result({
  "duration": 2955258787,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition3.user_select_the_payment_options()"
});
formatter.result({
  "duration": 2732651741,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition3.finally_user_place_the_order()"
});
formatter.result({
  "duration": 5027867628,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition3.user_logout_from_account()"
});
formatter.result({
  "duration": 3643119710,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:181)\r\n\tat com.automation.stepdefinition.StepDefinition3.user_logout_from_account(StepDefinition3.java:59)\r\n\tat ✽.Then user logout from account(Automation.feature:27)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 501758004,
  "status": "passed"
});
});