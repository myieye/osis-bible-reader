declare module 'bible-passage-reference-parser/js/en_bcv_parser' {
    export class bcv_parser {
        parse(reference: string): bcv_parser;
        osis(): string;
    }
}