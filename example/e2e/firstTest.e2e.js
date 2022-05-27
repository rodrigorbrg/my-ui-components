describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('Example Screen'))).toExist();
  });

  it('should click button on screen', async () => {
    await element(by.text('Button 1')).tap();
  });
});
