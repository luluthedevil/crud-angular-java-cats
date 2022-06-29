import { PersonalityPipe } from './personality.pipe';

describe('PersonalityPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonalityPipe();
    expect(pipe).toBeTruthy();
  });
});
