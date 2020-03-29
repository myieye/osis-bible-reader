import { bcv_parser } from "bible-passage-reference-parser/js/en_bcv_parser";

export class OsisBibleReader {
    private parser = new bcv_parser();

    parseReference(reference: string): string {
        return this.parser.parse(reference).osis();
    }
}