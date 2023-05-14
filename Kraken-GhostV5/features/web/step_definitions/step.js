const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I enter post title {kraken-string}', async function (posttitle) {
    let element = await this.driver.$('[data-test-editor-title-input]');
    return await element.setValue(posttitle);
});

When('I enter body {kraken-string}', async function (postbody) {
    let element = await this.driver.$('[data-koenig-dnd-droppable]');
    return await element.setValue(postbody);
});

When('I enter tag name {kraken-string}', async function (tagname) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(tagname);
});

When('I enter tag color {kraken-string}', async function (tagcolor) {
    let element = await this.driver.$('input[name="accent-color"]');
    return await element.setValue(tagcolor);
});

When('I enter tag description {kraken-string}', async function (tagdescription) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(tagdescription);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

When('I click posts', async function() {
    let element = await this.driver.$('[data-test-new-post-button]');
    return await element.click();
})

When('I click write post', async function() {
    let element = await this.driver.$('[data-koenig-dnd-droppable]');
    return await element.click();
})

When('I click publish', async function() {
    let element = await this.driver.$('[data-test-button]');
    return await element.click();
})

When('I click tags', async function() {
    let element = await this.driver.$('#ember2177');
    return await element.click();
})

When('I click save tag', async function() {
    let element = await this.driver.$('[data-test-button]');
    return await element.click();
})

When('I click pages', async function() {
    let element = await this.driver.$('[href="#/pages/"]');
    return await element.click();
})

When('I click newPage', async function() {
    let element = await this.driver.$('[href="#/editor/page/"]');
    return await element.click();
})

When('I enter title page {kraken-string}', async function (text) {
    let element = await this.driver.$('[placeholder="Page title"]');
    return await element.setValue(text);
})

When('I click away', async function() {
    let element = await this.driver.$('[title="Settings"]');
    return await element.click();
})


When('I click publish page', async function() {
    let element = await this.driver.$('[data-test-button="publish-flow"]');
    return await element.click();
})

When('I click continue', async function() {
    let element = await this.driver.$('[data-test-button="continue"]');
    return await element.click();
})
When('I click confirm-continue', async function() {
    let element = await this.driver.$('[data-test-button="confirm-publish"]');
    return await element.click();
})

When('I click close-publish', async function() {
    let element = await this.driver.$('[data-test-button="close-publish-flow"]');
    return await element.click();
})

When('I enter body page {kraken-string}', async function (text) {
    let element = await this.driver.$('[data-placeholder="Begin writing your page..."]');
    return await element.setValue(text);
})

When('I enter url {kraken-string}', async function (text) {
    let element = await this.driver.$('#url');
    return await element.setValue(text);
})

// TERMINA FUNCIONALIDAD 3 HE INICIAR FUNCIONALIDAD 5

When('I click iconoPersonal', async function() {
    let element = await this.driver.$('[class="gh-user-avatar relative"]');
    return await element.click();
})

When('I click your profile', async function () {
    let element = await this.driver.$('[data-test-nav="user-profile"]');
    return await element.click();
})

When('I enter name actualizado {kraken-string}', async function (text) {
    let element = await this.driver.$('#user-name');
    return await element.setValue(text);
})


When('I click save', async function () {
    let element = await this.driver.$('[data-test-save-button]');
    return await element.click();
})

When('I enter new correo {kraken-string}', async function(text) {
    let element = await this.driver.$('#user-email');
    return await element.setValue(text);
})

When('I enter new slug {kraken-string}', async function(text) {
    let element = await this.driver.$('#user-slug');
    return await element.setValue(text);
})

