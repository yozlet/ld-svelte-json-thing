import * as LaunchDarkly from 'launchdarkly-js-client-sdk';

class LDClientArray extends Array {
  constructor(client_id, default_user) {
    super();
    this.client_id = client_id;
    this.default_user = default_user;
  }

  async init(user_overlay) {
    this[0] = await this.newClient(user_overlay);
  }

  async newClient(user_overlay) {
    let user = { ...this.default_user, ...user_overlay };
    console.log('Init with user ', user);
    let client = LaunchDarkly.initialize(this.client_id, user);
    await client.waitUntilReady();
    return client;
  }
}

export default LDClientArray;
