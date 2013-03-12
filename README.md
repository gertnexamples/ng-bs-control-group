#AngularJS - Twitter Bootstrap - Control group directives
This app will show you how to create Control group directives for Twitter Bootstrap.

## controlGroup Element directive
This directive uses a template with a label and where you can transclude your controls.
This gives you the flexibility to add all your controls.
Example:
```
<control-group for-attr="username" label="labels.username">
    <input type="text" class="input-large" name="username" id="username" ng-model="user.username"
           required ng-minlength="6" ng-maxlength="10">
    <span class="help-inline" ng-show="!formSignIn.username.$valid">{{labels.error_username}}</span>
</control-group>
 ```

 This will output:
  ```
  <div class="control-group" for-attr="username" label="labels.username">
     <label class="control-label ng-binding" for="username" ng-bind="label">Username</label>
     <div class="controls" ng-transclude="">
          <input type="text" class="input-large ng-scope ng-valid-maxlength ng-dirty ng-valid-minlength ng-invalid ng-invalid-required"
             name="username" id="username" ng-model="user.username" required="" ng-minlength="6" ng-maxlength="10">
          <span class="help-inline ng-scope ng-binding" ng-show="!formSignIn.username.$valid" style="">Required - between 6 and 10 chars.</span>
     </div>
  </div>
   ```

## controlGroup Attribute directive
This directive is an attribute directive that wraps your control with a control-group.
This is less verbose but is less flexible than controlGroup Element directive.
Example:
```
<input type="password" class="input-large" name="password" id="password"
           ng-model="$parent.user.password" required ng-minlength="8" ng-maxlength="12"
           help-label="labels.error_password" bs-control-group
           label="labels.password"
           show-help="!formSignIn.password.$valid">
 ```

 This will output:
 ```
 <div class="control-group ng-scope">
    <label class="control-label ng-scope ng-binding" for="password" ng-bind="label">Password</label>
    <div class="controls ng-scope">
        <input type="password" class="input-large ng-isolate-scope ng-scope ng-valid-maxlength ng-dirty ng-invalid ng-invalid-required ng-valid-minlength"
            name="password" id="password" ng-model="$parent.user.password" required="" ng-minlength="8" ng-maxlength="12"
            help-label="labels.error_password" bs-control-group="" label="labels.password" show-help="!formSignIn.password.$valid">
        <span class="help-inline ng-scope ng-binding" ng-show="showHelp" style="">Required - between 8 and 12 chars.</span>
     </div>
  </div>
  ```


## Running unit tests

Requires node.js, Testacular (npm install -g testacular) and a local or remote browser.

start scripts/test.sh (on windows: scripts\test.bat)
a browser will start and connect to the Testacular server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the config/testacular.conf.js file)
to run or re-run tests open another commandline
 ```
 testacular run
 ```

## End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + ./scripts/web-server.js or your backend server that hosts the angular static files.

Check out the end-to-end runner's documentation for more info.

to run do one of:
open http://localhost:8000/test/e2e/runner.html in your browser
run the tests from console with Testacular via scripts/e2e-test.sh or script/e2e-test.bat

## Running the example app

install node.js and run from commandline in root of project
 ```
 node scripts/web-server.js
   ```
Then navigate your browser to http://localhost:8000/app/index.html to see the app running in your browser.