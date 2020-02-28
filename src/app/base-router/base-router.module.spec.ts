import { BaseRouterModule } from './base-router.module';

describe('BaseRouterModule', () => {
  let baseRouterModule: BaseRouterModule;

  beforeEach(() => {
    baseRouterModule = new BaseRouterModule();
  });

  it('should create an instance', () => {
    expect(baseRouterModule).toBeTruthy();
  });
});
