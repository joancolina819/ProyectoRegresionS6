const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});

When('I enter post title {kraken-string}', async function (posttitle) {
    let element = await this.driver.$('[placeholder="Post Title"]');
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
    let element = await this.driver.$('#ember12');
    return await element.click();
})

When('I click posts', async function() {
    let element = await this.driver.$('[href="#/editor/post/"]');
    return await element.click();
})

When('I click write post', async function() {
    let element = await this.driver.$('[data-koenig-dnd-droppable]');
    return await element.click();
})

When('I open publish', async function() {
    let element = await this.driver.$('[class="gh-publishmenu ember-view"]');
    return await element.click();
})

When('I click publish', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
    return await element.click();
})

When('I click tags', async function() {
    let element = await this.driver.$('#ember2177');
    return await element.click();
})

When('I click save tag', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]');
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
    let element = await this.driver.$('[placeholder="Page Title"]');
    return await element.setValue(text);
})

When('I click open options', async function() {
    let element = await this.driver.$('[title="Settings"]');
    return await element.click();
})
When('I click close options', async function() {
    let element = await this.driver.$('[aria-label="Close"]');
    return await element.click();
})

When('I enter body page {kraken-string}', async function (text) {
    let element = await this.driver.$('[data-placeholder="Begin writing your page..."]');
    return await element.setValue(text);
})

When('I enter url {kraken-string}', async function (text) {
    let element = await this.driver.$('[name="post-setting-slug"]');
    return await element.setValue(text);
})

// TERMINA FUNCIONALIDAD 3 HE INICIAR FUNCIONALIDAD 5

When('I click iconoPersonal', async function() {
    let element = await this.driver.$('[class="gh-user-avatar relative"]');
    return await element.click();
})
When('I click your profile', async function () {
    let element = await this.driver.$('[d="M12 24c-2.677 0-5.211-.868-7.332-2.51a.507.507 0 01-.11-.082l-.016-.017C1.655 19.094 0 15.674 0 12 0 5.383 5.383 0 12 0s12 5.383 12 12c0 3.674-1.655 7.094-4.543 9.391l-.015.016c-.043.043-.087.069-.112.084A11.868 11.868 0 0112 24zm-5.716-3.199A10.408 10.408 0 0012 22.5a10.41 10.41 0 005.717-1.699 8.966 8.966 0 00-5.716-2.045 8.965 8.965 0 00-5.717 2.045zM12 1.5C6.21 1.5 1.5 6.21 1.5 12c0 3.023 1.294 5.875 3.562 7.874A10.449 10.449 0 0112 17.257c2.573 0 5.023.927 6.938 2.616 2.268-2 3.562-4.851 3.562-7.874C22.5 6.21 17.79 1.5 12 1.5z"]');
    return await element.click();
})

When('I enter name actualizado {kraken-string}', async function (text) {
    let element = await this.driver.$('#user-name');
    return await element.setValue(text);
})

When('I click save', async function () {
    let element = await this.driver.$('[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]');
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

