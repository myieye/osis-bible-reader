import { OsisBibleReader } from '../main/index';

describe('OsisBibleReader', () => {

    let bibleReader: OsisBibleReader;

    beforeEach(() => {
        bibleReader = new OsisBibleReader();
    });

    it('looks up single verses', () => {
        console.log(bibleReader.parseReference('Mark 10:5'));
    });
});